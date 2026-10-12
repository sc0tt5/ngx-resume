import { existsSync, readFileSync, writeFileSync } from 'fs';
import path from 'path';

const DB_EXAMPLE_JSON = 'db.example.json';
const DB_JSON = 'db.json';

export class PreBuild {
  public static run(): void {
    console.log('Running pre build...');

    const rootDir = this.getAppRootDir(DB_EXAMPLE_JSON);
    const databasePath = path.join(rootDir, DB_JSON);

    if (!existsSync(databasePath)) {
      writeFileSync(databasePath, readFileSync(path.join(rootDir, DB_EXAMPLE_JSON), 'utf8'));
      console.log('\ndb.json file created');
    }
  }

  private static getAppRootDir(fileToCheck: string): string {
    let currentDir = path.dirname(path.resolve(process.argv[1]));

    while (!existsSync(path.join(currentDir, fileToCheck))) {
      currentDir = path.join(currentDir, '..');
    }
    return currentDir;
  }
}

PreBuild.run();
