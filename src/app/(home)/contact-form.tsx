"use Client";

export default function ContactForm() {
  return (
    <form className="grid grid-rows-4 gap-5 shadow-lg shadow-black p-10">
      <input
        type="text"
        name="name"
        placeholder="Name"
        className="shadow-md shadow-black p-2"></input>
      <input
        type="text"
        name="email"
        placeholder="Email"
        className="shadow-md shadow-black p-2"></input>
      <input
        type="text"
        name="message"
        placeholder="Message"
        className="shadow-md shadow-black p-2"></input>
      <button
        type="submit"
        className="bg-secondary w-20 h-10 rounded-full text-backround-secondary justify-self-center font-medium">
        Send
      </button>
    </form>
  );
}
