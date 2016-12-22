"use strict";
var Answers = (function () {
    function Answers(allAnswers, answersSet) {
        this.allAnswers = allAnswers;
        this.answersSet = answersSet;
    }
    return Answers;
}());
exports.Answers = Answers;
var AnswersSet = (function () {
    function AnswersSet(id, idQuestion, idAnswers, textField) {
        this.id = id;
        this.idQuestion = idQuestion;
        this.idAnswers = idAnswers;
        this.textField = textField;
    }
    return AnswersSet;
}());
exports.AnswersSet = AnswersSet;
//# sourceMappingURL=answers.model.js.map