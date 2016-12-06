/**
 * Community.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name: {
      type: 'text',
      required: true
    },
    address: {
      type: 'text',
      required: true
    },
    city_state: {
      type: 'text',
      required: true
    },
    zip: {
      type: 'integer',
      required: true
    },
    date: {
      type: "date",
      required: false
    },
    desc: {
      type: "text",
      required: false
    }
  }
};

