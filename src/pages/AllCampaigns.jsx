import React, { useState } from "react";

// ── Icons (inline SVG to avoid external deps) ────────────────────────────────
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
const SortIcon = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M12 5v14M5 12l7-7 7 7" />
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

// ── Mock Data ─────────────────────────────────────────────────────────────────
const campaigns = [
  { id: "10001", name: "Halloween Candy",        status: "In Progress", duration: "9/1/2024–10/31/2024", ecpm: "$2.50", dailyBudget: "$500.00",   totalBudget: "$15,000.00", totalSpend: "$8,200.00",  impressions: "328,000",   pacing: "71%" },
  { id: "10002", name: "Easter Candy",           status: "In Progress", duration: "3/1/2025–4/20/2025",  ecpm: "$2.00", dailyBudget: "$400.00",   totalBudget: "$12,000.00", totalSpend: "$5,600.00",  impressions: "224,000",   pacing: "63%" },
  { id: "10003", name: "Valentine's Candy",      status: "In Progress", duration: "1/15/2025–2/14/2025", ecpm: "$2.75", dailyBudget: "$1,000.00", totalBudget: "$30,000.00", totalSpend: "$22,000.00", impressions: "800,000",   pacing: "88%" },
  { id: "10004", name: "Christmas Cookies",      status: "In Progress", duration: "11/1/2024–12/25/2024",ecpm: "$3.00", dailyBudget: "$2,000.00", totalBudget: "$60,000.00", totalSpend: "$41,000.00", impressions: "1,366,666", pacing: "79%" },
  { id: "10005", name: "Back to School Snacks",  status: "In Progress", duration: "7/15/2024–9/1/2024",  ecpm: "$1.80", dailyBudget: "$300.00",   totalBudget: "$8,000.00",  totalSpend: "$4,100.00",  impressions: "227,777",   pacing: "55%" },
  { id: "10006", name: "Summer BBQ",             status: "In Progress", duration: "5/20/2025–7/4/2025",  ecpm: "$2.20", dailyBudget: "$600.00",   totalBudget: "$18,000.00", totalSpend: "$7,800.00",  impressions: "354,545",   pacing: "60%" },
  { id: "10007", name: "Fourth of July Deals",   status: "In Progress", duration: "6/25/2025–7/5/2025",  ecpm: "$2.50", dailyBudget: "$1,500.00", totalBudget: "$15,000.00", totalSpend: "$9,200.00",  impressions: "368,000",   pacing: "74%" },
  { id: "10008", name: "Thanksgiving Feast",     status: "In Progress", duration: "10/15/2024–11/28/2024",ecpm: "$2.80", dailyBudget: "$800.00",  totalBudget: "$24,000.00", totalSpend: "$18,500.00", impressions: "660,714",   pacing: "82%" },
  { id: "10009", name: "Mother's Day Treats",    status: "In Progress", duration: "4/25/2025–5/11/2025", ecpm: "$2.10", dailyBudget: "$450.00",   totalBudget: "$9,000.00",  totalSpend: "$3,900.00",  impressions: "185,714",   pacing: "57%" },
  { id: "10010", name: "Super Bowl Snacks",      status: "In Progress", duration: "1/20/2025–2/9/2025",  ecpm: "$3.50", dailyBudget: "$2,500.00", totalBudget: "$50,000.00", totalSpend: "$38,000.00", impressions: "1,085,714", pacing: "92%" },
];

const navItems = [
  { icon: <HomeIcon />,     label: "Home" },
  { icon: <ChartIcon />,    label: "Analytics" },
  { icon: <CampaignIcon />, label: "Campaigns", active: true },
  { icon: <CreativeIcon />, label: "Creatives" },
  { icon: <ReportIcon />,   label: "Reports" },
];

const columns = [
  { key: "name",        label: "Campaign",      sortable: true,  width: "w-72" },
  { key: "status",      label: "Status",        sortable: true,  width: "w-28" },
  { key: "duration",    label: "Duration",      sortable: true,  width: "w-44" },
  { key: "ecpm",        label: "eCPM",          sortable: true,  width: "w-24", info: true },
  { key: "dailyBudget", label: "Daily budget",  sortable: true,  width: "w-28" },
  { key: "totalBudget", label: "Total budget",  sortable: true,  width: "w-28" },
  { key: "totalSpend",  label: "Total spend",   sortable: true,  width: "w-28" },
  { key: "impressions", label: "Impressions",   sortable: true,  width: "w-28" },
  { key: "pacing",      label: "Pacing",        sortable: true,  width: "w-20" },
];

// ── Sub-components ────────────────────────────────────────────────────────────
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

function Sidebar() {
  const [expanded, setExpanded] = useState(false);
  return (
    <aside
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
      style={{
        width: expanded ? "200px" : "52px",
        transition: "width 200ms ease",
      }}
      className="fixed left-0 top-[52px] bottom-0 bg-white border-r border-gray-200 flex flex-col pt-3 gap-1 z-30 overflow-hidden shadow-sm"
    >
      {navItems.map((item) => (
        <button
          key={item.label}
          title={!expanded ? item.label : undefined}
          className={`h-10 flex items-center gap-3 px-3 mx-1.5 rounded-lg transition-colors whitespace-nowrap
            ${item.active
              ? "bg-blue-50 text-[#0071CE]"
              : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"}`}
        >
          <span className="shrink-0">{item.icon}</span>
          <span
            className={`text-sm font-medium transition-opacity duration-150 ${expanded ? "opacity-100" : "opacity-0"}`}
            style={{ fontFamily: "Bogle, 'Nunito Sans', sans-serif" }}
          >
            {item.label}
          </span>
        </button>
      ))}
    </aside>
  );
}

function TopNav() {
  return (
    <header className="fixed top-0 left-0 right-0 h-[52px] bg-[#0071CE] flex items-center px-4 gap-3 z-20">
      {/* Spark + wordmark */}
      <div className="flex items-center gap-2">
        <WalmartSpark />
        <span className="text-white font-bold text-base tracking-tight"
          style={{ fontFamily: "Bogle, 'Nunito Sans', sans-serif" }}>
          Display Self Service
        </span>
        <ChevronDown size={12} />
      </div>

      {/* Divider */}
      <span className="text-white opacity-40 text-lg font-thin ml-1">|</span>

      {/* Advertiser selector */}
      <button className="flex items-center gap-1.5 text-white text-sm opacity-90 hover:opacity-100"
        style={{ fontFamily: "Bogle, 'Nunito Sans', sans-serif" }}>
        My Candy Corp
        <ChevronDown size={12} />
      </button>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Right icons */}
      <div className="flex items-center gap-3 text-white opacity-80">
        <button className="hover:opacity-100"><BellIcon /></button>
        <button className="hover:opacity-100"><HelpIcon /></button>
        <button className="hover:opacity-100"><UserIcon /></button>
      </div>
    </header>
  );
}

function Pagination({ current, total, perPage, onPerPageChange }) {
  return (
    <div className="flex items-center justify-end gap-2 py-3 px-4 text-sm text-gray-600"
      style={{ fontFamily: "Bogle, 'Nunito Sans', sans-serif" }}>
      <span>Show</span>
      <select
        value={perPage}
        onChange={(e) => onPerPageChange(Number(e.target.value))}
        className="border border-gray-300 rounded px-1.5 py-0.5 text-sm text-gray-700 bg-white cursor-pointer"
      >
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
              ${p === current
                ? "bg-[#0071CE] text-white"
                : "border border-gray-200 text-gray-600 hover:bg-gray-50"}`}>
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

// ── Main Page ─────────────────────────────────────────────────────────────────
export default function AllCampaigns() {
  const [search, setSearch]       = useState("");
  const [statusFilter, setStatus] = useState("All statuses");
  const [perPage, setPerPage]     = useState(10);
  const [expanded, setExpanded]   = useState({});

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
      <Sidebar />

      {/* Main content */}
      <main className="ml-[52px] mt-[52px] min-h-[calc(100vh-52px)]" style={{ padding: "35px 24px 100px" }}>

        {/* Page header */}
        <div className="flex items-center justify-between" style={{ marginBottom: "30px" }}>
          <h1 style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: "32px", fontWeight: 700, color: "#2e2f32", letterSpacing: "-0.3px", margin: 0, lineHeight: 1.2 }}>All Campaigns</h1>
          <button
            className="bg-[#0071CE] hover:bg-[#005FA3] text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors shadow-sm">
            Create campaign
          </button>
        </div>

        {/* Table card */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">

          {/* Toolbar */}
          <div className="flex items-center justify-end gap-3 px-4 py-3 border-b border-gray-100">
            {/* Status filter */}
            <div className="relative">
              <select
                value={statusFilter}
                onChange={(e) => setStatus(e.target.value)}
                className="appearance-none border border-gray-300 rounded px-3 py-1.5 pr-7 text-sm text-gray-700 bg-white cursor-pointer focus:outline-none focus:border-[#0071CE]"
              >
                {["All statuses", "Active", "Completed", "Paused", "Draft"].map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
              <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-gray-500">
                <ChevronDown />
              </span>
            </div>

            {/* Search */}
            <div className="relative">
              <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400">
                <SearchIcon />
              </span>
              <input
                type="text"
                placeholder="Search campaign name / ID"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="border border-gray-300 rounded pl-8 pr-3 py-1.5 text-sm text-gray-700 w-56 focus:outline-none focus:border-[#0071CE] placeholder-gray-400"
              />
            </div>
          </div>

          {/* Table */}
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
                        {col.info && (
                          <span className="text-gray-400 group-hover:text-[#0071CE]"><InfoIcon /></span>
                        )}
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
                    <tr
                      className={`border-b border-gray-100 transition-colors hover:bg-blue-50/30 ${expanded[i] ? "bg-blue-50/20" : ""}`}
                    >
                      {/* Expand toggle */}
                      <td className="pl-3 pr-1 py-3 text-gray-400">
                        <button
                          onClick={() => toggleRow(i)}
                          className="hover:text-[#0071CE] transition-transform"
                          style={{ transform: expanded[i] ? "rotate(90deg)" : "rotate(0deg)", display: "inline-block", transition: "transform 150ms" }}>
                          <ChevronRight size={12} />
                        </button>
                      </td>

                      {/* Campaign name + ID */}
                      <td className="px-3 py-3">
                        <button className="text-[#0071CE] hover:underline font-medium text-sm block leading-tight">
                          {row.name}
                        </button>
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

                      {/* Actions */}
                      <td className="px-3 py-3 text-gray-400">
                        <button className="hover:text-gray-600 hover:bg-gray-100 rounded p-1 transition-colors">
                          <DotsIcon />
                        </button>
                      </td>
                    </tr>

                    {/* Expanded row — placeholder for ad groups */}
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

          {/* Pagination */}
          <Pagination current={1} total={3} perPage={perPage} onPerPageChange={setPerPage} />
        </div>
      </main>
    </div>
  );
}
