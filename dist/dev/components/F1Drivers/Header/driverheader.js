/**
 * Created by ravi on 28/8/15.
 */
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
var NameList_1 = require('../../../services/models/NameList');
var driverHeader = (function () {
    function driverHeader(list) {
        this.list = list;
        this.isreverse = false;
    }
    driverHeader.prototype.onInit = function () {
        this.driverObj = this.list.get();
        this.driverObj = this.driverObj[0]['DriverStandings'];
    };
    driverHeader.prototype.sortBy = function (name) {
        if (this.isreverse == false) {
            this.driverObj = this.driverObj.sort(function (a, b) {
                return a[name] - b[name];
            });
            this.isreverse = true;
        }
        else {
            this.driverObj = this.driverObj.sort(function (a, b) {
                return b[name] - a[name];
            });
            this.isreverse = false;
        }
    };
    driverHeader = __decorate([
        angular2_1.Component({
            selector: 'driverHeader',
        }),
        angular2_1.View({
            templateUrl: './components/F1Drivers/Header/driverheader.html?v=0.0.0'
        }), 
        __metadata('design:paramtypes', [NameList_1.NamesList])
    ], driverHeader);
    return driverHeader;
})();
exports.driverHeader = driverHeader;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRjFEcml2ZXJzL0hlYWRlci9kcml2ZXJoZWFkZXIudHMiXSwibmFtZXMiOlsiZHJpdmVySGVhZGVyIiwiZHJpdmVySGVhZGVyLmNvbnN0cnVjdG9yIiwiZHJpdmVySGVhZGVyLm9uSW5pdCIsImRyaXZlckhlYWRlci5zb3J0QnkiXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHOzs7Ozs7Ozs7Ozs7QUFFSCx5QkFBc0MsbUJBQW1CLENBQUMsQ0FBQTtBQUUxRCx5QkFBd0IsbUNBQW1DLENBQUMsQ0FBQTtBQUU1RDtJQVdJQSxzQkFBbUJBLElBQWVBO1FBQWZDLFNBQUlBLEdBQUpBLElBQUlBLENBQVdBO1FBRmxDQSxjQUFTQSxHQUFXQSxLQUFLQSxDQUFDQTtJQUkxQkEsQ0FBQ0E7SUFDREQsNkJBQU1BLEdBQU5BO1FBQ0lFLElBQUlBLENBQUNBLFNBQVNBLEdBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLEdBQUdBLEVBQUVBLENBQUNBO1FBQy9CQSxJQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxpQkFBaUJBLENBQUNBLENBQUNBO0lBQzFEQSxDQUFDQTtJQUVERiw2QkFBTUEsR0FBTkEsVUFBT0EsSUFBSUE7UUFDUEcsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsU0FBU0EsSUFBSUEsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDMUJBLElBQUlBLENBQUNBLFNBQVNBLEdBQUdBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLEVBQUVBLENBQUNBO2dCQUMvQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM3QixDQUFDLENBQUNBLENBQUNBO1lBQ0hBLElBQUlBLENBQUNBLFNBQVNBLEdBQUdBLElBQUlBLENBQUNBO1FBQzFCQSxDQUFDQTtRQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtZQUNKQSxJQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxFQUFFQSxDQUFDQTtnQkFDL0MsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDN0IsQ0FBQyxDQUFDQSxDQUFDQTtZQUNIQSxJQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxLQUFLQSxDQUFDQTtRQUMzQkEsQ0FBQ0E7SUFFTEEsQ0FBQ0E7SUFoQ0xIO1FBQUNBLG9CQUFTQSxDQUFDQTtZQUNQQSxRQUFRQSxFQUFFQSxjQUFjQTtTQUMzQkEsQ0FBQ0E7UUFDREEsZUFBSUEsQ0FBQ0E7WUFDRkEsV0FBV0EsRUFBRUEsa0VBQWtFQTtTQUNsRkEsQ0FBQ0E7O3FCQTRCREE7SUFBREEsbUJBQUNBO0FBQURBLENBakNBLEFBaUNDQSxJQUFBO0FBM0JZLG9CQUFZLGVBMkJ4QixDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvRjFEcml2ZXJzL0hlYWRlci9kcml2ZXJoZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgcmF2aSBvbiAyOC84LzE1LlxuICovXG5cbmltcG9ydCB7Q29tcG9uZW50LCBWaWV3LCBvbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2FuZ3VsYXIyJztcblxuaW1wb3J0IHtOYW1lc0xpc3R9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL21vZGVscy9OYW1lTGlzdCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZHJpdmVySGVhZGVyJyxcbn0pXG5AVmlldyh7XG4gICAgdGVtcGxhdGVVcmw6ICcuL2NvbXBvbmVudHMvRjFEcml2ZXJzL0hlYWRlci9kcml2ZXJoZWFkZXIuaHRtbD92PTwlPSBWRVJTSU9OICU+J1xufSlcbmV4cG9ydCBjbGFzcyBkcml2ZXJIZWFkZXIgaW1wbGVtZW50cyBvbkluaXR7XG5cbiAgICBkcml2ZXJPYmo6QXJyYXk8T2JqZWN0PjtcbiAgICBpc3JldmVyc2U6Ym9vbGVhbiA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGxpc3Q6IE5hbWVzTGlzdCl7XG5cbiAgICB9XG4gICAgb25Jbml0KCkge1xuICAgICAgICB0aGlzLmRyaXZlck9iaj10aGlzLmxpc3QuZ2V0KCk7XG4gICAgICAgIHRoaXMuZHJpdmVyT2JqID0gdGhpcy5kcml2ZXJPYmpbMF1bJ0RyaXZlclN0YW5kaW5ncyddO1xuICAgIH1cblxuICAgIHNvcnRCeShuYW1lKSB7XG4gICAgICAgIGlmICh0aGlzLmlzcmV2ZXJzZSA9PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhpcy5kcml2ZXJPYmogPSB0aGlzLmRyaXZlck9iai5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFbbmFtZV0gLSBiW25hbWVdO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmlzcmV2ZXJzZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRyaXZlck9iaiA9IHRoaXMuZHJpdmVyT2JqLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYltuYW1lXSAtIGFbbmFtZV07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuaXNyZXZlcnNlID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=