import config from "@config/config.json";
import contactDataEN from "@config/contact.json";
import contactDataES from "@config/contact.es.json";
import { useTranslation } from "react-i18next";

const Contact = ({ data }) => {
  const { frontmatter } = data;
  // const { title } = frontmatter; // remove this line
  const { contact_form_action } = config.params;

  // get the current language from react-i18next
  const { t, i18n } = useTranslation();

  // set the contact data based on the current language
  const contactData =
    i18n.language === "es" ? contactDataES.info : contactDataEN.info;
  const title = i18n.language === "es" ? contactDataES.title : contactDataEN.title;

  return (
    <section className="section">
      <div className="container">
        <h1 className="text-center font-normal">{title}</h1>
        <div className="section row pb-0">
          <div className="col-12 md:col-6 lg:col-7">
            <form
              className="contact-form"
              method="POST"
              action={contact_form_action}
            >
              <div className="mb-3">
                <input
                  className="form-input w-full rounded"
                  name="name"
                  type="text"
                  placeholder={t("Name")}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  className="form-input w-full rounded"
                  name="email"
                  type="email"
                  placeholder={t("Your email")}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  className="form-input w-full rounded"
                  name="subject"
                  type="text"
                  placeholder={t("Subject")}
                  required
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-textarea w-full rounded-md"
                  rows="7"
                  placeholder={t("Your message")}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                {t("Send Now")}
              </button>
            </form>
          </div>
          <div className="content col-12 md:col-6 lg:col-5">
            <h4>{contactData.title}</h4>
            <p className="mt-4">{contactData.description}</p>
            <ul className="contact-list mt-5">
              {contactData.contacts.map((contact, index) => (
                <li key={index}>
                  <strong className="text-dark">{contact}</strong>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
