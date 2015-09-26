import {Component, View, CORE_DIRECTIVES, EventEmitter, onComplete} from 'angular2/angular2';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import UserRepo from '../../services/repositories/user_repo';
import User from '../../services/models/user';
import {Alert} from '../../ng2-bootstrap/alert/alert';
@Component({
    selector: 'home',
    events: ['statusChange']
})
@View({
    templateUrl: './components/home/home.html?v=<%= VERSION %>',
    directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES, Alert]
})
export class Home {
    private loading:boolean;
    statusChange: EventEmitter;

    //Bootstrap alert
    private alertOpened:boolean = true;
    userName:string ='';
    constructor(private repo:UserRepo) {
        console.log(UserRepo);
        this.statusChange = new EventEmitter();
    }
    onComplete() {
        console.log('inside onComplete');
        this.statusChange.next('completed');
    }
    addUser(currentUser) {
        this.loading = true;
        console.log(this.repo.getUser)
        this.repo.getUser(currentUser.value)
            .then(u => {
                this.loading = false;
                this.userName = u.name;
            });
        currentUser.value = '';
    }
    getAll():User[] {
        return this.repo.getAll();
    }
    remove(user:User) {
        this.repo.remove(user);
    }
    //Bootstrap Alert
    close(evt:MouseEvent) {
        evt.preventDefault();
        this.alertOpened = false;
    }

    log(msg:string) {
        console.log(msg);
    }

    toggle() {
        this.alertOpened = !this.alertOpened;
    }
}
