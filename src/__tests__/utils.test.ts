import {getMessage, Event} from '../utils';

describe('utils', () => {
  describe('utils#getMessage()', () => {
    it('should return a message', () => {
      const message = getMessage();
      expect(message).toEqual('message 1');
    });
  });
});
