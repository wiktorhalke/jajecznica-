import { Readable } from 'stream';
import fs from 'fs'

function* randNumGen() {
    for (let i = 0; i < 20; i++) {
        const randNum = Math.floor(Math.random() * (2137 - (-420)) + (-420));
        yield randNum;
    }
}
const timestamp = new Date().getTime();
const fileName = `random-${timestamp}.txt`;
const writable = fs.createWriteStream(fileName);
const readable = Readable.from(randNumGen());

readable.on('data', (chunk) => {
  console.log(chunk);
  writable.write(`${chunk}\n`);
});

readable.on('end', () => {
  writable.end();
});
