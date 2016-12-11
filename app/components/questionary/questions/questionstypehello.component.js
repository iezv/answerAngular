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
var core_1 = require('@angular/core');
var QuestionsTypeHelloComponent = (function () {
    function QuestionsTypeHelloComponent() {
        this.writer = true;
        this.onStart = new core_1.EventEmitter();
    }
    QuestionsTypeHelloComponent.prototype.startquestion = function () {
        var _this = this;
        console.log('start questions!');
        var timeoutId1 = setTimeout(function () {
            _this.writer = false;
        }, 500);
        var timeoutId2 = setTimeout(function () {
            _this.writer = true;
        }, 1500);
        var timeoutId3 = setTimeout(function () {
            _this.onStart.emit();
        }, 1700);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], QuestionsTypeHelloComponent.prototype, "onStart", void 0);
    QuestionsTypeHelloComponent = __decorate([
        core_1.Component({
            selector: 'questions-hello',
            templateUrl: 'app/components/questionary/questions/questionstypehello.component.html',
            styleUrls: ['app/components/questionary/questions.component.css'],
        }), 
        __metadata('design:paramtypes', [])
    ], QuestionsTypeHelloComponent);
    return QuestionsTypeHelloComponent;
}());
exports.QuestionsTypeHelloComponent = QuestionsTypeHelloComponent;
//# sourceMappingURL=questionstypehello.component.js.map