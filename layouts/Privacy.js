import { markdownify } from "@lib/utils/textConverter";

function Privacy({ data }) {
  const { frontmatter } = data;
  const { title, faqs } = frontmatter;
  return (
    <section className="section">
      <div className="container">
        <p className="intro-text">
          At MyWebClass.org, we prioritize your privacy and are dedicated to protecting your personal information. This Privacy Policy outlines how we collect, use, and secure your information, as well as the choices you have regarding the collection and use of your data. By using our website and services, you agree to the terms of this Privacy Policy.
          <br />
          <br />
          MyWebClass.org is fully committed to implementing the General Data Protection Regulation (GDPR) for users in the European Union (EU). If you are located within the EU, please be aware that our GDPR compliance measures are explicitly addressed in this Privacy Policy.
        </p>
        {markdownify(title, "h1", "text-center font-normal")}
        <div className="section row -mt-6">
          {faqs.map((faq, index) => (
            <div key={index} className="col-12 mt-6 md:col-6">
              <div className="p-12 shadow">
                <div className="faq-head relative">
                  {markdownify(faq.title, "h4")}
                </div>
                {markdownify(faq.answer, "p", "faq-body mt-4")}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Privacy;
