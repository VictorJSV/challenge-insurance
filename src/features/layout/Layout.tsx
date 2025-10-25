import React, { PropsWithChildren } from 'react';
import './Layout.scss';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import Container from '@src/shared/components/Container/Container';
import IconHome from '@src/assets/svgs/icon-home.svg?react';
import IconBlocks from '@src/assets/svgs/icon-blocks.svg?react';
import IconFileEdit from '@src/assets/svgs/icon-file-edit.svg?react';
import IconInfo from '@src/assets/svgs/icon-info.svg?react';
import IconPhoneContact from '@src/assets/svgs/icon-phone-contact.svg?react';

const Layout: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const listMenu = [
    { pathName: '/', text: 'Home', icon: <IconHome /> },
    { pathName: '/', text: 'Categories', subMenu: true, icon: <IconBlocks /> },
    { pathName: '/', text: 'Claims', icon: <IconFileEdit /> },
    { pathName: '/', text: 'About', icon: <IconInfo /> },
    { pathName: '/', text: 'Contact', icon: <IconPhoneContact /> },
  ]

  return (
  <div className="c-layout">
    <header className="c-layout__header">
      <Container>
        <Header listMenu={listMenu} />
      </Container>
    </header>
    <main className="c-layout__main">{children}</main>
    <footer className="c-layout__footer">
      <Container>
        <Footer />
      </Container>
    </footer>
  </div>
)
};

export default Layout;

