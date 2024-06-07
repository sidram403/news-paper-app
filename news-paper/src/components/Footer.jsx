import React from "react";

const Footer = () => {
  return (
    <div className="py-8 w-full px-4 bg-red-500 text-white">
      <div className="mt-16 md:mt-24 flex flex-col md:flex-row items-start gap-4">
        <div className="w-full md:w-2/5 flex flex-wrap">
          {Array(5)
            .fill("")
            .map((_, index) => (
              <div key={index} className="w-1/3 md:w-1/5 mb-4">
                <ul className="space-y-0">
                  {[
                    "मध्य प्रदेश",
                    "्वालियर",
                    "ोएड",
                    "रयागराज",
                    "ूर्णिय",
                    "अजमेर",
                    "िकानेर",
                    "धर्मशाल",
                    "ायपुर",
                    "ोहाल",
                  ].map((link, i) => (
                    <li key={i}>{link}</li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
        <div className="w-full md:w-3/5 flex flex-wrap">
          {Array(3)
            .fill("")
            .map((_, index) => (
              <div key={index} className="w-1/2 md:w-1/3 mb-4">
                <ul className="space-y-0">
                   
                  {[
                    "BJP Candidates List 2024",
                    "Bengal Election 2024",
                    "UP Police Exam Paper Leak…",
                    "UP BJP Candidate List",
                    "Sandeshkhali Case",
                    "West Samajwadi Party",
                    "IPL LIVE Score India USA",
                    "Unicorn Compani…",
                    "Ujjain Mahakal Mandir Manoj Bajpayee"

                  ]
                    
                    .map((link, i) => (
                      <li key={i}>{link}</li>
                    ))}
                </ul>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
