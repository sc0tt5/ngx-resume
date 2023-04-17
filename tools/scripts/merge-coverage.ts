const jsonConcat = require('json-concat');
const { sync } = require('glob');

class MergeCoverage {
  public static run(): void {
    const COVERAGE_DEST = './tmp/coverage/coverage-summary.json';
    const COVERAGE_FILES = './tmp/coverage/**/coverage-summary.json';
    const files = sync(COVERAGE_FILES);
    jsonConcat({ src: files, dest: COVERAGE_DEST }, () => null);
  }
}

MergeCoverage.run();
