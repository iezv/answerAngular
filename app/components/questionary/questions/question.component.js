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
var questionnary_model_1 = require('../../../shared/questionnary.model');
var QuestionComponent = (function () {
    function QuestionComponent() {
        this.question = new questionnary_model_1.Question(1, 'Title1', [new questionnary_model_1.Answer(1, 'title1', 3, 2), new questionnary_model_1.Answer(2, 'title2', 4, 2)]);
        this.answers = this.question.answers;
    }
    QuestionComponent.prototype.saveresult = function () {
    };
    QuestionComponent = __decorate([
        core_1.Component({
            selector: 'question',
            templateUrl: 'app/components/questionary/questions/question.component.html',
            styleUrls: ['app/components/questionary/questions.component.css'],
        }), 
        __metadata('design:paramtypes', [])
    ], QuestionComponent);
    return QuestionComponent;
}());
exports.QuestionComponent = QuestionComponent;
//# sourceMappingURL=question.component.js.map