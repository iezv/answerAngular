"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var Angular2AutoScroll = (function () {
    function Angular2AutoScroll(element) {
        this.lockYOffset = 10;
        this.observeAttributes = "false";
        this.isLocked = false;
        this.nativeElement = element.nativeElement;
    }
    Angular2AutoScroll.prototype.scrollHandler = function () {
        var scrollFromBottom = this.nativeElement.scrollHeight - this.nativeElement.scrollTop - this.nativeElement.clientHeight;
        this.isLocked = scrollFromBottom > this.lockYOffset;
    };
    Angular2AutoScroll.prototype.getObserveAttributes = function () {
        return this.observeAttributes !== '' && this.observeAttributes.toLowerCase() !== 'false';
    };
    Angular2AutoScroll.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.mutationObserver = new MutationObserver(function () {
            if (!_this.isLocked) {
                _this.nativeElement.scrollTop = _this.nativeElement.scrollHeight;
            }
        });
        this.mutationObserver.observe(this.nativeElement, {
            childList: true,
            subtree: true,
            attributes: this.getObserveAttributes()
        });
    };
    Angular2AutoScroll.prototype.ngOnDestroy = function () {
        this.mutationObserver.disconnect();
    };
    __decorate([
        core_1.Input('lock-y-offset'), 
        __metadata('design:type', Object)
    ], Angular2AutoScroll.prototype, "lockYOffset", void 0);
    __decorate([
        core_1.Input('observe-attributes'), 
        __metadata('design:type', String)
    ], Angular2AutoScroll.prototype, "observeAttributes", void 0);
    __decorate([
        core_1.HostListener('scroll'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], Angular2AutoScroll.prototype, "scrollHandler", null);
    Angular2AutoScroll = __decorate([
        core_1.Directive({
            selector: '[angular2-auto-scroll]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], Angular2AutoScroll);
    return Angular2AutoScroll;
}());
exports.Angular2AutoScroll = Angular2AutoScroll;
//# sourceMappingURL=angular2-auto-scroll.directive.js.map