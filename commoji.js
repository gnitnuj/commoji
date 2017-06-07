#!/usr/bin/env node

const commander = require('commander');
const emojilib = require("emojilib");

const SYMBOLS = '!"#$%&\'()*+,-./:;<=>?@[]^_`{|}~';
const ALLTHEEMOJIS = emojilib.lib;

/**
 * Returns the emoji equivalent of an english word.
 * @param {String} word The word to be translated
 * @returns {String} The emoji character representing this word, or '' if one doesn't exist.
 */
const getMeAnEmoji = (word) => {
  // code below is mostly yoinked from notwaldorf
  // https://github.com/notwaldorf/emoji-translate

  word = word.trim().toLowerCase();

  let countryCodes = ['us','to','so','no','in','be','it'];

  if (!word || word === '' || countryCodes.indexOf(word) != -1)
    return '';

  // Maybe this is a plural word but the word is the singular?
  // Don't do it for two letter words since "as" would become "a" etc.
  let maybeSingular = '';
  if (word.length > 2 && word[word.length - 1] == 's')
    maybeSingular = word.slice(0, word.length - 1);

  // Maybe this is a singular word but the word is the plural?
  // Don't do this for single letter since that will pluralize crazy things.
  let maybePlural = (word.length == 1) ? '' : word + 's';

  let maybeVerbed = (word.indexOf('ing') == -1) ? '' : word.substr(0, word.length-3);

  // Go through all the things and find the first one that matches.
  let useful = [];

  // Go through all the things and find the first one that matches.
  for (let emoji in ALLTHEEMOJIS) {
    let words = ALLTHEEMOJIS[emoji].keywords;
    if (word == ALLTHEEMOJIS[emoji].char ||
        emoji == word || (emoji == word + '_face' ) ||
        emoji == maybeSingular || emoji == maybePlural || emoji == maybeVerbed ||
        (words && words.indexOf(word) >= 0) ||
        (words && words.indexOf(maybeSingular) >= 0) ||
        (words && words.indexOf(maybePlural) >= 0) ||
        (words && words.indexOf(maybeVerbed) >= 0)) {
      useful.push(ALLTHEEMOJIS[emoji].char);
    }
  }

  // Add the word itself if there was no emoji translation.
  if (useful.length === 0)
    useful.push(word);

  return (useful.length === 0) ? '' : useful[0];
};

// COMMOJI
commander
  .version('0.0.1')
  .option('-m, --message [message]', 'commits a message or single line')
  .parse(process.argv);

console.log(getMeAnEmoji(commander.message));