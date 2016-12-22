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
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
require('rxjs/Rx');
var QuestionnaryService = (function () {
    function QuestionnaryService(http) {
        this.http = http;
        console.log('QuestionnaryService initializes...');
    }
    QuestionnaryService.prototype.getQuestionnary = function () {
        return this.http.get(QuestionnaryService.PATH + 'getSurvey/smk2')
            .map(function (res) { return res.json(); });
        //return this.http.get(QuestionnaryService.PATH + 'questionnary.json')
        //  .map((res: Response) => res.json());
    };
    //public static PATH:string = 'app/shared/';
    QuestionnaryService.PATH = 'https://panel-repatriation.rhcloud.com/surveyuser/';
    QuestionnaryService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], QuestionnaryService);
    return QuestionnaryService;
}());
exports.QuestionnaryService = QuestionnaryService;
//# sourceMappingURL=questions.service.js.map