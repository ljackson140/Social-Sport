import {
  createBrowserHistory,
  createRouter,
  createRootRoute,
  createRoute,
  RouterProvider,
} from '@tanstack/react-router'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import HomePage from './pages/HomePage'

const rootRoute = createRootRoute()

// "/" lands on the login page; "/login" is an explicit alias so nav links
// have a stable, self-describing target.
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: LoginPage,
})

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'login',
  component: LoginPage,
})

const signupRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'signup',
  component: SignupPage,
})

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'home',
  component: HomePage,
})

const routeTree = rootRoute.addChildren([
  indexRoute,
  loginRoute,
  signupRoute,
  homeRoute,
])

const router = createRouter({
  routeTree,
  history: createBrowserHistory(),
})

// Register the router instance for type-safe `to` props and navigation.
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

export default function AppRouter() {
  return <RouterProvider router={router} />
}
