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
        if (result) {
            this.driverObj = result[0]['DriverStandings'];
            this.driversList = this.driverObj;
            this.pageSelected = this.driverObj.length;
        }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRjFEcml2ZXJzL0YxRHJpdmVycy50cyJdLCJuYW1lcyI6WyJGMURyaXZlcnMiLCJGMURyaXZlcnMuY29uc3RydWN0b3IiLCJGMURyaXZlcnMub25Jbml0IiwiRjFEcml2ZXJzLnNob3dTZWxlY3RlZCIsIkYxRHJpdmVycy5maWx0ZXJPYmoiLCJGMURyaXZlcnMuZmlsdGVyQnlOYW1lcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx5QkFBdUQsbUJBQW1CLENBQUMsQ0FBQTtBQUUzRSxxQkFBbUIsZUFBZSxDQUFDLENBQUE7QUFDbkMsdUJBQTRDLGlCQUFpQixDQUFDLENBQUE7QUFDOUQsdUJBQXFCLGlCQUNyQixDQUFDLENBRHFDO0FBQ3RDLDRCQUEwQiwyQkFDMUIsQ0FBQyxDQURvRDtBQUNyRCw2QkFBMkIsdUJBRTNCLENBQUMsQ0FGaUQ7QUFFbEQseUJBQXdCLGdDQUFnQyxDQUFDLENBQUE7QUFLekQ7SUFtQklBLG1CQUFvQkEsSUFBZUEsRUFBVUEsSUFBU0E7UUFBbENDLFNBQUlBLEdBQUpBLElBQUlBLENBQVdBO1FBQVVBLFNBQUlBLEdBQUpBLElBQUlBLENBQUtBO0lBRXREQSxDQUFDQTtJQUNERCwwQkFBTUEsR0FBTkE7UUFDSUUsSUFBSUEsTUFBTUEsR0FBR0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsRUFBRUEsQ0FBQ0E7UUFDN0JBLEVBQUVBLENBQUFBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBLENBQUNBO1lBQ1JBLElBQUlBLENBQUNBLFNBQVNBLEdBQUdBLE1BQU1BLENBQUNBLENBQUNBLENBQUNBLENBQUNBLGlCQUFpQkEsQ0FBQ0EsQ0FBQ0E7WUFDOUNBLElBQUlBLENBQUNBLFdBQVdBLEdBQUdBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBO1lBQ2xDQSxJQUFJQSxDQUFDQSxZQUFZQSxHQUFHQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxNQUFNQSxDQUFDQTtRQUM5Q0EsQ0FBQ0E7SUFDTEEsQ0FBQ0E7SUFDREYsZ0NBQVlBLEdBQVpBLFVBQWFBLE9BQU9BO1FBQ2hCRyxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxTQUFTQSxFQUFHQSxPQUFPQSxDQUFDQSxDQUFDQTtRQUNqQ0EsSUFBSUEsQ0FBQ0EsWUFBWUEsR0FBR0EsT0FBT0EsQ0FBQ0E7SUFDaENBLENBQUNBO0lBRURILDZCQUFTQSxHQUFUQSxVQUFVQSxHQUFHQSxFQUFFQSxHQUFHQSxFQUFFQSxVQUFVQTtRQUMxQkksSUFBSUEsVUFBVUEsR0FBR0EsR0FBR0EsQ0FBQ0E7UUFDckJBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLFVBQVVBLENBQUNBLFdBQVdBLEVBQUVBLENBQUNBLENBQUNBLE9BQU9BLENBQUNBLFVBQVVBLENBQUNBLFdBQVdBLEVBQUVBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBRXRFQSxHQUFHQSxDQUFDQSxNQUFNQSxHQUFHQSxRQUFRQSxDQUFDQSxHQUFHQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQTtZQUNsQ0EsR0FBR0EsQ0FBQ0EsUUFBUUEsR0FBR0EsUUFBUUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0E7WUFDdENBLEdBQUdBLENBQUNBLElBQUlBLEdBQUdBLFFBQVFBLENBQUNBLEdBQUdBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO1lBQzlCQSxNQUFNQSxDQUFDQSxHQUFHQSxDQUFDQTtRQUNmQSxDQUFDQTtJQUNMQSxDQUFDQTtJQUNESixpQ0FBYUEsR0FBYkEsVUFBY0EsVUFBVUE7UUFDcEJLLElBQUlBLENBQUNBLFNBQVNBLEdBQUdBLElBQUlBLENBQUNBLFdBQVdBLENBQUNBO1FBS2xDQSxJQUFJQSxJQUFJQSxHQUFDQSxJQUFJQSxDQUFDQTtRQUNkQSxJQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxNQUFNQSxDQUFDQSxVQUFTQSxHQUFHQTtZQUUvQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZFLENBQUMsQ0FBQ0EsQ0FBQ0E7UUFDSEEsSUFBSUEsQ0FBQ0EsWUFBWUEsR0FBQ0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsTUFBTUEsQ0FBQ0E7SUFDNUNBLENBQUNBO0lBekRMTDtRQUFDQSxvQkFBU0EsQ0FBQ0E7WUFDUEEsUUFBUUEsRUFBRUEsV0FBV0E7WUFDckJBLFlBQVlBLEVBQUVBLENBQUNBLDBCQUFpQkEsQ0FBQ0E7WUFLakNBLFlBQVlBLEVBQUNBLENBQUNBLG9CQUFTQSxDQUFDQTtTQUMzQkEsQ0FBQ0E7UUFFREEsZUFBSUEsQ0FBQ0E7WUFDRkEsV0FBV0EsRUFBRUEsd0RBQXdEQTtZQUNyRUEsVUFBVUEsRUFBQ0EsQ0FBQ0EsZUFBTUEsRUFBRUEseUJBQVdBLEVBQUVBLDJCQUFZQSxFQUFFQSxtQkFBVUEsRUFBRUEsMEJBQWVBLENBQUNBO1NBRTlFQSxDQUFDQTs7a0JBNkNEQTtJQUFEQSxnQkFBQ0E7QUFBREEsQ0EzREEsQUEyRENBLElBQUE7QUE1Q1ksaUJBQVMsWUE0Q3JCLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9GMURyaXZlcnMvRjFEcml2ZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIFZpZXcsIENPUkVfRElSRUNUSVZFUywgT25Jbml0fSBmcm9tICdhbmd1bGFyMi9hbmd1bGFyMic7XG5pbXBvcnQge0luamVjdCwgSW5qZWN0YWJsZX0gZnJvbSAnYW5ndWxhcjIvYW5ndWxhcjInO1xuaW1wb3J0IHtIdHRwfSBmcm9tICdhbmd1bGFyMi9odHRwJztcbmltcG9ydCB7Um91dGVyTGluaywgcm91dGVySW5qZWN0YWJsZXN9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQge1BvaW50c30gZnJvbSAnLi9wb2ludHMvcG9pbnRzJ1xuaW1wb3J0IHtOYXRpb25hbGl0eX0gZnJvbSAnLi9uYXRpb25hbGl0eS9uYXRpb25hbGl0eSdcbmltcG9ydCB7ZHJpdmVySGVhZGVyfSBmcm9tICcuL0hlYWRlci9kcml2ZXJoZWFkZXInXG5cbmltcG9ydCB7TmFtZXNMaXN0fSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9tb2RlbHMvTmFtZUxpc3QnO1xuaW1wb3J0IFVzZXJSZXBvIGZyb20gJy4uLy4uL3NlcnZpY2VzL3JlcG9zaXRvcmllcy91c2VyX3JlcG8nO1xuXG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdmMURyaXZlcnMnLFxuICAgIHZpZXdJbmplY3RvcjogW3JvdXRlckluamVjdGFibGVzXSxcbiAgICAvKlxuICAgICogYmluZGluZ3MgYXJlIGF2YWlsYWJsZSB0byBhIGNvbXBvbmVudCBhbmQgaXRzIGNoaWxkcmVuLFxuICAgICogdmlld0JpbmRpbmdzIGFyZSBvbmx5IGF2YWlsYWJsZSB0byBhIHBhcnRpY3VsYXIgdmlldyxcbiAgICAqICovXG4gICAgdmlld0JpbmRpbmdzOltOYW1lc0xpc3RdXG59KVxuXG5AVmlldyh7XG4gICAgdGVtcGxhdGVVcmw6ICcuL2NvbXBvbmVudHMvRjFEcml2ZXJzL2YxRHJpdmVycy5odG1sP3Y9PCU9IFZFUlNJT04gJT4nLFxuICAgIGRpcmVjdGl2ZXM6W1BvaW50cywgTmF0aW9uYWxpdHksIGRyaXZlckhlYWRlciwgUm91dGVyTGluaywgQ09SRV9ESVJFQ1RJVkVTXVxuICAgIC8vdmlld0JpbmRpbmdzOiBbaHR0cEluamVjdGFibGVzXVxufSlcbmV4cG9ydCBjbGFzcyBGMURyaXZlcnMgaW1wbGVtZW50cyBPbkluaXQgIHtcbiAgICBkcml2ZXJPYmo6QXJyYXk8T2JqZWN0PjtcbiAgICBwYWdlU2VsZWN0ZWQ6bnVtYmVyO1xuICAgIGRyaXZlcnNMaXN0OkFycmF5PE9iamVjdD47XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBsaXN0IDpOYW1lc0xpc3QsIHByaXZhdGUgaHR0cDpIdHRwKSB7XG5cbiAgICB9XG4gICAgb25Jbml0KCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gdGhpcy5saXN0LmdldCgpO1xuICAgICAgICBpZihyZXN1bHQpIHtcbiAgICAgICAgICAgIHRoaXMuZHJpdmVyT2JqID0gcmVzdWx0WzBdWydEcml2ZXJTdGFuZGluZ3MnXTtcbiAgICAgICAgICAgIHRoaXMuZHJpdmVyc0xpc3QgPSB0aGlzLmRyaXZlck9iajtcbiAgICAgICAgICAgIHRoaXMucGFnZVNlbGVjdGVkID0gdGhpcy5kcml2ZXJPYmoubGVuZ3RoO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNob3dTZWxlY3RlZChsaW1pdFRvKXtcbiAgICAgICAgY29uc29sZS5sb2coJ2xpbWl0VG8nICwgbGltaXRUbyk7XG4gICAgICAgIHRoaXMucGFnZVNlbGVjdGVkID0gbGltaXRUbztcbiAgICB9XG4gICAgLy9GdW5jdGlvbiBjYWxsZWQgd2hlbiB0aGUgdXNlciBjbGlja3Mgb24gdGhlIHNlYXJjaCBidXR0b24uXG4gICAgZmlsdGVyT2JqKG9iaiwga2V5LCBuYW1lRmlsdGVyKSB7XG4gICAgICAgIHZhciBkcml2ZXJOYW1lID0ga2V5O1xuICAgICAgICBpZiAoKGRyaXZlck5hbWUudG9Mb3dlckNhc2UoKSkuaW5kZXhPZihuYW1lRmlsdGVyLnRvTG93ZXJDYXNlKCkpICE9PSAtMSkge1xuICAgICAgICAgICAgLy9tYWtlIHBhcnNlSW50IHNvIGFzIHRvIGFwcGx5IG9yZGVyQnkgZmlsdGVyIG9uICdwb2ludHMnLCAncG9zaXRpb24nIGFuZCAnd2lucycgY29sdW1uXG4gICAgICAgICAgICBvYmoucG9pbnRzID0gcGFyc2VJbnQob2JqLnBvaW50cyk7XG4gICAgICAgICAgICBvYmoucG9zaXRpb24gPSBwYXJzZUludChvYmoucG9zaXRpb24pO1xuICAgICAgICAgICAgb2JqLndpbnMgPSBwYXJzZUludChvYmoud2lucyk7XG4gICAgICAgICAgICByZXR1cm4gb2JqO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZpbHRlckJ5TmFtZXMobmFtZUZpbHRlcikge1xuICAgICAgICB0aGlzLmRyaXZlck9iaiA9IHRoaXMuZHJpdmVyc0xpc3Q7XG5cbiAgICAgICAgLypUaGUgZmlsdGVyKCkgbWV0aG9kIGNyZWF0ZXMgYSBuZXcgYXJyYXkgd2l0aCBhbGwgZWxlbWVudHMgdGhhdCBwYXNzIHRoZSB0ZXN0IGltcGxlbWVudGVkIGJ5IHRoZSBwcm92aWRlZCBmdW5jdGlvbi5cbiAgICAgICAgICogcmVmZXI6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0FycmF5L2ZpbHRlclxuICAgICAgICAgKiAqL1xuICAgICAgICB2YXIgc2VsZj10aGlzO1xuICAgICAgICB0aGlzLmRyaXZlck9iaiA9IHRoaXMuZHJpdmVyT2JqLmZpbHRlcihmdW5jdGlvbihPYmope1xuXG4gICAgICAgICAgICByZXR1cm4gc2VsZi5maWx0ZXJPYmooT2JqLCBPYmouRHJpdmVyLmdpdmVuTmFtZSwgbmFtZUZpbHRlci52YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnBhZ2VTZWxlY3RlZD10aGlzLmRyaXZlck9iai5sZW5ndGg7XG4gICAgfVxuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=