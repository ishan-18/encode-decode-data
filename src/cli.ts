#!/usr/bin/env node
import { Command } from 'commander';
import { createReadStream, createWriteStream } from 'fs';
import { encodeData, decodeData, encodeDataStream, decodeDataStream, EncodingScheme } from './app';

const program = new Command();

program
    .version('1.0.0')
    .description('A utility for encoding and decoding data.');

program
    .command('enc <data>')
    .option('-s, --scheme <scheme>', 'Encoding scheme', EncodingScheme.BASE64)
    .description('Encode data')
    .action((data, options) => {
        const encodedData = encodeData(data, options.scheme);
        console.log(encodedData);
    });

program
    .command('dec <encodedData>')
    .option('-s, --scheme <scheme>', 'Decoding scheme', EncodingScheme.BASE64)
    .description('Decode data')
    .action((encodedData, options) => {
        const decodedData = decodeData(encodedData, options.scheme);
        console.log(decodedData);
    });

program
    .command('enc-str <inputFile> <outputFile>')
    .option('-s, --scheme <scheme>', 'Encoding scheme', EncodingScheme.BASE64)
    .description('Encode data from a file using streams')
    .action((inputFile, outputFile, options) => {
        const readStream = createReadStream(inputFile);
        const writeStream = createWriteStream(outputFile);
        encodeDataStream(readStream, writeStream, options.scheme);
    });

program
    .command('dec-str <inputFile> <outputFile>')
    .option('-s, --scheme <scheme>', 'Decoding scheme', EncodingScheme.BASE64)
    .description('Decode data from a file using streams')
    .action((inputFile, outputFile, options) => {
        const readStream = createReadStream(inputFile);
        const writeStream = createWriteStream(outputFile);
        decodeDataStream(readStream, writeStream, options.scheme);
    });

program.parse(process.argv);

