import { Event, Listeners, Listener, EventBus } from './EventBus';
import { printError } from './utils';

enum EventType {
  ready = 'READY',
  timeChanged = 'TIME_CHANGED',
  sourceLoaded = 'SOURCE_LOADED',
  sourceUnloaded = 'SOURCE_UNLOADED',
  pause = 'PAUSE',
  playbackFinished = 'PLAYBACK_FINISHED',
  error = 'ERROR',
}
type TypeForEventType = keyof typeof EventType;

class Player {
  private eventBus = new EventBus();
  private videoElementId!: string;
  private ready = false;
  private loaded = false;
  private sourceLoaded = false;

  constructor(videoElementId: string) {
    this.videoElementId = videoElementId;
    //document.getElementById(this.videoElementId);
    this.initializeEventTypesAndSubscribers();
    // ... "ready" == player is loaded?
    this.eventBus.defineAndDispatchEvent(EventType.ready, '"player ready"');
  }
  private initializeEventTypesAndSubscribers() {
    this.initializeEventTypes();
    this.initializeEventSubscribers();
  }
  private initializeEventTypes() {
    for (const value of Object.values(EventType))
      this.eventBus.addEventType(value);
  }
  private initializeEventSubscribers() {
    this.eventBus.addListener(EventType.ready, () => (this.ready = true));
  }
  play() {
    const videoElement = document.getElementById(
      this.videoElementId,
    ) as HTMLVideoElement;
    videoElement.play().catch(printError);
  }
  pause() {
    const videoElement = document.getElementById(
      this.videoElementId,
    ) as HTMLVideoElement;
    videoElement.pause();
    this.eventBus.defineAndDispatchEvent(EventType.pause, '"player paused"');
  }

  getDuration() {
    console.log('[info] player.getDuration(): TODO');
  }

  load(src: string) {
    // supposed that it is loaded when the first
    //   segemnt is downloaded
    fetch(src)
      .then((res) => res.text())
      // TODO: how to bind but leave first variable unbound?
      //  defineAndSendEvent.bind(this, arg2 = text)
      .then((text) =>
        this.eventBus.defineAndDispatchEvent(EventType.ready, text),
      )
      .catch(printError);
  }

  unload() {
    console.log('[info] player.unload(): TODO');
  }

  // TODO: resove type conflict
  //on(type: TypeForEventType, subscriber: Listener)
  //
  on(type: string, subscriber: Listener) {
    this.eventBus.addListener(type, subscriber);
  }

  off() {
    console.log('[info] player.off(): TODO');
  }

  isPlaying() {
    const videoElement = document.getElementById(
      this.videoElementId,
    ) as HTMLVideoElement;
    return !this.isPaused();
  }

  isPaused(): boolean {
    const videoElement = document.getElementById(
      this.videoElementId,
    ) as HTMLVideoElement;
    return videoElement.paused;
  }

  isReady(event: Event): boolean {
    return this.ready;
  }

  // this is if the source is loaded?
  isLoaded() {
    return this.sourceLoaded;
  }
}

export { Player, TypeForEventType, EventType };
