/**
 * Properties
 * All HubSpot objects store data in default and custom properties. These endpoints provide access to read and modify object properties in HubSpot.
 *
 * OpenAPI spec version: v3
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 3.3.4
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Properties) {
      root.Properties = {};
    }
    root.Properties.Option = factory(root.Properties.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The Option model module.
   * @module model/Option
   * @version v3
   */

  /**
   * Constructs a new <code>Option</code>.
   * @alias module:model/Option
   * @class
   * @param label {String} A human-readable option label that will be shown in HubSpot.
   * @param value {String} The internal value of the option, which must be used when setting the property value through the API.
   * @param hidden {Boolean} Hidden options will not be displayed in HubSpot.
   */
  var exports = function(label, value, hidden) {
    var _this = this;

    _this['label'] = label;
    _this['value'] = value;
    _this['hidden'] = hidden;
  };

  /**
   * Constructs a <code>Option</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Option} obj Optional instance to populate.
   * @return {module:model/Option} The populated <code>Option</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('label')) {
        obj['label'] = ApiClient.convertToType(data['label'], 'String');
      }
      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('displayOrder')) {
        obj['displayOrder'] = ApiClient.convertToType(data['displayOrder'], 'Number');
      }
      if (data.hasOwnProperty('hidden')) {
        obj['hidden'] = ApiClient.convertToType(data['hidden'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * A human-readable option label that will be shown in HubSpot.
   * @member {String} label
   */
  exports.prototype['label'] = undefined;
  /**
   * The internal value of the option, which must be used when setting the property value through the API.
   * @member {String} value
   */
  exports.prototype['value'] = undefined;
  /**
   * A description of the option.
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * Options are displayed in order starting with the lowest positive integer value. Values of -1 will cause the option to be displayed after any positive values.
   * @member {Number} displayOrder
   */
  exports.prototype['displayOrder'] = undefined;
  /**
   * Hidden options will not be displayed in HubSpot.
   * @member {Boolean} hidden
   */
  exports.prototype['hidden'] = undefined;



  return exports;
}));

