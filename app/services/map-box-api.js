/* global mapboxgl */
import Ember from 'ember';

export default Ember.Service.extend({

  accessToken: 'pk.eyJ1IjoibGFuZGNoZWNrZXIiLCJhIjoiY2lndTdibjN3MDA4dzVobTAzNGFuZmYydCJ9.vNV7sVDR2MZK3550A-LY1g',

  createMap() {
    mapboxgl.accessToken = this.get("accessToken");
    var map = new mapboxgl.Map({
      container: 'map', // container id
      style: 'mapbox://styles/mapbox/streets-v8', //stylesheet location
      center: [144.9633200, -37.8140000], // starting position
      zoom: 15 // starting zoom
    }); 

    return map;
  },



});
