/* @ds-bundle: {"format":4,"namespace":"FlaviaBuzziPaperPenDesignSystem_2ea0ec","components":[{"name":"CalendarSlot","sourcePath":"components/calendar/CalendarSlot.jsx"},{"name":"Legend","sourcePath":"components/calendar/Legend.jsx"},{"name":"StatusTag","sourcePath":"components/feedback/StatusTag.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"}],"sourceHashes":{"components/calendar/CalendarSlot.jsx":"e347936bf9b8","components/calendar/Legend.jsx":"97fd0c38c3ab","components/feedback/StatusTag.jsx":"98cb1f567eea","components/forms/Button.jsx":"889b20ed521e","components/forms/Input.jsx":"7f7aa38b8891","components/surfaces/Card.jsx":"b8ab2053f528","ui_kits/booking-app/BookingScreen.jsx":"d28ce39577d7","ui_kits/booking-app/DashboardScreen.jsx":"979b94caf3bd","ui_kits/booking-app/LoginScreen.jsx":"107173a45c07"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.FlaviaBuzziPaperPenDesignSystem_2ea0ec = window.FlaviaBuzziPaperPenDesignSystem_2ea0ec || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/calendar/CalendarSlot.jsx
try { (() => {
function CalendarSlot({
  state = 'open',
  time,
  today,
  onClick
}) {
  const base = {
    fontFamily: 'var(--font-mono)',
    fontSize: '13px',
    color: 'var(--ink)',
    borderRadius: '0',
    minHeight: '48px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: state === 'open' ? 'pointer' : 'default',
    position: 'relative'
  };
  const styles = {
    open: {
      border: '1px solid var(--ink-15)',
      background: 'transparent'
    },
    booked: {
      border: '1px solid var(--ink-15)',
      background: 'var(--ink-08)',
      borderLeft: '3px solid var(--muted)'
    },
    unavailable: {
      border: '1px solid var(--ink-15)',
      background: 'var(--hatch-unavailable)',
      color: 'var(--muted)'
    }
  };
  const todayStyle = today ? {
    border: '1px solid var(--blue)',
    color: 'var(--blue)'
  } : {};
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    style: {
      ...base,
      ...styles[state],
      ...todayStyle
    }
  }, time);
}
Object.assign(__ds_scope, { CalendarSlot });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/calendar/CalendarSlot.jsx", error: String((e && e.message) || e) }); }

// components/calendar/Legend.jsx
try { (() => {
function Key({
  swatch,
  label
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '20px',
      height: '3px',
      background: swatch,
      display: 'inline-block'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '13px',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-caps)',
      color: 'var(--muted)'
    }
  }, label));
}
function Legend() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '24px',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Key, {
    swatch: "var(--ink-15)",
    label: "Open"
  }), /*#__PURE__*/React.createElement(Key, {
    swatch: "var(--muted)",
    label: "Booked"
  }), /*#__PURE__*/React.createElement(Key, {
    swatch: "repeating-linear-gradient(45deg,var(--ink-40) 0,var(--ink-40) 1px,transparent 1px,transparent 4px)",
    label: "Unavailable"
  }), /*#__PURE__*/React.createElement(Key, {
    swatch: "var(--blue)",
    label: "Today"
  }));
}
Object.assign(__ds_scope, { Legend });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/calendar/Legend.jsx", error: String((e && e.message) || e) }); }

