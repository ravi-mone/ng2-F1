var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
//Directives allow you to attach behavior to elements in the DOM.
//Directive with an embedded view are called Components :)
/*
* A directive consists of a single directive annotation and a controller class. When the directive's selector matches elements in the DOM, the following steps occur:

 For each directive, the ElementInjector attempts to resolve the directive's constructor arguments.
 Angular instantiates directives for each matched element using ElementInjector in a depth-first order, as declared in the HTML.
 */
var angular2_1 = require('angular2/angular2');
var di_1 = require('angular2/di');
var ChatBlinkDirective = (function () {
    function ChatBlinkDirective(_el) {
        this._el = _el;
    }
    ChatBlinkDirective.prototype.onInit = function () {
        this._blink();
        console.log('in onlit ');
    };
    ChatBlinkDirective.prototype.OnDestroy = function () {
        alert(1);
    };
    ChatBlinkDirective.prototype._blink = function () {
        //   this._el.nativeElement.style.marginLeft = ChatBlinkDirective.MARGIN.init;
        this._el.nativeElement.style.backgroundColor = 'red';
        /*var blink = setTimeout(() => {
           // this._el.nativeElement.style.marginLeft = ChatBlinkDirective.MARGIN.end;
            this._el.nativeElement.style.backgroundColor = 'grey';
            if(ChatBlinkDirective.MARGIN.count==3){
                clearTimeout(blink);
            }else {
                ChatBlinkDirective.MARGIN.count++;
                this._blink();
            }
        }, ChatBlinkDirective.TIME_TO_REPEAT);*/
    };
    ChatBlinkDirective.prototype.onMouseEnter = function () {
        // exact signature to be determined
        this._el.nativeElement.style.backgroundColor = 'grey';
    };
    ChatBlinkDirective.prototype.onMouseLeave = function () {
        this._el.nativeElement.style.backgroundColor = 'red';
    };
    ChatBlinkDirective.MARGIN = { init: '150px', end: '0', count: 0 };
    ChatBlinkDirective.TIME_TO_REPEAT = 1000;
    ChatBlinkDirective = __decorate([
        angular2_1.Directive({
            selector: '[blink-message]',
            host: {
                '(mouseenter)': 'onMouseEnter()',
                '(mouseleave)': 'onMouseLeave()'
            }
        }),
        __param(0, di_1.Inject(angular2_1.ElementRef))
    ], ChatBlinkDirective);
    return ChatBlinkDirective;
})();
exports.ChatBlinkDirective = ChatBlinkDirective;
