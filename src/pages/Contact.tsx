import ContactDetails from "../components/ContactDetails";
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <section
      className="md:flex md:justify-center md:items-center"
      id="Contact"
    >
      <div className="flex flex-col gap-3 px-0 md:flex-row md:w-full md:px-10">
        <ContactForm />
        <ContactDetails />
      </div>
    </section>
  );
}

export default Contact;
