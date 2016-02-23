import DS from 'ember-data';

export default DS.Model.extend({

  turfAPI: Ember.inject.service("turf-api"),

  feature: DS.attr(), 
  dateCreated: DS.attr("date"),

  distance: Ember.computed("feature", function() {
    let distance = this.get("turfAPI").calculateDistanceInMetres(this.get("feature"));
    console.log(this.get("feature"));

    if(distance < 1000) {
      return `${distance}m`;
    } else {
      distance = this.get("turfAPI").calculateDistanceInKilometres(this.get("feature"));
      return `${distance}km`;
    }
  })
});
