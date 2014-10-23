import Ember from 'ember';

export function formatDuration(duration) {
  var minutes = Math.floor(duration / 60);
  var seconds = duration % 60;
  var formattedSeconds = (seconds < 10) ? "0" + seconds : seconds;

  return `${minutes}:${formattedSeconds}`;
}

export default Ember.Handlebars.makeBoundHelper(formatDuration);
