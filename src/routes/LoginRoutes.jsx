import { lazy } from 'react';

// project imports
import MinimalLayout from 'layout/MinimalLayout';
import NavMotion from 'layout/NavMotion';
import Loadable from 'ui-component/Loadable';

// login routing
const AuthLogin = Loadable(lazy(() => import('views/pages/authentication/Login')));
const AuthRegister = Loadable(lazy(() => import('views/pages/authentication/Register')));
const AuthForgotPassword = Loadable(lazy(() => import('views/pages/authentication/ForgotPassword')));
const AuthCheckMail = Loadable(lazy(() => import('views/pages/authentication/CheckMail')));
const AuthResetPassword = Loadable(lazy(()=> import('views/pages/authentication/ResetPassword')))

// ==============================|| AUTH ROUTING ||============================== //

const LoginRoutes = {
    path: '/',
    element: (
        <NavMotion>
                <MinimalLayout />
        </NavMotion>
    ),
    children: [
        {
            path: '/',
            element: <AuthLogin />
        },
        {
            path: '/login',
            element: <AuthLogin />
        },
        {
            path: '/register',
            element: <AuthRegister />
        },
        {
            path: '/forgot',
            element: <AuthForgotPassword />
        },
        {
            path: '/check-mail',
            element: <AuthCheckMail />
        },
        {
            path: '/password-reset',
            element: <AuthResetPassword />
        }
    ]
};

export default LoginRoutes;
