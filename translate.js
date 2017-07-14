const emojiTranslate = require('moji-translate');

/**
 * emojinizes a sentence
 * @param {string} message to be converted
 * @return {string} message with emojis (if matches exist)
 */
const translate = (msg) => {
  if (msg === '') {
    console.error('please provide a commit message');
    process.exit(1);
  }

  return emojiTranslate.translate(msg);
};

module.exports.translate = translate;