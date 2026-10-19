/* @ds-bundle: {"format":3,"namespace":"OptimisticSystemsDesignSystem_2913f0","components":[{"name":"Footer","sourcePath":"components/content/Footer.jsx"},{"name":"ProjectEntry","sourcePath":"components/content/ProjectEntry.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"CyclingWord","sourcePath":"components/motion/CyclingWord.jsx"},{"name":"NetworkGraph","sourcePath":"components/motion/NetworkGraph.jsx"},{"name":"Nav","sourcePath":"components/navigation/Nav.jsx"}],"sourceHashes":{"components/content/Footer.jsx":"a65de8eb5841","components/content/ProjectEntry.jsx":"1d80d3911096","components/core/Button.jsx":"32c7fd9e721e","components/core/Eyebrow.jsx":"ae41d1020a9b","components/core/Tag.jsx":"25c0dea21328","components/motion/CyclingWord.jsx":"2bc67dd3b9d7","components/motion/NetworkGraph.jsx":"6cfaf3f2e350","components/navigation/Nav.jsx":"6c1d182230a4","ui_kits/portfolio/AboutPage.jsx":"2bdb96dafd50","ui_kits/portfolio/App.jsx":"0c1e759f3187","ui_kits/portfolio/Hero.jsx":"0a1cc69ebba4","ui_kits/portfolio/WorkSection.jsx":"d716e3420c97"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.OptimisticSystemsDesignSystem_2913f0 = window.OptimisticSystemsDesignSystem_2913f0 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/Footer.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * Footer — centered, hairline-topped row of blue links separated by
 * gray middots. Email + social, nothing more.
 */
function Footer({
  links = [],
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("footer", _extends({
    id: "footer",
    style: {
      borderTop: '1px solid var(--rule)',
      padding: '48px 24px',
      textAlign: 'center',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-meta)',
      ...style
    }
  }, rest), links.map((l, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      margin: '0 8px'
    }
  }, "\xB7"), /*#__PURE__*/React.createElement(FooterLink, {
    href: l.href
  }, l.label))));
}
function FooterLink({
  href,
  children
}) {
  const [hover, setHover] = useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    target: href && href.startsWith('http') ? '_blank' : undefined,
    rel: "noopener",
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      color: 'var(--link)',
      textDecoration: hover ? 'underline' : 'none',
      textUnderlineOffset: '3px'
    }
  }, children);
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Footer.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * Button — Optimistic Systems
 * Editorial, flat, square-by-default. The `outline` variant is the
 * signature CTA: a hairline pill that fills with ink on hover.
 */
function Button({
  children,
  variant = 'outline',
  size = 'md',
  href,
  icon,
  disabled = false,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);
  const sizes = {
    sm: {
      padding: '8px 16px',
      fontSize: '12px'
    },
    md: {
      padding: '12px 24px',
      fontSize: '13px'
    },
    lg: {
      padding: '15px 30px',
      fontSize: '14px'
    }
  };
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    fontFamily: "var(--font-sans)",
    fontWeight: 600,
    letterSpacing: '1.2px',
    textTransform: 'uppercase',
    textDecoration: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    border: '1px solid transparent',
    borderRadius: variant === 'outline' || variant === 'solid' ? '100px' : '0',
    transition: 'background var(--dur-fast) var(--ease-standard), color var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard), opacity var(--dur-fast)',
    opacity: disabled ? 0.4 : 1,
    background: 'transparent',
    color: 'var(--text)',
    transform: active && !disabled ? 'translateY(1px)' : 'none',
    ...sizes[size]
  };
  const variants = {
    // hairline pill, fills with ink on hover — the hero CTA
    outline: {
      borderColor: 'var(--text)',
      color: hover && !disabled ? 'var(--bg)' : 'var(--text)',
      background: hover && !disabled ? 'var(--text)' : 'transparent'
    },
    // filled blue — reserved for the single primary action on a screen
    solid: {
      borderColor: 'var(--accent)',
      background: 'var(--accent)',
      color: 'var(--color-bg)',
      opacity: disabled ? 0.4 : hover ? 0.88 : 1
    },
    // inline text link with underline on hover
    text: {
      padding: '0',
      borderRadius: 0,
      color: hover && !disabled ? 'var(--accent)' : 'var(--text)',
      textDecoration: hover && !disabled ? 'underline' : 'none',
      textUnderlineOffset: '3px'
    }
  };
  const styles = {
    ...base,
    ...variants[variant],
    ...style
  };
  const handlers = {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    onClick: disabled ? undefined : onClick
  };
  const content = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", null, children), icon);
  if (href && !disabled) {
    return /*#__PURE__*/React.createElement("a", _extends({
      href: href,
      style: styles
    }, handlers, rest), content);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    style: styles,
    disabled: disabled
  }, handlers, rest), content);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Eyebrow — small uppercase label. `sans` (default) is the nav/UI label;
 * `mono` is the system/technical eyebrow in blue.
 */
