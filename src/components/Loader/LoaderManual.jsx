import { ColorRing } from "react-loader-spinner";
import React from "react";

function LoaderManual({ show }) {
  if (!show) return null;
  return (
    <div style={{ textAlign: "center", marginTop: "300px" }}>
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
      />
    </div>
  );
}

//jaha bhi use karenge (manual loader whenever call api,fetch data from bakend befor on after close loader)
//const [loading, setLoading] = useState(true);
// <Loading show={loading} />

export default LoaderManual;
