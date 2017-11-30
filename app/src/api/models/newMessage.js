/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * @summary NewMessage
  *
 */
class NewMessage {
  /**
   * Create a NewMessage.
   * @member {number} [timeToLive]
   * @member {object} content
   * @member {string} [content.subject]
   * @member {string} [content.markdown]
   * @member {object} [defaultAddresses]
   * @member {string} [defaultAddresses.email]
   */
  constructor() {
  }

  /**
   * Defines the metadata of NewMessage
   *
   * @returns {object} metadata of NewMessage
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'NewMessage',
      type: {
        name: 'Composite',
        className: 'NewMessage',
        modelProperties: {
          timeToLive: {
            required: false,
            serializedName: 'time_to_live',
            type: {
              name: 'Number'
            }
          },
          content: {
            required: true,
            serializedName: 'content',
            type: {
              name: 'Composite',
              className: 'MessageContent'
            }
          },
          defaultAddresses: {
            required: false,
            serializedName: 'default_addresses',
            type: {
              name: 'Composite',
              className: 'NewMessageDefaultAddresses'
            }
          }
        }
      }
    };
  }
}

module.exports = NewMessage;
