import { Suspense } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { NotFound } from "./components/NotFound";

export const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Outlet />}>
        <Routes>
          <Route element={<Header />}>
            <Route element={<Home />} path="/" />
          </Route>
          <Route element={<NotFound />} path="*" />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
