import React from 'react'
import {Link} from 'react-router-dom'
import {AiTwotoneFileMarkdown, FaGooglePlay, GrApple} from 'react-icons/all'
import {useTranslation} from 'react-i18next'

export const Footer = () => {
  const { t } = useTranslation()


  return (
    <footer>
      <div className="section">
        <span className="title">{t("Scorp App")}</span>
        <Link to="/contact-us" className="text">
          {t("About Us")}
        </Link>
        <Link to="/contact-us" className="text">
          {t("Careers")}
        </Link>
        <Link to="/contact-us" className="text">
          {t("Newsroom")}
        </Link>
        <Link to="/contact-us" className="text">
          {t("Contact")}
        </Link>
      </div>

      <div className="section">
        <span className="title">{t("HELP")}</span>
        <Link to="/contact-us" className="text">
          {t("Support Hub")}
        </Link>
        <Link to="/contact-us" className="text">
          {t("Terms & Conditions")}
        </Link>
        <Link to="/contact-us" className="text">
          {t("Privacy & Cookies")}
        </Link>
        <Link to="/contact-us" className="text">
          {t("Returns & Refunds")}
        </Link>
      </div>

      <div className="section">
        <span className="title">{t("Business")}</span>
        <Link to="/contact-us" className="text">
          {t("Business Center")}
        </Link>
        <Link to="/contact-us" className="text">
          {t("Developer & Publisher")}
        </Link>
        <Link to="/contact-us" className="text">
          {t("Marketing Partnership")}
        </Link>
      </div>

      <div className="section large horizon">
        <AiTwotoneFileMarkdown className="brand-icon" />
        <div className="vertical ml-15">
          <span className="title">{t("Install the app")}</span>
          <span className="text">{t("--Insert scorp motto here --")}</span>
        </div>
      </div>

      <div className="section small">
        <FaGooglePlay className="store-icon" />
        <span className="title fs-13">{t("Get it on Google Play©")}</span>
      </div>

      <div className="section small">
        <GrApple className="store-icon" />
        <span className="title fs-13">{t("Download on the App Store®")}</span>
      </div>
    </footer>
  )
}
