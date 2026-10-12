import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ChatBot from "../components/ChatBot";
import ScrollProgressBar from "../components/ScrollProgressBar";
import SmoothScroll from "../components/SmoothScroll";

function MainLayout({ children }) {
  return (
    <SmoothScroll>
      <ScrollProgressBar />
      <Navbar />
      <main>{children}</main>
      <Footer />
      <ChatBot />
    </SmoothScroll>
  );
}

export default MainLayout;