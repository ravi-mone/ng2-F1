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
var Tabs = (function () {
    function Tabs() {
        this.selectedIdx = 0;
        this.tabs = [];
    }
    Tabs.prototype.select = function (idx) {
        this.selectedIdx = idx;
    };
    Tabs.prototype.addTab = function (tab) {
        var idx = this.tabs.length;
        this.tabs.push(tab);
        return idx;
    };
    Tabs.prototype.getSelectedIndex = function () {
        return this.selectedIdx;
    };
    Tabs = __decorate([
        angular2_1.Component({
            selector: 'tabs'
        }),
        angular2_1.View({
            template: "\n    <div class=\"tabs\">\n      <ul class=\"tabs-header\">\n        <li *ng-for=\"#tab of tabs; #index = index\" (click)=\"select(index)\">{{tab.title}}</li>\n      </ul>\n      <ng-content></ng-content>\n    </div>\n  ",
            directives: [angular2_1.CORE_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], Tabs);
    return Tabs;
})();
exports.Tabs = Tabs;
var Tab = (function () {
    function Tab(parent) {
        this.parent = parent;
        this.index = parent.addTab(this);
    }
    Tab.prototype.isActive = function () {
        return this.parent.getSelectedIndex() === this.index;
    };
    Tab = __decorate([
        angular2_1.Component({
            selector: 'tab',
            properties: ['title']
        }),
        angular2_1.View({
            template: "\n    <div [hidden]=\"isActive()\">\n      <ng-content></ng-content>\n    </div>\n  "
        }),
        __param(0, angular2_1.Host()), 
        __metadata('design:paramtypes', [Tabs])
    ], Tab);
    return Tab;
})();
exports.Tab = Tab;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdGFicy90YWJzLnRzIl0sIm5hbWVzIjpbIlRhYnMiLCJUYWJzLmNvbnN0cnVjdG9yIiwiVGFicy5zZWxlY3QiLCJUYWJzLmFkZFRhYiIsIlRhYnMuZ2V0U2VsZWN0ZWRJbmRleCIsIlRhYiIsIlRhYi5jb25zdHJ1Y3RvciIsIlRhYi5pc0FjdGl2ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5QkFBZ0UsbUJBQW1CLENBQUMsQ0FBQTtBQUVwRjtJQWlCRUE7UUFDRUMsSUFBSUEsQ0FBQ0EsV0FBV0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7UUFDckJBLElBQUlBLENBQUNBLElBQUlBLEdBQUdBLEVBQUVBLENBQUNBO0lBQ2pCQSxDQUFDQTtJQUNERCxxQkFBTUEsR0FBTkEsVUFBT0EsR0FBVUE7UUFDZkUsSUFBSUEsQ0FBQ0EsV0FBV0EsR0FBR0EsR0FBR0EsQ0FBQ0E7SUFDekJBLENBQUNBO0lBQ0RGLHFCQUFNQSxHQUFOQSxVQUFPQSxHQUFPQTtRQUNaRyxJQUFJQSxHQUFHQSxHQUFHQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQTtRQUMzQkEsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7UUFDcEJBLE1BQU1BLENBQUNBLEdBQUdBLENBQUNBO0lBQ2JBLENBQUNBO0lBQ0RILCtCQUFnQkEsR0FBaEJBO1FBQ0VJLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLFdBQVdBLENBQUNBO0lBQzFCQSxDQUFDQTtJQS9CSEo7UUFBQ0Esb0JBQVNBLENBQUNBO1lBQ1RBLFFBQVFBLEVBQUVBLE1BQU1BO1NBQ2pCQSxDQUFDQTtRQUNEQSxlQUFJQSxDQUFDQTtZQUNKQSxRQUFRQSxFQUFFQSwrTkFPVEE7WUFDREEsVUFBVUEsRUFBRUEsQ0FBQ0EsMEJBQWVBLENBQUNBO1NBQzlCQSxDQUFDQTs7YUFtQkRBO0lBQURBLFdBQUNBO0FBQURBLENBaENBLEFBZ0NDQSxJQUFBO0FBbEJZLFlBQUksT0FrQmhCLENBQUE7QUFFRDtJQWNFSyxhQUE0QkEsTUFBV0E7UUFBWEMsV0FBTUEsR0FBTkEsTUFBTUEsQ0FBS0E7UUFDckNBLElBQUlBLENBQUNBLEtBQUtBLEdBQUdBLE1BQU1BLENBQUNBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLENBQUNBO0lBQ25DQSxDQUFDQTtJQUNERCxzQkFBUUEsR0FBUkE7UUFDRUUsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsZ0JBQWdCQSxFQUFFQSxLQUFLQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQTtJQUN2REEsQ0FBQ0E7SUFuQkhGO1FBQUNBLG9CQUFTQSxDQUFDQTtZQUNUQSxRQUFRQSxFQUFFQSxLQUFLQTtZQUNmQSxVQUFVQSxFQUFFQSxDQUFDQSxPQUFPQSxDQUFDQTtTQUN0QkEsQ0FBQ0E7UUFDREEsZUFBSUEsQ0FBQ0E7WUFDSkEsUUFBUUEsRUFBRUEsc0ZBSVRBO1NBQ0ZBLENBQUNBO1FBSVlBLFdBQUNBLGVBQUlBLEVBQUVBLENBQUFBOztZQU1wQkE7SUFBREEsVUFBQ0E7QUFBREEsQ0FwQkEsQUFvQkNBLElBQUE7QUFUWSxXQUFHLE1BU2YsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL3RhYnMvdGFicy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SG9zdCwgRGlyZWN0aXZlLCBDb21wb25lbnQsIFZpZXcsIENPUkVfRElSRUNUSVZFU30gZnJvbSAnYW5ndWxhcjIvYW5ndWxhcjInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0YWJzJ1xufSlcbkBWaWV3KHtcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwidGFic1wiPlxuICAgICAgPHVsIGNsYXNzPVwidGFicy1oZWFkZXJcIj5cbiAgICAgICAgPGxpICpuZy1mb3I9XCIjdGFiIG9mIHRhYnM7ICNpbmRleCA9IGluZGV4XCIgKGNsaWNrKT1cInNlbGVjdChpbmRleClcIj57e3RhYi50aXRsZX19PC9saT5cbiAgICAgIDwvdWw+XG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPC9kaXY+XG4gIGAsXG4gIGRpcmVjdGl2ZXM6IFtDT1JFX0RJUkVDVElWRVNdXG59KVxuZXhwb3J0IGNsYXNzIFRhYnMge1xuICBwcml2YXRlIHNlbGVjdGVkSWR4Om51bWJlcjtcbiAgcHJpdmF0ZSB0YWJzOlRhYltdO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnNlbGVjdGVkSWR4ID0gMDtcbiAgICB0aGlzLnRhYnMgPSBbXTtcbiAgfVxuICBzZWxlY3QoaWR4Om51bWJlcikge1xuICAgIHRoaXMuc2VsZWN0ZWRJZHggPSBpZHg7XG4gIH1cbiAgYWRkVGFiKHRhYjpUYWIpIHtcbiAgICBsZXQgaWR4ID0gdGhpcy50YWJzLmxlbmd0aDtcbiAgICB0aGlzLnRhYnMucHVzaCh0YWIpO1xuICAgIHJldHVybiBpZHg7XG4gIH1cbiAgZ2V0U2VsZWN0ZWRJbmRleCgpIHtcbiAgICByZXR1cm4gdGhpcy5zZWxlY3RlZElkeDtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0YWInLFxuICBwcm9wZXJ0aWVzOiBbJ3RpdGxlJ11cbn0pXG5AVmlldyh7XG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBbaGlkZGVuXT1cImlzQWN0aXZlKClcIj5cbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8L2Rpdj5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBUYWIge1xuICBwdWJsaWMgdGl0bGU6c3RyaW5nO1xuICBwdWJsaWMgaW5kZXg6bnVtYmVyO1xuICBjb25zdHJ1Y3RvcihASG9zdCgpIHByaXZhdGUgcGFyZW50OlRhYnMpIHtcbiAgICB0aGlzLmluZGV4ID0gcGFyZW50LmFkZFRhYih0aGlzKTtcbiAgfVxuICBpc0FjdGl2ZSgpOmJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnBhcmVudC5nZXRTZWxlY3RlZEluZGV4KCkgPT09IHRoaXMuaW5kZXg7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=