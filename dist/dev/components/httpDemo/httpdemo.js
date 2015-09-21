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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var angular2_1 = require('angular2/angular2');
var angular2_2 = require('angular2/angular2');
var http_1 = require('angular2/http');
var HelloCmp = (function () {
    function HelloCmp(api) {
        this.api = api;
        this.result = {};
        console.log(this.getDriverDetails);
        return this.api.getDriverDetails(username)
            .then(function (u) {
            console.log(u);
            return user;
        });
    }
    HelloCmp.prototype.sayHello = function () {
    };
    HelloCmp = __decorate([
        angular2_1.Component({
            selector: 'hello',
        }),
        angular2_1.View({
            template: "\n    <h2>hello</h2>\n    <button type=\"button\" (click)=\"getInfo()\">get info</button> \n    <p>hello there, <span [text-content]=\"result.title\"></span>!</p> \n  "
        }),
        __param(0, angular2_2.Inject(http_1.Http)), 
        __metadata('design:paramtypes', [(typeof GitHubAPI !== 'undefined' && GitHubAPI) || Object])
    ], HelloCmp);
    return HelloCmp;
})();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaHR0cERlbW8vaHR0cGRlbW8udHMiXSwibmFtZXMiOlsiSGVsbG9DbXAiLCJIZWxsb0NtcC5jb25zdHJ1Y3RvciIsIkhlbGxvQ21wLnNheUhlbGxvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLHlCQUF5QyxtQkFBbUIsQ0FBQyxDQUFBO0FBQzdELHlCQUEyQyxtQkFBbUIsQ0FBQyxDQUFBO0FBRy9ELHFCQUFtQixlQUFlLENBQUMsQ0FBQTtBQUduQztJQWNJQSxrQkFBa0NBLEdBQWFBO1FBQWJDLFFBQUdBLEdBQUhBLEdBQUdBLENBQVVBO1FBRi9DQSxXQUFNQSxHQUFhQSxFQUFFQSxDQUFDQTtRQUdsQkEsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsZ0JBQWdCQSxDQUFDQSxDQUFBQTtRQUVsQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsZ0JBQWdCQSxDQUFDQSxRQUFRQSxDQUFDQTthQUN6Q0EsSUFBSUEsQ0FBQ0EsVUFBQ0EsQ0FBWUE7WUFDZkEsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQUE7WUFDbEJBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBO1FBRXBCQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUNDQSxDQUFDQTtJQUVERCwyQkFBUUEsR0FBUkE7SUFFQUUsQ0FBQ0E7SUEzQkxGO1FBQUNBLG9CQUFTQSxDQUFDQTtZQUNQQSxRQUFRQSxFQUFFQSxPQUFPQTtTQUVwQkEsQ0FBQ0E7UUFDREEsZUFBSUEsQ0FBQ0E7WUFDRkEsUUFBUUEsRUFBRUEseUtBSVhBO1NBQ0ZBLENBQUNBO1FBSWNBLFdBQUNBLGlCQUFNQSxDQUFDQSxXQUFJQSxDQUFDQSxDQUFBQTs7aUJBZ0I1QkE7SUFBREEsZUFBQ0E7QUFBREEsQ0E5QkEsQUE4QkNBLElBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9odHRwRGVtby9odHRwZGVtby5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBWaWV3LCBib290c3RyYXB9IGZyb20gJ2FuZ3VsYXIyL2FuZ3VsYXIyJztcbmltcG9ydCB7SW5qZWN0LCBJbmplY3RhYmxlLCBJUHJvbWlzZX0gZnJvbSAnYW5ndWxhcjIvYW5ndWxhcjInO1xuLyppbXBvcnQge0h0dHAsIEhUVFBfQklORElOR1N9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnOyovXG4vKmltcG9ydCB7SHR0cH0gZnJvbSAnaHR0cC9odHRwJzsqL1xuaW1wb3J0IHtIdHRwfSBmcm9tICdhbmd1bGFyMi9odHRwJztcbmltcG9ydCB7R2l0SHViQVBJfSBmcm9tICcuLi9hcGkvZ2l0aHViX2FwaSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnaGVsbG8nLFxuICAgLy8gdmlld0JpbmRpbmdzOiBbSFRUUF9CSU5ESU5HU11cbn0pXG5AVmlldyh7XG4gICAgdGVtcGxhdGU6IGBcbiAgICA8aDI+aGVsbG88L2gyPlxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJnZXRJbmZvKClcIj5nZXQgaW5mbzwvYnV0dG9uPiBcbiAgICA8cD5oZWxsbyB0aGVyZSwgPHNwYW4gW3RleHQtY29udGVudF09XCJyZXN1bHQudGl0bGVcIj48L3NwYW4+ITwvcD4gXG4gIGBcbn0pXG5jbGFzcyBIZWxsb0NtcCB7XG4gICAgcmVzdWx0OiBhbnkgPSA8YW55Pnt9O1xuXG4gICAgY29uc3RydWN0b3IoQEluamVjdChIdHRwKSBwcml2YXRlIGFwaTpHaXRIdWJBUEkpIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5nZXREcml2ZXJEZXRhaWxzKVxuXG4gICAgICAgIHJldHVybiB0aGlzLmFwaS5nZXREcml2ZXJEZXRhaWxzKHVzZXJuYW1lKVxuICAgICAgICAudGhlbigodTpHaXRIdWJVc2VyKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh1KVxuICAgICAgICByZXR1cm4gdXNlcjtcblxufSk7XG4gICAgfVxuXG4gICAgc2F5SGVsbG8oKSB7XG5cbiAgICB9XG5cblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9