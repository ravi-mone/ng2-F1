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
/// <reference path="../../typings/tsd.d.ts" />
var angular2_1 = require('angular2/angular2');
var Alert = (function () {
    function Alert(el) {
        this._transitionEnd = getTransitionEnd();
        this._dismissible = true;
        this._fade = true;
        this._in = true;
        this._type = Alert.alertTypes[3];
        this._opened = true;
        this.closestart = new angular2_1.EventEmitter();
        this.closeend = new angular2_1.EventEmitter();
        this._el = el.nativeElement;
    }
    Object.defineProperty(Alert.prototype, "dismissible", {
        set: function (val) {
            this._dismissible = String(val) == "true";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Alert.prototype, "fade", {
        set: function (val) {
            this._fade = this._in = String(val) != "false" && this._transitionEnd != null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Alert.prototype, "type", {
        set: function (val) {
            this._type = Alert.alertTypes.indexOf(val) !== -1 ? val : Alert.alertTypes[3];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Alert.prototype, "opened", {
        set: function (val) {
            var _this = this;
            var opening = String(val) == "true";
            if (!opening && this._opened) {
                this.close();
            }
            else if (opening && !this._opened) {
                this._opened = true;
                this._fade = true;
                setTimeout(function () {
                    _this._in = true;
                }, 30);
            }
        },
        enumerable: true,
        configurable: true
    });
    Alert.prototype.close = function () {
        var _this = this;
        this.closestart.next(null);
        if (this._fade) {
            this._in = false;
            var endAnimationCallback = function (event) {
                _this._el.removeEventListener(_this._transitionEnd, endAnimationCallback, false);
                _this._finalizeTransition();
            };
            this._el.addEventListener(this._transitionEnd, endAnimationCallback, false);
        }
        else {
            this._finalizeTransition();
        }
    };
    Alert.prototype._finalizeTransition = function () {
        this._opened = false;
        this.closeend.next(null);
    };
    Alert.alertTypes = ['success', 'info', 'warning', 'danger'];
    Alert = __decorate([
        angular2_1.Component({
            selector: 'alert',
            properties: ['type', 'dismissible', 'fade', 'opened'],
            events: ['closestart', 'closeend']
        }),
        angular2_1.View({
            templateUrl: './ng2-bootstrap/alert/alert.html',
            directives: [angular2_1.NgIf]
        }), 
        __metadata('design:paramtypes', [angular2_1.ElementRef])
    ], Alert);
    return Alert;
})();
exports.Alert = Alert;
function getTransitionEnd() {
    var el = document.createElement('angular2-bootstrap');
    var transEndEventNames = {
        WebkitTransition: 'webkitTransitionEnd',
        MozTransition: 'transitionend',
        OTransition: 'oTransitionEnd otransitionend',
        transition: 'transitionend'
    };
    for (var name in transEndEventNames) {
        if (el.style[name] !== undefined) {
            return transEndEventNames[name];
        }
    }
    return null;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5nMi1ib290c3RyYXAvYWxlcnQvYWxlcnQudHMiXSwibmFtZXMiOlsiQWxlcnQiLCJBbGVydC5jb25zdHJ1Y3RvciIsIkFsZXJ0LmRpc21pc3NpYmxlIiwiQWxlcnQuZmFkZSIsIkFsZXJ0LnR5cGUiLCJBbGVydC5vcGVuZWQiLCJBbGVydC5jbG9zZSIsIkFsZXJ0Ll9maW5hbGl6ZVRyYW5zaXRpb24iLCJnZXRUcmFuc2l0aW9uRW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLEFBQ0EsK0NBRCtDO0FBQy9DLHlCQUE4RCxtQkFBbUIsQ0FBQyxDQUFBO0FBRWxGO0lBcUJFQSxlQUFZQSxFQUFjQTtRQVRsQkMsbUJBQWNBLEdBQVdBLGdCQUFnQkEsRUFBRUEsQ0FBQ0E7UUFDNUNBLGlCQUFZQSxHQUFZQSxJQUFJQSxDQUFDQTtRQUM3QkEsVUFBS0EsR0FBWUEsSUFBSUEsQ0FBQ0E7UUFDdEJBLFFBQUdBLEdBQVlBLElBQUlBLENBQUNBO1FBQ3BCQSxVQUFLQSxHQUFXQSxLQUFLQSxDQUFDQSxVQUFVQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUNwQ0EsWUFBT0EsR0FBWUEsSUFBSUEsQ0FBQ0E7UUFDeEJBLGVBQVVBLEdBQWlCQSxJQUFJQSx1QkFBWUEsRUFBRUEsQ0FBQ0E7UUFDOUNBLGFBQVFBLEdBQWlCQSxJQUFJQSx1QkFBWUEsRUFBRUEsQ0FBQ0E7UUFHbERBLElBQUlBLENBQUNBLEdBQUdBLEdBQUdBLEVBQUVBLENBQUNBLGFBQWFBLENBQUNBO0lBQzlCQSxDQUFDQTtJQUVERCxzQkFBSUEsOEJBQVdBO2FBQWZBLFVBQWdCQSxHQUFxQkE7WUFDbkNFLElBQUlBLENBQUNBLFlBQVlBLEdBQUdBLE1BQU1BLENBQUNBLEdBQUdBLENBQUNBLElBQUlBLE1BQU1BLENBQUNBO1FBQzVDQSxDQUFDQTs7O09BQUFGO0lBRURBLHNCQUFJQSx1QkFBSUE7YUFBUkEsVUFBU0EsR0FBcUJBO1lBQzVCRyxJQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxJQUFJQSxDQUFDQSxHQUFHQSxHQUFHQSxNQUFNQSxDQUFDQSxHQUFHQSxDQUFDQSxJQUFJQSxPQUFPQSxJQUFJQSxJQUFJQSxDQUFDQSxjQUFjQSxJQUFJQSxJQUFJQSxDQUFDQTtRQUNoRkEsQ0FBQ0E7OztPQUFBSDtJQUVEQSxzQkFBSUEsdUJBQUlBO2FBQVJBLFVBQVNBLEdBQVdBO1lBQ2xCSSxJQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxLQUFLQSxDQUFDQSxVQUFVQSxDQUFDQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQSxHQUFHQSxHQUFHQSxHQUFHQSxLQUFLQSxDQUFDQSxVQUFVQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUNoRkEsQ0FBQ0E7OztPQUFBSjtJQUVEQSxzQkFBSUEseUJBQU1BO2FBQVZBLFVBQVdBLEdBQXFCQTtZQUFoQ0ssaUJBV0NBO1lBVkNBLElBQUlBLE9BQU9BLEdBQUdBLE1BQU1BLENBQUNBLEdBQUdBLENBQUNBLElBQUlBLE1BQU1BLENBQUNBO1lBQ3BDQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxPQUFPQSxJQUFJQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDN0JBLElBQUlBLENBQUNBLEtBQUtBLEVBQUVBLENBQUNBO1lBQ2ZBLENBQUNBO1lBQUNBLElBQUlBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLE9BQU9BLElBQUlBLENBQUNBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLENBQUNBLENBQUNBO2dCQUNwQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsSUFBSUEsQ0FBQ0E7Z0JBQ3BCQSxJQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxJQUFJQSxDQUFDQTtnQkFDbEJBLFVBQVVBLENBQUNBO29CQUNQQSxLQUFJQSxDQUFDQSxHQUFHQSxHQUFHQSxJQUFJQSxDQUFDQTtnQkFDcEJBLENBQUNBLEVBQUVBLEVBQUVBLENBQUNBLENBQUNBO1lBQ1RBLENBQUNBO1FBQ0hBLENBQUNBOzs7T0FBQUw7SUFFREEscUJBQUtBLEdBQUxBO1FBQUFNLGlCQWFDQTtRQVpDQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtRQUMzQkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDZkEsSUFBSUEsQ0FBQ0EsR0FBR0EsR0FBR0EsS0FBS0EsQ0FBQ0E7WUFDakJBLElBQUlBLG9CQUFvQkEsR0FBR0EsVUFBQ0EsS0FBS0E7Z0JBQy9CQSxLQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxtQkFBbUJBLENBQUNBLEtBQUlBLENBQUNBLGNBQWNBLEVBQUVBLG9CQUFvQkEsRUFBRUEsS0FBS0EsQ0FBQ0EsQ0FBQ0E7Z0JBQy9FQSxLQUFJQSxDQUFDQSxtQkFBbUJBLEVBQUVBLENBQUNBO1lBQzdCQSxDQUFDQSxDQUFDQTtZQUNGQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxnQkFBZ0JBLENBQUNBLElBQUlBLENBQUNBLGNBQWNBLEVBQUVBLG9CQUFvQkEsRUFBRUEsS0FBS0EsQ0FBQ0EsQ0FBQ0E7UUFDOUVBLENBQUNBO1FBQUNBLElBQUlBLENBQUNBLENBQUNBO1lBQ05BLElBQUlBLENBQUNBLG1CQUFtQkEsRUFBRUEsQ0FBQ0E7UUFDN0JBLENBQUNBO0lBRUhBLENBQUNBO0lBQ0ROLG1DQUFtQkEsR0FBbkJBO1FBQ0VPLElBQUlBLENBQUNBLE9BQU9BLEdBQUdBLEtBQUtBLENBQUNBO1FBQ3JCQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtJQUMzQkEsQ0FBQ0E7SUF6RE1QLGdCQUFVQSxHQUFHQSxDQUFDQSxTQUFTQSxFQUFFQSxNQUFNQSxFQUFFQSxTQUFTQSxFQUFFQSxRQUFRQSxDQUFDQSxDQUFDQTtJQVYvREE7UUFBQ0Esb0JBQVNBLENBQUNBO1lBQ1RBLFFBQVFBLEVBQUVBLE9BQU9BO1lBQ2ZBLFVBQVVBLEVBQUVBLENBQUNBLE1BQU1BLEVBQUVBLGFBQWFBLEVBQUVBLE1BQU1BLEVBQUVBLFFBQVFBLENBQUNBO1lBQ3JEQSxNQUFNQSxFQUFFQSxDQUFDQSxZQUFZQSxFQUFFQSxVQUFVQSxDQUFDQTtTQUNyQ0EsQ0FBQ0E7UUFDREEsZUFBSUEsQ0FBQ0E7WUFDSkEsV0FBV0EsRUFBRUEsa0NBQWtDQTtZQUMvQ0EsVUFBVUEsRUFBRUEsQ0FBQ0EsZUFBSUEsQ0FBQ0E7U0FDbkJBLENBQUNBOztjQTREREE7SUFBREEsWUFBQ0E7QUFBREEsQ0FwRUEsQUFvRUNBLElBQUE7QUEzRFksYUFBSyxRQTJEakIsQ0FBQTtBQUlEO0lBQ0lRLElBQUlBLEVBQUVBLEdBQUdBLFFBQVFBLENBQUNBLGFBQWFBLENBQUNBLG9CQUFvQkEsQ0FBQ0EsQ0FBQ0E7SUFDdERBLElBQUlBLGtCQUFrQkEsR0FBR0E7UUFDckJBLGdCQUFnQkEsRUFBR0EscUJBQXFCQTtRQUN4Q0EsYUFBYUEsRUFBTUEsZUFBZUE7UUFDbENBLFdBQVdBLEVBQVFBLCtCQUErQkE7UUFDbERBLFVBQVVBLEVBQVNBLGVBQWVBO0tBQ3JDQSxDQUFDQTtJQUNGQSxHQUFHQSxDQUFDQSxDQUFDQSxHQUFHQSxDQUFDQSxJQUFJQSxJQUFJQSxrQkFBa0JBLENBQUNBLENBQUNBLENBQUNBO1FBQ2xDQSxFQUFFQSxDQUFDQSxDQUFDQSxFQUFFQSxDQUFDQSxLQUFLQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxTQUFTQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUMvQkEsTUFBTUEsQ0FBQ0Esa0JBQWtCQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtRQUNwQ0EsQ0FBQ0E7SUFDTEEsQ0FBQ0E7SUFDREEsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0E7QUFDaEJBLENBQUNBIiwiZmlsZSI6Im5nMi1ib290c3RyYXAvYWxlcnQvYWxlcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XG5pbXBvcnQge0NvbXBvbmVudCwgVmlldywgRWxlbWVudFJlZiwgTmdJZiwgRXZlbnRFbWl0dGVyfSBmcm9tICdhbmd1bGFyMi9hbmd1bGFyMic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FsZXJ0JyxcbiAgICBwcm9wZXJ0aWVzOiBbJ3R5cGUnLCAnZGlzbWlzc2libGUnLCAnZmFkZScsICdvcGVuZWQnXSxcbiAgICBldmVudHM6IFsnY2xvc2VzdGFydCcsICdjbG9zZWVuZCddXG59KVxuQFZpZXcoe1xuICB0ZW1wbGF0ZVVybDogJy4vbmcyLWJvb3RzdHJhcC9hbGVydC9hbGVydC5odG1sJyxcbiAgZGlyZWN0aXZlczogW05nSWZdXG59KVxuZXhwb3J0IGNsYXNzIEFsZXJ0IHtcbiAgc3RhdGljIGFsZXJ0VHlwZXMgPSBbJ3N1Y2Nlc3MnLCAnaW5mbycsICd3YXJuaW5nJywgJ2RhbmdlciddO1xuICBwcml2YXRlIF9lbDogSFRNTEVsZW1lbnQ7XG4gIHByaXZhdGUgX3RyYW5zaXRpb25FbmQ6IHN0cmluZyA9IGdldFRyYW5zaXRpb25FbmQoKTtcbiAgcHJpdmF0ZSBfZGlzbWlzc2libGU6IGJvb2xlYW4gPSB0cnVlO1xuICBwcml2YXRlIF9mYWRlOiBib29sZWFuID0gdHJ1ZTtcbiAgcHJpdmF0ZSBfaW46IGJvb2xlYW4gPSB0cnVlO1xuICBwcml2YXRlIF90eXBlOiBzdHJpbmcgPSBBbGVydC5hbGVydFR5cGVzWzNdO1xuICBwcml2YXRlIF9vcGVuZWQ6IGJvb2xlYW4gPSB0cnVlO1xuICBwcml2YXRlIGNsb3Nlc3RhcnQ6IEV2ZW50RW1pdHRlciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgcHJpdmF0ZSBjbG9zZWVuZDogRXZlbnRFbWl0dGVyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBcbiAgY29uc3RydWN0b3IoZWw6IEVsZW1lbnRSZWYpIHtcbiAgICB0aGlzLl9lbCA9IGVsLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBzZXQgZGlzbWlzc2libGUodmFsOiBzdHJpbmcgfCBib29sZWFuKSB7XG4gICAgdGhpcy5fZGlzbWlzc2libGUgPSBTdHJpbmcodmFsKSA9PSBcInRydWVcIjtcbiAgfVxuICBcbiAgc2V0IGZhZGUodmFsOiBzdHJpbmcgfCBib29sZWFuKSB7XG4gICAgdGhpcy5fZmFkZSA9IHRoaXMuX2luID0gU3RyaW5nKHZhbCkgIT0gXCJmYWxzZVwiICYmIHRoaXMuX3RyYW5zaXRpb25FbmQgIT0gbnVsbDtcbiAgfVxuICBcbiAgc2V0IHR5cGUodmFsOiBzdHJpbmcpIHtcbiAgICB0aGlzLl90eXBlID0gQWxlcnQuYWxlcnRUeXBlcy5pbmRleE9mKHZhbCkgIT09IC0xID8gdmFsIDogQWxlcnQuYWxlcnRUeXBlc1szXTtcbiAgfVxuICBcbiAgc2V0IG9wZW5lZCh2YWw6IHN0cmluZyB8IGJvb2xlYW4pIHtcbiAgICB2YXIgb3BlbmluZyA9IFN0cmluZyh2YWwpID09IFwidHJ1ZVwiO1xuICAgIGlmICghb3BlbmluZyAmJiB0aGlzLl9vcGVuZWQpIHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9IGVsc2UgaWYgKG9wZW5pbmcgJiYgIXRoaXMuX29wZW5lZCkge1xuICAgICAgdGhpcy5fb3BlbmVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuX2ZhZGUgPSB0cnVlO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5faW4gPSB0cnVlO1xuICAgICAgfSwgMzApO1xuICAgIH0gXG4gIH1cblxuICBjbG9zZSgpOiB2b2lkIHtcbiAgICB0aGlzLmNsb3Nlc3RhcnQubmV4dChudWxsKTtcbiAgICBpZiAodGhpcy5fZmFkZSkge1xuICAgICAgdGhpcy5faW4gPSBmYWxzZTtcbiAgICAgIHZhciBlbmRBbmltYXRpb25DYWxsYmFjayA9IChldmVudCkgPT4ge1xuICAgICAgICB0aGlzLl9lbC5yZW1vdmVFdmVudExpc3RlbmVyKHRoaXMuX3RyYW5zaXRpb25FbmQsIGVuZEFuaW1hdGlvbkNhbGxiYWNrLCBmYWxzZSk7XG4gICAgICAgIHRoaXMuX2ZpbmFsaXplVHJhbnNpdGlvbigpO1xuICAgICAgfTtcbiAgICAgIHRoaXMuX2VsLmFkZEV2ZW50TGlzdGVuZXIodGhpcy5fdHJhbnNpdGlvbkVuZCwgZW5kQW5pbWF0aW9uQ2FsbGJhY2ssIGZhbHNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fZmluYWxpemVUcmFuc2l0aW9uKCk7XG4gICAgfVxuICAgIFxuICB9XG4gIF9maW5hbGl6ZVRyYW5zaXRpb24oKTogdm9pZCB7XG4gICAgdGhpcy5fb3BlbmVkID0gZmFsc2U7XG4gICAgdGhpcy5jbG9zZWVuZC5uZXh0KG51bGwpO1xuICB9XG59XG5cbi8vIENTUyBUUkFOU0lUSU9OIFNVUFBPUlQgKFNob3V0b3V0OiBodHRwOi8vd3d3Lm1vZGVybml6ci5jb20vKVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5mdW5jdGlvbiBnZXRUcmFuc2l0aW9uRW5kKCk6IHN0cmluZyB7XG4gICAgdmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYW5ndWxhcjItYm9vdHN0cmFwJyk7XG4gICAgdmFyIHRyYW5zRW5kRXZlbnROYW1lcyA9IHtcbiAgICAgICAgV2Via2l0VHJhbnNpdGlvbiA6ICd3ZWJraXRUcmFuc2l0aW9uRW5kJyxcbiAgICAgICAgTW96VHJhbnNpdGlvbiAgICA6ICd0cmFuc2l0aW9uZW5kJyxcbiAgICAgICAgT1RyYW5zaXRpb24gICAgICA6ICdvVHJhbnNpdGlvbkVuZCBvdHJhbnNpdGlvbmVuZCcsXG4gICAgICAgIHRyYW5zaXRpb24gICAgICAgOiAndHJhbnNpdGlvbmVuZCdcbiAgICB9O1xuICAgIGZvciAodmFyIG5hbWUgaW4gdHJhbnNFbmRFdmVudE5hbWVzKSB7XG4gICAgICAgIGlmIChlbC5zdHlsZVtuYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJhbnNFbmRFdmVudE5hbWVzW25hbWVdO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==