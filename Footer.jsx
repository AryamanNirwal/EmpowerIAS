import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-footer text-white mt-3">
      <div className="py-4">
      <div className="p-container mt-4">
        <div className="grid ">
          <div className="lg:col-3  col-12 sm:col-6  p-4 text-sm gap-2 flex flex-column text-left justify-content-left">
            <img
              src="/Empower-logo.png"
              alt="logo"
              className="lg:w-9 mb-3 max-h-3rem"
            />

            <div className=" flex gap-3">
              <i className="pi pi-map-marker text-sm "></i>
              <small>
                60/6, Behind Yes Bank Bada Bazar Road, Old Rajinder Nagar,New
                Delhi- 110060
              </small>
            </div>

            <div className=" flex gap-3">
              <i className="pi pi-phone "></i>
              <small> 01149409261</small>
            </div>
            <div className=" flex gap-3">
              <i className="pi pi-phone "></i>
              <small>9643777673</small>
            </div>
            <div className=" flex gap-3">
              <i className="pi pi-whatsapp"></i>
              <small> 8470940655</small>
            </div>
            <div className="flex gap-3">
              <i className="pi pi-envelope "></i>
              <small>empoerias@gamil.com</small>
            </div>
          </div>

          {/* Quick Links------ */}

          <div className=" lg:col-3 col-12 sm:col-6  border-quick-links border-400">
            <h1 className="font-normal text-2xl  pl-3">Quick Links</h1>

            <div className="flex flex-column pl-3 gap-2">
              <div>
                <i className="pi pi-angle-right"></i>
                <Link href="/" className="no-underline text-white pl-2 text-sm">
                  About us
                </Link>
              </div>

              <div>
                <i className="pi pi-angle-right"></i>
                <Link href="/" className="no-underline text-white pl-2 text-sm">
                  Contact us
                </Link>
              </div>

              <div>
                <i className="pi pi-angle-right"></i>
                <Link href="/" className="no-underline text-white pl-2 text-sm">
                  Download
                </Link>
              </div>

              <div>
                <i className="pi pi-angle-right"></i>
                <Link href="/" className="no-underline text-white pl-2 text-sm">
                  Career
                </Link>
              </div>

              <div>
                <i className="pi pi-angle-right"></i>
                <Link href="/" className="no-underline text-white pl-2 text-sm">
                  Courses
                </Link>
              </div>

              <div>
                <i className="pi pi-angle-right"></i>
                <Link href="/" className="no-underline text-white pl-2 text-sm">
                  Gallery
                </Link>
              </div>
              <div>
                <i className="pi pi-angle-right"></i>
                <Link href="/" className="no-underline text-white pl-2 text-sm">
                  Daily Quiz
                </Link>
              </div>
            </div>
          </div>

          {/* More Links------- */}

          <div className="lg:col-3 col-12 sm:col-6 border-more-links border-400 ">
            <h1 className="font-normal text-2xl  pl-3">
              More Links
            </h1>

            <div className="flex flex-column pl-3 gap-2">
             <div >
                <i className="pi pi-angle-right"></i>
                <Link href="/" className="no-underline text-white pl-2 text-sm">
                  Faqs
                </Link>
              </div> 
              <div>
                <i className="pi pi-angle-right"></i>
                <Link href="/" className="no-underline text-white pl-2 text-sm">
                  Register
                </Link>
              </div>

              <div>
                <i className="pi pi-angle-right"></i>
                <Link href="/" className="no-underline text-white pl-2 text-sm">
                  Photo Gallery
                </Link>
              </div>

              <div>
                <i className="pi pi-angle-right"></i>
                <Link href="/" className="no-underline text-white pl-2 text-sm">
                  Video Gallery
                </Link>
              </div>

              <div>
                <i className="pi pi-angle-right"></i>
                <Link href="/" className="no-underline text-white pl-2 text-sm">
                  Student Login
                </Link>
              </div>

              <div>
                <i className="pi pi-angle-right"></i>
                <Link href="/" className="no-underline text-white pl-2 text-sm">
                  Privacy Policy
                </Link>
              </div>

              <div>
                <i className="pi pi-angle-right"></i>
                <Link href="/" className="no-underline text-white pl-2 text-sm">
                  Terms & Condition
                </Link>
              </div>

              <div>
                <i className="pi pi-angle-right"></i>
                <Link href="/" className="no-underline text-white pl-2 text-sm">
                  QR CODE
                </Link>
              </div>


            </div>
          </div>



        {/* Image  ---- */}


          <div className="lg:col-3 col-12 sm:col-6 ">
            <div className="flex flex-column p-5 ml-3 gap-4 justify-content-center align-items-center">
              <img src="/play-store.png" alt="google-playstore" className="w-max h-3rem"  />
              <img src="qr-code.png" alt="qr-code" className="w-max h-6rem "  />
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Footer;
