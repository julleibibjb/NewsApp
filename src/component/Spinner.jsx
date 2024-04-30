import { useState, CSSProperties } from "react";
import "../assets/styles/Home.css";

import PulseLoader from "react-spinners/PulseLoader";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

function Loader() {
  return (
    <div className="loader">
      <PulseLoader
        color={"blue"}
        loading={true}
        cssOverride={override}
        size={15}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default Loader;
