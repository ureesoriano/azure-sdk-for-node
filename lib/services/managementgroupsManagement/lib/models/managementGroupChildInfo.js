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

const models = require('./index');

/**
 * The child information of a management group.
 *
 */
class ManagementGroupChildInfo {
  /**
   * Create a ManagementGroupChildInfo.
   * @member {string} [childType] The type of child resource. Possible values
   * include: 'ManagementGroup', 'Subscription'
   * @member {string} [childId] The fully qualified ID for the child resource
   * (management group or subscription).  For example,
   * /providers/Microsoft.Management/managementGroups/0000000-0000-0000-0000-000000000000
   * @member {string} [displayName] The friendly name of the child resource.
   * @member {array} [children] The list of children.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ManagementGroupChildInfo
   *
   * @returns {object} metadata of ManagementGroupChildInfo
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ManagementGroupChildInfo',
      type: {
        name: 'Composite',
        className: 'ManagementGroupChildInfo',
        modelProperties: {
          childType: {
            required: false,
            serializedName: 'childType',
            type: {
              name: 'String'
            }
          },
          childId: {
            required: false,
            serializedName: 'childId',
            type: {
              name: 'String'
            }
          },
          displayName: {
            required: false,
            serializedName: 'displayName',
            type: {
              name: 'String'
            }
          },
          children: {
            required: false,
            serializedName: 'children',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ManagementGroupChildInfoElementType',
                  type: {
                    name: 'Composite',
                    className: 'ManagementGroupChildInfo'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = ManagementGroupChildInfo;