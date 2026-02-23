import { useState, useEffect, useRef } from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

/* ============================================================
   DESIGN SYSTEM
   ============================================================ */
const C = {
  bg: "#08080E", bgCard: "#111119", bgEl: "#1A1A26", border: "#222234",
  text: "#EEEEF4", textSoft: "#C8C8D8", muted: "#8888A0", dim: "#555568",
  amber: "#F0A030", amberSoft: "#FFD080", amberGlow: "rgba(240,160,48,0.06)",
  blue: "#3888F0", blueGlow: "rgba(56,136,240,0.06)",
  green: "#38D878", greenGlow: "rgba(56,216,120,0.06)",
  red: "#F05858", purple: "#9868F0", warm: "#F8E8D0",
};
const MAX_W = 880;

/* ============================================================
   PRIMITIVES
   ============================================================ */
const FadeIn = ({ children, delay = 0 }) => {
  const [v, setV] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const rm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (rm) { setV(true); return; }
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setV(true); }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} style={{ opacity: v ? 1 : 0, transform: v ? "none" : "translateY(24px)", transition: `all 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s` }}>
      {children}
    </div>
  );
};

const Section = ({ children, id, style = {} }) => (
  <section id={id} style={{ padding: "120px 24px", maxWidth: MAX_W, margin: "0 auto", ...style }}>
    {children}
  </section>
);

const SectionHead = ({ tag, tagColor = C.amber, headline, sub }) => (
  <div style={{ marginBottom: 56 }}>
    <FadeIn>
      {tag && <div style={{ marginBottom: 16 }}><span style={{ display: "inline-block", padding: "5px 16px", borderRadius: 100, fontSize: 12, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: tagColor, background: tagColor + "12", border: `1px solid ${tagColor}20` }}>{tag}</span></div>}
      <h2 style={{ fontSize: "clamp(30px, 5vw, 44px)", fontFamily: "'Fraunces', serif", fontWeight: 300, color: C.text, lineHeight: 1.15, letterSpacing: "-0.01em", margin: 0 }}>{headline}</h2>
      {sub && <p style={{ fontSize: 18, color: C.muted, maxWidth: 640, marginTop: 16, lineHeight: 1.6, fontWeight: 400 }}>{sub}</p>}
    </FadeIn>
  </div>
);

const Card = ({ children, style = {} }) => (
  <div style={{ background: C.bgCard, borderRadius: 14, border: `1px solid ${C.border}`, padding: "24px", ...style }}>
    {children}
  </div>
);

const ActDivider = ({ label }) => (
  <div style={{ maxWidth: MAX_W, margin: "0 auto", padding: "0 24px" }}>
    <FadeIn>
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <div style={{ flex: 1, height: 1, background: C.border }} />
        <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: C.dim }}>{label}</span>
        <div style={{ flex: 1, height: 1, background: C.border }} />
      </div>
    </FadeIn>
  </div>
);

/* ============================================================
   ACT I — DEFINITION
   ============================================================ */

