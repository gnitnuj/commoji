const emojiTranslate = require('moji-translate');

const translate = (msg) => {
  if (msg === '') {
    console.error('please provide a commit message');
    process.exit(1);
  }

  return emojiTranslate.translate(msg);
};

module.exports.translate = translate;