/*
To Fix: EXCEPTION: Cannot resolve all parameters for NamesList(?). Make sure they all have valid type or annotations.
1.  import {Inject} from 'angular2/angular2';
2. @Inject(Http) private _http: Http in constructor
 */

import {Inject, Injectable, P} from 'angular2/angular2';
import {Http} from 'angular2/http';
import {IPromise} from 'rx';

@Injectable()
export class NamesList {

  driverNames:Array<any> =  [];
  articleList:Array<Object>=[];
  constructor(@Inject(Http)  private http:Http){
    /*http.get('drivers.json').toRx().subscribe(res => {
      this.driverNames = res.json();
    console.log(this.driverNames)
      /!*this.driverObj =  this.devices[0]['DriverStandings'];
      this.driversList = this.driverObj;
      this.pageSelected = this.driverObj.length;*!/
    });*/

  }
  get() {
  var httpCall = this.http.get('drivers.json')
      .toRx()
      .map(res => res.json())
      .toPromise();
  return httpCall;
  }
getDriverSpecific(index){
  console.log(this.driverNames, index);
  return this.driverNames[index];
}
  getArticleList(index){
    return this.articleList[index];
  }
  postArticle(article){
    this.articleList.push(article);
  }
  deleteArticle(index){
    this.articleList.splice(index, 1);
  }
}
