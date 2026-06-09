import {
  createBrowserHistory,
  createRouter,
  createRootRoute,
  Route,
  RouterProvider,
} from '@tanstack/react-router'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import HomePage from './pages/HomePage'

const rootRoute = createRootRoute()

const loginRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: LoginPage,
})

const signupRoute = new Route({
  getParentRoute: () => rootRoute,
  path: 'signup',
  component: SignupPage,
})

const homeRoute = new Route({
  getParentRoute: () => rootRoute,
  path: 'home',
  component: HomePage,
})

const routeTree = rootRoute.addChildren([loginRoute, signupRoute, homeRoute])

const router = createRouter({
  routeTree,
  history: createBrowserHistory(),
})

export default function AppRouter() {
  return <RouterProvider router={router} />
}
