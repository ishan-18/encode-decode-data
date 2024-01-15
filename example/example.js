import { encodeData, decodeData, encodeDataStream, decodeDataStream, EncodingScheme } from './app';
import { createReadStream, createWriteStream } from 'fs';

const originalData = 'Hello, world!';

const base64EncodedData = encodeData(originalData, EncodingScheme.BASE64);
console.log("Base 64:", base64EncodedData);

const hexEncodedData = encodeData(originalData, EncodingScheme.HEX);
console.log("Hex:", hexEncodedData);

const utf8EncodedData = encodeData(originalData, EncodingScheme.UTF8);
console.log("Utf-8:", utf8EncodedData);

const asciiEncodedData = encodeData(originalData, EncodingScheme.ASCII);
console.log("ASCII:", asciiEncodedData);

const latin1EncodedData = encodeData(originalData, EncodingScheme.LATIN1);
console.log("Latin1:", latin1EncodedData);

const ucs2EncodedData = encodeData(originalData, EncodingScheme.UCS2);
console.log("UCS2:", ucs2EncodedData);

const utf16leEncodedData = encodeData(originalData, EncodingScheme.UTF16LE);
console.log("UTF-16:", utf16leEncodedData);

const binaryEncodedData = encodeData(originalData, EncodingScheme.BINARY);
console.log("Binary:", binaryEncodedData);

const decodedData = decodeData(base64EncodedData, EncodingScheme.BASE64);
console.log("Base 64:", decodedData);

const inputFilePath = './encode.txt';
const outputFilePath = './decode.txt';

const readStream = createReadStream(inputFilePath);
const writeStream = createWriteStream(outputFilePath);

const data1 = decodeDataStream(readStream, writeStream, EncodingScheme.BASE64);
console.log(data1)

