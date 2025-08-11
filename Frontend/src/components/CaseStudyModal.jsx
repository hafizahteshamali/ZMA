"use client" // This component uses client-side hooks like useState and useEffect

import { useState, useEffect, useRef } from "react"

const CaseStudyModal = ({ isOpen, onClose, children }) => {
  // State to control if the modal is mounted in the DOM
  const [isMounted, setIsMounted] = useState(false)
  // State to control the visibility (opacity and scale) for animation
  const [showModal, setShowModal] = useState(false)
  // Ref to the modal content div to detect clicks outside
  const modalRef = useRef(null)

  useEffect(() => {
    if (isOpen) {
      // When isOpen becomes true, mount the modal immediately
      setIsMounted(true)
      // A small delay is added to ensure the component is rendered with its initial
      // (hidden) state before the 'showModal' state changes to trigger the transition.
      const timer = setTimeout(() => {
        setShowModal(true)
      }, 10) // Minimal delay to allow DOM to render initial state
      return () => clearTimeout(timer)
    } else {
      // When isOpen becomes false, trigger the zoom-out animation
      setShowModal(false)
      // Wait for the animation to complete before unmounting the modal from the DOM
      const animationDuration = 300 // Matches Tailwind's duration-300
      const timer = setTimeout(() => {
        setIsMounted(false)
      }, animationDuration)
      return () => clearTimeout(timer)
    }
  }, [isOpen]) // Re-run effect when isOpen prop changes

  // If the modal is not mounted, return null to not render anything
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
    // Overlay for the modal, handles background dimming and centering
    <div
      className={`
        fixed inset-0 z-50 flex items-center justify-center
        bg-opacity-50
        transition-opacity duration-300 ease-out
        ${showModal ? "opacity-100" : "opacity-0"}
      `}
      onClick={handleOverlayClick}
    >
      {/* Modal content container */}
      <div
        ref={modalRef}
        className={`
          relative
          h-[95vh] w-[95%]
          bg-white rounded-lg shadow-xl p-6
          transform
          transition-all duration-300 ease-out
          ${showModal ? "scale-100" : "scale-95"}
        `}
      >
        {/* Original green background for demonstration, placed inside for layering */}
        <div className="absolute inset-0 bg-green-500 rounded-lg"></div>
        {/* Content wrapper to ensure children are above the background */}
        <div className="relative z-10 flex flex-col h-full">
          {children}
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white text-2xl font-bold z-20"
            aria-label="Close modal"
          >
            &times;
          </button>
        </div>
      </div>
    </div>
  )
}

export default CaseStudyModal
