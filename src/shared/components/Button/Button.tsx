import { forwardRef, PropsWithChildren } from 'react';
import './Button.scss';
import { classes } from '@src/shared/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'outlined' | 'filled' | 'text';
  size?: 'sm' | 'md' | 'xl';
}

const Button = forwardRef<PropsWithChildren<HTMLButtonElement>, ButtonProps>(
  ({ children, variant, size, className, ...props }, ref) => {
    return (
      <button
        className={classes(
          'c-button',
          variant && `c-button--variant-${variant}`,
          size && `c-button--size-${size}`,
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

export default Button;
