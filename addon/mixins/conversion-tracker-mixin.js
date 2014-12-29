import Ember from 'ember';

export default Ember.Mixin.create({
  //
  // Send a tracking event to Facebook.
  //
  // Arguments:
  //
  // - +pixelId+ - The ID of the conversion pixel you want to track the event under.
  // - +value+ (optional) - The monetary value of the conversion.
  // - +currency+ (optional) - The currency the value is reported in.
  //
  fbTrackConversion: function(pixelId, value, currency) {
    var customData = {};

    if (!_fbq) { return false; }

    if (!pixelId) {
      throw new Error('A conversion pixel ID must be passed in.');
    } else {
      customData.value = value;
      customData.currency = currency;

      _fbq.push(['track', pixelId, customData]);
    }
  }
});
