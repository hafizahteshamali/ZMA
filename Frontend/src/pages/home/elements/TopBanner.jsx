// BannerSection.jsx
import NormalButton from "../../../components/NormalButton";
import Header from "../../../navigation/Header";

const BannerSection = ({ heading, para, btnText, imgUrl, imageRef }) => {
  return (
    <section
      className="bg-cover w-full bg-no-repeat pt-7 filter brightness-100 saturate-150 h-[100vh] transition-all duration-500"
      style={{ backgroundImage: `url('/assets/images/home/banne-bg.png')` }}
    >
      <div className="container mx-auto">
        <Header />

        <div className="w-full flex flex-col lg:flex-row justify-start items-center my-[70px] px-5 h-[500px] relative">
          <div className="lg:w-[45%] w-full flex flex-col gap-7 justify-center items-start text-center lg:text-left absolute left-11">
            <h1 className="text-4xl lg:text-5xl lg:w-[80%] font-semibold leading-[1.2] text-[var(--text-hover-color)]">
              {heading}
            </h1>
            <p className="text-xl text-[var(--sm-heading)] lg:w-[85%] font-medium">
              {para}
            </p>
            <NormalButton
              text={btnText}
              className="h-[55px] font-semibold w-full lg:w-[50%] bg-[#d5d5f1] shadow-2xl rounded-full text-[var(--text-hover-color)] text-xl"
            />
          </div>

          <img ref={imageRef} src={imgUrl} className="right-16 fixed img" alt="" />
        </div>
      </div>
    </section>
  );
};

export default BannerSection;