import {Component, View, bootstrap} from 'angular2/angular2';
import {Inject, Injectable, IPromise} from 'angular2/angular2';
/*import {Http, HTTP_BINDINGS} from 'angular2/http';*/
/*import {Http} from 'http/http';*/
import {Http} from 'angular2/http';
import {GitHubAPI} from '../api/github_api';

@Component({
    selector: 'hello',
   // viewBindings: [HTTP_BINDINGS]
})
@View({
    template: `
    <h2>hello</h2>
    <button type="button" (click)="getInfo()">get info</button> 
    <p>hello there, <span [text-content]="result.title"></span>!</p> 
  `
})
class HelloCmp {
    result: any = <any>{};

    constructor(@Inject(Http) private api:GitHubAPI) {
        console.log(this.getDriverDetails)

        return this.api.getDriverDetails(username)
        .then((u:GitHubUser) => {
            console.log(u)
        return user;

});
    }

    sayHello() {

    }


}
