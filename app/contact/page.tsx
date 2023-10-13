import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactFormComponent from "@/components/ContactFormComponent";

export default function Contact() {
  return (
    <div>
      <Navbar />
      <div className={"pt-20"}>
        <section className="p-4">
          <h1 className="flex text-black text-2xl md:text-3xl lg:text-4xl tracking-wide font-bold items-center justify-center mb-4">
            Contact Us
          </h1>
          <p className="text-black text-center text-lg md:text-xl lg:text-2xl">
            (915) 301-3881
          </p>
          <div className="flex items-center justify-center">
            <ContactFormComponent />
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
