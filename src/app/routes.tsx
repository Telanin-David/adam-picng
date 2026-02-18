import { createBrowserRouter, RouteObject } from "react-router";
import HomePage from "./pages/HomePage";
import WhoWeArePage from "./pages/WhoWeArePage";
import DepartmentsPage from "./pages/DepartmentsPage";
import NewsPage from "./pages/NewsPage";
import PartnersPage from "./pages/PartnersPage";
import ContactPage from "./pages/ContactPage";
import NewsletterPage from "./pages/NewsletterPage";
import TestimonialsPage from "./pages/TestimonialsPage";
import TeamPage from "./pages/TeamPage";
import MandatePage from "./pages/MandatePage";
import ProjectsPage from "./pages/ProjectsPage";
import ConversionCentersPage from "./pages/ConversionCentersPage";
import RootLayout from "./layouts/RootLayout";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "who-we-are",
        element: <WhoWeArePage />,
      },
      {
        path: "departments",
        element: <DepartmentsPage />,
      },
      {
        path: "news",
        element: <NewsPage />,
      },
      {
        path: "partners",
        element: <PartnersPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "newsletter",
        element: <NewsletterPage />,
      },
      {
        path: "testimonials",
        element: <TestimonialsPage />,
      },
      {
        path: "team",
        element: <TeamPage />,
      },
      {
        path: "mandate",
        element: <MandatePage />,
      },
      {
        path: "projects",
        element: <ProjectsPage />,
      },
      {
        path: "conversion-centers",
        element: <ConversionCentersPage />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);