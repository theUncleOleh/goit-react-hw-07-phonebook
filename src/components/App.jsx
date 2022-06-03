import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import Layout from './Layout/Layout';
import Loader from '../components/Loader/Loader';
// import PhoneBookPage from '../pages/PhoneBookPage';
// import SecondPage from '../pages/SecondPage';
// import NotFoundPage from '../pages/NotFoundPage';
const CreateContactPage = lazy(() => import('../pages/CreateContactPage.jsx'));
const ContactsListPage = lazy(() => import('../pages/ContactsListPage.jsx'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage.jsx'));
export default function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<ContactsListPage />} />
            <Route path="create" element={<CreateContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}
