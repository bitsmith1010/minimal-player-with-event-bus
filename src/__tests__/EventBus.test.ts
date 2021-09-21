import {Listeners, EventBus} from "../EventBus";

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
  const onLoaded = function() {1};
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
