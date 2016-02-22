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
            'line-width': 4
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
    return drawObj.getAll().features[0];
  }
  
  
});
