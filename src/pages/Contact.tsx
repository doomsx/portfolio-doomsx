import ContactDetails from "../components/ContactDetails";
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <section className="h-screen flex justify-center items-center" id="Contact">
      <div className="flex flex-col md:flex-row gap-3 w-full px-10">
        <ContactForm />
        <ContactDetails />
      </div>
    </section>
  );
}

export default Contact;
