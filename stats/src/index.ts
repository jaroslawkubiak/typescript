// import { CvsFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
// import { HtmlReport } from "./reportTargets/HtmlReport";

// // Create an object that satisfies the 'DataReader' interface
// const csvFileReader = new CvsFileReader("football.csv");

// // Create an instance of MatchReader and pass in something satisfying the 'DataReader' interface
// const matchReader = new MatchReader(csvFileReader);
// matchReader.load();

const matchReader = MatchReader.fromCsv("football.csv");
matchReader.load();

// one way to do this
const summary = new Summary(new WinsAnalysis("Brighton"), new ConsoleReport());
summary.buildAndPrintReport(matchReader.matches);

// second way - using static method
const nextSummary = Summary.winsAnalysisWithHtmlReport("Cardiff", "raport2.html");
nextSummary.buildAndPrintReport(matchReader.matches);
