/**
 * Timeline events
 * This feature allows an app to create and configure custom events that can show up in the timelines of certain CRM object like contacts, companies, or deals. You\'ll find multiple use cases for this API in the sections below.
 *
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from '../api';
import { AddNumbers } from './addNumbers';
import { And } from './and';
import { BeginsWith } from './beginsWith';
import { ConcatStrings } from './concatStrings';
import { ConstantBoolean } from './constantBoolean';
import { ConstantNumber } from './constantNumber';
import { ConstantString } from './constantString';
import { Contains } from './contains';
import { DivideNumbers } from './divideNumbers';
import { ExtractMostRecentEmailReplyHtml } from './extractMostRecentEmailReplyHtml';
import { ExtractMostRecentEmailReplyText } from './extractMostRecentEmailReplyText';
import { ExtractMostRecentPlainTextEmailReply } from './extractMostRecentPlainTextEmailReply';
import { FetchExchangeRate } from './fetchExchangeRate';
import { HasEmailReply } from './hasEmailReply';
import { HasPlainTextEmailReply } from './hasPlainTextEmailReply';
import { IfBoolean } from './ifBoolean';
import { IfNumber } from './ifNumber';
import { IfString } from './ifString';
import { IsPresent } from './isPresent';
import { LessThan } from './lessThan';
import { LessThanOrEqual } from './lessThanOrEqual';
import { LowerCase } from './lowerCase';
import { MaxNumbers } from './maxNumbers';
import { MinNumbers } from './minNumbers';
import { ModelDate } from './modelDate';
import { Month } from './month';
import { MoreThan } from './moreThan';
import { MoreThanOrEqual } from './moreThanOrEqual';
import { MultiplyNumbers } from './multiplyNumbers';
import { Not } from './not';
import { Now } from './now';
import { NumberEquals } from './numberEquals';
import { NumberPropertyVariable } from './numberPropertyVariable';
import { NumberToString } from './numberToString';
import { Or } from './or';
import { ParseNumber } from './parseNumber';
import { PeriodToMonths } from './periodToMonths';
import { PipelineProbability } from './pipelineProbability';
import { RoundDownNumbers } from './roundDownNumbers';
import { RoundUpNumbers } from './roundUpNumbers';
import { StringEquals } from './stringEquals';
import { StringPropertyVariable } from './stringPropertyVariable';
import { SubtractNumbers } from './subtractNumbers';
import { TimeBetween } from './timeBetween';
import { UpperCase } from './upperCase';
import { Xor } from './xor';
import { Year } from './year';

export class BooleanPropertyVariable {
    'operator': BooleanPropertyVariable.OperatorEnum;
    'value'?: boolean;
    'inputs'?: Array<ConstantBoolean | ConstantNumber | ConstantString | BooleanPropertyVariable | StringPropertyVariable | NumberPropertyVariable | AddNumbers | SubtractNumbers | MultiplyNumbers | DivideNumbers | RoundDownNumbers | RoundUpNumbers | UpperCase | LowerCase | ConcatStrings | Contains | BeginsWith | NumberToString | ParseNumber | FetchExchangeRate | PipelineProbability | MaxNumbers | MinNumbers | LessThan | LessThanOrEqual | MoreThan | MoreThanOrEqual | NumberEquals | StringEquals | Not | ModelDate | Month | Year | Now | TimeBetween | PeriodToMonths | And | Or | Xor | IfString | IfNumber | IfBoolean | IsPresent | HasEmailReply | HasPlainTextEmailReply | ExtractMostRecentEmailReplyHtml | ExtractMostRecentEmailReplyText | ExtractMostRecentPlainTextEmailReply>;
    'propertyName'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "operator",
            "baseName": "operator",
            "type": "BooleanPropertyVariable.OperatorEnum"
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "boolean"
        },
        {
            "name": "inputs",
            "baseName": "inputs",
            "type": "Array<ConstantBoolean | ConstantNumber | ConstantString | BooleanPropertyVariable | StringPropertyVariable | NumberPropertyVariable | AddNumbers | SubtractNumbers | MultiplyNumbers | DivideNumbers | RoundDownNumbers | RoundUpNumbers | UpperCase | LowerCase | ConcatStrings | Contains | BeginsWith | NumberToString | ParseNumber | FetchExchangeRate | PipelineProbability | MaxNumbers | MinNumbers | LessThan | LessThanOrEqual | MoreThan | MoreThanOrEqual | NumberEquals | StringEquals | Not | ModelDate | Month | Year | Now | TimeBetween | PeriodToMonths | And | Or | Xor | IfString | IfNumber | IfBoolean | IsPresent | HasEmailReply | HasPlainTextEmailReply | ExtractMostRecentEmailReplyHtml | ExtractMostRecentEmailReplyText | ExtractMostRecentPlainTextEmailReply>"
        },
        {
            "name": "propertyName",
            "baseName": "propertyName",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return BooleanPropertyVariable.attributeTypeMap;
    }
}

export namespace BooleanPropertyVariable {
    export enum OperatorEnum {
        BOOLEANPROPERTYVARIABLE = <any> 'BOOLEAN_PROPERTY_VARIABLE'
    }
}
