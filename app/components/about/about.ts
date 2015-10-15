/// <reference path="../node_modules/ng2-bootstrap/typings/tsd.d.ts" />
import {Component, View, CORE_DIRECTIVES, Pipe, encapsulation} from 'angular2/angular2';
import {ChatBlinkDirective} from '../directive/directive';

@Component({
  selector: 'about',

})
@View({
  templateUrl: './components/about/about.html?v=<%= VERSION %>',
  styleUrls : ['./components/about/about.css'],
  directives: [CORE_DIRECTIVES, ChatBlinkDirective]
})
export class About {
  constructor() {  }
}


