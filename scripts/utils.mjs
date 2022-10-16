import chalk from 'chalk';

const NO_COMPILER_NAME = 'NO_COMPILER_NAME';

/**
 * Logs a message to the console with color information.
 *
 * @param {string} message message to display in the console.
 * @param {string} [level='info'] defines the color according the type of message.
 */
const logMessage = (message, level = 'info') => {
  // eslint-disable-next-line no-nested-ternary
  const color = level === 'error' ? 'red' : level === 'warning' ? 'yellow' : 'white';
  // eslint-disable-next-line no-console
  console.log(`[${new Date().toISOString()}]`, chalk[color](message));
};

/**
 * Validates webpacks compiler and add some hooks.
 * @type {import('webpack').Compiler}
 * @param {Compiler} compiler
 * @return {Promise<void>}
 */
const hookCompiler = async (compiler) => {
  if (!compiler.name) {
    throw new Error(`${NO_COMPILER_NAME}: make sure the Webpack compiler has a 'name' property`);
  }

  const { name } = compiler;

  /**
   * Called right after beforeCompile, before a new compilation is created.
   *
   * @see https://webpack.js.org/api/compiler-hooks/#compile
   */
  compiler.hooks.compile.tap(name, () => {
    logMessage(`[${name}] Compiling `);
  });

  /**
    * Executed when the compilation has completed
    *
    * @see https://webpack.js.org/api/compiler-hooks/#done
    */
  compiler.hooks.done.tap(name, (stats) => {
    if (!stats.hasErrors()) {
      return 'success';
    }

    throw new Error(`Failed to compile ${name}`);
  });
};

const checkPlatformForOpenCommand = () => {
  if (process.platform === 'darwin') {
    return 'open';
  }

  if (process.platform === 'win32') {
    return 'start';
  }

  return 'xdg-open';
};

export {
  checkPlatformForOpenCommand,
  hookCompiler,
  logMessage,
};
