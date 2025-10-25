import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './features/layout/Layout';
import Container from './shared/components/Container/Container';
import { Home } from './features/Home/Home';

/* const Demo = React.lazy(() => import('./features/...')); */

const Loading = () => (
  <Container>
    <div className="c-general-msg">Cargando...</div>
  </Container>
);

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Layout>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="*" element={<>NOT FOUND</>} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
}
