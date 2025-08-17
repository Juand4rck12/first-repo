// Using fs.promises (Node.js 10.0.0+)
import { promises as fs } from 'fs';

async function readFileExample() {
    try {
        const data = await fs.readFile('text.txt', 'utf8');
        console.log('File content:', data);
    } catch (err) {
        console.error('Error reading file:', err);
    }
}

readFileExample();