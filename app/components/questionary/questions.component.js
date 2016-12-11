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
var questionstypestar_component_1 = require('./questions/questionstypestar.component');
var questionstypefield_component_1 = require('./questions/questionstypefield.component');
var questionstypeflag_component_1 = require('./questions/questionstypeflag.component');
var questionstyperadio_component_1 = require('./questions/questionstyperadio.component');
var questionstypestar1_component_1 = require('./questions/questionstypestar1.component');
var questionstypefield1_component_1 = require('./questions/questionstypefield1.component');
var questionstypeflag1_component_1 = require('./questions/questionstypeflag1.component');
var questionstyperadio1_component_1 = require('./questions/questionstyperadio1.component');
var QuestionsComponent = (function () {
    function QuestionsComponent() {
        this.visualhello = false;
        this.visualques1 = true;
        this.visualques2 = true;
        this.visualques3 = true;
        this.visualques4 = true;
        this.visualques5 = true;
        this.visualques6 = true;
        this.visualques7 = true;
        this.visualques8 = true;
        this.visualbye = true;
        this.answers = [];
        this.questionfield1 = 'questionfield1';
        this.questionfield2 = 'questionfield2';
        this.questionstar1 = 'questionstar1';
        this.questionstar2 = 'questionstar2';
        this.questionflag1 = 'questionflag1';
        this.questionflag2 = 'questionflag2';
        this.questionradio1 = 'questionradio1';
        this.questionradio2 = 'questionradio2';
        this.varanswerflag1 = ['answer1', 'answer2', 'ansrer3'];
        this.varanswerflag2 = ['answer1', 'answer2'];
        this.varanswerradio1 = ['answer1', 'answer2', 'ansrer3'];
        this.varanswerradio2 = ['answer1', 'answer2'];
    }
    /* Question1 - star */
    QuestionsComponent.prototype.startquestion1 = function () {
        var _this = this;
        console.log('Start question1');
        this.visualques1 = false;
        var timeoutId1 = setTimeout(function () {
            _this.starQuestion1.answerballoon = false;
        }, 1000);
    };
    QuestionsComponent.prototype.startquestion2 = function (answer) {
        var _this = this;
        console.log('Start question2');
        this.answers.push(this.starQuestion1.question + ': ' + answer);
        //console.log(this.answers);
        if (answer < 3) {
            var timeoutId1 = setTimeout(function () {
                _this.visualques2 = false;
            }, 1000);
            var timeoutId2 = setTimeout(function () {
                _this.fieldQuestion1.answerballoon = false;
            }, 2000);
        }
        else {
            var timeoutId1 = setTimeout(function () {
                _this.visualques3 = false;
            }, 1000);
            var timeoutId2 = setTimeout(function () {
                _this.flagQuestion1.answerballoon = false;
            }, 2000);
        }
    };
    /* Question3 - field (bad) */
    QuestionsComponent.prototype.startquestion3 = function (answer) {
        var _this = this;
        console.log('Start question3');
        this.answers.push(this.fieldQuestion1.question + ': ' + answer);
        var timeoutId1 = setTimeout(function () {
            _this.visualques3 = false;
        }, 1000);
        var timeoutId2 = setTimeout(function () {
            _this.flagQuestion1.answerballoon = false;
        }, 2000);
    };
    QuestionsComponent.prototype.startquestion4 = function (answer) {
        var _this = this;
        console.log('Start question4');
        this.answers.push(this.flagQuestion1.question + ': ' + answer);
        this.visualques4 = false;
        var timeoutId1 = setTimeout(function () {
            _this.radioQuestion1.answerballoon = false;
        }, 1000);
    };
    QuestionsComponent.prototype.startquestion5 = function (answer) {
        var _this = this;
        console.log('Start question5');
        this.answers.push(this.radioQuestion1.question + ': ' + answer);
        this.visualques5 = false;
        var timeoutId1 = setTimeout(function () {
            _this.starQuestion2.answerballoon = false;
        }, 1000);
    };
    QuestionsComponent.prototype.startquestion6 = function (answer) {
        var _this = this;
        console.log('Start question6');
        this.answers.push(this.starQuestion2.question + ': ' + answer);
        //console.log(this.answers);
        if (answer < 3) {
            var timeoutId1 = setTimeout(function () {
                _this.visualques6 = false;
            }, 1000);
            var timeoutId2 = setTimeout(function () {
                _this.fieldQuestion2.answerballoon = false;
            }, 2000);
        }
        else {
            var timeoutId1 = setTimeout(function () {
                _this.visualques7 = false;
            }, 1000);
            var timeoutId2 = setTimeout(function () {
                _this.flagQuestion2.answerballoon = false;
            }, 2000);
        }
    };
    /* Question7 - field (bad) */
    QuestionsComponent.prototype.startquestion7 = function (answer) {
        var _this = this;
        console.log('Start question7');
        this.answers.push(this.fieldQuestion2.question + ': ' + answer);
        var timeoutId1 = setTimeout(function () {
            _this.visualques7 = false;
        }, 1000);
        var timeoutId2 = setTimeout(function () {
            _this.flagQuestion2.answerballoon = false;
        }, 2000);
    };
    QuestionsComponent.prototype.startquestion8 = function (answer) {
        var _this = this;
        console.log('Start question8');
        this.answers.push(this.flagQuestion2.question + ': ' + answer);
        this.visualques8 = false;
        var timeoutId1 = setTimeout(function () {
            _this.radioQuestion2.answerballoon = false;
        }, 1000);
    };
    QuestionsComponent.prototype.startend = function (answer) {
        console.log('End questions');
        this.answers.push(this.radioQuestion2.question + ': ' + answer);
        console.log(this.answers);
        this.visualbye = false;
    };
    QuestionsComponent.prototype.end = function () {
        this.visualhello = true;
        this.visualques1 = true;
        this.visualques2 = true;
        this.visualques3 = true;
        this.visualques4 = true;
        this.visualques5 = true;
        this.visualques6 = true;
        this.visualques7 = true;
        this.visualques8 = true;
        this.visualbye = true;
    };
    __decorate([
        core_1.ViewChild(questionstypestar_component_1.QuestionsTypeStarComponent), 
        __metadata('design:type', questionstypestar_component_1.QuestionsTypeStarComponent)
    ], QuestionsComponent.prototype, "starQuestion1", void 0);
    __decorate([
        core_1.ViewChild(questionstypefield_component_1.QuestionsTypeFieldComponent), 
        __metadata('design:type', questionstypefield_component_1.QuestionsTypeFieldComponent)
    ], QuestionsComponent.prototype, "fieldQuestion1", void 0);
    __decorate([
        core_1.ViewChild(questionstypeflag_component_1.QuestionsTypeFlagComponent), 
        __metadata('design:type', questionstypeflag_component_1.QuestionsTypeFlagComponent)
    ], QuestionsComponent.prototype, "flagQuestion1", void 0);
    __decorate([
        core_1.ViewChild(questionstyperadio_component_1.QuestionsTypeRadioComponent), 
        __metadata('design:type', questionstyperadio_component_1.QuestionsTypeRadioComponent)
    ], QuestionsComponent.prototype, "radioQuestion1", void 0);
    __decorate([
        core_1.ViewChild(questionstypestar1_component_1.QuestionsTypeStarComponent1), 
        __metadata('design:type', questionstypestar1_component_1.QuestionsTypeStarComponent1)
    ], QuestionsComponent.prototype, "starQuestion2", void 0);
    __decorate([
        core_1.ViewChild(questionstypefield1_component_1.QuestionsTypeFieldComponent1), 
        __metadata('design:type', questionstypefield1_component_1.QuestionsTypeFieldComponent1)
    ], QuestionsComponent.prototype, "fieldQuestion2", void 0);
    __decorate([
        core_1.ViewChild(questionstypeflag1_component_1.QuestionsTypeFlagComponent1), 
        __metadata('design:type', questionstypeflag1_component_1.QuestionsTypeFlagComponent1)
    ], QuestionsComponent.prototype, "flagQuestion2", void 0);
    __decorate([
        core_1.ViewChild(questionstyperadio1_component_1.QuestionsTypeRadioComponent1), 
        __metadata('design:type', questionstyperadio1_component_1.QuestionsTypeRadioComponent1)
    ], QuestionsComponent.prototype, "radioQuestion2", void 0);
    QuestionsComponent = __decorate([
        core_1.Component({
            selector: 'questions',
            templateUrl: 'app/components/questionary/questions.component.html',
            styleUrls: ['app/components/questionary/questions.component.css'],
        }), 
        __metadata('design:paramtypes', [])
    ], QuestionsComponent);
    return QuestionsComponent;
}());
exports.QuestionsComponent = QuestionsComponent;
//# sourceMappingURL=questions.component.js.map