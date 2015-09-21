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
var angular2_1 = require('angular2/angular2');
var Nationality = (function () {
    function Nationality() {
    }
    Object.defineProperty(Nationality.prototype, "text", {
        set: function (value) {
            this.nationality = value;
        },
        enumerable: true,
        configurable: true
    });
    Nationality = __decorate([
        angular2_1.Component({
            selector: 'Nationality',
            properties: ['text: cty'],
        }),
        angular2_1.View({
            templateUrl: './components/F1Drivers/nationality/nationality.html?v=0.0.0'
        }), 
        __metadata('design:paramtypes', [])
    ], Nationality);
    return Nationality;
})();
exports.Nationality = Nationality;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRjFEcml2ZXJzL25hdGlvbmFsaXR5L25hdGlvbmFsaXR5LnRzIl0sIm5hbWVzIjpbIk5hdGlvbmFsaXR5IiwiTmF0aW9uYWxpdHkuY29uc3RydWN0b3IiLCJOYXRpb25hbGl0eS50ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUdBLHlCQUE4QixtQkFBbUIsQ0FBQyxDQUFBO0FBQ2xEO0lBU0lBO0lBQWNDLENBQUNBO0lBRWZELHNCQUFJQSw2QkFBSUE7YUFBUkEsVUFBU0EsS0FBYUE7WUFDbEJFLElBQUlBLENBQUNBLFdBQVdBLEdBQUdBLEtBQUtBLENBQUNBO1FBQzlCQSxDQUFDQTs7O09BQUFGO0lBYkpBO1FBQUNBLG9CQUFTQSxDQUFDQTtZQUNQQSxRQUFRQSxFQUFFQSxhQUFhQTtZQUN2QkEsVUFBVUEsRUFBRUEsQ0FBQ0EsV0FBV0EsQ0FBQ0E7U0FDNUJBLENBQUNBO1FBQ0RBLGVBQUlBLENBQUNBO1lBQ0ZBLFdBQVdBLEVBQUVBLHNFQUFzRUE7U0FDdEZBLENBQUNBOztvQkFRREE7SUFBREEsa0JBQUNBO0FBQURBLENBZEEsQUFjQ0EsSUFBQTtBQVBZLG1CQUFXLGNBT3ZCLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9GMURyaXZlcnMvbmF0aW9uYWxpdHkvbmF0aW9uYWxpdHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgcmF2aSBvbiAyOC84LzE1LlxuICovXG5pbXBvcnQge0NvbXBvbmVudCwgVmlld30gZnJvbSAnYW5ndWxhcjIvYW5ndWxhcjInO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdOYXRpb25hbGl0eScsXG4gICAgcHJvcGVydGllczogWyd0ZXh0OiBjdHknXSxcbn0pXG5AVmlldyh7XG4gICAgdGVtcGxhdGVVcmw6ICcuL2NvbXBvbmVudHMvRjFEcml2ZXJzL25hdGlvbmFsaXR5L25hdGlvbmFsaXR5Lmh0bWw/dj08JT0gVkVSU0lPTiAlPidcbn0pXG5leHBvcnQgY2xhc3MgTmF0aW9uYWxpdHkge1xuICAgIG5hdGlvbmFsaXR5OnN0cmluZztcbiAgICBjb25zdHJ1Y3Rvcigpe31cbiAgICAvLyBUaGlzIHdpbGwgZ2V0IGNhbGxlZCBldmVyeSB0aW1lIHdpdGggdGhlIG5ldyB2YWx1ZSB3aGVuIHRoZSAndG9vbHRpcCcgcHJvcGVydHkgY2hhbmdlc1xuICAgIHNldCB0ZXh0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5uYXRpb25hbGl0eSA9IHZhbHVlO1xuICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==