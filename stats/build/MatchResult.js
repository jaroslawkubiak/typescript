"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchResult = void 0;
// typescritp approach - enum - enumeration. enum stores very closely related values
// enum to sygnał dla innych inżynierów, że zawiera on ściśle powiązane wartości
// enum tworzy także TYP
var MatchResult;
(function (MatchResult) {
    MatchResult["HomeWin"] = "H";
    MatchResult["AwayWin"] = "A";
    MatchResult["Draw"] = "D";
})(MatchResult || (exports.MatchResult = MatchResult = {}));
