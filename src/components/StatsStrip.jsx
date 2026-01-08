// src/components/StatsStrip.jsx
function StatsStrip() {
  return (
    <section className="bg-slate-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Stats 1 */}
          <div>
            <h3 className="text-3xl md:text-4xl font-bold mb-2 text-primary">
              17+
            </h3>
            <p className="text-sm text-slate-400 font-medium">
              Years Experience
            </p>
          </div>

          {/* Stats 2 */}
          <div>
            <h3 className="text-3xl md:text-4xl font-bold mb-2 text-primary">
              1000+
            </h3>
            <p className="text-sm text-slate-400 font-medium">
              Happy Clients
            </p>
          </div>

          {/* Stats 3 */}
          <div>
            <h3 className="text-3xl md:text-4xl font-bold mb-2 text-primary">
              5000+
            </h3>
            <p className="text-sm text-slate-400 font-medium">
              Shipments
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StatsStrip;
