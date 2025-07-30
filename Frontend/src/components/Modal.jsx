"use client"

import { useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { RxCross2 } from "react-icons/rx"

const Modal = ({ isOpen, onClose }) => {
  const containerRef = useRef(null)
  const [dragging, setDragging] = useState(false)
  const [startPos, setStartPos] = useState({ x: 0, y: 0 })
  const [scrollPos, setScrollPos] = useState({ left: 0, top: 0 })

  const onMouseDown = (e) => {
    setDragging(true)
    setStartPos({ x: e.clientX, y: e.clientY })
    setScrollPos({
      left: containerRef.current.scrollLeft,
      top: containerRef.current.scrollTop,
    })
    containerRef.current.style.cursor = "grabbing"
    containerRef.current.style.userSelect = "none"
  }

  const onMouseMove = (e) => {
    if (!dragging) return
    const dx = e.clientX - startPos.x
    const dy = e.clientY - startPos.y
    containerRef.current.scrollLeft = scrollPos.left - dx
    containerRef.current.scrollTop = scrollPos.top - dy
  }

  const stopDrag = () => {
    setDragging(false)
    if (containerRef.current) {
      containerRef.current.style.cursor = "grab"
      containerRef.current.style.removeProperty("user-select")
    }
  }

  // Image data with positions and sizes
  const images = [
    {
      src: "/assets/images/graphic-designing/modal-img1.jpeg",
      alt: "Design 1",
      className: "absolute top-0 left-0 w-[300px] h-[200px] object-cover rounded-lg shadow-lg transform",
    },
    {
      src: "/assets/images/graphic-designing/modal-img2.jpeg",
      alt: "Design 2",
      className: "absolute top-[50px] left-[600px] w-[300px] h-[200px] object-cover rounded-lg shadow-lg transform",
    },
    {
      src: "/assets/images/graphic-designing/modal-img3.jpeg",
      alt: "Design 3",
      className: "absolute top-0 right-[580px] w-[300px] h-[200px] object-cover rounded-lg shadow-lg transform",
    },
    {
      src: "/assets/images/graphic-designing/modal-img4.jpeg",
      alt: "Design 4",
      className: "absolute top-[300px] left-[100px] w-[300px] h-[200px] object-cover rounded-lg shadow-lg transform",
    },
    {
      src: "/assets/images/graphic-designing/modal-img5.jpg",
      alt: "Design 5",
      className: "absolute top-[300px] left-[600px] w-[300px] h-[400px] object-cover rounded-lg shadow-lg transform",
    },
    {
      src: "/assets/images/graphic-designing/modal-img6.jpeg",
      alt: "Design 6",
      className: "absolute top-[350px] right-[700px] w-[300px] h-[200px] object-cover rounded-lg shadow-lg transform",
    },
    {
      src: "/assets/images/graphic-designing/modal-img7.jpeg",
      alt: "Design 7",
      className: "absolute bottom-[600px] left-[100px] w-[300px] h-[200px] object-cover rounded-lg shadow-lg transform",
    },
    {
      src: "/assets/images/graphic-designing/modal-img8.jpeg",
      alt: "Design 8",
      className: "absolute bottom-[500px] left-[600px] w-[300px] h-[200px] object-cover rounded-lg shadow-lg transform",
    },
    {
      src: "/assets/images/graphic-designing/modal-img9.jpeg",
      alt: "Design 9",
      className: "absolute bottom-[600px] right-[580px] w-[300px] h-[200px] object-cover rounded-lg shadow-lg transform",
    },
    {
      src: "/assets/images/graphic-designing/modal-img10.jpeg",
      alt: "Design 10",
      className: "absolute bottom-[300px] left-[100px] w-[300px] h-[200px] object-cover rounded-lg shadow-lg transform",
    },
    {
      src: "/assets/images/graphic-designing/modal-img11.jpeg",
      alt: "Design 11",
      className: "absolute bottom-[200px] left-[600px] w-[300px] h-[200px] object-cover rounded-lg shadow-lg transform",
    },
    {
      src: "/assets/images/graphic-designing/modal-img12.jpeg",
      alt: "Design 12",
      className: "absolute bottom-[300px] right-[480px] w-[300px] h-[200px] object-cover rounded-lg shadow-lg transform",
    },
    {
      src: "/assets/images/graphic-designing/modal-img13.jpeg",
      alt: "Design 13",
      className: "absolute bottom-0 left-[0px] w-[300px] h-[200px] object-cover rounded-lg shadow-lg transform",
    },
    {
      src: "/assets/images/graphic-designing/modal-img14.jpeg",
      alt: "Design 14",
      className: "absolute bottom-0 right-[500px] w-[300px] h-[200px] object-cover rounded-lg shadow-lg transform",
    },
    {
      src: "/assets/images/graphic-designing/modal-img15.jpeg",
      alt: "Design 15",
      className: "absolute top-[50px] right-[200px] w-[300px] h-[200px] object-cover rounded-lg shadow-lg transform",
    },
    {
      src: "/assets/images/graphic-designing/modal-img16.jpeg",
      alt: "Design 16",
      className: "absolute top-[300px] right-[300px] w-[300px] h-[200px] object-cover rounded-lg shadow-lg transform",
    },
    {
      src: "/assets/images/graphic-designing/modal-img17.jpeg",
      alt: "Design 17",
      className: "absolute top-[550px] right-[50px] w-[300px] h-[200px] object-cover rounded-lg shadow-lg transform",
    },
    {
      src: "/assets/images/graphic-designing/modal-img18.jpeg",
      alt: "Design 18",
      className: "absolute bottom-[430px] right-[50px] w-[300px] h-[200px] object-cover rounded-lg shadow-lg transform",
    },
    {
      src: "/assets/images/graphic-designing/modal-img19.jpeg",
      alt: "Design 19",
      className: "absolute bottom-[100px] right-[50px] w-[300px] h-[200px] object-cover rounded-lg shadow-lg transform",
    },
  ]

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="modal"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 w-full h-full bg-[#CBE1FF] z-50 flex items-center justify-center"
          onClick={onClose}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-gray-700 hover:text-gray-900 text-3xl z-50 bg-white/80 rounded-full p-2 backdrop-blur-sm transition-colors"
          >
            <RxCross2 />
          </button>

          {/* Scrollable Canvas */}
          <div
            ref={containerRef}
            onClick={(e) => e.stopPropagation()}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={stopDrag}
            onMouseLeave={stopDrag}
            className="relative w-full h-full overflow-auto bg-gradient-to-br from-[#CBE1FF] to-[#bae0ff] scrollbar-hide"
            style={{ cursor: dragging ? "grabbing" : "grab" }}
          >
            {/* Large scrollable area with positioned images */}
            <div className="relative w-[2000px] h-[1500px] min-h-full">
              {images.map((image, index) => (
                <motion.img
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  className={image.className}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.5,
                    type: "spring",
                    stiffness: 100,
                  }}
                  whileHover={{
                    scale: 1.05,
                    zIndex: 10,
                    transition: { duration: 0.2 },
                  }}
                  draggable={false}
                />
              ))}

              {/* Additional decorative elements */}
              <div className="absolute top-40 left-[800px] w-32 h-32 bg-white/20 rounded-full blur-xl"></div>
              <div className="absolute top-[600px] left-[300px] w-24 h-24 bg-blue-200/30 rounded-full blur-lg"></div>
              <div className="absolute top-[900px] right-[400px] w-40 h-40 bg-purple-200/20 rounded-full blur-2xl"></div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-gray-600 text-sm bg-white/80 px-3 py-1 rounded-full backdrop-blur-sm">
            Drag to explore
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Modal
