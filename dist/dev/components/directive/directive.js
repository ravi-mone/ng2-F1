var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
        this._el.nativeElement.style.backgroundColor = 'red';
    };
    ChatBlinkDirective.prototype.onMouseEnter = function () {
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
        __param(0, di_1.Inject(angular2_1.ElementRef)), 
        __metadata('design:paramtypes', [angular2_1.ElementRef])
    ], ChatBlinkDirective);
    return ChatBlinkDirective;
})();
exports.ChatBlinkDirective = ChatBlinkDirective;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZGlyZWN0aXZlL2RpcmVjdGl2ZS50cyJdLCJuYW1lcyI6WyJDaGF0QmxpbmtEaXJlY3RpdmUiLCJDaGF0QmxpbmtEaXJlY3RpdmUuY29uc3RydWN0b3IiLCJDaGF0QmxpbmtEaXJlY3RpdmUub25Jbml0IiwiQ2hhdEJsaW5rRGlyZWN0aXZlLk9uRGVzdHJveSIsIkNoYXRCbGlua0RpcmVjdGl2ZS5fYmxpbmsiLCJDaGF0QmxpbmtEaXJlY3RpdmUub25Nb3VzZUVudGVyIiwiQ2hhdEJsaW5rRGlyZWN0aXZlLm9uTW91c2VMZWF2ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFRQSx5QkFBeUYsbUJBQW1CLENBQUMsQ0FBQTtBQUM3RyxtQkFBcUIsYUFBYSxDQUFDLENBQUE7QUFFbkM7SUFXSUEsNEJBQXdDQSxHQUFlQTtRQUFmQyxRQUFHQSxHQUFIQSxHQUFHQSxDQUFZQTtJQUV2REEsQ0FBQ0E7SUFFREQsbUNBQU1BLEdBQU5BO1FBQ0lFLElBQUlBLENBQUNBLE1BQU1BLEVBQUVBLENBQUNBO1FBQ2xCQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxXQUFXQSxDQUFDQSxDQUFDQTtJQUN6QkEsQ0FBQ0E7SUFFTEYsc0NBQVNBLEdBQVRBO1FBQ0lHLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLENBQUFBO0lBQ1pBLENBQUNBO0lBQ1dILG1DQUFNQSxHQUFkQTtRQUVJSSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxhQUFhQSxDQUFDQSxLQUFLQSxDQUFDQSxlQUFlQSxHQUFHQSxLQUFLQSxDQUFDQTtJQVl6REEsQ0FBQ0E7SUFFTEoseUNBQVlBLEdBQVpBO1FBRUlLLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLGFBQWFBLENBQUNBLEtBQUtBLENBQUNBLGVBQWVBLEdBQUdBLE1BQU1BLENBQUNBO0lBQzFEQSxDQUFDQTtJQUNETCx5Q0FBWUEsR0FBWkE7UUFDSU0sSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsYUFBYUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsZUFBZUEsR0FBR0EsS0FBS0EsQ0FBQ0E7SUFDekRBLENBQUNBO0lBckNVTix5QkFBTUEsR0FBOENBLEVBQUNBLElBQUlBLEVBQUVBLE9BQU9BLEVBQUVBLEdBQUdBLEVBQUVBLEdBQUdBLEVBQUVBLEtBQUtBLEVBQUNBLENBQUNBLEVBQUNBLENBQUNBO0lBQ3ZGQSxpQ0FBY0EsR0FBV0EsSUFBSUEsQ0FBQ0E7SUFUekNBO1FBQUNBLG9CQUFTQSxDQUFDQTtZQUNQQSxRQUFRQSxFQUFFQSxpQkFBaUJBO1lBQzNCQSxJQUFJQSxFQUFFQTtnQkFDRkEsY0FBY0EsRUFBRUEsZ0JBQWdCQTtnQkFDaENBLGNBQWNBLEVBQUVBLGdCQUFnQkE7YUFDbkNBO1NBQ0pBLENBQUNBO1FBS2NBLFdBQUNBLFdBQU1BLENBQUNBLHFCQUFVQSxDQUFDQSxDQUFBQTs7MkJBbUNsQ0E7SUFBREEseUJBQUNBO0FBQURBLENBOUNBLEFBOENDQSxJQUFBO0FBdkNZLDBCQUFrQixxQkF1QzlCLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9kaXJlY3RpdmUvZGlyZWN0aXZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9EaXJlY3RpdmVzIGFsbG93IHlvdSB0byBhdHRhY2ggYmVoYXZpb3IgdG8gZWxlbWVudHMgaW4gdGhlIERPTS5cbi8vRGlyZWN0aXZlIHdpdGggYW4gZW1iZWRkZWQgdmlldyBhcmUgY2FsbGVkIENvbXBvbmVudHMgOilcbi8qXG4qIEEgZGlyZWN0aXZlIGNvbnNpc3RzIG9mIGEgc2luZ2xlIGRpcmVjdGl2ZSBhbm5vdGF0aW9uIGFuZCBhIGNvbnRyb2xsZXIgY2xhc3MuIFdoZW4gdGhlIGRpcmVjdGl2ZSdzIHNlbGVjdG9yIG1hdGNoZXMgZWxlbWVudHMgaW4gdGhlIERPTSwgdGhlIGZvbGxvd2luZyBzdGVwcyBvY2N1cjpcblxuIEZvciBlYWNoIGRpcmVjdGl2ZSwgdGhlIEVsZW1lbnRJbmplY3RvciBhdHRlbXB0cyB0byByZXNvbHZlIHRoZSBkaXJlY3RpdmUncyBjb25zdHJ1Y3RvciBhcmd1bWVudHMuXG4gQW5ndWxhciBpbnN0YW50aWF0ZXMgZGlyZWN0aXZlcyBmb3IgZWFjaCBtYXRjaGVkIGVsZW1lbnQgdXNpbmcgRWxlbWVudEluamVjdG9yIGluIGEgZGVwdGgtZmlyc3Qgb3JkZXIsIGFzIGRlY2xhcmVkIGluIHRoZSBIVE1MLlxuICovXG5pbXBvcnQge0RpcmVjdGl2ZSwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBvbk1vdXNlRW50ZXIsIG9uTW91c2VMZWF2ZSwgT25EZXN0cm95fSBmcm9tICdhbmd1bGFyMi9hbmd1bGFyMic7XG5pbXBvcnQge0luamVjdH0gZnJvbSAnYW5ndWxhcjIvZGknO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1tibGluay1tZXNzYWdlXScsXG4gICAgaG9zdDoge1xuICAgICAgICAnKG1vdXNlZW50ZXIpJzogJ29uTW91c2VFbnRlcigpJyxcbiAgICAgICAgJyhtb3VzZWxlYXZlKSc6ICdvbk1vdXNlTGVhdmUoKSdcbiAgICB9XG59KVxuZXhwb3J0IGNsYXNzIENoYXRCbGlua0RpcmVjdGl2ZSB7XG4gICAgc3RhdGljIE1BUkdJTjoge2luaXQ6IHN0cmluZywgZW5kOiBzdHJpbmcsIGNvdW50Om51bWJlcn0gPSB7aW5pdDogJzE1MHB4JywgZW5kOiAnMCcsIGNvdW50OjB9O1xuICAgIHN0YXRpYyBUSU1FX1RPX1JFUEVBVDogbnVtYmVyID0gMTAwMDtcblxuICAgIGNvbnN0cnVjdG9yKEBJbmplY3QoRWxlbWVudFJlZikgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYpIHtcblxuICAgIH1cblxuICAgIG9uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5fYmxpbmsoKTtcbiAgICBjb25zb2xlLmxvZygnaW4gb25saXQgJyk7XG4gICAgfVxuXG5PbkRlc3Ryb3koKXtcbiAgICBhbGVydCgxKVxufVxuICAgIHByaXZhdGUgX2JsaW5rKCk6dm9pZCB7XG4gICAgIC8vICAgdGhpcy5fZWwubmF0aXZlRWxlbWVudC5zdHlsZS5tYXJnaW5MZWZ0ID0gQ2hhdEJsaW5rRGlyZWN0aXZlLk1BUkdJTi5pbml0O1xuICAgICAgICB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZWQnO1xuXG4gICAgICAgIC8qdmFyIGJsaW5rID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgIC8vIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQuc3R5bGUubWFyZ2luTGVmdCA9IENoYXRCbGlua0RpcmVjdGl2ZS5NQVJHSU4uZW5kO1xuICAgICAgICAgICAgdGhpcy5fZWwubmF0aXZlRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZ3JleSc7XG4gICAgICAgICAgICBpZihDaGF0QmxpbmtEaXJlY3RpdmUuTUFSR0lOLmNvdW50PT0zKXtcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoYmxpbmspO1xuICAgICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgICAgIENoYXRCbGlua0RpcmVjdGl2ZS5NQVJHSU4uY291bnQrKztcbiAgICAgICAgICAgICAgICB0aGlzLl9ibGluaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBDaGF0QmxpbmtEaXJlY3RpdmUuVElNRV9UT19SRVBFQVQpOyovXG4gICAgfVxuXG5vbk1vdXNlRW50ZXIoKSB7XG4gICAgLy8gZXhhY3Qgc2lnbmF0dXJlIHRvIGJlIGRldGVybWluZWRcbiAgICB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdncmV5Jztcbn1cbm9uTW91c2VMZWF2ZSgpIHtcbiAgICB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZWQnO1xufVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==