// Teacher homepage — three layouts from uploads/Homepage.html, restyled in the Italian Lessons system.
const H = {
  label: { fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--fg)' },
  meta: { fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--fg-muted)' },
  score: { fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--accent)' },
  body: { fontFamily: 'var(--font-serif)', fontSize: 18, lineHeight: 1.7, color: 'var(--fg)', margin: 0, textWrap: 'pretty' },
  lede: { fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 20, color: 'var(--fg-muted)', margin: 0 },
  h1: { fontFamily: 'var(--font-serif)', fontWeight: 500, letterSpacing: '-0.02em', lineHeight: 1, color: 'var(--fg)', margin: 0 },
  card: { maxWidth: 1080, margin: '0 auto', background: 'var(--bg)', border: '1px solid var(--line)', borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: '0 1px 3px rgba(19,26,16,0.08)', color: 'var(--fg)' },
  rule: '1px solid var(--line)'
};
const ITALKI = 'https://www.italki.com';

function Tag({ muted, children }) {
  return <span style={{ display: 'inline-block', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 600, padding: '4px 10px', borderRadius: 'var(--radius-pill)', border: '1px solid ' + (muted ? 'var(--line)' : 'var(--accent)'), color: muted ? 'var(--fg-muted)' : 'var(--accent)', background: muted ? 'transparent' : 'var(--accent-tint)' }}>{children}</span>;
}

function PillBtn({ solid, href, onClick, full, children }) {
  return <a href={href || '#'} target={href && href.startsWith('http') ? '_blank' : undefined} rel="noopener" onClick={e => { if (onClick) { e.preventDefault(); onClick(); } }}
    style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', boxSizing: 'border-box', width: full ? '100%' : 'auto', height: 46, padding: '0 24px', borderRadius: 'var(--radius-pill)', textDecoration: 'none', fontFamily: 'var(--font-sans)', fontSize: 15, fontWeight: 600, border: '1px solid ' + (solid ? 'var(--accent)' : 'var(--fg)'), background: solid ? 'var(--accent)' : 'transparent', color: solid ? 'var(--on-accent)' : 'var(--fg)' }}>{children}</a>;
}

function Photo({ id, style }) {
  return <div style={Object.assign({ boxSizing: 'border-box', lineHeight: 0, background: 'var(--surface-sunken)' }, style)}>
    <image-slot id={id} shape="rect" placeholder="Drop your photo" style={{ display: 'block', width: '100%', height: '100%' }}></image-slot>
  </div>;
}

function LinkRows({ onBook, inverse, short }) {
  const fg = inverse ? 'var(--on-accent)' : 'var(--fg)';
  const sub = inverse ? 'rgba(255,255,255,0.78)' : 'var(--fg-muted)';
  const line = inverse ? 'rgba(255,255,255,0.4)' : 'var(--line)';
  const arrow = inverse ? 'var(--on-accent)' : 'var(--accent)';
  const rows = [
    { t: 'Lessons on italki', s: 'My profile, packages & schedule', a: '↗', href: ITALKI },
    { t: 'Book a lesson', s: 'Pick a time on my booking page', a: '→', book: true },
    { t: 'Free intro call', s: short ? '15 minutes — say ciao' : '15 minutes, no pressure — say ciao', a: '→', href: '#intro' }
  ];
  return <div>{rows.map((r, i) => (
    <a key={r.t} href={r.href || '#book'} target={r.href === ITALKI ? '_blank' : undefined} rel="noopener"
      onClick={e => { if (r.book) { e.preventDefault(); onBook(); } }}
      style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 16, padding: inverse ? '20px 0' : '18px 0', borderTop: '1px solid ' + line, borderBottom: i === rows.length - 1 ? '1px solid ' + line : 'none', textDecoration: 'none', color: 'inherit' }}>
      <span>
        <span style={{ fontFamily: 'var(--font-serif)', fontSize: inverse ? 21 : 20, fontWeight: 500, color: fg }}>{r.t}</span>
        <span style={{ display: 'block', fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: inverse ? 15 : 16, color: sub, marginTop: 4 }}>{r.s}</span>
      </span>
      <span style={{ fontFamily: 'var(--font-sans)', fontSize: 18, color: arrow }}>{r.a}</span>
    </a>
  ))}</div>;
}

function Review({ quote, who }) {
  return <div style={{ borderTop: H.rule, padding: '22px 0' }}>
    <p style={Object.assign({}, H.body, { lineHeight: 1.6 })}>{quote}</p>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginTop: 12 }}>
      <span style={H.meta}>{who}</span><span style={H.score}>5.0</span>
    </div>
  </div>;
}

