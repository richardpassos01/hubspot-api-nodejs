/**
 * OAuthService
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from '../api';

export class RefreshTokenInfoResponse {
    'token': string;
    'user'?: string;
    'hubDomain'?: string;
    'scopes': Array<string>;
    'hubId': number;
    'clientId': string;
    'userId': number;
    'tokenType': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "token",
            "baseName": "token",
            "type": "string"
        },
        {
            "name": "user",
            "baseName": "user",
            "type": "string"
        },
        {
            "name": "hubDomain",
            "baseName": "hub_domain",
            "type": "string"
        },
        {
            "name": "scopes",
            "baseName": "scopes",
            "type": "Array<string>"
        },
        {
            "name": "hubId",
            "baseName": "hub_id",
            "type": "number"
        },
        {
            "name": "clientId",
            "baseName": "client_id",
            "type": "string"
        },
        {
            "name": "userId",
            "baseName": "user_id",
            "type": "number"
        },
        {
            "name": "tokenType",
            "baseName": "token_type",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return RefreshTokenInfoResponse.attributeTypeMap;
    }
}

