import Ember from 'ember';

export default Ember.Component.extend({

  isDrawing: false,

  drawingClass: Ember.computed("isDrawing", function() {
    return (this.get("isDrawing")) ? "active" : "";
  }),

  actions: {
    toggleDrawing() {
      this.toggleProperty("isDrawing"),
      this.sendAction("action", true);
    }
  }
});
