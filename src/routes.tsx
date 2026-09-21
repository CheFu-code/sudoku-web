import { createBrowserRouter, Outlet } from 'react-router';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Cookies from './pages/Cookies';
import Download from './pages/Download';
import Play from './pages/Play';
import NotFound from './pages/NotFound';

function Root() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f5f0e8]">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'about', Component: About },
      { path: 'contact', Component: Contact },
      { path: 'faq', Component: FAQ },
      { path: 'privacy', Component: Privacy },
      { path: 'terms', Component: Terms },
      { path: 'cookies', Component: Cookies },
      { path: 'download', Component: Download },
      { path: 'play', Component: Play },
      { path: '*', Component: NotFound },
    ],
  },
]);
