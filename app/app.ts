import {Component, View, bootstrap, Attribute} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_BINDINGS} from 'angular2/router';
import {Http, HTTP_BINDINGS} from 'angular2/http';

/* Custom Angular2 components */
import {Home}         from './components/home/home';
import {UserDetails}  from './components/user_details/user_details';
import {About}        from './components/about/about';
import {F1Drivers}    from './components/F1Drivers/F1Drivers';
import {Details}      from './components/F1Drivers/Details/details';
/*import {EventsDemo}   from './components/F1Drivers/Events/events';
import {NamesList}    from './services/models/NameList';*/
import {GitHubAPI}    from './services/api/github_api';
import UserRepo       from './services/repositories/user_repo'; //here, {} aren't used when export default ...( #http://stackoverflow.com/questions/21117160/what-is-export-default-in-javascript)
/*import {HelloCmp}     from './components/httpDemo/httpdemo';*/
/*
*Create a whole component. Requires a @View.
 *  */
@Component({
  selector: 'app',
  /*
  * Specifies a list of objects that will created using dependency injection
  * and will be visible to the components and its view children.
  * NOTE :
  * `bindings` : are available to a component and its children,
  * `viewBindings` : are only available to a particular view,
  * `lifecycle` : refers to different stages through which a component might go (create, destroy, change detection etc.)
   so you can think of those as callbacks that are executed when "something happens" to a given component / directive
   * */
  viewBindings: [UserRepo, GitHubAPI]
})
@RouteConfig([
  { path: '/', component: Home, as: 'home',  loader: function(obj) { console.log('loader: ' : obj )} },
 { path: '/user_details/:username', component: UserDetails, as: 'user_details' },
    { path: '/about', component: About, as: 'about' },
  { path: '/drivers', component: F1Drivers, as: 'drivers' },
    { path: '/details/:name', component: Details, as: 'details' },
     /* { path: '/events', component: EventsDemo, as: 'events' }
  { path: '/httpdemo', component: HelloCmp, as: 'httpdemo' }*/
])
@View({
  templateUrl: './app.html?v=<%= VERSION %>',
  directives: [ROUTER_DIRECTIVES]
})
class App {

}

bootstrap(App, [ROUTER_BINDINGS, HTTP_BINDINGS]);
//import {RouteConfig, RouterOutlet, RouterLink, routerInjectables} from 'angular2/router';



