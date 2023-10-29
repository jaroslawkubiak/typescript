"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { CvsFileReader } from "./CsvFileReader";
const MatchReader_1 = require("./MatchReader");
const Summary_1 = require("./Summary");
const ConsoleReport_1 = require("./reportTargets/ConsoleReport");
const WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
// import { HtmlReport } from "./reportTargets/HtmlReport";
// // Create an object that satisfies the 'DataReader' interface
// const csvFileReader = new CvsFileReader("football.csv");
// // Create an instance of MatchReader and pass in something satisfying the 'DataReader' interface
// const matchReader = new MatchReader(csvFileReader);
// matchReader.load();
const matchReader = MatchReader_1.MatchReader.fromCsv("football.csv");
matchReader.load();
// one way to do this
const summary = new Summary_1.Summary(new WinsAnalysis_1.WinsAnalysis("Brighton"), new ConsoleReport_1.ConsoleReport());
summary.buildAndPrintReport(matchReader.matches);
// second way - using static method
const nextSummary = Summary_1.Summary.winsAnalysisWithHtmlReport("Cardiff", "raport2.html");
nextSummary.buildAndPrintReport(matchReader.matches);
