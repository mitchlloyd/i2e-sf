import Ember from 'ember';
var inject = Ember.inject;
var computed = Ember.computed;

export default Ember.Component.extend({
  tagName: 'tr',
  classNameBindings: ['isCurrentSong'],

  song: null,

  player: inject.service(),

  actions: {
    play() {
      this.get('player').play(this.get('song'));
    },

    pause() {
      this.get('player').pause();
    }
  },

  isCurrentSong: computed('player.song', 'song', function() {
    return this.get('player.song') === this.get('song');
  }),

  isPlaying: computed('isCurrentSong', 'player.isPlaying', function() {
    return this.get('isCurrentSong') && this.get('player.isPlaying');
  })
});