/* --- 1. HERO --- */
const HeroSection = () => (
  <section style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "80px 24px 60px", position: "relative" }}>
    <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse 600px 400px at 50% 40%, rgba(240,160,48,0.04), transparent)` }} />
    <div style={{ position: "relative", zIndex: 1, textAlign: "center", maxWidth: 780 }}>
      <FadeIn>
        <p style={{ fontSize: 13, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: C.amber, marginBottom: 28 }}>Introducing HyBrAIn</p>
      </FadeIn>
      <FadeIn delay={0.1}>
        <h1 style={{ fontSize: "clamp(40px, 6.5vw, 68px)", fontWeight: 300, fontFamily: "'Fraunces', serif", color: C.text, lineHeight: 1.1, letterSpacing: "-0.02em", margin: "0 0 24px" }}>
          The Missing Layer<br />Between Humans and AI
        </h1>
      </FadeIn>
      <FadeIn delay={0.2}>
        <p style={{ fontSize: "clamp(16px, 2vw, 20px)", color: C.muted, lineHeight: 1.65, maxWidth: 600, margin: "0 auto 48px" }}>
          HyBrAIn is an interaction regulation system that detects cognitive load,
          tracks trust, and intervenes to make AI usage <span style={{ color: C.text, fontWeight: 500 }}>consistent and sustainable</span>.
        </p>
      </FadeIn>
      <FadeIn delay={0.35}>
        <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap", marginBottom: 56 }}>
          {[
            { n: "1", label: "Understand the human", color: C.amber },
            { n: "2", label: "Detect load and trust shifts", color: C.blue },
            { n: "3", label: "Intervene to preserve sustainable use", color: C.green },
          ].map((s, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 20px", background: C.bgCard, borderRadius: 10, border: `1px solid ${C.border}` }}>
              <span style={{ width: 28, height: 28, borderRadius: "50%", background: s.color + "18", color: s.color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700 }}>{s.n}</span>
              <span style={{ fontSize: 14, color: C.textSoft, fontWeight: 500 }}>{s.label}</span>
            </div>
          ))}
        </div>
      </FadeIn>
      <FadeIn delay={0.45}>
        <div style={{ display: "flex", justifyContent: "center", gap: 32, flexWrap: "wrap" }}>
          {[
            { label: "What it is", value: "Interaction regulation layer", color: C.text },
            { label: "What it is not", value: "Not a model, not therapy, not clinical", color: C.dim },
          ].map((d, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: C.muted, marginBottom: 4 }}>{d.label}</div>
              <div style={{ fontSize: 15, color: d.color, fontWeight: 500 }}>{d.value}</div>
            </div>
          ))}
        </div>
      </FadeIn>
    </div>
  </section>
);

/* --- 2. THE PROBLEM --- */
const ProblemSection = () => {
  const bad = [{d:"M",u:95},{d:"T",u:110},{d:"W",u:40},{d:"T",u:15},{d:"F",u:0},{d:"S",u:0},{d:"S",u:120},{d:"M",u:130},{d:"T",u:20},{d:"W",u:0}];
  const good = [{d:"M",u:70},{d:"T",u:65},{d:"W",u:72},{d:"T",u:68},{d:"F",u:60},{d:"S",u:40},{d:"S",u:45},{d:"M",u:70},{d:"T",u:72},{d:"W",u:74}];
  return (
    <Section id="problem">
      <SectionHead tag="The Problem" tagColor={C.red}
        headline={<>The Real Bottleneck Isn't <span style={{ color: C.red }}>AI Capability</span></>}
        sub="It's human interaction sustainability. Most users cycle between overuse and abandonment." />

      <FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16, marginBottom: 48 }}>
          <Card>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}><div style={{ width: 8, height: 8, borderRadius: "50%", background: C.red }} /><span style={{ fontSize: 14, fontWeight: 600, color: C.red }}>Without HyBrAIn</span></div>
            <ResponsiveContainer width="100%" height={140}><AreaChart data={bad}><defs><linearGradient id="gR" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor={C.red} stopOpacity={0.15}/><stop offset="100%" stopColor={C.red} stopOpacity={0}/></linearGradient></defs><CartesianGrid strokeDasharray="3 3" stroke={C.border}/><XAxis dataKey="d" tick={{fill:C.dim,fontSize:11}} axisLine={false} tickLine={false}/><YAxis hide/><Area type="monotone" dataKey="u" stroke={C.red} strokeWidth={2} fill="url(#gR)" dot={false}/></AreaChart></ResponsiveContainer>
            <div style={{ textAlign: "center", fontSize: 13, color: C.red, marginTop: 8 }}>Spike → Crash → Abandon → Repeat</div>
          </Card>
          <Card>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}><div style={{ width: 8, height: 8, borderRadius: "50%", background: C.green }} /><span style={{ fontSize: 14, fontWeight: 600, color: C.green }}>With HyBrAIn</span></div>
            <ResponsiveContainer width="100%" height={140}><AreaChart data={good}><defs><linearGradient id="gG" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor={C.green} stopOpacity={0.15}/><stop offset="100%" stopColor={C.green} stopOpacity={0}/></linearGradient></defs><CartesianGrid strokeDasharray="3 3" stroke={C.border}/><XAxis dataKey="d" tick={{fill:C.dim,fontSize:11}} axisLine={false} tickLine={false}/><YAxis hide/><Area type="monotone" dataKey="u" stroke={C.green} strokeWidth={2} fill="url(#gG)" dot={false}/></AreaChart></ResponsiveContainer>
            <div style={{ textAlign: "center", fontSize: 13, color: C.green, marginTop: 8 }}>Steady → Regulated → Sustainable</div>
          </Card>
        </div>
      </FadeIn>

      {/* User quotes */}
      <FadeIn delay={0.1}>
        <div style={{ marginBottom: 32 }}>
          <div style={{ fontSize: 11, fontWeight: 600, color: C.amber, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 14 }}>From 30+ User Interviews</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12 }}>
            {[
              { q: "AI gets boring after a bit.", who: "Healthcare Consultant", b: "Goal gradient", c: C.amber },
              { q: "AI is so dumb.", who: "Google PM", b: "Uncertainty", c: C.blue },
              { q: "One or two things correct.", who: "Engineering Student", b: "Loss aversion", c: C.red },
              { q: "Gemini is a dud fellow.", who: "General User", b: "Social proof", c: C.purple },
            ].map((q, i) => (
              <Card key={i} style={{ padding: "16px 18px", borderLeft: `3px solid ${q.c}` }}>
                <p style={{ fontSize: 15, color: C.text, fontStyle: "italic", lineHeight: 1.5, margin: "0 0 8px" }}>"{q.q}"</p>
                <div style={{ fontSize: 12, color: C.muted }}>{q.who}</div>
                <span style={{ fontSize: 11, padding: "2px 8px", borderRadius: 4, background: q.c + "12", color: q.c, fontWeight: 600, marginTop: 6, display: "inline-block" }}>{q.b}</span>
              </Card>
            ))}
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.15}>
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center" }}>
          {["Pew 2024: ~77% Americans never used AI regularly", "BCG/Harvard 2024: Unguided AI users performed worse than non-users", "Microsoft 2023: 68% lack uninterrupted focus time"].map((c, i) => (
            <span key={i} style={{ fontSize: 12, color: C.dim }}>• {c}</span>
          ))}
        </div>
      </FadeIn>
    </Section>
  );
};

/* --- 3. LANDSCAPE --- */
const LandscapeSection = () => (
  <Section id="landscape">
    <SectionHead tag="Why Not Existing Solutions?" tagColor={C.purple}
      headline={<>Why Memory and Personalization <span style={{ color: C.purple }}>Aren't Enough</span></>}
      sub="Every major lab is building recall and adaptation. None are building interaction regulation." />
    <FadeIn>
      <div style={{ overflowX: "auto", WebkitOverflowScrolling: "touch" }}>
        <Card style={{ padding: 0, minWidth: 560 }}>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", padding: "14px 20px", borderBottom: `1px solid ${C.border}`, background: C.bgEl }}>
            {["Capability", "Claude Memory", "ChatGPT / Copilot", "HyBrAIn"].map((h, i) => (
              <div key={i} style={{ fontSize: 12, fontWeight: 700, color: i === 3 ? C.amber : C.dim, letterSpacing: "0.08em", textTransform: "uppercase" }}>{h}</div>
            ))}
          </div>
          {[
            { cap: "Remembers across sessions", cl: true, gpt: true, hb: true },
            { cap: "Adapts tone and style", cl: true, gpt: true, hb: true },
            { cap: "Detects cognitive load in real-time", cl: false, gpt: false, hb: true },
            { cap: "Measures stress via proxy signals", cl: false, gpt: false, hb: true },
            { cap: "Intervenes when user is overloaded", cl: false, gpt: false, hb: true },
            { cap: "Tracks trust state progression", cl: false, gpt: false, hb: true },
            { cap: "Coaches prompting competence", cl: false, gpt: false, hb: true },
            { cap: "Protects usage consistency", cl: false, gpt: false, hb: true },
            { cap: "Full transparent user control", cl: false, gpt: false, hb: true },
          ].map((r, i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", padding: "12px 20px", borderBottom: i < 8 ? `1px solid ${C.border}` : "none", alignItems: "center" }}>
              <div style={{ fontSize: 14, color: C.textSoft }}>{r.cap}</div>
              <div style={{ textAlign: "center", color: r.cl ? C.green : C.dim }}>{r.cl ? "✓" : "—"}</div>
              <div style={{ textAlign: "center", color: r.gpt ? C.green : C.dim }}>{r.gpt ? "✓" : "—"}</div>
              <div style={{ textAlign: "center", color: C.amber, fontWeight: 700 }}>✓</div>
            </div>
          ))}
        </Card>
      </div>
    </FadeIn>
    <FadeIn delay={0.1}>
      <p style={{ fontSize: 17, fontFamily: "'Fraunces', serif", color: C.textSoft, fontWeight: 300, textAlign: "center", marginTop: 32, lineHeight: 1.6 }}>
        Memory is step one. Personalization is step two.<br />
        <span style={{ color: C.amber, fontWeight: 500 }}>HyBrAIn is step three</span> — the layer that understands the human, not just their preferences.
      </p>
    </FadeIn>
  </Section>
);

/* ============================================================
   ACT II — HOW IT WORKS
   ============================================================ */

/* --- 4. THE SYSTEM --- */
const SystemSection = () => (
  <Section id="system">
    <SectionHead tag="The System" tagColor={C.blue}
      headline={<>Three States. Continuous Tracking.<br /><span style={{ color: C.blue }}>Intelligent Intervention.</span></>}
      sub="HyBrAIn reads cognitive style, trust level, and load state to determine what to do, when, and how much." />

    {/* 3-State Machine */}
    <FadeIn>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 14, marginBottom: 56 }}>
        {[
          { state: "Cognitive Style", q: "HOW to intervene", items: ["Structure need: high / med / low", "Communication: concise / detailed / conversational", "Learning: visual / verbal / example-based"], c: C.amber },
          { state: "Trust State", q: "HOW MUCH to intervene", items: ["Threat → Cautious → Open → Reliant → Autonomous", "Direction: building ↑ or eroding ↓", "Trigger: what caused last trust change"], c: C.blue },
          { state: "Load State", q: "WHEN to intervene", items: ["Low → Moderate → Elevated → Overloaded", "Calculated from passive + opt-in signals", "Real-time, updates every interaction"], c: C.red },
        ].map((s, i) => (
          <Card key={i} style={{ borderTop: `3px solid ${s.c}` }}>
            <div style={{ fontSize: 17, fontWeight: 600, color: s.c, marginBottom: 4 }}>{s.state}</div>
            <div style={{ fontSize: 13, color: C.text, fontWeight: 500, marginBottom: 14 }}>Determines: {s.q}</div>
            {s.items.map((item, j) => (
              <div key={j} style={{ fontSize: 13, color: C.muted, lineHeight: 1.5, padding: "5px 0", borderBottom: j < 2 ? `1px solid ${C.border}` : "none" }}>{item}</div>
            ))}
          </Card>
        ))}
      </div>
    </FadeIn>

    {/* 6 Barriers */}
    <FadeIn delay={0.1}>
      <div style={{ fontSize: 11, fontWeight: 600, color: C.amber, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 14 }}>6 Adoption Barriers Mapped to Product</div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 12 }}>
        {[
          { b: "Attention & Switching Cost", f: "\"Doesn't fit my flow\"", r: "Context resurrection, 1-click re-entry", c: C.amber },
          { b: "Uncertainty Intolerance", f: "\"Don't know if it's right\"", r: "Confidence indicators, safe options", c: C.blue },
          { b: "Identity & Status Threat", f: "\"Makes me feel stupid\"", r: "Co-authorship framing, skill scaffolds", c: C.red },
          { b: "Loss Aversion", f: "\"One bad experience, I'm done\"", r: "Proactive error acknowledgment, repair loops", c: C.purple },
          { b: "Goal Gradient Breakdown", f: "\"Don't see progress\"", r: "Micro-progress visualization, weekly wins", c: C.green },
          { b: "Social Proof Absence", f: "\"People like me don't use this\"", r: "Persona-matched onboarding, peer patterns", c: C.amberSoft },
        ].map((b, i) => (
          <Card key={i} style={{ padding: "18px", borderLeft: `3px solid ${b.c}` }}>
            <div style={{ fontSize: 14, fontWeight: 600, color: b.c, marginBottom: 4 }}>{b.b}</div>
            <div style={{ fontSize: 13, color: C.textSoft, fontStyle: "italic", marginBottom: 8 }}>{b.f}</div>
            <div style={{ fontSize: 13, color: C.muted }}><span style={{ color: C.green, fontWeight: 600 }}>→</span> {b.r}</div>
          </Card>
        ))}
      </div>
    </FadeIn>

    {/* Research Foundation — compact */}
    <FadeIn delay={0.15}>
      <div style={{ marginTop: 32, display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
        {["Cognitive Load Theory (Sweller)", "Self-Determination Theory (Deci & Ryan)", "Yerkes-Dodson Law", "Fogg Behavior Model"].map((f, i) => (
          <span key={i} style={{ fontSize: 12, color: C.dim, padding: "4px 12px", background: C.bgEl, borderRadius: 6, border: `1px solid ${C.border}` }}>{f}</span>
        ))}
      </div>
    </FadeIn>
  </Section>
);

/* --- 5. PRODUCT IN ACTION --- */
const DemoSection = () => {
  const [step, setStep] = useState(0);
  const [phase, setPhase] = useState(0);
  const steps = [
    { num:1, name:"Care", stage:"Acceptance", c:C.amber,
      user:"Hey Claude, I'm new here. I need help writing a report but I'm not sure where to start.",
      ai:"I'd love to help you with that report. Let me ask a few questions so I can understand what you need.",
      hAction:"First-time interaction — transparent onboarding",
      hMsg:"Welcome! I'm HyBrAIn — your interaction care layer. I'll be quietly running in the background to help you get the most out of AI. Everything I track is transparent and you control it all.",
      hLabel:"♡ Transparent Onboarding", sig:"Session count = 1 · Trust = Threat" },
    { num:2, name:"Understand", stage:"Safety", c:C.blue,
      user:"Can you reorganize this data into a summary table? Also what happened to the analysis I started yesterday?",
      ai:"Here's your summary table. I've also pulled up your analysis from yesterday — you were working on the revenue breakdown.",
      hAction:"Cognitive style detected: analytical, structured",
      hMsg:"I notice you prefer structured outputs — tables, lists, step-by-step. I'll prioritize those going forward. Prompt specificity is high and latency is normal.",
      hLabel:"◎ Empathic Modeling", sig:"Specificity: 8.2/10 · Latency: normal" },
    { num:3, name:"Guide", stage:"Trust", c:C.green,
      user:"I'm struggling with this financial projection. I keep going in circles.",
      ai:"Let me break this into smaller steps. First, let's isolate the three key variables...",
      hAction:"Query cycling detected (3 rephrases) + vocabulary complexity dropping",
      hMsg:"You're not alone — similar users found it helpful to start with a simplified template. Want me to suggest that approach?",
      hLabel:"◈ Peer Insight", sig:"Cycling: 3x rephrase · Complexity: -40%" },
    { num:4, name:"Coach", stage:"Competence", c:C.purple,
      user:"Make this better.",
      ai:"I can help! To give you the best result, it helps to specify what 'better' means.",
      hAction:"Prompt specificity: 1.2/10 — coaching opportunity",
      hMsg:"Quick tip: your prompts have gotten 40% more specific this week. This one was vague. Try: \"Make this more concise for an executive audience.\"",
      hLabel:"→ Competence Coaching", sig:"Specificity: 1.2/10 vs baseline 7.8" },
    { num:5, name:"Regulate", stage:"Consistency", c:C.red,
      user:"I've been at this for 3 hours straight. Can you help me finish this last section?",
      ai:"Of course. Here's the final section draft based on your outline...",
      hAction:"Session: 3h 12m (90th percentile) — vocabulary complexity -30%",
      hMsg:"Your session is 3h 12m — well past your usual 48min. Vocabulary complexity dropped 30%. Save progress, take a 15-minute break. You'll finish faster.",
      hLabel:"◐ Consistency Protection", sig:"Duration: 192min (baseline: 48) · Load: Overloaded" },
    { num:6, name:"Scale", stage:"Habit", c:"#FF80C0",
      user:"I went from being scared of AI to using it every day without feeling overwhelmed.",
      ai:"That's wonderful. Your output quality has been consistently high.",
      hAction:"Sustained healthy pattern: 4 weeks, 5.2 days/week, 0 overload events",
      hMsg:"4 weeks in: 5.2 days/week, zero overload events, focus quality up 35%. You've built a sustainable AI practice.",
      hLabel:"▦ Sustainable User", sig:"Consistency: 5.2d/wk · Overload: 0 · Trust: Autonomous" },
  ];
  const s = steps[step];
  useEffect(() => { setPhase(0); const t1=setTimeout(()=>setPhase(1),500); const t2=setTimeout(()=>setPhase(2),1200); return()=>{clearTimeout(t1);clearTimeout(t2);}; }, [step]);

  return (
    <Section id="demo">
      <SectionHead tag="Product in Action" tagColor={C.green}
        headline={<>See It <span style={{ color: C.green }}>Work</span></>}
        sub="One user. Six stages. From first interaction to sustainable habit." />

      {/* Step tabs */}
      <FadeIn>
        <div style={{ display: "flex", gap: 4, marginBottom: 20, flexWrap: "wrap" }}>
          {steps.map((st, i) => (
            <button key={i} onClick={() => setStep(i)} style={{
              flex: 1, minWidth: 80, padding: "10px 8px", borderRadius: 8, cursor: "pointer", textAlign: "center",
              background: step === i ? st.c + "15" : "transparent",
              border: `1px solid ${step === i ? st.c + "40" : C.border}`, transition: "all 0.2s",
            }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: step === i ? st.c : C.dim }}>{st.num}</div>
              <div style={{ fontSize: 13, fontWeight: 600, color: step === i ? st.c : C.muted, marginTop: 1 }}>{st.name}</div>
              <div style={{ fontSize: 10, color: C.dim, marginTop: 1 }}>{st.stage}</div>
            </button>
          ))}
        </div>
      </FadeIn>

      {/* Chat simulation */}
      <FadeIn delay={0.05}>
        <Card style={{ padding: 0, overflow: "hidden" }}>
          <div style={{ padding: "10px 16px", borderBottom: `1px solid ${C.border}`, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <div style={{ display: "flex", gap: 4 }}><div style={{ width:8,height:8,borderRadius:"50%",background:"#FF5F57" }}/><div style={{ width:8,height:8,borderRadius:"50%",background:"#FEBC2E" }}/><div style={{ width:8,height:8,borderRadius:"50%",background:"#28C840" }}/></div>
              <span style={{ fontSize: 12, color: C.dim, marginLeft: 8 }}>claude.ai</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: C.green, boxShadow: `0 0 8px ${C.green}60` }} />
              <span style={{ fontSize: 11, fontWeight: 600, color: C.green }}>HyBrAIn Active</span>
            </div>
          </div>
          <div style={{ padding: "20px", minHeight: 300 }}>
            {/* User */}
            <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 14, opacity: phase >= 0 ? 1 : 0, transition: "opacity 0.4s" }}>
              <div style={{ background: C.blue + "12", border: `1px solid ${C.blue}20`, borderRadius: "14px 14px 4px 14px", padding: "12px 16px", maxWidth: "75%" }}>
                <div style={{ fontSize: 11, color: C.blue, fontWeight: 600, marginBottom: 4 }}>You</div>
                <p style={{ fontSize: 14, color: C.text, margin: 0, lineHeight: 1.5 }}>{s.user}</p>
              </div>
            </div>
            {/* AI */}
            <div style={{ display: "flex", marginBottom: 14, opacity: phase >= 1 ? 1 : 0, transition: "opacity 0.4s 0.1s" }}>
              <div style={{ background: C.bgEl, border: `1px solid ${C.border}`, borderRadius: "14px 14px 14px 4px", padding: "12px 16px", maxWidth: "75%" }}>
                <div style={{ fontSize: 11, color: C.muted, fontWeight: 600, marginBottom: 4 }}>Claude</div>
                <p style={{ fontSize: 14, color: C.text, margin: 0, lineHeight: 1.5 }}>{s.ai}</p>
              </div>
            </div>
            {/* HyBrAIn */}
            <div style={{ opacity: phase >= 2 ? 1 : 0, transition: "opacity 0.5s 0.15s", background: s.c + "08", border: `1px solid ${s.c}20`, borderRadius: 12, padding: "14px 16px", borderLeft: `3px solid ${s.c}` }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
                <span style={{ fontSize: 12, fontWeight: 700, color: s.c, letterSpacing: "0.05em", textTransform: "uppercase" }}>{s.hLabel}</span>
              </div>
              <div style={{ fontSize: 11, color: C.dim, fontFamily: "monospace", marginBottom: 6, padding: "4px 8px", background: C.bgEl, borderRadius: 4, display: "inline-block" }}>{s.sig}</div>
              <div style={{ fontSize: 12, color: C.dim, fontStyle: "italic", marginBottom: 4 }}>{s.hAction}</div>
              <p style={{ fontSize: 14, color: C.text, margin: 0, lineHeight: 1.55 }}>{s.hMsg}</p>
            </div>
          </div>
        </Card>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div style={{ display: "flex", justifyContent: "center", gap: 10, marginTop: 16 }}>
          <button onClick={() => setStep(Math.max(0, step - 1))} disabled={step === 0} style={{ padding: "10px 24px", borderRadius: 8, fontSize: 14, fontWeight: 600, cursor: step === 0 ? "default" : "pointer", background: "transparent", color: step === 0 ? C.dim : C.text, border: `1px solid ${step === 0 ? C.border : C.muted}` }}>← Previous</button>
          <button onClick={() => setStep(Math.min(5, step + 1))} disabled={step === 5} style={{ padding: "10px 24px", borderRadius: 8, fontSize: 14, fontWeight: 600, cursor: step === 5 ? "default" : "pointer", background: step === 5 ? C.dim + "30" : C.green, color: step === 5 ? C.dim : C.bg, border: "none" }}>{step === 5 ? "Complete" : "Next →"}</button>
        </div>
      </FadeIn>
    </Section>
  );
};

/* --- 6. UNDER THE HOOD --- */
const HoodSection = () => {
  const [activeRule, setActiveRule] = useState(0);
  const rules = [
    { cond: "New user (sessions 1-3)", trust: "Threat", load: "Any", decision: "Always intervene with care", action: "Transparent onboarding, 'here's what I track and why'", c: C.amber },
    { cond: "Load elevated + Trust cautious", trust: "Cautious", load: "Elevated", decision: "Gentle suggestion", action: "'Would you like to simplify this task?'", c: C.blue },
    { cond: "Load overloaded + Session > 90th pct", trust: "Open+", load: "Overloaded", decision: "Direct intervention", action: "'Save progress, take a break. You'll finish faster.'", c: C.red },
    { cond: "Query cycling (3+ rephrases)", trust: "Any", load: "Elevated+", decision: "Task restructure", action: "'Let me break this into 3 smaller pieces.'", c: C.green },
    { cond: "Trust open + Goal stalled", trust: "Open", load: "Moderate", decision: "Competence coaching", action: "'Try a simpler version to build momentum.'", c: C.purple },
    { cond: "Trust reliant + Dependency signals", trust: "Reliant", load: "Low", decision: "Build autonomy", action: "'Try on your own first — I'll review after.'", c: C.amberSoft },
  ];
  const r = rules[activeRule];

  return (
    <Section id="hood">
      <SectionHead tag="Under the Hood" tagColor={C.purple}
        headline={<>What Powers the <span style={{ color: C.purple }}>Decisions</span></>}
        sub="Passive signals available today. Structured decision logic. Full user control." />

      {/* Signals */}
      <FadeIn>
        <div style={{ marginBottom: 48 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
            <span style={{ fontSize: 12, padding: "3px 10px", borderRadius: 4, background: C.green + "18", color: C.green, fontWeight: 700 }}>TIER 1</span>
            <span style={{ fontSize: 14, fontWeight: 500, color: C.text }}>Passive Signals — Available Today</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 10 }}>
            {[
              { s: "Prompt Specificity Score", h: "Word count, detail level vs. user baseline" },
              { s: "Inter-Message Latency", h: "Time between AI response and next message" },
              { s: "Session Duration vs. Baseline", h: "User avg 48min — at 3hrs, flag fatigue" },
              { s: "Vocabulary Complexity Shift", h: "Language simplifies mid-session = load rising" },
              { s: "Task Abandonment Rate", h: "Started 5, completed 2, abandoned 3 = friction" },
              { s: "Query Cycling Detection", h: "Same question rephrased 3+ times" },
              { s: "Time-of-Day Patterns", h: "Focus quality at 9am vs 4pm over sessions" },
            ].map((sig, i) => (
              <div key={i} style={{ padding: "12px 14px", background: C.bgEl, borderRadius: 8, border: `1px solid ${C.border}` }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: C.text, marginBottom: 3 }}>{sig.s}</div>
                <div style={{ fontSize: 12, color: C.dim, lineHeight: 1.4 }}>{sig.h}</div>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 16 }}>
            <span style={{ fontSize: 12, padding: "3px 10px", borderRadius: 4, background: C.blue + "18", color: C.blue, fontWeight: 700 }}>TIER 2</span>
            <span style={{ fontSize: 14, fontWeight: 500, color: C.text }}>Opt-In — User-Shared Data</span>
            <span style={{ fontSize: 12, color: C.dim }}>(Energy check-ins, calendar density, goals, usage rhythm)</span>
          </div>
        </div>
      </FadeIn>

      {/* Flow */}
      <FadeIn delay={0.08}>
        <Card style={{ marginBottom: 48 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
            {[
              { l: "Passive Signals", c: C.green }, null,
              { l: "Opt-In Signals", c: C.blue }, null,
              { l: "Load State Engine", c: C.amber }, null,
              { l: "Decision Logic", c: C.purple }, null,
              { l: "Intervention", c: C.green },
            ].map((s, i) => s === null ? (
              <span key={i} style={{ color: C.dim, fontSize: 16 }}>→</span>
            ) : (
              <div key={i} style={{ padding: "8px 14px", background: s.c + "10", borderRadius: 8, border: `1px solid ${s.c}18` }}>
                <span style={{ fontSize: 13, fontWeight: 600, color: s.c }}>{s.l}</span>
              </div>
            ))}
          </div>
        </Card>
      </FadeIn>

      {/* Decision rules */}
      <FadeIn delay={0.12}>
        <div style={{ marginBottom: 48 }}>
          <div style={{ fontSize: 11, fontWeight: 600, color: C.dim, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>Decision Rules — Click to Explore</div>
          <div style={{ display: "flex", gap: 4, flexWrap: "wrap", marginBottom: 14 }}>
            {rules.map((rule, i) => (
              <button key={i} onClick={() => setActiveRule(i)} style={{
                padding: "6px 12px", borderRadius: 6, cursor: "pointer", fontSize: 12,
                background: activeRule === i ? rule.c + "18" : "transparent",
                border: `1px solid ${activeRule === i ? rule.c + "40" : C.border}`,
                color: activeRule === i ? rule.c : C.dim, transition: "all 0.2s",
              }}>{rule.cond}</button>
            ))}
          </div>
          <Card style={{ borderLeft: `3px solid ${r.c}`, transition: "all 0.25s" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 14, marginBottom: 14 }}>
              <div><div style={{ fontSize: 11, color: C.dim, textTransform: "uppercase", marginBottom: 3 }}>Trust</div><div style={{ fontSize: 14, color: C.blue }}>{r.trust}</div></div>
              <div><div style={{ fontSize: 11, color: C.dim, textTransform: "uppercase", marginBottom: 3 }}>Load</div><div style={{ fontSize: 14, color: C.red }}>{r.load}</div></div>
              <div><div style={{ fontSize: 11, color: C.dim, textTransform: "uppercase", marginBottom: 3 }}>Decision</div><div style={{ fontSize: 14, color: r.c, fontWeight: 600 }}>{r.decision}</div></div>
            </div>
            <div style={{ padding: "12px 16px", background: r.c + "08", borderRadius: 8 }}>
              <p style={{ fontSize: 15, color: C.text, margin: 0, lineHeight: 1.5 }}>{r.action}</p>
            </div>
          </Card>
        </div>
      </FadeIn>

      {/* Consent */}
      <FadeIn delay={0.16}>
        <div>
          <div style={{ fontSize: 11, fontWeight: 600, color: C.green, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 14, display: "flex", alignItems: "center", gap: 6 }}>
            <span>🔒</span> User Control — Full Transparency
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 10 }}>
            {[
              { a: "View", d: "See every signal tracked", icon: "👁" },
              { a: "Edit", d: "Correct any inference", icon: "✏️" },
              { a: "Delete", d: "Erase any data point", icon: "🗑" },
              { a: "Scope", d: "Granular opt-out", icon: "⚙️" },
              { a: "Export", d: "Download your data", icon: "📦" },
              { a: "Pause", d: "Turn off anytime", icon: "⏸" },
            ].map((c, i) => (
              <div key={i} style={{ padding: "12px", background: C.bgEl, borderRadius: 8, border: `1px solid ${C.border}`, textAlign: "center" }}>
                <span style={{ fontSize: 18 }}>{c.icon}</span>
                <div style={{ fontSize: 13, fontWeight: 600, color: C.green, marginTop: 4 }}>{c.a}</div>
                <div style={{ fontSize: 11, color: C.dim, marginTop: 2 }}>{c.d}</div>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </Section>
  );
};

/* ============================================================
   ACT III — PROOF & SCALE
   ============================================================ */

/* --- 7. OUTCOMES --- */
const OutcomesSection = () => {
  const data = [{n:"Wk 1",s:100,h:100},{n:"Wk 4",s:45,h:90},{n:"Wk 8",s:28,h:85},{n:"Wk 12",s:19,h:80},{n:"Wk 20",s:12,h:76}];
  return (
    <Section id="outcomes">
      <SectionHead tag="Expected Outcomes" tagColor={C.green}
        headline={<>Better for Humans.<br /><span style={{ color: C.green }}>Better for Products.</span></>}
        sub="These are testable hypotheses, not claims. Each has a measurement methodology and grounding in existing research. A 20-person, 4-week pilot proves or disproves them." />

      <FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16, marginBottom: 32 }}>
          {/* Human */}
          <Card style={{ borderTop: `3px solid ${C.green}` }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: C.green, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 6 }}>Human Outcomes</div>
            <div style={{ fontSize: 11, color: C.dim, marginBottom: 16, fontStyle: "italic" }}>Hypotheses — testable in pilot</div>
            {[
              { m: "Overload Episodes", dir: "↓", hyp: "Significant reduction", method: "Count sessions exceeding 90th percentile duration + vocabulary complexity decline >25%", evidence: "Yerkes-Dodson: performance crashes at high arousal; BCG 2024 found unguided users performed worse" },
              { m: "Focus Quality", dir: "↑", hyp: "Sustained across session", method: "Prompt specificity score variance within session — lower variance = steadier focus", evidence: "Cognitive Load Theory (Sweller): managed load preserves working memory capacity" },
              { m: "Burnout / Crash Events", dir: "↓", hyp: "Near elimination", method: "Sessions followed by 3+ day absence — compare intervention vs. control group", evidence: "Microsoft 2023: 68% lack uninterrupted focus time; fatigue-triggered breaks reduce subsequent dropout" },
            ].map((m, i) => (
              <div key={i} style={{ padding: "14px", background: C.bgEl, borderRadius: 8, marginBottom: 10 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                  <span style={{ fontSize: 14, fontWeight: 600, color: C.text }}>{m.m}</span>
                  <span style={{ fontSize: 16, fontWeight: 700, color: C.green }}>{m.dir} {m.hyp}</span>
                </div>
                <div style={{ fontSize: 12, color: C.muted, lineHeight: 1.5, marginBottom: 6 }}>
                  <span style={{ color: C.textSoft, fontWeight: 500 }}>Measured by: </span>{m.method}
                </div>
                <div style={{ fontSize: 12, color: C.dim, lineHeight: 1.5 }}>
                  <span style={{ color: C.amber, fontWeight: 500 }}>Grounded in: </span>{m.evidence}
                </div>
              </div>
            ))}
          </Card>
          {/* Product */}
          <Card style={{ borderTop: `3px solid ${C.blue}` }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: C.blue, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 6 }}>Product Outcomes</div>
            <div style={{ fontSize: 11, color: C.dim, marginBottom: 16, fontStyle: "italic" }}>Hypotheses — testable in pilot</div>
            {[
              { m: "Consistent Use Days", dir: "↑", hyp: "2-3× improvement", method: "Active days per week — compare HyBrAIn cohort vs. matched control over 4 weeks", evidence: "Pew 2024: 77% never use regularly; Fogg model predicts prompted behavior sustains better" },
              { m: "Week-12 Retention", dir: "↑", hyp: "Meaningful uplift", method: "% of users active at week 12 — standard retention curve comparison", evidence: "Standard SaaS retention drops to ~15% by week 12; guided onboarding lifts 20-40% in analogous products" },
              { m: "Session-to-Return Rate", dir: "↑", hyp: "Higher return after regulated sessions", method: "% of sessions where user returns within 48 hours — compare regulated vs. unregulated sessions", evidence: "Self-Determination Theory: autonomy-supportive environments increase intrinsic motivation to return" },
            ].map((m, i) => (
              <div key={i} style={{ padding: "14px", background: C.bgEl, borderRadius: 8, marginBottom: 10 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                  <span style={{ fontSize: 14, fontWeight: 600, color: C.text }}>{m.m}</span>
                  <span style={{ fontSize: 16, fontWeight: 700, color: C.blue }}>{m.dir} {m.hyp}</span>
                </div>
                <div style={{ fontSize: 12, color: C.muted, lineHeight: 1.5, marginBottom: 6 }}>
                  <span style={{ color: C.textSoft, fontWeight: 500 }}>Measured by: </span>{m.method}
                </div>
                <div style={{ fontSize: 12, color: C.dim, lineHeight: 1.5 }}>
                  <span style={{ color: C.amber, fontWeight: 500 }}>Grounded in: </span>{m.evidence}
                </div>
              </div>
            ))}
          </Card>
        </div>
      </FadeIn>

      {/* Retention chart — labeled as projection */}
      <FadeIn delay={0.1}>
        <Card>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
            <div style={{ fontSize: 14, fontWeight: 500, color: C.text }}>Projected Retention Curve</div>
            <span style={{ fontSize: 11, color: C.dim, padding: "3px 8px", background: C.bgEl, borderRadius: 4, border: `1px solid ${C.border}` }}>Directional — pending pilot data</span>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={data}>
              <defs>
                <linearGradient id="sg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor={C.green} stopOpacity={0.12}/><stop offset="100%" stopColor={C.green} stopOpacity={0}/></linearGradient>
                <linearGradient id="sr" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor={C.red} stopOpacity={0.08}/><stop offset="100%" stopColor={C.red} stopOpacity={0}/></linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke={C.border} /><XAxis dataKey="n" tick={{ fill: C.dim, fontSize: 12 }} axisLine={false} tickLine={false} /><YAxis tick={{ fill: C.dim, fontSize: 12 }} axisLine={false} tickLine={false} domain={[0, 100]} />
              <Tooltip contentStyle={{ background: C.bgEl, border: `1px solid ${C.border}`, borderRadius: 8, fontSize: 13, color: C.text }} />
              <Area type="monotone" dataKey="s" stroke={C.red} strokeWidth={1.5} fill="url(#sr)" dot={false} name="Standard (industry avg)" />
              <Area type="monotone" dataKey="h" stroke={C.green} strokeWidth={2} fill="url(#sg)" dot={false} name="HyBrAIn (projected)" />
            </AreaChart>
          </ResponsiveContainer>
          <div style={{ display: "flex", justifyContent: "center", gap: 20, marginTop: 8 }}>
            <span style={{ fontSize: 12, color: C.red, display: "flex", alignItems: "center", gap: 4 }}><span style={{ width: 12, height: 2, background: C.red, display: "inline-block" }} /> Standard (industry avg)</span>
            <span style={{ fontSize: 12, color: C.green, display: "flex", alignItems: "center", gap: 4 }}><span style={{ width: 12, height: 2, background: C.green, display: "inline-block" }} /> HyBrAIn (projected)</span>
          </div>
        </Card>
      </FadeIn>

      {/* Pilot design */}
      <FadeIn delay={0.15}>
        <Card style={{ marginTop: 20, borderLeft: `3px solid ${C.amber}` }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: C.amber, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 8 }}>Proposed Pilot Design</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 14 }}>
            {[
              { l: "Participants", v: "20 users", d: "Mixed experience levels" },
              { l: "Duration", v: "4 weeks", d: "Enough for habit formation signals" },
              { l: "Design", v: "A/B controlled", d: "HyBrAIn vs. standard interface" },
              { l: "Primary metric", v: "Consistent days/week", d: "Active days at week 4 vs. week 1" },
            ].map((p, i) => (
              <div key={i}>
                <div style={{ fontSize: 11, color: C.dim, textTransform: "uppercase", marginBottom: 2 }}>{p.l}</div>
                <div style={{ fontSize: 16, fontWeight: 600, color: C.text }}>{p.v}</div>
                <div style={{ fontSize: 12, color: C.muted }}>{p.d}</div>
              </div>
            ))}
          </div>
        </Card>
      </FadeIn>
    </Section>
  );
};

/* --- 8. SCALE --- */
const ScaleSection = () => (
  <Section id="scale">
    <SectionHead tag="Scale" tagColor={C.amber}
      headline={<><span style={{ color: C.amber }}>800 Million</span> Active Users.<br />Five Billion Waiting.</>}
      sub="HyBrAIn serves both: consistency for current users, accessibility for everyone else." />

    {/* Lab leader angles */}
    <FadeIn>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 14, marginBottom: 48 }}>
        {[
          { angle: "Data System", q: "What metric does this move?", a: "Consistent usage days/week, week-12 retention, overload-adjusted stickiness. Plugs into existing engagement infrastructure.", c: C.amber },
          { angle: "Psychological Model", q: "Why can't we hire a psych PhD?", a: "6 barriers, 3-state machine, 7 decision rules with calibration. The model is the IP — years of cognitive psych + AI interaction research.", c: C.blue },
          { angle: "Safety Primitive", q: "How does this connect to alignment?", a: "Detecting cognitively compromised humans during AI interaction isn't UX — it's a safety primitive. Overloaded users make worse decisions.", c: C.green },
        ].map((a, i) => (
          <Card key={i} style={{ borderTop: `3px solid ${a.c}` }}>
            <div style={{ fontSize: 15, fontWeight: 600, color: a.c, marginBottom: 4 }}>{a.angle}</div>
            <div style={{ fontSize: 13, color: C.textSoft, fontStyle: "italic", marginBottom: 10 }}>{a.q}</div>
            <div style={{ fontSize: 13, color: C.muted, lineHeight: 1.6 }}>{a.a}</div>
          </Card>
        ))}
      </div>
    </FadeIn>

    {/* MVP + Phases */}
    <FadeIn delay={0.08}>
      <Card style={{ borderLeft: `3px solid ${C.amber}`, marginBottom: 20 }}>
        <div style={{ fontSize: 15, fontWeight: 600, color: C.text, marginBottom: 6 }}>Build First (MVP)</div>
        <p style={{ fontSize: 14, color: C.muted, lineHeight: 1.6, margin: 0 }}>Tier 1 passive signals + core decision engine + care-centered interventions. Prove consistency uplift with real users. Expand from there.</p>
      </Card>
    </FadeIn>

    <FadeIn delay={0.12}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))", gap: 12 }}>
        {[
          { p: "Phase 1", t: "Core Care Layer", d: "Tier 1 signals, decision engine, care interventions", c: C.amber },
          { p: "Phase 2", t: "Opt-In Expansion", d: "Tier 2 signals, deeper personalization, calendar/energy", c: C.blue },
          { p: "Phase 3", t: "Insight Network", d: "Anonymized peer patterns, proven strategies at scale", c: C.purple },
          { p: "Phase 4", t: "Predictive + Platform", d: "Risk prediction, reusable primitives, hardware integration", c: C.green },
        ].map((p, i) => (
          <Card key={i} style={{ borderTop: `2px solid ${p.c}` }}>
            <div style={{ fontSize: 11, fontWeight: 600, color: p.c, letterSpacing: "0.08em", textTransform: "uppercase" }}>{p.p}</div>
            <div style={{ fontSize: 14, fontWeight: 600, color: C.text, margin: "8px 0 6px" }}>{p.t}</div>
            <div style={{ fontSize: 12, color: C.dim, lineHeight: 1.5 }}>{p.d}</div>
          </Card>
        ))}
      </div>
    </FadeIn>
  </Section>
);

/* --- 9. CREATOR --- */
const CreatorSection = () => (
  <Section style={{ padding: "80px 24px 40px" }}>
    <FadeIn>
      <Card style={{ padding: "44px 36px", textAlign: "center", maxWidth: 560, margin: "0 auto" }}>
        <div style={{ fontSize: 12, fontWeight: 600, color: C.amber, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16 }}>Creator</div>
        <h3 style={{ fontSize: 28, fontFamily: "'Fraunces', serif", fontWeight: 400, color: C.text, margin: "0 0 12px" }}>Likhon Roy</h3>
        <p style={{ fontSize: 15, color: C.muted, lineHeight: 1.7, marginBottom: 16 }}>
          Background in socio-cognitive psychology and economics. Product leadership at the intersection of human behavior and AI systems. 3× patented inventor in human-AI interaction.
        </p>
        <div style={{ padding: "14px 20px", borderRadius: 10, background: C.bgEl, border: `1px solid ${C.border}`, marginBottom: 24, textAlign: "center" }}>
          <div style={{ fontSize: 11, fontWeight: 600, color: C.amber, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 4 }}>Recognized National Interest</div>
          <p style={{ fontSize: 14, color: C.muted, margin: 0, lineHeight: 1.5 }}>
            U.S. <span style={{ color: C.text }}>National Interest Waiver (EB-2 NIW)</span> for exceptional ability in Human-AI interaction research.
          </p>
        </div>
        <a href="mailto:likhonroy013@gmail.com" style={{ display: "inline-block", padding: "12px 32px", borderRadius: 10, background: C.amber, color: C.bg, fontSize: 15, fontWeight: 600, textDecoration: "none" }}>likhonroy013@gmail.com</a>
      </Card>
    </FadeIn>
  </Section>
);

/* ============================================================
   NAV
   ============================================================ */
const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const h = () => setScrolled(window.scrollY > 50); window.addEventListener("scroll", h); return () => window.removeEventListener("scroll", h); }, []);
  return (
    <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, padding: "10px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", background: scrolled ? "rgba(8,8,14,0.92)" : "transparent", backdropFilter: scrolled ? "blur(12px)" : "none", borderBottom: scrolled ? `1px solid ${C.border}` : "1px solid transparent", transition: "all 0.3s" }}>
      <span style={{ fontSize: 20, fontFamily: "'Fraunces', serif", color: C.text, cursor: "pointer" }} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        Hy<span style={{ color: C.amber }}>BrAIn</span>
      </span>
      <div style={{ display: "flex", gap: 4 }}>
        {[{id:"problem",l:"Problem"},{id:"system",l:"System"},{id:"demo",l:"Demo"},{id:"outcomes",l:"Outcomes"},{id:"scale",l:"Scale"}].map(n => (
          <button key={n.id} onClick={() => document.getElementById(n.id)?.scrollIntoView({ behavior: "smooth" })}
            style={{ padding: "6px 12px", background: "transparent", color: C.dim, border: "none", borderRadius: 6, fontSize: 13, cursor: "pointer", transition: "color 0.2s" }}
            onMouseEnter={e => e.target.style.color = C.text} onMouseLeave={e => e.target.style.color = C.dim}>{n.l}</button>
        ))}
      </div>
    </nav>
  );
};

/* ============================================================
   MAIN
   ============================================================ */
export default function HyBrainPrototype() {
  return (
    <div style={{ background: C.bg, color: C.text, fontFamily: "'DM Sans', -apple-system, sans-serif", minHeight: "100vh" }}>
      <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,100..900;1,9..144,100..900&family=DM+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; scroll-padding-top: 48px; }
        body { background: ${C.bg}; }
        ::selection { background: ${C.amber}40; color: ${C.text}; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: ${C.bg}; }
        ::-webkit-scrollbar-thumb { background: ${C.border}; border-radius: 2px; }
        @media (max-width: 640px) {
          section { padding-left: 16px !important; padding-right: 16px !important; }
        }
      `}</style>
      <Nav />
      {/* ACT I: DEFINITION */}
      <HeroSection />
      <ProblemSection />
      <LandscapeSection />
      <ActDivider label="How It Works" />
      {/* ACT II: EXPERIENCE */}
      <SystemSection />
      <DemoSection />
      <HoodSection />
      <ActDivider label="Proof & Scale" />
      {/* ACT III: PROOF */}
      <OutcomesSection />
      <ScaleSection />
      <CreatorSection />
      <footer style={{ padding: "40px 24px", textAlign: "center", borderTop: `1px solid ${C.border}` }}>
        <p style={{ fontSize: 20, fontFamily: "'Fraunces', serif", color: C.textSoft, fontWeight: 300 }}>Your Hy<span style={{ color: C.amber }}>BrAIn</span> <span style={{ color: C.green }}>Cares</span> For You</p>
        <p style={{ fontSize: 13, color: C.dim, marginTop: 8 }}>Human × AI = HyBrAIn · 2026 · Confidential</p>
      </footer>
    </div>
  );
}
