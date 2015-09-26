/// <reference path="../node_modules/ng2-bootstrap/typings/tsd.d.ts" />
import {Component, View, CORE_DIRECTIVES, Pipe, Inject, Injectable} from 'angular2/angular2';
import {ChatBlinkDirective} from '../directive/directive';
import {Alert} from '../../ng2-bootstrap/components/alert/alert';

//import {Alert} from 'ng2-bootstrap/alert/alert';
@Injectable()
@Component({
  selector: 'about',

})
@View({
  templateUrl: './components/about/about.html?v=<%= VERSION %>',
  styleUrls : ['about.css'],
  directives: [CORE_DIRECTIVES, ChatBlinkDirective, Alert]
})
export class About {
  constructor(@Inject(Alert) private alert: Alert) {
  }
  alerts:Array<Object> = [
    {
      type: 'danger',
      msg: 'Oh snap! Change a few things up and try submitting again.'
    },
    {
      type: 'success',
      msg: 'Well done! You successfully read this important alert message.',
      closable: true
    }
  ];

  closeAlert(i:number) {
    this.alerts.splice(i, 1);
  }

  addAlert() {
    this.alerts.push({msg: 'Another alert!', closable: true});
  }
}


