import React, { Suspense } from "react";
import { Route, Routes } from "react-router";
import { Navbar, Footer, NotFound, Loader } from "./components";

const Home = React.lazy(() => import("./pages/Home"));
const SendEther = React.lazy(() => import("./pages/SendEther"));
const Lottery = React.lazy(() => import("./pages/Lottery"));
const LotteryPool = React.lazy(() => import("./pages/LotteryPool"));
const BuyToken = React.lazy(() => import("./pages/BuyToken"));

const App = () => (
  <div className="min-h-screen flex flex-col overflow-hidden">
    <Navbar />
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<Loader full={true} />}>
            <Home />
          </Suspense>
        }
      />
      <Route
        index
        element={
          <Suspense fallback={<Loader full={true} />}>
            <Home />
          </Suspense>
        }
      />
      <Route
        path={"/buy-token"}
        element={
          <Suspense fallback={<Loader full={true} />}>
            <BuyToken />
          </Suspense>
        }
      />
      <Route
        path={"/lottery"}
        element={
          <Suspense fallback={<Loader full={true} />}>
            <LotteryPool />
          </Suspense>
        }
      />
      <Route
        path={"/lottery/:lotteryAddress"}
        element={
          <Suspense fallback={<Loader full={true} />}>
            <Lottery />
          </Suspense>
        }
      />
      <Route
        path={"/send-ether"}
        element={
          <Suspense fallback={<Loader full={true} />}>
            <SendEther />
          </Suspense>
        }
      />
      <Route
        path="*"
        element={
          <Suspense fallback={<Loader full={true} />}>
            <NotFound />
          </Suspense>
        }
      />
    </Routes>
    <Footer />
  </div>
);

export default App;
