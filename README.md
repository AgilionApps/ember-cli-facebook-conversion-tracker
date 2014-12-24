# Ember-cli-facebook-conversion-tracker

For more information on Facebook conversion tracking [https://www.facebook.com/help/286208984874814/](view their docs).


## Installation

```
npm install --save-dev ember-cli-facebook-conversion-tracker
```

## Usage

Import the module, for example in a controller:

```
import Ember from 'ember';
import FbTracker from 'ember-cli-facebook-conversion-tracker/mixins/conversion-tracker-mixin';

export default Ember.ObjectController.extend(FbTracker.Mixin, {
  actions: {
    authenticate: function() {
      this.fbTrackConversion('192928883');
    }
  }
}
```

Arguments for `fbTrackConversion` are:
```
//
// fbTrackConversion(<pixel_id>, <value>, <curency>);
//
// - +pixelId+ - The ID of the conversion pixel you want to track the event under.
// - +value+ (optional) - The monetary value of the conversion.
// - +currency+ (optional) - The currency the value is reported in.
//
```

