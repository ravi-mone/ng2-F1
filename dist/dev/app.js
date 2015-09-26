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
var http_1 = require('angular2/http');
var home_1 = require('./components/home/home');
var user_details_1 = require('./components/user_details/user_details');
var about_1 = require('./components/about/about');
var F1Drivers_1 = require('./components/F1Drivers/F1Drivers');
var details_1 = require('./components/F1Drivers/Details/details');
var events_1 = require('./components/Events/events');
var github_api_1 = require('./services/api/github_api');
var user_repo_1 = require('./services/repositories/user_repo');
var App = (function () {
    function App() {
    }
    App = __decorate([
        angular2_1.Component({
            selector: 'app',
            viewBindings: [user_repo_1.default, github_api_1.GitHubAPI]
        }),
        router_1.RouteConfig([
            { path: '/', component: home_1.Home, as: 'home', loader: function (obj) { console.log('loader: ', obj); } },
            { path: '/user_details/:username', component: user_details_1.UserDetails, as: 'user_details' },
            { path: '/about', component: about_1.About, as: 'about' },
            { path: '/drivers', component: F1Drivers_1.F1Drivers, as: 'drivers' },
            { path: '/details/:name', component: details_1.Details, as: 'details' },
            { path: '/events', component: events_1.EventsDemo, as: 'events' },
        ]),
        angular2_1.View({
            templateUrl: './app.html?v=0.0.0',
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], App);
    return App;
})();
angular2_1.bootstrap(App, [router_1.ROUTER_BINDINGS, http_1.HTTP_BINDINGS]);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6WyJBcHAiLCJBcHAuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEseUJBQW9ELG1CQUFtQixDQUFDLENBQUE7QUFDeEUsdUJBQThELGlCQUFpQixDQUFDLENBQUE7QUFDaEYscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBR2xELHFCQUEyQix3QkFBd0IsQ0FBQyxDQUFBO0FBQ3BELDZCQUEyQix3Q0FBd0MsQ0FBQyxDQUFBO0FBQ3BFLHNCQUEyQiwwQkFBMEIsQ0FBQyxDQUFBO0FBQ3RELDBCQUEyQixrQ0FBa0MsQ0FBQyxDQUFBO0FBQzlELHdCQUEyQix3Q0FBd0MsQ0FBQyxDQUFBO0FBQ3BFLHVCQUEyQiw0QkFBNEIsQ0FBQyxDQUFBO0FBQ3hELDJCQUEyQiwyQkFBMkIsQ0FBQyxDQUFBO0FBRXZELDBCQUEyQixtQ0FBbUMsQ0FBQyxDQUFBO0FBSS9EO0lBQUFBO0lBNEJBQyxDQUFDQTtJQTVCREQ7UUFBQ0Esb0JBQVNBLENBQUNBO1lBQ1RBLFFBQVFBLEVBQUVBLEtBQUtBO1lBVWZBLFlBQVlBLEVBQUVBLENBQUNBLG1CQUFRQSxFQUFFQSxzQkFBU0EsQ0FBQ0E7U0FDcENBLENBQUNBO1FBQ0RBLG9CQUFXQSxDQUFDQTtZQUNUQSxFQUFFQSxJQUFJQSxFQUFFQSxHQUFHQSxFQUFFQSxTQUFTQSxFQUFFQSxXQUFJQSxFQUFFQSxFQUFFQSxFQUFFQSxNQUFNQSxFQUFHQSxNQUFNQSxFQUFFQSxVQUFTQSxHQUFHQSxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFHLEdBQUcsQ0FBRSxDQUFBLENBQUEsQ0FBQyxFQUFFQTtZQUNwR0EsRUFBRUEsSUFBSUEsRUFBRUEseUJBQXlCQSxFQUFFQSxTQUFTQSxFQUFFQSwwQkFBV0EsRUFBRUEsRUFBRUEsRUFBRUEsY0FBY0EsRUFBRUE7WUFDL0VBLEVBQUVBLElBQUlBLEVBQUVBLFFBQVFBLEVBQUVBLFNBQVNBLEVBQUVBLGFBQUtBLEVBQUVBLEVBQUVBLEVBQUVBLE9BQU9BLEVBQUVBO1lBQ2pEQSxFQUFFQSxJQUFJQSxFQUFFQSxVQUFVQSxFQUFFQSxTQUFTQSxFQUFFQSxxQkFBU0EsRUFBRUEsRUFBRUEsRUFBRUEsU0FBU0EsRUFBRUE7WUFDekRBLEVBQUVBLElBQUlBLEVBQUVBLGdCQUFnQkEsRUFBRUEsU0FBU0EsRUFBRUEsaUJBQU9BLEVBQUVBLEVBQUVBLEVBQUVBLFNBQVNBLEVBQUVBO1lBQzdEQSxFQUFFQSxJQUFJQSxFQUFFQSxTQUFTQSxFQUFFQSxTQUFTQSxFQUFFQSxtQkFBVUEsRUFBRUEsRUFBRUEsRUFBRUEsUUFBUUEsRUFBRUE7U0FFM0RBLENBQUNBO1FBQ0RBLGVBQUlBLENBQUNBO1lBQ0pBLFdBQVdBLEVBQUVBLDZCQUE2QkE7WUFDMUNBLFVBQVVBLEVBQUVBLENBQUNBLDBCQUFpQkEsQ0FBQ0E7U0FDaENBLENBQUNBOztZQUdEQTtJQUFEQSxVQUFDQTtBQUFEQSxDQTVCQSxBQTRCQ0EsSUFBQTtBQUVELG9CQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsd0JBQWUsRUFBRSxvQkFBYSxDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgVmlldywgYm9vdHN0cmFwLCBBdHRyaWJ1dGV9IGZyb20gJ2FuZ3VsYXIyL2FuZ3VsYXIyJztcbmltcG9ydCB7Um91dGVDb25maWcsIFJPVVRFUl9ESVJFQ1RJVkVTLCBST1VURVJfQklORElOR1N9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQge0h0dHAsIEhUVFBfQklORElOR1N9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuXG4vKiBDdXN0b20gQW5ndWxhcjIgY29tcG9uZW50cyAqL1xuaW1wb3J0IHtIb21lfSAgICAgICAgIGZyb20gJy4vY29tcG9uZW50cy9ob21lL2hvbWUnO1xuaW1wb3J0IHtVc2VyRGV0YWlsc30gIGZyb20gJy4vY29tcG9uZW50cy91c2VyX2RldGFpbHMvdXNlcl9kZXRhaWxzJztcbmltcG9ydCB7QWJvdXR9ICAgICAgICBmcm9tICcuL2NvbXBvbmVudHMvYWJvdXQvYWJvdXQnO1xuaW1wb3J0IHtGMURyaXZlcnN9ICAgIGZyb20gJy4vY29tcG9uZW50cy9GMURyaXZlcnMvRjFEcml2ZXJzJztcbmltcG9ydCB7RGV0YWlsc30gICAgICBmcm9tICcuL2NvbXBvbmVudHMvRjFEcml2ZXJzL0RldGFpbHMvZGV0YWlscyc7XG5pbXBvcnQge0V2ZW50c0RlbW99ICAgZnJvbSAnLi9jb21wb25lbnRzL0V2ZW50cy9ldmVudHMnO1xuaW1wb3J0IHtHaXRIdWJBUEl9ICAgIGZyb20gJy4vc2VydmljZXMvYXBpL2dpdGh1Yl9hcGknO1xuaW1wb3J0IHtMb2dpbkNvbXB9ICAgIGZyb20gJy4vY29tcG9uZW50cy9mb3Jtcy9mb3Jtcyc7XG5pbXBvcnQgVXNlclJlcG8gICAgICAgZnJvbSAnLi9zZXJ2aWNlcy9yZXBvc2l0b3JpZXMvdXNlcl9yZXBvJzsgLy9oZXJlLCB7fSBhcmVuJ3QgdXNlZCB3aGVuIGV4cG9ydCBkZWZhdWx0IC4uLiggI2h0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjExMTcxNjAvd2hhdC1pcy1leHBvcnQtZGVmYXVsdC1pbi1qYXZhc2NyaXB0KVxuLypcbipDcmVhdGUgYSB3aG9sZSBjb21wb25lbnQuIFJlcXVpcmVzIGEgQFZpZXcuXG4gKiAgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcCcsXG4gIC8qXG4gICogU3BlY2lmaWVzIGEgbGlzdCBvZiBvYmplY3RzIHRoYXQgd2lsbCBjcmVhdGVkIHVzaW5nIGRlcGVuZGVuY3kgaW5qZWN0aW9uXG4gICogYW5kIHdpbGwgYmUgdmlzaWJsZSB0byB0aGUgY29tcG9uZW50cyBhbmQgaXRzIHZpZXcgY2hpbGRyZW4uXG4gICogTk9URSA6XG4gICogYGJpbmRpbmdzYCA6IGFyZSBhdmFpbGFibGUgdG8gYSBjb21wb25lbnQgYW5kIGl0cyBjaGlsZHJlbixcbiAgKiBgdmlld0JpbmRpbmdzYCA6IGFyZSBvbmx5IGF2YWlsYWJsZSB0byBhIHBhcnRpY3VsYXIgdmlldyxcbiAgKiBgbGlmZWN5Y2xlYCA6IHJlZmVycyB0byBkaWZmZXJlbnQgc3RhZ2VzIHRocm91Z2ggd2hpY2ggYSBjb21wb25lbnQgbWlnaHQgZ28gKGNyZWF0ZSwgZGVzdHJveSwgY2hhbmdlIGRldGVjdGlvbiBldGMuKVxuICAgc28geW91IGNhbiB0aGluayBvZiB0aG9zZSBhcyBjYWxsYmFja3MgdGhhdCBhcmUgZXhlY3V0ZWQgd2hlbiBcInNvbWV0aGluZyBoYXBwZW5zXCIgdG8gYSBnaXZlbiBjb21wb25lbnQgLyBkaXJlY3RpdmVcbiAgICogKi9cbiAgdmlld0JpbmRpbmdzOiBbVXNlclJlcG8sIEdpdEh1YkFQSV1cbn0pXG5AUm91dGVDb25maWcoW1xuICAgIHsgcGF0aDogJy8nLCBjb21wb25lbnQ6IEhvbWUsIGFzOiAnaG9tZScsICBsb2FkZXI6IGZ1bmN0aW9uKG9iaikgeyBjb25zb2xlLmxvZygnbG9hZGVyOiAnIDogb2JqICl9IH0sXG4gICAgeyBwYXRoOiAnL3VzZXJfZGV0YWlscy86dXNlcm5hbWUnLCBjb21wb25lbnQ6IFVzZXJEZXRhaWxzLCBhczogJ3VzZXJfZGV0YWlscycgfSxcbiAgICB7IHBhdGg6ICcvYWJvdXQnLCBjb21wb25lbnQ6IEFib3V0LCBhczogJ2Fib3V0JyB9LFxuICAgIHsgcGF0aDogJy9kcml2ZXJzJywgY29tcG9uZW50OiBGMURyaXZlcnMsIGFzOiAnZHJpdmVycycgfSxcbiAgICB7IHBhdGg6ICcvZGV0YWlscy86bmFtZScsIGNvbXBvbmVudDogRGV0YWlscywgYXM6ICdkZXRhaWxzJyB9LFxuICAgIHsgcGF0aDogJy9ldmVudHMnLCBjb21wb25lbnQ6IEV2ZW50c0RlbW8sIGFzOiAnZXZlbnRzJyB9LFxuICAgIC8veyBwYXRoOiAnL2Zvcm0nLCBjb21wb25lbnQ6IExvZ2luQ29tcCwgYXM6ICdmb3JtJyB9XG5dKVxuQFZpZXcoe1xuICB0ZW1wbGF0ZVVybDogJy4vYXBwLmh0bWw/dj08JT0gVkVSU0lPTiAlPicsXG4gIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU11cbn0pXG5jbGFzcyBBcHAge1xuXG59XG5cbmJvb3RzdHJhcChBcHAsIFtST1VURVJfQklORElOR1MsIEhUVFBfQklORElOR1NdKTtcbi8vaW1wb3J0IHtSb3V0ZUNvbmZpZywgUm91dGVyT3V0bGV0LCBSb3V0ZXJMaW5rLCByb3V0ZXJJbmplY3RhYmxlc30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcblxuXG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==