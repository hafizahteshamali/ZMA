"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { NavLink, useNavigate } from "react-router-dom";
import Header from "../../../../navigation/Header";
import CaseStudyModal from "../../../../components/CaseStudyModal";

/* ----------------------------------------------------------
   Helper: Progress Bar
---------------------------------------------------------- */
const ProgressBar = ({ percent = 0, active = false }) => (
  <div className="h-[4px] w-[80px] sm:w-[100px] bg-[#4F5C68] rounded-full overflow-hidden">
    <div
      className={`h-full bg-[#00264B] ${active ? "opacity-100" : "opacity-60"}`}
      style={{
        width: `${percent}%`,
        transition: "width 0.2s linear",
      }}
    />
  </div>
);

/* ----------------------------------------------------------
   Video Overlay per Slide (label + 2 video phases)
---------------------------------------------------------- */
const SlideVideoOverlay = ({
  label,
  video1,
  video2,
  phase,
  progress,
  onVid1Ready,
  onVid2Ready,
  onVid1Ended,
  onVid2Ended,
}) => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center gap-4 pointer-events-none select-none">
      {/* Progress bars */}
      <div className="flex items-center gap-3">
        <ProgressBar percent={progress.p0} active={phase === 0} />
        <ProgressBar percent={progress.p1} active={phase === 1} />
        <ProgressBar percent={progress.p2} active={phase === 2} />
      </div>

      {/* Content area (card) */}
      <div className="w-[90%] sm:w-[420px] md:w-[520px] lg:w-[600px] bg-white/90 rounded-xl shadow-2xl overflow-hidden pointer-events-auto">
        {phase === 0 && (
          <div className="p-4 sm:p-6 text-center">
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-[var(--text-hover-color)]">
              {label}
            </h3>
            <p className="text-xs sm:text-sm text-[var(--text-color)] mt-1">
              Video loading...
            </p>
          </div>
        )}
        {phase === 1 && (
          <video
            key="vid1"
            src={video1}
            autoPlay
            muted
            playsInline
            onLoadedMetadata={onVid1Ready}
            onEnded={onVid1Ended}
            className="w-full h-auto block"
          />
        )}
        {phase === 2 && (
          <video
            key="vid2"
            src={video2}
            autoPlay
            muted
            playsInline
            onLoadedMetadata={onVid2Ready}
            onEnded={onVid2Ended}
            className="w-full h-auto block"
          />
        )}
      </div>
    </div>
  );
};

