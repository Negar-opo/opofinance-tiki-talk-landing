import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ReviewsMarquee from "@/components/ReviewsMarquee";
import Agenda from "@/components/Agenda";
import LiveDesk from "@/components/LiveDesk";
import ReserveSeat from "@/components/ReserveSeat";
import WhyOpofinance from "@/components/WhyOpofinance";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative flex flex-1 flex-col bg-black">
      <Header />
      <Hero />
      <ReviewsMarquee />
      <Agenda />
      <LiveDesk />
      <ReserveSeat />
      <WhyOpofinance />
      <Faq />
      <Footer />
    </div>
  );
}
