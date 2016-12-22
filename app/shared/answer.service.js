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
require('rxjs/add/operator/toPromise');
var AnswerService = (function () {
    function AnswerService(http) {
        this.http = http;
        this.apiUrl_quest = 'https://panel-repatriation.rhcloud.com/surveyuser/';
        this.apiUrl_answer = 'api/sendExecutedSurvey';
        console.log('AnswerService initializes...');
    }
    AnswerService.prototype.addAnswers = function (answers) {
        console.log('Add answers to server:');
        //   console.log(answers);
        return this.post(answers);
    };
    AnswerService.prototype.getQuestionnary = function () {
        return this.http.get(this.apiUrl_quest + 'getSurvey/smk2')
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    AnswerService.prototype.post = function (answers) {
        var body = JSON.stringify(answers);
        console.log(body);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.apiUrl_answer, body, options)
            .toPromise()
            .then(function (res) { return answers; })
            .catch(this.handleError);
    };
    AnswerService.prototype.handleError = function (error) {
        console.log('ERROR', error);
        return Promise.reject(error.message || error);
    };
    AnswerService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AnswerService);
    return AnswerService;
}());
exports.AnswerService = AnswerService;
//# sourceMappingURL=answer.service.js.map