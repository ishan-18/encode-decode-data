# encode-decode-data

A versatile utility package designed for encoding and decoding data in a multitude of schemes, providing a flexible solution for handling different data formats and representations.

## Overview

Modern applications often require the ability to encode and decode data using various schemes to meet different standards, interface with diverse systems, or optimize data storage and transmission. Your package simplifies this process by offering a set of functions and a command-line interface (CLI) to seamlessly work with different encoding and decoding schemes.

## Features

- **Multiple Encoding Schemes:** Support for popular encoding schemes such as `Base64`, `Hex`, `UTF-8`, `ASCII`, `Latin-1`, `UCS2`, `UTF-16LE`, and `Binary`, allowing users to choose the most suitable encoding for their use cases.

- **CLI Interface:** A user-friendly `command-line interface` providing easy access to encoding and decoding functionality, allowing users to quickly process data from the terminal.

- **Stream Support:** Enable streaming capabilities for efficient processing of large datasets, providing both synchronous and streaming functions to cater to various scenarios.

## Installation

```bash
npm install encode-decode-data
```

# Usage
## CLI Interface

Your package provides a set of commands to encode and decode data interactively from the command line.

### Encode
Encode data using different schemes.
```bash
enc-dec enc "hello,world" -s hex
```

### Decode
Decode data using different schemes.
```bash
enc-dec dec 48656c6c6f2c20776f726c64 -s hex
```

### Encode Stream
Encode data from a file using streams.
```bash
enc-dec encode-stream input.txt output.txt -s base64
```

### Decode Stream
Decode data from a file using streams.
```bash
enc-dec decode-stream input.txt output.txt -s base64
```

Node.js Module

You can also use `encode-decode-data` package programmatically in your Node.js projects.
```javascript
const { encodeData, decodeData, encodeDataStream, decodeDataStream, EncodingScheme } = require('your-package-name');

const originalData = 'Hello, world!';

const base64EncodedData = encodeData(originalData, EncodingScheme.BASE64);
console.log(base64EncodedData);

const decodedData = decodeData(base64EncodedData, EncodingScheme.BASE64);
console.log(decodedData);
```

## API Reference
`encodeData(data: string, scheme?: EncodingScheme): string`
Encode the input data using the specified encoding scheme.
`data`: The input string to be encoded.
`scheme`: (Optional) The encoding scheme to use (default is BASE64).

`decodeData(encodedData: string, scheme?: EncodingScheme): string`
Decode the input data using the specified decoding scheme.
`encodedData`: The encoded string to be decoded.
`scheme`: (Optional) The decoding scheme to use (default is BASE64).

`encodeDataStream(readStream: Readable, writeStream: Writable, scheme?: EncodingScheme): void`
Encode data from a readable stream and write the encoded data to a writable stream.
`readStream`: The readable stream containing the data to be encoded.
`writeStream`: The writable stream where the encoded data will be written.
`scheme`: (Optional) The encoding scheme to use (default is BASE64).

`decodeDataStream(readStream: Readable, writeStream: Writable, scheme?: EncodingScheme): void`
Decode data from a readable stream and write the decoded data to a writable stream.
`readStream`: The readable stream containing the encoded data to be decoded.
`writeStream`: The writable stream where the decoded data will be written.
`scheme`: (Optional) The decoding scheme to use (default is BASE64).

## Contributing
Contributions to `encode-decode-data` are welcome! If you'd like to contribute to this project, please follow these steps:
1. Fork the repository.
2. Create a new branch for your feature or bug fix: `git checkout -b feature/your-feature-name.`
3. Commit your changes: `git commit -m "Add your feature or fix".`
4. Push your branch to your fork: `git push origin feature/your-feature-name.`
5. Create a pull request on the original repository.

Please follow the Code of Conduct and Contributing Guidelines when contributing.

[![Buy Me A Coffee](https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png)](https://www.buymeacoffee.com/ishangawali02)