// src/components/StatsStrip.jsx
function StatsStrip() {
  return (
    <section
      className="
        bg-slate-900
        text-white
        py-8
        sm:py-10
        md:py-12
        lg:py-14
      "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-3
            gap-6
            sm:gap-8
            text-center
          "
        >
          {/* Stat Item */}
          <div className="space-y-1">
            <h3
              className="
                font-bold
                text-primary
                text-2xl
                sm:text-3xl
                md:text-4xl
                lg:text-5xl
              "
            >
              17+
            </h3>
            <p
              className="
                text-xs
                sm:text-sm
                md:text-base
                text-slate-400
                font-medium
              "
            >
              Years Experience
            </p>
          </div>

          {/* Stat Item */}
          <div className="space-y-1">
            <h3
              className="
                font-bold
                text-primary
                text-2xl
                sm:text-3xl
                md:text-4xl
                lg:text-5xl
              "
            >
              1000+
            </h3>
            <p
              className="
                text-xs
                sm:text-sm
                md:text-base
                text-slate-400
                font-medium
              "
            >
              Happy Clients
            </p>
          </div>

          {/* Stat Item */}
          <div className="space-y-1">
            <h3
              className="
                font-bold
                text-primary
                text-2xl
                sm:text-3xl
                md:text-4xl
                lg:text-5xl
              "
            >
              5000+
            </h3>
            <p
              className="
                text-xs
                sm:text-sm
                md:text-base
                text-slate-400
                font-medium
              "
            >
              Shipments
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StatsStrip;
