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
var http_1 = require('angular2/http');
var config_1 = require('../../config/config');
var UrlBuilder = (function () {
    function UrlBuilder(url, token) {
        this.url = url;
        this.token = token;
    }
    UrlBuilder.prototype.appendToken = function (url) {
        if (this.token) {
            return url + ("?access_token=" + config_1.API_TOKEN);
        }
        return url;
    };
    UrlBuilder.prototype.user = function (user) {
        return this.appendToken(this.url + "/users/" + user);
    };
    return UrlBuilder;
})();
var GitHubAPI = (function () {
    function GitHubAPI(http) {
        this.http = http;
        this.urlBuilder = new UrlBuilder(config_1.GITHUB_API_ROOT, config_1.API_TOKEN);
        console.log(this.urlBuilder);
    }
    GitHubAPI.prototype.getUser = function (user) {
        var httpCall = this.http.get(this.urlBuilder.user(user))
            .toRx()
            .map(function (res) { return res.json(); })
            .toPromise();
        console.log(httpCall);
        return httpCall;
    };
    GitHubAPI.prototype.getDrivers = function () {
        var httpCall = this.http.get('drivers.json')
            .toRx()
            .map(function (res) { return res.json(); })
            .toPromise();
        console.log(httpCall);
        return httpCall;
    };
    GitHubAPI = __decorate([
        angular2_1.Injectable(),
        __param(0, angular2_1.Inject(http_1.Http)), 
        __metadata('design:paramtypes', [http_1.Http])
    ], GitHubAPI);
    return GitHubAPI;
})();
exports.GitHubAPI = GitHubAPI;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2FwaS9naXRodWJfYXBpLnRzIl0sIm5hbWVzIjpbIlVybEJ1aWxkZXIiLCJVcmxCdWlsZGVyLmNvbnN0cnVjdG9yIiwiVXJsQnVpbGRlci5hcHBlbmRUb2tlbiIsIlVybEJ1aWxkZXIudXNlciIsIkdpdEh1YkFQSSIsIkdpdEh1YkFQSS5jb25zdHJ1Y3RvciIsIkdpdEh1YkFQSS5nZXRVc2VyIiwiR2l0SHViQVBJLmdldERyaXZlcnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUJBQWlDLG1CQUFtQixDQUFDLENBQUE7QUFFckQscUJBQW1CLGVBQWUsQ0FBQyxDQUFBO0FBS25DLHVCQUF5QyxxQkFBcUIsQ0FBQyxDQUFBO0FBRS9EO0lBQ0VBLG9CQUFvQkEsR0FBVUEsRUFBVUEsS0FBWUE7UUFBaENDLFFBQUdBLEdBQUhBLEdBQUdBLENBQU9BO1FBQVVBLFVBQUtBLEdBQUxBLEtBQUtBLENBQU9BO0lBQUdBLENBQUNBO0lBQ2hERCxnQ0FBV0EsR0FBbkJBLFVBQW9CQSxHQUFVQTtRQUM1QkUsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDZkEsTUFBTUEsQ0FBQ0EsR0FBR0EsR0FBR0Esb0JBQWlCQSxrQkFBU0EsQ0FBRUEsQ0FBQ0E7UUFDNUNBLENBQUNBO1FBQ0RBLE1BQU1BLENBQUNBLEdBQUdBLENBQUNBO0lBQ2JBLENBQUNBO0lBQ0RGLHlCQUFJQSxHQUFKQSxVQUFLQSxJQUFXQTtRQUNkRyxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxXQUFXQSxDQUFJQSxJQUFJQSxDQUFDQSxHQUFHQSxlQUFVQSxJQUFNQSxDQUFDQSxDQUFDQTtJQUN2REEsQ0FBQ0E7SUFDSEgsaUJBQUNBO0FBQURBLENBWEEsQUFXQ0EsSUFBQTtBQUVEO0lBR0VJLG1CQUFrQ0EsSUFBU0E7UUFBVEMsU0FBSUEsR0FBSkEsSUFBSUEsQ0FBS0E7UUFDekNBLElBQUlBLENBQUNBLFVBQVVBLEdBQUdBLElBQUlBLFVBQVVBLENBQUNBLHdCQUFlQSxFQUFFQSxrQkFBU0EsQ0FBQ0EsQ0FBQ0E7UUFDL0RBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLENBQUFBO0lBQzVCQSxDQUFDQTtJQUNNRCwyQkFBT0EsR0FBZEEsVUFBZUEsSUFBV0E7UUFFeEJFLElBQUlBLFFBQVFBLEdBQUdBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO2FBQ25EQSxJQUFJQSxFQUFFQTthQUNSQSxHQUFHQSxDQUFDQSxVQUFBQSxHQUFHQSxJQUFJQSxPQUFBQSxHQUFHQSxDQUFDQSxJQUFJQSxFQUFFQSxFQUFWQSxDQUFVQSxDQUFDQTthQUN0QkEsU0FBU0EsRUFBRUEsQ0FBQ0E7UUFDYkEsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQUE7UUFDdkJBLE1BQU1BLENBQUNBLFFBQVFBLENBQUNBO0lBQ2xCQSxDQUFDQTtJQUNJRiw4QkFBVUEsR0FBakJBO1FBRUVHLElBQUlBLFFBQVFBLEdBQUdBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLGNBQWNBLENBQUNBO2FBQ3ZDQSxJQUFJQSxFQUFFQTthQUNOQSxHQUFHQSxDQUFDQSxVQUFBQSxHQUFHQSxJQUFJQSxPQUFBQSxHQUFHQSxDQUFDQSxJQUFJQSxFQUFFQSxFQUFWQSxDQUFVQSxDQUFDQTthQUN0QkEsU0FBU0EsRUFBRUEsQ0FBQ0E7UUFDakJBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLFFBQVFBLENBQUNBLENBQUFBO1FBQ3JCQSxNQUFNQSxDQUFDQSxRQUFRQSxDQUFDQTtJQUNsQkEsQ0FBQ0E7SUF4QkRIO1FBQUNBLHFCQUFVQSxFQUFFQTtRQUdDQSxXQUFDQSxpQkFBTUEsQ0FBQ0EsV0FBSUEsQ0FBQ0EsQ0FBQUE7O2tCQXNCMUJBO0lBQURBLGdCQUFDQTtBQUFEQSxDQXpCQSxBQXlCQ0EsSUFBQTtBQXhCWSxpQkFBUyxZQXdCckIsQ0FBQSIsImZpbGUiOiJzZXJ2aWNlcy9hcGkvZ2l0aHViX2FwaS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0LCBJbmplY3RhYmxlfSBmcm9tICdhbmd1bGFyMi9hbmd1bGFyMic7XG5cbmltcG9ydCB7SHR0cH0gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XG5cbmltcG9ydCB7SVByb21pc2V9IGZyb20gJ3J4JztcblxuaW1wb3J0IHtHaXRIdWJVc2VyfSBmcm9tICcuL2ludGVyZmFjZXMnO1xuaW1wb3J0IHtHSVRIVUJfQVBJX1JPT1QsIEFQSV9UT0tFTn0gZnJvbSAnLi4vLi4vY29uZmlnL2NvbmZpZyc7XG5cbmNsYXNzIFVybEJ1aWxkZXIge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHVybDpzdHJpbmcsIHByaXZhdGUgdG9rZW46c3RyaW5nKSB7fVxuICBwcml2YXRlIGFwcGVuZFRva2VuKHVybDpzdHJpbmcpOnN0cmluZyB7XG4gICAgaWYgKHRoaXMudG9rZW4pIHtcbiAgICAgIHJldHVybiB1cmwgKyBgP2FjY2Vzc190b2tlbj0ke0FQSV9UT0tFTn1gO1xuICAgIH1cbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVzZXIodXNlcjpzdHJpbmcpOnN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuYXBwZW5kVG9rZW4oYCR7dGhpcy51cmx9L3VzZXJzLyR7dXNlcn1gKTtcbiAgfVxufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgR2l0SHViQVBJIHtcbiAgcHJpdmF0ZSB1cmxCdWlsZGVyOlVybEJ1aWxkZXI7XG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoSHR0cCkgcHJpdmF0ZSBodHRwOkh0dHApIHtcbiAgICB0aGlzLnVybEJ1aWxkZXIgPSBuZXcgVXJsQnVpbGRlcihHSVRIVUJfQVBJX1JPT1QsIEFQSV9UT0tFTik7XG4gIGNvbnNvbGUubG9nKHRoaXMudXJsQnVpbGRlcilcbiAgfVxuICBwdWJsaWMgZ2V0VXNlcih1c2VyOnN0cmluZyk6SVByb21pc2U8R2l0SHViVXNlcj4ge1xuICAvL2h0dHAucmVxdWVzdCgnZGF0YS50eHQnKS5zdWJzY3JpYmUocmVzID0+IHRoaXMuZGF0YSA9IHJlcy50ZXh0KCkpO1xuICAgIHZhciBodHRwQ2FsbCA9IHRoaXMuaHR0cC5nZXQodGhpcy51cmxCdWlsZGVyLnVzZXIodXNlcikpXG4gICAgICAgIC50b1J4KClcbiAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAudG9Qcm9taXNlKCk7XG4gICAgICBjb25zb2xlLmxvZyhodHRwQ2FsbClcbiAgICByZXR1cm4gaHR0cENhbGw7XG4gIH1cbnB1YmxpYyBnZXREcml2ZXJzKCk6SVByb21pc2Uge1xuICAvL2h0dHAucmVxdWVzdCgnZGF0YS50eHQnKS5zdWJzY3JpYmUocmVzID0+IHRoaXMuZGF0YSA9IHJlcy50ZXh0KCkpO1xuICB2YXIgaHR0cENhbGwgPSB0aGlzLmh0dHAuZ2V0KCdkcml2ZXJzLmpzb24nKVxuICAgICAgLnRvUngoKVxuICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50b1Byb21pc2UoKTtcbiAgY29uc29sZS5sb2coaHR0cENhbGwpXG4gIHJldHVybiBodHRwQ2FsbDtcbn1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==