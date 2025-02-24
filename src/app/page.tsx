"use client";
import Image from "next/image";
import { Phone, ArrowRightLeft, BarChart3 } from "lucide-react"; //for the icons
import { RoughNotation } from "react-rough-notation"; //for the highlight
import Head from "next/head"; //for the head tag

export default function Home() {

  return (
    <>
    <Head>
    <title>EffiGov - AI Call Agent for Public Safety</title>
    </Head>

    <div className="min-h-screen bg-background text-foreground font-[family-name:var(--font-geist-sans)]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-4 bg-background/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Image
            src="/effigov-logo.svg"
            alt="EffiGov Logo"
            width={150}
            height={60}
            priority
          />
          <a
            href="https://duke.qualtrics.com/jfe/form/SV_1Y57cCPnWzStF30"
            className="rounded-full bg-foreground text-background px-6 py-2 text-sm font-semibold hover:bg-[#B2E3FF] transition-opacity"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a Demo
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-row items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Left Column: Text and Button */}
        <div className="w-full max-w-2xl flex flex-col justify-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-center sm:text-left">
            AI Call Agent for Public Safety
          </h1>
          <p className="max-w-2xl text-lg mb-8 text-center sm:text-left">
            Real-time phone assistant that routes and triages non-emergency calls, escalates urgent admin calls to human operators, and integrates seamlessly with your CAD system.
          </p>
          <a
            href="https://duke.qualtrics.com/jfe/form/SV_1Y57cCPnWzStF30"
            className="rounded-full bg-foreground text-background px-8 py-4 text-lg font-semibold hover:bg-[#B2E3FF] transition-opacity self-center sm:self-start"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a Demo
          </a>
        </div>

        {/* Right Column: Desktop View Image */}
        <div className="w-full max-w-2xl flex items-center justify-center">
          <Image
            src="/Desktop View.svg"
            alt="Desktop View"
            width={600}
            height={400}
            priority
            className="object-contain"
          />
        </div>
      </section>



      {/* Product Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/[.03] dark:bg-white/[.03]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">
            AI for ECCs: triaging non-emergency calls
          </h2>
          <p className="text-lg text-center">
            The average vacancy rate in American 9-1-1 centers is 25%. Call centers are understaffed and overworked, but over 70% of incoming calls are non-emergent.{" "}
            <RoughNotation
              type="box"
              show={true}
              color="#B2E3FF"
              strokeWidth={2}
              padding={2.5}
              animationDuration={3000}
            >
              We'll let you focus on the 30%
            </RoughNotation>
          </p>
        </div>
      </section>
      {/* Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center flex flex-col items-center">
            <Phone className="w-8 h-8 mb-4" />
            <h3 className="text-xl font-bold mb-4">AI-Driven Call Triage</h3>
            <p>Automatically transcribe calls and identify call intent. Route non-emergency calls to appropriate municipal departments.</p>
          </div>
          <div className="text-center flex flex-col items-center">
            <ArrowRightLeft className="w-8 h-8 mb-4" />
            <h3 className="text-xl font-bold mb-4">Integration</h3>
            <p>Seamless integration with your 9-1-1 Computer Automated Dispatch system </p>
          </div>
          <div className="text-center flex flex-col items-center">
            <BarChart3 className="w-8 h-8 mb-4" />
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

      {/* Global Highlight Style */}
      <style jsx global>{`
        .highlight {
          background-color: #B2E3FF;
          padding: 0.2em 0.4em;
          border-radius: 0.2em;
        }
      `}</style>
    </div>
    </>
  );
}
