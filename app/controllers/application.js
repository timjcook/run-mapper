import Ember from 'ember';

export default Ember.Controller.extend({

  isDrawing: false,

  actions: {
    toggleDrawing(isDrawing) {
      this.set("isDrawing", isDrawing);
    },

    createNewRun(feature) {
      console.log(feature);
    }
  }
});
