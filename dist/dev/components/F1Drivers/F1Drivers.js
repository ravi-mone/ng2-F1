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
var http_1 = require('angular2/http');
var router_1 = require('angular2/router');
var points_1 = require('./points/points');
var nationality_1 = require('./nationality/nationality');
var driverheader_1 = require('./Header/driverheader');
var NameList_1 = require('../../services/models/NameList');
var F1Drivers = (function () {
    function F1Drivers(list, http) {
        this.list = list;
        this.http = http;
    }
    F1Drivers.prototype.onInit = function () {
        var result = this.list.get();
        this.driverObj = result[0]['DriverStandings'];
        this.driversList = this.driverObj;
        this.pageSelected = this.driverObj.length;
    };
    F1Drivers.prototype.showSelected = function (limitTo) {
        console.log('limitTo', limitTo);
        this.pageSelected = limitTo;
    };
    F1Drivers.prototype.filterObj = function (obj, key, nameFilter) {
        var driverName = key;
        if ((driverName.toLowerCase()).indexOf(nameFilter.toLowerCase()) !== -1) {
            obj.points = parseInt(obj.points);
            obj.position = parseInt(obj.position);
            obj.wins = parseInt(obj.wins);
            return obj;
        }
    };
    F1Drivers.prototype.filterByNames = function (nameFilter) {
        this.driverObj = this.driversList;
        var self = this;
        this.driverObj = this.driverObj.filter(function (Obj) {
            return self.filterObj(Obj, Obj.Driver.givenName, nameFilter.value);
        });
        this.pageSelected = this.driverObj.length;
    };
    F1Drivers = __decorate([
        angular2_1.Component({
            selector: 'f1Drivers',
            viewInjector: [router_1.routerInjectables],
            viewBindings: [NameList_1.NamesList]
        }),
        angular2_1.View({
            templateUrl: './components/F1Drivers/f1Drivers.html?v=0.0.0',
            directives: [points_1.Points, nationality_1.Nationality, driverheader_1.driverHeader, router_1.RouterLink, angular2_1.CORE_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [NameList_1.NamesList, http_1.Http])
    ], F1Drivers);
    return F1Drivers;
})();
exports.F1Drivers = F1Drivers;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRjFEcml2ZXJzL0YxRHJpdmVycy50cyJdLCJuYW1lcyI6WyJGMURyaXZlcnMiLCJGMURyaXZlcnMuY29uc3RydWN0b3IiLCJGMURyaXZlcnMub25Jbml0IiwiRjFEcml2ZXJzLnNob3dTZWxlY3RlZCIsIkYxRHJpdmVycy5maWx0ZXJPYmoiLCJGMURyaXZlcnMuZmlsdGVyQnlOYW1lcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx5QkFBdUQsbUJBQW1CLENBQUMsQ0FBQTtBQUUzRSxxQkFBbUIsZUFBZSxDQUFDLENBQUE7QUFDbkMsdUJBQTRDLGlCQUFpQixDQUFDLENBQUE7QUFDOUQsdUJBQXFCLGlCQUNyQixDQUFDLENBRHFDO0FBQ3RDLDRCQUEwQiwyQkFDMUIsQ0FBQyxDQURvRDtBQUNyRCw2QkFBMkIsdUJBRTNCLENBQUMsQ0FGaUQ7QUFFbEQseUJBQXdCLGdDQUFnQyxDQUFDLENBQUE7QUFLekQ7SUFlSUEsbUJBQW9CQSxJQUFlQSxFQUFVQSxJQUFTQTtRQUFsQ0MsU0FBSUEsR0FBSkEsSUFBSUEsQ0FBV0E7UUFBVUEsU0FBSUEsR0FBSkEsSUFBSUEsQ0FBS0E7SUFFdERBLENBQUNBO0lBQ0RELDBCQUFNQSxHQUFOQTtRQUNJRSxJQUFJQSxNQUFNQSxHQUFHQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxFQUFFQSxDQUFDQTtRQUM3QkEsSUFBSUEsQ0FBQ0EsU0FBU0EsR0FBSUEsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsaUJBQWlCQSxDQUFDQSxDQUFDQTtRQUMvQ0EsSUFBSUEsQ0FBQ0EsV0FBV0EsR0FBR0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0E7UUFDbENBLElBQUlBLENBQUNBLFlBQVlBLEdBQUdBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLE1BQU1BLENBQUNBO0lBQzlDQSxDQUFDQTtJQUNERixnQ0FBWUEsR0FBWkEsVUFBYUEsT0FBT0E7UUFDaEJHLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLFNBQVNBLEVBQUdBLE9BQU9BLENBQUNBLENBQUNBO1FBQ2pDQSxJQUFJQSxDQUFDQSxZQUFZQSxHQUFHQSxPQUFPQSxDQUFDQTtJQUNoQ0EsQ0FBQ0E7SUFFREgsNkJBQVNBLEdBQVRBLFVBQVVBLEdBQUdBLEVBQUVBLEdBQUdBLEVBQUVBLFVBQVVBO1FBQzFCSSxJQUFJQSxVQUFVQSxHQUFHQSxHQUFHQSxDQUFDQTtRQUNyQkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsVUFBVUEsQ0FBQ0EsV0FBV0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsVUFBVUEsQ0FBQ0EsV0FBV0EsRUFBRUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFFdEVBLEdBQUdBLENBQUNBLE1BQU1BLEdBQUdBLFFBQVFBLENBQUNBLEdBQUdBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBO1lBQ2xDQSxHQUFHQSxDQUFDQSxRQUFRQSxHQUFHQSxRQUFRQSxDQUFDQSxHQUFHQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQTtZQUN0Q0EsR0FBR0EsQ0FBQ0EsSUFBSUEsR0FBR0EsUUFBUUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7WUFDOUJBLE1BQU1BLENBQUNBLEdBQUdBLENBQUNBO1FBQ2ZBLENBQUNBO0lBQ0xBLENBQUNBO0lBQ0RKLGlDQUFhQSxHQUFiQSxVQUFjQSxVQUFVQTtRQUNwQkssSUFBSUEsQ0FBQ0EsU0FBU0EsR0FBR0EsSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0E7UUFLbENBLElBQUlBLElBQUlBLEdBQUNBLElBQUlBLENBQUNBO1FBQ2RBLElBQUlBLENBQUNBLFNBQVNBLEdBQUdBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLE1BQU1BLENBQUNBLFVBQVNBLEdBQUdBO1lBRS9DLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkUsQ0FBQyxDQUFDQSxDQUFDQTtRQUNIQSxJQUFJQSxDQUFDQSxZQUFZQSxHQUFDQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxNQUFNQSxDQUFDQTtJQUM1Q0EsQ0FBQ0E7SUFuRExMO1FBQUNBLG9CQUFTQSxDQUFDQTtZQUNQQSxRQUFRQSxFQUFFQSxXQUFXQTtZQUNyQkEsWUFBWUEsRUFBRUEsQ0FBQ0EsMEJBQWlCQSxDQUFDQTtZQUNqQ0EsWUFBWUEsRUFBQ0EsQ0FBQ0Esb0JBQVNBLENBQUNBO1NBQzNCQSxDQUFDQTtRQUVEQSxlQUFJQSxDQUFDQTtZQUNGQSxXQUFXQSxFQUFFQSx3REFBd0RBO1lBQ3JFQSxVQUFVQSxFQUFDQSxDQUFDQSxlQUFNQSxFQUFFQSx5QkFBV0EsRUFBRUEsMkJBQVlBLEVBQUVBLG1CQUFVQSxFQUFFQSwwQkFBZUEsQ0FBQ0E7U0FFOUVBLENBQUNBOztrQkEyQ0RBO0lBQURBLGdCQUFDQTtBQUFEQSxDQXJEQSxBQXFEQ0EsSUFBQTtBQTFDWSxpQkFBUyxZQTBDckIsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL0YxRHJpdmVycy9GMURyaXZlcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgVmlldywgQ09SRV9ESVJFQ1RJVkVTLCBPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2FuZ3VsYXIyJztcbmltcG9ydCB7SW5qZWN0LCBJbmplY3RhYmxlfSBmcm9tICdhbmd1bGFyMi9hbmd1bGFyMic7XG5pbXBvcnQge0h0dHB9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuaW1wb3J0IHtSb3V0ZXJMaW5rLCByb3V0ZXJJbmplY3RhYmxlc30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7UG9pbnRzfSBmcm9tICcuL3BvaW50cy9wb2ludHMnXG5pbXBvcnQge05hdGlvbmFsaXR5fSBmcm9tICcuL25hdGlvbmFsaXR5L25hdGlvbmFsaXR5J1xuaW1wb3J0IHtkcml2ZXJIZWFkZXJ9IGZyb20gJy4vSGVhZGVyL2RyaXZlcmhlYWRlcidcblxuaW1wb3J0IHtOYW1lc0xpc3R9IGZyb20gJy4uLy4uL3NlcnZpY2VzL21vZGVscy9OYW1lTGlzdCc7XG5pbXBvcnQgVXNlclJlcG8gZnJvbSAnLi4vLi4vc2VydmljZXMvcmVwb3NpdG9yaWVzL3VzZXJfcmVwbyc7XG5cblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2YxRHJpdmVycycsXG4gICAgdmlld0luamVjdG9yOiBbcm91dGVySW5qZWN0YWJsZXNdLFxuICAgIHZpZXdCaW5kaW5nczpbTmFtZXNMaXN0XVxufSlcblxuQFZpZXcoe1xuICAgIHRlbXBsYXRlVXJsOiAnLi9jb21wb25lbnRzL0YxRHJpdmVycy9mMURyaXZlcnMuaHRtbD92PTwlPSBWRVJTSU9OICU+JyxcbiAgICBkaXJlY3RpdmVzOltQb2ludHMsIE5hdGlvbmFsaXR5LCBkcml2ZXJIZWFkZXIsIFJvdXRlckxpbmssIENPUkVfRElSRUNUSVZFU11cbiAgICAvL3ZpZXdCaW5kaW5nczogW2h0dHBJbmplY3RhYmxlc11cbn0pXG5leHBvcnQgY2xhc3MgRjFEcml2ZXJzIGltcGxlbWVudHMgT25Jbml0ICB7XG4gICAgZHJpdmVyT2JqOkFycmF5PE9iamVjdD47XG4gICAgcGFnZVNlbGVjdGVkOm51bWJlcjtcbiAgICBkcml2ZXJzTGlzdDpBcnJheTxPYmplY3Q+O1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbGlzdCA6TmFtZXNMaXN0LCBwcml2YXRlIGh0dHA6SHR0cCkge1xuXG4gICAgfVxuICAgIG9uSW5pdCgpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHRoaXMubGlzdC5nZXQoKTtcbiAgICAgICAgdGhpcy5kcml2ZXJPYmogPSAgcmVzdWx0WzBdWydEcml2ZXJTdGFuZGluZ3MnXTtcbiAgICAgICAgdGhpcy5kcml2ZXJzTGlzdCA9IHRoaXMuZHJpdmVyT2JqO1xuICAgICAgICB0aGlzLnBhZ2VTZWxlY3RlZCA9IHRoaXMuZHJpdmVyT2JqLmxlbmd0aDtcbiAgICB9XG4gICAgc2hvd1NlbGVjdGVkKGxpbWl0VG8pe1xuICAgICAgICBjb25zb2xlLmxvZygnbGltaXRUbycgLCBsaW1pdFRvKTtcbiAgICAgICAgdGhpcy5wYWdlU2VsZWN0ZWQgPSBsaW1pdFRvO1xuICAgIH1cbiAgICAvL0Z1bmN0aW9uIGNhbGxlZCB3aGVuIHRoZSB1c2VyIGNsaWNrcyBvbiB0aGUgc2VhcmNoIGJ1dHRvbi5cbiAgICBmaWx0ZXJPYmoob2JqLCBrZXksIG5hbWVGaWx0ZXIpIHtcbiAgICAgICAgdmFyIGRyaXZlck5hbWUgPSBrZXk7XG4gICAgICAgIGlmICgoZHJpdmVyTmFtZS50b0xvd2VyQ2FzZSgpKS5pbmRleE9mKG5hbWVGaWx0ZXIudG9Mb3dlckNhc2UoKSkgIT09IC0xKSB7XG4gICAgICAgICAgICAvL21ha2UgcGFyc2VJbnQgc28gYXMgdG8gYXBwbHkgb3JkZXJCeSBmaWx0ZXIgb24gJ3BvaW50cycsICdwb3NpdGlvbicgYW5kICd3aW5zJyBjb2x1bW5cbiAgICAgICAgICAgIG9iai5wb2ludHMgPSBwYXJzZUludChvYmoucG9pbnRzKTtcbiAgICAgICAgICAgIG9iai5wb3NpdGlvbiA9IHBhcnNlSW50KG9iai5wb3NpdGlvbik7XG4gICAgICAgICAgICBvYmoud2lucyA9IHBhcnNlSW50KG9iai53aW5zKTtcbiAgICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZmlsdGVyQnlOYW1lcyhuYW1lRmlsdGVyKSB7XG4gICAgICAgIHRoaXMuZHJpdmVyT2JqID0gdGhpcy5kcml2ZXJzTGlzdDtcblxuICAgICAgICAvKlRoZSBmaWx0ZXIoKSBtZXRob2QgY3JlYXRlcyBhIG5ldyBhcnJheSB3aXRoIGFsbCBlbGVtZW50cyB0aGF0IHBhc3MgdGhlIHRlc3QgaW1wbGVtZW50ZWQgYnkgdGhlIHByb3ZpZGVkIGZ1bmN0aW9uLlxuICAgICAgICAgKiByZWZlcjogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvQXJyYXkvZmlsdGVyXG4gICAgICAgICAqICovXG4gICAgICAgIHZhciBzZWxmPXRoaXM7XG4gICAgICAgIHRoaXMuZHJpdmVyT2JqID0gdGhpcy5kcml2ZXJPYmouZmlsdGVyKGZ1bmN0aW9uKE9iail7XG5cbiAgICAgICAgICAgIHJldHVybiBzZWxmLmZpbHRlck9iaihPYmosIE9iai5Ecml2ZXIuZ2l2ZW5OYW1lLCBuYW1lRmlsdGVyLnZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucGFnZVNlbGVjdGVkPXRoaXMuZHJpdmVyT2JqLmxlbmd0aDtcbiAgICB9XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==