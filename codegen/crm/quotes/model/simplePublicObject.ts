/**
 * Quotes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from '../api';
import { CollectionResponseAssociatedId } from './collectionResponseAssociatedId';

export class SimplePublicObject {
    'id': string;
    'properties': { [key: string]: string; };
    'createdAt': Date;
    'updatedAt': Date;
    'associations'?: { [key: string]: CollectionResponseAssociatedId; };
    'archived'?: boolean;
    'archivedAt'?: Date;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "properties",
            "baseName": "properties",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date"
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "Date"
        },
        {
            "name": "associations",
            "baseName": "associations",
            "type": "{ [key: string]: CollectionResponseAssociatedId; }"
        },
        {
            "name": "archived",
            "baseName": "archived",
            "type": "boolean"
        },
        {
            "name": "archivedAt",
            "baseName": "archivedAt",
            "type": "Date"
        }    ];

    static getAttributeTypeMap() {
        return SimplePublicObject.attributeTypeMap;
    }
}

