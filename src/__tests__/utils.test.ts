import {getMessage, Event} from '../utils';

describe('utils', () => {
  describe('utils#getMessage()', () => {
    it('should return a message', () => {
      const message = getMessage();
      expect(message).toEqual('message 1');
    });
  });
  /* at the end, I use Event interface and not a class
  const event: Event = {"type": "EVENT_TYPE_1", message: "abc"};
  describe('utils#Event#accessors', () => {
    it('get and set message', () => {
      const message = "value";
      event.message = message; 
      expect(event.message).toEqual(message);
    });
  });*/
});
