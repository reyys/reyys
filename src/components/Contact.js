import React from "react";

function Contact() {
  return (
    <div id="contact" className="w-full h-screen text-white bg-[#1A1A40]">
      <div className="flex flex-col h-full items-center justify-center">
        <form method="POST" action="https://getform.io/f/9947f484-fec6-4883-ac00-4f3235af55cb" className="flex flex-col gap-[20px] w-full px-8 max-w-[800px] mt-10">
          <p className="text-2xl md:text-3xl font-semibold border-b-4 inline border-red-500 pb-2 w-max">Contact</p>
          <input className="indent-2 bg-[#ccd6f6]" placeholder="Full Name" name="fullName" />
          <input className="indent-2 bg-[#ccd6f6]" placeholder="Email" name="email" />
          <textarea className="h-[200px] bg-[#ccd6f6] w-full indent-2" name="text" placeholder="Input your message" />
          <button className="border-2 px-3 py-2 mx-auto w-max hover:bg-red-600 duration-300 hover:border-red-600 mt-5">Let's Collaborate</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
