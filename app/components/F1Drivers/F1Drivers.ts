import {Component, View, CORE_DIRECTIVES, OnInit} from 'angular2/angular2';
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
export class F1Drivers implements OnInit  {
    driverObj:Array<Object>;
    pageSelected:number;
    driversList:Array<Object>;
    constructor(private list :NamesList, private http:Http) {

    }
    onInit() {
        var result = this.list.get();
        this.driverObj =  result[0]['DriverStandings'];
        this.driversList = this.driverObj;
        this.pageSelected = this.driverObj.length;
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
        this.driverObj = this.driverObj.filter(function(Obj){

            return self.filterObj(Obj, Obj.Driver.givenName, nameFilter.value);
        });
        this.pageSelected=this.driverObj.length;
    }

}
