import Ember from 'ember';
var inject = Ember.inject;

export default Ember.Component.extend({
  tagName: 'tr',
  isPlaying: false,

  player: inject.service(),

  actions: {
    play() {
      this.get('player').play(this.get('song'));
      this.set('isPlaying', true);
    },

    pause() {
      this.get('player').pause();
      this.set('isPlaying', false);
    }
  }
});
