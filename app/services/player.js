import Ember from 'ember';
var run = Ember.run;
var on = Ember.on;

export default Ember.Service.extend({
  isPlaying: false,
  audioElement: null,

  setupAudioElement: on('init', function() {
    var el = document.createElement('audio');
    el.addEventListener('play', run.bind(this, 'didStartPlaying'));
    el.addEventListener('pause', run.bind(this, 'didPause'));
    this.set('audioElement', el);
  }),

  play(song) {
    this.set('audioElement.src', song.get('url'));
    this.get('audioElement').play();
  },

  pause() {
    this.get('audioElement').pause();
  },

  didStartPlaying() {
    this.set('isPlaying', true);
  },

  didPause() {
    this.set('isPlaying', false);
  },

  willDestroy() {
    this.get('audioElement').pause();
    this.set('audioElement.src', '');
  }
});
