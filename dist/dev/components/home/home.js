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
var router_1 = require('angular2/router');
var user_repo_1 = require('../../services/repositories/user_repo');
var alert_1 = require('../../ng2-bootstrap/alert/alert');
var Home = (function () {
    function Home(repo) {
        this.repo = repo;
        this.alertOpened = true;
        this.userName = '';
        console.log(user_repo_1.default);
    }
    Home.prototype.addUser = function (currentUser) {
        var _this = this;
        this.loading = true;
        console.log(this.repo.getUser);
        this.repo.getUser(currentUser.value)
            .then(function (u) {
            _this.loading = false;
            _this.userName = u.name;
        });
        currentUser.value = '';
    };
    Home.prototype.getAll = function () {
        return this.repo.getAll();
    };
    Home.prototype.remove = function (user) {
        this.repo.remove(user);
    };
    Home.prototype.close = function (evt) {
        evt.preventDefault();
        this.alertOpened = false;
    };
    Home.prototype.log = function (msg) {
        console.log(msg);
    };
    Home.prototype.toggle = function () {
        this.alertOpened = !this.alertOpened;
    };
    Home = __decorate([
        angular2_1.Component({
            selector: 'home'
        }),
        angular2_1.View({
            templateUrl: './components/home/home.html?v=0.0.0',
            directives: [angular2_1.CORE_DIRECTIVES, router_1.ROUTER_DIRECTIVES, alert_1.Alert]
        }), 
        __metadata('design:paramtypes', [user_repo_1.default])
    ], Home);
    return Home;
})();
exports.Home = Home;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaG9tZS9ob21lLnRzIl0sIm5hbWVzIjpbIkhvbWUiLCJIb21lLmNvbnN0cnVjdG9yIiwiSG9tZS5hZGRVc2VyIiwiSG9tZS5nZXRBbGwiLCJIb21lLnJlbW92ZSIsIkhvbWUuY2xvc2UiLCJIb21lLmxvZyIsIkhvbWUudG9nZ2xlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHlCQUErQyxtQkFBbUIsQ0FBQyxDQUFBO0FBQ25FLHVCQUFnQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQ2xELDBCQUFxQix1Q0FBdUMsQ0FBQyxDQUFBO0FBRTdELHNCQUFvQixpQ0FBaUMsQ0FBQyxDQUFBO0FBQ3REO0lBWUlBLGNBQW9CQSxJQUFhQTtRQUFiQyxTQUFJQSxHQUFKQSxJQUFJQSxDQUFTQTtRQUZ6QkEsZ0JBQVdBLEdBQVdBLElBQUlBLENBQUNBO1FBQ25DQSxhQUFRQSxHQUFTQSxFQUFFQSxDQUFDQTtRQUNpQkEsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsbUJBQVFBLENBQUNBLENBQUNBO0lBQUNBLENBQUNBO0lBQzdERCxzQkFBT0EsR0FBUEEsVUFBUUEsV0FBV0E7UUFBbkJFLGlCQVNDQTtRQVJHQSxJQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSxJQUFJQSxDQUFDQTtRQUNwQkEsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQUE7UUFDOUJBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLFdBQVdBLENBQUNBLEtBQUtBLENBQUNBO2FBQy9CQSxJQUFJQSxDQUFDQSxVQUFBQSxDQUFDQTtZQUNIQSxLQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSxLQUFLQSxDQUFDQTtZQUNyQkEsS0FBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0E7UUFDM0JBLENBQUNBLENBQUNBLENBQUNBO1FBQ1BBLFdBQVdBLENBQUNBLEtBQUtBLEdBQUdBLEVBQUVBLENBQUNBO0lBQzNCQSxDQUFDQTtJQUNERixxQkFBTUEsR0FBTkE7UUFDSUcsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsRUFBRUEsQ0FBQ0E7SUFDOUJBLENBQUNBO0lBQ0RILHFCQUFNQSxHQUFOQSxVQUFPQSxJQUFTQTtRQUNaSSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtJQUMzQkEsQ0FBQ0E7SUFFREosb0JBQUtBLEdBQUxBLFVBQU1BLEdBQWNBO1FBQ2hCSyxHQUFHQSxDQUFDQSxjQUFjQSxFQUFFQSxDQUFDQTtRQUNyQkEsSUFBSUEsQ0FBQ0EsV0FBV0EsR0FBR0EsS0FBS0EsQ0FBQ0E7SUFDN0JBLENBQUNBO0lBRURMLGtCQUFHQSxHQUFIQSxVQUFJQSxHQUFVQTtRQUNWTSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtJQUNyQkEsQ0FBQ0E7SUFFRE4scUJBQU1BLEdBQU5BO1FBQ0lPLElBQUlBLENBQUNBLFdBQVdBLEdBQUdBLENBQUNBLElBQUlBLENBQUNBLFdBQVdBLENBQUNBO0lBQ3pDQSxDQUFDQTtJQXpDTFA7UUFBQ0Esb0JBQVNBLENBQUNBO1lBQ1BBLFFBQVFBLEVBQUVBLE1BQU1BO1NBQ25CQSxDQUFDQTtRQUNEQSxlQUFJQSxDQUFDQTtZQUNGQSxXQUFXQSxFQUFFQSw4Q0FBOENBO1lBQzNEQSxVQUFVQSxFQUFFQSxDQUFDQSwwQkFBZUEsRUFBRUEsMEJBQWlCQSxFQUFFQSxhQUFLQSxDQUFDQTtTQUMxREEsQ0FBQ0E7O2FBb0NEQTtJQUFEQSxXQUFDQTtBQUFEQSxDQTFDQSxBQTBDQ0EsSUFBQTtBQW5DWSxZQUFJLE9BbUNoQixDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvaG9tZS9ob21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIFZpZXcsIENPUkVfRElSRUNUSVZFU30gZnJvbSAnYW5ndWxhcjIvYW5ndWxhcjInO1xuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFU30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCBVc2VyUmVwbyBmcm9tICcuLi8uLi9zZXJ2aWNlcy9yZXBvc2l0b3JpZXMvdXNlcl9yZXBvJztcbmltcG9ydCBVc2VyIGZyb20gJy4uLy4uL3NlcnZpY2VzL21vZGVscy91c2VyJztcbmltcG9ydCB7QWxlcnR9IGZyb20gJy4uLy4uL25nMi1ib290c3RyYXAvYWxlcnQvYWxlcnQnO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdob21lJ1xufSlcbkBWaWV3KHtcbiAgICB0ZW1wbGF0ZVVybDogJy4vY29tcG9uZW50cy9ob21lL2hvbWUuaHRtbD92PTwlPSBWRVJTSU9OICU+JyxcbiAgICBkaXJlY3RpdmVzOiBbQ09SRV9ESVJFQ1RJVkVTLCBST1VURVJfRElSRUNUSVZFUywgQWxlcnRdXG59KVxuZXhwb3J0IGNsYXNzIEhvbWUge1xuICAgIHByaXZhdGUgbG9hZGluZzpib29sZWFuO1xuICAgIC8vQm9vdHN0cmFwIGFsZXJ0XG4gICAgcHJpdmF0ZSBhbGVydE9wZW5lZDpib29sZWFuID0gdHJ1ZTtcbiAgICB1c2VyTmFtZTpzdHJpbmcgPScnO1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVwbzpVc2VyUmVwbykgeyBjb25zb2xlLmxvZyhVc2VyUmVwbyk7IH1cbiAgICBhZGRVc2VyKGN1cnJlbnRVc2VyKSB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucmVwby5nZXRVc2VyKVxuICAgICAgICB0aGlzLnJlcG8uZ2V0VXNlcihjdXJyZW50VXNlci52YWx1ZSlcbiAgICAgICAgICAgIC50aGVuKHUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMudXNlck5hbWUgPSB1Lm5hbWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgY3VycmVudFVzZXIudmFsdWUgPSAnJztcbiAgICB9XG4gICAgZ2V0QWxsKCk6VXNlcltdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVwby5nZXRBbGwoKTtcbiAgICB9XG4gICAgcmVtb3ZlKHVzZXI6VXNlcikge1xuICAgICAgICB0aGlzLnJlcG8ucmVtb3ZlKHVzZXIpO1xuICAgIH1cbiAgICAvL0Jvb3RzdHJhcCBBbGVydFxuICAgIGNsb3NlKGV2dDpNb3VzZUV2ZW50KSB7XG4gICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLmFsZXJ0T3BlbmVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgbG9nKG1zZzpzdHJpbmcpIHtcbiAgICAgICAgY29uc29sZS5sb2cobXNnKTtcbiAgICB9XG5cbiAgICB0b2dnbGUoKSB7XG4gICAgICAgIHRoaXMuYWxlcnRPcGVuZWQgPSAhdGhpcy5hbGVydE9wZW5lZDtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=