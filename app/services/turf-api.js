/* global turf */
import Ember from 'ember';

export default Ember.Service.extend({

  calculateDistanceInMetres(geojson) {
    return Math.round(turf.lineDistance(geojson, "kilometers") * 1000 * 100) / 100;
  },

  calculateDistanceInKilometres(geojson) {
    return Math.round(turf.lineDistance(geojson, "kilometers") * 100) / 100;
  }
  
});
