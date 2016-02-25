import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    toggleTrack() {
      this.sendAction('action', !this.get('isToggled'));
    }
  }
});
