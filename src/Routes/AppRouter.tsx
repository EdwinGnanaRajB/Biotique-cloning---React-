import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../UI/Layout";
import Login from "../UI/Login";
import Home from "../UI/Home";
import Collections from "../Bottom Bar/Collections";
import Skin from "../Bottom Bar/Skin";
import Hair from "../Bottom Bar/Hair";
import Body from "../Bottom Bar/Body";
import Baby from "../Bottom Bar/Baby";
import Men from "../Bottom Bar/Men";
import Fragrance from "../Bottom Bar/Fragrance";
import NaturalMakeup from "../Bottom Bar/Natural makeup";
import GiftPacks from "../Bottom Bar/Gift packs";
import Offers from "../Bottom Bar/Offers";
import OurStory from "../Bottom Bar/Our story";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="collections" element={<Collections />} />
          <Route path="skin" element={<Skin />} />
          <Route path="hair" element={<Hair />} />
          <Route path="body" element={<Body />} />
          <Route path="baby" element={<Baby />} />
          <Route path="men" element={<Men />} />
          <Route path="fragrance" element={<Fragrance />} />
          <Route path="makeup" element={<NaturalMakeup />} />
          <Route path="gifts" element={<GiftPacks />} />
          <Route path="offers" element={<Offers />} />
          <Route path="our-story" element={<OurStory />} />
        </Route>

        <Route path="/login" element={<Login />} />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
