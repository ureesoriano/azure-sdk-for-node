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
 * This is the base class for operation result responses.
 *
 */
class OperationWorkerResponse {
  /**
   * Create a OperationWorkerResponse.
   * @member {string} [statusCode] HTTP Status Code of the operation. Possible
   * values include: 'Continue', 'SwitchingProtocols', 'OK', 'Created',
   * 'Accepted', 'NonAuthoritativeInformation', 'NoContent', 'ResetContent',
   * 'PartialContent', 'MultipleChoices', 'Ambiguous', 'MovedPermanently',
   * 'Moved', 'Found', 'Redirect', 'SeeOther', 'RedirectMethod', 'NotModified',
   * 'UseProxy', 'Unused', 'TemporaryRedirect', 'RedirectKeepVerb',
   * 'BadRequest', 'Unauthorized', 'PaymentRequired', 'Forbidden', 'NotFound',
   * 'MethodNotAllowed', 'NotAcceptable', 'ProxyAuthenticationRequired',
   * 'RequestTimeout', 'Conflict', 'Gone', 'LengthRequired',
   * 'PreconditionFailed', 'RequestEntityTooLarge', 'RequestUriTooLong',
   * 'UnsupportedMediaType', 'RequestedRangeNotSatisfiable',
   * 'ExpectationFailed', 'UpgradeRequired', 'InternalServerError',
   * 'NotImplemented', 'BadGateway', 'ServiceUnavailable', 'GatewayTimeout',
   * 'HttpVersionNotSupported'
   * @member {object} [headers] HTTP headers associated with this operation.
   */
  constructor() {
  }

  /**
   * Defines the metadata of OperationWorkerResponse
   *
   * @returns {object} metadata of OperationWorkerResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'OperationWorkerResponse',
      type: {
        name: 'Composite',
        className: 'OperationWorkerResponse',
        modelProperties: {
          statusCode: {
            required: false,
            serializedName: 'statusCode',
            type: {
              name: 'Enum',
              allowedValues: [ 'Continue', 'SwitchingProtocols', 'OK', 'Created', 'Accepted', 'NonAuthoritativeInformation', 'NoContent', 'ResetContent', 'PartialContent', 'MultipleChoices', 'Ambiguous', 'MovedPermanently', 'Moved', 'Found', 'Redirect', 'SeeOther', 'RedirectMethod', 'NotModified', 'UseProxy', 'Unused', 'TemporaryRedirect', 'RedirectKeepVerb', 'BadRequest', 'Unauthorized', 'PaymentRequired', 'Forbidden', 'NotFound', 'MethodNotAllowed', 'NotAcceptable', 'ProxyAuthenticationRequired', 'RequestTimeout', 'Conflict', 'Gone', 'LengthRequired', 'PreconditionFailed', 'RequestEntityTooLarge', 'RequestUriTooLong', 'UnsupportedMediaType', 'RequestedRangeNotSatisfiable', 'ExpectationFailed', 'UpgradeRequired', 'InternalServerError', 'NotImplemented', 'BadGateway', 'ServiceUnavailable', 'GatewayTimeout', 'HttpVersionNotSupported' ]
            }
          },
          headers: {
            required: false,
            serializedName: 'Headers',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'ArrayElementType',
                  type: {
                    name: 'Sequence',
                    element: {
                        required: false,
                        serializedName: 'StringElementType',
                        type: {
                          name: 'String'
                        }
                    }
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = OperationWorkerResponse;