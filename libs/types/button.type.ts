import React from 'react';

export namespace IButton {
  export enum Color {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
  }

  export enum Variant {
    FILLED = 'filled',
    OUTLINED = 'outlined',
    TEXT = 'text',
  }

  export enum Size {
    SMALL = 'small',
    NORMAL = 'normal',
    LARGE = 'large',
  }
  export type ButtonVariant = {
    base: string;
    filled: string;
    outlined: string;
    text: string;
  };

  export type Class = {
    base: string;
    disabled: string;
    pill: string;
    sizes: {
      small: string;
      normal: string;
      large: string;
    };
    config: {
      primary: ButtonVariant;
      secondary: ButtonVariant;
    };
  };
  export interface Props {
    children: React.ReactNode;
    color?: IButton.Color;
    variant?: IButton.Variant;
    size?: IButton.Size;
    pill?: boolean;
    disabled?: boolean;
    className?: string;
    type?: 'button' | 'submit' | 'reset' | undefined;
    role?: string;
    ariaLabel?: string;
    name?: string;
    isLoading?: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLDivElement>;
  }
}
