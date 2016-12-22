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
var questions_service_1 = require('./../../shared/questions.service');
var answers_model_1 = require('../../shared/answers.model');
require('rxjs/add/operator/map');
require('rxjs/Rx');
var QuestionsComponent = (function () {
    //questions: IQuestion[];
    function QuestionsComponent(_elRef, questionsservice) {
        this._elRef = _elRef;
        this.questionsservice = questionsservice;
        this.answers = new answers_model_1.Answers(false, new Array);
        //this.questions = this.questionnary.questions;
    }
    QuestionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.scrollList();
        this.questionsservice.getQuestionnary()
            .subscribe(function (questionnary) {
            _this.questionnary = questionnary;
            return _this.questionnary;
        });
        console.log(this.questionnary);
    };
    QuestionsComponent.prototype.scrollList = function () {
        jQuery(this._elRef.nativeElement).find('div', 'button', 'p', 'a').on('click', function () {
            $("html, body").animate({ scrollTop: $('html, body, div').get(0).scrollHeight }, 1000);
        });
    };
    QuestionsComponent = __decorate([
        core_1.Component({
            selector: 'questions',
            templateUrl: 'app/components/questionary/questions.component.html',
            styleUrls: ['app/components/questionary/questions.component.css'],
            providers: [questions_service_1.QuestionnaryService],
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, questions_service_1.QuestionnaryService])
    ], QuestionsComponent);
    return QuestionsComponent;
}());
exports.QuestionsComponent = QuestionsComponent;
//# sourceMappingURL=questions.component.js.map