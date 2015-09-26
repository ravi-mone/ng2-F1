var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
/// <reference path="../node_modules/ng2-bootstrap/typings/tsd.d.ts" />
var angular2_1 = require('angular2/angular2');
var directive_1 = require('../directive/directive');
var alert_1 = require('../../ng2-bootstrap/alert/alert');
//import {Alert} from 'ng2-bootstrap/alert/alert';
var About = (function () {
    function About() {
        this.alerts = [
            {
                type: 'danger',
                msg: 'Oh snap! Change a few things up and try submitting again.'
            },
            {
                type: 'success',
                msg: 'Well done! You successfully read this important alert message.',
                closable: true
            }
        ];
    }
    About.prototype.closeAlert = function (i) {
        this.alerts.splice(i, 1);
    };
    About.prototype.addAlert = function () {
        this.alerts.push({ msg: 'Another alert!', closable: true });
    };
    About = __decorate([
        angular2_1.Component({
            selector: 'about'
        }),
        angular2_1.View({
            templateUrl: './components/about/about.html?v=<%= VERSION %>',
            styleUrls: ['about.css'],
            directives: [angular2_1.CORE_DIRECTIVES, directive_1.ChatBlinkDirective, alert_1.Alert]
        })
    ], About);
    return About;
})();
exports.About = About;
