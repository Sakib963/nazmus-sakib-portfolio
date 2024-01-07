import { AiOutlineMail } from "react-icons/ai";
import { RiMessage2Line } from "react-icons/ri";

const Contact = () => {
  return (
    <div className="py-10 px-5 md:px-10" id="contact">
      <div className="text-center mb-10">
        <h2 className="text-3xl border-b inline-block border-black">Contact</h2>
      </div>

      <div className="md:w-3/4 mx-auto p-2 md:p-5 rounded-md border border-gray-400 grid lg:grid-cols-2 gap-6">
        <div className="md:p-5 space-y-3">
          <h3 className="text-xl md:text-2xl font-bold">Get In Touch</h3>
          <p>
            I&apos;m excited to hear from you! Whether you have a question, want
            to collaborate on a project, or just want to say hi, don&apos;t
            hesitate to reach out. Fill in the form below, and I&apos;ll get
            back to you as soon as possible. Looking forward to connecting with
            you!
          </p>
          <p>
            Contact with me through email or social platforms. This contact form
            does not work. I just added this for nothing.
          </p>

          <div className="inline-block">
            <div className="flex gap-2 items-center bg-black text-white px-4 py-2 rounded-md">
              {" "}
              <AiOutlineMail className="text-xl" />
              abdullahnazmussakib@gmail.com
            </div>
          </div>
        </div>
        <div className="md:p-5 space-y-3">
          <h3 className="text-xl md:text-2xl font-bold">Send Me a Message</h3>
          <form className="space-y-3">
            <div className="space-y-1">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email Address"
                className="bg-white p-2 w-full rounded-md text-black"
              />
            </div>
            <div className="space-y-1">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Full Name"
                className="bg-white p-2 w-full rounded-md text-black"
              />
            </div>
            <div className="space-y-1">
              <label>Message</label>
              <textarea
                placeholder="Your Message"
                className="bg-white p-2 w-full rounded-md text-black"
              ></textarea>
            </div>

            <button className="flex gap-2 items-center justify-center w-full bg-black text-white px-4 py-2 rounded-md transition ease-in-out delay-150 hover:scale-95  duration-300">
              <RiMessage2Line />
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
