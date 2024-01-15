"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BufferListStream = exports.decodeDataStream = exports.encodeDataStream = exports.decodeData = exports.encodeData = exports.EncodingScheme = void 0;
const stream_1 = require("stream");
var EncodingScheme;
(function (EncodingScheme) {
    EncodingScheme["BASE64"] = "base64";
    EncodingScheme["HEX"] = "hex";
    EncodingScheme["UTF8"] = "utf-8";
    EncodingScheme["ASCII"] = "ascii";
    EncodingScheme["LATIN1"] = "latin1";
    EncodingScheme["UCS2"] = "ucs2";
    EncodingScheme["UTF16LE"] = "utf16le";
    EncodingScheme["BINARY"] = "binary";
})(EncodingScheme || (exports.EncodingScheme = EncodingScheme = {}));
function encodeData(data, scheme = EncodingScheme.BASE64) {
    try {
        return Buffer.from(data).toString(scheme);
    }
    catch (error) {
        throw new Error(`Error encoding data with ${scheme} scheme`);
    }
}
exports.encodeData = encodeData;
function decodeData(encodedData, scheme = EncodingScheme.BASE64) {
    try {
        return Buffer.from(encodedData, scheme).toString('utf-8');
    }
    catch (error) {
        throw new Error(`Error decoding data with ${scheme} scheme. Invalid input`);
    }
}
exports.decodeData = decodeData;
function encodeDataStream(readStream, writeStream, scheme = EncodingScheme.BASE64) {
    readStream.pipe(BufferListStream((err, buffer) => {
        if (err) {
            throw new Error('Error reading stream');
        }
        const encodedData = buffer.toString(scheme);
        writeStream.write(encodedData);
    }));
}
exports.encodeDataStream = encodeDataStream;
function decodeDataStream(readStream, writeStream, scheme = EncodingScheme.BASE64) {
    readStream.pipe(BufferListStream((err, buffer) => {
        if (err) {
            throw new Error('Error reading stream');
        }
        const decodedData = Buffer.from(buffer.toString(), scheme).toString('utf-8');
        writeStream.write(decodedData);
    }));
}
exports.decodeDataStream = decodeDataStream;
function BufferListStream(callback) {
    const chunks = [];
    return new stream_1.Writable({
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
exports.BufferListStream = BufferListStream;
