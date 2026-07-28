// Line-art icon set. Cards used to lead with "01 / 02 / 03" numerals, which
// read as plain text on a phone where there is no hover or wide layout to
// carry the design. These give every card a graphic anchor instead.

export type IconName =
  | "shield"
  | "shieldCheck"
  | "officer"
  | "camera"
  | "clipboard"
  | "scan"
  | "layers"
  | "scale"
  | "spark"
  | "building"
  | "home"
  | "landmark"
  | "flag"
  | "clock"
  | "checkCircle"
  | "signal"
  | "refresh"
  | "users"
  | "graduation"
  | "briefcase"
  | "mail"
  | "certificate"
  | "target"
  | "heart"
  | "calendar"
  | "compass"
  | "userPlus"
  | "phone"
  | "eye"
  | "book";

const PATHS: Record<IconName, React.ReactNode> = {
  shield: <path d="M12 3l7 3v5.5c0 4.2-2.9 7.9-7 9.5-4.1-1.6-7-5.3-7-9.5V6l7-3z" />,
  shieldCheck: (
    <>
      <path d="M12 3l7 3v5.5c0 4.2-2.9 7.9-7 9.5-4.1-1.6-7-5.3-7-9.5V6l7-3z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  officer: (
    <>
      <path d="M12 3l6 2.5v5c0 3.8-2.5 7.2-6 8.5-3.5-1.3-6-4.7-6-8.5v-5L12 3z" />
      <circle cx="12" cy="10" r="2" />
      <path d="M8.5 16c.6-1.8 1.9-2.7 3.5-2.7s2.9.9 3.5 2.7" />
    </>
  ),
  camera: (
    <>
      <path d="M3 8.5A1.5 1.5 0 014.5 7h2.7l1.3-2h6l1.3 2h3.7A1.5 1.5 0 0121 8.5v8A1.5 1.5 0 0119.5 18h-15A1.5 1.5 0 013 16.5v-8z" />
      <circle cx="12" cy="12.5" r="3.2" />
    </>
  ),
  clipboard: (
    <>
      <path d="M9 4h6v3H9z" />
      <path d="M15 5.5h2.5A1.5 1.5 0 0119 7v12a1.5 1.5 0 01-1.5 1.5h-11A1.5 1.5 0 015 19V7a1.5 1.5 0 011.5-1.5H9" />
      <path d="M8.5 12h7M8.5 16h4.5" />
    </>
  ),
  scan: (
    <>
      <path d="M4 8V6a2 2 0 012-2h2M20 8V6a2 2 0 00-2-2h-2M4 16v2a2 2 0 002 2h2M20 16v2a2 2 0 01-2 2h-2" />
      <path d="M4 12h16" />
    </>
  ),
  layers: (
    <>
      <path d="M12 3l9 5-9 5-9-5 9-5z" />
      <path d="M3 13l9 5 9-5" />
    </>
  ),
  scale: (
    <>
      <path d="M12 4v16M7 20h10M4 9l4-4 4 4M4 9a4 4 0 008 0M12 9l4-4 4 4M12 9a4 4 0 008 0" />
    </>
  ),
  spark: <path d="M12 3l2.2 5.6L20 11l-5.8 2.4L12 19l-2.2-5.6L4 11l5.8-2.4L12 3z" />,
  building: (
    <>
      <path d="M4 20V6a2 2 0 012-2h6a2 2 0 012 2v14M14 20V10h4a2 2 0 012 2v8M3 20h18" />
      <path d="M7.5 8h3M7.5 12h3M7.5 16h3" />
    </>
  ),
  home: (
    <>
      <path d="M4 11l8-6.5 8 6.5" />
      <path d="M6 10v9a1 1 0 001 1h10a1 1 0 001-1v-9" />
      <path d="M10 20v-5h4v5" />
    </>
  ),
  landmark: (
    <>
      <path d="M3 10l9-5.5L21 10M4 10v8M9 10v8M15 10v8M20 10v8M3 21h18" />
    </>
  ),
  flag: (
    <>
      <path d="M6 21V4M6 5h11l-2 3.5L17 12H6" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  checkCircle: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M8.5 12.2l2.4 2.4 4.6-5" />
    </>
  ),
  signal: (
    <>
      <path d="M5.5 15.5a6 6 0 010-8.5M18.5 7a6 6 0 010 8.5M8.7 12.6a2.5 2.5 0 010-3.2M15.3 9.4a2.5 2.5 0 010 3.2" />
      <circle cx="12" cy="11" r="1.4" />
      <path d="M12 12.5V20" />
    </>
  ),
  refresh: (
    <>
      <path d="M20 12a8 8 0 01-13.7 5.6M4 12a8 8 0 0113.7-5.6" />
      <path d="M4 6.5V12h5.5M20 17.5V12h-5.5" />
    </>
  ),
  users: (
    <>
      <circle cx="9.5" cy="9" r="3" />
      <path d="M4 19c.7-3.1 2.7-4.7 5.5-4.7S14.3 15.9 15 19" />
      <path d="M16 7.2a3 3 0 010 5.6M17.5 14.7c1.7.6 2.8 2 3.2 4.3" />
    </>
  ),
  graduation: (
    <>
      <path d="M12 4l9 4.2-9 4.2-9-4.2L12 4z" />
      <path d="M7 10.4V15c0 1.5 2.2 2.7 5 2.7s5-1.2 5-2.7v-4.6" />
      <path d="M21 8.2v5" />
    </>
  ),
  briefcase: (
    <>
      <path d="M4 8.5h16a1 1 0 011 1V19a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5a1 1 0 011-1z" />
      <path d="M9 8.5V6a1.5 1.5 0 011.5-1.5h3A1.5 1.5 0 0115 6v2.5M3 13h18" />
    </>
  ),
  mail: (
    <>
      <path d="M3.5 6.5h17a1 1 0 011 1v9a1 1 0 01-1 1h-17a1 1 0 01-1-1v-9a1 1 0 011-1z" />
      <path d="M3 7.5l9 6 9-6" />
    </>
  ),
  certificate: (
    <>
      <path d="M5 4h14a1 1 0 011 1v9a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1z" />
      <path d="M8 8h8M8 11h5" />
      <path d="M9 15v5l3-1.7 3 1.7v-5" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="1" />
    </>
  ),
  heart: (
    <path d="M12 19.5s-6.8-4.2-6.8-9A3.7 3.7 0 0112 8.3a3.7 3.7 0 016.8 2.2c0 4.8-6.8 9-6.8 9z" />
  ),
  calendar: (
    <>
      <path d="M4.5 6h15a1 1 0 011 1v12a1 1 0 01-1 1h-15a1 1 0 01-1-1V7a1 1 0 011-1z" />
      <path d="M8 3.5V7M16 3.5V7M3.5 11h17" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M15 9l-1.7 4.3L9 15l1.7-4.3L15 9z" />
    </>
  ),
  userPlus: (
    <>
      <circle cx="10" cy="9" r="3.2" />
      <path d="M4 19c.7-3.2 2.9-4.9 6-4.9s5.3 1.7 6 4.9" />
      <path d="M18.5 6.5v5M16 9h5" />
    </>
  ),
  phone: (
    <path d="M6.5 4h3l1.5 3.7-2 1.4a11 11 0 005.9 5.9l1.4-2L20 14.5v3a2 2 0 01-2.2 2A15.5 15.5 0 014.5 6.2 2 2 0 016.5 4z" />
  ),
  eye: (
    <>
      <path d="M2.8 12S6.5 6.5 12 6.5 21.2 12 21.2 12 17.5 17.5 12 17.5 2.8 12 2.8 12z" />
      <circle cx="12" cy="12" r="2.8" />
    </>
  ),
  book: (
    <>
      <path d="M4 5.5A1.5 1.5 0 015.5 4H11v15H5.5A1.5 1.5 0 014 17.5v-12z" />
      <path d="M20 5.5A1.5 1.5 0 0018.5 4H13v15h5.5a1.5 1.5 0 001.5-1.5v-12z" />
    </>
  ),
};

export default function Icon({
  name,
  className = "h-6 w-6",
}: {
  name: IconName;
  className?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {PATHS[name]}
    </svg>
  );
}