function QuoteReview({ quote, who, first }) {
  return <div style={{ borderTop: H.rule, paddingTop: 24, marginTop: first ? 0 : 24 }}>
    <div style={{ fontFamily: 'var(--font-serif)', fontSize: 40, lineHeight: 0.6, color: 'var(--accent)', height: 24 }}>“</div>
    <p style={Object.assign({}, H.body, { fontSize: 19, lineHeight: 1.6 })}>{quote}</p>
    <div style={Object.assign({}, H.meta, { marginTop: 14 })}>{who} &nbsp;·&nbsp; <span style={H.score}>5.0</span></div>
  </div>;
}

function HomeFooter() {
  const a = { color: 'var(--accent)', textDecoration: 'none' };
  return <div style={{ borderTop: H.rule, padding: '28px 56px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12, fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.04em', color: 'var(--fg-muted)' }}>
    <span>© 2026 Flavia Buzzi</span>
    <span style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
      <a href="mailto:ciao@italianwithflavia.com" style={a}>ciao@italianwithflavia.com</a>
      <a href={ITALKI} target="_blank" rel="noopener" style={a}>italki</a>
      <a href="#" style={a}>Instagram</a>
    </span>
  </div>;
}

// A — Editorial quadrant
function HomeA({ onBook }) {
  return <div style={H.card} data-screen-label="Home A">
    <div style={{ borderBottom: H.rule, padding: '56px 56px 44px' }}>
      <h1 style={Object.assign({}, H.h1, { fontSize: 64 })}>Flavia Buzzi</h1>
      <p style={Object.assign({}, H.lede, { marginTop: 16 })}>insegnante d'italiano — online Italian teacher.</p>
      <div style={{ marginTop: 20 }}><Tag>A1 → C2 · all levels</Tag></div>
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.35fr) minmax(0,1fr)', gap: 72, padding: '48px 56px 8px' }}>
      <div>
        <Photo id="photo-a" style={{ width: 248, height: 248, border: H.rule }} />
        <div style={{ marginTop: 40 }}>
          <div style={Object.assign({}, H.label, { marginBottom: 18 })}>About</div>
          <p style={H.body}>Ciao! For seven years I've helped learners go from a hesitant <em>buongiorno</em> to real, flowing conversation. My lessons are structured but never stiff — we talk about food, films, your week, and the grammar sorts itself out along the way.</p>
          <p style={Object.assign({}, H.body, { marginTop: 18 })}>Starting from zero or polishing toward fluency, we'll build something that actually sticks. <em>Andiamo.</em></p>
          <div style={{ marginTop: 28 }}><PillBtn onClick={onBook}>Book a lesson</PillBtn></div>
        </div>
      </div>
      <div>
        <div style={Object.assign({}, H.label, { marginBottom: 6 })}>Links</div>
        <LinkRows onBook={onBook} />
        <div style={Object.assign({}, H.label, { margin: '44px 0 6px' })}>Reviews</div>
        <Review quote={'"Every lesson feels like a conversation with a friend. My confidence has completely changed."'} who="Marcus · Berlin" />
        <Review quote={<span>"Finally a teacher who explains the <em>why</em>. Six months in and I'm dreaming in Italian."</span>} who="Aiko · Tokyo" />
      </div>
    </div>
    <HomeFooter />
  </div>;
}

// B — Accent links panel (blueprint)
function HomeB({ onBook }) {
  return <div style={H.card} data-screen-label="Home B">
    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.35fr) minmax(0,1fr)', borderBottom: H.rule }}>
      <div style={{ padding: '56px 48px 48px', borderRight: H.rule }}>
        <h1 style={Object.assign({}, H.h1, { fontSize: 72, lineHeight: 0.98 })}>Flavia<br />Buzzi</h1>
        <p style={Object.assign({}, H.lede, { marginTop: 20 })}>insegnante d'italiano — online, one to one.</p>
      </div>
      <Photo id="photo-b" style={{ minHeight: 340 }} />
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.35fr) minmax(0,1fr)' }}>
      <div style={{ padding: 48, borderRight: H.rule }}>
        <div style={Object.assign({}, H.label, { marginBottom: 18 })}>About</div>
        <p style={Object.assign({}, H.body, { maxWidth: 560 })}>Ciao! For seven years I've helped learners go from a hesitant <em>buongiorno</em> to real, flowing conversation. My lessons are structured but never stiff — we talk about food, films, your week, and the grammar sorts itself out along the way. Whether you're starting from zero or polishing toward fluency, we'll build something that actually sticks.</p>
        <div style={{ marginTop: 28, display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
          <PillBtn onClick={onBook}>Book a lesson</PillBtn>
          <Tag muted>A1 → C2 · all levels</Tag>
        </div>
        <div style={Object.assign({}, H.label, { margin: '48px 0 6px' })}>Reviews</div>
        <Review quote={'"Every lesson feels like a conversation with a friend. My confidence has completely changed."'} who="Marcus · Berlin" />
        <Review quote={'"Patient, structured, and genuinely fun. I look forward to every Tuesday."'} who="Sophie · London" />
      </div>
      <div style={{ background: 'var(--accent)', padding: '40px 40px 44px' }}>
        <div style={Object.assign({}, H.label, { color: 'var(--on-accent)', marginBottom: 8 })}>Links</div>
        <LinkRows onBook={onBook} inverse short />
        <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 16, lineHeight: 1.6, color: 'rgba(255,255,255,0.78)', margin: '28px 0 0' }}>Syntax is syntax. Structure is structure. Let's make Italian make sense.</p>
      </div>
    </div>
    <HomeFooter />
  </div>;
}

