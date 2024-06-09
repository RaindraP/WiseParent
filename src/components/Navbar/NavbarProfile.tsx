import { useNavigate } from "react-router-dom";

interface NavbarProfileProps {
  isOpen: boolean;
  toggleDropdown: any;
  user: any;
  theme: "light" | "dark";
}

const navItem = [
  {
    navName: "Profile",
    navHref: "/profile",
  },
];

export default function NavbarProfile({
  isOpen,
  toggleDropdown,
  user,
  theme,
}: NavbarProfileProps) {
  const userData = JSON.parse(user);
  const textName = theme === "dark" ? "text-white" : "text-gray-900";
  const dropdownText = theme === "dark" ? "text-gray-900" : "text-white";
  const dropdownBackground = theme === "dark" ? "bg-white" : "bg-gray-700";
  const dropdownDivide =
    theme === "dark" ? "divide-gray-100" : "divide-gray-600";

  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");

    navigate("/login");
  };

  return (
    <div className="relative">
      <div className="flex">
        <img
          id="avatarButton"
          onClick={toggleDropdown}
          className="w-10 h-10 rounded-full cursor-pointer"
          src="/img/sampul.jpg"
          alt="User dropdown"
        />
        <div className={`px-4 text-sm ${textName}`}>
          <div>{userData.name}</div>
          <div className="truncate text-xs font-medium">{userData.email}</div>
        </div>
      </div>

      {/* Dropdown menu */}
      {isOpen && (
        <div
          id="userDropdown"
          className={`z-10 absolute top-full left-0 mt-2 ${dropdownBackground} divide-y ${dropdownDivide} rounded-lg shadow w-44  `}
        >
          <ul className="py-2 text-sm" aria-labelledby="avatarButton">
            {navItem.map((item, index) => (
              <li key={index}>
                <a
                  href={item.navHref}
                  className={`block px-4 py-2 ${dropdownText}`}
                >
                  {item.navName}
                </a>
              </li>
            ))}
            <li
              className={`block px-4 py-2 ${dropdownText} font-bold text-red-400`}
              onClick={handleLogOut}
            >
              Log Out
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
