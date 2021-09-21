interface Event {
  readonly type: string;
  readonly message: string;
}

type Listener = (event: Event) => void;

class Listeners {
  private listeners: { [key: string]: Listener[] };
  constructor() {
    this.listeners = {};
  }

  getListenersByEventType(type: string): Listener[] {
    return this.listeners[type];
  }

  addListener(type: string, newListener: Listener): void {
    this.getListenersByEventType(type).push(newListener);
  }

  removeListener(type: string, targetListener: Listener): void {
    const listenersOfEventType: Listener[] = this.listeners[type];
    this.listeners[type] = listenersOfEventType.filter(
      (listener) => listener !== targetListener,
    );
  }

  getEventTypes(): string[] {
    return Object.keys(this.listeners);
  }

  addEventType(type: string): void {
    if (type in this.listeners) throw `[!] event type ${type} already exists`;
    this.listeners[type] = [];
  }

  removeEventTypeAndListeners(type: string): void {
    // TODO
  }
}

class EventBus extends Listeners {
  dispatchEvent(event: Event): void {
    const subscribers: Listener[] = this.getListenersByEventType(event.type);
    subscribers.forEach((subscriber) => subscriber(event));
  }

  defineAndDispatchEvent(eventType: string, message: string): void {
    this.dispatchEvent({ type: eventType, message: message });
  }
}

export { Event, Listeners, Listener, EventBus };
