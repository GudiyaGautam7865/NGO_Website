import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="relative bg-black/90 backdrop-blur-lg text-gray-400 py-12">
      {/* Footer Links Section */}
      <div className="border-t border-gray-500/30 mt-10 pt-10 max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-start md:items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/015/277/729/small/social-organization-logo-social-community-logo-template-illustration-eps-10-free-vector.jpg"
            alt="Logo"
            className="h-8 w-auto"
          />
        </div>

        {/* Footer Sections */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm mt-6 md:mt-0">
          <div>
            <h3 className="text-white text-lg font-semibold">
              {t("footer.solutions")}
            </h3>
            <ul className="mt-4 space-y-2">
              <li>{t("footer.marketing")}</li>
              <li>{t("footer.analytics")}</li>
              <li>{t("footer.automation")}</li>
              <li>{t("footer.commerce")}</li>
              <li>{t("footer.insights")}</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold">
              {t("footer.support")}
            </h3>
            <ul className="mt-4 space-y-2">
              <li>{t("footer.submitTicket")}</li>
              <li>{t("footer.documentation")}</li>
              <li>{t("footer.guides")}</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold">
              {t("footer.company")}
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/about">{t("footer.about")}</Link>
              </li>
              <li>{t("footer.blog")}</li>
              <li>{t("footer.jobs")}</li>
              <li>{t("footer.press")}</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold">
              {t("footer.legal")}
            </h3>
            <ul className="mt-4 space-y-2">
              <li>{t("footer.terms")}</li>
              <li>{t("footer.privacy")}</li>
              <li>{t("footer.license")}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Social Icons & Copyright */}
      <div className="border-t border-gray-500/30 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-4">
        <p className="text-sm">{t("footer.rights")}</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <FaFacebookF className="text-gray-600 hover:text-white cursor-pointer" size={18} />
          <FaTwitter className="text-gray-600 hover:text-white cursor-pointer" size={18} />
          <FaInstagram className="text-gray-600 hover:text-white cursor-pointer" size={18} />
          <FaYoutube className="text-gray-600 hover:text-white cursor-pointer" size={18} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
