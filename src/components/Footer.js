import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { BsTwitterX } from "react-icons/bs";
import { FaSquareFacebook } from "react-icons/fa6";
import { SiTiktok } from "react-icons/si";
import { NavData } from '../Api/Navdata';




function Footer() {
  const options = [
    { label: "About us", href: "/about" },
    { label: "News", href: "/news" },
    { label: "Schedule", href: "/schedule" },
    { label: "Contact", href: "#" },
    // { label: 'Podcast', href: '#' }
  ];
      const currentYear = new Date().getFullYear();
  return (
    <div className="footerholder">
      <div className=" footercontainerflex">
        <div className="footerContainer">
          <div className="footerFlex">
            <div className="ContactLogo">
              <h4>Address</h4>
              <p>
                Plateau Jets SC <br />
                info@plateaujetsSC.com <br />
                08151553780
              </p>
            </div>

            <div className="footerNav">
              <h4>Navigations</h4>

              <div className="footerNavholder">
                {NavData.map((items, index) => (
                  <li key={index}>
                    <a href={items.href}>{items.label}</a>
                  </li>
                ))}
              </div>
            </div>
            <div className="mediaplatforms">
              <h4>Social Media</h4>
              <div className="mediaLink">
                <li>
                  <a href="https://www.facebook.com/profile.php?id=61551130436355">
                    <i class="fa fa-facebook-official" aria-hidden="true"></i>
                    {/* <FaFacebook style={{ color: "#22d55e" }} /> Facebook */}
                    <FaSquareFacebook style={{ color: "#0865fe" }} /> Facebook
                  </a>
                </li>
                <li>
                  <a href="#">
                    <IoLogoWhatsapp style={{ color: "#22d55e" }} /> Whatsapp
                  </a>
                </li>
                <li>
                  <a href="#">
                    <BsTwitterX /> Twitter
                  </a>
                </li>
                <li>
                  <a href="https://www.tiktok.com/@plateaujets.sc">
                    <SiTiktok />
                    Tiktok
                  </a>
                </li>
              </div>
            </div>
          </div>

          <p className="copyrights">
            {" "}
            &copy; {currentYear}. All right resevered. Designed by
            JomiahCreations
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer