import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Functions } from 'src/app/common/functions';

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => FormInputComponent),
  multi: true
};

const noop = () => { };

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss'],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class FormInputComponent implements ControlValueAccessor {
  @Input() public fieldlabel: string = '';
  @Input() formControl: FormControl;
  @Input() public placeholder: string = '';

  private innerValue:any;
  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;


  // Input directive for accessing the getter setter of innervalue.
  get value(): any {
    return this.innerValue;
  }
  //set accessor including call to onchange callback
  set value(val: any) {
    this.writeValue(val);
    this.onChangeCallback(val);
  }
  //From ControlValueAccessor interface
  writeValue(val: any) {
    this.innerValue = val;
  }
  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }
  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }

  isFieldInvalid() {
    if (this.formControl && Functions.isFieldInvalid(this.formControl))
      return true;
    return false;
  }
}