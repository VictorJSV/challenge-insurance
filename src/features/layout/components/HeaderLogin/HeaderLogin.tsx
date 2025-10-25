import Button from '@src/shared/components/Button/Button';
import './HeaderLogin.scss';

export const HeaderLogin = () => {
  return (
    <div className="c-header-login">
      <div className="c-header-login__vignette"></div>
      <h2 className="c-header-login__title">Welcome</h2>
      <p className="c-header-login__description">
        First time here? You can register to save Quotes and Applications{' '}
      </p>
      <div className="c-header-login__buttons">
        <Button variant="filled" size='md'>Register</Button>
        <Button variant="outlined" size='md'>Login</Button>
      </div>
    </div>
  );
};
