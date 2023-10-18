#!/usr/bin/env node

const yargs = require('yargs')

const options = yargs.usage('Usage: --example <name>').option('e', {
  alias: 'example',
  describe: 'Your name',
  type: 'string',
  demandOption: true
}).argv

const greeting = `Hello, ${options.example}!`

console.log(greeting)
