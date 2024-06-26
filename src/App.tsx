import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import { Helmet } from "react-helmet";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import GetInvolve from "./pages/GetInvolve";
import Contact from "./pages/Contact";
import CausesDetails from "./pages/Causes";
import Donate from "./pages/Donate";
import WCA from "./pages/WCA";

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>BMCCI</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/get-involve" element={<GetInvolve />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/causes/:id" element={<CausesDetails />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/wca" element={<WCA />} />
      </Routes>
    </MantineProvider>
  );
}