// C — Quiet & serif-led
function HomeC({ onBook }) {
  return <div style={H.card} data-screen-label="Home C">
    <div style={{ borderBottom: H.rule, padding: '60px 56px 48px', textAlign: 'center' }}>
      <h1 style={Object.assign({}, H.h1, { fontSize: 60 })}>Flavia Buzzi</h1>
      <p style={Object.assign({}, H.lede, { fontSize: 22, marginTop: 18 })}>Building Italian that makes sense — one conversation at a time.</p>
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.3fr) minmax(0,1fr)', gap: 64, padding: '52px 56px 12px' }}>
      <div>
        <div style={{ display: 'flex', gap: 28, alignItems: 'flex-start' }}>
          <Photo id="photo-c" style={{ flex: 'none', width: 200, height: 248, border: H.rule }} />
          <div style={{ paddingTop: 4 }}>
            <div style={Object.assign({}, H.label, { marginBottom: 12 })}>About</div>
            <p style={Object.assign({}, H.body, { fontSize: 17 })}>Ciao! I'm an online Italian teacher. For seven years I've taken learners from a hesitant <em>buongiorno</em> to flowing conversation — structured lessons that never feel stiff.</p>
          </div>
        </div>
        <p style={Object.assign({}, H.body, { fontSize: 17, marginTop: 28 })}>We talk about food, films, your week — and the grammar sorts itself out along the way. Zero to fluent, <em>andiamo insieme</em>.</p>
        <div style={{ marginTop: 28 }}><Tag>A1 → C2 · all levels</Tag></div>
      </div>
      <div>
        <div style={Object.assign({}, H.label, { marginBottom: 18 })}>Links</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <PillBtn solid full onClick={onBook}>Book a lesson</PillBtn>
          <PillBtn full href={ITALKI}>Lessons on italki ↗</PillBtn>
          <PillBtn full href="#intro">Free intro call</PillBtn>
        </div>
        <div style={Object.assign({}, H.label, { margin: '44px 0 18px' })}>Reviews</div>
        <QuoteReview first quote={<span>Finally a teacher who explains the <em>why</em>. Six months in and I'm dreaming in Italian.</span>} who="Aiko · Tokyo" />
        <QuoteReview quote="Patient, structured, and genuinely fun. I look forward to every Tuesday." who="Sophie · London" />
      </div>
    </div>
    <div style={{ height: 40 }}></div>
    <HomeFooter />
  </div>;
}

function HomeScreen({ onBook }) {
  const [layout, setLayout] = React.useState(() => localStorage.getItem('il-home-layout') || 'a');
  const pick = k => { setLayout(k); localStorage.setItem('il-home-layout', k); };
  return (
    <div style={{ padding: '76px 24px 48px', overflowX: 'auto' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto 14px', display: 'flex', alignItems: 'center', gap: 10 }}>
        <span style={H.meta}>Layout</span>
        <div style={{ display: 'flex', gap: 2, padding: 2, border: H.rule, borderRadius: 'var(--radius-pill)' }}>
          {[['a', 'A · Editorial'], ['b', 'B · Accent links'], ['c', 'C · Quiet serif']].map(([k, l]) => (
            <button key={k} type="button" onClick={() => pick(k)} style={{ border: 'none', cursor: 'pointer', padding: '6px 12px', borderRadius: 'var(--radius-pill)', fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 500, background: layout === k ? 'var(--fg)' : 'transparent', color: layout === k ? 'var(--bg)' : 'var(--fg-muted)' }}>{l}</button>
          ))}
        </div>
      </div>
      <div style={{ minWidth: 960 }}>
        {layout === 'a' ? <HomeA onBook={onBook} /> : layout === 'b' ? <HomeB onBook={onBook} /> : <HomeC onBook={onBook} />}
      </div>
    </div>
  );
}
Object.assign(window, { HomeScreen });
