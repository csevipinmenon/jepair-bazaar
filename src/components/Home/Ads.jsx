import React from "react";
import { useState } from "react";

function Ads() {
  const [showAd, setShowAd] = useState(true);

  const handleClose = () => {
    setShowAd(false);
  };
  if (!showAd) return null;

  return (
    <div className=" sm:flex justify-around items-center sm:px-7 sm:py-10 py-10 px-20  shadow">
      <div>
        <div
          style={{
            position: "relative",
            width: "300px",
            height: "250px",
          }}
        >
          {/* Close (Cut) Button */}
          <button
            onClick={handleClose}
            style={{
              position: "absolute",
              top: "10px",
              right: "0px",
              background: "#ff4d4d",
              color: "white",
              border: "none",
              borderRadius: "50%",
              width: "25px",
              height: "25px",
              cursor: "pointer",
              zIndex: 10,
            }}
          >
            <abbr title="cut" className="no-underline">✕</abbr> 
          </button>

          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <video width="100%" height="100%" autoPlay muted loop>
              <source src="jepairMassage.mp4" type="video/mp4" />
            </video>
          </div>
          <span className="relative left-28 text-blue-400">Ads</span>
        </div>
      </div>
      <div
        style={{
          position: "relative",
          width: "300px",
          height: "250px",
          padding: "5px",
        }}
      >
        {/* Close (Cut) Button */}
        <button
          onClick={handleClose}
          style={{
            position: "absolute",
            top: "10px",
            right: "0px",
            background: "#ff4d4d",
            color: "white",
            border: "none",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            cursor: "pointer",
            zIndex: 10,
          }}
        >
         <abbr title="cut" className="no-underline">✕</abbr> 
        </button>

        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <video width="100%" height="100%" autoPlay muted loop>
            <source src="jepairmsg.mp4" type="video/mp4" />
          </video>
        </div>
        <span className="relative left-28 text-blue-400">Ads</span>
      </div>
      <div></div>
    </div>
  );
}

export default Ads;
