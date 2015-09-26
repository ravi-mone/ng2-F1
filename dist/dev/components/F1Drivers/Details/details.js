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
var router_1 = require('angular2/router');
var nationality_1 = require('../nationality/nationality');
var points_1 = require('../points/points');
var NameList_1 = require('../../../services/models/NameList');
var Details = (function () {
    function Details(list, params) {
        this.list = list;
        this.showWhenTrue = false;
        this.id = params.get('name');
    }
    Details.prototype.onInit = function () {
        this.driver = this.list.getDriverSpecific(this.id - 1);
    };
    Details = __decorate([
        angular2_1.Component({
            selector: 'Details',
            viewBindings: [NameList_1.NamesList]
        }),
        angular2_1.View({
            templateUrl: './components/F1Drivers/Details/details.html?v=0.0.0',
            directives: [router_1.RouterLink, nationality_1.Nationality, points_1.Points, angular2_1.CORE_DIRECTIVES]
        }),
        __param(0, angular2_1.Inject(NameList_1.NamesList)), 
        __metadata('design:paramtypes', [NameList_1.NamesList, router_1.RouteParams])
    ], Details);
    return Details;
})();
exports.Details = Details;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRjFEcml2ZXJzL0RldGFpbHMvZGV0YWlscy50cyJdLCJuYW1lcyI6WyJEZXRhaWxzIiwiRGV0YWlscy5jb25zdHJ1Y3RvciIsIkRldGFpbHMub25Jbml0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLHlCQUFzRCxtQkFBbUIsQ0FBQyxDQUFBO0FBQzFFLHVCQUE4QyxpQkFBaUIsQ0FBQyxDQUFBO0FBRWhFLDRCQUEwQiw0QkFDMUIsQ0FBQyxDQURxRDtBQUN0RCx1QkFBcUIsa0JBQ3JCLENBQUMsQ0FEc0M7QUFDdkMseUJBQXdCLG1DQUFtQyxDQUFDLENBQUE7QUFDNUQ7SUFjSUEsaUJBQXNDQSxJQUFlQSxFQUFHQSxNQUFrQkE7UUFBcENDLFNBQUlBLEdBQUpBLElBQUlBLENBQVdBO1FBRHJEQSxpQkFBWUEsR0FBQ0EsS0FBS0EsQ0FBQ0E7UUFFZkEsSUFBSUEsQ0FBQ0EsRUFBRUEsR0FBR0EsTUFBTUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0E7SUFDakNBLENBQUNBO0lBQ0RELHdCQUFNQSxHQUFOQTtRQUNJRSxJQUFJQSxDQUFDQSxNQUFNQSxHQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxpQkFBaUJBLENBQUNBLElBQUlBLENBQUNBLEVBQUVBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBO0lBQ3pEQSxDQUFDQTtJQW5CTEY7UUFBQ0Esb0JBQVNBLENBQUNBO1lBQ1BBLFFBQVFBLEVBQUVBLFNBQVNBO1lBQ25CQSxZQUFZQSxFQUFDQSxDQUFDQSxvQkFBU0EsQ0FBQ0E7U0FDM0JBLENBQUNBO1FBQ0RBLGVBQUlBLENBQUNBO1lBQ0ZBLFdBQVdBLEVBQUVBLDhEQUE4REE7WUFDM0VBLFVBQVVBLEVBQUVBLENBQUNBLG1CQUFVQSxFQUFFQSx5QkFBV0EsRUFBRUEsZUFBTUEsRUFBRUEsMEJBQWVBLENBQUNBO1NBQ2pFQSxDQUFDQTtRQU9jQSxXQUFDQSxpQkFBTUEsQ0FBQ0Esb0JBQVNBLENBQUNBLENBQUFBOztnQkFNakNBO0lBQURBLGNBQUNBO0FBQURBLENBcEJBLEFBb0JDQSxJQUFBO0FBWFksZUFBTyxVQVduQixDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvRjFEcml2ZXJzL0RldGFpbHMvZGV0YWlscy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBWaWV3LEluamVjdCwgQ09SRV9ESVJFQ1RJVkVTfSBmcm9tICdhbmd1bGFyMi9hbmd1bGFyMic7XG5pbXBvcnQge1JvdXRlciwgUm91dGVQYXJhbXMsIFJvdXRlckxpbmt9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQge1JvdXRlUGFyYW1zfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuaW1wb3J0IHtOYXRpb25hbGl0eX0gZnJvbSAnLi4vbmF0aW9uYWxpdHkvbmF0aW9uYWxpdHknXG5pbXBvcnQge1BvaW50c30gZnJvbSAnLi4vcG9pbnRzL3BvaW50cydcbmltcG9ydCB7TmFtZXNMaXN0fSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9tb2RlbHMvTmFtZUxpc3QnO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdEZXRhaWxzJyxcbiAgICB2aWV3QmluZGluZ3M6W05hbWVzTGlzdF1cbn0pXG5AVmlldyh7XG4gICAgdGVtcGxhdGVVcmw6ICcuL2NvbXBvbmVudHMvRjFEcml2ZXJzL0RldGFpbHMvZGV0YWlscy5odG1sP3Y9PCU9IFZFUlNJT04gJT4nLFxuICAgIGRpcmVjdGl2ZXM6IFtSb3V0ZXJMaW5rLCBOYXRpb25hbGl0eSwgUG9pbnRzLCBDT1JFX0RJUkVDVElWRVNdXG59KVxuXG5leHBvcnQgY2xhc3MgRGV0YWlscyB7XG4gICAgZHJpdmVyT2JqOkFycmF5PE9iamVjdD47XG4gICAgZHJpdmVyOk9iamVjdDtcbiAgICBpZDpudW1iZXI7XG4gICAgc2hvd1doZW5UcnVlPWZhbHNlO1xuICAgIGNvbnN0cnVjdG9yKEBJbmplY3QoTmFtZXNMaXN0KSBwdWJsaWMgbGlzdDogTmFtZXNMaXN0LCAgcGFyYW1zOlJvdXRlUGFyYW1zKXtcbiAgICAgICAgdGhpcy5pZCA9IHBhcmFtcy5nZXQoJ25hbWUnKTtcbiAgICB9XG4gICAgb25Jbml0KCkge1xuICAgICAgICB0aGlzLmRyaXZlcj10aGlzLmxpc3QuZ2V0RHJpdmVyU3BlY2lmaWModGhpcy5pZCAtIDEpO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=