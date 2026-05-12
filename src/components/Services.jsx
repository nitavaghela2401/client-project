function Services() {
  return (
    <section className="py-20 px-8 bg-slate-900 text-white">

      <h2 className="text-4xl font-bold text-center mb-12">
        Our Services
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        <div className="bg-slate-800 p-6 rounded-2xl">
          <h3 className="text-2xl font-semibold mb-4">
            Social Media Marketing
          </h3>

          <p className="text-slate-300">
            We grow your Instagram, Facebook and online brand professionally.
          </p>
        </div>

        <div className="bg-slate-800 p-6 rounded-2xl">
          <h3 className="text-2xl font-semibold mb-4">
            Website Development
          </h3>

          <p className="text-slate-300">
            Modern fast-loading websites for businesses and brands.
          </p>
        </div>

        <div className="bg-slate-800 p-6 rounded-2xl">
          <h3 className="text-2xl font-semibold mb-4">
            Meta Ads Management
          </h3>

          <p className="text-slate-300">
            High-converting Facebook and Instagram ad campaigns.
          </p>
        </div>

      </div>

    </section>
  );
}

export default Services;