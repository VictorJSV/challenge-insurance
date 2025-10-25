import { forwardRef, PropsWithChildren } from 'react';
import './Button.scss';
import { classes } from '@src/shared/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'outlined' | 'filled' | 'text';
  size?: 'sm' | 'md' | 'xl';
  inverse?: boolean
}

const Button = forwardRef<PropsWithChildren<HTMLButtonElement>, ButtonProps>(
  ({ children, variant, size, className, inverse, ...props }, ref) => {
    return (
      <button
        className={classes(
          'c-button',
          variant && `c-button--variant-${variant}`,
          size && `c-button--size-${size}`,
          inverse && `c-button--inverse`,
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
