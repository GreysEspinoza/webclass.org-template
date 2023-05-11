import { useTranslation } from "react-i18next";
import faqDataEn from "@config/faq.json";
import faqDataEs from "@config/faq.es.json";

function Faq({ data }) {
  const { frontmatter } = data;
  //const { title } = frontmatter;

  // get the current language from react-i18next
  const { t, i18n } = useTranslation();

  // set the faq data based on the current language
  const faqData = i18n.language === "es" ? faqDataEs.faqs : faqDataEn.faqs;
  const title = i18n.language === "es" ? faqDataEs.title : faqDataEn.title;

  return (
    <section className="section">
      <div className="container">
        <h1 className="text-center font-normal">{title}</h1>
        <div className="section row  -mt-6">
          {faqData.map((faq, index) => (
            <div key={index} className="col-12 mt-6 md:col-6">
              <div className="p-12  shadow">
                <div className="faq-head relative">
                  <h4>{faq.title}</h4>
                </div>
                <p className="faq-body mt-4">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
