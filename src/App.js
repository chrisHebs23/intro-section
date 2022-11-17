import React, { lazy, Suspense } from "react";

const Header = lazy(() => import("./header/Header"));
const HomePage = lazy(() => import("./pages/HomePage"));

const App = () => {
  return (
    <Suspense fallback={<>Loading</>}>
      <Header />
      <HomePage />
    </Suspense>
  );
};

export default App;