function Eyebrow({
  children,
  font = 'sans',
  color,
  style,
  ...rest
}) {
  const isMono = font === 'mono';
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      fontFamily: isMono ? 'var(--font-mono)' : 'var(--font-sans)',
      fontSize: isMono ? '11px' : 'var(--text-label)',
      fontWeight: isMono ? 400 : 600,
      letterSpacing: isMono ? '1px' : 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: color || (isMono ? 'var(--accent)' : 'var(--text)'),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tag — Optimistic Systems
 * A mono, uppercase tech/meta tag. `accent` (default) is blue;
 * `muted` is gray for non-interactive metadata.
 */
function Tag({
  children,
  tone = 'accent',
  style,
  ...rest
}) {
  const tones = {
    accent: 'var(--accent)',
    muted: 'var(--text-muted)',
    ink: 'var(--text)'
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-mono)',
      fontWeight: 700,
      letterSpacing: 'var(--tracking-tag)',
      textTransform: 'uppercase',
      color: tones[tone] || tones.accent,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/content/ProjectEntry.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * ProjectEntry — a single editorial list row for a project / item.
 * Hairline top rule, title dims on hover, serif description, mono tech
 * tag and gray status. No cards: structure comes from the rule + space.
 */
function ProjectEntry({
  title,
  year,
  description,
  tech,
  status,
  href,
  style,
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const Wrap = href ? 'a' : 'article';
  return /*#__PURE__*/React.createElement(Wrap, _extends({
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'block',
      textDecoration: 'none',
      color: 'inherit',
      borderTop: '1px solid var(--rule)',
      padding: '28px 0',
      cursor: href ? 'pointer' : 'default',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-h3)',
      fontWeight: 700,
      color: 'var(--text)',
      opacity: hover ? 0.7 : 1,
      transition: 'opacity var(--dur-fast)'
    }
  }, title), year && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-meta)',
      color: 'var(--text-muted)'
    }
  }, year)), description && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--text-md)',
      color: 'var(--text)',
      marginTop: '8px',
      lineHeight: 'var(--leading-snug)'
    }
  }, description), (tech || status) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      marginTop: '12px'
    }
  }, tech ? /*#__PURE__*/React.createElement(__ds_scope.Tag, null, tech) : /*#__PURE__*/React.createElement("span", null), status && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '13px',
      color: 'var(--text-muted)'
    }
  }, status)));
}
Object.assign(__ds_scope, { ProjectEntry });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ProjectEntry.jsx", error: String((e && e.message) || e) }); }

// components/motion/CyclingWord.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useEffect,
  useRef,
  useState
} = React;
const HEX_CHARS = '0123456789ABCDEF';

/**
 * CyclingWord — the brand's signature interaction. A mono word that
 * cycles through a list, each transition resolving left-to-right out of
 * hex scramble. On hover it decodes the current word to its hex ASCII,
 * then scrambles back on leave. Animation carries meaning: language ⇄ code.
 */