/* ----------------------------------------------------------
   Main Banner
---------------------------------------------------------- */
const Banner = ({ ServiceBannerData }) => {
  const { heading, buttons, slides: incomingSlides } = ServiceBannerData;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const [selectedCase, setSelectedCase] = useState(null);
  const [activeDevice, setActiveDevice] = useState("desktop"); // 'desktop' or 'mobile'

  const handleDeviceSwitch = (device) => {
    setActiveDevice(device);
  };

  // If caller didn't pass slides array, build a basic one
  const slides = incomingSlides?.length
    ? incomingSlides
    : ServiceBannerData.buttons.map((btn) => ({
      img: btn.img,
      label: btn.text,
      video1: btn.video1,
      video2: btn.video2,
      labelMs: 3000,
    }));

  /* ---------- Slider Ref ---------- */
  const sliderRef = useRef(null);

  /* ---------- Phase State ---------- */
  const [current, setCurrent] = useState(0);
  const [phase, setPhase] = useState(0); // 0=label,1=video1,2=video2
  const [progress, setProgress] = useState({ p0: 0, p1: 0, p2: 0 });

  // Default durations (in ms)
  const [durations, setDurations] = useState({
    p0: slides[0]?.labelMs ?? 3000,
    p1: 6000, // slow progress
    p2: 6000,
  });

  /* ---------- Timers ---------- */
  const timers = useRef([]);
  const clearTimers = () => {
    timers.current.forEach((t) => clearInterval(t));
    timers.current = [];
  };

  const runProgress = useCallback((key, ms, onDone) => {
    const start = performance.now();
    const interval = setInterval(() => {
      const elapsed = performance.now() - start;
      const pct = Math.min((elapsed / ms) * 100, 100);
      setProgress((prev) => ({ ...prev, [key]: pct }));
      if (pct >= 100) {
        clearInterval(interval);
        onDone?.();
      }
    }, 50); // smooth & slower
    timers.current.push(interval);
  }, []);

  /* ---------- Phase Sequencer ---------- */
  const startPhase0 = useCallback(() => {
    setPhase(0);
    setProgress({ p0: 0, p1: 0, p2: 0 });
    runProgress("p0", durations.p0, () => startPhase1());
  }, [durations.p0, runProgress]);

  const startPhase1 = useCallback(() => {
    setPhase(1);
    setProgress((p) => ({ ...p, p1: 0 }));
    runProgress("p1", durations.p1, () => startPhase2());
  }, [durations.p1, runProgress]);

  const startPhase2 = useCallback(() => {
    setPhase(2);
    setProgress((p) => ({ ...p, p2: 0 }));
    runProgress("p2", durations.p2, () => sliderRef.current?.slickNext());
  }, [durations.p2, runProgress]);

  /* ---------- Slide Change ---------- */
  const handleAfterChange = useCallback(
    (idx) => {
      clearTimers();
      setCurrent(idx);
      const s = slides[idx];
      setDurations({
        p0: s?.labelMs ?? 3000,
        p1: 6000,
        p2: 6000,
      });
      startPhase0();
    },
    [slides, startPhase0]
  );

  /* ---------- Init ---------- */
  useEffect(() => {
    startPhase0();
    return clearTimers;
  }, []);

  /* ---------- Video Metadata Callbacks ---------- */
  const vid1Updated = useRef(false);
  const vid2Updated = useRef(false);
  const onVid1Ready = (e) => {
    if (vid1Updated.current) return;
    const d = e?.target?.duration;
    if (d && isFinite(d)) setDurations((prev) => ({ ...prev, p1: d * 1000 }));
    vid1Updated.current = true;
  };
  const onVid2Ready = (e) => {
    if (vid2Updated.current) return;
    const d = e?.target?.duration;
    if (d && isFinite(d)) setDurations((prev) => ({ ...prev, p2: d * 1000 }));
    vid2Updated.current = true;
  };
  const onVid1Ended = () => setProgress((p) => ({ ...p, p1: 100 }));
  const onVid2Ended = () => setProgress((p) => ({ ...p, p2: 100 }));

  /* ---------- Slick Settings ---------- */
  const settings = {
    dots: false,
    infinite: true,
    centerMode: true,
    centerPadding: "200px",
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    afterChange: handleAfterChange,
    responsive: [
      { breakpoint: 1024, settings: { centerPadding: "100px" } },
      { breakpoint: 768, settings: { centerPadding: "50px" } },
      { breakpoint: 480, settings: { centerPadding: "20px" } },
    ],
  };

  const slide = slides[current] || {};
  const currentButton =
    Array.isArray(buttons) && buttons.length
      ? buttons[current % buttons.length]
      : null;


  const handleCaseStudyModal = (id) => {
    const caseData = ServiceBannerData?.buttons.find((item) => item.id === id);
    setSelectedCase(caseData);
    setActiveDevice("desktop"); // Start with desktop video
    openModal();
  };

  return (
    <>
      <div className="p-1">
        <div className="container mx-auto">
          <Header />
        </div>

        <div className="lg:min-h-[1000px] flex flex-col justify-start lg:justify-center mt-[100px] py-[50px]">
          {/* Heading */}
          <h1 className="text-4xl sm:text-[40px] md:text-5xl lg:leading-16 text-[var(--text-hover-color)] leading-12 font-[600] text-center mt-10 lg:w-[60%] mx-auto">
            {heading}
          </h1>

          {/* Slider wrapper (relative for overlay) */}
          <div className="mt-10 relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
            <SlideVideoOverlay
              label={slide.label}
              video1={slide.video1}
              video2={slide.video2}
              phase={phase}
              progress={progress}
              onVid1Ready={onVid1Ready}
              onVid2Ready={onVid2Ready}
              onVid1Ended={onVid1Ended}
              onVid2Ended={onVid2Ended}
            />

            {/* Slick Slider */}
            <Slider ref={sliderRef} {...settings} className="custom-slick">
              {slides.map((s, i) => (
                <div key={i} className="px-3">
                  <div
                    className={`h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden ${i === current ? "opacity-100" : "opacity-40"
                      } transition-opacity duration-500`}
                  >
                    <div className="relative h-[100%] w-[100%]">
                      <img
                        src={s.img || "/placeholder.svg"}
                        className="h-full w-full object-cover absolute"
                        alt={`slide-${i}`}
                      />
                      {i === current && currentButton && (
                        <div
                          key={currentButton.slug}
                          className="w-[90%] lg:w-[50%] absolute bottom-5 left-1/2 py-2 border-2 border-white transform -translate-x-1/2 rounded-full backdrop-blur-sm"
                        >
                          <div className="flex justify-between items-center">
                            {/* Text */}
                            <p className="text-[#3D4F60] text-[12px] lg:text-[16px] flex-1 text-center border-r border-[#3D4F60] px-2 overflow-hidden whitespace-nowrap">
                              <span className="block truncate">
                                {currentButton.text}
                              </span>
                            </p>

                            {/* Case Study Link - Fixed navigation */}
                            <button
                              onClick={() => handleCaseStudyModal(currentButton.id)}
                              className="text-[#3D4F60] text-[12px] lg:text-[16px] flex-1 text-center border-r border-[#3D4F60] px-2 overflow-hidden whitespace-nowrap flex items-center justify-center hover:bg-white/20 transition-colors"
                              title={currentButton.caseStudyText}
                            >
                              <span className="block truncate">
                                {currentButton.caseStudyText}
                              </span>
                            </button>

                            {/* Visit Link - Changed to <a> for external links */}
                            <a
                              href={currentButton.visitUrl}
                              className="text-[#3D4F60] text-[12px] lg:text-[16px] flex-1 text-center px-2 overflow-hidden whitespace-nowrap hover:bg-white/20 transition-colors"
                              title={currentButton.visitText}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className="block truncate">
                                {currentButton.visitText}
                              </span>
                            </a>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      {/* CaseStudyModal */}
      {selectedCase && (
        <CaseStudyModal isOpen={isModalOpen} onClose={closeModal}>
          <div className="h-[100%] w-[100%] flex flex-col-reverse lg:flex-row justify-end items-start gap-5">
            {/* Left Content Section */}
            <div
              className="w-full lg:w-[45%] h-auto lg:h-[89vh] p-5 overflow-y-auto"
              style={{
                scrollbarWidth: "none" /* Firefox */,
                msOverflowStyle: "none" /* Internet Explorer 10+ */,
              }}
            >
              <style jsx>{`
                div::-webkit-scrollbar {
                  display: none; /* Safari and Chrome */
                }
              `}</style>

              <div className="flex flex-col justify-center items-start gap-5">
                {/* Project Info */}
                <div className="min-h-[300px] w-full flex flex-col justify-center items-start gap-5 border-b-2 border-[#777c8385]">
                  <h1 className="text-3xl text-[var(--text-hover-color)] font-[500]">
                    {selectedCase.projectName}
                  </h1>
                  <div className="flex justify-start items-center gap-2">
                    <div className="h-[10px] w-[10px] bg-[var(--text-hover-color)] rounded-full blink-dot"></div>
                    <p className="text-xl text-[var(--text-hover-color)] font-[500]">
                      {selectedCase.runningOn}
                    </p>
                  </div>
                  <p className="text-2xl text-[var(--text-hover-color)] font-[500]">
                    {selectedCase.tech}
                  </p>
                  <div className="flex justify-start items-center gap-2 w-[100%] flex-wrap">
                    {selectedCase.phases.map((ph, index) => (
                      <div
                        key={index}
                        className="p-1.5 flex justify-center items-center bg-[#005AB1] rounded text-[var(--white-color)] text-[10px]"
                      >
                        {ph}
                      </div>
                    ))}
                    <div className="p-1.5 flex justify-center items-center bg-[#B1C5DF4D] rounded text-[var(--text-color)] text-[10px]">
                      {selectedCase.category}
                    </div>
                  </div>
                </div>

                {/* About */}
                <div className=" lg:h-[250px] w-full flex flex-col lg:flex-row justify-around items-start gap-5 border-b-2 border-[#777c8385]">
                  <h1 className="text-xl text-[#4E667D] font-[500] lg:w-[30%] w-full">
                    ABOUT
                  </h1>
                  <p className="text-[13px] lg:w-[65%] w-full text-[#8CABC9]">
                    {selectedCase.aboutPara}
                  </p>
                </div>

                {/* Services */}
                <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-5 pb-5 border-b-2 border-[#777c8385]">
                  <h1 className="text-xl text-[#4E667D] font-[500] lg:w-[30%] w-full">
                    SERVICES
                  </h1>
                  <div className="flex flex-col w-full lg:w-[65%] gap-5">
                    {selectedCase.services.map((ser, index) => (
                      <div
                        key={index}
                        className="flex flex-col justify-center items-start gap-3"
                      >
                        <h1 className="text-xl text-[#4E667D] font-[500]">
                          {ser.heading}
                        </h1>
                        <div className="flex flex-wrap items-center gap-3">
                          {ser.taggs.map((item, idx) => (
                            <div
                              key={idx}
                              onClick={() => selectedCate(item)}
                              className="bg-[#B1C5DF4D] px-2 py-1.5 text-[10px] text-[var(--text-color)] !cursor-pointer"
                            >
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Integrations */}
                <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-5 pb-5 border-b-2 border-[#777c8385]">
                  <h1 className="text-xl text-[#4E667D] font-[500] lg:w-[30%] w-full">
                    INTEGRATIONS
                  </h1>
                  <div className="flex flex-wrap items-center w-full lg:w-[65%] gap-3">
                    {selectedCase.integration.map((int, index) => (
                      <div
                        key={index}
                        onClick={() => selectedCate(int)}
                        className="bg-[#B1C5DF4D] px-2 py-1.5 text-[10px] text-[var(--text-color)] !cursor-pointer"
                      >
                        {int}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-5 pb-5">
                  <h1 className="text-xl text-[#4E667D] font-[500] lg:w-[30%] w-full">
                    KEY FEATURES
                  </h1>
                  <div className="flex flex-col items-start w-full lg:w-[65%] gap-2">
                    {selectedCase.keyFeatures.map((kf, index) => (
                      <div
                        key={index}
                        className="px-2 py-1.5 text-[16px] text-[var(--text-color)]"
                      >
                        {kf}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Video/Image Section */}
            <div
              className="min-h-[400px] lg:h-[800px] relative w-full lg:w-[50%] flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${selectedCase.img2Url})` }}
            >
              {/* Video Container */}
              <div className="lg:h-[60%] md:h-[70%] absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] lg:-translate-y-[60%] vide p-3 w-[90%] flex flex-col items-center justify-center z-10">
                <video
                  key={activeDevice}
                  className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                  controls
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source
                    src={
                      activeDevice === "desktop"
                        ? selectedCase.desktopVideoUrl || selectedCase.video1
                        : selectedCase.mobileVideoUrl || selectedCase.video2
                    }
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>

                {/* Device Switching Controls */}
                <div className="bg-[#B1C5DF] rounded-xl mt-[50px] w-max p-2 flex justify-center items-center gap-3 z-20">
                  <div className="w-[50%] flex justify-center gap-2 items-center border-r border-[var(--text-hover-color)]">
                    <button
                      onClick={() => handleDeviceSwitch("desktop")}
                      className={`p-2 rounded-lg transition-all duration-300 ${activeDevice === "desktop" &&
                        "bg-[#CBE1FF] text-white shadow-lg"
                        }`}
                      title="Desktop View"
                    >
                      <img
                        src="/assets/images/case-study/mdi_monitor.svg"
                        className="lg:h-5 lg:w-5 h-3 w-3"
                        alt=""
                      />
                    </button>

                    <button
                      onClick={() => handleDeviceSwitch("mobile")}
                      className={`p-2 rounded-lg transition-all duration-300 ${activeDevice === "mobile" &&
                        "bg-[#CBE1FF] text-white shadow-lg"
                        }`}
                      title="Mobile View"
                    >
                      <img
                        src="/assets/images/case-study/mdi_mobile.svg"
                        className="lg:h-5 lg:w-5 h-3 w-3"
                        alt=""
                      />
                    </button>
                  </div>
                  <NavLink
                    to={selectedCase.websiteUrl}
                    className="text-[14px] flex justify-center items-center gap-1 text-[var(--text-hover-color)] font-[500]"
                  >
                    <img
                      src="/assets/images/case-study/link.svg"
                      className="h-5 w-5"
                      alt=""
                    />
                    {selectedCase.projectName}
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </CaseStudyModal>
      )}
    </>
  );
};

export default Banner;
