/**
 * SendinBlue API
 * SendinBlue provide a RESTFul API that can be used with any languages. With this API, you will be able to :   - Manage your campaigns and get the statistics   - Manage your contacts   - Send transactional Emails and SMS   - and much more...  You can download our wrappers at https://github.com/orgs/sendinblue  **Possible responses**   | Code | Message |   | :-------------: | ------------- |   | 200  | OK. Successful Request  |   | 201  | OK. Successful Creation |   | 202  | OK. Request accepted |   | 204  | OK. Successful Update/Deletion  |   | 400  | Error. Bad Request  |   | 401  | Error. Authentication Needed  |   | 402  | Error. Not enough credit, plan upgrade needed  |   | 403  | Error. Permission denied  |   | 404  | Error. Object does not exist |   | 405  | Error. Method not allowed  |   | 406  | Error. Not Acceptable  | 
 *
 * The version of the OpenAPI document: 3.0.0
 * Contact: contact@sendinblue.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import localVarRequest = require('request');
import http = require('http');

/* tslint:disable:no-unused-locals */
import { CreateModel } from '../model/createModel';
import { CreateWebhook } from '../model/createWebhook';
import { GetWebhook } from '../model/getWebhook';
import { GetWebhooks } from '../model/getWebhooks';
import { UpdateWebhook } from '../model/updateWebhook';

