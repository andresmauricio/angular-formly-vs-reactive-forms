import { FormlyConfig, FormlyFieldConfig } from '@ngx-formly/core';

function minlengthValidationMessage(err: any, field: FormlyFieldConfig | any) {
  return `Should have atleast ${field.templateOptions.minLength} characters`;
}

function maxlengthValidationMessage(err: any, field: FormlyFieldConfig | any) {
  return `This value should be less than ${field.templateOptions.maxLength} characters`;
}

function minValidationMessage(err: any, field: FormlyFieldConfig | any) {
  return `This value should be more than ${field.templateOptions.min}`;
}

function maxValidationMessage(err: any, field: FormlyFieldConfig | any) {
  return `This value should be less than ${field.templateOptions.max}`;
}

export const validationMessages = [
  { name: 'required', message: 'This field is required' },
  { name: 'minlength', message: minlengthValidationMessage },
  { name: 'maxlength', message: maxlengthValidationMessage },
  { name: 'min', message: minValidationMessage },
  { name: 'max', message: maxValidationMessage },
];
