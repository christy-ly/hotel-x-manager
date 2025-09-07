import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Dashboard from "./pages/Dashboard";
import Reservations from "./pages/Reservations";
import Account from "./pages/Account";
import Suites from "./pages/Suites";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import GlobalStyles from "./styles/GlobalStyles";
import AppLayout from "./components/AppLayout";
import Guests from "./pages/Guests";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={true} />

        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="suites" element={<Suites />} />
              <Route path="Reservations" element={<Reservations />} />
              <Route path="account" element={<Account />} />
              <Route path="guests" element={<Guests />} />
              <Route path="users" element={<Users />} />
              <Route path="settings" element={<Settings />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
            <Route path="login" element={<Login />} />
          </Routes>
        </BrowserRouter>
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 5000,
              error: {
                duration: 5000,
              },
              style: {
                backgroundColor: "var(--color-bg-white)",
                color: "var(--color-text-black)",
                border: "1px solid var(--color-primary-normal)",
                fontsize: "16px",
                maxWidth: "500px",
                padding: "16px 24px",
              },
            },
          }}
        ></Toaster>
      </QueryClientProvider>
    </>
  );
}

export default App;
