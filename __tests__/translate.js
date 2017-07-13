const translate = require('../translate');

describe('translate.js', () => {
  describe('translate()', () => {
    it ('can traslate emoji', () => {
      expect(translate.translate('unicorns!!!')).toEqual('🦄!!! ');
    });
  });
});