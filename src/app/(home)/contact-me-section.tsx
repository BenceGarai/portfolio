import ContactForm from "./contact-form";

export default function ContactMe() {
  return (
    <section
      id="contact"
      className="flex min-h-screen items-center justify-center bg-backround-secondary">
      <div className="grid gap-12">
        <h1 className="text-5xl font-bold text-center">
          Contact <span className="text-secondary">Me</span>
        </h1>
        <ContactForm></ContactForm>
      </div>
    </section>
  );
}
