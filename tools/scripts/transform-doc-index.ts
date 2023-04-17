import * as fs from 'fs';

class TransformDocIndex {
  private static docIndex: string;

  public static run(index = './tmp/documentation/index.html'): void {
    this.docIndex = index;
    const file = fs.readFile(this.docIndex, 'utf8', (err, data) => {
      if (err) {
        return console.log(err);
      }
      const result = data.replace(/apps\/resume-client\/src/gm, '');
      fs.writeFile(this.docIndex, result, 'utf8', err => err && console.log(err));
    });
  }
}

TransformDocIndex.run();
