import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import BankingFeatures from "@/components/BankingFeatures";
import MultiCurrency from "@/components/MultiCurrency";
import PaymentSystem from "@/components/PaymentSystem";
import Stats from "@/components/Stats";
import Pricing from "@/components/Pricing";
import SmartBanking from "@/components/SmartBanking";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Partners />
      <BankingFeatures />
      <MultiCurrency />
      <PaymentSystem />
      <Stats />
      <Pricing />
      <SmartBanking />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
