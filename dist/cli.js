#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const fs_1 = require("fs");
const app_1 = require("./app");
const program = new commander_1.Command();
program
    .version('1.0.0')
    .description('A utility for encoding and decoding data.');
program
    .command('enc <data>')
    .option('-s, --scheme <scheme>', 'Encoding scheme', app_1.EncodingScheme.BASE64)
    .description('Encode data')
    .action((data, options) => {
    const encodedData = (0, app_1.encodeData)(data, options.scheme);
    console.log(encodedData);
});
program
    .command('dec <encodedData>')
    .option('-s, --scheme <scheme>', 'Decoding scheme', app_1.EncodingScheme.BASE64)
    .description('Decode data')
    .action((encodedData, options) => {
    const decodedData = (0, app_1.decodeData)(encodedData, options.scheme);
    console.log(decodedData);
});
program
    .command('enc-str <inputFile> <outputFile>')
    .option('-s, --scheme <scheme>', 'Encoding scheme', app_1.EncodingScheme.BASE64)
    .description('Encode data from a file using streams')
    .action((inputFile, outputFile, options) => {
    const readStream = (0, fs_1.createReadStream)(inputFile);
    const writeStream = (0, fs_1.createWriteStream)(outputFile);
    (0, app_1.encodeDataStream)(readStream, writeStream, options.scheme);
});
program
    .command('dec-str <inputFile> <outputFile>')
    .option('-s, --scheme <scheme>', 'Decoding scheme', app_1.EncodingScheme.BASE64)
    .description('Decode data from a file using streams')
    .action((inputFile, outputFile, options) => {
    const readStream = (0, fs_1.createReadStream)(inputFile);
    const writeStream = (0, fs_1.createWriteStream)(outputFile);
    (0, app_1.decodeDataStream)(readStream, writeStream, options.scheme);
});
program.parse(process.argv);
