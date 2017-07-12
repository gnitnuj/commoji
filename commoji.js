#!/usr/bin/env node

const commander = require('commander');
const simpleGit = require('simple-git');
const emojiTranslate = require('moji-translate');

// COMMOJI
commander
  .version('0.0.1')
  .option('-m, --message [message]', 'commits a message or single line')
  .parse(process.argv);

simpleGit().commit(emojiTranslate.translate(commander.message));