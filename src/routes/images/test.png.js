import { createCanvas } from 'canvas';

const width = 1200;
const height = 630;

const canvas = createCanvas(width, height);
const context = canvas.getContext('2d');

context.fillStyle = '#000';
context.fillRect(0, 0, width, height);

context.font = 'bold 70pt Arial';
context.textAlign = 'center';
context.textBaseline = 'top';

const text = 'Hello, World!';

const textWidth = context.measureText(text).width;
context.fillRect(600 - textWidth / 2 - 10, 170 - 5, textWidth + 20, 120);
context.fillStyle = '#fff';
context.fillText(text, 600, 170);

export async function get({ params }) {
	return {
		headers: { 'Content-Type': 'image/png' },
		body: buffer
	};
}

async function generateImage(image) {
	src = await toPng(image);
}
