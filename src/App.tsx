import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './features/layout/Layout';
import Container from './shared/components/Container/Container';

/* const Plans = React.lazy(() => import('./features/plans/Plans')); */

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
            {/* <Route path="/" element={<Quote />} /> */}
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
}
