/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
*/

import { ServiceClientOptions, RequestOptions, ServiceCallback } from 'ms-rest';
import * as models from '../models';


/**
 * @class
 * UsageMetrics
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the InsightsClient.
 */
export interface UsageMetrics {

    /**
     * The List operation lists the usage metrics for the resource.
     *
     * @param {string} resourceUri The identifier of the resource.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {string} [options.filter] The filter to apply on the operation.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    list(resourceUri: string, options: { filter? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.UsageMetricCollection>): void;
    list(resourceUri: string, callback: ServiceCallback<models.UsageMetricCollection>): void;
}

/**
 * @class
 * EventCategories
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the InsightsClient.
 */
export interface EventCategories {

    /**
     * The list of event categories.
     *
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    list(options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.EventCategoryCollection>): void;
    list(callback: ServiceCallback<models.EventCategoryCollection>): void;
}

/**
 * @class
 * Events
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the InsightsClient.
 */
export interface Events {

    /**
     * Provides the list of events.
     *
     * @param {object} [options] Optional Parameters.
     * 
     * @param {string} [options.filter] The filter to apply on the operation. For
     * more information please see
     * https://msdn.microsoft.com/en-us/library/azure/dn931934.aspx
     * 
     * @param {string} [options.select] The comma separated list of property names
     * to be returned. Possible values are: authorization, channels, claims,
     * correlationId, description, eventDataId, eventName, eventTimestamp,
     * httpRequest, level, operationId, operationName, properties,
     * resourceGroupName, resourceProviderName, resourceId, status,
     * submissionTimestamp, subStatus, subscriptionId
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    list(options: { filter? : string, select? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.EventDataCollection>): void;
    list(callback: ServiceCallback<models.EventDataCollection>): void;

    /**
     * Provides the list of events.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    listNext(nextPageLink: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.EventDataCollection>): void;
    listNext(nextPageLink: string, callback: ServiceCallback<models.EventDataCollection>): void;
}

/**
 * @class
 * TenantEvents
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the InsightsClient.
 */
export interface TenantEvents {

    /**
     * Provides the list of tenant events.
     *
     * @param {object} [options] Optional Parameters.
     * 
     * @param {string} [options.filter] The filter to apply on the operation. For
     * more information please see
     * https://msdn.microsoft.com/en-us/library/azure/dn931934.aspx
     * 
     * @param {string} [options.select] The comma separated list of property names
     * to be returned. Possible values are: authorization, channels, claims,
     * correlationId, description, eventDataId, eventName, eventTimestamp,
     * httpRequest, level, operationId, operationName, properties,
     * resourceGroupName, resourceProviderName, resourceId, status,
     * submissionTimestamp, subStatus, subscriptionId
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    list(options: { filter? : string, select? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.EventDataCollection>): void;
    list(callback: ServiceCallback<models.EventDataCollection>): void;

    /**
     * Provides the list of tenant events.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    listNext(nextPageLink: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.EventDataCollection>): void;
    listNext(nextPageLink: string, callback: ServiceCallback<models.EventDataCollection>): void;
}

/**
 * @class
 * MetricDefinitions
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the InsightsClient.
 */
export interface MetricDefinitions {

    /**
     * Lists the metric definitions for the resource.
     *
     * @param {string} resourceUri The identifier of the resource.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {string} [options.filter] The filter to apply on the operation. For
     * more information please see
     * https://msdn.microsoft.com/en-us/library/azure/dn931934.aspx
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    list(resourceUri: string, options: { filter? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.MetricDefinitionCollection>): void;
    list(resourceUri: string, callback: ServiceCallback<models.MetricDefinitionCollection>): void;
}

/**
 * @class
 * Metrics
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the InsightsClient.
 */
export interface Metrics {

    /**
     * Lists the metric values for a resource.
     *
     * @param {string} resourceUri The identifier of the resource.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {string} [options.filter] The filter to apply on the operation. For
     * more information please see
     * https://msdn.microsoft.com/en-us/library/azure/dn931934.aspx
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    list(resourceUri: string, options: { filter? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.MetricCollection>): void;
    list(resourceUri: string, callback: ServiceCallback<models.MetricCollection>): void;
}