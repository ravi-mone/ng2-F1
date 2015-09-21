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
var NamesList = (function () {
    function NamesList(http) {
        var _this = this;
        this.http = http;
        this.driverNames = [];
        this.articleList = [];
        http.get('drivers.json').toRx().subscribe(function (res) {
            _this.driverNames = res.json();
        });
    }
    NamesList.prototype.get = function () {
        return this.driverNames;
    };
    NamesList.prototype.getDriverSpecific = function (index) {
        console.log('callong index, ', index, this.driverNames);
        return this.driverNames[0]['DriverStandings'][index];
    };
    NamesList.prototype.getArticleList = function (index) {
        return this.articleList[index];
    };
    NamesList.prototype.postArticle = function (article) {
        this.articleList.push(article);
    };
    NamesList.prototype.deleteArticle = function (index) {
        this.articleList.splice(index, 1);
    };
    NamesList = __decorate([
        angular2_1.Injectable(),
        __param(0, angular2_1.Inject(http_1.Http)), 
        __metadata('design:paramtypes', [http_1.Http])
    ], NamesList);
    return NamesList;
})();
exports.NamesList = NamesList;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL21vZGVscy9OYW1lTGlzdC50cyJdLCJuYW1lcyI6WyJOYW1lc0xpc3QiLCJOYW1lc0xpc3QuY29uc3RydWN0b3IiLCJOYW1lc0xpc3QuZ2V0IiwiTmFtZXNMaXN0LmdldERyaXZlclNwZWNpZmljIiwiTmFtZXNMaXN0LmdldEFydGljbGVMaXN0IiwiTmFtZXNMaXN0LnBvc3RBcnRpY2xlIiwiTmFtZXNMaXN0LmRlbGV0ZUFydGljbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBS0EseUJBQTJDLG1CQUFtQixDQUFDLENBQUE7QUFDL0QscUJBQXFCLGVBQWUsQ0FBQyxDQUFBO0FBR3JDO0lBS0lBLG1CQUFrQ0EsSUFBVUE7UUFMaERDLGlCQTBCQ0E7UUFyQnFDQSxTQUFJQSxHQUFKQSxJQUFJQSxDQUFNQTtRQUY1Q0EsZ0JBQVdBLEdBQWtCQSxFQUFFQSxDQUFDQTtRQUNoQ0EsZ0JBQVdBLEdBQW9CQSxFQUFFQSxDQUFDQTtRQUU5QkEsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsY0FBY0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsRUFBRUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsVUFBQUEsR0FBR0E7WUFDekNBLEtBQUlBLENBQUNBLFdBQVdBLEdBQUdBLEdBQUdBLENBQUNBLElBQUlBLEVBQUVBLENBQUNBO1FBQ2xDQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUNQQSxDQUFDQTtJQUNERCx1QkFBR0EsR0FBSEE7UUFDSUUsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0E7SUFDNUJBLENBQUNBO0lBQ0RGLHFDQUFpQkEsR0FBakJBLFVBQWtCQSxLQUFLQTtRQUN2QkcsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsaUJBQWlCQSxFQUFFQSxLQUFLQSxFQUFFQSxJQUFJQSxDQUFDQSxXQUFXQSxDQUFDQSxDQUFDQTtRQUNwREEsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsaUJBQWlCQSxDQUFDQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTtJQUN6REEsQ0FBQ0E7SUFDREgsa0NBQWNBLEdBQWRBLFVBQWVBLEtBQUtBO1FBQ2hCSSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxXQUFXQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTtJQUNuQ0EsQ0FBQ0E7SUFDREosK0JBQVdBLEdBQVhBLFVBQVlBLE9BQU9BO1FBQ2ZLLElBQUlBLENBQUNBLFdBQVdBLENBQUNBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLENBQUNBO0lBQ25DQSxDQUFDQTtJQUNETCxpQ0FBYUEsR0FBYkEsVUFBY0EsS0FBS0E7UUFDZk0sSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsS0FBS0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7SUFDdENBLENBQUNBO0lBekJMTjtRQUFDQSxxQkFBVUEsRUFBRUE7UUFLR0EsV0FBQ0EsaUJBQU1BLENBQUNBLFdBQUlBLENBQUNBLENBQUFBOztrQkFxQjVCQTtJQUFEQSxnQkFBQ0E7QUFBREEsQ0ExQkEsQUEwQkNBLElBQUE7QUF6QlksaUJBQVMsWUF5QnJCLENBQUEiLCJmaWxlIjoic2VydmljZXMvbW9kZWxzL05hbWVMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcblRvIEZpeDogRVhDRVBUSU9OOiBDYW5ub3QgcmVzb2x2ZSBhbGwgcGFyYW1ldGVycyBmb3IgTmFtZXNMaXN0KD8pLiBNYWtlIHN1cmUgdGhleSBhbGwgaGF2ZSB2YWxpZCB0eXBlIG9yIGFubm90YXRpb25zLlxuMS4gIGltcG9ydCB7SW5qZWN0fSBmcm9tICdhbmd1bGFyMi9hbmd1bGFyMic7XG4yLiBASW5qZWN0KEh0dHApIHByaXZhdGUgX2h0dHA6IEh0dHAgaW4gY29uc3RydWN0b3JcbiovXG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIE9uSW5pdCB9IGZyb20gJ2FuZ3VsYXIyL2FuZ3VsYXIyJztcbmltcG9ydCB7IEh0dHAgfSBmcm9tICdhbmd1bGFyMi9odHRwJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTmFtZXNMaXN0IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGRyaXZlck5hbWVzOiBBcnJheSA8IGFueSA+ID0gW107XG4gICAgYXJ0aWNsZUxpc3Q6IEFycmF5IDwgT2JqZWN0ID49IFtdO1xuICAgIGNvbnN0cnVjdG9yKEBJbmplY3QoSHR0cCkgcHJpdmF0ZSBodHRwOiBIdHRwKSB7XG4gICAgICAgIGh0dHAuZ2V0KCdkcml2ZXJzLmpzb24nKS50b1J4KCkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgICAgICB0aGlzLmRyaXZlck5hbWVzID0gcmVzLmpzb24oKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZHJpdmVyTmFtZXM7XG4gICAgfVxuICAgIGdldERyaXZlclNwZWNpZmljKGluZGV4KSB7XG4gICAgY29uc29sZS5sb2coJ2NhbGxvbmcgaW5kZXgsICcsIGluZGV4LCB0aGlzLmRyaXZlck5hbWVzKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZHJpdmVyTmFtZXNbMF1bJ0RyaXZlclN0YW5kaW5ncyddW2luZGV4XTtcbiAgICB9XG4gICAgZ2V0QXJ0aWNsZUxpc3QoaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXJ0aWNsZUxpc3RbaW5kZXhdO1xuICAgIH1cbiAgICBwb3N0QXJ0aWNsZShhcnRpY2xlKSB7XG4gICAgICAgIHRoaXMuYXJ0aWNsZUxpc3QucHVzaChhcnRpY2xlKTtcbiAgICB9XG4gICAgZGVsZXRlQXJ0aWNsZShpbmRleCkge1xuICAgICAgICB0aGlzLmFydGljbGVMaXN0LnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==