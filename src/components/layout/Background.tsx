export default function Background() {
  return (
    <>
      {/* Base Background */}
      <div className="fixed inset-0 -z-50 bg-[#050816]" />

      {/* Blue Glow */}
      <div
        className="
          fixed
          top-[-200px]
          left-[-200px]
          h-[500px]
          w-[500px]
          rounded-full
          bg-blue-500/20
          blur-[180px]
          -z-40
        "
      />

      {/* Purple Glow */}
      <div
        className="
          fixed
          bottom-[-250px]
          right-[-250px]
          h-[600px]
          w-[600px]
          rounded-full
          bg-violet-500/20
          blur-[220px]
          -z-40
        "
      />

      {/* Center Glow */}
      <div
        className="
          fixed
          top-1/2
          left-1/2
          h-[350px]
          w-[350px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-400/10
          blur-[180px]
          -z-40
        "
      />
      <div
        className="
            fixed
            inset-0
            -z-30
            opacity-[0.03]
            bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
            bg-[size:80px_80px]
        "
        />

                <div
        className="
            fixed
            inset-0
            -z-20
            opacity-[0.02]
            bg-[url('/noise.png')]
            mix-blend-soft-light
        "
/>
    </>
    
  );
}