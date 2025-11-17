import React, { useEffect, lazy, Suspense, useState } from 'react';
import { createHashRouter, RouterProvider, Outlet, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { useLocalization } from './hooks/useLocalization';
import { ReportAdProvider } from './hooks/useReportAd';
import ReportAdModal from './components/ReportAdModal';
import ScrollToTopButton from './components/ScrollToTopButton';
import MarqueeBanner from './components/MarqueeBanner';
import AuthModal from './components/AuthModal';
import NotificationPermissionModal from './components/NotificationPermissionModal';
import { useAuth } from './hooks/useAuth';
import { getTopSearchTopic } from './services/api';
import Toast from './components/Toast';
import { GuestbookProvider } from './hooks/useGuestbook';

// Lazy load page components for faster initial load
const HomePage = lazy(() => import('./pages/HomePage'));
const CategoryPage = lazy(() => import('./pages/CategoryPage'));
const SougnaEuropePage = lazy(() => import('./pages/SougnaEuropePage'));
const HelpPage = lazy(() => import('./pages/HelpPage'));
const ProfilePage = lazy(() => import('./pages/ProfilePage'));
const MyAdsPage = lazy(() => import('./pages/MyAdsPage'));
const ListingDetailsPage = lazy(() => import('./pages/ListingDetailsPage'));
const PostAdPage = lazy(() => import('./pages/PostAdPage'));
const PostAdFormPage = lazy(() => import('./pages/PostAdFormPage'));
const FavoritesPage = lazy(() => import('./pages/FavoritesPage'));
const PostAdSuccessPage = lazy(() => import('./pages/PostAdSuccessPage'));
const SavedSearchesPage = lazy(() => import('./pages/SavedSearchesPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));


// A loading indicator for Suspense fallback
const LoadingSpinner: React.FC = () => (
    <div className="flex justify-center items-center py-20">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
    </div>
);


// This component ensures that the page scrolls to the top on every navigation change.
const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};


// The main layout component that includes shared elements like Header and Footer.
const Layout: React.FC = () => {
    const { language } = useLocalization();

    return (
        <div className={`min-h-screen flex flex-col font-sans ${language === 'ar' ? 'font-cairo' : 'font-nunito'}`}>
            <Header />
            <MarqueeBanner />
            <ScrollToTop />
            <main className="flex-grow pt-16">
                <Suspense fallback={<LoadingSpinner />}>
                    <Outlet /> {/* Child routes will be rendered here */}
                </Suspense>
            </main>
            <Footer />
            <ReportAdModal />
            <ScrollToTopButton />
        </div>
    );
};

// Define the application's routes using the modern react-router-dom API.
const router = createHashRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { index: true, element: <HomePage /> },
            { path: 'category/:categorySlug', element: <CategoryPage /> },
            { path: 'sougna-europe', element: <SougnaEuropePage /> },
            { path: 'listing/:listingId', element: <ListingDetailsPage /> },
            { path: 'post-ad', element: <PostAdPage /> },
            { path: 'post-ad/:categorySlug', element: <PostAdFormPage /> },
            { path: 'post-ad/success', element: <PostAdSuccessPage /> },
            { path: 'help', element: <HelpPage /> },
            { path: 'profile', element: <ProfilePage /> },
            { path: 'myAds', element: <MyAdsPage /> },
            { path: 'favorites', element: <FavoritesPage /> },
            { path: 'saved-searches', element: <SavedSearchesPage /> },
            { path: 'privacy', element: <PrivacyPage /> },
            { path: 'terms', element: <TermsPage /> },
            { path: 'about', element: <AboutPage /> },
            { path: '*', element: <NotFoundPage /> }
        ]
    }
]);

// The root App component now provides the router and context providers.
const App: React.FC = () => {
    const { t } = useLocalization();
    const { isLoggedIn, isAuthModalOpen, closeAuthModal, login } = useAuth();
    const [isNotificationModalOpen, setIsNotificationModalOpen] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');

    const handleLoginSuccess = () => {
        login();
        closeAuthModal();
        // Check if we should show the notification prompt
        const promptShown = localStorage.getItem('notificationPromptShown');
        if (!promptShown) {
            setIsNotificationModalOpen(true);
        }
    };

    const handleNotificationConfirm = () => {
        localStorage.setItem('notificationPreference', 'true');
        localStorage.setItem('notificationPromptShown', 'true');
        const topTopic = getTopSearchTopic();
        if (topTopic) {
            localStorage.setItem('notificationTopics', JSON.stringify([topTopic]));
        }
        setToastMessage(t('notificationsEnabledToast'));
        setShowToast(true);
        setIsNotificationModalOpen(false);
    };

    const handleNotificationDecline = () => {
        localStorage.setItem('notificationPreference', 'false');
        localStorage.setItem('notificationPromptShown', 'true');
        setIsNotificationModalOpen(false);
    };

    return (
        <ReportAdProvider>
            <RouterProvider router={router} />
            <AuthModal isOpen={isAuthModalOpen} onClose={closeAuthModal} onLoginSuccess={handleLoginSuccess} />
            <NotificationPermissionModal
                isOpen={isNotificationModalOpen}
                onConfirm={handleNotificationConfirm}
                onDecline={handleNotificationDecline}
            />
            <Toast
                message={toastMessage}
                show={showToast}
                onClose={() => setShowToast(false)}
            />
        </ReportAdProvider>
    );
};

export default App;