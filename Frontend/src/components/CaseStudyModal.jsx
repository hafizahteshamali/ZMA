"use client"

import { useState, useEffect, useRef } from "react"

const CaseStudyModal = ({ isOpen, onClose, children }) => {
  // State to control if the modal is mounted in the DOM
  const [isMounted, setIsMounted] = useState(false)
  // State to control the visibility for smooth animations
  const [showModal, setShowModal] = useState(false)
  // Ref to the modal content div to detect clicks outside
  const modalRef = useRef(null)

  useEffect(() => {
    if (isOpen) {
      // Mount the modal immediately
      setIsMounted(true)
      // Small delay to ensure DOM is ready for smooth animation
      const timer = setTimeout(() => {
        setShowModal(true)
      }, 20) // Slightly longer delay for smoother animation
      return () => clearTimeout(timer)
    } else {
      // Trigger exit animation
      setShowModal(false)
      // Wait for animation to complete before unmounting
      const animationDuration = 400 // Longer duration for smoother feel
      const timer = setTimeout(() => {
        setIsMounted(false)
      }, animationDuration)
      return () => clearTimeout(timer)
    }
  }, [isOpen])

  // Close modal on Escape key press
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.keyCode === 27) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [isOpen, onClose])

  // If not mounted, don't render anything
  if (!isMounted) {
    return null
  }

  // Handle clicks on the overlay to close the modal
  const handleOverlayClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose()
    }
  }

  return (
    <div
      className={`
        fixed inset-0 z-50 flex items-center justify-center
        backdrop-blur-sm
        transition-all duration-400 ease-in-out
        ${showModal ? "bg-[#00000023] bg-opacity-60 opacity-100" : "bg-[#00000023] bg-opacity-0 opacity-0"}
      `}
      onClick={handleOverlayClick}
    >
      <div
        ref={modalRef}
        className={`
          relative
          w-[95%] h-[95%] max-w-7xl
          bg-[#cbe1ff] rounded-xl shadow-2xl
          transform-gpu
          transition-all duration-400 ease-out
          ${showModal ? "scale-100 opacity-100 translate-y-0" : "scale-95 opacity-0 translate-y-4"}
        `}
        style={{
          transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)", // Custom spring-like easing
        }}
      >
        <button
          onClick={onClose}
          className="
            absolute top-4 right-4 z-20 
            p-3 bg-white rounded shadow-lg
            transform transition-all duration-200 ease-in-out
            hover:bg-gray-50 hover:scale-110 hover:shadow-xl
            active:scale-95
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
          "
          aria-label="Close modal"
        >
          <svg
            className="w-5 h-5 text-[var(--text-hover-color)] transition-colors duration-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div
          className={`
            w-full h-full overflow-hidden rounded-xl
            transition-all duration-300 ease-out delay-100
            ${showModal ? "opacity-100" : "opacity-0"}
          `}
        >
          {children}
        </div>
      </div>
    </div>
  )
}

export default CaseStudyModal
