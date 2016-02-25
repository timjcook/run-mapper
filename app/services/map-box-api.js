/* global mapboxgl */
import Ember from 'ember';

export default Ember.Service.extend({

  accessToken: 'pk.eyJ1IjoibGFuZGNoZWNrZXIiLCJhIjoiY2lndTdibjN3MDA4dzVobTAzNGFuZmYydCJ9.vNV7sVDR2MZK3550A-LY1g',
  mapboxStyle: 'mapbox://styles/mapbox/streets-v8',

  timiyayAccessToken: 'pk.eyJ1IjoidGltaXlheSIsImEiOiJyVVNaRDhnIn0.hQpzo3e6MOjN8fFu1vuKjg',
  timiyayMapboxStyle: 'mapbox://styles/timiyay/cil1vv3yu00c9avm10ya36cvw',

  createMap() {
    mapboxgl.accessToken = this.get('timiyayAccessToken');

    var map = new mapboxgl.Map({
      container: 'map', // container id
      style: this.get('timiyayMapboxStyle'), //stylesheet location
      center: [144.983596, -37.799707], // starting position
      zoom: 14 // starting zoom
    });

    return map;
  },

  activateTracks(map) {
    map.setLayoutProperty('vic-paths', 'visibility', 'visible');
  },

  deactivateTracks(map) {
    map.setLayoutProperty('vic-paths', 'visibility', 'none');
  }
});
