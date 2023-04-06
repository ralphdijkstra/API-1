import placeholder from "../../Assets/placeholder.png";
export default function HeroSection() {
  return (
    <div
      className="h-[100vh] absolute top-0 w-full"
      style={{
        backgroundImage: `url(${placeholder})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="relative w-full h-full">
        <div
          id="fadebg"
          className="transition-all duration-700 ease-in-out bg-gradient-to-b from-[#010414]/20 via-[#010414]/20 to-[#010414]/100 h-full bg-no-repeat flex w-full"
        ></div>
      </div>
    </div>
  );
}
