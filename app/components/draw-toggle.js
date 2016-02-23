import Ember from 'ember';

export default Ember.Component.extend({

  drawingClass: Ember.computed("isDrawing", function() {
    return (this.get("isDrawing")) ? "active" : "";
  }),

  actions: {
    toggleDrawing() {
      this.sendAction("action", true);
    }
  }
});
