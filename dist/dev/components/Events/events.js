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
var angular2_1 = require("angular2/angular2");
var NameList_1 = require('../../services/models/NameList');
var EventsDemo = (function () {
    function EventsDemo(list) {
        this.list = list;
        this.articles = this.list.articleList;
        console.log(this.articles);
    }
    EventsDemo.prototype.addArticle = function (title, link) {
        console.log("Adding article with title", title.value, "and link", link.value);
        this.list.postArticle({ title: title.value, link: link.value });
        title.value = '';
        link.value = '';
    };
    EventsDemo.prototype.deleteArticle = function (index) {
        console.log(index);
        this.list.deleteArticle(index);
    };
    EventsDemo = __decorate([
        angular2_1.Component({
            selector: 'events-demo',
            bindings: [NameList_1.NamesList]
        }),
        angular2_1.View({
            templateUrl: './components/Events/events.html',
            directives: [angular2_1.CORE_DIRECTIVES, angular2_1.FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [NameList_1.NamesList])
    ], EventsDemo);
    return EventsDemo;
})();
exports.EventsDemo = EventsDemo;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRXZlbnRzL2V2ZW50cy50cyJdLCJuYW1lcyI6WyJFdmVudHNEZW1vIiwiRXZlbnRzRGVtby5jb25zdHJ1Y3RvciIsIkV2ZW50c0RlbW8uYWRkQXJ0aWNsZSIsIkV2ZW50c0RlbW8uZGVsZXRlQXJ0aWNsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx5QkFBaUUsbUJBQW1CLENBQUMsQ0FBQTtBQUNyRix5QkFBd0IsZ0NBQWdDLENBQUMsQ0FBQTtBQUV6RDtJQVdJQSxvQkFBbUJBLElBQWVBO1FBQWZDLFNBQUlBLEdBQUpBLElBQUlBLENBQVdBO1FBQzlCQSxJQUFJQSxDQUFDQSxRQUFRQSxHQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxXQUFXQSxDQUFDQTtRQUNwQ0EsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQUE7SUFDOUJBLENBQUNBO0lBQ0RELCtCQUFVQSxHQUFWQSxVQUFXQSxLQUFLQSxFQUFFQSxJQUFJQTtRQUNuQkUsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsMkJBQTJCQSxFQUFFQSxLQUFLQSxDQUFDQSxLQUFLQSxFQUFFQSxVQUFVQSxFQUFFQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTtRQUM5RUEsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsRUFBQ0EsS0FBS0EsRUFBR0EsS0FBS0EsQ0FBQ0EsS0FBS0EsRUFBRUEsSUFBSUEsRUFBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsRUFBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDN0RBLEtBQUtBLENBQUNBLEtBQUtBLEdBQUNBLEVBQUVBLENBQUNBO1FBQUNBLElBQUlBLENBQUNBLEtBQUtBLEdBQUNBLEVBQUVBLENBQUNBO0lBQ2xDQSxDQUFDQTtJQUNERixrQ0FBYUEsR0FBYkEsVUFBY0EsS0FBS0E7UUFDZkcsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQUE7UUFDbEJBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLGFBQWFBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO0lBQ25DQSxDQUFDQTtJQXZCTEg7UUFBQ0Esb0JBQVNBLENBQUNBO1lBQ1BBLFFBQVFBLEVBQUVBLGFBQWFBO1lBQ3ZCQSxRQUFRQSxFQUFDQSxDQUFDQSxvQkFBU0EsQ0FBQ0E7U0FDdkJBLENBQUNBO1FBQ0RBLGVBQUlBLENBQUNBO1lBQ0ZBLFdBQVdBLEVBQUVBLGlDQUFpQ0E7WUFDOUNBLFVBQVVBLEVBQUNBLENBQUNBLDBCQUFlQSxFQUFFQSwwQkFBZUEsQ0FBQ0E7U0FDaERBLENBQUNBOzttQkFpQkRBO0lBQURBLGlCQUFDQTtBQUFEQSxDQXhCQSxBQXdCQ0EsSUFBQTtBQWZZLGtCQUFVLGFBZXRCLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9FdmVudHMvZXZlbnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3LCBDT1JFX0RJUkVDVElWRVMsIEZPUk1fRElSRUNUSVZFU30gZnJvbSBcImFuZ3VsYXIyL2FuZ3VsYXIyXCI7XG5pbXBvcnQge05hbWVzTGlzdH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbW9kZWxzL05hbWVMaXN0JztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdldmVudHMtZGVtbycsXG4gICAgYmluZGluZ3M6W05hbWVzTGlzdF1cbn0pXG5AVmlldyh7XG4gICAgdGVtcGxhdGVVcmw6ICcuL2NvbXBvbmVudHMvRXZlbnRzL2V2ZW50cy5odG1sJyxcbiAgICBkaXJlY3RpdmVzOltDT1JFX0RJUkVDVElWRVMsIEZPUk1fRElSRUNUSVZFU11cbn0pXG5cbmV4cG9ydCBjbGFzcyBFdmVudHNEZW1vIHtcbiAgICBhcnRpY2xlczpBcnJheTxPYmplY3Q+O1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBsaXN0OiBOYW1lc0xpc3Qpe1xuICAgICAgICB0aGlzLmFydGljbGVzPXRoaXMubGlzdC5hcnRpY2xlTGlzdDtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5hcnRpY2xlcylcbiAgICB9XG4gICAgYWRkQXJ0aWNsZSh0aXRsZSwgbGluaykge1xuICAgICAgIGNvbnNvbGUubG9nKFwiQWRkaW5nIGFydGljbGUgd2l0aCB0aXRsZVwiLCB0aXRsZS52YWx1ZSwgXCJhbmQgbGlua1wiLCBsaW5rLnZhbHVlKTtcbiAgICAgICB0aGlzLmxpc3QucG9zdEFydGljbGUoe3RpdGxlIDogdGl0bGUudmFsdWUsIGxpbms6bGluay52YWx1ZX0pO1xuICAgICAgICB0aXRsZS52YWx1ZT0nJzsgbGluay52YWx1ZT0nJztcbiAgICB9XG4gICAgZGVsZXRlQXJ0aWNsZShpbmRleCl7XG4gICAgICAgIGNvbnNvbGUubG9nKGluZGV4KVxuICAgICAgICB0aGlzLmxpc3QuZGVsZXRlQXJ0aWNsZShpbmRleCk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9