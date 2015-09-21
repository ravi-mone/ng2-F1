import {Component, View, CORE_DIRECTIVES} from 'angular2/angular2';

@Component({
  selector: 'about',

})
@View({
  templateUrl: './components/about/about.html?v=<%= VERSION %>',
  styleUrls : ['about.css'],
  directives: [CORE_DIRECTIVES]
})
export class About {
  constructor() {
  }
}
