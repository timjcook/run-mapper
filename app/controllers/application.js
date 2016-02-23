import Ember from 'ember';

export default Ember.Controller.extend({

  store: Ember.inject.service("store"),

  runs: Ember.computed("store", function() {
    return this.get("store").peekAll("run");
  }),

  isDrawing: false,

  actions: {
    toggleDrawing(isDrawing) {
      this.set("isDrawing", isDrawing);
    },

    createNewRun(feature) {
      console.log(feature);
      let run = this.get("store").createRecord("run", {
        name: "My run",
        feature: feature,
        dateCreated: new Date()
      });

      this.set("runs", this.get("store").peekAll("run"));
      this.set("isDrawing", false);
    }
  }
});
