import { Readable, Writable } from 'stream';

export enum EncodingScheme {
    BASE64 = 'base64',
    HEX = 'hex',
    UTF8 = 'utf-8',
    ASCII = 'ascii',
    LATIN1 = 'latin1',
    UCS2 = 'ucs2',
    UTF16LE = 'utf16le',
    BINARY = 'binary',
}

export function encodeData(data: string, scheme: EncodingScheme = EncodingScheme.BASE64): string {
    try {
        return Buffer.from(data).toString(scheme);
    } catch (error) {
        throw new Error(`Error encoding data with ${scheme} scheme`);
    }
}

export function decodeData(encodedData: string, scheme: EncodingScheme = EncodingScheme.BASE64): string {
    try {
        return Buffer.from(encodedData, scheme).toString('utf-8');
    } catch (error) {
        throw new Error(`Error decoding data with ${scheme} scheme. Invalid input`);
    }
}

export function encodeDataStream(readStream: Readable, writeStream: Writable, scheme: EncodingScheme = EncodingScheme.BASE64): void {
    readStream.pipe(BufferListStream((err, buffer) => {
        if (err) {
            throw new Error('Error reading stream');
        }
        const encodedData = buffer.toString(scheme);
        writeStream.write(encodedData);
    }));
}

export function decodeDataStream(readStream: Readable, writeStream: Writable, scheme: EncodingScheme = EncodingScheme.BASE64): void {
    readStream.pipe(BufferListStream((err, buffer) => {
        if (err) {
            throw new Error('Error reading stream');
        }
        const decodedData = Buffer.from(buffer.toString(), scheme).toString('utf-8');
        writeStream.write(decodedData);
    }));
}

export function BufferListStream(callback: (err: Error | null, buffer: Buffer) => void): Writable {
    const chunks: Buffer[] = [];

    return new Writable({
        write(chunk, encoding, done) {
            chunks.push(chunk);
            done();
        },
        final(done) {
            const buffer = Buffer.concat(chunks);
            callback(null, buffer);
            done();
        },
        destroy(error, callback) {
            callback(error);
        },
    });
}
