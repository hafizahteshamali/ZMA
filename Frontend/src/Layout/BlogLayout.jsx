import { Outlet, useLocation } from "react-router-dom";
import BlogSidebar from "../components/BlogSidebar";
import Header from "../navigation/Header";
import { FAQsHeadingData, SidebarBlogsData } from "../assets/ConstantData";
import FAQs from "../pages/home/elements/FAQs";
import DiscoverBanner from "../components/DiscoverBanner";

const BlogLayout = () => {
  const location = useLocation();
  return (
    <div>
      <Header />
      <div className="container mx-auto">
        <div className="min-h-screen flex flex-col lg:flex-row justify-between items-start gap-8 mt-[200px]">
          <div className="w-[95%] mx-auto lg:mx-0 lg:w-[70%]">
            <Outlet /> {/* Nested route ka content yahan render hoga */}
          </div>
          <div className="w-[95%] mx-auto lg:w-[25%]">
            <BlogSidebar SidebarBlogsData={SidebarBlogsData} />
          </div>
        </div>
        {location.pathname == "/blog" && (
          <>
            <FAQs FAQsHeadingData={FAQsHeadingData} />
            <DiscoverBanner
              text1="Discover Actionable Insights and In-Depth Tutorials for"
              text2="Web Development, AI, Graphic Design, and IT Excellence"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default BlogLayout;
