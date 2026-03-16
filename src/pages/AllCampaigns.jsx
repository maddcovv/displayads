import React, { useState } from "react";

// ── Icons ─────────────────────────────────────────────────────────────────────
const HomeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" />
    <path d="M9 21V12h6v9" />
  </svg>
);
const ChartIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="3" y="12" width="4" height="9" rx="1" />
    <rect x="10" y="7" width="4" height="14" rx="1" />
    <rect x="17" y="3" width="4" height="18" rx="1" />
  </svg>
);
const CampaignIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M22 12A10 10 0 1112 2" />
    <path d="M22 2L12 12" />
    <path d="M16 2h6v6" />
  </svg>
);
const CreativeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="3" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" />
    <rect x="14" y="14" width="7" height="7" rx="1" />
  </svg>
);
const ReportIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
    <path d="M14 2v6h6M8 13h8M8 17h5" />
  </svg>
);
const BellIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" />
  </svg>
);
const HelpIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <circle cx="12" cy="12" r="10" />
    <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3M12 17h.01" />
  </svg>
);
const UserIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);
const SearchIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="11" cy="11" r="8" />
    <path d="M21 21l-4.35-4.35" />
  </svg>
);
const ChevronDown = ({ size = 12 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M6 9l6 6 6-6" />
  </svg>
);
const ChevronUp = ({ size = 12 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M18 15l-6-6-6 6" />
  </svg>
);
const ChevronRight = ({ size = 10 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M9 6l6 6-6 6" />
  </svg>
);
const ChevronLeft = ({ size = 10 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M15 6l-6 6 6 6" />
  </svg>
);
const DotsIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <circle cx="5" cy="12" r="2" />
    <circle cx="12" cy="12" r="2" />
    <circle cx="19" cy="12" r="2" />
  </svg>
);
const InfoIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4M12 8h.01" />
  </svg>
);
const WalmartSpark = () => (
  <svg width="24" height="24" viewBox="0 0 32 32" fill="#FFC220">
    <path d="M16 2l2.5 8.5L26 8l-5.5 6.5L28 18l-8.5-.5L17 26l-1-8.5L7 19.5l6.5-4.5L8 8l7.5 3.5z" />
  </svg>
);
const XIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M18 6L6 18M6 6l12 12" />
  </svg>
);

// Tooltip wrapper — hover to show a small label above the icon
function Tooltip({ text, children }) {
  const [show, setShow] = useState(false);
  return (
    <span className="relative inline-flex cursor-help"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}>
      {children}
      {show && (
        <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-52 bg-gray-800 text-white text-[11px] rounded px-2.5 py-1.5 shadow-lg z-50 leading-snug pointer-events-none whitespace-normal"
          style={{ fontFamily: "inherit" }}>
          {text}
          <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-800"/>
        </span>
      )}
    </span>
  );
}
const ExportIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
    <polyline points="17 8 12 3 7 8" />
    <line x1="12" y1="3" x2="12" y2="15" />
  </svg>
);
const SignOutIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9"/>
  </svg>
);
const EditIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>
);
const TrashIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6" />
    <path d="M10 11v6M14 11v6M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2" />
  </svg>
);
const GearIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
  </svg>
);
const GridIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="3" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" />
    <rect x="14" y="14" width="7" height="7" rx="1" />
  </svg>
);
const BriefcaseIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
  </svg>
);
const CalendarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <path d="M16 2v4M8 2v4M3 10h18" />
  </svg>
);
const RefreshIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M23 4v6h-6" />
    <path d="M1 20v-6h6" />
    <path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" />
  </svg>
);
const PinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0071CE" strokeWidth="1.8">
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
const VideoIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0071CE" strokeWidth="1.8">
    <rect x="2" y="4" width="15" height="16" rx="2" />
    <path d="M17 8l5-2v12l-5-2" />
  </svg>
);
const DocIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0071CE" strokeWidth="1.8">
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
    <path d="M14 2v6h6M8 13h8M8 17h5" />
  </svg>
);
const EyeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);
const ClickIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2v-4M9 21H5a2 2 0 01-2-2v-4m0 0h18" />
  </svg>
);
const CartIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <circle cx="9" cy="21" r="1" />
    <circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
  </svg>
);

// ── Mock Data ──────────────────────────────────────────────────────────────────
const campaigns = [
  { id: "10001", name: "Halloween Candy",       status: "In Progress", duration: "9/1/2024–10/31/2024",  ecpm: "$2.50", dailyBudget: "$500.00",   totalBudget: "$15,000.00", totalSpend: "$8,200.00",  impressions: "328,000",   pacing: "71%" },
  { id: "10002", name: "Easter Candy",          status: "In Progress", duration: "3/1/2025–4/20/2025",   ecpm: "$2.00", dailyBudget: "$400.00",   totalBudget: "$12,000.00", totalSpend: "$5,600.00",  impressions: "224,000",   pacing: "63%" },
  { id: "10003", name: "Valentine's Candy",     status: "In Progress", duration: "1/15/2025–2/14/2025",  ecpm: "$2.75", dailyBudget: "$1,000.00", totalBudget: "$30,000.00", totalSpend: "$22,000.00", impressions: "800,000",   pacing: "88%" },
  { id: "10004", name: "Christmas Cookies",     status: "In Progress", duration: "11/1/2024–12/25/2024", ecpm: "$3.00", dailyBudget: "$2,000.00", totalBudget: "$60,000.00", totalSpend: "$41,000.00", impressions: "1,366,666", pacing: "79%" },
  { id: "10005", name: "Back to School Snacks", status: "In Progress", duration: "7/15/2024–9/1/2024",   ecpm: "$1.80", dailyBudget: "$300.00",   totalBudget: "$8,000.00",  totalSpend: "$4,100.00",  impressions: "227,777",   pacing: "55%" },
  { id: "10006", name: "Summer BBQ",            status: "In Progress", duration: "5/20/2025–7/4/2025",   ecpm: "$2.20", dailyBudget: "$600.00",   totalBudget: "$18,000.00", totalSpend: "$7,800.00",  impressions: "354,545",   pacing: "60%" },
  { id: "10007", name: "Fourth of July Deals",  status: "In Progress", duration: "6/25/2025–7/5/2025",   ecpm: "$2.50", dailyBudget: "$1,500.00", totalBudget: "$15,000.00", totalSpend: "$9,200.00",  impressions: "368,000",   pacing: "74%" },
  { id: "10008", name: "Thanksgiving Feast",    status: "In Progress", duration: "10/15/2024–11/28/2024",ecpm: "$2.80", dailyBudget: "$800.00",   totalBudget: "$24,000.00", totalSpend: "$18,500.00", impressions: "660,714",   pacing: "82%" },
  { id: "10009", name: "Mother's Day Treats",   status: "In Progress", duration: "4/25/2025–5/11/2025",  ecpm: "$2.10", dailyBudget: "$450.00",   totalBudget: "$9,000.00",  totalSpend: "$3,900.00",  impressions: "185,714",   pacing: "57%" },
  { id: "10010", name: "Super Bowl Snacks",     status: "In Progress", duration: "1/20/2025–2/9/2025",   ecpm: "$3.50", dailyBudget: "$2,500.00", totalBudget: "$50,000.00", totalSpend: "$38,000.00", impressions: "1,085,714", pacing: "92%" },
];

const navItems = [
  { icon: <HomeIcon />,     label: "Home",      page: "dashboard" },
  { icon: <ChartIcon />,    label: "Analytics", page: "analytics" },
  { icon: <CampaignIcon />, label: "Campaigns", page: "campaigns" },
  { icon: <CreativeIcon />, label: "Creatives", page: "creatives" },
  { icon: <ReportIcon />,   label: "Reports",   page: "reports"   },
];

const columns = [
  { key: "name",        label: "Campaign",     sortable: true, width: "w-72" },
  { key: "status",      label: "Status",       sortable: true, width: "w-28" },
  { key: "duration",    label: "Duration",     sortable: true, width: "w-44" },
  { key: "ecpm",        label: "eCPM",         sortable: true, width: "w-24", info: true },
  { key: "dailyBudget", label: "Daily budget", sortable: true, width: "w-28" },
  { key: "totalBudget", label: "Total budget", sortable: true, width: "w-28" },
  { key: "totalSpend",  label: "Total spend",  sortable: true, width: "w-28" },
  { key: "impressions", label: "Impressions",  sortable: true, width: "w-28" },
  { key: "pacing",      label: "Pacing",       sortable: true, width: "w-20" },
];

// ── Mock data for populated modal state ────────────────────────────────────────
const mockAdGroups = [
  { name: "Halloween Candy Contextual Targeting - Seasonal",      type: "Contextual", color: "#E8F4FD" },
  { name: "Halloween Candy Keyword Targeting",                     type: "Keyword",    color: "#FFF3E0" },
  { name: "Halloween Candy Behavioral Targeting - Candy Buyers",  type: "Behavioral", color: "#F3E5F5" },
  { name: "Halloween Candy Contextual Targeting - Candy Category",type: "Contextual", color: "#E8F5E9" },
];

