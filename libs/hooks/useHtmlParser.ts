import parse, { HTMLReactParserOptions, domToReact, attributesToProps } from 'html-react-parser';

const useHtmlParser = (options = {} as HTMLReactParserOptions) => {
  const defaultOptions: HTMLReactParserOptions = {
    trim: true,
    ...options,
  };

  return {
    parse,
    domToReact,
    attributesToProps,
    options: defaultOptions,
  };
};

export default useHtmlParser;
