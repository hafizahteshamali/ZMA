import { CaseStudyReview1, CaseStudyReview2, FAQsHeadingData } from "../../assets/ConstantData";
import Reviews from "../../components/Reviews";
import FAQs from "../home/elements/FAQs";
import Projects from "./elements/Projects";


const CaseStudy = () => {
  return (
    <div>
        <Projects />
        <FAQs FAQsHeadingData={FAQsHeadingData} />
        <Reviews Reviews1={CaseStudyReview1} Reviews2={CaseStudyReview2} bgColor="#cbe1ff" />
    </div>
  );
};

export default CaseStudy;
