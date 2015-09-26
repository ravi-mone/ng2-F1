var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var core_1 = require('angular2/core');
var LoginComp = (function () {
    function LoginComp(builder) {
        this.loginForm = builder.group({
            login: ["", core_1.Validators.required],
            passwordRetry: builder.group({
                password: ["", core_1.Validators.required],
                passwordConfirmation: ["", core_1.Validators.required]
            })
        });
    }
    LoginComp = __decorate([
        angular2_1.Component({
            selector: 'login-comp',
            viewBindings: [core_1.FormBuilder]
        }),
        angular2_1.View({
            template: "\n    <form [control-group]=\"loginForm\">\n      Login <input control=\"login\">\n      <div control-group=\"passwordRetry\">\n        Password <input type=\"password\" control=\"password\">\n        Confirm password <input type=\"password\" control=\"passwordConfirmation\">\n      </div>\n    </form>\n  ",
            directives: [core_1.FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [(typeof FormBuilder !== 'undefined' && FormBuilder) || Object])
    ], LoginComp);
    return LoginComp;
})();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZm9ybXMvZm9ybXMudHMiXSwibmFtZXMiOlsiTG9naW5Db21wIiwiTG9naW5Db21wLmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHlCQUF5QyxtQkFBbUIsQ0FBQyxDQUFBO0FBQzdELHFCQUFxRSxlQUFlLENBQUMsQ0FBQTtBQUNyRjtJQWtCSUEsbUJBQVlBLE9BQW9CQTtRQUM1QkMsSUFBSUEsQ0FBQ0EsU0FBU0EsR0FBR0EsT0FBT0EsQ0FBQ0EsS0FBS0EsQ0FBQ0E7WUFDM0JBLEtBQUtBLEVBQUVBLENBQUNBLEVBQUVBLEVBQUVBLGlCQUFVQSxDQUFDQSxRQUFRQSxDQUFDQTtZQUNoQ0EsYUFBYUEsRUFBRUEsT0FBT0EsQ0FBQ0EsS0FBS0EsQ0FBQ0E7Z0JBQ3pCQSxRQUFRQSxFQUFFQSxDQUFDQSxFQUFFQSxFQUFFQSxpQkFBVUEsQ0FBQ0EsUUFBUUEsQ0FBQ0E7Z0JBQ25DQSxvQkFBb0JBLEVBQUVBLENBQUNBLEVBQUVBLEVBQUVBLGlCQUFVQSxDQUFDQSxRQUFRQSxDQUFDQTthQUNsREEsQ0FBQ0E7U0FDTEEsQ0FBQ0EsQ0FBQ0E7SUFDUEEsQ0FBQ0E7SUExQkxEO1FBQUNBLG9CQUFTQSxDQUFDQTtZQUNQQSxRQUFRQSxFQUFFQSxZQUFZQTtZQUN0QkEsWUFBWUEsRUFBRUEsQ0FBQ0Esa0JBQVdBLENBQUNBO1NBQzlCQSxDQUFDQTtRQUNEQSxlQUFJQSxDQUFDQTtZQUNGQSxRQUFRQSxFQUFFQSxxVEFRWEE7WUFDQ0EsVUFBVUEsRUFBRUEsQ0FBQ0Esc0JBQWVBLENBQUNBO1NBQ2hDQSxDQUFDQTs7a0JBWURBO0lBQURBLGdCQUFDQTtBQUFEQSxDQTNCQSxBQTJCQ0EsSUFBQSIsImZpbGUiOiJjb21wb25lbnRzL2Zvcm1zL2Zvcm1zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIFZpZXcsIGJvb3RzdHJhcH0gZnJvbSAnYW5ndWxhcjIvYW5ndWxhcjInO1xuaW1wb3J0IHtGb3JtQnVpbGRlciwgVmFsaWRhdG9ycywgRk9STV9ESVJFQ1RJVkVTLCBDb250cm9sR3JvdXB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdsb2dpbi1jb21wJyxcbiAgICB2aWV3QmluZGluZ3M6IFtGb3JtQnVpbGRlcl1cbn0pXG5AVmlldyh7XG4gICAgdGVtcGxhdGU6IGBcbiAgICA8Zm9ybSBbY29udHJvbC1ncm91cF09XCJsb2dpbkZvcm1cIj5cbiAgICAgIExvZ2luIDxpbnB1dCBjb250cm9sPVwibG9naW5cIj5cbiAgICAgIDxkaXYgY29udHJvbC1ncm91cD1cInBhc3N3b3JkUmV0cnlcIj5cbiAgICAgICAgUGFzc3dvcmQgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIGNvbnRyb2w9XCJwYXNzd29yZFwiPlxuICAgICAgICBDb25maXJtIHBhc3N3b3JkIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBjb250cm9sPVwicGFzc3dvcmRDb25maXJtYXRpb25cIj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9ybT5cbiAgYCxcbiAgICBkaXJlY3RpdmVzOiBbRk9STV9ESVJFQ1RJVkVTXVxufSlcbmNsYXNzIExvZ2luQ29tcCB7XG4gICAgbG9naW5Gb3JtOiBDb250cm9sR3JvdXA7XG4gICAgY29uc3RydWN0b3IoYnVpbGRlcjogRm9ybUJ1aWxkZXIpIHtcbiAgICAgICAgdGhpcy5sb2dpbkZvcm0gPSBidWlsZGVyLmdyb3VwKHtcbiAgICAgICAgICAgIGxvZ2luOiBbXCJcIiwgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICAgICAgICBwYXNzd29yZFJldHJ5OiBidWlsZGVyLmdyb3VwKHtcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogW1wiXCIsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkQ29uZmlybWF0aW9uOiBbXCJcIiwgVmFsaWRhdG9ycy5yZXF1aXJlZF1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=