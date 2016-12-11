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
var QuestionsTypeStarComponent = (function () {
    function QuestionsTypeStarComponent() {
        this.onStart = new core_1.EventEmitter();
        this.answerballoon = true;
        this.tick = true;
        this.writer = true;
        this.pushstar2 = false;
        this.pushstar3 = false;
        this.pushstar4 = false;
        this.pushstar5 = false;
    }
    QuestionsTypeStarComponent.prototype.construrtor = function () {
    };
    QuestionsTypeStarComponent.prototype.pushstar = function (raiting) {
        var _this = this;
        if (raiting == 2) {
            this.pushstar2 = true;
        }
        else if (raiting == 3) {
            this.pushstar2 = true;
            this.pushstar3 = true;
        }
        else if (raiting == 4) {
            this.pushstar2 = true;
            this.pushstar3 = true;
            this.pushstar4 = true;
        }
        else if (raiting == 5) {
            this.pushstar2 = true;
            this.pushstar3 = true;
            this.pushstar4 = true;
            this.pushstar5 = true;
        }
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
            _this.onStart.emit(raiting);
        }, 3000);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], QuestionsTypeStarComponent.prototype, "question", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], QuestionsTypeStarComponent.prototype, "onStart", void 0);
    QuestionsTypeStarComponent = __decorate([
        core_1.Component({
            selector: 'questions-star',
            templateUrl: 'app/components/questionary/questions/questionstypestar.component.html',
            styleUrls: ['app/components/questionary/questions.component.css'],
        }), 
        __metadata('design:paramtypes', [])
    ], QuestionsTypeStarComponent);
    return QuestionsTypeStarComponent;
}());
exports.QuestionsTypeStarComponent = QuestionsTypeStarComponent;
//# sourceMappingURL=questionstypestar.component.js.map