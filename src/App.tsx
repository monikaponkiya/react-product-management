import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import ProductDetail from './pages/product/productDetail';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ROUTES } from './utils/routes';
import ProductList from './pages/product/productList';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools/production';
import Layout from './common/Layout';

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="" element={<Layout />}>
              <Route path={ROUTES.default} element={<ProductList />} />
              <Route path={ROUTES.productList} element={<ProductList />} />
              <Route path={ROUTES.productDetail} element={<ProductDetail />} />
            </Route>
          </Routes>
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} position='bottom-left'/>
      </QueryClientProvider>
    </>
  );
}

export default App;
