import { Route, Routes } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import Layout from "../Layout/Layout";
import Home from "../pages/home/Home";
import AIDevelopment from "../pages/service/AiDevelopment/AIDevelopment";
import WebDevelopment from "../pages/service/WebDevelopment/WebDevelopment";
import ITSolutions from "../pages/service/ItSolutions/ITSolutions";
import GraphicDesigning from "../pages/service/GraphicDesigning/GraphicDesigning";
import Error from "../pages/Error/Error";
import About from "../pages/about/About";
import BlogLayout from "../Layout/BlogLayout";
import Blog from "../pages/Blog/Blog";
import BlogDetail from "../pages/Blog/BlogDetail";
import CaseStudy from "../pages/case_study/CaseStudy";
import Contact from "../pages/contact/Contact";
import Privacy_Policy from "../pages/privacy_policy/Privacy_Policy";
import ImPrints from "../pages/ImPrints/ImPrints";

const AppRoutes = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* Main Layout Routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="service/ai-development" element={<AIDevelopment />} />
          <Route path="service/web-development" element={<WebDevelopment />} />
          <Route path="service/it-solutions" element={<ITSolutions />} />
          <Route path="service/graphic-designing" element={<GraphicDesigning />} />
          <Route path="about-us" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy-policy" element={<Privacy_Policy />} />
          <Route path="imprint" element={<ImPrints />} />
          <Route path="case-study" element={<CaseStudy />} />

          {/* Blog Routes - nested under Layout */}
          <Route path="blog" element={<BlogLayout />}>
            <Route index element={<Blog />} />
            <Route path=":slug" element={<BlogDetail />} />
          </Route>

          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;
