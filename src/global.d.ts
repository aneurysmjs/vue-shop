declare namespace NodeJS {
  /**
   * @desc augment existing NodeJS.Global type definition
   * @link https://stackoverflow.com/questions/40743131/how-to-prevent-property-does-not-exist-on-type-global-with-jsdom-and-t
   *
   * @desc Image for Global scope
   * @link https://stackoverflow.com/questions/25203906/typescript-new-image-from-global-scope
   */
  interface Global {
    Image: {
      prototype: HTMLImageElement;
    };
  }
}

declare interface NodeModule {
  hot: {
    accept(
      dependencies?: Array<string> | string,
      callback?: (updatedDependencies?: Array<string | number>) => void,
    ): void;
  };
}

declare module '*.bmp' {
  const src: string;
  export default src;
}

declare module '*.gif' {
  const src: string;
  export default src;
}

declare module '*.jpg' {
  const src: string;
  export default src;
}

declare module '*.jpeg' {
  const src: string;
  export default src;
}

declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.webp' {
  const src: string;
  export default src;
}

declare module '*.module.css' {
  const css: { [key: string]: string };
  export default css;
}

declare module '*.css';
