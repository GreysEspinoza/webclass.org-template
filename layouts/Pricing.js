import Link from "next/link";
import Cta from "./components/Cta";

function Pricing({ data }) {
  const {
    frontmatter: { title, plans, call_to_action },
  } = data;
  return (
    <>
      <section className="section pb-0">
        <div className="container">
          <h1 className="text-center font-normal">{title}</h1>
          {/* Add the About description and other content here */}
          <div className="about-content">
            <h2>About Us</h2>
            <p>
              Embark on an enlightening journey with MyWebClass.org, an online platform meticulously designed to transform the way educators impart knowledge in software engineering and advanced technologies. Our sage-guided mission is to empower educators and students by providing a wealth of cutting-edge resources, tools, and strategies, enabling them to excel in the ever-evolving realm of technology in education.
            </p>

            <h2>Our Team</h2>
            <p>
              Our team at MyWebClass.org consists of knowledgeable instructors and seasoned industry professionals who are deeply passionate about fostering the future of education. With diverse expertise in software engineering, artificial intelligence, machine learning, and more, our team members are dedicated to sharing their wisdom and insights, helping educators redefine their pedagogical methods and inspire their students.
            </p>

            <h2>Our Offerings</h2>
            <p>
              MyWebClass.org presents a comprehensive library of online courses, workshops, and interactive content, each thoughtfully curated to cater to the distinct needs of educators and students in software engineering and advanced technologies. We constantly refine our offerings to ensure you stay abreast of the latest industry advancements.
            </p>

            <h2>Our Community</h2>
            <p>
              We value the cultivation of a collaborative and supportive environment where educators and students can share their experiences, seek answers to their questions, and learn from one another. Our platform boasts a vibrant community space where users can engage in profound discussions, collaborate on projects, and forge lasting connections with like-minded individuals.
            </p>

            <h2>Get in Touch</h2>
            <p>
              We warmly welcome your thoughts and inquiries. Whether you have a question, require support, or wish to share your feedback, feel free to contact us via our website's contact form. Our devoted support team stands ready to assist you, ensuring your experience with MyWebClass.org is as rewarding and fulfilling as possible. Join us today, and commence your journey towards reshaping your educational approach and sculpting the future of software engineering and advanced technology education.
            </p>
          </div>
        </div>
      </section>
      <Cta cta={call_to_action} />
    </>
  );
}

export default Pricing;
