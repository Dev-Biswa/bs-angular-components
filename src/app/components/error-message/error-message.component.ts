import { Component, DoCheck, Input, OnDestroy } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Subscription } from "rxjs";
import { Constants } from "src/app/common/constants";

@Component({
    selector: 'error-message',
    templateUrl: './error-message.component.html',
    styleUrls: ['./error-message.component.scss'],
})

export class ErrorMessageComponent implements DoCheck, OnDestroy {
    constructor() {}
    errorMessage: string;
    isTouched: boolean = false;
    subscription: Subscription;
    @Input() public fieldlabel: string;
    @Input()
    set control(c: FormControl) {
        this.errorMessage = '';
        this._control = c;
        if (this.subscription) this.subscription.unsubscribe();
        this.subscription = c.statusChanges.subscribe(value => {
          this.isTouched = false;
          this.updateMessage();
        });
    }
    get control() {
        return this._control;
    }

    private _control: FormControl<any>;

    ngDoCheck(): void {
      if (!this.isTouched && this.control && this.control.touched) {
        this.updateMessage();
        this.isTouched = true;
      }
    }

    ngOnDestroy(): void {
      if (!!this.subscription) this.subscription.unsubscribe();
    }

    private updateMessage() {
        const isTouchedOrDirty = this.control.touched || this.control.dirty;
    
        if (this.control.hasError('required') && isTouchedOrDirty)
          this.errorMessage = this.fieldlabel
            ? this.fieldlabel + ' is required'
            : 'Required';
        else if (this.control.hasError('unique') && isTouchedOrDirty)
          this.errorMessage = 'it must be unique, so use another value';
        else if (
          (this.control.hasError('email') ||
            (this.control.hasError('pattern') && this.control.errors &&
              this.control.errors['pattern'].requiredPattern ===
                Constants.emailRegx.toString())) &&
          isTouchedOrDirty
        )
          this.errorMessage = 'Email address is invalid';
        else if (
          this.control.hasError('pattern') && this.control.errors &&
          this.control.errors['pattern'].requiredPattern ===
            Constants.phoneRegx2.toString() &&
          isTouchedOrDirty
        )
          this.errorMessage = 'Phone number is invalid';
        else if (this.control.hasError('pattern') && isTouchedOrDirty)
          this.errorMessage = 'Used wrong pattern';
        else if (this.control.hasError('maxlength') && isTouchedOrDirty)
          this.errorMessage =
            'The maximum length is ' +
            this.control.getError('maxlength').requiredLength +
            ' characters';
        else if (this.control.hasError('minlength') && isTouchedOrDirty)
          this.errorMessage =
            'The minimum length is ' +
            this.control.getError('minlength').requiredLength +
            ' characters';
        else if (this.control.hasError('max') && isTouchedOrDirty)
          this.errorMessage =
            'The maximum value accepted is ' + this.control.getError('max').max;
        else if (this.control.hasError('min') && isTouchedOrDirty)
          this.errorMessage =
            'The minimum value accepted is ' + this.control.getError('min').min;
        else if (this.control.hasError('notObject') && isTouchedOrDirty)
          this.errorMessage = 'Input must be a object';
        else if (this.control.hasError('objectRequired') && isTouchedOrDirty)
          this.errorMessage = 'Required';
        else if (this.control.errors && isTouchedOrDirty) {
        //   let errors = Object.getOwnPropertyNames(this.control.errors);
        //   this.errorMessage =
        //     this.messages && errors.length > 0 && this.messages[errors[0]]
        //       ? this.messages[errors[0]]
        //       : errors[0];
        } else this.errorMessage = '';
    }

}