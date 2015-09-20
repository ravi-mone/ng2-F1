import {Component, View, CORE_DIRECTIVES , CanActivate } from 'angular2/angular2';
import {Inject, Injectable} from 'angular2/angular2';
import {Http} from 'angular2/http';
import {RouterLink, routerInjectables} from 'angular2/router';
import {Points} from './points/points'
import {Nationality} from './nationality/nationality'
import {driverHeader} from './Header/driverheader'

import {NamesList} from '../../services/models/NameList';
import UserRepo from '../../services/repositories/user_repo';



@Component({
    selector: 'f1Drivers',
    viewInjector: [routerInjectables],
    viewBindings:[NamesList]
})

@View({
    templateUrl: './components/F1Drivers/f1Drivers.html?v=<%= VERSION %>',
    directives:[Points, Nationality, driverHeader, RouterLink, CORE_DIRECTIVES]
    //viewBindings: [httpInjectables]
})
@CanActivate(() => checkIfUserIsLoggedIn())
export class F1Drivers {
    driverObj:Array<Object>;
    pageSelected:number;
    driversList:Array<Object>;
    constructor(private list :NamesList, private http:Http) {
        this.list.get().then(function(result){
            this.driverObj =  result[0]['DriverStandings'];
            console.log('this.driverObj ', this.driverObj)
            this.driversList = this.driverObj;
            this.pageSelected = this.driverObj.length;

        });
        console.log('this.driverObj: ou', this.driverObj)
        this.devices = [];
        http.get('drivers.json').toRx().subscribe(res => {
            this.devices = res.json();
            this.driverObj =  this.devices[0]['DriverStandings'];
            this.driversList = this.driverObj;
            this.pageSelected = this.driverObj.length;
        });
    }
    checkIfUserIsLoggedIn(){
        this.list.get().then(function(res){
            this.driverObj= res[0]['DriverStandings'];
            console.log('In Header', this.driverObj);
            this.name = params.get('name');
            this.driver = (this.driverObj[ parseInt(params.get('name'))-1);

        })
    }
    showSelected(limitTo){
        console.log('limitTo' , limitTo);
        this.pageSelected = limitTo;
    }
    //Function called when the user clicks on the search button.
    filterObj(obj, key, nameFilter) {
        var driverName = key;
        if ((driverName.toLowerCase()).indexOf(nameFilter.toLowerCase()) !== -1) {
            //make parseInt so as to apply orderBy filter on 'points', 'position' and 'wins' column
            obj.points = parseInt(obj.points);
            obj.position = parseInt(obj.position);
            obj.wins = parseInt(obj.wins);
            return obj;
        }
    }
    filterByNames(nameFilter) {
        this.driverObj = this.driversList;

        /*The filter() method creates a new array with all elements that pass the test implemented by the provided function.
         * refer: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
         * */
        var self=this;
        console.log(nameFilter.value)
        this.driverObj = this.driverObj.filter(function(Obj){

            return self.filterObj(Obj, Obj.Driver.givenName, nameFilter.value);
        });
        this.pageSelected=this.driverObj.length;
        console.log(this.driverObj)
    }

}
