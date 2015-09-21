import { Component, View, CORE_DIRECTIVES, FORM_DIRECTIVES} from "angular2/angular2";
import {NamesList} from '../../services/models/NameList';

@Component({
    selector: 'events-demo',
    bindings:[NamesList]
})
@View({
    templateUrl: './components/Events/events.html',
    directives:[CORE_DIRECTIVES, FORM_DIRECTIVES]
})

export class EventsDemo {
    articles:Array<Object>;
    constructor(public list: NamesList){
        this.articles=this.list.articleList;
        console.log(this.articles)
    }
    addArticle(title, link) {
       console.log("Adding article with title", title.value, "and link", link.value);
       this.list.postArticle({title : title.value, link:link.value});
        title.value=''; link.value='';
    }
    deleteArticle(index){
        console.log(index)
        this.list.deleteArticle(index);
    }
}
