import config from '@/config';

export default function CTA() {
  return (
    <section className={`bg-[${config.theme.colors.secondary}] py-24`}>
      <div className="container px-4 mx-auto max-w-4xl text-center">
        <h2 className="text-6xl font-bold mb-6">
          Ship faster, grow faster
        </h2>
        <p className="text-gray-400 text-xl mb-8">
          Stop spending weeks on payment integrations and pricing pages. Focus on what matters.
        </p>
        <button className={` text-black font-semibold px-8 py-3 rounded-md flex items-center gap-2 mx-auto hover:opacity-90`} style={{ backgroundColor: config.theme.colors.primary }}>
          <svg 
            viewBox="0 0 24 24"
            fill="black"
            className="w-5 h-5"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Get Started Now
        </button>
      </div>
    </section>
  );
}