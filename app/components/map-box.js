/* global FakeXMLHttpRequest */

import Ember from 'ember';

export default Ember.Component.extend({

  /** Services **/

  mapBoxAPI: Ember.inject.service("map-box-api"),
  drawAPI:   Ember.inject.service("draw-api"),

  /** State **/

  map:  null,
  draw: null,

  /** Hooks **/

  didInsertElement() {
    FakeXMLHttpRequest.prototype.withCredentials = false; //fix for corslite.js
    FakeXMLHttpRequest.prototype.onload = function () {}; //fix for FakeXMLHttpRequest (pretender), 

    this.set("map",  this.get("mapBoxAPI").createMap());

    this.get("map").on("load", () => {
      this.set("draw", this.get("drawAPI").addDrawControlToMap(this.get("map")));
    });

    this.get("map").on("draw.set", () => {
      let feature = this.get("drawAPI").getCurrentDrawing(this.get("draw"));
      this.sendAction("createNewRun", feature);
    });
  },

  isDrawingDidChange: Ember.observer("isDrawing", function() {
    if(!!this.get("isDrawing")) {
      console.log(this);
      this.get("drawAPI").startDrawingLine(this.get("draw"));
    }
  }),

});
