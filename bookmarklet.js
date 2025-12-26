import { readFileSync, writeFileSync, existsSync } from 'fs';
import { resolve } from 'path';

const DIST_PATH = resolve('dist', 'auto-scroller.min.js');
const OUTPUT_PATH = resolve('dist', 'bookmarklet.txt');

if (!existsSync(DIST_PATH)) {
  console.error(`빌드 파일 없음: ${DIST_PATH}`);
  process.exit(1);
}

const code = readFileSync(DIST_PATH, 'utf-8').trim();
const bookmarklet = `javascript:${encodeURIComponent(`(function(){${code}})();`)}`;

writeFileSync(OUTPUT_PATH, bookmarklet);
console.log(`Bookmarklet 생성 완료: ${OUTPUT_PATH} (${bookmarklet.length} bytes)`);
