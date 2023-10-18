#!/usr/bin/env node

const yargs = require("yargs");

const options = yargs
  .usage("Usage: rodrigo-work [-e, --example] <exemple>")
  .option("e", {
    alias: "example",
    describe: "https://github.com/rodrigo3d/<example>",
    demandOption: true,
  }).argv;

const greeting = `Hello, ${options.example}!`;

console.log(options);

// curl https://codeload.github.com/rodrigo3d/take-screenshot/tar.gz/master | tar -xz --strip=2 take-screenshot-master/public

// npx degit https://github.com/ben-rogerson/twin.examples/storybook-styled-components-typescript folder-name
