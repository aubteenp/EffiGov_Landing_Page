import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-[family-name:var(--font-geist-sans)]">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/hero-bg.jpg"
            alt="Public Safety AI Technology"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        
        <Image
          src="/effigov-logo.svg"
          alt="EffiGov Logo"
          width={200}
          height={80}
          className="mb-8"
          priority
        />
        
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
          AI Call Agent for Public Safety
        </h1>
        
        <p className="max-w-2xl text-lg mb-8">
          Real-time phone assistant that routes and triages non-emergency calls, escalates urgent admin calls to human operators, and integrates seamlessly with your CAD system.
        </p>
        
        <a
          href="https://duke.qualtrics.com/jfe/form/SV_1Y57cCPnWzStF30"
          className="rounded-full bg-foreground text-background px-8 py-4 text-lg font-semibold hover:opacity-90 transition-opacity"
          target="_blank"
          rel="noopener noreferrer"
        >
          Book a Demo
        </a>
      </section>

      {/* Product Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/[.03] dark:bg-white/[.03]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">
            AI OS for local gov: triaging non-emergency calls
          </h2>
          <p className="text-lg text-center">
            The average vacancy rate in American 9-1-1 centers is 25%. Call centers are understaffed and overworked, but over 70% of calls are non-emergent.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">AI-Driven Call Triage</h3>
            <p>Automatically transcribe calls and identify call intent. Route non-emergency calls to appropriate municipal departments.</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">Integration</h3>
            <p>Seamless integration with 9-1-1 Computer Automated Dispatch (CAD) systems (e.g., CentralSquare)</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">Analytics</h3>
            <p>Real-time analytics to monitor call trends and improve service delivery</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-black/[.03] dark:bg-white/[.03]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
            <div>
              <Image
                src="/effigov-logo.svg"
                alt="EffiGov Logo"
                width={150}
                height={60}
                className="mb-4"
              />
              <p className="text-sm">All rights reserved. Copyright © 2025</p>
            </div>
            <div className="flex flex-col sm:items-end gap-2">
              <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
              <a href="mailto:ap675@duke.edu" className="hover:underline">Contact Us</a>
              <a 
                href="https://www.linkedin.com/company/demos-gov/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
