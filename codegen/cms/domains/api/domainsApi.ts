/**
 * Domains
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import localVarRequest from 'request';
import http from 'http';

/* tslint:disable:no-unused-locals */
import { CollectionResponseWithTotalDomain } from '../model/collectionResponseWithTotalDomain';
import { Domain } from '../model/domain';

import { ObjectSerializer, Authentication, VoidAuth, Interceptor } from '../model/models';
import { HttpBasicAuth, HttpBearerAuth, ApiKeyAuth, OAuth } from '../model/models';

import { HttpError, RequestFile } from './apis';

let defaultBasePath = 'https://api.hubapi.com';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum DomainsApiApiKeys {
    hapikey,
}

export class DomainsApi {
    protected _basePath = defaultBasePath;
    protected _defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'hapikey': new ApiKeyAuth('query', 'hapikey'),
        'oauth2': new OAuth(),
    }

    protected interceptors: Interceptor[] = [];

    constructor(basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    set defaultHeaders(defaultHeaders: any) {
        this._defaultHeaders = defaultHeaders;
    }

    get defaultHeaders() {
        return this._defaultHeaders;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
        this.authentications.default = auth;
    }

    public setApiKey(key: DomainsApiApiKeys, value: string) {
        (this.authentications as any)[DomainsApiApiKeys[key]].apiKey = value;
    }

    set accessToken(token: string) {
        this.authentications.oauth2.accessToken = token;
    }

    public addInterceptor(interceptor: Interceptor) {
        this.interceptors.push(interceptor);
    }

    /**
     * Returns a single domains with the id specified.
     * @summary Get a single domain
     * @param domainId The unique ID of the domain.
     * @param archived Whether to return only results that have been archived.
     */
    public async getById (domainId: string, archived?: boolean, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: Domain;  }> {
        const localVarPath = this.basePath + '/cms/v3/domains/{domainId}'
            .replace('{' + 'domainId' + '}', encodeURIComponent(String(domainId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json', '*/*'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'domainId' is not null or undefined
        if (domainId === null || domainId === undefined) {
            throw new Error('Required parameter domainId was null or undefined when calling getById.');
        }

        if (archived !== undefined) {
            localVarQueryParameters['archived'] = ObjectSerializer.serialize(archived, "boolean");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.hapikey.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.hapikey.applyToRequest(localVarRequestOptions));
        }
        if (this.authentications.oauth2.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.oauth2.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: Domain;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode === 200) {
                            body = ObjectSerializer.deserialize(body, "Domain");
                        }

                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Returns all existing domains that have been created. Results can be limited and filtered by creation or updated date.
     * @summary Get current domains
     * @param createdAt Only return domains created at this date.
     * @param createdAfter Only return domains created after this date.
     * @param createdBefore Only return domains created before this date.
     * @param updatedAt Only return domains updated at this date.
     * @param updatedAfter Only return domains updated after this date.
     * @param updatedBefore Only return domains updated before this date.
     * @param sort 
     * @param properties 
     * @param after The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param before 
     * @param limit Maximum number of results per page.
     * @param archived Whether to return only results that have been archived.
     */
    public async getPage (createdAt?: number, createdAfter?: number, createdBefore?: number, updatedAt?: number, updatedAfter?: number, updatedBefore?: number, sort?: Array<string>, properties?: Array<string>, after?: string, before?: string, limit?: number, archived?: boolean, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: CollectionResponseWithTotalDomain;  }> {
        const localVarPath = this.basePath + '/cms/v3/domains/';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json', '*/*'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        if (createdAt !== undefined) {
            localVarQueryParameters['createdAt'] = ObjectSerializer.serialize(createdAt, "number");
        }

        if (createdAfter !== undefined) {
            localVarQueryParameters['createdAfter'] = ObjectSerializer.serialize(createdAfter, "number");
        }

        if (createdBefore !== undefined) {
            localVarQueryParameters['createdBefore'] = ObjectSerializer.serialize(createdBefore, "number");
        }

        if (updatedAt !== undefined) {
            localVarQueryParameters['updatedAt'] = ObjectSerializer.serialize(updatedAt, "number");
        }

        if (updatedAfter !== undefined) {
            localVarQueryParameters['updatedAfter'] = ObjectSerializer.serialize(updatedAfter, "number");
        }

        if (updatedBefore !== undefined) {
            localVarQueryParameters['updatedBefore'] = ObjectSerializer.serialize(updatedBefore, "number");
        }

        if (sort !== undefined) {
            localVarQueryParameters['sort'] = ObjectSerializer.serialize(sort, "Array<string>");
        }

        if (properties !== undefined) {
            localVarQueryParameters['properties'] = ObjectSerializer.serialize(properties, "Array<string>");
        }

        if (after !== undefined) {
            localVarQueryParameters['after'] = ObjectSerializer.serialize(after, "string");
        }

        if (before !== undefined) {
            localVarQueryParameters['before'] = ObjectSerializer.serialize(before, "string");
        }

        if (limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(limit, "number");
        }

        if (archived !== undefined) {
            localVarQueryParameters['archived'] = ObjectSerializer.serialize(archived, "boolean");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.hapikey.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.hapikey.applyToRequest(localVarRequestOptions));
        }
        if (this.authentications.oauth2.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.oauth2.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: CollectionResponseWithTotalDomain;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode === 200) {
                            body = ObjectSerializer.deserialize(body, "CollectionResponseWithTotalDomain");
                        }

                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
}
