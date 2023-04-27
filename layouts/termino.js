import { markdownify } from "@lib/utils/textConverter";

function termino({ data }) {
  const { frontmatter } = data;
  const { title, faqs } = frontmatter;
  return (
    <section className="section">
      <div className="container">
        <p className="intro-text">
         At MyWebClass.org,This page aims to provide an educational platform for technology lovers where they can learn more about the most recent advances in this field. As a user of our website, it is important that you understand the terms and conditions that govern the use of our services. By accessing our website, you agree to be bound by these terms and conditions, which are outlined below. These terms and conditions may be updated or changed at any time without prior notice. We recommend that you regularly review these terms of use to be aware of any changes.
         If you have any questions or comments about these terms of use, please contact us through our contact form.</p>
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

export default termino;
