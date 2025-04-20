"use Client";

export default function ContactForm() {
  return (
    <form>
      <input type="text" name="name" placeholder="Name"></input>
      <input type="text" name="email" placeholder="Email"></input>
      <input type="text" name="message" placeholder="Message"></input>
      <button type="submit">Send</button>
    </form>
  );
}