import { ObjectSerializer, Authentication, VoidAuth, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';

import { HttpError } from './apis';

const defaultBasePath = 'https://api.sendinblue.com/v3';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum WebhooksApiApiKeys {
    apiKey,
    partnerKey,
}

export class WebhooksApi {
    protected _basePath = defaultBasePath;
    protected _defaultHeaders : any = {
        'user-agent': 'sendinblue_clientAPI/v2.2.2/ts-node'
    };
    protected _useQuerystring  = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'apiKey': new ApiKeyAuth('header', 'api-key'),
        'partnerKey': new ApiKeyAuth('header', 'partner-key'),
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
        if (defaultHeaders['user-agent'] && defaultHeaders['user-agent'].substr(0,11).toLowerCase() !== 'sendinblue_') {
            this._defaultHeaders = this._defaultHeaders;
        } else {
            this._defaultHeaders = defaultHeaders;
        }
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

    public setApiKey(key: WebhooksApiApiKeys, value: string) {
        (this.authentications as any)[WebhooksApiApiKeys[key]].apiKey = value;
    }

    public addInterceptor(interceptor: Interceptor) {
        this.interceptors.push(interceptor);
    }

    /**
     * 
     * @summary Create a webhook
     * @param createWebhook Values to create a webhook
     */
    public async createWebhook (createWebhook: CreateWebhook, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: CreateModel;  }> {
        const localVarPath = this.basePath + '/webhooks';
        const localVarQueryParameters: any = {};
        const localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        const localVarFormParams: any = {};

        // verify required parameter 'createWebhook' is not null or undefined
        if (createWebhook === null || createWebhook === undefined) {
            throw new Error('Required parameter createWebhook was null or undefined when calling createWebhook.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        const localVarUseFormData = false;

        const localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(createWebhook, "CreateWebhook")
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.apiKey.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.apiKey.applyToRequest(localVarRequestOptions));
        }
        if (this.authentications.partnerKey.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.partnerKey.applyToRequest(localVarRequestOptions));
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
            return new Promise<{ response: http.IncomingMessage; body: CreateModel;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "CreateModel");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * 
     * @summary Delete a webhook
     * @param webhookId Id of the webhook
     */
    public async deleteWebhook (webhookId: number, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body?: any;  }> {
        const localVarPath = this.basePath + '/webhooks/{webhookId}'
            .replace('{' + 'webhookId' + '}', encodeURIComponent(String(webhookId)));
        const localVarQueryParameters: any = {};
        const localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        const localVarFormParams: any = {};

        // verify required parameter 'webhookId' is not null or undefined
        if (webhookId === null || webhookId === undefined) {
            throw new Error('Required parameter webhookId was null or undefined when calling deleteWebhook.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        const localVarUseFormData = false;

        const localVarRequestOptions: localVarRequest.Options = {
            method: 'DELETE',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.apiKey.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.apiKey.applyToRequest(localVarRequestOptions));
        }
        if (this.authentications.partnerKey.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.partnerKey.applyToRequest(localVarRequestOptions));
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
            return new Promise<{ response: http.IncomingMessage; body?: any;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * 
     * @summary Get a webhook details
     * @param webhookId Id of the webhook
     */
    public async getWebhook (webhookId: number, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: GetWebhook;  }> {
        const localVarPath = this.basePath + '/webhooks/{webhookId}'
            .replace('{' + 'webhookId' + '}', encodeURIComponent(String(webhookId)));
        const localVarQueryParameters: any = {};
        const localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        const localVarFormParams: any = {};

        // verify required parameter 'webhookId' is not null or undefined
        if (webhookId === null || webhookId === undefined) {
            throw new Error('Required parameter webhookId was null or undefined when calling getWebhook.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        const localVarUseFormData = false;

        const localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.apiKey.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.apiKey.applyToRequest(localVarRequestOptions));
        }
        if (this.authentications.partnerKey.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.partnerKey.applyToRequest(localVarRequestOptions));
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
            return new Promise<{ response: http.IncomingMessage; body: GetWebhook;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "GetWebhook");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * 
     * @summary Get all webhooks
     * @param type Filter on webhook type
     * @param sort Sort the results in the ascending/descending order of webhook creation
     */
    public async getWebhooks (type?: 'marketing' | 'transactional', sort?: 'asc' | 'desc', options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: GetWebhooks;  }> {
        const localVarPath = this.basePath + '/webhooks';
        const localVarQueryParameters: any = {};
        const localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        const localVarFormParams: any = {};

        if (type !== undefined) {
            localVarQueryParameters['type'] = ObjectSerializer.serialize(type, "'marketing' | 'transactional'");
        }

        if (sort !== undefined) {
            localVarQueryParameters['sort'] = ObjectSerializer.serialize(sort, "'asc' | 'desc'");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        const localVarUseFormData = false;

        const localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.apiKey.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.apiKey.applyToRequest(localVarRequestOptions));
        }
        if (this.authentications.partnerKey.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.partnerKey.applyToRequest(localVarRequestOptions));
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
            return new Promise<{ response: http.IncomingMessage; body: GetWebhooks;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "GetWebhooks");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * 
     * @summary Update a webhook
     * @param webhookId Id of the webhook
     * @param updateWebhook Values to update a webhook
     */
    public async updateWebhook (webhookId: number, updateWebhook: UpdateWebhook, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body?: any;  }> {
        const localVarPath = this.basePath + '/webhooks/{webhookId}'
            .replace('{' + 'webhookId' + '}', encodeURIComponent(String(webhookId)));
        const localVarQueryParameters: any = {};
        const localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        const localVarFormParams: any = {};

        // verify required parameter 'webhookId' is not null or undefined
        if (webhookId === null || webhookId === undefined) {
            throw new Error('Required parameter webhookId was null or undefined when calling updateWebhook.');
        }

        // verify required parameter 'updateWebhook' is not null or undefined
        if (updateWebhook === null || updateWebhook === undefined) {
            throw new Error('Required parameter updateWebhook was null or undefined when calling updateWebhook.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        const localVarUseFormData = false;

        const localVarRequestOptions: localVarRequest.Options = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(updateWebhook, "UpdateWebhook")
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.apiKey.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.apiKey.applyToRequest(localVarRequestOptions));
        }
        if (this.authentications.partnerKey.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.partnerKey.applyToRequest(localVarRequestOptions));
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
            return new Promise<{ response: http.IncomingMessage; body?: any;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
}
