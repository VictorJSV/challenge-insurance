import { forwardRef } from 'react';
import './Input.scss';
import { classes } from '@src/shared/utils';

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'className'> {
  type?: 'text' | 'number';
  variant?: 'default' | 'outlined';
  label?: string;
  isError?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type = 'text', label, isError, variant = 'default', ...props }, ref) => {
    return (
      <label
        className={classes('c-input', variant && `c-input--variant-${variant}`)}
        htmlFor={props.id || props.name}
      >
        {label && (
          <span className="c-input__label">
            {label}
            {props.required && <span aria-hidden="true"> *</span>}
          </span>
        )}
        <input
          className="c-input__field"
          ref={ref}
          type={type}
          aria-invalid={isError}
          id={props.id || props.name}
          {...props}
        />
      </label>
    );
  }
);

export default Input;
