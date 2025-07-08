

const ExperienceSection = ({ experienceData, imgUrl, secondImageRef }) => {
    return (
      <section className="bg-blue-400 flex flex-wrap justify-start h-[100vh] relative transition-all duration-500">
        <div className="h-[350px] w-[31%]"></div>
        {experienceData.map((exp, index) => (
          <div key={index} className="bg-green-500 h-[350px] w-[30%] m-4">
            {/* Content */}
          </div>
        ))}
        <img
          ref={secondImageRef}
          src={imgUrl}
          className="absolute top-10 right-16 opacity-0 transition-opacity duration-1000"
          alt=""
        />
      </section>
    );
  };
  
  export default ExperienceSection;