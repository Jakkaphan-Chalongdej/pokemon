import "./App.css";
// import Home from "./views/Home/Home";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import DefaultLayout from "@/Layouts";
import { routers } from "@/routes/router";
import { HashRouter, useRoutes } from "react-router-dom";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => {
  // const routes = useRoutes(routers);
  const routes = useRoutes(routers);
  return routes;
};

function AppWrapper() {
  return (
    <QueryClientProvider client={queryClient}>
      <DefaultLayout>
        <HashRouter>
          <App />
        </HashRouter>
      </DefaultLayout>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default AppWrapper;
