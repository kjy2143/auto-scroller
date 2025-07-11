// dist/auto-scroller.min.js를 bookmarklet 코드로 변환
import fs from 'fs';
import path from 'path';

const distPath = path.resolve('dist', 'auto-scroller.min.js');
const outputPath = path.resolve('dist', 'bookmarklet.txt');

if (!fs.existsSync(distPath)) {
  console.error('빌드 파일이 존재하지 않습니다:', distPath);
  process.exit(1);
}

const code = fs.readFileSync(distPath, 'utf-8').trim();
// IIFE로 감싸고, javascript:로 시작, URI 인코딩
const bookmarklet = 'javascript:' + encodeURI(`(function(){${code}})();`);

fs.writeFileSync(outputPath, bookmarklet);
console.log('Bookmarklet 코드가 dist/bookmarklet.txt에 저장되었습니다.');
