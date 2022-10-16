import path from 'node:path';
import fs from 'node:fs';

const appDirectory = fs.realpathSync(process.cwd());

const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

const paths = {
  src: resolveApp('src'),
  dist: resolveApp('dist'),
  indexHTML: resolveApp('src/index.html'),
};

paths.resolveModules = [paths.src, 'node_modules'];

export default paths;
