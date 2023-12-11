import './style.css'
import * as React from 'react';
import * as ReactDOM from "react-dom/client";
import {  Routes, Route, BrowserRouter, Link, Outlet } from "react-router-dom";
import Load from './load'

const Jul = () => {
  React.useEffect(() => {

      const load = new Load();
      load.init(document.getElementById("app"));

    }, []);

  return <></>
}

const Layout = () => {

  return <div>
    <Outlet />
  </div>
}

const Home = () => {

  return <div></div>
}

const NoMatch = () => {

  return <div></div>
}

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route exakt path="jul" element={<Jul />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  );
};

ReactDOM.createRoot(document.getElementById("r")).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
);