import { Player, EventType } from './Player';

const player = new Player('video-element-1');

console.log(EventType);

player.on(EventType.ready, () => console.log('ready'));

player.on(EventType.sourceLoaded, (event) => console.log(event));

//player.load(
  'https://bitmovin-a.akamaihd.net/content/MI201109210084_1/mpds/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.mpd',
);
