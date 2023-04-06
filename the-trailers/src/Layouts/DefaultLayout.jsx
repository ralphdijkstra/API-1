import Footer from "../Components/Client/Footer";
import Navbar from "../Components/Client/Navbar";

export default function DefaultLayout({ children }) {
  return (
    <div className="bg-[#010414] text-white min-h-screen h-fit relative">
      <div className="z-[999] px-6 lg:px-[10rem] py-[3rem] sticky -top-2 transition-all duration-300 ease-in-out">
        <Navbar />
      </div>
      <div>{children}</div>
      <Footer />
    </div>
  );
}
