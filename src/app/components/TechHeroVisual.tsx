import { useEffect, useRef } from "react";

interface Props {
  className?: string;
}

export function TechHeroVisual({ className = "" }: Props) {
  const wrapRef  = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef  = useRef<number>(0);
  const dimRef    = useRef({ w: 0, h: 0 });

  useEffect(() => {
    const wrap   = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // ── resize helper ────────────────────────────────────────────────────
    const applySize = () => {
      const { width: w, height: h } = wrap.getBoundingClientRect();
      if (w === 0 || h === 0) return;
      const dpr = window.devicePixelRatio || 1;
      canvas.width  = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.width  = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      dimRef.current = { w, h };
    };
    applySize();
    const ro = new ResizeObserver(applySize);
    ro.observe(wrap);

    // ── scene data (relative coords 0-1) ────────────────────────────────
    const NODES = [
      { rx: 0.50, ry: 0.13, label: "API",  color: "#8B5CF6", rs: 0.058 },
      { rx: 0.16, ry: 0.40, label: "DB",   color: "#6366F1", rs: 0.048 },
      { rx: 0.84, ry: 0.40, label: "CDN",  color: "#A78BFA", rs: 0.048 },
      { rx: 0.30, ry: 0.66, label: "SVC",  color: "#7C3AED", rs: 0.043 },
      { rx: 0.70, ry: 0.66, label: "AUTH", color: "#8B5CF6", rs: 0.043 },
      { rx: 0.50, ry: 0.88, label: "K8S",  color: "#6366F1", rs: 0.053 },
    ];

    const EDGES: [number, number][] = [
      [0,1],[0,2],[0,3],[0,4],[1,3],[2,4],[3,5],[4,5],[1,5],
    ];

    const particles = Array.from({ length: 26 }, () => ({
      rx: Math.random(), ry: Math.random(),
      vx: (Math.random() - 0.5) * 0.0007,
      vy: (Math.random() - 0.5) * 0.0007,
      life: Math.random(),
      pr: 0.004 + Math.random() * 0.005,
    }));

    const pkts = EDGES
      .filter(() => Math.random() > 0.15)
      .map((edge, i) => ({
        edge,
        t:   Math.random(),
        spd: 0.0028 + Math.random() * 0.004,
        color: ["#8B5CF6","#A78BFA","#6366F1","#C084FC"][i % 4],
      }));

    // ── draw helpers ─────────────────────────────────────────────────────
    function rrect(x: number, y: number, w: number, h: number, r: number) {
      ctx.beginPath();
      ctx.moveTo(x + r, y);
      ctx.lineTo(x + w - r, y);
      ctx.quadraticCurveTo(x + w, y, x + w, y + r);
      ctx.lineTo(x + w, y + h - r);
      ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
      ctx.lineTo(x + r, y + h);
      ctx.quadraticCurveTo(x, y + h, x, y + h - r);
      ctx.lineTo(x, y + r);
      ctx.quadraticCurveTo(x, y, x + r, y);
      ctx.closePath();
    }

    function glass(x: number, y: number, w: number, h: number, border: string, a = 0.82) {
      rrect(x, y, w, h, 6);
      ctx.fillStyle = `rgba(12,8,24,${a})`; ctx.fill();
      ctx.strokeStyle = border; ctx.lineWidth = 0.75; ctx.stroke();
      ctx.save();
      ctx.beginPath(); ctx.rect(x + 1, y + 1, w - 2, 9); ctx.clip();
      ctx.fillStyle = "rgba(255,255,255,0.032)"; ctx.fill();
      ctx.restore();
    }

    // ── panels ───────────────────────────────────────────────────────────
    function drawCode(W: number, H: number, t: number) {
      const s   = Math.min(W, H);
      const pw  = s * 0.46, ph = s * 0.36;
      const px  = s * 0.03, py = s * 0.03;
      const bob = Math.sin(t * 0.65) * s * 0.011;
      glass(px, py + bob, pw, ph, "rgba(139,92,246,0.4)");

      // title bar
      ctx.fillStyle = "rgba(139,92,246,0.14)";
      rrect(px, py + bob, pw, s * 0.072, 6); ctx.fill();

      ["#ef4444","#f59e0b","#22c55e"].forEach((c, i) => {
        ctx.beginPath();
        ctx.arc(px + s*0.036 + i*s*0.034, py + bob + s*0.036, s*0.012, 0, Math.PI*2);
        ctx.fillStyle = c; ctx.fill();
      });

      ctx.fillStyle = "rgba(161,161,170,0.5)";
      ctx.font = `${s*0.024}px Inter,sans-serif`;
      ctx.fillText("index.ts", px + s*0.17, py + bob + s*0.05);

      const lines = [
        { c: "#C084FC", tx: "async fn deploy(" },
        { c: "#60A5FA", tx: "  srv: Service"   },
        { c: "#34D399", tx: "  await scale()"  },
        { c: "#A78BFA", tx: "  api.connect()"  },
        { c: "#C084FC", tx: "}"                },
      ];
      const lh = s * 0.05, fs = s * 0.022;
      lines.forEach(({ c, tx }, i) => {
        ctx.fillStyle = c;
        ctx.font = `${fs}px 'JetBrains Mono',monospace`;
        ctx.fillText(tx, px + s*0.028, py + bob + s*0.12 + i*lh);
      });

      // blinking cursor
      if (Math.floor(t * 1.8) % 2 === 0) {
        ctx.fillStyle = "#8B5CF6";
        ctx.fillRect(px + s*0.028 + s*0.11, py + bob + s*0.12 + 4*lh - fs, s*0.015, fs*1.1);
      }

      // line numbers
      for (let n = 0; n < 5; n++) {
        ctx.fillStyle = "rgba(99,102,241,0.35)";
        ctx.font = `${s*0.019}px monospace`;
        ctx.textAlign = "right";
        ctx.fillText(`${n+1}`, px + s*0.022, py + bob + s*0.12 + n*lh);
        ctx.textAlign = "left";
      }
    }

    function drawMetrics(W: number, H: number, t: number) {
      const s   = Math.min(W, H);
      const pw  = s * 0.46, ph = s * 0.38;
      const px  = W - pw - s*0.03, py = s*0.03;
      const bob = Math.sin(t * 0.5 + 1.5) * s * 0.012;
      glass(px, py + bob, pw, ph, "rgba(99,102,241,0.34)");

      ctx.fillStyle = "rgba(255,255,255,0.72)";
      ctx.font = `${s*0.027}px Inter,sans-serif`;
      ctx.fillText("System Status", px + s*0.04, py + bob + s*0.066);

      // pulse dot
      const pp = 0.5 + 0.5 * Math.sin(t * 3);
      ctx.beginPath();
      ctx.arc(px + pw - s*0.055, py + bob + s*0.05, s*0.02*pp, 0, Math.PI*2);
      ctx.fillStyle = `rgba(34,197,94,${0.22*pp})`; ctx.fill();
      ctx.beginPath();
      ctx.arc(px + pw - s*0.055, py + bob + s*0.05, s*0.013, 0, Math.PI*2);
      ctx.fillStyle = "#22c55e"; ctx.fill();

      const bars = [
        { l: "CPU",  v: 0.64 + Math.sin(t*0.45)*0.09, c: "#8B5CF6" },
        { l: "RAM",  v: 0.47 + Math.sin(t*0.3+1)*0.06, c: "#6366F1" },
        { l: "NET",  v: 0.78 + Math.sin(t*0.6+2)*0.10, c: "#A78BFA" },
        { l: "DISK", v: 0.31 + Math.sin(t*0.2+0.5)*0.03, c: "#34D399" },
      ];
      const bw = pw - s*0.1, bh = s*0.028;
      bars.forEach(({ l, v, c }, i) => {
        const bx = px + s*0.04, by = py + bob + s*0.125 + i*s*0.065;
        ctx.fillStyle = "rgba(255,255,255,0.05)";
        rrect(bx, by, bw, bh, 3); ctx.fill();
        ctx.fillStyle = c;
        rrect(bx, by, bw * Math.min(v, 1), bh, 3); ctx.fill();
        ctx.fillStyle = "rgba(161,161,170,0.65)";
        ctx.font = `${s*0.021}px Inter,sans-serif`;
        ctx.fillText(l, bx, by - s*0.012);
        ctx.fillStyle = "rgba(255,255,255,0.5)";
        ctx.fillText(`${Math.round(v*100)}%`, bx + bw - s*0.065, by - s*0.012);
      });
    }

    function drawAPI(W: number, H: number, t: number) {
      const s   = Math.min(W, H);
      const pw  = s * 0.52, ph = s * 0.3;
      const px  = W/2 - pw/2, py = H - ph - s*0.04;
      const bob = Math.sin(t * 0.48 + 2.1) * s * 0.009;
      glass(px, py + bob, pw, ph, "rgba(139,92,246,0.3)");

      ctx.fillStyle = "rgba(139,92,246,0.13)";
      rrect(px, py + bob, pw, s*0.078, 6); ctx.fill();
      ctx.fillStyle = "rgba(255,255,255,0.68)";
      ctx.font = `${s*0.025}px Inter,sans-serif`;
      ctx.fillText("REST API  v2.4.1", px + s*0.04, py + bob + s*0.052);

      const pp = 0.5 + 0.5 * Math.sin(t * 3.2);
      ctx.beginPath();
      ctx.arc(px + pw - s*0.05, py + bob + s*0.039, s*0.02*pp, 0, Math.PI*2);
      ctx.fillStyle = `rgba(34,197,94,${0.25*pp})`; ctx.fill();
      ctx.beginPath();
      ctx.arc(px + pw - s*0.05, py + bob + s*0.039, s*0.013, 0, Math.PI*2);
      ctx.fillStyle = "#22c55e"; ctx.fill();

      const routes = [
        { m: "GET",  p: "/users",   c: "#34D399" },
        { m: "POST", p: "/deploy",  c: "#60A5FA" },
        { m: "PUT",  p: "/scale",   c: "#FBBF24" },
      ];
      const lh2 = s*0.065, fs2 = s*0.021;
      routes.forEach(({ m, p, c }, i) => {
        const by = py + bob + s*0.125 + i*lh2;
        ctx.fillStyle = c;
        ctx.font = `${fs2}px 'JetBrains Mono',monospace`;
        ctx.fillText(m.padEnd(7), px + s*0.04, by);
        ctx.fillStyle = "rgba(255,255,255,0.45)";
        ctx.fillText(p, px + s*0.2, by);
        ctx.fillStyle = `${c}22`;
        rrect(px + pw - s*0.14, by - fs2, s*0.11, s*0.037, 3); ctx.fill();
        ctx.fillStyle = c;
        ctx.font = `${s*0.018}px Inter,sans-serif`;
        ctx.textAlign = "center";
        ctx.fillText("200 OK", px + pw - s*0.085, by - fs2*0.1);
        ctx.textAlign = "left";
      });
    }

    // ── render loop ──────────────────────────────────────────────────────
    function render(ts: number) {
      const { w: W, h: H } = dimRef.current;
      if (W === 0 || H === 0) { frameRef.current = requestAnimationFrame(render); return; }
      const t = ts * 0.001;
      const s = Math.min(W, H);

      ctx.clearRect(0, 0, W, H);

      // background
      const bg = ctx.createRadialGradient(W*0.5, H*0.44, 0, W*0.5, H*0.44, W*0.9);
      bg.addColorStop(0, "rgba(26,14,50,0.97)");
      bg.addColorStop(0.5, "rgba(12,7,26,0.99)");
      bg.addColorStop(1, "rgba(11,11,11,1)");
      ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H);

      // grid
      ctx.save();
      ctx.strokeStyle = "rgba(139,92,246,0.045)"; ctx.lineWidth = 0.5;
      const gs = s * 0.082;
      for (let x = 0; x <= W; x += gs) { ctx.beginPath(); ctx.moveTo(x,0); ctx.lineTo(x,H); ctx.stroke(); }
      for (let y = 0; y <= H; y += gs) { ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(W,y); ctx.stroke(); }
      ctx.restore();

      // ambient orb
      const ox = W*0.5 + Math.sin(t*0.35)*s*0.07;
      const oy = H*0.46 + Math.cos(t*0.28)*s*0.05;
      const orb = ctx.createRadialGradient(ox, oy, 0, ox, oy, s*0.32);
      orb.addColorStop(0, "rgba(139,92,246,0.12)"); orb.addColorStop(1, "transparent");
      ctx.fillStyle = orb; ctx.beginPath(); ctx.arc(ox, oy, s*0.32, 0, Math.PI*2); ctx.fill();

      // edges
      EDGES.forEach(([a, b]) => {
        const na = NODES[a], nb = NODES[b];
        ctx.save();
        ctx.beginPath(); ctx.moveTo(na.rx*W, na.ry*H); ctx.lineTo(nb.rx*W, nb.ry*H);
        ctx.strokeStyle = "rgba(139,92,246,0.14)"; ctx.lineWidth = 0.65;
        ctx.setLineDash([s*0.016, s*0.026]); ctx.stroke(); ctx.setLineDash([]);
        ctx.restore();
      });

      // packets
      pkts.forEach(p => {
        p.t += p.spd; if (p.t > 1) p.t = 0;
        const na = NODES[p.edge[0]], nb = NODES[p.edge[1]];
        const x = na.rx*W + (nb.rx*W - na.rx*W)*p.t;
        const y = na.ry*H + (nb.ry*H - na.ry*H)*p.t;
        const tr = ctx.createRadialGradient(x, y, 0, x, y, s*0.032);
        tr.addColorStop(0, p.color+"88"); tr.addColorStop(1, "transparent");
        ctx.fillStyle = tr; ctx.beginPath(); ctx.arc(x, y, s*0.032, 0, Math.PI*2); ctx.fill();
        ctx.beginPath(); ctx.arc(x, y, s*0.009, 0, Math.PI*2); ctx.fillStyle = p.color; ctx.fill();
      });

      // nodes
      NODES.forEach((n, i) => {
        const cx = n.rx*W, cy = n.ry*H;
        const bob = Math.sin(t*0.58 + i*1.05) * s*0.014;
        const nr = n.rs * s;
        const glow = ctx.createRadialGradient(cx, cy+bob, 0, cx, cy+bob, nr*2.8);
        glow.addColorStop(0, n.color+"30"); glow.addColorStop(1, "transparent");
        ctx.fillStyle = glow; ctx.beginPath(); ctx.arc(cx, cy+bob, nr*2.8, 0, Math.PI*2); ctx.fill();
        ctx.beginPath(); ctx.arc(cx, cy+bob, nr, 0, Math.PI*2);
        ctx.fillStyle = "rgba(10,6,20,0.93)"; ctx.fill();
        ctx.strokeStyle = n.color; ctx.lineWidth = 0.9; ctx.stroke();
        ctx.beginPath(); ctx.arc(cx, cy+bob, nr - s*0.01, 0, Math.PI*2);
        ctx.fillStyle = n.color+"1A"; ctx.fill();
        ctx.fillStyle = "#fff";
        ctx.font = `${Math.max(8, nr*0.85)}px Inter,sans-serif`;
        ctx.textAlign = "center";
        ctx.fillText(n.label, cx, cy+bob + nr*0.36);
        ctx.textAlign = "left";
      });

      // particles
      particles.forEach(p => {
        p.rx += p.vx; p.ry += p.vy;
        if (p.rx < 0 || p.rx > 1) p.vx *= -1;
        if (p.ry < 0 || p.ry > 1) p.vy *= -1;
        p.life = (p.life + 0.003) % 1;
        const a = Math.sin(p.life * Math.PI) * 0.36;
        ctx.beginPath(); ctx.arc(p.rx*W, p.ry*H, p.pr*s, 0, Math.PI*2);
        ctx.fillStyle = `rgba(167,139,250,${a})`; ctx.fill();
      });

      // glass panels
      drawCode(W, H, t);
      drawMetrics(W, H, t);
      drawAPI(W, H, t);

      // corner accent marks
      [[0,0],[1,0],[0,1],[1,1]].forEach(([fx, fy]) => {
        const cx = fx === 0 ? s*0.025 : W - s*0.025;
        const cy = fy === 0 ? s*0.025 : H - s*0.025;
        const sx = fx === 0 ? 1 : -1, sy = fy === 0 ? 1 : -1;
        const d = s * 0.038;
        ctx.strokeStyle = "rgba(139,92,246,0.3)"; ctx.lineWidth = 0.85;
        ctx.beginPath();
        ctx.moveTo(cx, cy + sy*d); ctx.lineTo(cx, cy); ctx.lineTo(cx + sx*d, cy);
        ctx.stroke();
      });

      frameRef.current = requestAnimationFrame(render);
    }

    frameRef.current = requestAnimationFrame(render);
    return () => {
      cancelAnimationFrame(frameRef.current);
      ro.disconnect();
    };
  }, []);

  return (
    <div ref={wrapRef} className={`relative ${className}`}>
      <canvas ref={canvasRef} style={{ display: "block", width: "100%", height: "100%" }} />
    </div>
  );
}
