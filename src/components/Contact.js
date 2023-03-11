import React from "react";

export default function Contact() {
 return (
    <section id="contact" className="relative items-center">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap w-full h-screen justify-center">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d25550.036462915257!2d10.129379!3d36.824401!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd3307715cefbd%3A0xc68540658398467d!2sCit%C3%A9%20Ettahrir%2C%20Tunis!5e0!3m2!1sen!2stn!4v1678540033934!5m2!1sen!2stn"
          />
          <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md justify-center">
            <div className="lg:w-1/2 px-6 justify-center">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">
                
                Tunis, Tunisia 2042
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-indigo-400 leading-relaxed text-xs" href="mailto:benalimouna1986@gmail.com" target="_blank">
                <p className="mt-1">
                  benalimouna1986@gmail.com
                </p>
              </a>              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
