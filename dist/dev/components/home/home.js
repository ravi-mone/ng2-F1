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
        this.statusChange = new angular2_1.EventEmitter();
    }
    Home.prototype.onComplete = function () {
        console.log('inside onComplete');
        this.statusChange.next('completed');
    };
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
            selector: 'home',
            events: ['statusChange']
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaG9tZS9ob21lLnRzIl0sIm5hbWVzIjpbIkhvbWUiLCJIb21lLmNvbnN0cnVjdG9yIiwiSG9tZS5vbkNvbXBsZXRlIiwiSG9tZS5hZGRVc2VyIiwiSG9tZS5nZXRBbGwiLCJIb21lLnJlbW92ZSIsIkhvbWUuY2xvc2UiLCJIb21lLmxvZyIsIkhvbWUudG9nZ2xlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHlCQUF5RSxtQkFBbUIsQ0FBQyxDQUFBO0FBQzdGLHVCQUFnQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQ2xELDBCQUFxQix1Q0FBdUMsQ0FBQyxDQUFBO0FBRTdELHNCQUFvQixpQ0FBaUMsQ0FBQyxDQUFBO0FBQ3REO0lBZUlBLGNBQW9CQSxJQUFhQTtRQUFiQyxTQUFJQSxHQUFKQSxJQUFJQSxDQUFTQTtRQUZ6QkEsZ0JBQVdBLEdBQVdBLElBQUlBLENBQUNBO1FBQ25DQSxhQUFRQSxHQUFTQSxFQUFFQSxDQUFDQTtRQUVoQkEsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsbUJBQVFBLENBQUNBLENBQUNBO1FBQ3RCQSxJQUFJQSxDQUFDQSxZQUFZQSxHQUFHQSxJQUFJQSx1QkFBWUEsRUFBRUEsQ0FBQ0E7SUFDM0NBLENBQUNBO0lBQ0RELHlCQUFVQSxHQUFWQTtRQUNJRSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxtQkFBbUJBLENBQUNBLENBQUNBO1FBQ2pDQSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxJQUFJQSxDQUFDQSxXQUFXQSxDQUFDQSxDQUFDQTtJQUN4Q0EsQ0FBQ0E7SUFDREYsc0JBQU9BLEdBQVBBLFVBQVFBLFdBQVdBO1FBQW5CRyxpQkFTQ0E7UUFSR0EsSUFBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsSUFBSUEsQ0FBQ0E7UUFDcEJBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLENBQUFBO1FBQzlCQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxXQUFXQSxDQUFDQSxLQUFLQSxDQUFDQTthQUMvQkEsSUFBSUEsQ0FBQ0EsVUFBQUEsQ0FBQ0E7WUFDSEEsS0FBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsS0FBS0EsQ0FBQ0E7WUFDckJBLEtBQUlBLENBQUNBLFFBQVFBLEdBQUdBLENBQUNBLENBQUNBLElBQUlBLENBQUNBO1FBQzNCQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUNQQSxXQUFXQSxDQUFDQSxLQUFLQSxHQUFHQSxFQUFFQSxDQUFDQTtJQUMzQkEsQ0FBQ0E7SUFDREgscUJBQU1BLEdBQU5BO1FBQ0lJLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLEVBQUVBLENBQUNBO0lBQzlCQSxDQUFDQTtJQUNESixxQkFBTUEsR0FBTkEsVUFBT0EsSUFBU0E7UUFDWkssSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7SUFDM0JBLENBQUNBO0lBRURMLG9CQUFLQSxHQUFMQSxVQUFNQSxHQUFjQTtRQUNoQk0sR0FBR0EsQ0FBQ0EsY0FBY0EsRUFBRUEsQ0FBQ0E7UUFDckJBLElBQUlBLENBQUNBLFdBQVdBLEdBQUdBLEtBQUtBLENBQUNBO0lBQzdCQSxDQUFDQTtJQUVETixrQkFBR0EsR0FBSEEsVUFBSUEsR0FBVUE7UUFDVk8sT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7SUFDckJBLENBQUNBO0lBRURQLHFCQUFNQSxHQUFOQTtRQUNJUSxJQUFJQSxDQUFDQSxXQUFXQSxHQUFHQSxDQUFDQSxJQUFJQSxDQUFDQSxXQUFXQSxDQUFDQTtJQUN6Q0EsQ0FBQ0E7SUFuRExSO1FBQUNBLG9CQUFTQSxDQUFDQTtZQUNQQSxRQUFRQSxFQUFFQSxNQUFNQTtZQUNoQkEsTUFBTUEsRUFBRUEsQ0FBQ0EsY0FBY0EsQ0FBQ0E7U0FDM0JBLENBQUNBO1FBQ0RBLGVBQUlBLENBQUNBO1lBQ0ZBLFdBQVdBLEVBQUVBLDhDQUE4Q0E7WUFDM0RBLFVBQVVBLEVBQUVBLENBQUNBLDBCQUFlQSxFQUFFQSwwQkFBaUJBLEVBQUVBLGFBQUtBLENBQUNBO1NBQzFEQSxDQUFDQTs7YUE2Q0RBO0lBQURBLFdBQUNBO0FBQURBLENBcERBLEFBb0RDQSxJQUFBO0FBNUNZLFlBQUksT0E0Q2hCLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9ob21lL2hvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgVmlldywgQ09SRV9ESVJFQ1RJVkVTLCBFdmVudEVtaXR0ZXIsIG9uQ29tcGxldGV9IGZyb20gJ2FuZ3VsYXIyL2FuZ3VsYXIyJztcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVN9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQgVXNlclJlcG8gZnJvbSAnLi4vLi4vc2VydmljZXMvcmVwb3NpdG9yaWVzL3VzZXJfcmVwbyc7XG5pbXBvcnQgVXNlciBmcm9tICcuLi8uLi9zZXJ2aWNlcy9tb2RlbHMvdXNlcic7XG5pbXBvcnQge0FsZXJ0fSBmcm9tICcuLi8uLi9uZzItYm9vdHN0cmFwL2FsZXJ0L2FsZXJ0JztcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnaG9tZScsXG4gICAgZXZlbnRzOiBbJ3N0YXR1c0NoYW5nZSddXG59KVxuQFZpZXcoe1xuICAgIHRlbXBsYXRlVXJsOiAnLi9jb21wb25lbnRzL2hvbWUvaG9tZS5odG1sP3Y9PCU9IFZFUlNJT04gJT4nLFxuICAgIGRpcmVjdGl2ZXM6IFtDT1JFX0RJUkVDVElWRVMsIFJPVVRFUl9ESVJFQ1RJVkVTLCBBbGVydF1cbn0pXG5leHBvcnQgY2xhc3MgSG9tZSB7XG4gICAgcHJpdmF0ZSBsb2FkaW5nOmJvb2xlYW47XG4gICAgc3RhdHVzQ2hhbmdlOiBFdmVudEVtaXR0ZXI7XG5cbiAgICAvL0Jvb3RzdHJhcCBhbGVydFxuICAgIHByaXZhdGUgYWxlcnRPcGVuZWQ6Ym9vbGVhbiA9IHRydWU7XG4gICAgdXNlck5hbWU6c3RyaW5nID0nJztcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlcG86VXNlclJlcG8pIHtcbiAgICAgICAgY29uc29sZS5sb2coVXNlclJlcG8pO1xuICAgICAgICB0aGlzLnN0YXR1c0NoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICB9XG4gICAgb25Db21wbGV0ZSgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2luc2lkZSBvbkNvbXBsZXRlJyk7XG4gICAgICAgIHRoaXMuc3RhdHVzQ2hhbmdlLm5leHQoJ2NvbXBsZXRlZCcpO1xuICAgIH1cbiAgICBhZGRVc2VyKGN1cnJlbnRVc2VyKSB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucmVwby5nZXRVc2VyKVxuICAgICAgICB0aGlzLnJlcG8uZ2V0VXNlcihjdXJyZW50VXNlci52YWx1ZSlcbiAgICAgICAgICAgIC50aGVuKHUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMudXNlck5hbWUgPSB1Lm5hbWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgY3VycmVudFVzZXIudmFsdWUgPSAnJztcbiAgICB9XG4gICAgZ2V0QWxsKCk6VXNlcltdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVwby5nZXRBbGwoKTtcbiAgICB9XG4gICAgcmVtb3ZlKHVzZXI6VXNlcikge1xuICAgICAgICB0aGlzLnJlcG8ucmVtb3ZlKHVzZXIpO1xuICAgIH1cbiAgICAvL0Jvb3RzdHJhcCBBbGVydFxuICAgIGNsb3NlKGV2dDpNb3VzZUV2ZW50KSB7XG4gICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLmFsZXJ0T3BlbmVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgbG9nKG1zZzpzdHJpbmcpIHtcbiAgICAgICAgY29uc29sZS5sb2cobXNnKTtcbiAgICB9XG5cbiAgICB0b2dnbGUoKSB7XG4gICAgICAgIHRoaXMuYWxlcnRPcGVuZWQgPSAhdGhpcy5hbGVydE9wZW5lZDtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=