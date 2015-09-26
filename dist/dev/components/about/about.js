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
var directive_1 = require('../directive/directive');
var About = (function () {
    function About() {
    }
    About = __decorate([
        angular2_1.Component({
            selector: 'about',
        }),
        angular2_1.View({
            templateUrl: './components/about/about.html?v=0.0.0',
            styleUrls: ['about.css'],
            directives: [angular2_1.CORE_DIRECTIVES, directive_1.ChatBlinkDirective]
        }), 
        __metadata('design:paramtypes', [])
    ], About);
    return About;
})();
exports.About = About;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYWJvdXQvYWJvdXQudHMiXSwibmFtZXMiOlsiQWJvdXQiLCJBYm91dC5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx5QkFBb0UsbUJBQW1CLENBQUMsQ0FBQTtBQUN4RiwwQkFBaUMsd0JBQXdCLENBQUMsQ0FBQTtBQUMxRDtJQVVFQTtJQUNBQyxDQUFDQTtJQVhIRDtRQUFDQSxvQkFBU0EsQ0FBQ0E7WUFDVEEsUUFBUUEsRUFBRUEsT0FBT0E7U0FFbEJBLENBQUNBO1FBQ0RBLGVBQUlBLENBQUNBO1lBQ0pBLFdBQVdBLEVBQUVBLGdEQUFnREE7WUFDN0RBLFNBQVNBLEVBQUdBLENBQUNBLFdBQVdBLENBQUNBO1lBQ3pCQSxVQUFVQSxFQUFFQSxDQUFDQSwwQkFBZUEsRUFBRUEsOEJBQWtCQSxDQUFDQTtTQUNsREEsQ0FBQ0E7O2NBSURBO0lBQURBLFlBQUNBO0FBQURBLENBWkEsQUFZQ0EsSUFBQTtBQUhZLGFBQUssUUFHakIsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2Fib3V0L2Fib3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIFZpZXcsIENPUkVfRElSRUNUSVZFUywgUGlwZSwgZW5jYXBzdWxhdGlvbn0gZnJvbSAnYW5ndWxhcjIvYW5ndWxhcjInO1xuaW1wb3J0IHtDaGF0QmxpbmtEaXJlY3RpdmV9IGZyb20gJy4uL2RpcmVjdGl2ZS9kaXJlY3RpdmUnO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYWJvdXQnLFxuXG59KVxuQFZpZXcoe1xuICB0ZW1wbGF0ZVVybDogJy4vY29tcG9uZW50cy9hYm91dC9hYm91dC5odG1sP3Y9PCU9IFZFUlNJT04gJT4nLFxuICBzdHlsZVVybHMgOiBbJ2Fib3V0LmNzcyddLFxuICBkaXJlY3RpdmVzOiBbQ09SRV9ESVJFQ1RJVkVTLCBDaGF0QmxpbmtEaXJlY3RpdmVdXG59KVxuZXhwb3J0IGNsYXNzIEFib3V0IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cbn1cblxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=