import React from "react";

const FooterBottom = () => {
  return (
   <div className="bg-footerBottom">
      <div className="p-container">

      <div className="flex  p-1 col-12 md:col-12">
        <div className="col-6 text-white justify-content-center">
          <h2 className="m-0 text-sm font-medium ml-6">
            Copyright © EMPOWER IAS. All Right Reversed.Powered By EDUKIT{" "}
          </h2>
        </div>

        <div className="col-6  text-white flex justify-content-end gap-3 text-align-end pr-6">
          <i className="pi pi-facebook border-circle text-xl"></i>
          <i className="pi pi-youtube border-circle text-xl"></i>
          <i className="pi pi-whatsapp  border-circle text-xl"></i>
          <i className="pi pi-telegram  border-circle text-xl"></i>
          <i className="pi pi-twitter border-circle text-xl"></i>
          <i className="pi pi-instagram border-circle text-xl"></i>
        </div>
      </div>
    </div>
   </div>
  );
};

export default FooterBottom;


