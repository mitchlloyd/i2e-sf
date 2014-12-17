import DS from 'ember-data';
import Ember from 'ember';
var attr = DS.attr;
var belongsTo = DS.belongsTo;
var attr = DS.attr;
var computed = Ember.computed;

export default DS.Model.extend({
  track: attr('number'),
  name: attr('string'),
  duration: attr('number'),
  url: attr('string'),
  album: belongsTo('album'),

  artist: computed.alias('album.artist'),
  artwork: computed.alias('album.artwork')
});
