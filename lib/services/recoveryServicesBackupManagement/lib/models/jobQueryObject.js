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
 * @class
 * Initializes a new instance of the JobQueryObject class.
 * @constructor
 * The filters to list the jobs.
 *
 * @member {string} [status] Status of the job. Possible values include:
 * 'Invalid', 'InProgress', 'Completed', 'Failed', 'CompletedWithWarnings',
 * 'Cancelled', 'Cancelling'
 *
 * @member {string} [backupManagementType] Type of backup managmenent for the
 * job. Possible values include: 'Invalid', 'AzureIaasVM', 'MAB', 'DPM',
 * 'AzureBackupServer', 'AzureSql'
 *
 * @member {string} [operation] The type of operation. Possible values include:
 * 'Invalid', 'ConfigureBackup', 'Backup', 'Restore', 'DisableBackup',
 * 'DeleteBackupData'
 *
 * @member {string} [jobId] The ID of the job. Each jobID is unique.
 *
 * @member {date} [startTime] The time when the job starts. The value is in
 * UTC.
 *
 * @member {date} [endTime] The time when the job ends. The value is in UTC.
 *
 */
class JobQueryObject {
  constructor() {
  }

  /**
   * Defines the metadata of JobQueryObject
   *
   * @returns {object} metadata of JobQueryObject
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'JobQueryObject',
      type: {
        name: 'Composite',
        className: 'JobQueryObject',
        modelProperties: {
          status: {
            required: false,
            serializedName: 'status',
            type: {
              name: 'Enum',
              allowedValues: [ 'Invalid', 'InProgress', 'Completed', 'Failed', 'CompletedWithWarnings', 'Cancelled', 'Cancelling' ]
            }
          },
          backupManagementType: {
            required: false,
            serializedName: 'backupManagementType',
            type: {
              name: 'Enum',
              allowedValues: [ 'Invalid', 'AzureIaasVM', 'MAB', 'DPM', 'AzureBackupServer', 'AzureSql' ]
            }
          },
          operation: {
            required: false,
            serializedName: 'operation',
            type: {
              name: 'Enum',
              allowedValues: [ 'Invalid', 'ConfigureBackup', 'Backup', 'Restore', 'DisableBackup', 'DeleteBackupData' ]
            }
          },
          jobId: {
            required: false,
            serializedName: 'jobId',
            type: {
              name: 'String'
            }
          },
          startTime: {
            required: false,
            serializedName: 'startTime',
            type: {
              name: 'DateTime'
            }
          },
          endTime: {
            required: false,
            serializedName: 'endTime',
            type: {
              name: 'DateTime'
            }
          }
        }
      }
    };
  }
}

module.exports = JobQueryObject;