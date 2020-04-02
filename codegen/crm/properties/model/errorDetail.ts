/**
 * Properties
 * All HubSpot objects store data in default and custom properties. These endpoints provide access to read and modify object properties in HubSpot.
 *
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from '../api';

export class ErrorDetail {
    /**
    * A human readable message describing the error along with remediation steps where appropriate
    */
    'message': string;
    /**
    * The name of the field or parameter in which the error was found.
    */
    '_in'?: string;
    /**
    * The status code associated with the error detail
    */
    'code'?: string;
    /**
    * A specific category that contains more specific detail about the error
    */
    'subCategory'?: string;
    /**
    * Context about the error condition
    */
    'context'?: { [key: string]: Array<string>; };

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "message",
            "baseName": "message",
            "type": "string"
        },
        {
            "name": "_in",
            "baseName": "in",
            "type": "string"
        },
        {
            "name": "code",
            "baseName": "code",
            "type": "string"
        },
        {
            "name": "subCategory",
            "baseName": "subCategory",
            "type": "string"
        },
        {
            "name": "context",
            "baseName": "context",
            "type": "{ [key: string]: Array<string>; }"
        }    ];

    static getAttributeTypeMap() {
        return ErrorDetail.attributeTypeMap;
    }
}

