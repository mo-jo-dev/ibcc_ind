import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const ContactUs = () => {
    return (
        <div class="bg-dot-map text-center h-[400px] bg-no-repeat bg-cover bg-center">
            <div class="">
                <div className="text-[#177599] p-12 text-2xl">- Contact Us -</div>
            </div>
            <div class="">
                <a href="https://www.ibccind.com/?page_id=40" class="" role="button">
                    <span class="bg-[#177599] p-4 rounded-md text-white">Get In Touch</span>
                </a>
            </div>
            <div class="">
                <h2 class="text-[#177599] p-12 text-2xl">And Follow Us On</h2>
            </div>
            <div class="flex justify-center">
                <div class="m-2">
                    <a class="" target="_blank">
                        <span className="text-white  text-5xl cursor-pointer"><FaFacebook className="bg-[#3b5998] p-2"/></span>
                    </a>
                </div>
                <div class="m-2">
                    <a class="" target="_blank">
                        <span className="text-white  text-5xl cursor-pointer"><FaLinkedin className="bg-[#0077b5] p-2"/></span>
                    </a>
                </div>
                <div class="m-2">
                    <a class="" target="_blank">
                        <span className="text-white  text-5xl cursor-pointer"><FaInstagram className="bg-[#262626] p-2"/></span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ContactUs;