const mockItems = [
  { name: "Snickers Fun Size Variety Bag",      category: "Candy & Chocolate", gtin: "00040000525431", color: "#8B4513" },
  { name: "M&M's Halloween Mix Bag",            category: "Candy & Chocolate", gtin: "00040000487128", color: "#CC0000" },
  { name: "Reese's Peanut Butter Cups Bag",     category: "Candy & Chocolate", gtin: "00034000002405", color: "#FF8C00" },
  { name: "Hershey's Milk Chocolate Bars",      category: "Candy & Chocolate", gtin: "00034000990009", color: "#5C3317" },
  { name: "Kit Kat Miniatures Bag",             category: "Candy & Chocolate", gtin: "00034000987207", color: "#CC0000" },
  { name: "Skittles Original Share Size",       category: "Candy & Chocolate", gtin: "00022000006201", color: "#FF4500" },
  { name: "Jolly Rancher Hard Candy Bag",       category: "Candy & Chocolate", gtin: "00026400015014", color: "#006400" },
  { name: "Twix Fun Size Bag",                  category: "Candy & Chocolate", gtin: "00040000523376", color: "#DAA520" },
  { name: "Butterfinger Halloween Bag",         category: "Candy & Chocolate", gtin: "00028000128722", color: "#FFA500" },
  { name: "Milky Way Fun Size Bag",             category: "Candy & Chocolate", gtin: "00040000544630", color: "#4B3619" },
];

// ── Sub-components ─────────────────────────────────────────────────────────────
function StatusBadge({ status }) {
  const styles = {
    "In Progress": "bg-blue-50 text-[#0071CE] border border-blue-200",
    Completed:     "bg-green-50 text-green-700 border border-green-200",
    Active:        "bg-green-100 text-green-800 border border-green-300",
    Paused:        "bg-yellow-50 text-yellow-700 border border-yellow-300",
    Draft:         "bg-gray-50 text-gray-600 border border-gray-200",
  };
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium ${styles[status] || styles.Completed}`}
      style={{ fontFamily: "Bogle, 'Nunito Sans', sans-serif" }}>
      {status}
    </span>
  );
}

function Sidebar({ currentPage, onNavigate }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <aside
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
      style={{ width: expanded ? "280px" : "52px", transition: "width 200ms ease" }}
      className="fixed left-0 top-[52px] bottom-0 bg-white border-r border-gray-200 flex flex-col pt-3 gap-1 z-30 overflow-hidden shadow-sm"
    >
      {navItems.map((item) => (
        <button key={item.label} title={!expanded ? item.label : undefined}
          onClick={() => onNavigate && onNavigate(item.page)}
          className={`h-10 flex items-center mx-1.5 rounded-lg transition-colors whitespace-nowrap overflow-hidden cursor-pointer
            ${currentPage === item.page ? "bg-blue-50 text-[#0071CE]" : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"}`}>
          {/* Fixed-width icon slot — always 46px so icon stays centered when collapsed */}
          <span className="shrink-0 w-[46px] flex items-center justify-center">{item.icon}</span>
          <span className={`text-sm font-medium pr-3 transition-opacity duration-150 ${expanded ? "opacity-100" : "opacity-0"}`}
            style={{ fontFamily: "Bogle, 'Nunito Sans', sans-serif" }}>
            {item.label}
          </span>
        </button>
      ))}
    </aside>
  );
}

const navNotifications = [
  { id: 1, title: "Halloween Candy campaign approved",      time: "2 hours ago",  read: false },
  { id: 2, title: "Easter Candy budget 80% reached",        time: "5 hours ago",  read: false },
  { id: 3, title: "Super Bowl Snacks campaign ended",       time: "1 day ago",    read: true  },
  { id: 4, title: "Valentine's Candy performance report ready", time: "2 days ago", read: true },
];

