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
var QuestionsTypeFlagComponent = (function () {
    function QuestionsTypeFlagComponent() {
        this.onStart = new core_1.EventEmitter();
        this.answer = '';
        this.answerballoon = true;
        this.tick = true;
        this.writer = true;
    }
    QuestionsTypeFlagComponent.prototype.construrtor = function () {
    };
    QuestionsTypeFlagComponent.prototype.addAnswers = function (answer) {
        this.answer = this.answer + ', ' + answer;
    };
    QuestionsTypeFlagComponent.prototype.saveanswer = function () {
        var _this = this;
        var timeoutId1 = setTimeout(function () {
            _this.tick = false;
        }, 1000);
        var timeoutId2 = setTimeout(function () {
            _this.writer = false;
        }, 1500);
        var timeoutId3 = setTimeout(function () {
            _this.writer = true;
        }, 2500);
        var timeoutId4 = setTimeout(function () {
            _this.onStart.emit(_this.answer);
        }, 3000);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], QuestionsTypeFlagComponent.prototype, "question", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], QuestionsTypeFlagComponent.prototype, "varanswers", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], QuestionsTypeFlagComponent.prototype, "onStart", void 0);
    QuestionsTypeFlagComponent = __decorate([
        core_1.Component({
            selector: 'questions-flag',
            templateUrl: 'app/components/questionary/questions/questionstypeflag.component.html',
            styleUrls: ['app/components/questionary/questions.component.css'],
        }), 
        __metadata('design:paramtypes', [])
    ], QuestionsTypeFlagComponent);
    return QuestionsTypeFlagComponent;
}());
exports.QuestionsTypeFlagComponent = QuestionsTypeFlagComponent;
//# sourceMappingURL=questionstypeflag.component.js.map