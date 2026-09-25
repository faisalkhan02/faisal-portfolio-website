import { useEffect, useState } from "react";
import certificates from "../data/certificates";

function Certificates() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  // Open certificate preview
  const openCertificate = (cert) => {
    setSelectedCertificate(cert);

    // Browser history me temporary entry
    window.history.pushState(
      { certificatePreview: true },
      "",
      window.location.href
    );
  };

  // Browser Back button handle
  useEffect(() => {
    const handlePopState = () => {
      if (selectedCertificate) {
        setSelectedCertificate(null);

        // Certificate section par wapas lao
        setTimeout(() => {
          document.getElementById("certificates")?.scrollIntoView({
            behavior: "smooth",
          });
        }, 50);
      }
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [selectedCertificate]);

  // Close button
  const closeCertificate = () => {
    setSelectedCertificate(null);

    window.history.back();

    setTimeout(() => {
      document.getElementById("certificates")?.scrollIntoView({
        behavior: "smooth",
      });
    }, 50);
  };

  return (
    <section
      id="certificates"
      className="py-24 bg-slate-950 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            My <span className="text-cyan-400">Certificates</span>
          </h2>

          <p className="text-gray-400 mt-4">
            Certifications and achievements that validate my skills.
          </p>
        </div>

        {/* Certificates */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-cyan-400 transition duration-300"
            >

              {/* Image */}
              <img
                src={cert.image}
                alt={cert.title}
                onClick={() => openCertificate(cert)}
                className="w-full h-48 object-cover cursor-pointer hover:scale-105 transition duration-300"
              />

              {/* Content */}
              <div className="p-6">

                <h3 className="text-xl font-bold">
                  {cert.title}
                </h3>

                <p className="text-gray-400 mt-2">
                  {cert.organization}
                </p>

                <p className="text-cyan-400 text-sm mt-4">
                  Click image to view certificate
                </p>

              </div>
            </div>
          ))}

        </div>
      </div>

      {/* Preview Modal */}
      {selectedCertificate && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6"
        >

          {/* Close */}
          <button
            onClick={closeCertificate}
            className="absolute top-6 right-8 text-white text-4xl hover:text-cyan-400 cursor-pointer"
          >
            ×
          </button>

          {/* Certificate */}
          <img
            src={selectedCertificate.image}
            alt={selectedCertificate.title}
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
          />

        </div>
      )}
    </section>
  );
}

export default Certificates;