import { exec } from 'child_process';
const jsonConcat = require('json-concat');
const { sync } = require('glob');

class MergeCoverage {
  public static run(): void {
    // compodoc coverage
    const COVERAGE_DEST = './tmp/coverage/coverage-summary.json';
    const COVERAGE_FILES = './tmp/coverage/**/coverage-summary.json';
    const files = sync(COVERAGE_FILES);
    jsonConcat({ src: files, dest: COVERAGE_DEST }, () => null);

    // sonarcloud coverage
    const LCOV_DEST = './tmp/coverage/lcov.info';
    const LCOV_FILES = './tmp/coverage/**/lcov.info';
    exec(`lcov-result-merger "${LCOV_FILES}" "${LCOV_DEST}"`);
  }
}

MergeCoverage.run();
