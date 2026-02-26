export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-cream">
      <div className="flex flex-col items-center">
        {/* Animated gold ring */}
        <div className="relative w-16 h-16 mb-6">
          <div className="absolute inset-0 rounded-full border-2 border-gold/10" />
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-gold animate-spin" />
        </div>

        {/* Brand */}
        <h1 className="font-playfair text-2xl font-bold text-darkbg mb-1">
          Beauty Lounge
        </h1>
        <p className="font-inter text-xs text-gold/60 tracking-[0.25em] uppercase">
          Loading
        </p>
      </div>
    </div>
  );
}
