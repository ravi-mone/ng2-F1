import {Component, View,Inject, CORE_DIRECTIVES, CanActivate} from 'angular2/angular2';
import {Router, RouteParams, RouterLink} from 'angular2/router';
import {RouteParams} from 'angular2/router';
import {Nationality} from '../nationality/nationality'
import {Points} from '../points/points'
import {NamesList} from '../../../services/models/NameList';
@Component({
    selector: 'Details',
    viewBindings:[NamesList]
})
@View({
    templateUrl: './components/F1Drivers/Details/details.html?v=<%= VERSION %>',
    directives: [RouterLink, Nationality, Points, CORE_DIRECTIVES,CanActivate]
})
@CanActivate(() => checkIfUserIsLoggedIn())
export class Details {
    driverObj:Array<Object>;
    driver:Object;
    showWhenTrue=false;
    constructor(@Inject(NamesList) public list: NamesList,  params:RouteParams){
        console.log(this.list, this.list.driverNames)
        console.log(params.get('name'))
    }
    checkIfUserIsLoggedIn(){
        this.list.get().then(function(res){
            this.driverObj= res[0]['DriverStandings'];
            console.log('In Header', this.driverObj);
            this.name = params.get('name');
            this.driver = (this.driverObj[ parseInt(params.get('name'))-1);

        })
    }


}