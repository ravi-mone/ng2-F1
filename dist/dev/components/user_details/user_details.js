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
var tabs_1 = require('../tabs/tabs');
var UserDetails = (function () {
    function UserDetails(repo, params) {
        var _this = this;
        this.repo = repo;
        var username = params.get('username');
        this.repo.getUser(username)
            .then(function (u) {
            _this.user = u;
        });
    }
    UserDetails.prototype.setActive = function (id) {
        this.active = id;
    };
    UserDetails.prototype.getActive = function () {
        return this.active;
    };
    UserDetails = __decorate([
        angular2_1.Component({
            selector: 'user-details'
        }),
        angular2_1.View({
            templateUrl: './components/user_details/user_details.html',
            directives: [tabs_1.Tabs, tabs_1.Tab]
        }), 
        __metadata('design:paramtypes', [user_repo_1.default, router_1.RouteParams])
    ], UserDetails);
    return UserDetails;
})();
exports.UserDetails = UserDetails;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdXNlcl9kZXRhaWxzL3VzZXJfZGV0YWlscy50cyJdLCJuYW1lcyI6WyJVc2VyRGV0YWlscyIsIlVzZXJEZXRhaWxzLmNvbnN0cnVjdG9yIiwiVXNlckRldGFpbHMuc2V0QWN0aXZlIiwiVXNlckRldGFpbHMuZ2V0QWN0aXZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHlCQUE4QixtQkFBbUIsQ0FBQyxDQUFBO0FBQ2xELHVCQUEwQixpQkFBaUIsQ0FBQyxDQUFBO0FBRTVDLDBCQUFxQix1Q0FBdUMsQ0FBQyxDQUFBO0FBRzdELHFCQUF3QixjQUFjLENBQUMsQ0FBQTtBQUV2QztJQVVFQSxxQkFBb0JBLElBQWFBLEVBQUVBLE1BQWtCQTtRQVZ2REMsaUJBdUJDQTtRQWJxQkEsU0FBSUEsR0FBSkEsSUFBSUEsQ0FBU0E7UUFDL0JBLElBQUlBLFFBQVFBLEdBQUdBLE1BQU1BLENBQUNBLEdBQUdBLENBQUNBLFVBQVVBLENBQUNBLENBQUNBO1FBQ3RDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxRQUFRQSxDQUFDQTthQUN4QkEsSUFBSUEsQ0FBQ0EsVUFBQ0EsQ0FBTUE7WUFDWEEsS0FBSUEsQ0FBQ0EsSUFBSUEsR0FBR0EsQ0FBQ0EsQ0FBQ0E7UUFDaEJBLENBQUNBLENBQUNBLENBQUFBO0lBQ05BLENBQUNBO0lBQ0RELCtCQUFTQSxHQUFUQSxVQUFVQSxFQUFFQTtRQUNWRSxJQUFJQSxDQUFDQSxNQUFNQSxHQUFHQSxFQUFFQSxDQUFDQTtJQUNuQkEsQ0FBQ0E7SUFDREYsK0JBQVNBLEdBQVRBO1FBQ0VHLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBO0lBQ3JCQSxDQUFDQTtJQXRCSEg7UUFBQ0Esb0JBQVNBLENBQUNBO1lBQ1RBLFFBQVFBLEVBQUVBLGNBQWNBO1NBQ3pCQSxDQUFDQTtRQUNEQSxlQUFJQSxDQUFDQTtZQUNKQSxXQUFXQSxFQUFFQSw2Q0FBNkNBO1lBQzFEQSxVQUFVQSxFQUFFQSxDQUFDQSxXQUFJQSxFQUFFQSxVQUFHQSxDQUFDQTtTQUN4QkEsQ0FBQ0E7O29CQWlCREE7SUFBREEsa0JBQUNBO0FBQURBLENBdkJBLEFBdUJDQSxJQUFBO0FBaEJZLG1CQUFXLGNBZ0J2QixDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvdXNlcl9kZXRhaWxzL3VzZXJfZGV0YWlscy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBWaWV3fSBmcm9tICdhbmd1bGFyMi9hbmd1bGFyMic7XG5pbXBvcnQge1JvdXRlUGFyYW1zfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuXG5pbXBvcnQgVXNlclJlcG8gZnJvbSAnLi4vLi4vc2VydmljZXMvcmVwb3NpdG9yaWVzL3VzZXJfcmVwbyc7XG5pbXBvcnQgVXNlciBmcm9tICcuLi8uLi9zZXJ2aWNlcy9tb2RlbHMvdXNlcic7XG5cbmltcG9ydCB7VGFicywgVGFifSBmcm9tICcuLi90YWJzL3RhYnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd1c2VyLWRldGFpbHMnXG59KVxuQFZpZXcoe1xuICB0ZW1wbGF0ZVVybDogJy4vY29tcG9uZW50cy91c2VyX2RldGFpbHMvdXNlcl9kZXRhaWxzLmh0bWwnLFxuICBkaXJlY3RpdmVzOiBbVGFicywgVGFiXVxufSlcbmV4cG9ydCBjbGFzcyBVc2VyRGV0YWlscyB7XG4gIHByaXZhdGUgdXNlcjpVc2VyO1xuICBwcml2YXRlIGFjdGl2ZTpzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVwbzpVc2VyUmVwbywgcGFyYW1zOlJvdXRlUGFyYW1zKSB7XG4gICAgbGV0IHVzZXJuYW1lID0gcGFyYW1zLmdldCgndXNlcm5hbWUnKTtcbiAgICB0aGlzLnJlcG8uZ2V0VXNlcih1c2VybmFtZSlcbiAgICAgIC50aGVuKCh1OlVzZXIpID0+IHtcbiAgICAgICAgdGhpcy51c2VyID0gdTtcbiAgICAgIH0pXG4gIH1cbiAgc2V0QWN0aXZlKGlkKSB7XG4gICAgdGhpcy5hY3RpdmUgPSBpZDtcbiAgfVxuICBnZXRBY3RpdmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlO1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9