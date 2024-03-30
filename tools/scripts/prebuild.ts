import { copyFile, existsSync } from 'fs';
import path from 'path';

const DB_EXAMPLE_JSON = 'db.example.json';
const DB_JSON = 'db.json';

export class PreBuild {
  public static run(): void {
    console.log('Running pre build...');

    const rootDir = this.getAppRootDir(DB_EXAMPLE_JSON);

    !existsSync(DB_JSON) &&
      copyFile(
        `${rootDir}/${DB_EXAMPLE_JSON}`,
        `${rootDir}/${DB_JSON}`,
        err => (err && console.log('Error Found:', err)) || console.log('\ndb.json file created')
      );
  }

  private static getAppRootDir(fileToCheck: string) {
    let currentDir = __dirname;

    while (!existsSync(path.join(currentDir, fileToCheck))) {
      currentDir = path.join(currentDir, '..');
    }
    return currentDir;
  }
}

PreBuild.run();
