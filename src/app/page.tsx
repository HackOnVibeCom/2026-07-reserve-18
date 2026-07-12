"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Mic, MessageSquare, Rocket, Flame, ArrowRight, ShieldAlert, Newspaper, Search, Briefcase, CheckCircle2, Terminal, Scale, AlertTriangle, Zap } from "lucide-react";
import { bind } from "cuelume";

export default function LandingPage() {

  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).AOS) {
      (window as any).AOS.init({ duration: 700, easing: "ease-out-cubic", once: true });
    } else {
      const timer = setInterval(() => {
        if ((window as any).AOS) {
          (window as any).AOS.init({ duration: 700, easing: "ease-out-cubic", once: true });
          clearInterval(timer);
        }
      }, 100);
    }
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center w-full overflow-hidden bg-[var(--bg)]">
      {/* -----------------------------
          HERO SECTION (Preserved)
      ------------------------------ */}
      <section className="w-full relative flex flex-col items-center justify-center px-6 pt-[min(15vh,120px)] pb-[10vh] border-b border-[var(--line)]">
        <div className="absolute inset-0 pointer-events-none select-none max-w-[1200px] mx-auto hidden md:block z-0">
          <span className="absolute top-[15%] left-[5%] text-[var(--ink)] opacity-[0.04] blur-[2px] font-display text-2xl transform -rotate-6">"This isn't different."</span>
          <span className="absolute top-[35%] right-[8%] text-[var(--ink)] opacity-[0.04] blur-[2px] font-display text-xl transform rotate-3">"Wouldn't use this."</span>
          <span className="absolute top-[65%] left-[10%] text-[var(--ink)] opacity-[0.04] blur-[2px] font-display text-3xl transform rotate-12">"What's new?"</span>
          <span className="absolute top-[75%] right-[12%] text-[var(--ink)] opacity-[0.04] blur-[2px] font-display text-2xl transform -rotate-3">"Sounds interesting..."</span>
          <span className="absolute top-[10%] right-[30%] text-[var(--ink)] opacity-[0.04] blur-[2px] font-display text-xl">↑ 124</span>
          <span className="absolute top-[85%] left-[25%] text-[var(--ink)] opacity-[0.04] blur-[2px] font-display text-2xl transform rotate-6">"Already exists"</span>
          <span className="absolute top-[50%] left-[2%] text-[var(--ink)] opacity-[0.04] blur-[2px] font-display text-xl transform -rotate-12">"No."</span>
        </div>

        <div className="w-full max-w-[640px] flex flex-col items-center relative z-10">
          <div className="flex flex-row items-center justify-center gap-[8px] mb-[28px] text-[0.95rem] text-[var(--muted)] tracking-[0.01em]" data-aos="fade-up">
            <img src="/logo.png" alt="Heckle Logo" className="w-5 h-5 object-contain drop-shadow-sm" />
            <span>Practice launches. Real reactions.</span>
          </div>

          <h1 className="font-display text-[clamp(2.25rem,5vw,3.25rem)] leading-[1.18] tracking-[-0.015em] text-[var(--ink)] text-center mb-[44px]">
            <div data-aos="fade-up" data-aos-delay="100">
              the app where your
              <span className="wordmark">
                <span style={{ background: "var(--chip-a)", transform: "rotate(-4deg)" }}>H</span>
                <span style={{ background: "var(--chip-b)", transform: "rotate(3deg)" }}>E</span>
                <span style={{ background: "var(--chip-c)", transform: "rotate(-2deg)" }}>C</span>
                <span style={{ background: "var(--chip-a)", transform: "rotate(4deg)" }}>K</span>
                <span style={{ background: "var(--chip-b)", transform: "rotate(-3deg)" }}>L</span>
                <span style={{ background: "var(--chip-c)", transform: "rotate(2deg)" }}>E</span>
              </span>
              launch meets
            </div>
            <div data-aos="fade-up" data-aos-delay="200" className="flex items-center justify-center gap-2">
              <span className="icon-chip">
                <MessageSquare className="w-full h-full" />
              </span>
              real reactions
            </div>
            <div data-aos="fade-up" data-aos-delay="300" className="flex items-center justify-center gap-2">
              before your
              <span className="icon-chip">
                <Rocket className="w-full h-full" />
              </span>
              launch day does
            </div>
          </h1>

          <Link href="/gauntlet" data-cuelume-press="press" data-cuelume-release="release" data-aos="fade-up" data-aos-delay="400" className="mb-[40px] inline-flex items-center gap-2 rounded-full px-[36px] py-[16px] bg-[var(--accent)] text-white font-bold text-[1.05rem] shadow-[0_10px_24px_rgba(27,143,111,0.28)] -rotate-2 hover:rotate-0 hover:bg-[var(--accent-dark)] hover:shadow-[0_14px_28px_rgba(27,143,111,0.35)] transition-all duration-200 ease-out">
            Run the Gauntlet <ArrowRight className="w-5 h-5" />
          </Link>

          <div className="flex flex-row items-center justify-center gap-[12px] text-[0.9rem] font-semibold text-[var(--muted)]" data-aos="fade-up" data-aos-delay="500">
            <Flame className="w-4 h-4 text-[var(--accent)]" />
            <span>Built for HackOnVibe — one weekend, zero fluff.</span>
            <Flame className="w-4 h-4 text-[var(--accent)]" />
          </div>
        </div>
      </section>

      {/* -----------------------------
          SECTION 1: "How your pitch gets destroyed"
      ------------------------------ */}
      <section className="w-full max-w-[800px] px-6 py-24 flex flex-col items-center">
        <h2 className="font-display text-3xl md:text-4xl text-[var(--ink)] mb-16 text-center" data-aos="fade-up">
          How your pitch gets destroyed
        </h2>
        
        <div className="flex flex-col items-center font-mono text-[var(--ink)]" data-aos="fade-up" data-aos-delay="100">
          <span className="text-xs font-bold text-[var(--muted)] mb-4">YOUR ASSET</span>
          <div className="border border-[var(--line)] rounded-md px-6 py-4 bg-white shadow-sm mb-4">
            "The first app that..."
          </div>
          <div className="h-12 border-l-2 border-dashed border-[var(--line)] mb-4"></div>
          <span className="text-xs font-bold text-[var(--muted)] mb-4 lowercase italic">passes through</span>
          <div className="h-12 border-l-2 border-dashed border-[var(--line)] mb-4"></div>
          
          <div className="border border-[var(--line)] rounded-xl p-6 bg-[var(--accent-soft)] flex flex-col items-center shadow-sm w-64 mb-4">
            <span className="font-display text-xl mb-4">THE GAUNTLET</span>
            <ul className="flex flex-col gap-2 w-full text-sm font-sans font-semibold">
              <li className="flex items-center gap-2"><ShieldAlert className="w-4 h-4 text-[var(--accent)]"/> Early Adopter</li>
              <li className="flex items-center gap-2"><Newspaper className="w-4 h-4 text-[var(--accent)]"/> Tech Journalist</li>
              <li className="flex items-center gap-2"><Search className="w-4 h-4 text-[var(--accent)]"/> App Store Browser</li>
              <li className="flex items-center gap-2"><Zap className="w-4 h-4 text-[var(--accent)]"/> First-Time User</li>
            </ul>
          </div>
          
          <div className="h-12 border-l-2 border-dashed border-[var(--line)] mb-4"></div>
          <span className="text-xs font-bold text-[var(--muted)] mb-4">VERDICT</span>
          <div className="font-display text-6xl text-[var(--accent)] mb-4">68/100</div>
          <p className="text-center font-sans font-medium text-[var(--muted)] italic max-w-[250px]">
            "People understand what it does, but nobody believes they need it."
          </p>
        </div>
      </section>

      {/* -----------------------------
          SECTION 2: "What actually happens"
      ------------------------------ */}
      <section className="w-full bg-[var(--accent-soft)] border-y border-[var(--line)] px-6 py-24 flex flex-col items-center">
        <h2 className="font-display text-3xl md:text-4xl text-[var(--ink)] mb-4 text-center" data-aos="fade-up">
          What actually happens
        </h2>
        <p className="text-[var(--muted)] mb-12 text-center" data-aos="fade-up" data-aos-delay="100">
          Incoming reactions...
        </p>

        <div className="w-full max-w-[500px] flex flex-col border border-[var(--line)] rounded-2xl bg-[var(--bg)] shadow-md overflow-hidden" data-aos="fade-up" data-aos-delay="200">
          <div className="p-4 border-b border-[var(--line)] flex items-center justify-between bg-white">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[var(--accent)]" />
              <span className="font-semibold text-sm text-[var(--ink)]">Early Adopter</span>
            </div>
            <span className="text-xs font-serif italic text-[var(--muted)]">"This already exists."</span>
          </div>
          <div className="p-4 border-b border-[var(--line)] flex items-center justify-between bg-white">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[var(--accent)]" />
              <span className="font-semibold text-sm text-[var(--ink)]">Tech Journalist</span>
            </div>
            <span className="text-xs font-serif italic text-[var(--muted)]">"Where's the story?"</span>
          </div>
          <div className="p-4 border-b border-[var(--line)] flex items-center justify-between bg-white">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[var(--accent)]" />
              <span className="font-semibold text-sm text-[var(--ink)]">App Store Browser</span>
            </div>
            <span className="text-xs font-serif italic text-[var(--muted)]">"Is this a subscription trap?"</span>
          </div>
          <div className="p-4 flex items-center justify-between bg-white">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[var(--accent)]" />
              <span className="font-semibold text-sm text-[var(--ink)]">First-Time User</span>
            </div>
            <span className="text-xs font-serif italic text-[var(--muted)]">"How do I actually use this?"</span>
          </div>
        </div>
      </section>

      {/* -----------------------------
          SECTION 3: Animated Wall of Heckles
      ------------------------------ */}
      <section className="w-full py-20 overflow-hidden bg-[var(--ink)] border-b border-[var(--line)] relative group cursor-crosshair">
        <div className="flex w-[200%] animate-marquee whitespace-nowrap opacity-90 group-hover:[animation-play-state:paused]">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-4 px-2">
              {[
                "This isn't different.", "Too vague.", "What's new?", "I'd scroll.", 
                "Interesting...", "Needs proof.", "Who's this for?", "Just another wrapper.", 
                "Zero moat.", "No clear audience.", "Show me revenue.", "Cool, I guess."
              ].map((msg, idx) => (
                <div key={idx} className="bg-white/10 border border-white/20 rounded-lg px-6 py-4 text-white hover:scale-110 hover:bg-white hover:text-black transition-all duration-300 font-display text-xl select-none">
                  {msg}
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* -----------------------------
          SECTION 4: Meet Your Critics (FBI Dossiers)
      ------------------------------ */}
      <section className="w-full max-w-[1000px] px-6 py-24 flex flex-col items-center">
        <h2 className="font-display text-3xl md:text-4xl text-[var(--ink)] mb-16 text-center" data-aos="fade-up">
          Meet Your Critics
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {[
            {
              name: "EARLY ADOPTER",
              job: "Professional skeptic",
              launches: "12,000+",
              fav: '"This is just X but worse."',
              reject: "92%"
            },
            {
              name: "TECH JOURNALIST",
              job: "Inboxes at 100%",
              launches: "5,000+",
              fav: '"Not a story."',
              reject: "98%"
            },
            {
              name: "APP STORE BROWSER",
              job: "Searching for solutions",
              launches: "N/A",
              fav: '"Looks fake."',
              reject: "85%"
            },
            {
              name: "FIRST-TIME USER",
              job: "Impatient downloader",
              launches: "N/A",
              fav: '"How do I use this?"',
              reject: "70%"
            }
          ].map((d, idx) => (
            <div key={d.name} className="border-t-4 border-[var(--ink)] bg-[var(--bg)] border border-x-[var(--line)] border-b-[var(--line)] p-6 font-mono text-sm" data-aos="fade-up" data-aos-delay={idx * 100}>
              <h3 className="font-bold text-lg mb-6 border-b border-[var(--line)] pb-2">{d.name}</h3>
              <div className="flex justify-between border-b border-[var(--line)] pb-2 mb-2">
                <span className="text-[var(--muted)]">Occupation</span>
                <span className="font-semibold text-right">{d.job}</span>
              </div>
              <div className="flex justify-between border-b border-[var(--line)] pb-2 mb-2">
                <span className="text-[var(--muted)]">Launches seen</span>
                <span className="font-semibold">{d.launches}</span>
              </div>
              <div className="flex justify-between border-b border-[var(--line)] pb-2 mb-2">
                <span className="text-[var(--muted)]">Favorite sentence</span>
                <span className="font-semibold italic text-right">{d.fav}</span>
              </div>
              <div className="flex justify-between pt-2">
                <span className="text-[var(--muted)]">Reject rate</span>
                <span className="font-display text-xl text-[var(--accent)]">{d.reject}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* -----------------------------
          SECTION 5: Before vs After
      ------------------------------ */}
      <section className="w-full bg-[var(--accent)] text-white px-6 py-24 flex flex-col items-center">
        <div className="w-full max-w-[800px]">
          <h2 className="font-display text-3xl md:text-5xl mb-16 text-center" data-aos="fade-up">
            The ROI of Heckle
          </h2>

          <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
            {/* BEFORE */}
            <div className="flex flex-col items-center w-full md:w-1/2" data-aos="fade-up" data-aos-delay="100">
              <span className="text-xs font-bold uppercase tracking-widest mb-4 opacity-70">Before</span>
              <div className="bg-white/10 border border-white/20 p-6 rounded-2xl w-full text-center h-32 flex items-center justify-center italic">
                "We built AI for productivity."
              </div>
              <div className="mt-8 font-display text-4xl opacity-50">41</div>
            </div>

            <ArrowRight className="w-8 h-8 opacity-50 rotate-90 md:rotate-0 my-4 md:my-0 shrink-0" data-aos="fade-in" data-aos-delay="200" />

            {/* AFTER */}
            <div className="flex flex-col items-center w-full md:w-1/2" data-aos="fade-up" data-aos-delay="300">
              <span className="text-xs font-bold uppercase tracking-widest mb-4 text-[#a3e6d2]">After</span>
              <div className="bg-white text-[var(--ink)] border border-[var(--line)] p-6 rounded-2xl w-full text-center h-32 flex items-center justify-center font-medium shadow-xl shadow-black/10">
                "Meetings steal six hours from your week. We give them back."
              </div>
              <div className="mt-8 font-display text-6xl text-white">82</div>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-4" data-aos="fade-up" data-aos-delay="400">
            <div className="bg-black/20 rounded-xl p-4 flex items-center justify-between">
              <span className="font-semibold text-sm">App Store Browser</span>
              <span className="italic text-sm opacity-80">"I'd download this."</span>
            </div>
            <div className="bg-black/20 rounded-xl p-4 flex items-center justify-between">
              <span className="font-semibold text-sm">Early Adopter</span>
              <span className="italic text-sm opacity-80">"Much clearer."</span>
            </div>
          </div>
        </div>
      </section>

      {/* -----------------------------
          SECTION 6 & 10: Checklists (Things Heckle notices + Hall of Shame)
      ------------------------------ */}
      <section className="w-full max-w-[1000px] px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="flex flex-col" data-aos="fade-up">
          <h2 className="font-display text-3xl text-[var(--ink)] mb-8">Things Heckle notices</h2>
          <ul className="space-y-4">
            {["Weak opening", "Empty buzzwords", "Missing differentiation", "No proof", "No urgency", "Overused AI clichés", "Claims without evidence", "No target customer", "Generic positioning"].map(item => (
              <li key={item} className="flex items-center gap-3 text-[var(--ink)] font-medium">
                <CheckCircle2 className="w-5 h-5 text-[var(--accent)] shrink-0" /> {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col" data-aos="fade-up" data-aos-delay="200">
          <h2 className="font-display text-3xl text-[var(--ink)] mb-8">Hall of Shame</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
            <h3 className="font-bold text-sm uppercase tracking-wider text-amber-800 mb-6 border-b border-amber-200 pb-2">Common Launch Crimes</h3>
            <ul className="space-y-3 font-mono text-sm text-amber-900 mb-6">
              {["Revolutionizing", "Next-generation", "AI-powered", "Seamless", "Game-changing", "One-stop platform", "We empower"].map(item => (
                <li key={item} className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-amber-200 border border-amber-400 flex items-center justify-center text-[10px] font-bold">X</div>
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex justify-between items-center border-t border-amber-200 pt-4">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800">Sentences Detected:</span>
              <span className="font-display text-2xl text-red-600">3</span>
            </div>
          </div>
        </div>
      </section>



      {/* -----------------------------
          SECTION 12: Footer
      ------------------------------ */}
      <footer className="w-full flex flex-col items-center justify-center px-6 py-32 bg-[var(--ink)] text-white text-center">
        <h2 className="font-display text-4xl md:text-5xl mb-6 max-w-[600px] leading-tight" data-aos="fade-up">
          One day your launch will meet the internet.
        </h2>
        <p className="text-xl text-white/60 mb-12 max-w-[500px]" data-aos="fade-up" data-aos-delay="100">
          Better to get roasted by four fake critics than four thousand real ones.
        </p>
        <Link
          href="/gauntlet"
          data-cuelume-press="press"
          data-cuelume-release="release"
          data-aos="fade-up"
          data-aos-delay="200"
          className="inline-flex items-center gap-2 rounded-full px-[48px] py-[20px] bg-white text-[var(--ink)] font-bold text-[1.1rem] rotate-2 hover:rotate-0 hover:shadow-[0_14px_28px_rgba(255,255,255,0.15)] transition-all duration-300 ease-out"
        >
          Meet Heckle first <ArrowRight className="w-5 h-5" />
        </Link>
      </footer>
    </main>
  );
}
