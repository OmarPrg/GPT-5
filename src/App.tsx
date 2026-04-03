import { Suspense, lazy } from 'react';
import { Navbar, Loading, ScrollToTop } from './components';
import './app.css';

const Header = lazy(() => import('./components/header/Header'));
const Brand = lazy(() => import('./components/brand/Brand'));
const Whatgpt = lazy(() => import('./components/whatgpt/Whatgpt'));
const Future = lazy(() => import('./components/future/Future'));
const GetStart = lazy(() => import('./components/getstart/GetStart'));
const Blog = lazy(() => import('./components/blog/Blog'));
const Footer = lazy(() => import('./components/footer/Footer'));

const App = () => {
    return (
        <div className="App">
            <Suspense fallback={<Loading />}>
                <div className='Gradient__bg' style={{ paddingTop: '55px' }}>
                    <Navbar />
                    <Header />
                </div>
                <Brand />
                <Whatgpt />
                <Future />
                <GetStart />
                <Blog />
                <Footer />
                <ScrollToTop />
            </Suspense>
        </div>
    );
};

export default App;