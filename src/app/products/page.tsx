import FadeUp from "@/components/ui/FadeUp";
import DetailedProducts from "@/components/sections/DetailedProducts";

interface Props {}

export default function ProductsPage({}: Props) {
  return (
    <div className="min-h-screen pt-32 px-6 lg:px-8 bg-transparent">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="max-w-3xl mb-20 md:mb-28">
          {/* <FadeUp>
            <span className="font-mono text-xs font-semibold tracking-[0.25em] text-[#f1f0ea] uppercase">
              // ALT PROPRIETARY SYSTEMS
            </span>
          </FadeUp> */}
          <FadeUp delay={0.1}>
            <h1 className="font-mono font-bold text-5xl md:text-6xl text-[var(--text-primary)] mt-4 mb-6 leading-[1.1]">
              Our Products
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="font-serif text-[var(--text-secondary)] text-xl md:text-2xl leading-relaxed">
              Our proprietary platforms are engineered to solve critical
              operational, geospatial, and safety challenges. Built on modular
              frameworks, they offer ultimate scalability across diverse
              industries and local ecosystems.
            </p>
          </FadeUp>
        </div>

        {/* Detailed Products Component */}
        <DetailedProducts />
      </div>
    </div>
  );
}
