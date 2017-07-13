#!/usr/bin/env node

const commander = require('commander');
const simpleGit = require('simple-git');
const emojiTranslate = require('moji-translate');

const translate = (msg) => {
  if (msg === '') {
    console.error('please provide a commit message');
    process.exit(1);
  }

  return emojiTranslate.translate(msg);
}

// COMMOJI
commander
  .version('0.0.1')
  .option('-m, --message [message]', 'commits a message or single line')
  .parse(process.argv);

// don't allow submission without -m flag & message
if (commander.rawArgs.length < 4) {
  console.error('no command given!');
  process.exit(1);
}

simpleGit().commit(translate(commander.message));