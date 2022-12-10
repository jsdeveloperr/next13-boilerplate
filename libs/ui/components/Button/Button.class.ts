import { IButton } from '@/libs/types/button.type';

export const buttonClasses: IButton.Class = {
  base: 'flex items-center cursor-pointer focus:outline-none transition ease-in-out duration-300 disabled:cursor-not-allowed',
  disabled: 'cursor-not-allowed',
  pill: 'rounded-full',
  sizes: {
    small: 'h-10 text-xs',
    normal: 'h-12 text-sm',
    large: 'h-14 text-base',
  },
  config: {
    primary: {
      base: 'rounded-lg focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 font-bold',
      filled:
        'justify-center bg-purple-700 hover:bg-purple-800 text-white focus:ring-purple-500 disabled:bg-purple-200 disabled:text-purple-400',
      outlined:
        'justify-center border border-purple-700 text-purple-700 hover:bg-purple-800 hover:text-white disabled:bg-purple-200 disabled:text-purple-400 disabled:border-purple-200',
      text: 'h-auto text-purple-700 hover:text-purple-800 disabled:text-purple-400 focus:ring-0',
    },
    secondary: {
      base: 'rounded-lg focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 font-bold',
      filled:
        'justify-center border border-purple-700 text-purple-700 bg-purple-100 hover:bg-purple-300 hover:text-purple-800 disabled:bg-white disabled:border-purple-200 disabled:text-purple-400',
      outlined:
        'justify-center border border-purple-700 text-purple-700 bg-white hover:bg-purple-300 hover:text-purple-800 disabled:bg-white disabled:border-purple-200 disabled:text-purple-400',
      text: 'h-auto text-purple-700 hover:text-purple-800 disabled:text-purple-400 focus:ring-0',
    },
  },
};
