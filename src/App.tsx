import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/layout/Layout';
import WhatsAppWidget from './components/ui/WhatsAppWidget';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const RealEstatePage = lazy(() => import('./pages/RealEstatePage'));
const ConstructionPage = lazy(() => import('./pages/ConstructionPage'));
const InteriorDesignPage = lazy(() => import('./pages/InteriorDesignPage'));
const LoansPage = lazy(() => import('./pages/LoansPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div
          className="w-10 h-10 rounded-full border-3 border-t-[var(--color-primary)] border-neutral-200 animate-spin"
        />
        <span className="text-sm text-neutral-400 font-medium">Loading...</span>
      </div>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<PageLoader />}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: 'about',
        element: (
          <Suspense fallback={<PageLoader />}>
            <AboutPage />
          </Suspense>
        ),
      },
      {
        path: 'services',
        element: (
          <Suspense fallback={<PageLoader />}>
            <ServicesPage />
          </Suspense>
        ),
      },
      {
        path: 'services/real-estate',
        element: (
          <Suspense fallback={<PageLoader />}>
            <RealEstatePage />
          </Suspense>
        ),
      },
      {
        path: 'services/construction',
        element: (
          <Suspense fallback={<PageLoader />}>
            <ConstructionPage />
          </Suspense>
        ),
      },
      {
        path: 'services/interior-design',
        element: (
          <Suspense fallback={<PageLoader />}>
            <InteriorDesignPage />
          </Suspense>
        ),
      },
      {
        path: 'services/loans',
        element: (
          <Suspense fallback={<PageLoader />}>
            <LoansPage />
          </Suspense>
        ),
      },
      {
        path: 'contact',
        element: (
          <Suspense fallback={<PageLoader />}>
            <ContactPage />
          </Suspense>
        ),
      },
    ],
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
      <WhatsAppWidget />
    </>
  );
}
