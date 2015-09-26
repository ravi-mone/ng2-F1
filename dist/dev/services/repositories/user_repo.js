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
var github_api_1 = require('../api/github_api');
var user_1 = require('../models/user');
var UserRepo = (function () {
    function UserRepo(api) {
        this.api = api;
        this.users = new Map();
    }
    UserRepo.prototype.getUser = function (username) {
        var _this = this;
        if (this.users.has(username)) {
            return Promise.resolve(this.users.get(username));
        }
        else {
            return this.api.getUser(username)
                .then(function (u) {
                var user = new user_1.default();
                user.id = u.id;
                user.name = u.name;
                user.username = u.login;
                user.avatarUrl = u.avatar_url;
                user.followers = u.followers;
                user.following = u.following;
                _this.users.set(username, user);
                return user;
            });
        }
    };
    UserRepo.prototype.getDrivers = function () {
        return this.api.getDrivers()
            .then(function (u) {
            console.log('In user_repo.ts');
            return u;
        });
    };
    UserRepo.prototype.getAll = function () {
        return this.users.values();
    };
    UserRepo.prototype.remove = function (user) {
        this.users.delete(user.username);
    };
    UserRepo = __decorate([
        angular2_1.Injectable(),
        __param(0, angular2_1.Inject(github_api_1.GitHubAPI)), 
        __metadata('design:paramtypes', [github_api_1.GitHubAPI])
    ], UserRepo);
    return UserRepo;
})();
exports.default = UserRepo;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL3JlcG9zaXRvcmllcy91c2VyX3JlcG8udHMiXSwibmFtZXMiOlsiVXNlclJlcG8iLCJVc2VyUmVwby5jb25zdHJ1Y3RvciIsIlVzZXJSZXBvLmdldFVzZXIiLCJVc2VyUmVwby5nZXREcml2ZXJzIiwiVXNlclJlcG8uZ2V0QWxsIiwiVXNlclJlcG8ucmVtb3ZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLHlCQUEyQyxtQkFBbUIsQ0FBQyxDQUFBO0FBRS9ELDJCQUF3QixtQkFBbUIsQ0FBQyxDQUFBO0FBRzVDLHFCQUFpQixnQkFBZ0IsQ0FBQyxDQUFBO0FBRWxDO0lBR0VBLGtCQUF1Q0EsR0FBYUE7UUFBYkMsUUFBR0EsR0FBSEEsR0FBR0EsQ0FBVUE7UUFDbERBLElBQUlBLENBQUNBLEtBQUtBLEdBQUdBLElBQUlBLEdBQUdBLEVBQWdCQSxDQUFDQTtJQUN2Q0EsQ0FBQ0E7SUFDREQsMEJBQU9BLEdBQVBBLFVBQVFBLFFBQWVBO1FBQXZCRSxpQkFpQkNBO1FBaEJDQSxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUM3QkEsTUFBTUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDbkRBLENBQUNBO1FBQUNBLElBQUlBLENBQUNBLENBQUNBO1lBQ05BLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLE9BQU9BLENBQUNBLFFBQVFBLENBQUNBO2lCQUM5QkEsSUFBSUEsQ0FBQ0EsVUFBQ0EsQ0FBWUE7Z0JBQ2pCQSxJQUFJQSxJQUFJQSxHQUFHQSxJQUFJQSxjQUFJQSxFQUFFQSxDQUFDQTtnQkFDdEJBLElBQUlBLENBQUNBLEVBQUVBLEdBQUdBLENBQUNBLENBQUNBLEVBQUVBLENBQUNBO2dCQUNmQSxJQUFJQSxDQUFDQSxJQUFJQSxHQUFHQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQTtnQkFDbkJBLElBQUlBLENBQUNBLFFBQVFBLEdBQUdBLENBQUNBLENBQUNBLEtBQUtBLENBQUNBO2dCQUN4QkEsSUFBSUEsQ0FBQ0EsU0FBU0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsVUFBVUEsQ0FBQ0E7Z0JBQzlCQSxJQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxDQUFDQSxDQUFDQSxTQUFTQSxDQUFDQTtnQkFDN0JBLElBQUlBLENBQUNBLFNBQVNBLEdBQUdBLENBQUNBLENBQUNBLFNBQVNBLENBQUNBO2dCQUM3QkEsS0FBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsUUFBUUEsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7Z0JBQy9CQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQTtZQUNkQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUNQQSxDQUFDQTtJQUNIQSxDQUFDQTtJQUNIRiw2QkFBVUEsR0FBVkE7UUFDRUcsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsVUFBVUEsRUFBR0E7YUFDeEJBLElBQUlBLENBQUNBLFVBQUNBLENBQUtBO1lBQ1pBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLGlCQUFpQkEsQ0FBQ0EsQ0FBQ0E7WUFDN0JBLE1BQU1BLENBQUNBLENBQUNBLENBQUNBO1FBQ1hBLENBQUNBLENBQUNBLENBQUNBO0lBQ1RBLENBQUNBO0lBQ0NILHlCQUFNQSxHQUFOQTtRQUNFSSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxNQUFNQSxFQUFFQSxDQUFDQTtJQUM3QkEsQ0FBQ0E7SUFDREoseUJBQU1BLEdBQU5BLFVBQU9BLElBQVNBO1FBQ2RLLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLENBQUNBO0lBQ25DQSxDQUFDQTtJQXBDSEw7UUFBQ0EscUJBQVVBLEVBQUVBO1FBR0NBLFdBQUNBLGlCQUFNQSxDQUFDQSxzQkFBU0EsQ0FBQ0EsQ0FBQUE7O2lCQWtDL0JBO0lBQURBLGVBQUNBO0FBQURBLENBckNBLEFBcUNDQSxJQUFBO0FBckNELDBCQXFDQyxDQUFBIiwiZmlsZSI6InNlcnZpY2VzL3JlcG9zaXRvcmllcy91c2VyX3JlcG8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdCwgSW5qZWN0YWJsZSwgSVByb21pc2V9IGZyb20gJ2FuZ3VsYXIyL2FuZ3VsYXIyJztcblxuaW1wb3J0IHtHaXRIdWJBUEl9IGZyb20gJy4uL2FwaS9naXRodWJfYXBpJztcbmltcG9ydCB7R2l0SHViVXNlcn0gZnJvbSAnLi4vYXBpL2ludGVyZmFjZXMnO1xuXG5pbXBvcnQgVXNlciBmcm9tICcuLi9tb2RlbHMvdXNlcic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJSZXBvIHtcbiAgcHJpdmF0ZSB1c2VyczpNYXA8c3RyaW5nLCBVc2VyPjtcbiAgY29uc3RydWN0b3IoQEluamVjdChHaXRIdWJBUEkpIHByaXZhdGUgYXBpOkdpdEh1YkFQSSkge1xuICAgIHRoaXMudXNlcnMgPSBuZXcgTWFwPHN0cmluZywgVXNlcj4oKTtcbiAgfVxuICBnZXRVc2VyKHVzZXJuYW1lOnN0cmluZyk6SVByb21pc2U8VXNlcj4ge1xuICAgIGlmICh0aGlzLnVzZXJzLmhhcyh1c2VybmFtZSkpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy51c2Vycy5nZXQodXNlcm5hbWUpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuYXBpLmdldFVzZXIodXNlcm5hbWUpXG4gICAgICAgIC50aGVuKCh1OkdpdEh1YlVzZXIpID0+IHtcbiAgICAgICAgICBsZXQgdXNlciA9IG5ldyBVc2VyKCk7XG4gICAgICAgICAgdXNlci5pZCA9IHUuaWQ7XG4gICAgICAgICAgdXNlci5uYW1lID0gdS5uYW1lO1xuICAgICAgICAgIHVzZXIudXNlcm5hbWUgPSB1LmxvZ2luO1xuICAgICAgICAgIHVzZXIuYXZhdGFyVXJsID0gdS5hdmF0YXJfdXJsO1xuICAgICAgICAgIHVzZXIuZm9sbG93ZXJzID0gdS5mb2xsb3dlcnM7XG4gICAgICAgICAgdXNlci5mb2xsb3dpbmcgPSB1LmZvbGxvd2luZztcbiAgICAgICAgICB0aGlzLnVzZXJzLnNldCh1c2VybmFtZSwgdXNlcik7XG4gICAgICAgICAgcmV0dXJuIHVzZXI7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuZ2V0RHJpdmVycygpOklQcm9taXNlICB7XG4gIHJldHVybiB0aGlzLmFwaS5nZXREcml2ZXJzKCApXG4gICAgICAudGhlbigodTphbnkpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdJbiB1c2VyX3JlcG8udHMnKTtcbiAgICAgICAgcmV0dXJuIHU7XG4gICAgICB9KTtcbn1cbiAgZ2V0QWxsKCk6VXNlcltdIHtcbiAgICByZXR1cm4gdGhpcy51c2Vycy52YWx1ZXMoKTtcbiAgfVxuICByZW1vdmUodXNlcjpVc2VyKSB7XG4gICAgdGhpcy51c2Vycy5kZWxldGUodXNlci51c2VybmFtZSk7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=