import PDFDocument from 'pdfkit';
import { getEntry } from 'astro:content';

export const prerender = true;

// Layout (PDF points, US Letter)
const pageWidth = 612;
const pageHeight = 792;
const left = 73.5;
const right = 538.5;
const contentWidth = right - left;
const continuationTop = 54; // where content resumes on pages after the first
const bottomMargin = 54;
const bodyFontSize = 11;
const lineGap = 2.2;
const lineStep = 15;

// Vertical positions of the first-page header block
const nameY = 66.4;
const contactLineY = 101.35;
const linksLineY = 114.9;
const firstSectionY = 135.15;

// Vertical spacing
const headingStep = 19.5;
const jobGap = 10.5;
const ruleToEducation = 9;
const educationToRule = 18;
const ruleToSkills = 8;

const black = '#000000';
const linkColor = '#0563c1';
const ruleColor = '#777777';

type ResumeDocument = PDFKit.PDFDocument;
type TextSegment = {
	text: string;
	link?: string;
	underline?: boolean;
	color?: string;
};

function centeredText(doc: ResumeDocument, segments: TextSegment[], y: number) {
	const width = segments.reduce((total, segment) => total + doc.widthOfString(segment.text), 0);
	let x = (pageWidth - width) / 2;
	for (const segment of segments) {
		doc.fillColor(segment.color ?? black).text(segment.text, x, y, {
			lineBreak: false,
			link: segment.link,
			underline: segment.underline,
		});
		x += doc.widthOfString(segment.text);
	}
}

const stripProtocol = (url: string) => url.replace(/^https?:\/\/(www\.)?/, '');

export async function GET() {
	const [resumeEntry, paperEntry] = await Promise.all([
		getEntry('resume', 'resume'),
		getEntry('paperResume', 'resume'),
	]);
	if (!resumeEntry) throw new Error('Resume content not found');
	if (!paperEntry) throw new Error('Paper resume content not found');
	const contact = resumeEntry.data;
	const paperResume = paperEntry.data;

	const doc = new PDFDocument({ size: 'LETTER', margins: 0, compress: true });
	const output = new Promise<Buffer>((resolveOutput, reject) => {
		const chunks: Buffer[] = [];
		doc.on('data', (chunk: Buffer) => chunks.push(chunk));
		doc.on('end', () => resolveOutput(Buffer.concat(chunks)));
		doc.on('error', reject);
	});

	doc.font('Helvetica').fontSize(30).fillColor(black).text(contact.name, 0, nameY, {
		width: pageWidth,
		align: 'center',
	});

	doc.font('Helvetica').fontSize(10);
	centeredText(
		doc,
		[
			{ text: `${paperResume.location} • ` },
			{ text: contact.email, link: `mailto:${contact.email}`, underline: true, color: linkColor },
			{ text: ` • ${contact.phoneDisplay}` },
		],
		contactLineY,
	);
	doc.font('Helvetica').fontSize(10.3);
	centeredText(
		doc,
		[
			{ text: `${stripProtocol(contact.socials.github)} • ` },
			{ text: contact.socials.linkedin, link: contact.socials.linkedin, underline: true, color: linkColor },
		],
		linksLineY,
	);

	let y = firstSectionY;

	// Start a new page if the next block of `height` points would run past the bottom margin.
	const ensureSpace = (height: number) => {
		if (y + height > pageHeight - bottomMargin) {
			doc.addPage();
			y = continuationTop;
		}
	};

	// Draws "Label: value" at the current y. With `width`, the value wraps within it.
	const drawLabelValue = (label: string, value: string, width?: number) => {
		const labelText = `${label}:`;
		doc.font('Helvetica-Bold').fontSize(bodyFontSize).fillColor(black).text(labelText, left, y, { lineBreak: false });
		const labelWidth = doc.widthOfString(labelText);
		doc
			.font('Helvetica')
			.fontSize(bodyFontSize)
			.text(` ${value}`, left + labelWidth, y, width ? { width: width - labelWidth, lineGap } : { lineBreak: false });
	};

	// "Organization: role" on the left, bold dates right-aligned, at the current y.
	const drawHeading = (organization: string, role: string, dates: string) => {
		drawLabelValue(organization, role);
		doc.font('Helvetica-Bold').fontSize(bodyFontSize).text(dates, left, y, {
			width: contentWidth - 3.75,
			align: 'right',
			lineBreak: false,
		});
	};

	const drawRule = (ruleY: number) => {
		doc.moveTo(left, ruleY).lineTo(right, ruleY).lineWidth(0.8).strokeColor(ruleColor).stroke();
	};

	const drawBullet = (text: string, nested = false) => {
		const bulletX = nested ? 126 : 90;
		const textX = nested ? 144 : 108;
		const textWidth = right - textX + (nested ? 0 : 2);
		doc.font('Helvetica').fontSize(bodyFontSize).fillColor(black);
		const textHeight = doc.heightOfString(text, { width: textWidth, lineGap });
		ensureSpace(textHeight);
		if (nested) {
			doc.circle(bulletX + 3.3, y + 6.5, 3.3).lineWidth(0.8).strokeColor(black).stroke();
		} else {
			doc.circle(bulletX + 3.3, y + 6.5, 3.3).fillColor(black).fill();
		}
		doc.text(text, textX, y, { width: textWidth, lineGap });
		y += Math.max(lineStep, Math.ceil(textHeight / lineStep) * lineStep);
	};

	for (const job of paperResume.experience) {
		// Keep a heading together with its first bullet.
		ensureSpace(headingStep + lineStep);
		drawHeading(job.organization, job.role, job.dates);
		y += headingStep;
		for (const bullet of job.bullets) {
			drawBullet(bullet.text);
			for (const subBullet of bullet.subBullets ?? []) drawBullet(subBullet, true);
		}
		y += jobGap;
	}

	const { education } = paperResume;
	ensureSpace(2 + ruleToEducation + educationToRule + ruleToSkills + lineStep);
	y += 2;
	drawRule(y);
	y += ruleToEducation;
	drawHeading(education.school, education.degree, education.dates);
	y += educationToRule;
	drawRule(y);
	y += ruleToSkills;

	for (const skill of paperResume.skills) {
		doc.font('Helvetica').fontSize(bodyFontSize);
		const skillHeight = doc.heightOfString(`${skill.label}: ${skill.items}`, { width: contentWidth, lineGap });
		ensureSpace(skillHeight);
		drawLabelValue(skill.label, skill.items, contentWidth);
		y += skillHeight;
	}

	doc.end();
	return new Response(new Uint8Array(await output), {
		headers: {
			'Content-Type': 'application/pdf',
			'Content-Disposition': 'inline; filename="resume.pdf"',
		},
	});
}
