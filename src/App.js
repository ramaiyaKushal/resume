import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { Services } from "./pages/Services";
import { Talks } from "./pages/Talks";
import { Til } from "./pages/Til";
import { Travel } from "./pages/Travel";

const basename = process.env.PUBLIC_URL || "/";

const App = () => (
  <BrowserRouter basename={basename}>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="services" element={<Services />} />
        <Route path="talks" element={<Talks />} />
        <Route path="til" element={<Til />} />
        <Route path="travel" element={<Travel />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
