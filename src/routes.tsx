import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/Error";
import RootLayout from "./pages/RootLayout";
import HomePage from "@/pages/Home";
import ContactPage from "@/pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage/>,
    children: [
      { index: true, element: <HomePage /> },
      { path: "contact", element: <ContactPage /> },
    ],
  },
]);