function CyclingWord({
  words = ['syntax', 'grammar', 'structure', 'logic', 'pattern', 'parsing', 'meaning', 'rule'],
  interval = 2200,
  stepMs = 35,
  fontSize = 'var(--text-lead)',
  color = 'var(--accent)',
  style,
  ...rest
}) {
  const elRef = useRef(null);
  const idxRef = useRef(0);
  const hoverRef = useRef(false);
  const scrambleTimer = useRef(null);
  const cycleTimer = useRef(null);
  const toHexAscii = word => Array.from(word).map(c => c.charCodeAt(0).toString(16).toUpperCase()).join(' ');
  const scrambleTo = (finalText, cb) => {
    const el = elRef.current;
    if (!el) return;
    if (scrambleTimer.current) clearInterval(scrambleTimer.current);
    const finalLen = finalText.length;
    let iterations = 0;
    const totalSteps = 10 + finalLen;
    scrambleTimer.current = setInterval(() => {
      let display = '';
      for (let i = 0; i < finalLen; i++) {
        const revealAt = totalSteps - finalLen + i;
        display += iterations >= revealAt ? finalText[i] : HEX_CHARS[Math.floor(Math.random() * HEX_CHARS.length)];
      }
      el.textContent = display;
      iterations++;
      if (iterations > totalSteps) {
        clearInterval(scrambleTimer.current);
        scrambleTimer.current = null;
        el.textContent = finalText;
        if (cb) cb();
      }
    }, stepMs);
  };
  const startCycle = () => {
    stopCycle();
    cycleTimer.current = setInterval(() => {
      if (hoverRef.current) return;
      idxRef.current = (idxRef.current + 1) % words.length;
      scrambleTo(words[idxRef.current]);
    }, interval);
  };
  const stopCycle = () => {
    if (cycleTimer.current) {
      clearInterval(cycleTimer.current);
      cycleTimer.current = null;
    }
  };
  useEffect(() => {
    if (elRef.current) elRef.current.textContent = words[0];
    startCycle();
    return () => {
      stopCycle();
      if (scrambleTimer.current) clearInterval(scrambleTimer.current);
    };
    // eslint-disable-next-line
  }, []);
  return /*#__PURE__*/React.createElement("span", _extends({
    ref: elRef,
    onMouseEnter: () => {
      hoverRef.current = true;
      stopCycle();
      if (scrambleTimer.current) {
        clearInterval(scrambleTimer.current);
        scrambleTimer.current = null;
      }
      scrambleTo(toHexAscii(words[idxRef.current]));
    },
    onMouseLeave: () => {
      if (scrambleTimer.current) {
        clearInterval(scrambleTimer.current);
        scrambleTimer.current = null;
      }
      scrambleTo(words[idxRef.current], () => {
        hoverRef.current = false;
        startCycle();
      });
    },
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 700,
      fontSize,
      color,
      letterSpacing: '-0.5px',
      cursor: 'default',
      display: 'inline-block',
      ...style
    }
  }, rest), words[0]);
}
Object.assign(__ds_scope, { CyclingWord });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/motion/CyclingWord.jsx", error: String((e && e.message) || e) }); }

// components/motion/NetworkGraph.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useEffect,
  useRef
} = React;
/**
 * NetworkGraph — the procedural "Optimistic Systems" motif: an
 * Obsidian-meets-bicycle-wheel node graph that breathes and drifts.
 * A hub, a ring of secondaries, and bands of leaves, wired
 * procedurally so it looks slightly different on each load. Renders to
 * canvas; meant to sit behind hero content (pointer-events: none).
 */
