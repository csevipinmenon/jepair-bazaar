import { TypeAnimation } from "react-type-animation";

const TypingEffect = () => {
  return (
    <h3 className="top-30 absolute left-10 lg:left-32 lg:top-40 top-28 font-semibold lg:text-4xl  text-2xl text-white z-40">
      India’s Largest{" "}
      <span className="text-orange-500 lg:text-3xl text-2xl font-extrabold">
        <TypeAnimation
          sequence={[
            "Handyman",
            2000,
            "Contractor",
            2000,
            "Beauty Spa",
            2000,
            "Cleaning-pest control",
            2000,
            "Appliance",
            2000,
            "Decoration",
            2000,
            "Maid",
            2000,
            "",
          ]}
          speed={40}
          repeat={Infinity}
          deletionSpeed={30}
        />
      </span>
      <br></br>
      <span className="text-blue-500  font-semibold">Home </span>
      <span className="font-semibold">Service </span>
      Provider
    </h3>
  );
};

export default TypingEffect;
