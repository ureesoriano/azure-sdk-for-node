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
 * Information about a partition of a stateless Service Fabric service.
 *
 * @extends models['ServicePartitionInfo']
 */
class StatelessServicePartitionInfo extends models['ServicePartitionInfo'] {
  /**
   * Create a StatelessServicePartitionInfo.
   * @member {number} [instanceCount] Number of instances of this partition.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of StatelessServicePartitionInfo
   *
   * @returns {object} metadata of StatelessServicePartitionInfo
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Stateless',
      type: {
        name: 'Composite',
        className: 'StatelessServicePartitionInfo',
        modelProperties: {
          healthState: {
            required: false,
            serializedName: 'HealthState',
            type: {
              name: 'String'
            }
          },
          partitionStatus: {
            required: false,
            serializedName: 'PartitionStatus',
            type: {
              name: 'String'
            }
          },
          partitionInformation: {
            required: false,
            serializedName: 'PartitionInformation',
            type: {
              name: 'Composite',
              polymorphicDiscriminator: {
                serializedName: 'ServicePartitionKind',
                clientName: 'servicePartitionKind'
              },
              uberParent: 'PartitionInformation',
              className: 'PartitionInformation'
            }
          },
          serviceKind: {
            required: true,
            serializedName: 'ServiceKind',
            type: {
              name: 'String'
            }
          },
          instanceCount: {
            required: false,
            serializedName: 'InstanceCount',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = StatelessServicePartitionInfo;