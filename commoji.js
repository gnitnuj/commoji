#!/usr/bin/env node

const commander = require('commander');
const emojis = require("emojilib");

commander
  .version('0.0.1')
  .option('-m, --message [message]', 'commits a message or single line')
  .parse(process.argv);

console.log(commander.message);