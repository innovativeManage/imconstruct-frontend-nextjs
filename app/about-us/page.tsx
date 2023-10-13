import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import React from "react";

export default function AboutUs() {
  return (
    <div>
      <Navbar />
      <div className={"pt-20"}>
        <section className="p-4">
          <h1 className="flex text-black text-xl sm:text-2xl md:text-3xl tracking-wide font-bold items-center justify-center mb-4">
            About Us
          </h1>
          <div className="flex mb-4 text-black text-center text-lg sm:text-xl md:text-2xl tracking-wide font-bold items-center justify-center">
            We are the specialists you need!
          </div>
          <div className="flex items-center justify-center">
            <video autoPlay loop muted className="object-cover max-h-[400px]">
              <source src="/work.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="flex flex-col items-center justify-center mx-2 md:mx-8 lg:mx-32">
            <div className="flex mb-4 text-black text-center text-xl tracking-wide font-bold">
              iMaintain Associates
            </div>
            <div className="flex mb-4 text-black">
              iMaintain is a facilities maintenance and construction business
              that provides quality services to a variety of customers. Our
              experienced team of professionals is committed to delivering
              results that meet the highest standards of quality.
            </div>
            <div className="flex mb-4 text-black">
              We work with a wide range of clients in many different industries,
              and strive to provide solutions that are tailored to their
              individual needs. With our expertise and commitment to excellence,
              we make sure that our customers are happy with the services we
              provide.
            </div>
          </div>
          <div className="flex flex-wrap items-center space-x-12 space-y-12 justify-center">
            <div className="flex flex-col items-center justify-center max-w-[400px]">
              <p className="text-black text-xl font-bold">Our Mission</p>
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
            <div className="flex m-4">
              <img src="116.webp" height={"400px"} width={"400px"} />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
