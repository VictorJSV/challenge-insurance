import './Footer.scss';
import IconLn from '@src/assets/svgs/icon-ln.svg?react';
import IconInstagram from '@src/assets/svgs/icon-instagram.svg?react';
import IconFb from '@src/assets/svgs/icon-fb.svg?react';
import IconTw from '@src/assets/svgs/icon-tw.svg?react';

export const Footer = () => (
  <div className="c-footer">
    <div className="c-footer__left">
      <div>
        <p className="c-footer__contact-title">Need assistance?</p>
        <p className="c-footer__phone">Please Call 1-800-637-4757</p>
        <p className="c-footer__info-line--with-margin">
          <b>Fax</b> 1-866-463-3230
        </p>
        <p className="c-footer__info-line">
          <b>Claims</b> 1-800-237-2917
        </p>
      </div>
      <div>
        <hr className="c-footer__divider" />
        <ul className="c-footer__notice-list">
          <li className="c-footer__notice-item">
            <b>Coronavirus COVID-19 Information:</b>
            <p>To any of our customers currently facing a financial hardship, please contact us.</p>
          </li>
          <li>
            <b>NY policyholders:</b>
            <p>
              Please read this Notice regarding certain rights available to affected New York
              policyholders as a result of the COVID‑19 pandemic.
            </p>
          </li>
        </ul>
      </div>
    </div>
    <div className="c-footer__line" />
    <div className="c-footer__right">
      <hr className="c-footer__divider--mobile" />
      <div>
        Follow us
        <div className="c-footer__social-container">
          <a href="/">
            <IconLn />
          </a>
          <a href="/">
            <IconInstagram />
          </a>
          <a href="/">
            <IconFb />
          </a>
          <a href="/">
            <IconTw />
          </a>
        </div>
      </div>
      <div>
        <hr className="c-footer__divider--desktop" />
        <p>
          K&K Insurance Group, Inc. is a licensed insurance producer in all states
          <br /> (TX license #13924); <br />
          operating in CA, NY and MI as K&K Insurance Agency (CA License #0334819) FATCA Notice:
          Please click http://www.aon.com/FATCA to obtain the appropriate W-9.
          <br />
          K&K Insurance Group is a wholly owned subsidiary of Aon
        </p>
        <p className="c-footer__copyright">© 2009 K&K Insurance Group Inc.</p>
        <a className="c-footer__privacy-link" href="/">
          Privacy & Legal Notice
        </a>
      </div>
    </div>
  </div>
);
