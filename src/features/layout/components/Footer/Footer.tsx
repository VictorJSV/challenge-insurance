import './Footer.scss';
import IconLn from '@src/assets/svgs/icon-ln.svg?react';
import IconInstagram from '@src/assets/svgs/icon-instagram.svg?react';
import IconFb from '@src/assets/svgs/icon-fb.svg?react';
import IconTw from '@src/assets/svgs/icon-tw.svg?react';

export const Footer = () => (
  <div className="c-footer py-[18px] text-white flex flex-col md:flex-row md:h-[457px] md:pt-6 mb-[56px]">
    <div className="md:max-w-[370px] mr-[55px] relative md:pt-[38px] md:ml-[96px]">
      <div>
        <p className="font-semibold	text-lg	pt-2 md:text-sm">Need assistance?</p>
        <p className="text-base	pt-2 md:pt-[15px] md:text-2xl">Please Call 1-800-637-4757</p>
        <p className="leading-[182%] text-base md:pt-1">
          <b>Fax</b> 1-866-463-3230
        </p>
        <p className="leading-[182%] text-base">
          <b>Claims</b> 1-800-237-2917
        </p>
      </div>
      <div>
        <hr className="my-[13px] md:mt-[23px] mb-[26px]" />
        <ul className="text-xs md:text-sm">
          <li className="pb-4">
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
    <div className="w-[1px] h-[320px] bg-white hidden md:block" />
    <div className="relative md:ml-[34px] md:pt-[38px]">
      <hr className="my-[13px] md:hidden" />
      <div>
        Follow us
        <div className="flex gap-2 mt-2">
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
        <hr className="my-[13px] md:max-w-[303px] md:mt-[55.59px] md:mb-7" />
        <p>
          K&K Insurance Group, Inc. is a licensed insurance producer in all states
          <br /> (TX license #13924); <br />
          operating in CA, NY and MI as K&K Insurance Agency (CA License #0334819) FATCA Notice:
          Please click http://www.aon.com/FATCA to obtain the appropriate W-9.
          <br />
          K&K Insurance Group is a wholly owned subsidiary of Aon
        </p>
        <p className="mt-2 md:mt-5">© 2009 K&K Insurance Group Inc.</p>
        <a className="pt-[31px] md:pt-4 block underline" href="/">
          Privacy & Legal Notice
        </a>
      </div>
    </div>
  </div>
);
