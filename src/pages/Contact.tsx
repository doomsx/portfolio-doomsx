import ContactDetails from "../components/ContactDetails";
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <section
      className="md:flex md:h-screen md:flex-col md:justify-center md:items-center mb-5"
      id="Contact"
    >
      <h1 className="text-2xl mb-5 font-bold md:text-5xl md:mb-10 text-accent text-center">
        Contact
      </h1>
      <div className="flex flex-col gap-3 px-0 md:flex-row md:w-full md:px-10">
        <ContactForm />
        <ContactDetails />
      </div>
    </section>
  );
}

export default Contact;
