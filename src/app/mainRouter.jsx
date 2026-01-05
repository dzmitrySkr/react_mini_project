import { createBrowserRouter, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import MainBody from '../components/MainBody/MainBody';
import LoadingComponent from '../components/Loading/LoadingComponent';

const Dashboard = lazy(() => import('../components/Dashboard/Dashboard'));
const Reports = lazy(() => import('../components/Reports/Reports'));
const Transactions = lazy(() => import('../components/Transactions/Transactions'));

const Products = lazy(() => import('../components/Dashboard/DashboardComponents/Products/Products'));
const Deposite = lazy(() => import('../components/Dashboard/DashboardComponents/Deposite/Deposite'));
const Withdraw = lazy(() => import('../components/Dashboard/DashboardComponents/Withdraw/Withdraw'));

const lazyLoading = (Component) => (
    <Suspense fallback={<LoadingComponent />}>
        <Component />
    </Suspense>
);

export const mainRouters = createBrowserRouter([
    {
        path: '/',
        element: <MainBody />,
        children: [
            {
                index: true,
                element: <Navigate to="/dashboard" replace />,
            },
            {
                path: 'reports',
                element: lazyLoading(Reports),
            },
            {
                path: 'transactions',
                element: lazyLoading(Transactions),
            },

            {
                path: 'dashboard',
                element: <Dashboard />,
                children: [
                    {
                        index: true,
                        element: <Navigate to="products" replace />,
                    },
                    {
                        path: 'products',
                        element: lazyLoading(Products),
                    },
                    {
                        path: 'deposite',
                        element: lazyLoading(Deposite),
                    },
                    {
                        path: 'withdraw',
                        element: lazyLoading(Withdraw),
                    },
                ],
            },

            {
                path: '*',
                element: <Navigate to="/" replace />,
            },
        ],
    },
]);