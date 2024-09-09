import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

//CSS
import "./App.scss";

// Utils
import ScrollToTop from "./Utils/ScrollToTop";

//Pages
import Home from "./Pages/User/Home/Home";
import Fallback from "./Components/Fallback/Fallback";
import Error from "./Components/Error/Error";

// Layouts
import UserLayout from "./Layouts/User/UserLayout";
import AdminLayout from "./Layouts/Admin/AdminLayout";
import Wrapper from "./Components/Admin/Wrapper/Wrapper";

// User Routes
import {
  About,
  Theaters,
  Theater,
  Refund,
  PrivacyPolicy,
} from "./PagesImport/UserPagesImport";

//Admin Routes
import {
  Login,
  TodaysBooking,
  Message,
  Payments,
  AdminTheaters,
  Cake,
  Decoration,
  Addon,
  MobileScreen,
} from "./PagesImport/AdminPagesImport";

//Protected Routes
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";

// Routes Data
const userRoutesData = [
  {
    path: "*",
    element: <Error />,
  },
  {
    path: "/theaters",
    element: <Theaters />,
  },
  {
    path: "/theater/:id",
    element: <Theater />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/refund",
    element: <Refund />,
  },
  {
    path: "/privacy-policy",
    element: <PrivacyPolicy />,
  },
];
const adminRoutesData = [
  {
    path: "bookings",
    element: (
      <ProtectedRoute>
        <TodaysBooking />
      </ProtectedRoute>
    ),
  },
  {
    path: "messages",
    element: (
      <ProtectedRoute>
        <Message />
      </ProtectedRoute>
    ),
  },
  {
    path: "payments",
    element: (
      <ProtectedRoute>
        <Payments />
      </ProtectedRoute>
    ),
  },
  {
    path: "theaters",
    element: (
      <ProtectedRoute>
        <AdminTheaters />
      </ProtectedRoute>
    ),
  },
  {
    path: "cakes",
    element: (
      <ProtectedRoute>
        <Cake />
      </ProtectedRoute>
    ),
  },
  {
    path: "decorations",
    element: (
      <ProtectedRoute>
        <Decoration />
      </ProtectedRoute>
    ),
  },
  {
    path: "add-ons",
    element: (
      <ProtectedRoute>
        <Addon />
      </ProtectedRoute>
    ),
  },
];

function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <ScrollToTop>
        <Routes>
          <Route
            path="/"
            element={
              <UserLayout>
                <Home />
              </UserLayout>
            }
          />

          {userRoutesData.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={
                <Suspense fallback={<Fallback />}>
                  <UserLayout>{route.element}</UserLayout>
                </Suspense>
              }
            />
          ))}

          <Route path="/admin">
            <Route
              path="login"
              element={
                <Suspense fallback={<Fallback />}>
                  {window.innerWidth > 1000 ? (
                    <UserLayout>
                      <Login />
                    </UserLayout>
                  ) : (
                    <MobileScreen />
                  )}
                </Suspense>
              }
            />
            {adminRoutesData.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={
                  <Suspense fallback={<Fallback />}>
                    {window.innerWidth > 1100 ? (
                      <AdminLayout>
                        <Wrapper>{route.element}</Wrapper>
                      </AdminLayout>
                    ) : (
                      <MobileScreen />
                    )}
                  </Suspense>
                }
              />
            ))}
          </Route>
        </Routes>
      </ScrollToTop>
    </>
  );
}

export default App;
