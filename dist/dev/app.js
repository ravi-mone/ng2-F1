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
            { path: '/events', component: events_1.EventsDemo, as: 'events' }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6WyJBcHAiLCJBcHAuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEseUJBQW9ELG1CQUFtQixDQUFDLENBQUE7QUFDeEUsdUJBQThELGlCQUFpQixDQUFDLENBQUE7QUFDaEYscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBR2xELHFCQUEyQix3QkFBd0IsQ0FBQyxDQUFBO0FBQ3BELDZCQUEyQix3Q0FBd0MsQ0FBQyxDQUFBO0FBQ3BFLHNCQUEyQiwwQkFBMEIsQ0FBQyxDQUFBO0FBQ3RELDBCQUEyQixrQ0FBa0MsQ0FBQyxDQUFBO0FBQzlELHdCQUEyQix3Q0FBd0MsQ0FBQyxDQUFBO0FBQ3BFLHVCQUEyQiw0QkFBNEIsQ0FBQyxDQUFBO0FBQ3hELDJCQUEyQiwyQkFBMkIsQ0FBQyxDQUFBO0FBQ3ZELDBCQUEyQixtQ0FBbUMsQ0FBQyxDQUFBO0FBSS9EO0lBQUFBO0lBNEJBQyxDQUFDQTtJQTVCREQ7UUFBQ0Esb0JBQVNBLENBQUNBO1lBQ1RBLFFBQVFBLEVBQUVBLEtBQUtBO1lBVWZBLFlBQVlBLEVBQUVBLENBQUNBLG1CQUFRQSxFQUFFQSxzQkFBU0EsQ0FBQ0E7U0FDcENBLENBQUNBO1FBQ0RBLG9CQUFXQSxDQUFDQTtZQUNUQSxFQUFFQSxJQUFJQSxFQUFFQSxHQUFHQSxFQUFFQSxTQUFTQSxFQUFFQSxXQUFJQSxFQUFFQSxFQUFFQSxFQUFFQSxNQUFNQSxFQUFHQSxNQUFNQSxFQUFFQSxVQUFTQSxHQUFHQSxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFHLEdBQUcsQ0FBRSxDQUFBLENBQUEsQ0FBQyxFQUFFQTtZQUNwR0EsRUFBRUEsSUFBSUEsRUFBRUEseUJBQXlCQSxFQUFFQSxTQUFTQSxFQUFFQSwwQkFBV0EsRUFBRUEsRUFBRUEsRUFBRUEsY0FBY0EsRUFBRUE7WUFDL0VBLEVBQUVBLElBQUlBLEVBQUVBLFFBQVFBLEVBQUVBLFNBQVNBLEVBQUVBLGFBQUtBLEVBQUVBLEVBQUVBLEVBQUVBLE9BQU9BLEVBQUVBO1lBQ2pEQSxFQUFFQSxJQUFJQSxFQUFFQSxVQUFVQSxFQUFFQSxTQUFTQSxFQUFFQSxxQkFBU0EsRUFBRUEsRUFBRUEsRUFBRUEsU0FBU0EsRUFBRUE7WUFDekRBLEVBQUVBLElBQUlBLEVBQUVBLGdCQUFnQkEsRUFBRUEsU0FBU0EsRUFBRUEsaUJBQU9BLEVBQUVBLEVBQUVBLEVBQUVBLFNBQVNBLEVBQUVBO1lBQzdEQSxFQUFFQSxJQUFJQSxFQUFFQSxTQUFTQSxFQUFFQSxTQUFTQSxFQUFFQSxtQkFBVUEsRUFBRUEsRUFBRUEsRUFBRUEsUUFBUUEsRUFBRUE7U0FFM0RBLENBQUNBO1FBQ0RBLGVBQUlBLENBQUNBO1lBQ0pBLFdBQVdBLEVBQUVBLDZCQUE2QkE7WUFDMUNBLFVBQVVBLEVBQUVBLENBQUNBLDBCQUFpQkEsQ0FBQ0E7U0FDaENBLENBQUNBOztZQUdEQTtJQUFEQSxVQUFDQTtBQUFEQSxDQTVCQSxBQTRCQ0EsSUFBQTtBQUVELG9CQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsd0JBQWUsRUFBRSxvQkFBYSxDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgVmlldywgYm9vdHN0cmFwLCBBdHRyaWJ1dGV9IGZyb20gJ2FuZ3VsYXIyL2FuZ3VsYXIyJztcbmltcG9ydCB7Um91dGVDb25maWcsIFJPVVRFUl9ESVJFQ1RJVkVTLCBST1VURVJfQklORElOR1N9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQge0h0dHAsIEhUVFBfQklORElOR1N9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuXG4vKiBDdXN0b20gQW5ndWxhcjIgY29tcG9uZW50cyAqL1xuaW1wb3J0IHtIb21lfSAgICAgICAgIGZyb20gJy4vY29tcG9uZW50cy9ob21lL2hvbWUnO1xuaW1wb3J0IHtVc2VyRGV0YWlsc30gIGZyb20gJy4vY29tcG9uZW50cy91c2VyX2RldGFpbHMvdXNlcl9kZXRhaWxzJztcbmltcG9ydCB7QWJvdXR9ICAgICAgICBmcm9tICcuL2NvbXBvbmVudHMvYWJvdXQvYWJvdXQnO1xuaW1wb3J0IHtGMURyaXZlcnN9ICAgIGZyb20gJy4vY29tcG9uZW50cy9GMURyaXZlcnMvRjFEcml2ZXJzJztcbmltcG9ydCB7RGV0YWlsc30gICAgICBmcm9tICcuL2NvbXBvbmVudHMvRjFEcml2ZXJzL0RldGFpbHMvZGV0YWlscyc7XG5pbXBvcnQge0V2ZW50c0RlbW99ICAgZnJvbSAnLi9jb21wb25lbnRzL0V2ZW50cy9ldmVudHMnO1xuaW1wb3J0IHtHaXRIdWJBUEl9ICAgIGZyb20gJy4vc2VydmljZXMvYXBpL2dpdGh1Yl9hcGknO1xuaW1wb3J0IFVzZXJSZXBvICAgICAgIGZyb20gJy4vc2VydmljZXMvcmVwb3NpdG9yaWVzL3VzZXJfcmVwbyc7IC8vaGVyZSwge30gYXJlbid0IHVzZWQgd2hlbiBleHBvcnQgZGVmYXVsdCAuLi4oICNodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzIxMTE3MTYwL3doYXQtaXMtZXhwb3J0LWRlZmF1bHQtaW4tamF2YXNjcmlwdClcbi8qXG4qQ3JlYXRlIGEgd2hvbGUgY29tcG9uZW50LiBSZXF1aXJlcyBhIEBWaWV3LlxuICogICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAnLFxuICAvKlxuICAqIFNwZWNpZmllcyBhIGxpc3Qgb2Ygb2JqZWN0cyB0aGF0IHdpbGwgY3JlYXRlZCB1c2luZyBkZXBlbmRlbmN5IGluamVjdGlvblxuICAqIGFuZCB3aWxsIGJlIHZpc2libGUgdG8gdGhlIGNvbXBvbmVudHMgYW5kIGl0cyB2aWV3IGNoaWxkcmVuLlxuICAqIE5PVEUgOlxuICAqIGBiaW5kaW5nc2AgOiBhcmUgYXZhaWxhYmxlIHRvIGEgY29tcG9uZW50IGFuZCBpdHMgY2hpbGRyZW4sXG4gICogYHZpZXdCaW5kaW5nc2AgOiBhcmUgb25seSBhdmFpbGFibGUgdG8gYSBwYXJ0aWN1bGFyIHZpZXcsXG4gICogYGxpZmVjeWNsZWAgOiByZWZlcnMgdG8gZGlmZmVyZW50IHN0YWdlcyB0aHJvdWdoIHdoaWNoIGEgY29tcG9uZW50IG1pZ2h0IGdvIChjcmVhdGUsIGRlc3Ryb3ksIGNoYW5nZSBkZXRlY3Rpb24gZXRjLilcbiAgIHNvIHlvdSBjYW4gdGhpbmsgb2YgdGhvc2UgYXMgY2FsbGJhY2tzIHRoYXQgYXJlIGV4ZWN1dGVkIHdoZW4gXCJzb21ldGhpbmcgaGFwcGVuc1wiIHRvIGEgZ2l2ZW4gY29tcG9uZW50IC8gZGlyZWN0aXZlXG4gICAqICovXG4gIHZpZXdCaW5kaW5nczogW1VzZXJSZXBvLCBHaXRIdWJBUEldXG59KVxuQFJvdXRlQ29uZmlnKFtcbiAgICB7IHBhdGg6ICcvJywgY29tcG9uZW50OiBIb21lLCBhczogJ2hvbWUnLCAgbG9hZGVyOiBmdW5jdGlvbihvYmopIHsgY29uc29sZS5sb2coJ2xvYWRlcjogJyA6IG9iaiApfSB9LFxuICAgIHsgcGF0aDogJy91c2VyX2RldGFpbHMvOnVzZXJuYW1lJywgY29tcG9uZW50OiBVc2VyRGV0YWlscywgYXM6ICd1c2VyX2RldGFpbHMnIH0sXG4gICAgeyBwYXRoOiAnL2Fib3V0JywgY29tcG9uZW50OiBBYm91dCwgYXM6ICdhYm91dCcgfSxcbiAgICB7IHBhdGg6ICcvZHJpdmVycycsIGNvbXBvbmVudDogRjFEcml2ZXJzLCBhczogJ2RyaXZlcnMnIH0sXG4gICAgeyBwYXRoOiAnL2RldGFpbHMvOm5hbWUnLCBjb21wb25lbnQ6IERldGFpbHMsIGFzOiAnZGV0YWlscycgfSxcbiAgICB7IHBhdGg6ICcvZXZlbnRzJywgY29tcG9uZW50OiBFdmVudHNEZW1vLCBhczogJ2V2ZW50cycgfVxuICAgICAgLyogeyBwYXRoOiAnL2h0dHBkZW1vJywgY29tcG9uZW50OiBIZWxsb0NtcCwgYXM6ICdodHRwZGVtbycgfSovXG5dKVxuQFZpZXcoe1xuICB0ZW1wbGF0ZVVybDogJy4vYXBwLmh0bWw/dj08JT0gVkVSU0lPTiAlPicsXG4gIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU11cbn0pXG5jbGFzcyBBcHAge1xuXG59XG5cbmJvb3RzdHJhcChBcHAsIFtST1VURVJfQklORElOR1MsIEhUVFBfQklORElOR1NdKTtcbi8vaW1wb3J0IHtSb3V0ZUNvbmZpZywgUm91dGVyT3V0bGV0LCBSb3V0ZXJMaW5rLCByb3V0ZXJJbmplY3RhYmxlc30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcblxuXG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==