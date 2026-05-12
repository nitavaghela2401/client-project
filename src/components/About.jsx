function About() {
  return (
    <section className="bg-slate-950 text-white py-20 px-8">

      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-4xl font-bold mb-8">
          About Our Agency
        </h2>

        <p className="text-slate-300 text-lg leading-8">
          We are a modern digital marketing agency helping brands grow online through social media marketing, website development, paid advertising, SEO and creative content strategies.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          <div className="bg-slate-900 p-6 rounded-2xl">
            <h3 className="text-3xl font-bold text-blue-400">
              100+
            </h3>

            <p className="mt-2 text-slate-300">
              Projects Completed
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-2xl">
            <h3 className="text-3xl font-bold text-blue-400">
              50+
            </h3>

            <p className="mt-2 text-slate-300">
              Happy Clients
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-2xl">
            <h3 className="text-3xl font-bold text-blue-400">
              5+
            </h3>

            <p className="mt-2 text-slate-300">
              Years Experience
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;