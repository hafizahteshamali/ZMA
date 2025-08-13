import React from "react";

const MapEmbed = () => {
  return (
    <div className="w-full h-full">
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.119427670176!2d67.06039987510466!3d24.85977034528559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f600c75806f%3A0xe8a9387d6c969974!2sZMA%20Solutions!5e0!3m2!1sen!2s!4v1755072106340!5m2!1sen!2s"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapEmbed;
