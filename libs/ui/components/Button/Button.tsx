import React from 'react';

import classNames from 'classnames';

import { IButton } from '@/libs/types/button.type';
import Spinner from '@/libs/ui/components/Spinner/Spinner';

import { buttonClasses } from './Button.class';

interface RenderButtonChildrenProps {
  children: React.ReactNode;
  variant: IButton.Variant;
  isLoading?: boolean;
}

const RenderButtonChildren = ({ children, variant, isLoading }: RenderButtonChildrenProps) => {
  if (isLoading) return <Spinner variant={`${variant !== IButton.Variant.FILLED && 'outlined'}`} />;

  return children;
};

export const Button = ({
  children,
  ariaLabel,
  name,
  role = 'link',
  type = 'button',
  className,
  color = IButton.Color.PRIMARY,
  variant = IButton.Variant.FILLED,
  size = IButton.Size.NORMAL,
  pill,
  disabled,
  isLoading,
  onClick,
}: IButton.Props) => {
  const buttonClassName = classNames(
    buttonClasses.base,
    buttonClasses.config[color].base,
    buttonClasses.config[color][variant],
    buttonClasses.sizes[size],
    pill && buttonClasses.pill,
    disabled && buttonClasses.disabled,
    className,
  );

  if (type === 'submit') {
    return (
      <button disabled={disabled} name={name} aria-label={ariaLabel} type={type} onClick={onClick} className={buttonClassName}>
        {RenderButtonChildren({ children, variant, isLoading })}
      </button>
    );
  }

  return (
    <div role={role} className={buttonClassName} onClick={e => !disabled && onClick && onClick(e)}>
      {RenderButtonChildren({ children, variant, isLoading })}
    </div>
  );
};