// components/feedback/StatusTag.jsx
try { (() => {
function StatusTag({
  status = 'pending',
  children
}) {
  const map = {
    pending: {
      color: 'var(--ink)',
      label: 'PENDING'
    },
    confirmed: {
      color: 'var(--green)',
      label: 'CONFIRMED'
    },
    declined: {
      color: 'var(--red)',
      label: 'DECLINED'
    }
  };
  const s = map[status] || map.pending;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      padding: '4px 12px',
      borderRadius: 'var(--radius-sm)',
      border: `1px solid ${s.color}`,
      color: s.color,
      background: 'transparent',
      fontFamily: 'var(--font-mono)',
      fontSize: '13px',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-caps)'
    }
  }, children || s.label);
}
Object.assign(__ds_scope, { StatusTag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/StatusTag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Button({
  variant = 'primary',
  tone = 'ink',
  size = 'md',
  disabled,
  children,
  ...rest
}) {
  const toneColor = {
    ink: 'var(--ink)',
    blue: 'var(--blue)',
    red: 'var(--red)',
    green: 'var(--green)'
  }[tone];
  const isPrimary = variant === 'primary';
  const style = {
    fontFamily: 'var(--font-mono)',
    textTransform: 'uppercase',
    letterSpacing: 'var(--tracking-caps)',
    fontSize: size === 'sm' ? '13px' : '14px',
    fontWeight: 'var(--weight-medium)',
    padding: size === 'sm' ? '8px 16px' : '12px 24px',
    borderRadius: 'var(--radius-sm)',
    border: `1px solid ${disabled ? 'var(--ink-40)' : toneColor}`,
    background: isPrimary ? disabled ? 'var(--ink-40)' : toneColor : 'transparent',
    color: isPrimary ? 'var(--paper)' : disabled ? 'var(--ink-40)' : toneColor,
    cursor: disabled ? 'not-allowed' : 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    transition: 'opacity .15s ease'
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    style: style,
    disabled: disabled,
    onMouseDown: e => {
      e.currentTarget.style.opacity = '.7';
    },
    onMouseUp: e => {
      e.currentTarget.style.opacity = '1';
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  placeholder,
  type = 'text',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      fontFamily: 'var(--font-mono)'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '13px',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-caps)',
      color: 'var(--muted)'
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    placeholder: placeholder,
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '16px',
      padding: '12px',
      borderRadius: 'var(--radius-sm)',
      border: '1px solid var(--ink-15)',
      background: 'var(--paper-raised)',
      color: 'var(--ink)',
      outline: 'none'
    },
    onFocus: e => {
      e.target.style.border = '1px solid var(--blue)';
    },
    onBlur: e => {
      e.target.style.border = '1px solid var(--ink-15)';
    }
  }, rest)));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function Card({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--ink)',
      borderRadius: 'var(--radius-card)',
      padding: 'var(--space-3)',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// ui_kits/booking-app/BookingScreen.jsx
try { (() => {
const {
  useState
} = React;
const {
  Legend,
  CalendarSlot,
  Card,
  Button
} = window.FlaviaBuzziPaperPenDesignSystem_2ea0ec;
const HOURS = ['9:00', '10:00', '11:00', '1:00', '2:00', '3:00', '4:00'];
const DAYS = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
function seedGrid() {
  const grid = {};
  DAYS.forEach((d, di) => HOURS.forEach((h, hi) => {
    const key = `${di}-${hi}`;
    const r = (di * 7 + hi) % 5;
    grid[key] = r === 0 ? 'booked' : r === 4 ? 'unavailable' : 'open';
  }));
  return grid;
}
function BookingScreen() {
  const [grid] = useState(seedGrid);
  const [selected, setSelected] = useState(null);
  const todayCol = 2;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100%',
      background: 'var(--paper)',
      padding: '48px',
      fontFamily: 'var(--font-mono)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '13px',
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: 'var(--muted)'
    }
  }, "ITALIAN LESSONS"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontSize: '48px',
      marginTop: '4px'
    }
  }, "Flavia Buzzi"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '16px',
      color: 'var(--ink)',
      marginTop: '8px',
      maxWidth: '520px',
      lineHeight: 'var(--leading-body)'
    }
  }, "Pick any open slot to request a lesson. You'll get a confirmation once Flavia accepts."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '13px',
      color: 'var(--muted)',
      marginTop: '8px'
    }
  }, "DURATION 45 MIN \xA0\xB7\xA0 TIMEZONE CET"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '32px'
    }
  }, /*#__PURE__*/React.createElement(Legend, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '64px repeat(7,1fr)',
      gap: '8px',
      marginTop: '24px',
      maxWidth: '760px'
    }
  }, /*#__PURE__*/React.createElement("div", null), DAYS.map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: d,
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '13px',
      letterSpacing: '.08em',
      color: i === todayCol ? 'var(--blue)' : 'var(--ink)',
      textAlign: 'center'
    }
  }, d)), HOURS.map((h, hi) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '13px',
      color: 'var(--muted)',
      display: 'flex',
      alignItems: 'center'
    }
  }, h), DAYS.map((d, di) => {
    const key = `${di}-${hi}`;
    const state = grid[key];
    return /*#__PURE__*/React.createElement(CalendarSlot, {
      key: key,
      state: state,
      today: di === todayCol,
      onClick: () => state === 'open' && setSelected(key)
    });
  })))), selected && /*#__PURE__*/React.createElement(Card, {
    style: {
      marginTop: '32px',
      maxWidth: '360px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '13px',
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: 'var(--muted)'
    }
  }, "REQUEST THIS SLOT"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '20px',
      marginTop: '8px'
    }
  }, DAYS[Number(selected.split('-')[0])], " \xB7 ", HOURS[Number(selected.split('-')[1])]), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '12px',
      marginTop: '16px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    tone: "blue",
    onClick: () => setSelected(null)
  }, "Request"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    tone: "ink",
    onClick: () => setSelected(null)
  }, "Cancel"))));
}
window.BookingScreen = BookingScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/booking-app/BookingScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/booking-app/DashboardScreen.jsx
try { (() => {
const {
  useState
} = React;
const {
  StatusTag,
  Button,
  Card
} = window.FlaviaBuzziPaperPenDesignSystem_2ea0ec;
const REQUESTS = [{
  id: 1,
  name: 'Marco Rossi',
  day: 'Tue',
  time: '10:00 AM',
  status: 'pending'
}, {
  id: 2,
  name: 'Elena Conti',
  day: 'Wed',
  time: '2:00 PM',
  status: 'confirmed'
}, {
  id: 3,
  name: 'Julien Foret',
  day: 'Thu',
  time: '9:00 AM',
  status: 'pending'
}, {
  id: 4,
  name: 'Sara Kim',
  day: 'Fri',
  time: '4:00 PM',
  status: 'declined'
}];
function DashboardScreen() {
  const [rows, setRows] = useState(REQUESTS);
  const setStatus = (id, status) => setRows(rs => rs.map(r => r.id === id ? {
    ...r,
    status
  } : r));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100%',
      background: 'var(--paper)',
      padding: '48px',
      fontFamily: 'var(--font-mono)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '13px',
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: 'var(--muted)'
    }
  }, "TEACHER DASHBOARD"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontSize: '48px',
      marginTop: '4px'
    }
  }, "Booking Requests"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '32px',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      maxWidth: '640px'
    }
  }, rows.map(r => /*#__PURE__*/React.createElement(Card, {
    key: r.id,
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '20px'
    }
  }, r.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '13px',
      color: 'var(--muted)',
      marginTop: '4px'
    }
  }, r.day.toUpperCase(), " \xB7 ", r.time)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px'
    }
  }, /*#__PURE__*/React.createElement(StatusTag, {
    status: r.status
  }), r.status === 'pending' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '8px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    tone: "green",
    size: "sm",
    onClick: () => setStatus(r.id, 'confirmed')
  }, "Accept"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    tone: "red",
    size: "sm",
    onClick: () => setStatus(r.id, 'declined')
  }, "Decline")))))));
}
window.DashboardScreen = DashboardScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/booking-app/DashboardScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/booking-app/LoginScreen.jsx
try { (() => {
const {
  Card,
  Input,
  Button
} = window.FlaviaBuzziPaperPenDesignSystem_2ea0ec;
function LoginScreen({
  onLogin
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--paper)',
      padding: '48px'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    style: {
      width: '360px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '13px',
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: 'var(--muted)',
      marginBottom: '8px'
    }
  }, "TEACHER LOGIN"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontSize: '32px',
      marginBottom: '24px'
    }
  }, "Flavia Buzzi"), /*#__PURE__*/React.createElement("form", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    },
    onSubmit: e => {
      e.preventDefault();
      onLogin && onLogin();
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    placeholder: "flavia@example.com"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Password",
    type: "password",
    placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    tone: "blue",
    type: "submit",
    style: {
      marginTop: '8px',
      justifyContent: 'center'
    }
  }, "Log in"))));
}
window.LoginScreen = LoginScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/booking-app/LoginScreen.jsx", error: String((e && e.message) || e) }); }

__ds_ns.CalendarSlot = __ds_scope.CalendarSlot;

__ds_ns.Legend = __ds_scope.Legend;

__ds_ns.StatusTag = __ds_scope.StatusTag;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Card = __ds_scope.Card;

})();
