import {Component, View,Inject, CORE_DIRECTIVES} from 'angular2/angular2';
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
    directives: [RouterLink, Nationality, Points, CORE_DIRECTIVES]
})

export class Details {
    driverObj:Array<Object>;
    driver:Object;
    id:number;
    showWhenTrue=false;
    constructor(@Inject(NamesList) public list: NamesList,  params:RouteParams){
        this.id = params.get('name');
    }
    onInit() {
        this.driver=this.list.getDriverSpecific(this.id - 1);
    }
}