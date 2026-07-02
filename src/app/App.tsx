import type { CSSProperties, FC } from "react";
import  { useState, useEffect, useRef } from "react";
import { Link2, GitBranch, Mail, Globe, ArrowRight } from "lucide-react";
import { TechHeroVisual } from "./components/TechHeroVisual";
import "../styles/index.css";
const SECTIONS   = ["home","about","experience","education","certificates","projects","contact"];
const NAV_LABELS = ["Home","About Me","Experience","Education","Certificates","Projects","Contact"];

export interface PortfolioAppProps {
  className?: string;
  style?: CSSProperties;
}

export const PortfolioApp: FC<PortfolioAppProps> = ({ className = "", style }) => {
  const [active,   setActive]   = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = mainRef.current;
    if (!el) return;
    const onScroll = () => {
      setScrolled(el.scrollTop > 4);
      const pos = el.scrollTop + 24;
      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const sec = el.querySelector<HTMLElement>(`#${SECTIONS[i]}`);
        if (sec && sec.offsetTop <= pos) { setActive(SECTIONS[i]); break; }
      }
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const main = mainRef.current;
    if (!main) return;
    const target = main.querySelector<HTMLElement>(`#${id}`);
    if (!target) return;
    main.scrollTo({ top: target.offsetTop, behavior: "smooth" });
  };

  /* ─── icon shorthand ─────────────────────────────────────────────────────── */
  const iconStyle = (size: string): React.CSSProperties => ({
    width: `var(--window-icon-${size})`,
    height: `var(--window-icon-${size})`,
    flexShrink: 0,
  });

  return (
    /* MARKER-MAKE-KIT-INVOKED */
    <div
      className={`w-full h-full overflow-hidden ${className}`}
      style={{
        display: "grid",
        gridTemplateRows: "20% 1fr 10%",
        background: "#0B0B0B",
        fontFamily: "'Inter',-apple-system,BlinkMacSystemFont,sans-serif",
        ...style,
      }}
    >
      {/* ── Component-scoped base styles ──────────────────────────────────── */}
      <style>{`
        ::-webkit-scrollbar { display: none; }

        @keyframes fsu {
          from { opacity:0; transform:translateY(6px); }
          to   { opacity:1; transform:translateY(0);   }
        }
        .fsu   { animation: fsu .6s cubic-bezier(.22,1,.36,1) forwards; }
        .fsu-1 { animation-delay:.05s; opacity:0; }
        .fsu-2 { animation-delay:.15s; opacity:0; }
        .fsu-3 { animation-delay:.26s; opacity:0; }
        .fsu-4 { animation-delay:.38s; opacity:0; }
        .fsu-5 { animation-delay:.50s; opacity:0; }

        /* Nav link */
        .pf-nl {
          background: none; border: none; cursor: pointer; font-family: inherit;
          position: relative; white-space: nowrap;
          font-size: var(--window-text-md);
          padding-block:  var(--window-padding-sm);
          padding-inline: var(--window-padding-md);
          color: rgba(161,161,170,.85);
          transition: color .18s;
        }
        .pf-nl:hover   { color: #fff; }
        .pf-nl.pf-act  { color: #fff; font-weight: 600; }

        /* Primary button */
        .pf-btn-p {
          background: #8B5CF6; color: #fff; border: none;
          border-radius: var(--window-radius-md);
          cursor: pointer; font-family: inherit;
          font-size:      var(--window-text-md);
          font-weight: 500;
          padding-block:  var(--window-padding-sm);
          padding-inline: var(--window-padding-lg);
          box-shadow: 0 6px 24px rgba(139,92,246,.38);
          transition: background .18s, transform .14s, box-shadow .18s;
        }
        .pf-btn-p:hover { background:#7C3AED; box-shadow:0 0 20px rgba(139,92,246,.5); transform:translateY(-1px); }

        /* Outline / glass button */
        .pf-btn-o {
          background: rgba(255,255,255,.05); color: rgba(255,255,255,.85);
          border: 1px solid rgba(255,255,255,.13);
          border-radius: var(--window-radius-md);
          cursor: pointer; font-family: inherit;
          font-size:      var(--window-text-md);
          font-weight: 500;
          padding-block:  var(--window-padding-sm);
          padding-inline: var(--window-padding-lg);
          backdrop-filter: blur(12px);
          transition: border-color .18s, background .18s, transform .14s;
        }
        .pf-btn-o:hover { border-color:rgba(255,255,255,.32); background:rgba(255,255,255,.09); transform:translateY(-1px); }

        /* Tech / stack badge */
        .pf-tb {
          display: inline-flex; align-items: center;
          padding-block:  var(--window-padding-sm);
          padding-inline: var(--window-padding-md);
          border-radius: var(--window-radius-xxxl);
          background: rgba(139,92,246,.09);
          color: #C4B5FD;
          font-size:   var(--window-text-sm);
          font-weight: 500;
          border: 1px solid rgba(139,92,246,.22);
          white-space: nowrap;
        }

        /* Section title */
        .pf-sec-title {
          font-size: var(--window-text-xl);
          font-weight: 650; color: #fff; letter-spacing: -.03em;
          margin-bottom: var(--window-gap-sm);
        }
        /* Section divider */
        .pf-sec-div {
          height: 1px; background: rgba(255,255,255,.055);
          margin-bottom: var(--window-gap-lg);
        }

        /* Glass card */
        .pf-card {
          background: #111117; border: 1px solid rgba(255,255,255,.055);
          border-radius: var(--window-radius-lg);
          transition: border-color .2s, transform .2s, box-shadow .2s;
        }
        .pf-card:hover { border-color:rgba(139,92,246,.28); transform:translateY(-2px); box-shadow:0 8px 28px rgba(0,0,0,.4); }

        /* Contact link */
        .pf-clink {
          display: flex; align-items: center;
          gap:           var(--window-gap-md);
          padding-block:  var(--window-padding-md);
          padding-inline: var(--window-padding-lg);
          background: #111117; border: 1px solid rgba(255,255,255,.055);
          border-radius: var(--window-radius-lg);
          color: #A1A1AA; text-decoration: none;
          font-size:    var(--window-text-md);
          font-family:  inherit;
          transition: border-color .18s, color .18s, background .18s;
        }
        .pf-clink:hover { border-color:rgba(139,92,246,.3); color:#fff; background:rgba(139,92,246,.06); }

        /* Timeline dot */
        .pf-dot {
          width:  var(--window-icon-lg);
          height: var(--window-icon-lg);
          border-radius: 50%; background: #8B5CF6; flex-shrink: 0;
          box-shadow: 0 0 8px rgba(139,92,246,.5);
        }

        /* Hero bloom animation */
        @keyframes bloom { 0%,100%{opacity:.8;transform:scale(1);} 50%{opacity:1;transform:scale(1.05);} }
        .pf-bloom { animation: bloom 6s ease-in-out infinite; }

        /* Helpers used by TechHeroVisual wrapper */
        .pf-abs  { position: absolute; }
        .pf-fill { top:0; right:0; bottom:0; left:0; width:100%; height:100%; }
      `}</style>

      {/* ══════════════════════════════════════════════════════════════════════
          HEADER  (grid row 1 — never scrolls)
      ══════════════════════════════════════════════════════════════════════ */}
      <header
        style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          paddingInline: "var(--window-padding-xl)",
          background: scrolled ? "rgba(8,6,16,.96)" : "rgba(8,6,16,.72)",
          backdropFilter: "blur(20px) saturate(1.6)",
          WebkitBackdropFilter: "blur(20px) saturate(1.6)",
          borderBottom: `1px solid ${scrolled ? "rgba(139,92,246,.14)" : "rgba(255,255,255,.04)"}`,
          transition: "background .3s, border-color .3s",
        }}
      >
        {/* BJ logo + name */}
        <button
          onClick={() => scrollTo("home")}
          style={{ background:"none", border:"none", cursor:"pointer", padding:0, display:"flex", alignItems:"center", gap:"var(--window-gap-md)" }}
        >
          <div
            style={{
              ...iconStyle("xxxl"),
              borderRadius: "var(--window-radius-md)",
              background: "linear-gradient(135deg,#9333EA 0%,#6D28D9 100%)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontWeight: "700", color: "#fff", letterSpacing: "-.03em",
              fontSize: "var(--window-text-md)",
              boxShadow: "0 0 14px rgba(139,92,246,.45)",
            }}
          >BJ</div>
          <span style={{ fontSize:"var(--window-text-md)", fontWeight:"600", color:"rgba(255,255,255,.8)", letterSpacing:"-.02em" }}>
            Brandon Jablasone
          </span>
        </button>

        {/* Nav links */}
        <nav style={{ display:"flex", alignItems:"center" }}>
          {SECTIONS.map((id, i) => (
            <button key={id} onClick={() => scrollTo(id)}
              className={`pf-nl${active===id ? " pf-act" : ""}`}
            >
              {NAV_LABELS[i]}
              {active===id && (
                <span style={{
                  position:"absolute", bottom:0, left:"50%", transform:"translateX(-50%)",
                  width:"55%", height:"1.5px", borderRadius:"1px",
                  background:"linear-gradient(90deg,transparent,#8B5CF6,transparent)",
                }} />
              )}
            </button>
          ))}
        </nav>
      </header>

      {/* ══════════════════════════════════════════════════════════════════════
          MAIN  (grid row 2 — only this scrolls)
      ══════════════════════════════════════════════════════════════════════ */}
      <main
        ref={mainRef}
        style={{ overflowY:"auto", overflowX:"hidden", scrollbarWidth:"none", minHeight:0 }}
      >
        {/* ── HOME: full-bleed hero ─────────────────────────────────────── */}
        <section
          id="home"
          style={{ height:"100%", minHeight:"100%", position:"relative", overflow:"hidden" }}
        >
          {/* Layer 0 — architecture artwork */}
          <TechHeroVisual className="pf-abs pf-fill" />

          {/* Layer 1 — horizontal gradient: dark left → transparent right */}
          <div style={{
            position:"absolute", inset:0, zIndex:1, pointerEvents:"none",
            background:"linear-gradient(90deg,rgba(0,0,0,.9) 0%,rgba(0,0,0,.68) 40%,rgba(0,0,0,.26) 66%,transparent 100%)",
          }} />

          {/* Layer 2 — vertical depth */}
          <div style={{
            position:"absolute", inset:0, zIndex:2, pointerEvents:"none",
            background:"linear-gradient(180deg,transparent 0%,rgba(0,0,0,.28) 55%,rgba(0,0,0,.65) 100%)",
          }} />

          {/* Layer 3 — purple bloom left-centre */}
          <div className="pf-bloom" style={{
            position:"absolute", zIndex:3, pointerEvents:"none",
            width:"240px", height:"240px", top:"50%", left:"8%",
            transform:"translate(-50%,-50%)",
            background:"radial-gradient(circle,rgba(139,92,246,.24) 0%,rgba(109,40,217,.07) 48%,transparent 70%)",
            filter:"blur(20px)",
          }} />

          {/* Layer 4 — right purple accent keeps nodes vivid */}
          <div style={{
            position:"absolute", inset:0, zIndex:3, pointerEvents:"none",
            background:"radial-gradient(ellipse 52% 62% at 74% 50%,rgba(109,40,217,.19) 0%,transparent 70%)",
          }} />

          {/* Layer 10 — content */}
          <div style={{
            position:"absolute", inset:0, zIndex:10,
            display:"flex", alignItems:"center",
            paddingInline:"var(--window-padding-xl)",
          }}>
            {/* Glass panel — left 50% */}
            <div style={{
              width:"50%",
              display:"flex", flexDirection:"column",
              gap:"var(--window-gap-lg)",
              padding:"var(--window-padding-lg)",
              background:"rgba(10,10,10,.22)",
              backdropFilter:"blur(14px)", WebkitBackdropFilter:"blur(14px)",
              border:"1px solid rgba(255,255,255,.07)",
              borderRadius:"var(--window-radius-xl)",
              boxShadow:"0 0 60px rgba(0,0,0,.45), 0 0 30px rgba(139,92,246,.12)",
            }}>

              {/* Status pill */}
              <div className="fsu fsu-1">
                <span style={{
                  display:"inline-flex", alignItems:"center",
                  gap:"var(--window-gap-sm)",
                  paddingBlock:"var(--window-padding-sm)",
                  paddingInline:"var(--window-padding-md)",
                  borderRadius:"var(--window-radius-xxxl)",
                  background:"rgba(139,92,246,.13)",
                  border:"1px solid rgba(139,92,246,.32)",
                  boxShadow:"0 0 14px rgba(139,92,246,.28)",
                }}>
                  <span style={{ width:"5px", height:"5px", borderRadius:"50%", background:"#22c55e", boxShadow:"0 0 5px #22c55e", flexShrink:0 }} />
                  <span style={{ fontSize:"var(--window-text-sm)", fontWeight:"700", color:"#C4B5FD", letterSpacing:".12em", textTransform:"uppercase", whiteSpace:"nowrap" }}>
                    Software Engineer
                  </span>
                </span>
              </div>

              {/* Name */}
              <div className="fsu fsu-2">
                <div style={{ fontSize:"var(--window-text-xxxl)", fontWeight:"800", letterSpacing:"-.06em", lineHeight:.9, color:"#fff", textShadow:"0 0 40px rgba(139,92,246,.2)" }}>
                  Brandon
                </div>
                <div style={{
                  fontSize:"var(--window-text-xxxl)", fontWeight:"800", letterSpacing:"-.06em", lineHeight:.9,
                  background:"linear-gradient(180deg,#FFFFFF 0%,#D8B4FE 45%,#8B5CF6 100%)",
                  WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent",
                }}>
                  Jablasone
                </div>
              </div>

              {/* Intro */}
              <div className="fsu fsu-3">
                <p style={{ fontSize:"var(--window-text-md)", color:"#B3B3B3", lineHeight:"1.65", margin:0, textShadow:"0 2px 12px rgba(0,0,0,.7)" }}>
                  Aspiring software developer passionate about building scalable software and solving complex problems.
                </p>
              </div>

              {/* Tech badges */}
              <div className="fsu fsu-4" style={{ display:"flex", flexWrap:"wrap", gap:"var(--window-gap-sm)" }}>
                {["Java","JavaScript","Python","SQL","C"].map(t => <span key={t} className="pf-tb">{t}</span>)}
              </div>

              {/* CTA buttons */}
              <div className="fsu fsu-5" style={{ display:"flex", gap:"var(--window-gap-md)" }}>
                <button className="pf-btn-p" style={{ flex:1 }} onClick={() => scrollTo("projects")}>View Projects</button>
                <button className="pf-btn-o" style={{ flex:1 }} onClick={() => scrollTo("contact")}>Contact Me</button>
              </div>
            </div>
            {/* Right 50% intentionally empty — architecture artwork shows through */}
          </div>

          {/* Scroll hint */}
          <div style={{
            position:"absolute", bottom:"var(--window-padding-md)", left:"50%", transform:"translateX(-50%)",
            zIndex:10, display:"flex", flexDirection:"column", alignItems:"center",
            gap:"var(--window-gap-sm)", opacity:.25, pointerEvents:"none",
          }}>
            <span style={{ fontSize:"var(--window-text-sm)", color:"#A1A1AA", letterSpacing:".1em" }}>SCROLL</span>
            <svg style={{ ...iconStyle("md"), overflow:"visible" }} viewBox="0 0 10 6" fill="none">
              <path d="M1 1l4 4 4-4" stroke="#A1A1AA" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </section>

        {/* ── ABOUT ──────────────────────────────────────────────────────── */}
        <section id="about" style={{ padding:"var(--window-padding-xxl) var(--window-padding-xl)" }}>
          <div className="pf-sec-title">About Me</div>
          <div className="pf-sec-div" />
          <div style={{ display:"flex", flexDirection:"column", gap:"var(--window-gap-md)" }}>
            <p style={{ fontSize:"var(--window-text-md)", fontWeight:"500", color:"#fff", lineHeight:"1.8" }}>Hello 👋</p>
            <p style={{ fontSize:"var(--window-text-md)", color:"#A1A1AA", lineHeight:"1.75" }}>
              I'm an aspiring software developer passionate about problem-solving and writing clean, efficient code.
            </p>
            <p style={{ fontSize:"var(--window-text-md)", color:"#A1A1AA", lineHeight:"1.75" }}>
              Skilled in Java, JavaScript, Python, SQL, and C. I enjoy creating web applications, backend systems, and interactive user experiences.
            </p>
            <p style={{ fontSize:"var(--window-text-md)", color:"#A1A1AA", lineHeight:"1.75" }}>
              Always learning and seeking opportunities to grow as an engineer.
            </p>
          </div>
        </section>

        <div style={{ height:"1px", background:"rgba(255,255,255,.05)", marginInline:"var(--window-padding-xl)" }} />

        {/* ── EXPERIENCE ─────────────────────────────────────────────────── */}
        <section id="experience" style={{ padding:"var(--window-padding-xxl) var(--window-padding-xl)" }}>
          <div className="pf-sec-title">Experience</div>
          <div className="pf-sec-div" />
          <div style={{ display:"flex", gap:"var(--window-gap-lg)" }}>
            <div style={{ display:"flex", flexDirection:"column", alignItems:"center", paddingTop:"3px" }}>
              <div className="pf-dot" />
              <div style={{ width:"1px", flex:1, background:"rgba(139,92,246,.18)", marginTop:"var(--window-gap-sm)" }} />
            </div>
            <div style={{ flex:1 }}>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:"var(--window-gap-sm)" }}>
                <div>
                  <div style={{ fontSize:"var(--window-text-lg)", fontWeight:"650", color:"#fff", letterSpacing:"-.02em" }}>
                    Global Career Accelerator
                  </div>
                  <div style={{ fontSize:"var(--window-text-md)", color:"#8B5CF6", fontWeight:"500", marginTop:"var(--window-gap-sm)" }}>
                    Software Development Intern
                  </div>
                </div>
                <div style={{ fontSize:"var(--window-text-sm)", color:"#A1A1AA", textAlign:"right", flexShrink:0, marginLeft:"var(--window-gap-lg)", lineHeight:"1.6" }}>
                  Feb 2025<br/>Aug 2025
                </div>
              </div>
              <ul style={{ margin:"var(--window-gap-md) 0 0", padding:0, listStyle:"none", display:"flex", flexDirection:"column", gap:"var(--window-gap-sm)" }}>
                {["Developed interactive web applications","Worked with JavaScript","Integrated REST APIs","Built responsive interfaces","Collaborated with team members"].map(item => (
                  <li key={item} style={{ display:"flex", alignItems:"flex-start", gap:"var(--window-gap-sm)" }}>
                    <span style={{ fontSize:"var(--window-text-md)", color:"#8B5CF6", flexShrink:0 }}>›</span>
                    <span style={{ fontSize:"var(--window-text-md)", color:"#A1A1AA", lineHeight:"1.5" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <div style={{ height:"1px", background:"rgba(255,255,255,.05)", marginInline:"var(--window-padding-xl)" }} />

        {/* ── EDUCATION ──────────────────────────────────────────────────── */}
        <section id="education" style={{ padding:"var(--window-padding-xxl) var(--window-padding-xl)" }}>
          <div className="pf-sec-title">Education</div>
          <div className="pf-sec-div" />
          <div className="pf-card" style={{ padding:"var(--window-padding-lg)", display:"flex", gap:"var(--window-gap-lg)", alignItems:"flex-start" }}>
            <div style={{
              ...iconStyle("xxxl"),
              borderRadius:"var(--window-radius-md)", flexShrink:0,
              background:"linear-gradient(135deg,#8B0000 0%,#CC1111 100%)",
              display:"flex", alignItems:"center", justifyContent:"center",
              fontSize:"var(--window-text-sm)", fontWeight:"700", color:"#fff",
              boxShadow:"0 4px 14px rgba(139,17,17,.4)",
            }}>ASU</div>
            <div style={{ display:"flex", flexDirection:"column", gap:"var(--window-gap-sm)" }}>
              <div style={{ fontSize:"var(--window-text-lg)", fontWeight:"650", color:"#fff", letterSpacing:"-.02em" }}>Arizona State University</div>
              <div style={{ fontSize:"var(--window-text-md)", color:"#8B5CF6", fontWeight:"500" }}>B.S. in Software Engineering</div>
              <div style={{ fontSize:"var(--window-text-sm)", color:"#A1A1AA" }}>Ira A. Fulton Schools of Engineering</div>
              <div style={{ display:"flex", gap:"var(--window-gap-md)", alignItems:"center" }}>
                <span style={{ fontSize:"var(--window-text-sm)", color:"#A1A1AA" }}>Graduated May 2026</span>
                <span style={{ color:"rgba(255,255,255,.15)" }}>·</span>
                <span style={{ fontSize:"var(--window-text-sm)", color:"#A1A1AA" }}>GPA 3.13</span>
              </div>
            </div>
          </div>
        </section>

        <div style={{ height:"1px", background:"rgba(255,255,255,.05)", marginInline:"var(--window-padding-xl)" }} />

        {/* ── CERTIFICATES ───────────────────────────────────────────────── */}
        <section id="certificates" style={{ padding:"var(--window-padding-xxl) var(--window-padding-xl)" }}>
          <div className="pf-sec-title">Certificates</div>
          <div className="pf-sec-div" />
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"var(--window-gap-md)" }}>
            {[
              { name:"Java Certification", status:"In Progress", color:"#F59E0B" },
              { name:"Security+",          status:"Planned",     color:"#6366F1" },
              { name:"Network+",           status:"Planned",     color:"#6366F1" },
              { name:"Cloud Fundamentals", status:"Planned",     color:"#6366F1" },
            ].map(c => (
              <div key={c.name} className="pf-card" style={{ padding:"var(--window-padding-md)" }}>
                <div style={{ fontSize:"var(--window-text-md)", fontWeight:"600", color:"#fff", marginBottom:"var(--window-gap-sm)" }}>
                  {c.name}
                </div>
                <span style={{
                  fontSize:"var(--window-text-sm)", fontWeight:"600", color:c.color,
                  background:`${c.color}18`,
                  padding:`var(--window-padding-sm) var(--window-padding-md)`,
                  borderRadius:"var(--window-radius-sm)",
                  border:`1px solid ${c.color}28`,
                }}>{c.status}</span>
              </div>
            ))}
          </div>
        </section>

        <div style={{ height:"1px", background:"rgba(255,255,255,.05)", marginInline:"var(--window-padding-xl)" }} />

        {/* ── PROJECTS ───────────────────────────────────────────────────── */}
        <section id="projects" style={{ padding:"var(--window-padding-xxl) var(--window-padding-xl)" }}>
          <div className="pf-sec-title">Projects</div>
          <div className="pf-sec-div" />
          <div style={{ display:"flex", flexDirection:"column", gap:"var(--window-gap-md)" }}>
            {[
              { title:"Personal Portfolio", desc:"Interactive 3D portfolio showcasing projects and technical skills.", tags:["React","TypeScript","Three.js","React Three Fiber","TailwindCSS"] },
              { title:"Logistics Management System", desc:"Inventory tracking application for small businesses.", tags:["Kotlin Multiplatform"] },
            ].map(p => (
              <div key={p.title} className="pf-card" style={{ padding:"var(--window-padding-lg)" }}>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:"var(--window-gap-sm)" }}>
                  <div style={{ fontSize:"var(--window-text-lg)", fontWeight:"650", color:"#fff", letterSpacing:"-.02em" }}>{p.title}</div>
                  <div style={{
                    ...iconStyle("xl"),
                    borderRadius:"var(--window-radius-sm)",
                    background:"rgba(139,92,246,.12)",
                    display:"flex", alignItems:"center", justifyContent:"center",
                  }}>
                    <svg style={iconStyle("md")} viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="2.2" strokeLinecap="round">
                      <path d="M7 17L17 7M17 7H7M17 7v10"/>
                    </svg>
                  </div>
                </div>
                <p style={{ fontSize:"var(--window-text-md)", color:"#A1A1AA", lineHeight:"1.6", marginBottom:"var(--window-gap-md)" }}>{p.desc}</p>
                <div style={{ display:"flex", flexWrap:"wrap", gap:"var(--window-gap-sm)" }}>
                  {p.tags.map(t => <span key={t} className="pf-tb">{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        <div style={{ height:"1px", background:"rgba(255,255,255,.05)", marginInline:"var(--window-padding-xl)" }} />

        {/* ── CONTACT ────────────────────────────────────────────────────── */}
        <section id="contact" style={{ padding:"var(--window-padding-xxl) var(--window-padding-xl) var(--window-padding-xxxl)" }}>
          <div className="pf-sec-title">Contact</div>
          <div className="pf-sec-div" />

          <p className="window-text-md" style={{ color:"#A1A1AA", lineHeight:"1.65", marginBottom:"var(--window-gap-lg)" }}>
            Open to new opportunities and collaborations. Let's build something great together.
          </p>

          {/* Contact rows — vertical list */}
          <div style={{ display:"flex", flexDirection:"column", gap:"var(--window-gap-sm)", marginBottom:"var(--window-gap-lg)" }}>
            {([
              { Icon: Link2,      label: "LinkedIn",  href: "https://linkedin.com",       sub: "linkedin.com/in/brandonjablasone" },
              { Icon: GitBranch,  label: "GitHub",    href: "https://github.com",          sub: "github.com/brandonjablasone"      },
              { Icon: Mail,       label: "Email",     href: "mailto:brandon@example.com",  sub: "brandon@example.com"              },
              { Icon: Globe,      label: "Portfolio", href: "#",                           sub: "brandonjablasone.dev"             },
            ] as const).map(({ Icon, label, href, sub }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="pf-clink window-rounded-md window-px-md window-py-sm"
                style={{ textDecoration:"none", justifyContent:"space-between" }}
              >
                {/* Left: icon + text */}
                <span style={{ display:"flex", alignItems:"center", gap:"var(--window-gap-md)", minWidth:0 }}>
                  <Icon
                    size="var(--window-icon-lg)"
                    style={{ color:"#8B5CF6", flexShrink:0 }}
                  />
                  <span style={{ display:"flex", flexDirection:"column", gap:"var(--window-gap-sm)", minWidth:0 }}>
                    <span className="window-text-md" style={{ fontWeight:"600", color:"#fff", lineHeight:1 }}>{label}</span>
                    <span className="window-text-sm" style={{ color:"#A1A1AA", lineHeight:1, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{sub}</span>
                  </span>
                </span>
                {/* Right: arrow */}
                <ArrowRight size="var(--window-icon-md)" style={{ color:"#A1A1AA", flexShrink:0 }} />
              </a>
            ))}
          </div>

          <button className="pf-btn-p" style={{ width:"100%", display:"block" }}>Get In Touch</button>
        </section>
      </main>

      {/* ══════════════════════════════════════════════════════════════════════
          FOOTER  (grid row 3 — never scrolls)
      ══════════════════════════════════════════════════════════════════════ */}
      <footer style={{
        display:"flex", alignItems:"center", justifyContent:"center",
        paddingBlock:"var(--window-padding-sm)",
        borderTop:"1px solid rgba(255,255,255,.04)",
        background:"rgba(8,6,16,.9)",
        fontSize:"var(--window-text-sm)",
        color:"#3f3f46",
        letterSpacing:".02em",
      }}>
        © 2026 Brandon Jablasone · Built with React & TypeScript
      </footer>
    </div>
  );
};

export default PortfolioApp;
