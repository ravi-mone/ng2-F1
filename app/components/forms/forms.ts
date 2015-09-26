import {Component, View, bootstrap} from 'angular2/angular2';
import {FormBuilder, Validators, FORM_DIRECTIVES, ControlGroup} from 'angular2/core';
@Component({
    selector: 'login-comp',
    viewBindings: [FormBuilder]
})
@View({
    template: `
    <form [control-group]="loginForm">
      Login <input control="login">
      <div control-group="passwordRetry">
        Password <input type="password" control="password">
        Confirm password <input type="password" control="passwordConfirmation">
      </div>
    </form>
  `,
    directives: [FORM_DIRECTIVES]
})
class LoginComp {
    loginForm: ControlGroup;
    constructor(builder: FormBuilder) {
        this.loginForm = builder.group({
            login: ["", Validators.required],
            passwordRetry: builder.group({
                password: ["", Validators.required],
                passwordConfirmation: ["", Validators.required]
            })
        });
    }
}