function NetworkGraph({
  color = '#0000FF',
  anchorX = 0.68,
  anchorY = 0.5,
  secondaryRadius = 140,
  leafBands = [220, 260, 290, 315],
  leafCount = 32,
  fadeIn = true,
  style,
  ...rest
}) {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let raf = 0;
    let W = 0,
      H = 0,
      dpr = 1;
    let graph = null;
    const toRGBA = (hex, a) => {
      const h = hex.replace('#', '');
      const r = parseInt(h.substring(0, 2), 16);
      const g = parseInt(h.substring(2, 4), 16);
      const b = parseInt(h.substring(4, 6), 16);
      return `rgba(${r},${g},${b},${a})`;
    };
    function buildGraph(cx, cy) {
      const nodes = [],
        edges = [];
      let id = 0;
      const secondaryCount = 5;
      nodes.push({
        id: id++,
        x: cx,
        y: cy,
        r: 9,
        kind: 'center',
        phaseX: 0,
        phaseY: 0,
        speedX: 0.0007,
        speedY: 0.0009,
        driftAmp: 2
      });
      for (let i = 0; i < secondaryCount; i++) {
        const angle = i / secondaryCount * Math.PI * 2 + 0.4;
        const r = secondaryRadius + (Math.random() * 20 - 10);
        nodes.push({
          id: id++,
          x: cx + Math.cos(angle) * r,
          y: cy + Math.sin(angle) * r,
          r: 5.5,
          kind: 'secondary',
          phaseX: Math.random() * Math.PI * 2,
          phaseY: Math.random() * Math.PI * 2,
          speedX: 0.0005 + Math.random() * 0.0004,
          speedY: 0.0005 + Math.random() * 0.0004,
          driftAmp: 3 + Math.random() * 2
        });
      }
      for (let i = 0; i < leafCount; i++) {
        const band = leafBands[i % leafBands.length];
        const angle = i / leafCount * Math.PI * 2 + (Math.random() * 0.18 - 0.09);
        const clampedR = Math.min(band + (Math.random() * 22 - 11), Math.max(...leafBands) + 15);
        nodes.push({
          id: id++,
          x: cx + Math.cos(angle) * clampedR,
          y: cy + Math.sin(angle) * clampedR,
          r: 2.5 + Math.random() * 1.5,
          kind: 'leaf',
          phaseX: Math.random() * Math.PI * 2,
          phaseY: Math.random() * Math.PI * 2,
          speedX: 0.0003 + Math.random() * 0.0005,
          speedY: 0.0003 + Math.random() * 0.0005,
          driftAmp: 4 + Math.random() * 4
        });
      }
      for (let i = 1; i <= secondaryCount; i++) edges.push({
        a: 0,
        b: i,
        opacity: 0.14
      });
      const leafStart = secondaryCount + 1;
      const leavesPerSecondary = Math.floor(leafCount / secondaryCount);
      for (let s = 0; s < secondaryCount; s++) {
        const sId = 1 + s;
        const base = leafStart + s * leavesPerSecondary;
        for (let l = 0; l < leavesPerSecondary + 1; l++) {
          const lId = base + l;
          if (lId < nodes.length) edges.push({
            a: sId,
            b: lId,
            opacity: 0.1
          });
        }
        edges.push({
          a: sId,
          b: 1 + (s + 1) % secondaryCount,
          opacity: 0.12
        });
      }
      for (let l = leafStart; l < nodes.length - 1; l++) {
        if (Math.random() < 0.45) {
          const target = l + 1 + Math.floor(Math.random() * 3);
          if (target < nodes.length) edges.push({
            a: l,
            b: target,
            opacity: 0.08
          });
        }
      }
      for (let i = 0; i < 6; i++) edges.push({
        a: 0,
        b: leafStart + Math.floor(Math.random() * leafCount),
        opacity: 0.08
      });
      return {
        nodes,
        edges
      };
    }
    function resize() {
      dpr = window.devicePixelRatio || 1;
      W = canvas.offsetWidth || window.innerWidth;
      H = canvas.offsetHeight || window.innerHeight;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      graph = buildGraph(W * anchorX, H * anchorY);
    }
    resize();
    const start = performance.now();
    function draw(now) {
      const elapsed = now - start;
      if (!graph) {
        raf = requestAnimationFrame(draw);
        return;
      }
      const cx = W * anchorX,
        cy = H * anchorY;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, W, H);
      const breath = 1 + 0.018 * Math.sin(elapsed / 4000 * Math.PI * 2);
      const pos = graph.nodes.map(n => ({
        x: cx + (n.x - cx) * breath + n.driftAmp * Math.sin(elapsed * n.speedX + n.phaseX),
        y: cy + (n.y - cy) * breath + n.driftAmp * Math.sin(elapsed * n.speedY + n.phaseY)
      }));
      for (const e of graph.edges) {
        ctx.beginPath();
        ctx.moveTo(pos[e.a].x, pos[e.a].y);
        ctx.lineTo(pos[e.b].x, pos[e.b].y);
        ctx.strokeStyle = toRGBA(color, e.opacity);
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
      graph.nodes.forEach((node, i) => {
        const p = pos[i];
        const r = node.r * breath;
        if (node.kind === 'center') {
          const pulse = 0.5 + 0.5 * Math.sin(elapsed / 1800 * Math.PI * 2);
          const glowR = r * (2.8 + pulse * 1.6);
          const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, glowR);
          grd.addColorStop(0, toRGBA(color, 0.22 + pulse * 0.1));
          grd.addColorStop(0.4, toRGBA(color, 0.08 + pulse * 0.04));
          grd.addColorStop(1, toRGBA(color, 0));
          ctx.beginPath();
          ctx.arc(p.x, p.y, glowR, 0, Math.PI * 2);
          ctx.fillStyle = grd;
          ctx.fill();
          ctx.beginPath();
          ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
          ctx.fillStyle = color;
          ctx.fill();
        } else if (node.kind === 'secondary') {
          const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r * 2.5);
          grd.addColorStop(0, toRGBA(color, 0.15));
          grd.addColorStop(1, toRGBA(color, 0));
          ctx.beginPath();
          ctx.arc(p.x, p.y, r * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = grd;
          ctx.fill();
          ctx.globalAlpha = 0.85;
          ctx.beginPath();
          ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
          ctx.fillStyle = color;
          ctx.fill();
          ctx.globalAlpha = 1;
        } else {
          ctx.globalAlpha = 0.6;
          ctx.beginPath();
          ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
          ctx.fillStyle = color;
          ctx.fill();
          ctx.globalAlpha = 1;
        }
      });
      raf = requestAnimationFrame(draw);
    }
    raf = requestAnimationFrame(draw);
    window.addEventListener('resize', resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
    // eslint-disable-next-line
  }, [color, anchorX, anchorY, secondaryRadius, leafCount]);
  return /*#__PURE__*/React.createElement("canvas", _extends({
    ref: canvasRef,
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
      opacity: fadeIn ? 0 : 1,
      animation: fadeIn ? 'os-graph-fade var(--dur-graph) var(--ease-standard) 0.3s forwards' : 'none',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { NetworkGraph });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/motion/NetworkGraph.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Nav.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * Nav — fixed top-right navigation. Uppercase Inter labels that turn
 * blue on hover. Minimal by design: no background, no logo lockup.
 */
function Nav({
  items = [],
  position = 'fixed',
  align = 'right',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    style: {
      position,
      top: 0,
      left: align === 'left' ? 0 : 'auto',
      right: align === 'right' ? 0 : 'auto',
      padding: '24px 48px',
      zIndex: 100,
      width: position === 'fixed' ? 'auto' : '100%',
      display: 'flex',
      justifyContent: align === 'right' ? 'flex-end' : 'flex-start',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      display: 'flex',
      gap: '32px',
      margin: 0,
      padding: 0
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement(NavLink, {
    key: i,
    href: it.href,
    active: it.active
  }, it.label))));
}
function NavLink({
  href,
  children,
  active
}) {
  const [hover, setHover] = useState(false);
  return /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-label)',
      fontWeight: 600,
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      textDecoration: 'none',
      color: active || hover ? 'var(--accent)' : 'var(--text)',
      transition: 'color var(--dur-fast) var(--ease-standard)'
    }
  }, children));
}
Object.assign(__ds_scope, { Nav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/AboutPage.jsx
try { (() => {
/* AboutPage — long-form serif prose at the reading measure, a hairline
   divider, mono info lines, and the footer. */
const {
  Footer
} = window.OptimisticSystemsDesignSystem_2913f0;
function AboutPage() {
  const p = {
    fontFamily: 'var(--font-serif)',
    fontSize: '18px',
    lineHeight: 1.7,
    color: 'var(--text)',
    marginBottom: '24px'
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("main", {
    style: {
      maxWidth: '750px',
      margin: '0 auto',
      padding: '160px 24px 120px'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '52px',
      fontWeight: 700,
      letterSpacing: '-1px',
      color: 'var(--text)',
      marginBottom: '48px'
    }
  }, "About"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: p
  }, "I come from a humanities background \u2014 French, German, literature. I fell in love with the mechanics of it: grammar, structure, the logic underneath. I went to university for linguistics, but the academic world didn't work for me, and I left."), /*#__PURE__*/React.createElement("p", {
    style: p
  }, "I was already programming as a hobby \u2014 building things with Pygame, tinkering with HTML since I was a kid. Once I took it seriously, a lot clicked: the same instinct I had for parsing language applied directly to parsing systems. ", /*#__PURE__*/React.createElement("b", {
    style: {
      fontWeight: 600
    }
  }, "Syntax is syntax. Structure is structure.")), /*#__PURE__*/React.createElement("p", {
    style: p
  }, "I've been self-taught my whole life: first blog at eight, guitar at thirteen, first lines of Python at fifteen. I come home, and I study. I build things. I always have and, hopefully, always will."), /*#__PURE__*/React.createElement("p", {
    style: p
  }, "Right now I'm focused on Java backend and JavaScript frontend, with Node and Angular. I'm passionate about Linux and its philosophy, and plan to start contributing to open source."), /*#__PURE__*/React.createElement("hr", {
    style: {
      border: 'none',
      borderTop: '1px solid var(--rule)',
      margin: '48px 0'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '13px',
      color: 'var(--text-muted)',
      lineHeight: 1.8,
      marginBottom: '4px'
    }
  }, "Currently \u2014 ITS Tech Talent Factory, Milan \xB7 Fullstack Software Developer"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '13px',
      color: 'var(--text-muted)',
      lineHeight: 1.8
    }
  }, "Interning at \u2014 SyncLab, Milan"))), /*#__PURE__*/React.createElement(Footer, {
    links: [{
      label: 'corinnabuzzi48@gmail.com',
      href: 'mailto:corinnabuzzi48@gmail.com'
    }, {
      label: 'GitHub',
      href: 'https://github.com/corinnabuzzi'
    }, {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/corinna-buzzi'
    }]
  }));
}
window.AboutPage = AboutPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/AboutPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/App.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* App — the portfolio shell: fixed Nav switching between the Home view
   (Hero + Work) and the About view. Interactive click-through. */
