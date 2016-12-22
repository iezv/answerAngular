"use strict";
var Questionnary = (function () {
    function Questionnary(id, title, questions) {
        this.id = id;
        this.title = title;
        this.questions = questions;
    }
    return Questionnary;
}());
exports.Questionnary = Questionnary;
var Question = (function () {
    function Question(id, title, answers) {
        this.id = id;
        this.title = title;
        this.answers = answers;
    }
    return Question;
}());
exports.Question = Question;
var Answer = (function () {
    function Answer(id, title, nextQuestionIndex, questionType) {
        this.id = id;
        this.nextQuestionIndex = nextQuestionIndex;
        this.title = title;
        this.questionType = questionType;
    }
    return Answer;
}());
exports.Answer = Answer;
//# sourceMappingURL=questionnary.model.js.map