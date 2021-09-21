import {Event, Listeners, EventBus} from "../EventBus";

describe("EventBus", () => {
  const eventBus = new EventBus();
  const PlayerLoadedEventType = "PLAYER_LOADED";
  describe("EventBus#addEventType", () => {
    eventBus.addEventType(PlayerLoadedEventType);
    const eventTypes = eventBus.getEventTypes();
    const expected = [PlayerLoadedEventType];
    it("should add a new event type", () => {
      expect(eventTypes)
        .toEqual(expect.arrayContaining(expected));
    });
  });
  let dispatchedFlag = false;
  const onLoaded = function() { dispatchedFlag = true };
  eventBus.addListener(PlayerLoadedEventType, onLoaded);
  describe("EventBus#addEventListener", () => {
    const loadedSubscribers =
      eventBus.getListenersByEventType(PlayerLoadedEventType);
    const expected = [onLoaded];
    it("should add a new subscriber", () => {
      expect(loadedSubscribers)
        .toEqual(expect.arrayContaining(expected));
    });
  });
  describe("EventBus#dispatchEvent", () => {
    const event: Event = {
      "type": PlayerLoadedEventType,
      "message": '{"key1": "test message"}'
    };
    eventBus.dispatchEvent(event);
    const expected = true;
    it("should dispatch event to subscriber", () => {
      expect(dispatchedFlag).toBeTruthy();
    });
  });
  describe("EventBus#removeEventListener", () => {
    eventBus.removeListener(PlayerLoadedEventType, onLoaded);
    const loadedSubscribers =
      eventBus.getListenersByEventType(PlayerLoadedEventType);
    const expected = [onLoaded];
    it("should remove the subscriber", () => {
      expect(loadedSubscribers)
        .toEqual(expect.not.arrayContaining(expected));
    });
  });
});
