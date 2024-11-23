import { Link, useLocation } from "react-router-dom";
import "./index.css";

export default function KanbasNavigation() {
  const links = [
    { id: "1", label: "Account",   icon: "fa-solid fa-user",      path: "Account" },
    { id: "2", label: "Dashboard", icon: "fa-solid fa-gauge",     path: "Dashboard" },
    { id: "3", label: "Courses",   icon: "fa-solid fa-book",      path: "Courses" },
    { id: "4", label: "Calendar",  icon: "fa-solid fa-calendar",  path: "Calendar" },
    { id: "5", label: "Inbox",     icon: "fa-solid fa-inbox",     path: "Inbox" },
    { id: "6", label: "History",   icon: "fa-solid fa-clock",     path: "History" },
    { id: "7", label: "Studio",    icon: "fa-solid fa-studio",    path: "Studio" },
    { id: "8", label: "Commons",   icon: "fa-solid fa-comments",  path: "Commons" },
    { id: "9", label: "Help",      icon: "fa-solid fa-question",  path: "Help" }
  ];

  const { pathname } = useLocation();

  return (
    <div className="list-group wd-kanbas-navigation" style={{ width: 85 }}>
      {links.map((link) => (
        <Link
          key={link.id}  // Use the unique id as key instead of path
          to={`/Kanbas/${link.path}`}
          className={`list-group-item ${pathname.includes(link.path) ? "active" : ""}`}
        >
          <i className={link.icon}></i>
          <br />
          {link.label}
        </Link>
      ))}
    </div>
  );
}