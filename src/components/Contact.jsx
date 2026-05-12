function Contact() {
  return (
    <section className="bg-slate-900 text-white py-20 px-8">

      <div className="max-w-4xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-12">
          Contact Us
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Let's Grow Your Business 🚀
            </h3>

            <p className="text-slate-300 mb-4">
              Contact us for digital marketing, website development, branding and paid ads services.
            </p>

            <p className="text-slate-300">
              Email: info@nitaagency.com
            </p>

            <p className="text-slate-300 mt-2">
              Phone: +91 8780284298
            </p>
          </div>

          <form className="space-y-4">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700"
            />

            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700"
            ></textarea>

            <button
              className="bg-blue-600 px-6 py-3 rounded-xl hover:bg-blue-700 transition"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Contact;