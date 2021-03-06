
import * as _ from 'lodash';

import { IConstraintModule, ConstraintValue, ConstraintExecuter, IRuntimeContext, ValidationError, IValidator, ConstraintConfiguration } from '@configurable-validator/core'

export class OfTypeModule implements IConstraintModule {

    initialize(validator: IValidator) {
    }

    buildConstraintExecuter(value: ConstraintValue, externalData?: any): ConstraintExecuter {
        return (data: object, context: IRuntimeContext) => {
            if(value === 'string' && !_.isString(data)){
                return {
                    isValid: false,
                    validationErrors: [{
                        constraintName: 'ofType',
                        constraintConfig: value,
                        description: 'object is not a string',
                        path: context.fullPath
                    }]
                }
            }

            if(value === 'number' && !_.isInteger(data)) {
                return {
                    isValid: false,
                    validationErrors: [{
                        constraintName: 'ofType',
                        constraintConfig: value,
                        description: 'object is not a number',
                        path: context.fullPath
                    }]
                }
            }

            if(value === 'boolean' && !_.isBoolean(data)) {
                return {
                    isValid: false,
                    validationErrors: [{
                        constraintName: 'ofType',
                        constraintConfig: value,
                        description: 'object is not a boolean',
                        path: context.fullPath
                    }]
                }
            }

            if(value === 'date' && !_.isDate(data)) {
                return {
                    isValid: false,
                    validationErrors: [{
                        constraintName: 'ofType',
                        constraintConfig: value,
                        description: 'object is not a date',
                        path: context.fullPath
                    }]
                }
            }

            return {
                isValid: true
            };
        }
    }

}