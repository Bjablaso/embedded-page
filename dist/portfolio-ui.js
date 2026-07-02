import { jsx as n, jsxs as d } from "react/jsx-runtime";
import { forwardRef as _, createElement as L, useRef as E, useEffect as J, useState as q } from "react";
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const V = (y) => y.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), X = (y) => y.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (x, u, S) => S ? S.toUpperCase() : u.toLowerCase()
), G = (y) => {
  const x = X(y);
  return x.charAt(0).toUpperCase() + x.slice(1);
}, O = (...y) => y.filter((x, u, S) => !!x && x.trim() !== "" && S.indexOf(x) === u).join(" ").trim();
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Q = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Z = _(
  ({
    color: y = "currentColor",
    size: x = 24,
    strokeWidth: u = 2,
    absoluteStrokeWidth: S,
    className: F = "",
    children: C,
    iconNode: A,
    ...e
  }, T) => L(
    "svg",
    {
      ref: T,
      ...Q,
      width: x,
      height: x,
      stroke: y,
      strokeWidth: S ? Number(u) * 24 / Number(x) : u,
      className: O("lucide", F),
      ...e
    },
    [
      ...A.map(([l, m]) => L(l, m)),
      ...Array.isArray(C) ? C : [C]
    ]
  )
);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $ = (y, x) => {
  const u = _(
    ({ className: S, ...F }, C) => L(Z, {
      ref: C,
      iconNode: x,
      className: O(
        `lucide-${V(G(y))}`,
        `lucide-${y}`,
        S
      ),
      ...F
    })
  );
  return u.displayName = G(y), u;
};
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ee = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
], te = $("arrow-right", ee);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ne = [
  ["line", { x1: "6", x2: "6", y1: "3", y2: "15", key: "17qcm7" }],
  ["circle", { cx: "18", cy: "6", r: "3", key: "1h7g24" }],
  ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }],
  ["path", { d: "M18 9a9 9 0 0 1-9 9", key: "n2h4wq" }]
], ie = $("git-branch", ne);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ae = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }]
], re = $("globe", ae);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oe = [
  ["path", { d: "M9 17H7A5 5 0 0 1 7 7h2", key: "8i5ue5" }],
  ["path", { d: "M15 7h2a5 5 0 1 1 0 10h-2", key: "1b9ql8" }],
  ["line", { x1: "8", x2: "16", y1: "12", y2: "12", key: "1jonct" }]
], le = $("link-2", oe);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const de = [
  ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }]
], se = $("mail", de);
function ce({ className: y = "" }) {
  const x = E(null), u = E(null), S = E(0), F = E({ w: 0, h: 0 });
  return J(() => {
    const C = x.current, A = u.current;
    if (!C || !A) return;
    const e = A.getContext("2d");
    if (!e) return;
    const T = () => {
      const { width: s, height: a } = C.getBoundingClientRect();
      if (s === 0 || a === 0) return;
      const r = window.devicePixelRatio || 1;
      A.width = Math.round(s * r), A.height = Math.round(a * r), A.style.width = `${s}px`, A.style.height = `${a}px`, e.setTransform(r, 0, 0, r, 0, 0), F.current = { w: s, h: a };
    };
    T();
    const l = new ResizeObserver(T);
    l.observe(C);
    const m = [
      { rx: 0.5, ry: 0.13, label: "API", color: "#8B5CF6", rs: 0.058 },
      { rx: 0.16, ry: 0.4, label: "DB", color: "#6366F1", rs: 0.048 },
      { rx: 0.84, ry: 0.4, label: "CDN", color: "#A78BFA", rs: 0.048 },
      { rx: 0.3, ry: 0.66, label: "SVC", color: "#7C3AED", rs: 0.043 },
      { rx: 0.7, ry: 0.66, label: "AUTH", color: "#8B5CF6", rs: 0.043 },
      { rx: 0.5, ry: 0.88, label: "K8S", color: "#6366F1", rs: 0.053 }
    ], I = [
      [0, 1],
      [0, 2],
      [0, 3],
      [0, 4],
      [1, 3],
      [2, 4],
      [3, 5],
      [4, 5],
      [1, 5]
    ], N = Array.from({ length: 26 }, () => ({
      rx: Math.random(),
      ry: Math.random(),
      vx: (Math.random() - 0.5) * 7e-4,
      vy: (Math.random() - 0.5) * 7e-4,
      life: Math.random(),
      pr: 4e-3 + Math.random() * 5e-3
    })), R = I.filter(() => Math.random() > 0.15).map((s, a) => ({
      edge: s,
      t: Math.random(),
      spd: 28e-4 + Math.random() * 4e-3,
      color: ["#8B5CF6", "#A78BFA", "#6366F1", "#C084FC"][a % 4]
    }));
    function z(s, a, r, t, o) {
      e.beginPath(), e.moveTo(s + o, a), e.lineTo(s + r - o, a), e.quadraticCurveTo(s + r, a, s + r, a + o), e.lineTo(s + r, a + t - o), e.quadraticCurveTo(s + r, a + t, s + r - o, a + t), e.lineTo(s + o, a + t), e.quadraticCurveTo(s, a + t, s, a + t - o), e.lineTo(s, a + o), e.quadraticCurveTo(s, a, s + o, a), e.closePath();
    }
    function j(s, a, r, t, o, k = 0.82) {
      z(s, a, r, t, 6), e.fillStyle = `rgba(12,8,24,${k})`, e.fill(), e.strokeStyle = o, e.lineWidth = 0.75, e.stroke(), e.save(), e.beginPath(), e.rect(s + 1, a + 1, r - 2, 9), e.clip(), e.fillStyle = "rgba(255,255,255,0.032)", e.fill(), e.restore();
    }
    function U(s, a, r) {
      const t = Math.min(s, a), o = t * 0.46, k = t * 0.36, p = t * 0.03, f = t * 0.03, h = Math.sin(r * 0.65) * t * 0.011;
      j(p, f + h, o, k, "rgba(139,92,246,0.4)"), e.fillStyle = "rgba(139,92,246,0.14)", z(p, f + h, o, t * 0.072, 6), e.fill(), ["#ef4444", "#f59e0b", "#22c55e"].forEach((c, g) => {
        e.beginPath(), e.arc(p + t * 0.036 + g * t * 0.034, f + h + t * 0.036, t * 0.012, 0, Math.PI * 2), e.fillStyle = c, e.fill();
      }), e.fillStyle = "rgba(161,161,170,0.5)", e.font = `${t * 0.024}px Inter,sans-serif`, e.fillText("index.ts", p + t * 0.17, f + h + t * 0.05);
      const M = [
        { c: "#C084FC", tx: "async fn deploy(" },
        { c: "#60A5FA", tx: "  srv: Service" },
        { c: "#34D399", tx: "  await scale()" },
        { c: "#A78BFA", tx: "  api.connect()" },
        { c: "#C084FC", tx: "}" }
      ], i = t * 0.05, w = t * 0.022;
      M.forEach(({ c, tx: g }, b) => {
        e.fillStyle = c, e.font = `${w}px 'JetBrains Mono',monospace`, e.fillText(g, p + t * 0.028, f + h + t * 0.12 + b * i);
      }), Math.floor(r * 1.8) % 2 === 0 && (e.fillStyle = "#8B5CF6", e.fillRect(p + t * 0.028 + t * 0.11, f + h + t * 0.12 + 4 * i - w, t * 0.015, w * 1.1));
      for (let c = 0; c < 5; c++)
        e.fillStyle = "rgba(99,102,241,0.35)", e.font = `${t * 0.019}px monospace`, e.textAlign = "right", e.fillText(`${c + 1}`, p + t * 0.022, f + h + t * 0.12 + c * i), e.textAlign = "left";
    }
    function Y(s, a, r) {
      const t = Math.min(s, a), o = t * 0.46, k = t * 0.38, p = s - o - t * 0.03, f = t * 0.03, h = Math.sin(r * 0.5 + 1.5) * t * 0.012;
      j(p, f + h, o, k, "rgba(99,102,241,0.34)"), e.fillStyle = "rgba(255,255,255,0.72)", e.font = `${t * 0.027}px Inter,sans-serif`, e.fillText("System Status", p + t * 0.04, f + h + t * 0.066);
      const M = 0.5 + 0.5 * Math.sin(r * 3);
      e.beginPath(), e.arc(p + o - t * 0.055, f + h + t * 0.05, t * 0.02 * M, 0, Math.PI * 2), e.fillStyle = `rgba(34,197,94,${0.22 * M})`, e.fill(), e.beginPath(), e.arc(p + o - t * 0.055, f + h + t * 0.05, t * 0.013, 0, Math.PI * 2), e.fillStyle = "#22c55e", e.fill();
      const i = [
        { l: "CPU", v: 0.64 + Math.sin(r * 0.45) * 0.09, c: "#8B5CF6" },
        { l: "RAM", v: 0.47 + Math.sin(r * 0.3 + 1) * 0.06, c: "#6366F1" },
        { l: "NET", v: 0.78 + Math.sin(r * 0.6 + 2) * 0.1, c: "#A78BFA" },
        { l: "DISK", v: 0.31 + Math.sin(r * 0.2 + 0.5) * 0.03, c: "#34D399" }
      ], w = o - t * 0.1, c = t * 0.028;
      i.forEach(({ l: g, v: b, c: v }, B) => {
        const P = p + t * 0.04, W = f + h + t * 0.125 + B * t * 0.065;
        e.fillStyle = "rgba(255,255,255,0.05)", z(P, W, w, c, 3), e.fill(), e.fillStyle = v, z(P, W, w * Math.min(b, 1), c, 3), e.fill(), e.fillStyle = "rgba(161,161,170,0.65)", e.font = `${t * 0.021}px Inter,sans-serif`, e.fillText(g, P, W - t * 0.012), e.fillStyle = "rgba(255,255,255,0.5)", e.fillText(`${Math.round(b * 100)}%`, P + w - t * 0.065, W - t * 0.012);
      });
    }
    function K(s, a, r) {
      const t = Math.min(s, a), o = t * 0.52, k = t * 0.3, p = s / 2 - o / 2, f = a - k - t * 0.04, h = Math.sin(r * 0.48 + 2.1) * t * 9e-3;
      j(p, f + h, o, k, "rgba(139,92,246,0.3)"), e.fillStyle = "rgba(139,92,246,0.13)", z(p, f + h, o, t * 0.078, 6), e.fill(), e.fillStyle = "rgba(255,255,255,0.68)", e.font = `${t * 0.025}px Inter,sans-serif`, e.fillText("REST API  v2.4.1", p + t * 0.04, f + h + t * 0.052);
      const M = 0.5 + 0.5 * Math.sin(r * 3.2);
      e.beginPath(), e.arc(p + o - t * 0.05, f + h + t * 0.039, t * 0.02 * M, 0, Math.PI * 2), e.fillStyle = `rgba(34,197,94,${0.25 * M})`, e.fill(), e.beginPath(), e.arc(p + o - t * 0.05, f + h + t * 0.039, t * 0.013, 0, Math.PI * 2), e.fillStyle = "#22c55e", e.fill();
      const i = [
        { m: "GET", p: "/users", c: "#34D399" },
        { m: "POST", p: "/deploy", c: "#60A5FA" },
        { m: "PUT", p: "/scale", c: "#FBBF24" }
      ], w = t * 0.065, c = t * 0.021;
      i.forEach(({ m: g, p: b, c: v }, B) => {
        const P = f + h + t * 0.125 + B * w;
        e.fillStyle = v, e.font = `${c}px 'JetBrains Mono',monospace`, e.fillText(g.padEnd(7), p + t * 0.04, P), e.fillStyle = "rgba(255,255,255,0.45)", e.fillText(b, p + t * 0.2, P), e.fillStyle = `${v}22`, z(p + o - t * 0.14, P - c, t * 0.11, t * 0.037, 3), e.fill(), e.fillStyle = v, e.font = `${t * 0.018}px Inter,sans-serif`, e.textAlign = "center", e.fillText("200 OK", p + o - t * 0.085, P - c * 0.1), e.textAlign = "left";
      });
    }
    function H(s) {
      const { w: a, h: r } = F.current;
      if (a === 0 || r === 0) {
        S.current = requestAnimationFrame(H);
        return;
      }
      const t = s * 1e-3, o = Math.min(a, r);
      e.clearRect(0, 0, a, r);
      const k = e.createRadialGradient(a * 0.5, r * 0.44, 0, a * 0.5, r * 0.44, a * 0.9);
      k.addColorStop(0, "rgba(26,14,50,0.97)"), k.addColorStop(0.5, "rgba(12,7,26,0.99)"), k.addColorStop(1, "rgba(11,11,11,1)"), e.fillStyle = k, e.fillRect(0, 0, a, r), e.save(), e.strokeStyle = "rgba(139,92,246,0.045)", e.lineWidth = 0.5;
      const p = o * 0.082;
      for (let i = 0; i <= a; i += p)
        e.beginPath(), e.moveTo(i, 0), e.lineTo(i, r), e.stroke();
      for (let i = 0; i <= r; i += p)
        e.beginPath(), e.moveTo(0, i), e.lineTo(a, i), e.stroke();
      e.restore();
      const f = a * 0.5 + Math.sin(t * 0.35) * o * 0.07, h = r * 0.46 + Math.cos(t * 0.28) * o * 0.05, M = e.createRadialGradient(f, h, 0, f, h, o * 0.32);
      M.addColorStop(0, "rgba(139,92,246,0.12)"), M.addColorStop(1, "transparent"), e.fillStyle = M, e.beginPath(), e.arc(f, h, o * 0.32, 0, Math.PI * 2), e.fill(), I.forEach(([i, w]) => {
        const c = m[i], g = m[w];
        e.save(), e.beginPath(), e.moveTo(c.rx * a, c.ry * r), e.lineTo(g.rx * a, g.ry * r), e.strokeStyle = "rgba(139,92,246,0.14)", e.lineWidth = 0.65, e.setLineDash([o * 0.016, o * 0.026]), e.stroke(), e.setLineDash([]), e.restore();
      }), R.forEach((i) => {
        i.t += i.spd, i.t > 1 && (i.t = 0);
        const w = m[i.edge[0]], c = m[i.edge[1]], g = w.rx * a + (c.rx * a - w.rx * a) * i.t, b = w.ry * r + (c.ry * r - w.ry * r) * i.t, v = e.createRadialGradient(g, b, 0, g, b, o * 0.032);
        v.addColorStop(0, i.color + "88"), v.addColorStop(1, "transparent"), e.fillStyle = v, e.beginPath(), e.arc(g, b, o * 0.032, 0, Math.PI * 2), e.fill(), e.beginPath(), e.arc(g, b, o * 9e-3, 0, Math.PI * 2), e.fillStyle = i.color, e.fill();
      }), m.forEach((i, w) => {
        const c = i.rx * a, g = i.ry * r, b = Math.sin(t * 0.58 + w * 1.05) * o * 0.014, v = i.rs * o, B = e.createRadialGradient(c, g + b, 0, c, g + b, v * 2.8);
        B.addColorStop(0, i.color + "30"), B.addColorStop(1, "transparent"), e.fillStyle = B, e.beginPath(), e.arc(c, g + b, v * 2.8, 0, Math.PI * 2), e.fill(), e.beginPath(), e.arc(c, g + b, v, 0, Math.PI * 2), e.fillStyle = "rgba(10,6,20,0.93)", e.fill(), e.strokeStyle = i.color, e.lineWidth = 0.9, e.stroke(), e.beginPath(), e.arc(c, g + b, v - o * 0.01, 0, Math.PI * 2), e.fillStyle = i.color + "1A", e.fill(), e.fillStyle = "#fff", e.font = `${Math.max(8, v * 0.85)}px Inter,sans-serif`, e.textAlign = "center", e.fillText(i.label, c, g + b + v * 0.36), e.textAlign = "left";
      }), N.forEach((i) => {
        i.rx += i.vx, i.ry += i.vy, (i.rx < 0 || i.rx > 1) && (i.vx *= -1), (i.ry < 0 || i.ry > 1) && (i.vy *= -1), i.life = (i.life + 3e-3) % 1;
        const w = Math.sin(i.life * Math.PI) * 0.36;
        e.beginPath(), e.arc(i.rx * a, i.ry * r, i.pr * o, 0, Math.PI * 2), e.fillStyle = `rgba(167,139,250,${w})`, e.fill();
      }), U(a, r, t), Y(a, r, t), K(a, r, t), [[0, 0], [1, 0], [0, 1], [1, 1]].forEach(([i, w]) => {
        const c = i === 0 ? o * 0.025 : a - o * 0.025, g = w === 0 ? o * 0.025 : r - o * 0.025, b = i === 0 ? 1 : -1, v = w === 0 ? 1 : -1, B = o * 0.038;
        e.strokeStyle = "rgba(139,92,246,0.3)", e.lineWidth = 0.85, e.beginPath(), e.moveTo(c, g + v * B), e.lineTo(c, g), e.lineTo(c + b * B, g), e.stroke();
      }), S.current = requestAnimationFrame(H);
    }
    return S.current = requestAnimationFrame(H), () => {
      cancelAnimationFrame(S.current), l.disconnect();
    };
  }, []), /* @__PURE__ */ n("div", { ref: x, className: `relative ${y}`, children: /* @__PURE__ */ n("canvas", { ref: u, style: { display: "block", width: "100%", height: "100%" } }) });
}
const D = ["home", "about", "experience", "education", "certificates", "projects", "contact"], pe = ["Home", "About Me", "Experience", "Education", "Certificates", "Projects", "Contact"], he = ({ className: y = "", style: x }) => {
  const [u, S] = q("home"), [F, C] = q(!1), A = E(null);
  J(() => {
    const l = A.current;
    if (!l) return;
    const m = () => {
      C(l.scrollTop > 4);
      const I = l.scrollTop + 24;
      for (let N = D.length - 1; N >= 0; N--) {
        const R = l.querySelector(`#${D[N]}`);
        if (R && R.offsetTop <= I) {
          S(D[N]);
          break;
        }
      }
    };
    return l.addEventListener("scroll", m, { passive: !0 }), () => l.removeEventListener("scroll", m);
  }, []);
  const e = (l) => {
    const m = A.current;
    if (!m) return;
    const I = m.querySelector(`#${l}`);
    I && m.scrollTo({ top: I.offsetTop, behavior: "smooth" });
  }, T = (l) => ({
    width: `var(--window-icon-${l})`,
    height: `var(--window-icon-${l})`,
    flexShrink: 0
  });
  return (
    /* MARKER-MAKE-KIT-INVOKED */
    /* @__PURE__ */ d(
      "div",
      {
        className: `w-full h-full overflow-hidden ${y}`,
        style: {
          display: "grid",
          gridTemplateRows: "20% 1fr 10%",
          background: "#0B0B0B",
          fontFamily: "'Inter',-apple-system,BlinkMacSystemFont,sans-serif",
          ...x
        },
        children: [
          /* @__PURE__ */ n("style", { children: `
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
      ` }),
          /* @__PURE__ */ d(
            "header",
            {
              style: {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingInline: "var(--window-padding-xl)",
                background: F ? "rgba(8,6,16,.96)" : "rgba(8,6,16,.72)",
                backdropFilter: "blur(20px) saturate(1.6)",
                WebkitBackdropFilter: "blur(20px) saturate(1.6)",
                borderBottom: `1px solid ${F ? "rgba(139,92,246,.14)" : "rgba(255,255,255,.04)"}`,
                transition: "background .3s, border-color .3s"
              },
              children: [
                /* @__PURE__ */ d(
                  "button",
                  {
                    onClick: () => e("home"),
                    style: { background: "none", border: "none", cursor: "pointer", padding: 0, display: "flex", alignItems: "center", gap: "var(--window-gap-md)" },
                    children: [
                      /* @__PURE__ */ n(
                        "div",
                        {
                          style: {
                            ...T("xxxl"),
                            borderRadius: "var(--window-radius-md)",
                            background: "linear-gradient(135deg,#9333EA 0%,#6D28D9 100%)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontWeight: "700",
                            color: "#fff",
                            letterSpacing: "-.03em",
                            fontSize: "var(--window-text-md)",
                            boxShadow: "0 0 14px rgba(139,92,246,.45)"
                          },
                          children: "BJ"
                        }
                      ),
                      /* @__PURE__ */ n("span", { style: { fontSize: "var(--window-text-md)", fontWeight: "600", color: "rgba(255,255,255,.8)", letterSpacing: "-.02em" }, children: "Brandon Jablasone" })
                    ]
                  }
                ),
                /* @__PURE__ */ n("nav", { style: { display: "flex", alignItems: "center" }, children: D.map((l, m) => /* @__PURE__ */ d(
                  "button",
                  {
                    onClick: () => e(l),
                    className: `pf-nl${u === l ? " pf-act" : ""}`,
                    children: [
                      pe[m],
                      u === l && /* @__PURE__ */ n("span", { style: {
                        position: "absolute",
                        bottom: 0,
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "55%",
                        height: "1.5px",
                        borderRadius: "1px",
                        background: "linear-gradient(90deg,transparent,#8B5CF6,transparent)"
                      } })
                    ]
                  },
                  l
                )) })
              ]
            }
          ),
          /* @__PURE__ */ d(
            "main",
            {
              ref: A,
              style: { overflowY: "auto", overflowX: "hidden", scrollbarWidth: "none", minHeight: 0 },
              children: [
                /* @__PURE__ */ d(
                  "section",
                  {
                    id: "home",
                    style: { height: "100%", minHeight: "100%", position: "relative", overflow: "hidden" },
                    children: [
                      /* @__PURE__ */ n(ce, { className: "pf-abs pf-fill" }),
                      /* @__PURE__ */ n("div", { style: {
                        position: "absolute",
                        inset: 0,
                        zIndex: 1,
                        pointerEvents: "none",
                        background: "linear-gradient(90deg,rgba(0,0,0,.9) 0%,rgba(0,0,0,.68) 40%,rgba(0,0,0,.26) 66%,transparent 100%)"
                      } }),
                      /* @__PURE__ */ n("div", { style: {
                        position: "absolute",
                        inset: 0,
                        zIndex: 2,
                        pointerEvents: "none",
                        background: "linear-gradient(180deg,transparent 0%,rgba(0,0,0,.28) 55%,rgba(0,0,0,.65) 100%)"
                      } }),
                      /* @__PURE__ */ n("div", { className: "pf-bloom", style: {
                        position: "absolute",
                        zIndex: 3,
                        pointerEvents: "none",
                        width: "240px",
                        height: "240px",
                        top: "50%",
                        left: "8%",
                        transform: "translate(-50%,-50%)",
                        background: "radial-gradient(circle,rgba(139,92,246,.24) 0%,rgba(109,40,217,.07) 48%,transparent 70%)",
                        filter: "blur(20px)"
                      } }),
                      /* @__PURE__ */ n("div", { style: {
                        position: "absolute",
                        inset: 0,
                        zIndex: 3,
                        pointerEvents: "none",
                        background: "radial-gradient(ellipse 52% 62% at 74% 50%,rgba(109,40,217,.19) 0%,transparent 70%)"
                      } }),
                      /* @__PURE__ */ n("div", { style: {
                        position: "absolute",
                        inset: 0,
                        zIndex: 10,
                        display: "flex",
                        alignItems: "center",
                        paddingInline: "var(--window-padding-xl)"
                      }, children: /* @__PURE__ */ d("div", { style: {
                        width: "50%",
                        display: "flex",
                        flexDirection: "column",
                        gap: "var(--window-gap-lg)",
                        padding: "var(--window-padding-lg)",
                        background: "rgba(10,10,10,.22)",
                        backdropFilter: "blur(14px)",
                        WebkitBackdropFilter: "blur(14px)",
                        border: "1px solid rgba(255,255,255,.07)",
                        borderRadius: "var(--window-radius-xl)",
                        boxShadow: "0 0 60px rgba(0,0,0,.45), 0 0 30px rgba(139,92,246,.12)"
                      }, children: [
                        /* @__PURE__ */ n("div", { className: "fsu fsu-1", children: /* @__PURE__ */ d("span", { style: {
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "var(--window-gap-sm)",
                          paddingBlock: "var(--window-padding-sm)",
                          paddingInline: "var(--window-padding-md)",
                          borderRadius: "var(--window-radius-xxxl)",
                          background: "rgba(139,92,246,.13)",
                          border: "1px solid rgba(139,92,246,.32)",
                          boxShadow: "0 0 14px rgba(139,92,246,.28)"
                        }, children: [
                          /* @__PURE__ */ n("span", { style: { width: "5px", height: "5px", borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 5px #22c55e", flexShrink: 0 } }),
                          /* @__PURE__ */ n("span", { style: { fontSize: "var(--window-text-sm)", fontWeight: "700", color: "#C4B5FD", letterSpacing: ".12em", textTransform: "uppercase", whiteSpace: "nowrap" }, children: "Software Engineer" })
                        ] }) }),
                        /* @__PURE__ */ d("div", { className: "fsu fsu-2", children: [
                          /* @__PURE__ */ n("div", { style: { fontSize: "var(--window-text-xxxl)", fontWeight: "800", letterSpacing: "-.06em", lineHeight: 0.9, color: "#fff", textShadow: "0 0 40px rgba(139,92,246,.2)" }, children: "Brandon" }),
                          /* @__PURE__ */ n("div", { style: {
                            fontSize: "var(--window-text-xxxl)",
                            fontWeight: "800",
                            letterSpacing: "-.06em",
                            lineHeight: 0.9,
                            background: "linear-gradient(180deg,#FFFFFF 0%,#D8B4FE 45%,#8B5CF6 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent"
                          }, children: "Jablasone" })
                        ] }),
                        /* @__PURE__ */ n("div", { className: "fsu fsu-3", children: /* @__PURE__ */ n("p", { style: { fontSize: "var(--window-text-md)", color: "#B3B3B3", lineHeight: "1.65", margin: 0, textShadow: "0 2px 12px rgba(0,0,0,.7)" }, children: "Aspiring software developer passionate about building scalable software and solving complex problems." }) }),
                        /* @__PURE__ */ n("div", { className: "fsu fsu-4", style: { display: "flex", flexWrap: "wrap", gap: "var(--window-gap-sm)" }, children: ["Java", "JavaScript", "Python", "SQL", "C"].map((l) => /* @__PURE__ */ n("span", { className: "pf-tb", children: l }, l)) }),
                        /* @__PURE__ */ d("div", { className: "fsu fsu-5", style: { display: "flex", gap: "var(--window-gap-md)" }, children: [
                          /* @__PURE__ */ n("button", { className: "pf-btn-p", style: { flex: 1 }, onClick: () => e("projects"), children: "View Projects" }),
                          /* @__PURE__ */ n("button", { className: "pf-btn-o", style: { flex: 1 }, onClick: () => e("contact"), children: "Contact Me" })
                        ] })
                      ] }) }),
                      /* @__PURE__ */ d("div", { style: {
                        position: "absolute",
                        bottom: "var(--window-padding-md)",
                        left: "50%",
                        transform: "translateX(-50%)",
                        zIndex: 10,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "var(--window-gap-sm)",
                        opacity: 0.25,
                        pointerEvents: "none"
                      }, children: [
                        /* @__PURE__ */ n("span", { style: { fontSize: "var(--window-text-sm)", color: "#A1A1AA", letterSpacing: ".1em" }, children: "SCROLL" }),
                        /* @__PURE__ */ n("svg", { style: { ...T("md"), overflow: "visible" }, viewBox: "0 0 10 6", fill: "none", children: /* @__PURE__ */ n("path", { d: "M1 1l4 4 4-4", stroke: "#A1A1AA", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" }) })
                      ] })
                    ]
                  }
                ),
                /* @__PURE__ */ d("section", { id: "about", style: { padding: "var(--window-padding-xxl) var(--window-padding-xl)" }, children: [
                  /* @__PURE__ */ n("div", { className: "pf-sec-title", children: "About Me" }),
                  /* @__PURE__ */ n("div", { className: "pf-sec-div" }),
                  /* @__PURE__ */ d("div", { style: { display: "flex", flexDirection: "column", gap: "var(--window-gap-md)" }, children: [
                    /* @__PURE__ */ n("p", { style: { fontSize: "var(--window-text-md)", fontWeight: "500", color: "#fff", lineHeight: "1.8" }, children: "Hello 👋" }),
                    /* @__PURE__ */ n("p", { style: { fontSize: "var(--window-text-md)", color: "#A1A1AA", lineHeight: "1.75" }, children: "I'm an aspiring software developer passionate about problem-solving and writing clean, efficient code." }),
                    /* @__PURE__ */ n("p", { style: { fontSize: "var(--window-text-md)", color: "#A1A1AA", lineHeight: "1.75" }, children: "Skilled in Java, JavaScript, Python, SQL, and C. I enjoy creating web applications, backend systems, and interactive user experiences." }),
                    /* @__PURE__ */ n("p", { style: { fontSize: "var(--window-text-md)", color: "#A1A1AA", lineHeight: "1.75" }, children: "Always learning and seeking opportunities to grow as an engineer." })
                  ] })
                ] }),
                /* @__PURE__ */ n("div", { style: { height: "1px", background: "rgba(255,255,255,.05)", marginInline: "var(--window-padding-xl)" } }),
                /* @__PURE__ */ d("section", { id: "experience", style: { padding: "var(--window-padding-xxl) var(--window-padding-xl)" }, children: [
                  /* @__PURE__ */ n("div", { className: "pf-sec-title", children: "Experience" }),
                  /* @__PURE__ */ n("div", { className: "pf-sec-div" }),
                  /* @__PURE__ */ d("div", { style: { display: "flex", gap: "var(--window-gap-lg)" }, children: [
                    /* @__PURE__ */ d("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "3px" }, children: [
                      /* @__PURE__ */ n("div", { className: "pf-dot" }),
                      /* @__PURE__ */ n("div", { style: { width: "1px", flex: 1, background: "rgba(139,92,246,.18)", marginTop: "var(--window-gap-sm)" } })
                    ] }),
                    /* @__PURE__ */ d("div", { style: { flex: 1 }, children: [
                      /* @__PURE__ */ d("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "var(--window-gap-sm)" }, children: [
                        /* @__PURE__ */ d("div", { children: [
                          /* @__PURE__ */ n("div", { style: { fontSize: "var(--window-text-lg)", fontWeight: "650", color: "#fff", letterSpacing: "-.02em" }, children: "Global Career Accelerator" }),
                          /* @__PURE__ */ n("div", { style: { fontSize: "var(--window-text-md)", color: "#8B5CF6", fontWeight: "500", marginTop: "var(--window-gap-sm)" }, children: "Software Development Intern" })
                        ] }),
                        /* @__PURE__ */ d("div", { style: { fontSize: "var(--window-text-sm)", color: "#A1A1AA", textAlign: "right", flexShrink: 0, marginLeft: "var(--window-gap-lg)", lineHeight: "1.6" }, children: [
                          "Feb 2025",
                          /* @__PURE__ */ n("br", {}),
                          "Aug 2025"
                        ] })
                      ] }),
                      /* @__PURE__ */ n("ul", { style: { margin: "var(--window-gap-md) 0 0", padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "var(--window-gap-sm)" }, children: ["Developed interactive web applications", "Worked with JavaScript", "Integrated REST APIs", "Built responsive interfaces", "Collaborated with team members"].map((l) => /* @__PURE__ */ d("li", { style: { display: "flex", alignItems: "flex-start", gap: "var(--window-gap-sm)" }, children: [
                        /* @__PURE__ */ n("span", { style: { fontSize: "var(--window-text-md)", color: "#8B5CF6", flexShrink: 0 }, children: "›" }),
                        /* @__PURE__ */ n("span", { style: { fontSize: "var(--window-text-md)", color: "#A1A1AA", lineHeight: "1.5" }, children: l })
                      ] }, l)) })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ n("div", { style: { height: "1px", background: "rgba(255,255,255,.05)", marginInline: "var(--window-padding-xl)" } }),
                /* @__PURE__ */ d("section", { id: "education", style: { padding: "var(--window-padding-xxl) var(--window-padding-xl)" }, children: [
                  /* @__PURE__ */ n("div", { className: "pf-sec-title", children: "Education" }),
                  /* @__PURE__ */ n("div", { className: "pf-sec-div" }),
                  /* @__PURE__ */ d("div", { className: "pf-card", style: { padding: "var(--window-padding-lg)", display: "flex", gap: "var(--window-gap-lg)", alignItems: "flex-start" }, children: [
                    /* @__PURE__ */ n("div", { style: {
                      ...T("xxxl"),
                      borderRadius: "var(--window-radius-md)",
                      flexShrink: 0,
                      background: "linear-gradient(135deg,#8B0000 0%,#CC1111 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "var(--window-text-sm)",
                      fontWeight: "700",
                      color: "#fff",
                      boxShadow: "0 4px 14px rgba(139,17,17,.4)"
                    }, children: "ASU" }),
                    /* @__PURE__ */ d("div", { style: { display: "flex", flexDirection: "column", gap: "var(--window-gap-sm)" }, children: [
                      /* @__PURE__ */ n("div", { style: { fontSize: "var(--window-text-lg)", fontWeight: "650", color: "#fff", letterSpacing: "-.02em" }, children: "Arizona State University" }),
                      /* @__PURE__ */ n("div", { style: { fontSize: "var(--window-text-md)", color: "#8B5CF6", fontWeight: "500" }, children: "B.S. in Software Engineering" }),
                      /* @__PURE__ */ n("div", { style: { fontSize: "var(--window-text-sm)", color: "#A1A1AA" }, children: "Ira A. Fulton Schools of Engineering" }),
                      /* @__PURE__ */ d("div", { style: { display: "flex", gap: "var(--window-gap-md)", alignItems: "center" }, children: [
                        /* @__PURE__ */ n("span", { style: { fontSize: "var(--window-text-sm)", color: "#A1A1AA" }, children: "Graduated May 2026" }),
                        /* @__PURE__ */ n("span", { style: { color: "rgba(255,255,255,.15)" }, children: "·" }),
                        /* @__PURE__ */ n("span", { style: { fontSize: "var(--window-text-sm)", color: "#A1A1AA" }, children: "GPA 3.13" })
                      ] })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ n("div", { style: { height: "1px", background: "rgba(255,255,255,.05)", marginInline: "var(--window-padding-xl)" } }),
                /* @__PURE__ */ d("section", { id: "certificates", style: { padding: "var(--window-padding-xxl) var(--window-padding-xl)" }, children: [
                  /* @__PURE__ */ n("div", { className: "pf-sec-title", children: "Certificates" }),
                  /* @__PURE__ */ n("div", { className: "pf-sec-div" }),
                  /* @__PURE__ */ n("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--window-gap-md)" }, children: [
                    { name: "Java Certification", status: "In Progress", color: "#F59E0B" },
                    { name: "Security+", status: "Planned", color: "#6366F1" },
                    { name: "Network+", status: "Planned", color: "#6366F1" },
                    { name: "Cloud Fundamentals", status: "Planned", color: "#6366F1" }
                  ].map((l) => /* @__PURE__ */ d("div", { className: "pf-card", style: { padding: "var(--window-padding-md)" }, children: [
                    /* @__PURE__ */ n("div", { style: { fontSize: "var(--window-text-md)", fontWeight: "600", color: "#fff", marginBottom: "var(--window-gap-sm)" }, children: l.name }),
                    /* @__PURE__ */ n("span", { style: {
                      fontSize: "var(--window-text-sm)",
                      fontWeight: "600",
                      color: l.color,
                      background: `${l.color}18`,
                      padding: "var(--window-padding-sm) var(--window-padding-md)",
                      borderRadius: "var(--window-radius-sm)",
                      border: `1px solid ${l.color}28`
                    }, children: l.status })
                  ] }, l.name)) })
                ] }),
                /* @__PURE__ */ n("div", { style: { height: "1px", background: "rgba(255,255,255,.05)", marginInline: "var(--window-padding-xl)" } }),
                /* @__PURE__ */ d("section", { id: "projects", style: { padding: "var(--window-padding-xxl) var(--window-padding-xl)" }, children: [
                  /* @__PURE__ */ n("div", { className: "pf-sec-title", children: "Projects" }),
                  /* @__PURE__ */ n("div", { className: "pf-sec-div" }),
                  /* @__PURE__ */ n("div", { style: { display: "flex", flexDirection: "column", gap: "var(--window-gap-md)" }, children: [
                    { title: "Personal Portfolio", desc: "Interactive 3D portfolio showcasing projects and technical skills.", tags: ["React", "TypeScript", "Three.js", "React Three Fiber", "TailwindCSS"] },
                    { title: "Logistics Management System", desc: "Inventory tracking application for small businesses.", tags: ["Kotlin Multiplatform"] }
                  ].map((l) => /* @__PURE__ */ d("div", { className: "pf-card", style: { padding: "var(--window-padding-lg)" }, children: [
                    /* @__PURE__ */ d("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "var(--window-gap-sm)" }, children: [
                      /* @__PURE__ */ n("div", { style: { fontSize: "var(--window-text-lg)", fontWeight: "650", color: "#fff", letterSpacing: "-.02em" }, children: l.title }),
                      /* @__PURE__ */ n("div", { style: {
                        ...T("xl"),
                        borderRadius: "var(--window-radius-sm)",
                        background: "rgba(139,92,246,.12)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                      }, children: /* @__PURE__ */ n("svg", { style: T("md"), viewBox: "0 0 24 24", fill: "none", stroke: "#8B5CF6", strokeWidth: "2.2", strokeLinecap: "round", children: /* @__PURE__ */ n("path", { d: "M7 17L17 7M17 7H7M17 7v10" }) }) })
                    ] }),
                    /* @__PURE__ */ n("p", { style: { fontSize: "var(--window-text-md)", color: "#A1A1AA", lineHeight: "1.6", marginBottom: "var(--window-gap-md)" }, children: l.desc }),
                    /* @__PURE__ */ n("div", { style: { display: "flex", flexWrap: "wrap", gap: "var(--window-gap-sm)" }, children: l.tags.map((m) => /* @__PURE__ */ n("span", { className: "pf-tb", children: m }, m)) })
                  ] }, l.title)) })
                ] }),
                /* @__PURE__ */ n("div", { style: { height: "1px", background: "rgba(255,255,255,.05)", marginInline: "var(--window-padding-xl)" } }),
                /* @__PURE__ */ d("section", { id: "contact", style: { padding: "var(--window-padding-xxl) var(--window-padding-xl) var(--window-padding-xxxl)" }, children: [
                  /* @__PURE__ */ n("div", { className: "pf-sec-title", children: "Contact" }),
                  /* @__PURE__ */ n("div", { className: "pf-sec-div" }),
                  /* @__PURE__ */ n("p", { className: "window-text-md", style: { color: "#A1A1AA", lineHeight: "1.65", marginBottom: "var(--window-gap-lg)" }, children: "Open to new opportunities and collaborations. Let's build something great together." }),
                  /* @__PURE__ */ n("div", { style: { display: "flex", flexDirection: "column", gap: "var(--window-gap-sm)", marginBottom: "var(--window-gap-lg)" }, children: [
                    { Icon: le, label: "LinkedIn", href: "https://linkedin.com", sub: "linkedin.com/in/brandonjablasone" },
                    { Icon: ie, label: "GitHub", href: "https://github.com", sub: "github.com/brandonjablasone" },
                    { Icon: se, label: "Email", href: "mailto:brandon@example.com", sub: "brandon@example.com" },
                    { Icon: re, label: "Portfolio", href: "#", sub: "brandonjablasone.dev" }
                  ].map(({ Icon: l, label: m, href: I, sub: N }) => /* @__PURE__ */ d(
                    "a",
                    {
                      href: I,
                      target: I.startsWith("http") ? "_blank" : void 0,
                      rel: I.startsWith("http") ? "noopener noreferrer" : void 0,
                      className: "pf-clink window-rounded-md window-px-md window-py-sm",
                      style: { textDecoration: "none", justifyContent: "space-between" },
                      children: [
                        /* @__PURE__ */ d("span", { style: { display: "flex", alignItems: "center", gap: "var(--window-gap-md)", minWidth: 0 }, children: [
                          /* @__PURE__ */ n(
                            l,
                            {
                              size: "var(--window-icon-lg)",
                              style: { color: "#8B5CF6", flexShrink: 0 }
                            }
                          ),
                          /* @__PURE__ */ d("span", { style: { display: "flex", flexDirection: "column", gap: "var(--window-gap-sm)", minWidth: 0 }, children: [
                            /* @__PURE__ */ n("span", { className: "window-text-md", style: { fontWeight: "600", color: "#fff", lineHeight: 1 }, children: m }),
                            /* @__PURE__ */ n("span", { className: "window-text-sm", style: { color: "#A1A1AA", lineHeight: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, children: N })
                          ] })
                        ] }),
                        /* @__PURE__ */ n(te, { size: "var(--window-icon-md)", style: { color: "#A1A1AA", flexShrink: 0 } })
                      ]
                    },
                    m
                  )) }),
                  /* @__PURE__ */ n("button", { className: "pf-btn-p", style: { width: "100%", display: "block" }, children: "Get In Touch" })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ n("footer", { style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingBlock: "var(--window-padding-sm)",
            borderTop: "1px solid rgba(255,255,255,.04)",
            background: "rgba(8,6,16,.9)",
            fontSize: "var(--window-text-sm)",
            color: "#3f3f46",
            letterSpacing: ".02em"
          }, children: "© 2026 Brandon Jablasone · Built with React & TypeScript" })
        ]
      }
    )
  );
};
export {
  he as PortfolioApp
};
