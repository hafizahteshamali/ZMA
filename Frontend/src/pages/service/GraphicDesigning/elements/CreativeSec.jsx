import React, { useState } from "react";
import Modal from "../../../../components/Modal";
import { FaRegWindowClose } from "react-icons/fa";
import { AnimatePresence } from "framer-motion";

const CreativeSec = () => {
  const [isGalleryModal, setIsGalleryModal] = useState(false);

  return (
    <div className="container mx-auto mt-[100px] lg:mt-0">
      <div className="lg:h-[600px] flex flex-col lg:flex-row justify-between items-start">
        <div className="w-[100%] lg:w-[33%] h-min lg:h-[550px] relative p-2">
          <h1 className="text-5xl lg:text-8xl text-[var(--text-hover-color)] font-[600] absolute lg:bottom-0 top-[50%] transform -translate-y-[50%]">
            The Creative Compass
          </h1>
        </div>

        <div className="w-[100%] lg:w-[33%] h-max mt-14 lg:mt-0 lg:h-[550px] relative p-2">
          <img
            onClick={() => setIsGalleryModal(true)}
            src="/assets/images/graphic-designing/creative-img.png"
            className="h-[500px] w-full object-contain "
            alt=""
          />
        </div>

        <div className="w-[100%] lg:w-[33%] lg:h-[550px] min-h-[150px] relative p-2">
          <div className="absolute bottom-0">
            <p className="text-[var(--text-color)]">
              Guiding your brand’s look and feel,
            </p>
            <p className="text-[var(--text-color)]">
              we craft on‑point logos and marketing graphics that keep your
              messaging true and your visuals on‑track.
            </p>
            <div className="my-7 flex justify-start items-center gap-3">
              <img
                src="/assets/images/graphic-designing/top-arrow.svg"
                className="h-[40px] w-[40px]"
                alt=""
              />
              <div className="pb-0.5 border-b-2 border-[var(--text-hover-color)]">
                <p className="text-[var(--text-hover-color)] font-[600]">
                  About our projects
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal isOpen={isGalleryModal} onClose={() => setIsGalleryModal(false)}>
  <img
    src="/assets/images/graphic-designing/modal-img1.jpeg"
    alt="modal"
    className="object-contain"
    style={{ width: '200%', height: 'auto', pointerEvents: 'none' }}
  />
</Modal>
    </div>
  );
};

export default CreativeSec;
