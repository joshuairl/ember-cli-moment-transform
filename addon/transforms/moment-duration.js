import DS from 'ember-data';
import moment from 'moment';

export default DS.Transform.extend({
  deserialize: function(serialized) {
    if (serialized) {
      let result = moment.duration(serialized);
      if (moment.isDuration(result) && result.isValid()) {
        return result;
      }
      
      return null;
    } else {
      return serialized;
    }
  },

  serialize: function(deserialized) {
    if (moment.isDuration(deserialized)) {
      return deserialized
    } else {
      return null;
    }
  }
});
