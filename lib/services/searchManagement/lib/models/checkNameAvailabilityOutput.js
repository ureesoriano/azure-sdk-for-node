/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Output of check name availability API.
 *
 */
class CheckNameAvailabilityOutput {
  /**
   * Create a CheckNameAvailabilityOutput.
   * @member {boolean} [isNameAvailable] A value indicating whether the name is
   * available.
   * @member {string} [reason] The reason why the name is not available.
   * 'Invalid' indicates the name provided does not match the naming
   * requirements (incorrect length, unsupported characters, etc.).
   * 'AlreadyExists' indicates that the name is already in use and is therefore
   * unavailable. Possible values include: 'Invalid', 'AlreadyExists'
   * @member {string} [message] A message that explains why the name is invalid
   * and provides resource naming requirements. Available only if 'Invalid' is
   * returned in the 'reason' property.
   */
  constructor() {
  }

  /**
   * Defines the metadata of CheckNameAvailabilityOutput
   *
   * @returns {object} metadata of CheckNameAvailabilityOutput
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'CheckNameAvailabilityOutput',
      type: {
        name: 'Composite',
        className: 'CheckNameAvailabilityOutput',
        modelProperties: {
          isNameAvailable: {
            required: false,
            readOnly: true,
            serializedName: 'nameAvailable',
            type: {
              name: 'Boolean'
            }
          },
          reason: {
            required: false,
            readOnly: true,
            serializedName: 'reason',
            type: {
              name: 'String'
            }
          },
          message: {
            required: false,
            readOnly: true,
            serializedName: 'message',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = CheckNameAvailabilityOutput;