const {
  Nav,
  Footer
} = window.OptimisticSystemsDesignSystem_2913f0;
function App() {
  const [view, setView] = React.useState('home');
  const workRef = React.useRef(null);
  const go = v => e => {
    if (e) e.preventDefault();
    setView(v);
    window.scrollTo({
      top: 0
    });
  };
  const seeWork = () => {
    setView('home');
    requestAnimationFrame(() => workRef.current && window.scrollTo({
      top: workRef.current.offsetTop - 40,
      behavior: 'smooth'
    }));
  };
  const navItems = [{
    label: 'Work',
    href: '#',
    active: view === 'home',
    onClick: seeWork
  }, {
    label: 'About',
    href: '#',
    active: view === 'about'
  }, {
    label: 'Contact',
    href: '#footer'
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("nav", {
    style: {
      position: 'fixed',
      top: 0,
      right: 0,
      padding: '24px 48px',
      zIndex: 100
    }
  }, /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      display: 'flex',
      gap: '32px',
      margin: 0,
      padding: 0
    }
  }, [{
    label: 'Work',
    fn: seeWork,
    active: view === 'home'
  }, {
    label: 'About',
    fn: go('about'),
    active: view === 'about'
  }, {
    label: 'Contact',
    fn: () => {
      const f = document.getElementById('footer');
      if (view !== 'about') {
        setView('about');
        requestAnimationFrame(() => {
          const ff = document.getElementById('footer');
          ff && window.scrollTo({
            top: ff.offsetTop,
            behavior: 'smooth'
          });
        });
      } else {
        f && window.scrollTo({
          top: f.offsetTop,
          behavior: 'smooth'
        });
      }
    }
  }].map((it, i) => /*#__PURE__*/React.createElement(NavBtn, _extends({
    key: i
  }, it))))), view === 'home' ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hero, {
    onSeeWork: seeWork
  }), /*#__PURE__*/React.createElement(WorkSection, {
    refEl: workRef
  }), /*#__PURE__*/React.createElement(Footer, {
    links: [{
      label: 'corinnabuzzi48@gmail.com',
      href: 'mailto:corinnabuzzi48@gmail.com'
    }, {
      label: 'GitHub',
      href: 'https://github.com/corinnabuzzi'
    }, {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/corinna-buzzi'
    }]
  })) : /*#__PURE__*/React.createElement(AboutPage, null));
}
function NavBtn({
  label,
  fn,
  active
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      fn();
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '13px',
      fontWeight: 600,
      letterSpacing: '1.2px',
      textTransform: 'uppercase',
      textDecoration: 'none',
      color: active || hover ? 'var(--accent)' : 'var(--text)',
      transition: 'color 0.2s'
    }
  }, label));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Hero.jsx
