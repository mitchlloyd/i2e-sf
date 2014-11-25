import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr',
  isPlaying: false,

  actions: {
    play() {
      this.set('isPlaying', true);
    },

    pause() {
      this.set('isPlaying', false);
    }
  }
});
