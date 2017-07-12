const commoji = require('../commoji.js');

describe('commoji.js', () => {
  describe('getMeAnEmoji()', () => {
    it ('can traslate emoji', () => {
      console.log(commoji);
      expect(commoji.getMeAnEmoji('unicorn')).toEqual('🦄');
    });
  });

  describe('emojifySentence()', () => {
    it ('can traslate a sentence', () => {
      console.log(commoji);
      expect(commoji.emojifySentence('unicorns are fire')).toEqual('🦄 are 🔥');
    });
  });
});
