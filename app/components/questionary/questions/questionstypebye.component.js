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
var QuestionsTypeByeComponent = (function () {
    function QuestionsTypeByeComponent() {
        this.onStartEnd = new core_1.EventEmitter();
    }
    QuestionsTypeByeComponent.prototype.saveresult = function () {
        var _this = this;
        console.log('end questions!');
        var timeoutId1 = setTimeout(function () {
            _this.onStartEnd.emit();
        }, 1700);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], QuestionsTypeByeComponent.prototype, "onStartEnd", void 0);
    QuestionsTypeByeComponent = __decorate([
        core_1.Component({
            selector: 'questions-bye',
            templateUrl: 'app/components/questionary/questions/questionstypebye.component.html',
            styleUrls: ['app/components/questionary/questions.component.css'],
        }), 
        __metadata('design:paramtypes', [])
    ], QuestionsTypeByeComponent);
    return QuestionsTypeByeComponent;
}());
exports.QuestionsTypeByeComponent = QuestionsTypeByeComponent;
//# sourceMappingURL=questionstypebye.component.js.map