import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

import ProtectedRoute from "../components/auth/ProtectedRoute";
import LayoutPage from "../pages/Layout";
import HomePage from "../pages";
import AboutPage from "../pages/About";
import ContentPage from "../pages/Content";
import ContributePage from "../pages/Contribute";
import LoginPage from "../pages/Login";
import LayoutLearnPage from "../pages/Learn/Layout";
import QuickStartPage from "../pages/Learn";
import ThinkingInReactPage from "../pages/Learn/ThinkingInReact";
import InstallationPage from "../pages/Learn/Installation";
import ErrorRouteHandler from "../components/errors/ErrorRouteHandler";
import PageNotFound from "../pages/PageNotFound";
const isLoggedIn = true;
const userData: { email: string } | null = isLoggedIn ? { email: "email@gmail.com" } : null;
const router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route path="/" element={<LayoutPage />} errorElement={<ErrorRouteHandler />}>
      <Route index element={<HomePage />} errorElement={<ErrorRouteHandler />} />
      <Route path="/about" element={<AboutPage />} errorElement={<ErrorRouteHandler />} />
      <Route path="/contact" element={<ContentPage />} errorElement={<ErrorRouteHandler />} />
      <Route path="/contribute" element={<ProtectedRoute isAllowed={isLoggedIn} redirectPath={"/login"} data={userData}><ContributePage /></ProtectedRoute>} errorElement={<ErrorRouteHandler />} />
      <Route path="/login" element={<ProtectedRoute isAllowed={!isLoggedIn} redirectPath={"/contribute"} data={userData}><LoginPage /></ProtectedRoute>} errorElement={<ErrorRouteHandler />} />
    </Route>
    <Route path="/learn" element={<LayoutLearnPage />}>
      <Route index element={<QuickStartPage />} />
      <Route path="thinking-in-react" element={<ThinkingInReactPage />} />
      <Route path="installation" element={<InstallationPage />} />
    </Route>
    {/* Page Not Found */}
    <Route path="*" element={<PageNotFound/>}/>
  </>
));

export default router;