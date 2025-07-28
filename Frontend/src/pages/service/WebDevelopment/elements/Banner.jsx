"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { NavLink } from "react-router-dom";
import Header from "../../../../navigation/Header";

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
  const {
    heading,
    img1,
    img2,
    img3,
    buttons,
    slides: incomingSlides,
  } = ServiceBannerData;

  // If caller didn't pass slides array, build a basic one
  const slides = incomingSlides?.length
    ? incomingSlides
    : [
        {
          img: img1,
          label: "Mobile Guru",
          video1: "/assets/images/service/mobile-guru1.mp4",
          video2: "/assets/images/service/mobile-guru2.mp4",
          labelMs: 3000,
        },
        {
          img: img2,
          label: "Mobile Guru",
          video1: "/assets/images/service/mobile-guru1.mp4",
          video2: "/assets/images/service/mobile-guru2.mp4",
          labelMs: 3000,
        },
        {
          img: img3,
          label: "Mobile Guru",
          video1: "/assets/images/service/mobile-guru1.mp4",
          video2: "/assets/images/service/mobile-guru2.mp4",
          labelMs: 3000,
        },
      ];

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

  return (
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
                  className={`h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden ${
                    i === current ? "opacity-100" : "opacity-40"
                  } transition-opacity duration-500`}
                >
                  <div className="relative h-[100%] w-[100%]">
                    <img
                      src={s.img || "/placeholder.svg"}
                      className="h-full w-full object-cover absolute"
                      alt={`slide-${i}`}
                    />
                    {buttons.map((btn, index) => {
                      return (
                        <div key={index} className="w-[90%] lg:w-[50%] bg-[#ffffff33] absolute bottom-5 left-[50%] py-2 border-2 border-white transform -translate-x-[50%] rounded-full">
                          <div className="flex justify-between items-center">
                            <p className="text-[#3D4F60] text-[12px] lg:text-[16px] w-[32%] flex justify-center items-center border-r border-[#3D4F60]">{btn.text}</p>
                            <NavLink to={btn.caseStudyUrl} className="text-[#3D4F60] text-[12px] lg:text-[16px] w-[32%] flex justify-center items-center border-r border-[#3D4F60]">
                              {btn.caseStudyText}
                            </NavLink>
                            <NavLink to={btn.visitUrl} className="text-[#3D4F60] text-[12px] lg:text-[16px] w-[32%] flex justify-center items-center">
                              {btn.visitText}
                              </NavLink>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Banner;