function TopNav() {
  const [showNotifs, setShowNotifs] = useState(false);
  const [showUser,   setShowUser]   = useState(false);
  const unread = navNotifications.filter(n => !n.read).length;

  const closeAll = () => { setShowNotifs(false); setShowUser(false); };

  return (
    <>
      {/* Click-away backdrop */}
      {(showNotifs || showUser) && (
        <div className="fixed inset-0 z-30" onClick={closeAll} />
      )}

      <header className="fixed top-0 left-0 right-0 h-[52px] bg-[#0071CE] flex items-center px-4 gap-3 z-40">
        <div className="flex items-center gap-2">
          <WalmartSpark />
          <span className="text-white font-bold text-base tracking-tight"
            style={{ fontFamily: "Bogle, 'Nunito Sans', sans-serif" }}>
            Display Self Service
          </span>
          <ChevronDown size={12} />
        </div>
        <span className="text-white opacity-40 text-lg font-thin ml-1">|</span>
        <button className="flex items-center gap-1.5 text-white text-sm opacity-90 hover:opacity-100"
          style={{ fontFamily: "Bogle, 'Nunito Sans', sans-serif" }}>
          My Candy Corp
          <ChevronDown size={12} />
        </button>
        <div className="flex-1" />

        <div className="flex items-center gap-1 text-white relative">

          {/* ── Bell / Notifications ── */}
          <div className="relative">
            <button
              onClick={() => { setShowNotifs(v => !v); setShowUser(false); }}
              className="relative p-2 rounded-full hover:bg-white/10 transition-colors cursor-pointer">
              <BellIcon />
              {unread > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 text-white text-[9px] font-bold rounded-full flex items-center justify-center leading-none">
                  {unread}
                </span>
              )}
            </button>

            {showNotifs && (
              <div className="absolute right-0 top-full mt-2 w-80 bg-white rounded-lg shadow-2xl border border-gray-200 z-50 overflow-hidden"
                style={{ fontFamily: "Bogle, 'Nunito Sans', sans-serif" }}>
                <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
                  <h3 className="text-sm font-semibold text-gray-800">Notifications</h3>
                  <button className="text-xs text-[#0071CE] hover:underline font-medium cursor-pointer">Mark all read</button>
                </div>
                <div className="max-h-72 overflow-y-auto divide-y divide-gray-50">
                  {navNotifications.map(n => (
                    <div key={n.id}
                      className={`flex items-start gap-3 px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors ${!n.read ? "bg-blue-50/50" : ""}`}>
                      <div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${!n.read ? "bg-[#0071CE]" : "bg-gray-200"}`} />
                      <div className="min-w-0">
                        <p className="text-xs text-gray-800 leading-snug">{n.title}</p>
                        <p className="text-[10px] text-gray-400 mt-0.5">{n.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="px-4 py-2.5 border-t border-gray-100 text-center">
                  <button className="text-xs text-[#0071CE] hover:underline font-medium cursor-pointer">View all notifications</button>
                </div>
              </div>
            )}
          </div>

          {/* ── Help ── */}
          <button className="p-2 rounded-full hover:bg-white/10 transition-colors opacity-90 hover:opacity-100">
            <HelpIcon />
          </button>

          {/* ── User / Account ── */}
          <div className="relative">
            <button
              onClick={() => { setShowUser(v => !v); setShowNotifs(false); }}
              className="p-2 rounded-full hover:bg-white/10 transition-colors opacity-90 hover:opacity-100 cursor-pointer">
              <UserIcon />
            </button>

            {showUser && (
              <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-lg shadow-2xl border border-gray-200 z-50 overflow-hidden"
                style={{ fontFamily: "Bogle, 'Nunito Sans', sans-serif" }}>
                {/* Profile header */}
                <div className="px-4 py-4 bg-gray-50 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#0071CE] flex items-center justify-center text-white font-bold text-sm shrink-0">
                      JR
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-gray-800 truncate">John Reese</p>
                      <p className="text-xs text-gray-500 truncate">john@mycandycorp.com</p>
                    </div>
                  </div>
                </div>
                {/* Menu */}
                <div className="py-1">
                  {[
                    { icon: <UserIcon />,      label: "My Profile" },
                    { icon: <GearIcon />,      label: "Account Settings" },
                    { icon: <BriefcaseIcon />, label: "My Candy Corp" },
                  ].map(item => (
                    <button key={item.label}
                      className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors text-left cursor-pointer">
                      <span className="text-gray-400 shrink-0 inline-flex">{item.icon}</span>
                      {item.label}
                    </button>
                  ))}
                </div>
                <div className="border-t border-gray-100 py-1">
                  <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 transition-colors cursor-pointer">
                    <span className="shrink-0 inline-flex"><SignOutIcon /></span>
                    Sign out
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>
      </header>
    </>
  );
}

function Pagination({ current, total, perPage, onPerPageChange }) {
  return (
    <div className="flex items-center justify-end gap-2 py-3 px-4 text-sm text-gray-600"
      style={{ fontFamily: "Bogle, 'Nunito Sans', sans-serif" }}>
      <span>Show</span>
      <select value={perPage} onChange={(e) => onPerPageChange(Number(e.target.value))}
        className="border border-gray-300 rounded px-1.5 py-0.5 text-sm text-gray-700 bg-white cursor-pointer">
        {[10, 25, 50].map((n) => <option key={n}>{n}</option>)}
      </select>
      <span>per page</span>
      <div className="flex items-center gap-1 ml-2">
        <button className="w-7 h-7 flex items-center justify-center rounded border border-gray-200 hover:bg-gray-50 text-gray-500 disabled:opacity-30" disabled>
          <ChevronLeft />
        </button>
        {[1, 2, 3].map((p) => (
          <button key={p}
            className={`w-7 h-7 flex items-center justify-center rounded text-sm font-medium transition-colors
              ${p === current ? "bg-[#0071CE] text-white" : "border border-gray-200 text-gray-600 hover:bg-gray-50"}`}>
            {p}
          </button>
        ))}
        <button className="w-7 h-7 flex items-center justify-center rounded border border-gray-200 hover:bg-gray-50 text-gray-500">
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}

// ── Populated Ad Groups Section ────────────────────────────────────────────────
function AdGroupsPopulated() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className="mt-4">
      {/* Scheduled header */}
      <button
        onClick={() => setCollapsed(v => !v)}
        className="flex items-center gap-2 w-full text-left mb-3 group"
      >
        <span className="text-sm font-semibold text-gray-700">Scheduled</span>
        <span className="text-gray-400"><InfoIcon /></span>
        <span className="ml-auto text-gray-400 group-hover:text-gray-600">
          {collapsed ? <ChevronDown size={14} /> : <ChevronUp size={14} />}
        </span>
      </button>

      {!collapsed && (
        <div className="space-y-0 border border-gray-200 rounded-lg overflow-hidden">
          {mockAdGroups.map((ag, i) => (
            <div key={i}
              className={`flex items-center gap-3 px-4 py-3 ${i < mockAdGroups.length - 1 ? "border-b border-gray-100" : ""} hover:bg-gray-50 transition-colors`}>
              {/* Thumbnail placeholder */}
              <div className="w-10 h-10 rounded shrink-0 flex items-center justify-center text-white text-xs font-bold"
                style={{ backgroundColor: ag.color }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M3 9h18M9 21V9" />
                </svg>
              </div>
              {/* Name + type */}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-[#0071CE] hover:underline cursor-pointer truncate">{ag.name}</p>
                <p className="text-xs text-gray-400">{ag.type}</p>
              </div>
              {/* Actions */}
              <div className="flex items-center gap-3 shrink-0">
                <button className="text-xs text-[#0071CE] hover:underline font-medium">Unschedule</button>
                <button className="text-gray-400 hover:text-gray-600 p-1 rounded hover:bg-gray-100"><EditIcon /></button>
                <button className="text-gray-400 hover:text-red-500 p-1 rounded hover:bg-gray-100"><TrashIcon /></button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ── Populated Measure Section ──────────────────────────────────────────────────
function MeasurePopulated() {
  const [autoRefresh, setAutoRefresh] = useState(true);
  return (
    <div className="mt-4 space-y-6">
      {/* Items subsection */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <div>
            <span className="text-sm font-semibold text-gray-800">Items</span>
            <span className="text-xs text-gray-400 ml-2">2,304 items</span>
          </div>
          <button className="border border-gray-300 rounded-full px-3 py-1 text-xs font-medium text-gray-700 hover:bg-gray-50 transition-colors">
            Add items
          </button>
        </div>

        <div className="border border-gray-200 rounded-lg overflow-hidden">
          {/* Table header */}
          <div className="grid text-xs font-semibold text-gray-500 bg-gray-50 border-b border-gray-200 px-3 py-2"
            style={{ gridTemplateColumns: "1fr 200px 160px 36px" }}>
            <span>Item</span>
            <span>Category</span>
            <span>GTIN</span>
            <span />
          </div>
          {/* Rows */}
          {mockItems.map((item, i) => (
            <div key={i}
              className={`grid items-center px-3 py-2.5 ${i < mockItems.length - 1 ? "border-b border-gray-100" : ""} hover:bg-gray-50`}
              style={{ gridTemplateColumns: "1fr 200px 160px 36px" }}>
              <div className="flex items-center gap-2 min-w-0">
                {/* Color swatch thumbnail */}
                <div className="w-8 h-8 rounded shrink-0"
                  style={{ backgroundColor: item.color + "33", border: `2px solid ${item.color}44` }}>
                  <div className="w-full h-full rounded flex items-center justify-center">
                    <div className="w-4 h-4 rounded-sm" style={{ backgroundColor: item.color }} />
                  </div>
                </div>
                <span className="text-xs text-gray-700 truncate">{item.name}</span>
              </div>
              <span className="text-xs text-gray-500">{item.category}</span>
              <span className="text-xs text-gray-500 font-mono">{item.gtin}</span>
              <button className="text-gray-300 hover:text-red-400 justify-self-center"><TrashIcon /></button>
            </div>
          ))}
        </div>

        {/* Items pagination */}
        <div className="flex items-center justify-center gap-1 mt-3">
          <button className="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-gray-600"><ChevronLeft /></button>
          {[1,2,3,4,5,6,7].map(p => (
            <button key={p}
              className={`w-6 h-6 flex items-center justify-center rounded text-xs font-medium
                ${p === 1 ? "bg-[#0071CE] text-white" : "text-gray-500 hover:bg-gray-100"}`}>
              {p}
            </button>
          ))}
          <button className="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-gray-600"><ChevronRight /></button>
        </div>
      </div>

      {/* Brands and categories subsection */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <div>
            <span className="text-sm font-semibold text-gray-800">Brands and categories</span>
            <span className="text-xs text-gray-400 ml-2">4,608 items</span>
            <span className="text-gray-400 ml-1 inline-flex"><InfoIcon /></span>
          </div>
          <button className="flex items-center gap-1 border border-gray-300 rounded-full px-3 py-1 text-xs font-medium text-gray-700 hover:bg-gray-50 transition-colors">
            Add <ChevronDown size={10} />
          </button>
        </div>

        <div className="border border-gray-200 rounded-lg overflow-hidden">
          {/* Brand header */}
          <div className="px-3 py-2 bg-gray-50 border-b border-gray-200">
            <div className="grid text-xs font-semibold text-gray-500"
              style={{ gridTemplateColumns: "1fr 100px 36px" }}>
              <span>Brand</span>
              <span>Item count</span>
              <span />
            </div>
          </div>
          {[{ name: "Mars", count: "1,200" }, { name: "Hershey's", count: "980" }].map((b, i) => (
            <div key={i}
              className={`grid items-center px-3 py-2.5 ${i === 0 ? "border-b border-gray-100" : ""} hover:bg-gray-50`}
              style={{ gridTemplateColumns: "1fr 100px 36px" }}>
              <span className="text-xs text-gray-700">{b.name}</span>
              <span className="text-xs text-gray-500">{b.count}</span>
              <button className="text-gray-300 hover:text-red-400 justify-self-center"><TrashIcon /></button>
            </div>
          ))}

          {/* Category header */}
          <div className="px-3 py-2 bg-gray-50 border-t border-b border-gray-200">
            <div className="grid text-xs font-semibold text-gray-500"
              style={{ gridTemplateColumns: "1fr 100px 36px" }}>
              <span>Category</span>
              <span>Item count</span>
              <span />
            </div>
          </div>
          {[{ name: "Candy & Chocolate", count: "1,850" }, { name: "Seasonal Confections", count: "782" }].map((c, i) => (
            <div key={i}
              className={`grid items-center px-3 py-2.5 ${i === 0 ? "border-b border-gray-100" : ""} hover:bg-gray-50`}
              style={{ gridTemplateColumns: "1fr 100px 36px" }}>
              <span className="text-xs text-gray-700">{c.name}</span>
              <span className="text-xs text-gray-500">{c.count}</span>
              <button className="text-gray-300 hover:text-red-400 justify-self-center"><TrashIcon /></button>
            </div>
          ))}
        </div>

        {/* Auto-refresh toggle */}
        <div className="flex items-center gap-2 mt-3">
          <button
            onClick={() => setAutoRefresh(v => !v)}
            className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${autoRefresh ? "bg-[#0071CE]" : "bg-gray-300"}`}>
            <span className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white shadow transition-transform ${autoRefresh ? "translate-x-4.5" : "translate-x-0.5"}`} />
          </button>
          <span className="text-xs text-gray-600">Auto-refresh every 30 days</span>
        </div>
      </div>
    </div>
  );
}

// ── Create Campaign Modal ──────────────────────────────────────────────────────
function CreateCampaignModal({ onClose }) {
  const [campaignName, setCampaignName]       = useState("");
  const [showDescription, setShowDescription] = useState(false);
  const [description, setDescription]         = useState("");
  const [objective, setObjective]             = useState("awareness");
  const [perAdGroup, setPerAdGroup]           = useState(false);
  const [startDate, setStartDate]             = useState("3/1/2024");
  const [dailyBudget, setDailyBudget]         = useState("200");
  const [populated, setPopulated]             = useState(false);

  const objectives = [
    { id: "awareness",  icon: <EyeIcon />,   title: "Awareness",  subtitle: "Drive more impressions.", detail: "Optimizes for CPM" },
    { id: "engagement", icon: <ClickIcon />, title: "Engagement", subtitle: "Get more clicks.",         detail: null },
    { id: "sales",      icon: <CartIcon />,  title: "Sales",      subtitle: "Sell more units.",         detail: null },
  ];

  const handlePopulate = () => setPopulated(true);

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-[#F2F4F7]"
      style={{ fontFamily: "Bogle, 'Nunito Sans', sans-serif" }}>

      {/* ── Modal top bar ── */}
      <div className="h-[52px] bg-[#0071CE] flex items-center px-6 shrink-0 z-10">
        <button onClick={onClose}
          className="flex items-center gap-2 text-white text-sm font-medium hover:opacity-80 transition-opacity">
          <XIcon />
          Cancel
        </button>
        <div className="flex-1 text-center text-white font-semibold text-base">
          Create campaign
        </div>
        <div className="w-20" />
      </div>

      {/* ── Scrollable body ── */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-5xl mx-auto px-8 py-8 pb-28">

          <h1 style={{
            fontFamily: "'Nunito Sans', sans-serif",
            fontSize: "26px",
            fontWeight: 700,
            color: "#2e2f32",
            marginBottom: "24px",
          }}>
            Create campaign
          </h1>

          <div className="flex gap-6 items-start">

            {/* ── Left column ── */}
            <div className="flex-1 min-w-0 space-y-5">

              {/* Campaign details card */}
              <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
                <div className="flex items-start gap-2 mb-5">
                  <div className="text-gray-500 shrink-0 mt-0.5"><GearIcon /></div>
                  <h2 className="text-base font-semibold text-gray-800 leading-snug">Campaign details</h2>
                </div>

                <label className="block mb-1 text-sm font-medium text-gray-700">Campaign name</label>
                <input
                  type="text"
                  value={campaignName}
                  onChange={(e) => setCampaignName(e.target.value)}
                  placeholder="Spring Travel 2024"
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#0071CE] focus:ring-1 focus:ring-[#0071CE]/30"
                />

                <button
                  onClick={() => setShowDescription((v) => !v)}
                  className="mt-3 flex items-center gap-1 text-sm text-[#0071CE] hover:underline font-medium">
                  <span className="text-lg leading-none">{showDescription ? "−" : "+"}</span>
                  Description
                </button>
                {showDescription && (
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={3}
                    placeholder="Describe your campaign..."
                    className="mt-2 w-full border border-gray-300 rounded px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#0071CE] focus:ring-1 focus:ring-[#0071CE]/30 resize-none"
                  />
                )}

                <div className="border-t border-gray-100 my-5" />

                <h3 className="text-sm font-semibold text-gray-800 mb-1">Campaign objective</h3>
                <p className="text-xs text-gray-500 mb-3">
                  Choose an objective. We'll use it to optimize where we deliver your ads and to which customers.
                </p>
                <div className="space-y-2">
                  {objectives.map((obj) => (
                    <button key={obj.id}
                      onClick={() => setObjective(obj.id)}
                      className={`w-full flex flex-col px-4 py-3 rounded border cursor-pointer transition-colors text-left
                        ${objective === obj.id ? "border-gray-800 bg-white" : "border-gray-200 bg-white hover:border-gray-300"}`}>
                      <span className="flex items-center gap-2">
                        <span className={`shrink-0 ${objective === obj.id ? "text-gray-700" : "text-gray-400"}`}>
                          {obj.icon}
                        </span>
                        <span className="text-sm font-semibold text-gray-800">{obj.title}</span>
                        <span className="text-sm text-gray-500">· {obj.subtitle}</span>
                      </span>
                      {obj.detail && (
                        <span className="text-xs text-gray-400 mt-0.5 pl-7">{obj.detail}</span>
                      )}
                    </button>
                  ))}
                </div>

                <div className="border-t border-gray-100 my-5" />

                <h3 className="text-sm font-semibold text-gray-800 mb-1">Campaign schedule and budget and delivery speed</h3>
                <p className="text-xs text-gray-500 mb-3">
                  You can apply these settings to your campaign or set them for each ad group instead.
                </p>

                <label className="flex items-center gap-2 mb-4 cursor-pointer">
                  <input type="checkbox" checked={perAdGroup} onChange={(e) => setPerAdGroup(e.target.checked)}
                    className="w-4 h-4 accent-[#0071CE]" />
                  <span className="text-sm text-gray-700">Set for each ad group instead</span>
                </label>

                <div className={`space-y-4 ${perAdGroup ? "opacity-40 pointer-events-none" : ""}`}>
                  <div className="flex items-start gap-8">
                    <span className="text-sm font-medium text-gray-700 w-20 pt-2 shrink-0">Schedule</span>
                    <div>
                      <label className="block text-xs text-gray-500 mb-1">Start date</label>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2 border border-gray-300 rounded px-3 py-1.5 bg-white">
                          <input type="text" value={startDate} onChange={(e) => setStartDate(e.target.value)}
                            className="text-sm text-gray-700 w-20 focus:outline-none" />
                          <span className="text-gray-400"><CalendarIcon /></span>
                        </div>
                        <button className="flex items-center gap-1.5 text-sm text-[#0071CE] hover:underline font-medium">
                          <RefreshIcon />
                          Add end date
                        </button>
                      </div>
                      <p className="text-xs text-gray-500 mt-1.5">
                        Duration: <span className="font-medium text-gray-700">unlimited</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-8">
                    <span className="text-sm font-medium text-gray-700 w-20 pt-2 shrink-0">Budget</span>
                    <div>
                      <label className="block text-xs text-gray-500 mb-1">Daily budget</label>
                      <div className="flex items-center border border-gray-300 rounded overflow-hidden w-36">
                        <span className="px-2.5 py-1.5 bg-gray-50 text-gray-500 text-sm border-r border-gray-300">$</span>
                        <input type="number" value={dailyBudget} onChange={(e) => setDailyBudget(e.target.value)}
                          className="flex-1 px-2 py-1.5 text-sm text-gray-700 focus:outline-none" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end mt-6">
                  <button
                    onClick={handlePopulate}
                    className="border border-gray-300 rounded-full px-5 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                    Save
                  </button>
                </div>
              </div>

              {/* ── Ad groups card ── */}
              <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
                <div className="flex items-start justify-between mb-1">
                  <div className="flex items-start gap-2">
                    <div className="text-gray-500 shrink-0 mt-0.5"><GridIcon /></div>
                    <div>
                      <h2 className="text-base font-semibold text-gray-800">Ad groups</h2>
                      <p className="text-xs text-gray-500 mt-0.5">Group ads by targeting, bidding, creative and more.</p>
                    </div>
                  </div>
                  <button
                    onClick={handlePopulate}
                    className="border border-gray-300 rounded-full px-4 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors whitespace-nowrap">
                    Create ad group
                  </button>
                </div>

                {populated ? (
                  <AdGroupsPopulated />
                ) : (
                  <>
                    <div className="mt-4 border-2 border-dashed border-gray-200 rounded-lg py-6 text-center text-sm text-gray-400">
                      No ad groups yet
                    </div>
                    <div className="mt-3 flex items-start gap-2 bg-blue-50 rounded-lg px-4 py-3">
                      <span className="text-[#0071CE] mt-0.5 shrink-0"><PinIcon /></span>
                      <p className="text-xs text-blue-800">
                        <span className="font-semibold">Tip:</span> Try creating multiple ad groups with different options to learn what works the best.
                      </p>
                    </div>
                  </>
                )}
              </div>

              {/* ── Measure your campaign card ── */}
              <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-2">
                    <div className="text-gray-500 shrink-0 mt-0.5"><BriefcaseIcon /></div>
                    <div>
                      <h2 className="text-base font-semibold text-gray-800">Measure your campaign</h2>
                      <p className="text-xs text-gray-500 mt-0.5">
                        {populated ? "Tracking 6,912 items" : "Add the items, brands or categories you want to track."}
                      </p>
                    </div>
                  </div>
                  <button className="flex items-center gap-1 border border-gray-300 rounded-full px-4 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors whitespace-nowrap">
                    Add
                    <ChevronDown size={11} />
                  </button>
                </div>

                {populated && <MeasurePopulated />}
              </div>

            </div>{/* end left column */}

            {/* ── Right column ── */}
            <div className="w-64 shrink-0">
              <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-5">
                <div className="flex items-center gap-2 mb-4">
                  <PinIcon />
                  <h3 className="text-sm font-semibold text-gray-800">Level up your skills</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    { icon: <VideoIcon />, label: "Video: Ad group types" },
                    { icon: <DocIcon />,   label: "Learn about Display campaigns" },
                    { icon: <DocIcon />,   label: "Learn about Store Ads campaigns" },
                  ].map((link) => (
                    <li key={link.label}>
                      <a href="#" className="flex items-center gap-2 text-xs text-[#0071CE] hover:underline">
                        {link.icon}
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── Sticky footer ── */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-8 py-4 flex justify-end z-10 shadow-md">
        <button onClick={onClose}
          className="bg-[#0071CE] hover:bg-[#005FA3] text-white rounded-full px-6 py-2 text-sm font-semibold transition-colors shadow-sm">
          Save and close
        </button>
      </div>

    </div>
  );
}

// ── Dashboard data ─────────────────────────────────────────────────────────────
const dashKPIs = [
  { label: "Impressions",                          feat: false, value: "8,718,618" },
  { label: "Total Attributed Sales",               feat: true,  value: "$2,892,009" },
  { label: "Total Attributed Transactions",        feat: true,  value: "5,816" },
  { label: "Total Attributed Units",               feat: true,  value: "5,942" },
  { label: "Total ROAS",                           feat: true,  value: "$39.73" },
  { label: "eCPM",                                 feat: false, value: "$8.35" },
  { label: "Spend",                                feat: false, value: "$72,799", star: true },
];

const PERF_SALES  = [180,185,210,195,175,165,155,220,280,265,255,240,175,180,210,250,270,260,240,225,210,195,180,210,245,265,285,300,278,255,235];
const PERF_SPEND  = [2.1,2.2,2.5,2.3,2.1,2.0,1.9,2.7,3.4,3.2,3.1,2.9,2.2,2.2,2.5,3.0,3.2,3.1,2.9,2.7,2.5,2.3,2.4,2.6,2.9,3.2,3.4,3.6,3.3,3.0,2.8];
const PERF_ROAS   = [45,47,52,48,44,42,40,54,65,62,60,58,44,45,49,58,62,60,55,52,48,45,47,52,57,62,66,70,65,60,55];
const PERF_XLABELS = ["Oct 2024","Oct 3","Oct 5","Oct 7","Oct 9","Oct 11","Oct 13","Oct 15","Oct 17","Oct 19","Oct 21","Oct 23","Oct 25","Oct 27","Oct 29"];

const topCampaigns = [
  { name: "Halloween Candy Seasonal Display, Oct 1–Nov 1 2024",   value: 80.73, color: "#8B5CF6" },
  { name: "Halloween Candy Contextual, Oct 1–Nov 1 2024",         value: 58.63, color: "#6BBF6B" },
  { name: "Back to School Snacks, Jul–Sep 2024",                   value: 1.74,  color: "#4ABFBF" },
  { name: "Easter Candy Campaign, Mar–Apr 2025",                   value: 1.66,  color: "#F59E0B" },
  { name: "Valentine's Candy Promo, Jan–Feb 2025",                 value: 0.43,  color: "#06B6D4" },
];

const topLineitems = [
  { name: "Contextual targeting",                                                      value: 157.15, color: "#8B5CF6" },
  { name: "Contextual Targeting - TV",                                                 value: 151.17, color: "#6BBF6B" },
  { name: "Branded keyword Targeting (candy Brand)",                                   value: 110.17, color: "#4ABFBF" },
  { name: "Non-Branded keyword Targeting (TV + confections + Movie + Game terms)",     value: 41.49,  color: "#F59E0B" },
  { name: "Run of Site (Brand Awareness)",                                             value: 39.48,  color: "#06B6D4" },
];

const topTactics = [
  { label: "Contextual",   value: 72.34, color: "#8B5CF6" },
  { label: "Keyword",      value: 42.58, color: "#6BBF6B" },
  { label: "Broad Reach",  value: 25.87, color: "#4ABFBF" },
  { label: "Audience",     value: 9.34,  color: "#F59E0B" },
];

const roasBreakdown = [
  { label: "Pickup",   pct: 45, color: "#4ABFBF" },
  { label: "Delivery", pct: 42, color: "#8B5CF6" },
  { label: "Store",    pct: 13, color: "#6BBF6B" },
];

const buyerSegments = [
  { label: "New Buyers",                  pct: 89, color: "#4ABFBF" },
  { label: "Purchased 1 time",            pct: 5,  color: "#F59E0B" },
  { label: "Purchased 2 times",           pct: 4,  color: "#6BBF6B" },
  { label: "Purchased 3 times and above", pct: 2,  color: "#8B5CF6" },
];

// ── Dashboard chart components ─────────────────────────────────────────────────

function FeatBadge() {
  return (
    <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold bg-blue-100 text-[#0071CE] ml-1.5">
      Feat.
    </span>
  );
}

function SvgDonut({ segments, centerLine1, centerLine2, size = 180 }) {
  const cx = size / 2, cy = size / 2;
  const r = size * 0.35;
  const sw = size * 0.18;
  const circ = 2 * Math.PI * r;
  let cum = 0;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {segments.map((seg, i) => {
        const dash = (seg.pct / 100) * circ;
        const gap  = circ - dash;
        const rot  = (cum / 100) * 360 - 90;
        cum += seg.pct;
        return (
          <circle key={i} cx={cx} cy={cy} r={r} fill="none"
            stroke={seg.color} strokeWidth={sw}
            strokeDasharray={`${dash} ${gap}`}
            transform={`rotate(${rot} ${cx} ${cy})`} />
        );
      })}
      {centerLine1 && (
        <text x={cx} y={cy - size * 0.06} textAnchor="middle"
          fontSize={size * 0.07} fill="#6b7280">{centerLine1}</text>
      )}
      {centerLine2 && (
        <text x={cx} y={cy + size * 0.1} textAnchor="middle"
          fontSize={size * 0.14} fontWeight="700" fill="#2e2f32">{centerLine2}</text>
      )}
    </svg>
  );
}

function SvgLineChart({ series }) {
  const W = 540, H = 195;
  const pL = 52, pR = 52, pT = 12, pB = 30;
  const plotW = W - pL - pR, plotH = H - pT - pB;

  const getX = (i, len) => pL + (i / (len - 1)) * plotW;

  const yLabels = ["$0","$50K","$100K","$150K","$200K","$250K","$300K"];
  const yRLabels = ["$0.00","$2K","$4K","$6K","$8K","$10K","$12K"];

  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ overflow: "visible" }}>
      {/* Horizontal grid */}
      {[0,1,2,3,4,5,6].map(i => {
        const y = pT + ((6 - i) / 6) * plotH;
        return <line key={i} x1={pL} y1={y} x2={W - pR} y2={y} stroke="#f3f4f6" strokeWidth="1"/>;
      })}
      {/* Left Y labels */}
      {yLabels.map((lbl, i) => {
        const y = pT + ((6 - i) / 6) * plotH;
        return <text key={i} x={pL - 4} y={y + 4} textAnchor="end" fontSize="9" fill="#9ca3af">{lbl}</text>;
      })}
      {/* Right Y labels */}
      {yRLabels.map((lbl, i) => {
        const y = pT + ((6 - i) / 6) * plotH;
        return <text key={i} x={W - pR + 4} y={y + 4} textAnchor="start" fontSize="9" fill="#9ca3af">{lbl}</text>;
      })}
      {/* Series lines — each normalized to its own min/max */}
      {series.map((s, si) => {
        const n = s.data.length;
        const mn = Math.min(...s.data), mx = Math.max(...s.data);
        const rng = mx - mn || 1;
        const pts = s.data.map((v, i) => {
          const x = getX(i, n);
          const y = pT + plotH - ((v - mn) / rng) * plotH;
          return `${x.toFixed(1)},${y.toFixed(1)}`;
        }).join(" ");
        return <polyline key={si} points={pts} fill="none" stroke={s.color}
          strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round" />;
      })}
      {/* X labels every ~2 */}
      {PERF_XLABELS.map((lbl, i) => {
        const n = series[0]?.data?.length || 31;
        const idx = Math.round(i * (n - 1) / (PERF_XLABELS.length - 1));
        const x = getX(idx, n);
        return <text key={i} x={x} y={H - 4} textAnchor="middle" fontSize="8.5" fill="#9ca3af">{lbl}</text>;
      })}
    </svg>
  );
}

function SvgHorizBars({ data }) {
  const barH = 20, gap = 8;
  const maxVal = Math.max(...data.map(d => d.value));
  const W = 400, maxBarW = 230;
  const totalH = data.length * (barH + gap) - gap + 24;
  const axisTicks = [0, 0.25, 0.5, 0.75, 1].map(t => t * maxVal);

  return (
    <svg viewBox={`0 0 ${W} ${totalH}`} width="100%">
      {/* Axis ticks */}
      {axisTicks.map((v, i) => {
        const x = (v / maxVal) * maxBarW;
        return (
          <g key={i}>
            <line x1={x} y1={0} x2={x} y2={totalH - 18} stroke="#f3f4f6" strokeWidth="1"/>
            <text x={x} y={totalH - 4} textAnchor="middle" fontSize="9" fill="#9ca3af">
              ${v < 1 ? v.toFixed(2) : v.toFixed(0)}
            </text>
          </g>
        );
      })}
      {/* Bars */}
      {data.map((d, i) => {
        const bw = Math.max((d.value / maxVal) * maxBarW, 2);
        const y = i * (barH + gap);
        return (
          <g key={i}>
            <rect x={0} y={y} width={bw} height={barH} fill={d.color} rx={2}/>
            <text x={bw + 5} y={y + barH - 4} fontSize="11" fill="#374151" fontWeight="500">
              ${d.value.toFixed(2)}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

function SvgVertBars({ data }) {
  const W = 400, H = 200;
  const pL = 42, pR = 20, pT = 28, pB = 40;
  const plotW = W - pL - pR, plotH = H - pT - pB;
  const maxVal = Math.max(...data.map(d => d.value));
  const barW = plotW / data.length * 0.55;
  const slot = plotW / data.length;
  const yTicks = [0, 25, 50, 75, 100].map(p => (p / 100) * maxVal);

  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%">
      {/* Y grid */}
      {yTicks.map((v, i) => {
        const y = pT + plotH - (v / maxVal) * plotH;
        return (
          <g key={i}>
            <line x1={pL} y1={y} x2={W - pR} y2={y} stroke="#f3f4f6" strokeWidth="1"/>
            <text x={pL - 4} y={y + 4} textAnchor="end" fontSize="9" fill="#9ca3af">${v.toFixed(0)}</text>
          </g>
        );
      })}
      {/* Bars */}
      {data.map((d, i) => {
        const x = pL + i * slot + (slot - barW) / 2;
        const bh = (d.value / maxVal) * plotH;
        const y = pT + plotH - bh;
        return (
          <g key={i}>
            <rect x={x} y={y} width={barW} height={bh} fill={d.color} rx={3}/>
            <text x={x + barW / 2} y={y - 5} textAnchor="middle" fontSize="10" fill="#374151" fontWeight="600">
              ${d.value.toFixed(2)}
            </text>
            <text x={x + barW / 2} y={H - 8} textAnchor="middle" fontSize="9.5" fill="#6b7280">{d.label}</text>
          </g>
        );
      })}
    </svg>
  );
}

// ── ChartCard wrapper ──────────────────────────────────────────────────────────
function ChartCard({ title, feat = false, tabs, activeTab, onTabChange, right, children }) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-5">
      <div className="flex items-start justify-between mb-1">
        <div className="flex items-center gap-1 flex-wrap">
          <span className="text-sm font-bold text-gray-800">{title}</span>
          {feat && <FeatBadge />}
          {tabs && (
            <div className="flex items-center gap-0 ml-3">
              {tabs.map(t => (
                <button key={t}
                  onClick={() => onTabChange && onTabChange(t)}
                  className={`text-xs px-2 py-0.5 border-b-2 transition-colors cursor-pointer ${activeTab === t
                    ? "border-[#0071CE] text-[#0071CE] font-medium"
                    : "border-transparent text-gray-400 hover:text-gray-600"}`}>
                  {t}
                  <Tooltip text={`View ${t} metric details and attribution window settings.`}>
                    <span className="ml-0.5 text-gray-400 inline-flex"><InfoIcon /></span>
                  </Tooltip>
                </button>
              ))}
            </div>
          )}
        </div>
        {right && <div className="flex items-center gap-2 ml-4 shrink-0">{right}</div>}
      </div>
      <div className="mt-3">{children}</div>
    </div>
  );
}

// ── Dashboard helpers ──────────────────────────────────────────────────────────

// Small illustrated account-summary card icons
const IconLive = () => (
  <svg width="44" height="44" viewBox="0 0 44 44">
    <circle cx="22" cy="22" r="22" fill="#FFF0F5"/>
    <path d="M14 19v6h4l5 4V15l-5 4h-4z" fill="#F472B6"/>
    <path d="M28 17.5c2 1.3 3.3 3.5 3.3 6s-1.3 4.7-3.3 6" stroke="#F472B6" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
    <circle cx="31" cy="15" r="3" fill="#FB923C"/>
    <circle cx="33" cy="13" r="2" fill="#FBBF24"/>
  </svg>
);
const IconScheduled = () => (
  <svg width="44" height="44" viewBox="0 0 44 44">
    <circle cx="22" cy="22" r="22" fill="#EFF6FF"/>
    <circle cx="22" cy="22" r="9" stroke="#93C5FD" strokeWidth="2" fill="none"/>
    <path d="M22 15v7l4 4" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="22" cy="13" r="1.5" fill="#BFDBFE"/>
    <circle cx="29" cy="15" r="1.5" fill="#BFDBFE"/>
    <circle cx="31" cy="22" r="1.5" fill="#BFDBFE"/>
  </svg>
);
const IconOutBudget = () => (
  <svg width="44" height="44" viewBox="0 0 44 44">
    <circle cx="22" cy="22" r="22" fill="#FFF7ED"/>
    <polygon points="22,12 31,31 13,31" fill="#FB923C"/>
    <rect x="16" y="24" width="12" height="2.5" fill="white" opacity="0.7"/>
    <rect x="13.5" y="31" width="17" height="2.5" fill="#F97316" rx="1.2"/>
    <text x="22" y="22.5" textAnchor="middle" fontSize="8" fontWeight="800" fill="white">!</text>
  </svg>
);
const IconBilling = () => (
  <svg width="44" height="44" viewBox="0 0 44 44">
    <circle cx="22" cy="22" r="22" fill="#EFF6FF"/>
    <path d="M12 16h2.5l3 9h10l2-7H18" stroke="#3B82F6" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="18.5" cy="28" r="2" fill="#3B82F6"/>
    <circle cx="26.5" cy="28" r="2" fill="#3B82F6"/>
    <text x="28" y="17" fontSize="8" fontWeight="700" fill="#3B82F6">$</text>
  </svg>
);

const ACCT_SUMMARY = [
  { icon: <IconLive />,       label: "Live campaigns",            value: "10", link: "View campaigns",     linkPage: "campaigns" },
  { icon: <IconScheduled />,  label: "Scheduled campaigns",       value: "03", link: "View campaigns",     linkPage: "campaigns" },
  { icon: <IconOutBudget />,  label: "Out of budget campaigns",   value: "02", link: "View campaigns",     linkPage: "campaigns" },
  { icon: <IconBilling />,    label: "Outstanding balance",       value: "$14,250", link: "Visit billing manager", linkPage: null },
];

const INIT_TASKS = [
  { id: 1, pre: "You have", link: "2 campaigns",  post: "that are out of budget.",                      iconColor: "#EF4444" },
  { id: 2, pre: "You have", link: "10 items",     post: "that are rejected within your campaign.",      iconColor: "#EF4444" },
  { id: 3, pre: "You have", link: "1 invoice",    post: "that is unpaid.",                              iconColor: "#F59E0B" },
];

const REC_SLIDES = [
  {
    col1: {
      title: "Campaign out of budget",
      body: "When the campaign runs out of budget midday, you are losing out on potential ad engagement. Apply our suggested budget adjustments to optimize your campaign.",
      highlight: "Your daily budget was reached yesterday at 3:00pm.",
      name: "Halloween|Candy|Cross Device|Auto|All Positions L...",
      stats: [
        { left: "Estimated missed clicks:", right: "Estimated missed impressions:" },
        { left: "300 - 790",                right: "$3.4k – $6.9k" },
        { left: "Suggested daily budget:",  right: "Current daily budget:" },
        { left: "$500",                     right: "$250" },
      ],
      cta: { pre: "Stop campaign budget from running out.", link: "Review and apply budget" },
    },
    col2: {
      title: "Optimize your items",
      body: "When the campaign runs out of budget midday, you are losing out on potential ad engagement. Apply our suggested budget adjustments to optimize your campaign.",
      items: [
        { name: "Fun Size Snickers Variety Bag", id: "101224596", brand: "Mars",      note: "Low impressions.",           action: "Review and edit item",            color: "#8B4513" },
        { name: "M&M's Halloween Mix 52oz",      id: "101224597", brand: "Mars",      note: "Inconsistent ROAS.",         action: "Review and adjust bid to $1.32",  color: "#CC0000" },
        { name: "Reese's Peanut Butter Cups Bag",id: "101224598", brand: "Hershey's", note: "Low OLQ score (22%).",       action: "Improve your OLQ score",          color: "#FF8C00" },
      ],
    },
    col3: {
      title: "Optimize your keywords",
      body: "When the campaign runs out of budget midday, you are losing out on potential ad engagement. Apply our suggested budget adjustments to optimize your campaign.",
      groups: [
        { name: "Halloween Candy Campaign",    tags: ["Chocolate","Candy","Halloween","Seasonal"],          action: { pre: "Lowest performing keywords.", link: "Review and remove" } },
        { name: "Easter Spring Collection",    tags: ["Easter","Bunny","Chocolate","Pastel","Spring","+2"], action: { pre: "Monitor your keywords with automated rules.", link: "Learn more" } },
        { name: "Valentine's Day Candy",       tags: ["Hearts","Chocolate","Gifts","Love","Sweet"],        action: null },
      ],
    },
  },
];

function RecommendationsInsights() {
  const [slide, setSlide] = useState(0);
  const total = 5;
  const s = REC_SLIDES[0]; // single slide data for all positions

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden mb-4">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-purple-100" style={{ background: "#FAF5FF" }}>
        <div className="flex items-center gap-2">
          <span className="text-purple-500">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#A855F7"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
          </span>
          <span className="text-sm font-semibold text-gray-800">Recommendations and insights ({slide + 1}/{total})</span>
        </div>
        <div className="flex items-center gap-1">
          <button onClick={() => setSlide(v => Math.max(0, v - 1))} disabled={slide === 0}
            className="w-7 h-7 flex items-center justify-center rounded border border-gray-200 hover:bg-gray-50 disabled:opacity-30 text-gray-500">
            <ChevronLeft size={12}/>
          </button>
          <button onClick={() => setSlide(v => Math.min(total - 1, v + 1))} disabled={slide === total - 1}
            className="w-7 h-7 flex items-center justify-center rounded border border-gray-200 hover:bg-gray-50 disabled:opacity-30 text-gray-500">
            <ChevronRight size={12}/>
          </button>
        </div>
      </div>

      {/* 3-column body */}
      <div className="grid grid-cols-3 divide-x divide-gray-100 p-0">
        {/* Col 1 – Campaign out of budget */}
        <div className="p-5">
          <h3 className="text-sm font-semibold text-gray-800 mb-1">{s.col1.title}</h3>
          <p className="text-[11px] text-gray-500 leading-relaxed mb-3">{s.col1.body}</p>
          <div className="flex items-center gap-2 bg-amber-50 border border-amber-100 rounded px-3 py-2 mb-4">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" fill="#FEF3C7"/><path d="M12 7v5M12 16h.01" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round"/></svg>
            <p className="text-xs text-amber-800">{s.col1.highlight}</p>
          </div>
          <p className="text-xs text-gray-500 mb-1">Campaign name:</p>
          <a href="#" className="text-xs text-[#0071CE] hover:underline font-medium block mb-3">{s.col1.name}</a>
          <div className="grid grid-cols-2 gap-y-0.5 text-xs mb-4">
            {s.col1.stats.map((row, i) => (
              <React.Fragment key={i}>
                <span className={i % 2 === 0 ? "font-medium text-gray-700" : "text-gray-800"}>{row.left}</span>
                <span className={i % 2 === 0 ? "font-medium text-gray-700" : "text-gray-800"}>{row.right}</span>
              </React.Fragment>
            ))}
          </div>
          <div className="flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#A855F7"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
            <p className="text-xs text-gray-500">{s.col1.cta.pre}{" "}
              <a href="#" className="text-[#0071CE] hover:underline">{s.col1.cta.link}</a>
            </p>
          </div>
        </div>

        {/* Col 2 – Optimize items */}
        <div className="p-5">
          <h3 className="text-sm font-semibold text-gray-800 mb-1">{s.col2.title}</h3>
          <p className="text-[11px] text-gray-500 leading-relaxed mb-4">{s.col2.body}</p>
          <div className="space-y-4">
            {s.col2.items.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-12 h-12 rounded shrink-0 flex items-center justify-center border border-gray-100" style={{ backgroundColor: item.color + "22" }}>
                  <div className="w-7 h-7 rounded" style={{ backgroundColor: item.color + "88" }}/>
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-medium text-gray-800 leading-snug">{item.name}</p>
                  <p className="text-[11px] text-gray-400">Item Id: {item.id}  Brand: {item.brand}</p>
                  <div className="flex items-center gap-1 mt-0.5">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="#A855F7"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                    <p className="text-[11px] text-gray-500">{item.note}{" "}
                      <a href="#" className="text-[#0071CE] hover:underline">{item.action}</a>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Col 3 – Optimize keywords */}
        <div className="p-5">
          <h3 className="text-sm font-semibold text-gray-800 mb-1">{s.col3.title}</h3>
          <p className="text-[11px] text-gray-500 leading-relaxed mb-4">{s.col3.body}</p>
          <div className="space-y-4">
            {s.col3.groups.map((grp, i) => (
              <div key={i}>
                <p className="text-xs text-gray-500 mb-1">Adgroup name: <a href="#" className="text-[#0071CE] hover:underline font-medium">{grp.name}</a></p>
                <div className="flex flex-wrap gap-1 mb-1.5">
                  {grp.tags.map(tag => (
                    <span key={tag} className="px-2 py-0.5 rounded-full bg-gray-100 text-[11px] text-gray-600 border border-gray-200">{tag}</span>
                  ))}
                </div>
                {grp.action && (
                  <div className="flex items-center gap-1">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" fill="#DBEAFE"/><path d="M12 8v4M12 16h.01" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round"/></svg>
                    <p className="text-[11px] text-gray-500">{grp.action.pre}{" "}
                      <a href="#" className="text-[#0071CE] hover:underline">{grp.action.link}</a>
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dot pagination */}
      <div className="flex justify-center gap-1.5 py-3 border-t border-gray-100">
        {Array.from({ length: total }).map((_, i) => (
          <button key={i} onClick={() => setSlide(i)}
            className={`w-2 h-2 rounded-full transition-colors ${i === slide ? "bg-gray-500" : "bg-gray-200 hover:bg-gray-300"}`}/>
        ))}
      </div>
    </div>
  );
}

// ── Dashboard page ─────────────────────────────────────────────────────────────
function DashboardPage() {
  const [perfTab, setPerfTab]     = useState("Total ROAS");
  const [roasTab, setRoasTab]     = useState("Pickup");
  const [buyerType, setBuyerType] = useState("Overall");
  const [tasks, setTasks]         = useState(INIT_TASKS);

  const perfSeries = [
    { data: PERF_SALES, color: "#4ABFBF" },
    { data: PERF_SPEND, color: "#374151" },
    { data: PERF_ROAS,  color: "#6BBF6B" },
  ];

  const DropFilter = ({ label }) => (
    <div className="relative inline-flex items-center">
      <select className="appearance-none border border-gray-200 rounded px-2.5 py-1.5 pr-6 text-xs text-gray-600 bg-white focus:outline-none focus:border-[#0071CE] cursor-pointer">
        <option>{label}</option>
      </select>
      <span className="pointer-events-none absolute right-1.5 top-1/2 -translate-y-1/2 text-gray-400">
        <ChevronDown size={10}/>
      </span>
    </div>
  );

  return (
    <main className="ml-[52px] mt-[52px] min-h-[calc(100vh-52px)] bg-[#F2F4F7]" style={{ padding: "35px 24px 100px" }}>
      <div style={{ maxWidth: "1040px", margin: "0 auto" }}>

        {/* ── Title + Export ── */}
        <div className="flex items-center justify-between" style={{ marginBottom: "24px" }}>
          <h1 style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: "32px", fontWeight: 700, color: "#2e2f32", letterSpacing: "-0.3px", margin: 0, lineHeight: 1.2 }}>
            Dashboard
          </h1>
          <button className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-2 text-sm font-medium text-gray-600 bg-white hover:bg-gray-50 transition-colors shadow-sm">
            <ExportIcon /> Export
          </button>
        </div>

        {/* ── Filters ── */}
        <div className="flex flex-wrap items-center gap-2 mb-5">
          <DropFilter label="Campaigns" />
          <DropFilter label="Categories" />
          <DropFilter label="Brands" />
          <div className="flex-1" />
          <DropFilter label="Itemset: Featured" />
          <DropFilter label="Attribution: 14 days" />
          <div className="relative inline-flex items-center border border-gray-200 rounded px-2.5 py-1.5 text-xs text-gray-600 bg-white gap-1.5 cursor-pointer hover:border-[#0071CE]">
            <CalendarIcon /> Oct 1, 2024 – Oct 31, 2024
          </div>
        </div>

        {/* ── Account Summary ── */}
        <div className="mb-5">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-sm font-semibold text-gray-700">Account summary</span>
            <span className="text-xs text-gray-400">Last updated Nov 1, 8:30pm PST</span>
          </div>
          <div className="grid grid-cols-4 gap-3">
            {ACCT_SUMMARY.map((card) => (
              <div key={card.label} className="bg-white rounded-lg border border-gray-200 shadow-sm px-4 py-4 flex items-center gap-4">
                <div className="shrink-0">{card.icon}</div>
                <div className="min-w-0">
                  <p className="text-xs text-gray-500 mb-0.5">{card.label}</p>
                  <p className="text-2xl font-bold text-gray-900" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>{card.value}</p>
                  <button className="text-xs text-[#0071CE] hover:underline mt-0.5 cursor-pointer">{card.link}</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Top tasks of the day ── */}
        {tasks.length > 0 && (
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden mb-5">
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
              <span className="text-sm font-semibold text-gray-800">Your top tasks of the day</span>
              <div className="flex items-center gap-1">
                <button className="w-7 h-7 flex items-center justify-center rounded border border-gray-200 hover:bg-gray-50 text-gray-400"><ChevronLeft size={12}/></button>
                <button className="w-7 h-7 flex items-center justify-center rounded border border-gray-200 hover:bg-gray-50 text-gray-400"><ChevronRight size={12}/></button>
              </div>
            </div>
            {tasks.map((task, i) => (
              <div key={task.id} className={`flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors ${i < tasks.length - 1 ? "border-b border-gray-100" : ""}`}>
                <div className="shrink-0 w-8 h-8 rounded flex items-center justify-center" style={{ backgroundColor: task.iconColor + "18" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="3" width="18" height="18" rx="2" stroke={task.iconColor} strokeWidth="1.8"/>
                    <path d="M9 12l2 2 4-4" stroke={task.iconColor} strokeWidth="1.8" strokeLinecap="round"/>
                    <circle cx="19" cy="5" r="4" fill={task.iconColor}/>
                  </svg>
                </div>
                <p className="text-sm text-gray-700 flex-1">
                  {task.pre}{" "}
                  <a href="#" className="text-[#0071CE] hover:underline font-medium">{task.link}</a>
                  {" "}{task.post}
                </p>
                <button onClick={() => setTasks(ts => ts.filter(t => t.id !== task.id))}
                  className="flex items-center gap-1 text-xs text-[#0071CE] hover:underline shrink-0 ml-4 cursor-pointer">
                  Dismiss <XIcon />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* ── KPI metric tiles ── */}
        <div className="grid grid-cols-7 gap-3 mb-5">
          {dashKPIs.map((kpi) => (
            <div key={kpi.label} className="bg-white rounded-lg border border-gray-200 shadow-sm px-3 py-3">
              <div className="flex items-start gap-0.5 mb-1">
                <span className="text-xs text-gray-500 leading-snug">{kpi.label}{kpi.star ? " *" : ""}</span>
                <Tooltip text={`${kpi.label}: attributed using a 14-day click, same-day view-through attribution window.`}>
                  <span className="ml-1 text-gray-300 inline-flex shrink-0 mt-0.5"><InfoIcon /></span>
                </Tooltip>
              </div>
              <div className="text-lg font-bold text-gray-900" style={{ fontFamily: "'Nunito Sans',sans-serif" }}>
                {kpi.value}
              </div>
            </div>
          ))}
        </div>

        {/* ── Row 1: Performance Summary + ROAS Breakdown ── */}
        <div className="grid gap-4 mb-4" style={{ gridTemplateColumns: "2fr 1fr" }}>
          <ChartCard title="Performance Summary"
            tabs={["Total Attributed Sales","Spend","Total ROAS"]}
            activeTab={perfTab} onTabChange={setPerfTab}>
            <SvgLineChart series={perfSeries} />
          </ChartCard>

          <ChartCard title="ROAS Breakdown"
            tabs={["Pickup","Delivery","Store"]}
            activeTab={roasTab} onTabChange={setRoasTab}>
            <div className="flex flex-col items-center">
              <SvgDonut segments={roasBreakdown} size={180} centerLine1="" centerLine2="" />
              <div className="flex flex-col gap-1 mt-2 w-full px-4">
                {roasBreakdown.map(seg => (
                  <div key={seg.label} className="flex items-center gap-2 text-xs text-gray-600">
                    <span className="inline-block w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: seg.color }}/>
                    <span className="flex-1">{seg.label}</span>
                    <span className="font-semibold text-gray-800">{seg.pct}%</span>
                  </div>
                ))}
              </div>
            </div>
          </ChartCard>
        </div>

        {/* ── Recommendations & Insights ── */}
        <RecommendationsInsights />

        {/* ── Row 2: Top 5 Campaigns + Top 5 Lineitems ── */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <ChartCard title="Top 5 Campaigns by ROAS"
            right={<span className="text-xs text-gray-500 flex items-center gap-0.5">Estimated Total ROAS <InfoIcon /></span>}>
            <SvgHorizBars data={topCampaigns} />
            <div className="mt-3 space-y-1">
              {topCampaigns.map((d) => (
                <div key={d.name} className="flex items-center gap-1.5 text-xs text-gray-500">
                  <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: d.color }}/>
                  <span className="truncate">{d.name}</span>
                </div>
              ))}
            </div>
          </ChartCard>

          <ChartCard title="Top 5 Lineitems by ROAS"
            right={<span className="text-xs text-gray-500 flex items-center gap-0.5">Estimated Total ROAS <InfoIcon /></span>}>
            <SvgHorizBars data={topLineitems} />
            <div className="mt-3 space-y-1">
              {topLineitems.map((d) => (
                <div key={d.name} className="flex items-center gap-1.5 text-xs text-gray-500">
                  <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: d.color }}/>
                  <span className="truncate">{d.name}</span>
                </div>
              ))}
            </div>
          </ChartCard>
        </div>

        {/* ── Row 3: Top 5 Tactics + Buyer Analysis ── */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <ChartCard title="Top 5 Tactics by ROAS"
            right={<span className="text-xs text-gray-500 flex items-center gap-0.5">Estimated Total ROAS <InfoIcon /></span>}>
            <SvgVertBars data={topTactics} />
          </ChartCard>

          <ChartCard title="Buyer Analysis"
            right={
              <div className="relative inline-flex items-center">
                <select className="appearance-none border border-gray-200 rounded px-2 py-1 pr-5 text-xs text-gray-600 bg-white focus:outline-none">
                  <option>Overall</option>
                </select>
                <span className="pointer-events-none absolute right-1 top-1/2 -translate-y-1/2 text-gray-400"><ChevronDown size={10}/></span>
              </div>
            }>
            <div className="flex items-center gap-4">
              <SvgDonut segments={buyerSegments} size={160} centerLine1={buyerType} centerLine2="33.2k" />
              <div className="flex flex-col gap-2 flex-1">
                {buyerSegments.map(seg => (
                  <div key={seg.label} className="flex items-center gap-2 text-xs text-gray-600">
                    <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: seg.color }}/>
                    <span className="flex-1">{seg.label}</span>
                    <Tooltip text={`${seg.label}: unique buyer count attributed to this segment within the selected date range.`}>
                      <InfoIcon />
                    </Tooltip>
                  </div>
                ))}
                <p className="text-[10px] text-gray-400 mt-1 leading-snug">
                  * Buyer counts do not use fair share attribution across tactic and line item. Please do not sum these values.
                </p>
              </div>
            </div>
          </ChartCard>
        </div>

        {/* ── Footer ── */}
        <p className="text-[10px] text-gray-400 text-center mt-4 leading-snug">
          * Connect Ad Center Display Performance Dashboards include impression and spend metrics sourced from 1st-party data. These metrics may not reflect actual billing.
        </p>
        <p className="text-[10px] text-gray-400 text-center mt-3">
          © 2025 Sample Ad Inc. All Rights Reserved.{" "}
          <a href="#" className="underline cursor-pointer">Privacy and Terms</a>
        </p>

      </div>
    </main>
  );
}

// ── Main Page ──────────────────────────────────────────────────────────────────
export default function AllCampaigns() {
  const [page, setPage]           = useState("campaigns");
  const [search, setSearch]       = useState("");
  const [statusFilter, setStatus] = useState("All statuses");
  const [perPage, setPerPage]     = useState(10);
  const [expanded, setExpanded]   = useState({});
  const [showCreateModal, setCreate] = useState(false);

  const filtered = campaigns.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );
  const toggleRow = (i) => setExpanded((prev) => ({ ...prev, [i]: !prev[i] }));

  return (
    <div className="min-h-screen bg-[#F2F4F7]"
      style={{ fontFamily: "Bogle, 'Nunito Sans', sans-serif" }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700&family=Plus+Jakarta+Sans:wght@700;800&display=swap');
        * { box-sizing: border-box; }
      `}</style>

      <TopNav />
      <Sidebar currentPage={page} onNavigate={setPage} />

      {showCreateModal && (
        <CreateCampaignModal onClose={() => setCreate(false)} />
      )}

      {page === "dashboard" && <DashboardPage />}

      {page === "campaigns" && (
        <main className="ml-[52px] mt-[52px] min-h-[calc(100vh-52px)]" style={{ padding: "35px 24px 100px" }}>

          <div className="flex items-center justify-between" style={{ marginBottom: "30px" }}>
            <h1 style={{
              fontFamily: "'Nunito Sans', sans-serif",
              fontSize: "32px",
              fontWeight: 700,
              color: "#2e2f32",
              letterSpacing: "-0.3px",
              margin: 0,
              lineHeight: 1.2,
            }}>
              All Campaigns
            </h1>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-2 text-sm font-medium text-gray-600 bg-white hover:bg-gray-50 transition-colors shadow-sm">
                <ExportIcon />
                Export
              </button>
              <button
                onClick={() => setCreate(true)}
                className="bg-[#0071CE] hover:bg-[#005FA3] text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors shadow-sm">
                Create campaign
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="flex items-center justify-end gap-3 px-4 py-3 border-b border-gray-100">
              <div className="relative">
                <select value={statusFilter} onChange={(e) => setStatus(e.target.value)}
                  className="appearance-none border border-gray-300 rounded px-3 py-1.5 pr-7 text-sm text-gray-700 bg-white cursor-pointer focus:outline-none focus:border-[#0071CE]">
                  {["All statuses", "Active", "Completed", "Paused", "Draft"].map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
                <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-gray-500">
                  <ChevronDown />
                </span>
              </div>
              <div className="relative">
                <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400"><SearchIcon /></span>
                <input type="text" placeholder="Search campaign name / ID"
                  value={search} onChange={(e) => setSearch(e.target.value)}
                  className="border border-gray-300 rounded pl-8 pr-3 py-1.5 text-sm text-gray-700 w-56 focus:outline-none focus:border-[#0071CE] placeholder-gray-400" />
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200 bg-white">
                    <th className="w-8" />
                    {columns.map((col) => (
                      <th key={col.key}
                        className={`${col.width} text-left px-3 py-3 text-xs font-semibold text-[#2e2f32] whitespace-nowrap select-none`}>
                        <span className="inline-flex items-center gap-1 cursor-pointer hover:text-[#0071CE] group">
                          {col.label}
                          {col.info && <span className="text-gray-400 group-hover:text-[#0071CE]"><InfoIcon /></span>}
                          {col.sortable && (
                            <span className="text-gray-400 group-hover:text-[#0071CE]">
                              <svg width="10" height="14" viewBox="0 0 10 16" fill="none">
                                <path d="M5 1v14M1 5l4-4 4 4M1 11l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </span>
                          )}
                        </span>
                      </th>
                    ))}
                    <th className="w-10" />
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((row, i) => (
                    <React.Fragment key={i}>
                      <tr className={`border-b border-gray-100 transition-colors hover:bg-blue-50/30 ${expanded[i] ? "bg-blue-50/20" : ""}`}>
                        <td className="pl-3 pr-1 py-3 text-gray-400">
                          <button onClick={() => toggleRow(i)}
                            className="hover:text-[#0071CE] transition-transform"
                            style={{ transform: expanded[i] ? "rotate(90deg)" : "rotate(0deg)", display: "inline-block", transition: "transform 150ms" }}>
                            <ChevronRight size={12} />
                          </button>
                        </td>
                        <td className="px-3 py-3">
                          <button className="text-[#0071CE] hover:underline font-medium text-sm block leading-tight">{row.name}</button>
                          <span className="text-gray-400 text-xs">ID: {row.id}</span>
                        </td>
                        <td className="px-3 py-3"><StatusBadge status={row.status} /></td>
                        <td className="px-3 py-3 text-gray-700 whitespace-nowrap">{row.duration}</td>
                        <td className="px-3 py-3 text-gray-700">{row.ecpm}</td>
                        <td className="px-3 py-3 text-gray-700">{row.dailyBudget}</td>
                        <td className="px-3 py-3 text-gray-700">{row.totalBudget || <span className="text-gray-300">—</span>}</td>
                        <td className="px-3 py-3 text-gray-700">{row.totalSpend}</td>
                        <td className="px-3 py-3 text-gray-700">{row.impressions}</td>
                        <td className="px-3 py-3 text-gray-700">{row.pacing}</td>
                        <td className="px-3 py-3 text-gray-400">
                          <button className="hover:text-gray-600 hover:bg-gray-100 rounded p-1 transition-colors"><DotsIcon /></button>
                        </td>
                      </tr>
                      {expanded[i] && (
                        <tr key={`exp-${i}`} className="bg-blue-50/20 border-b border-gray-100">
                          <td />
                          <td colSpan={10} className="px-6 py-3">
                            <div className="text-xs text-gray-500 italic">No ad groups found for this campaign.</div>
                          </td>
                          <td />
                        </tr>
                      )}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>

            <Pagination current={1} total={3} perPage={perPage} onPerPageChange={setPerPage} />
          </div>
        </main>
      )}
    </div>
  );
}