try { (() => {
/* Hero — full-viewport hero with the breathing NetworkGraph behind,
   the hex-decode CyclingWord above a clip-revealed name, and the pill CTA. */
const {
  NetworkGraph,
  CyclingWord,
  Button
} = window.OptimisticSystemsDesignSystem_2913f0;
function Hero({
  onSeeWork
}) {
  const ArrowDown = () => /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8 3v10M3 8l5 5 5-5",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(NetworkGraph, {
    anchorX: 0.68,
    anchorY: 0.5
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      textAlign: 'left',
      paddingLeft: '8vw'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '16px',
      height: '36px',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(CyclingWord, null)), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '72px',
      fontWeight: 700,
      color: 'var(--text)',
      lineHeight: 1,
      letterSpacing: '-2px',
      marginBottom: '16px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      clipPath: 'inset(0 100% 0 0)',
      animation: 'os-reveal 0.8s cubic-bezier(0.65,0,0.35,1) forwards'
    }
  }, "Optimistic"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      clipPath: 'inset(0 100% 0 0)',
      animation: 'os-reveal 0.8s cubic-bezier(0.65,0,0.35,1) 0.15s forwards'
    }
  }, "Systems")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '17px',
      color: 'var(--text-muted)',
      marginBottom: '24px',
      opacity: 0,
      animation: 'os-fade-up 0.6s ease 0.6s forwards'
    }
  }, "junior software developer"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: '18px',
      fontStyle: 'italic',
      color: 'var(--text-muted)',
      marginBottom: '48px',
      opacity: 0,
      animation: 'os-fade-up 0.6s ease 0.8s forwards'
    }
  }, "Building things that make sense."), /*#__PURE__*/React.createElement("div", {
    style: {
      opacity: 0,
      animation: 'os-fade-up 0.6s ease 1s forwards',
      display: 'inline-block'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: onSeeWork,
    icon: /*#__PURE__*/React.createElement(ArrowDown, null)
  }, "See my work"))));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/WorkSection.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* WorkSection — narrow reading column of editorial ProjectEntry rows. */
