/* global mapboxgl */
import Ember from 'ember';

export default Ember.Service.extend({

  addDrawControlToMap(map) {
    var drawObj = mapboxgl.Draw({
      controls: {
        line: true,
      },
      styles: {
        'gl-draw-line': {
          'paint': {
            'line-width': 4,
            'line-color': "#FF71B2"
          }
        }
      }
    });
    map.addControl(drawObj);

    return drawObj;
  },

  startDrawingLine(drawObj) {
    drawObj.startDrawing(drawObj.types.LINE);
  },

  getCurrentDrawing(drawObj) {
    let lastFeature = drawObj.getAll().features.length - 1;
    return drawObj.getAll().features[lastFeature];
  }
  
  
});
