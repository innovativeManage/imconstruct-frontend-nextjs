import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function AboutUs() {
  return (
    <div>
      <Navbar />
      <div className={"pt-20"}>
        <section className="p-4">
          <h1 className="flex text-black text-2xl md:text-3xl lg:text-4xl tracking-wide font-bold items-center justify-center mb-4">
            About Us
          </h1>
          <div className="flex mb-4 text-black text-center text-lg sm:text-xl md:text-2xl tracking-wider items-center justify-center">
            We are the specialists you need!
          </div>
          <div className="flex flex-wrap items-center justify-center">
            <div className="flex items-center justify-center mb-4 m-2 md:m-4 lg:m-16">
              <video autoPlay loop muted className="object-cover max-h-[300px]">
                <source src="/work.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="flex flex-col items-center justify-center max-w-[400px]">
              <h2 className="flex items-center justify-center mb-4 text-black text-center text-xl tracking-wide font-bold">
                iMaintain Associates
              </h2>
              <p className="items-center justify-center mb-4 text-black">
                iMaintain is a facilities maintenance and construction business
                that provides quality services to a variety of customers. Our
                experienced team of professionals is committed to delivering
                results that meet the highest standards of quality.
              </p>
              <div className="items-center justify-center mb-4 text-black">
                We work with a wide range of clients in many different
                industries, and strive to provide solutions that are tailored to
                their individual needs. With our expertise and commitment to
                excellence, we make sure that our customers are happy with the
                services we provide.
              </div>
            </div>
          </div>
          <div className="flex flex-wrap-reverse items-center justify-center">
            <div className="flex flex-col items-center justify-center max-w-[400px]">
              <h2 className="flex items-center justify-center mb-4 text-black text-center text-xl tracking-wide font-bold">
                Our Mission
              </h2>
              <p className="text-black mb-4">
                At iMaintain, we are committed to providing reliable and quality
                maintenance services to our clients. We understand the
                importance of having an efficient and secure home or office, and
                we strive to provide the best possible solutions for our
                customers.
              </p>
              <p className="text-black">
                What sets us apart from other businesses is our commitment to
                giving back to our community, by making sure students find
                employment in our company. We are committed to creating a safe
                and welcoming environment for everyone. This is our mission to
                our community and our customers.
              </p>
            </div>
            <div className="flex m-2 md:m-4 lg:m-16">
              <img src="116.webp" height={"350px"} width={"350px"} />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
