import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Color from "./pages/color/Color";
import Title from "./pages/title/Title";
import Upload from "./pages/upload/Upload";
import PageNotFound from "./pages/PageNotFound";

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/color" element={<Color></Color>}></Route>
        <Route path="/title" element={<Title></Title>}></Route>
        <Route path="/upload" element={<Upload></Upload>}></Route>
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </HashRouter>
  );
};

export default Router;