const {
  ProjectEntry,
  Eyebrow
} = window.OptimisticSystemsDesignSystem_2913f0;
const PROJECTS = [{
  title: 'Network Graph',
  year: '2025 —',
  description: 'A procedural knowledge-graph visualisation that breathes behind the hero — Obsidian meets a bicycle wheel.',
  tech: 'JavaScript · Canvas',
  status: 'in progress'
}, {
  title: 'Personal Portfolio',
  year: '2025',
  description: 'Built from scratch with vanilla HTML, CSS and JavaScript. No frameworks, no build tools.',
  tech: 'HTML · CSS · JavaScript',
  status: 'completed'
}, {
  title: 'Movie App',
  year: '2025',
  description: 'A front-end exercise consuming a public film API, with search, filtering and detail views.',
  tech: 'JavaScript · REST API',
  status: 'completed'
}, {
  title: 'Pac-Man, Documented',
  year: '2025',
  description: 'A technical-writing project: a fully documented Pac-Man replica built on Replit.',
  tech: 'JavaScript · Docs',
  status: 'completed'
}, {
  title: 'Git Exercises',
  year: '2025',
  description: 'Version-control coursework — branching, rebasing, and collaborative workflows.',
  tech: 'Git · DevOps',
  status: 'completed'
}];
function WorkSection({
  refEl
}) {
  return /*#__PURE__*/React.createElement("section", {
    ref: refEl,
    style: {
      maxWidth: '750px',
      margin: '0 auto',
      padding: '120px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '40px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Selected work")), PROJECTS.map((p, i) => /*#__PURE__*/React.createElement(ProjectEntry, _extends({
    key: i
  }, p, {
    href: "#"
  }))));
}
window.WorkSection = WorkSection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/WorkSection.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.ProjectEntry = __ds_scope.ProjectEntry;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.CyclingWord = __ds_scope.CyclingWord;

__ds_ns.NetworkGraph = __ds_scope.NetworkGraph;

__ds_ns.Nav = __ds_scope.Nav;

})();
