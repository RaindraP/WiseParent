import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import NavbarProfile from "./NavbarProfile";

interface NavbarProps {
  theme: "dark" | "light";
  selected: string;
}

export default function Navbar({ theme, selected }: NavbarProps) {
  const navigation = [
    { name: "Home", href: "/", selected: selected === "home" ? true : false },
    {
      name: "Parenting Guides",
      href: "/parenting",
      selected: selected === "parenting" ? true : false,
    },
    {
      name: "Kids Zone",
      href: "/kidszone",
      selected: selected === "kidszone" ? true : false,
    },
    {
      name: "Schedule",
      href: "/schedule",
      selected: selected === "schedule" ? true : false,
    },
    {
      name: "About Us",
      href: "/about",
      selected: selected === "about" ? true : false,
    },
  ];

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const toggleDropdown = () => {
    setProfileOpen(!profileOpen);
  };

  const themeClasses = theme === "dark" ? "text-white" : "text-gray-900";
  const underlineClasses =
    theme === "dark" ? "border-white" : "border-gray-900";
  const buttonClasses = theme === "dark" ? "text-white" : "text-gray-700";
  const panelClasses = theme === "dark" ? "bg-gray-900" : "bg-white";
  const logoSource =
    theme === "dark" ? "/img/wise-logo-dark.svg" : "/img/wise-logo-light.svg";

  return (
    <div className={`bg-${theme === "dark" ? "gray-900" : "white"}`}>
      <header className="absolute px-[16px] lg:px-[20px] inset-x-0 top-0 z-50 mx-auto max-w-7xl">
        <nav
          className={`flex items-center justify-between py-6 px-2 lg:px-8 ${themeClasses}`}
          aria-label="Global"
        >
          {/* Logo */}
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Wise Parent Logo</span>
              <img className="lg:h-8 h-8 w-auto" src={logoSource} alt="" />
            </a>
          </div>
          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 ${buttonClasses}`}
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-md font-semibold leading-6 pb-[2px] ${themeClasses} ${
                  item.selected
                    ? `opacity-100 border-b-2 ${underlineClasses}`
                    : "opacity-70"
                } hover:opacity-100`}
              >
                {item.name}
              </a>
            ))}
          </div>
          {/* Login Button */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            {localStorage.getItem("user") !== null ? (
              <NavbarProfile
                isOpen={profileOpen}
                toggleDropdown={toggleDropdown}
                user={localStorage.getItem("user")}
                theme={theme}
              />
            ) : (
              <a
                href="/login"
                className={`-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 ${themeClasses}`}
              >
                Log in
              </a>
            )}
          </div>
        </nav>
        {/* Mobile Menu Dialog */}
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel
            className={`fixed inset-y-0 right-0 z-50 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 ${panelClasses}`}
          >
            <div className="flex items-center justify-between">
              {/* Logo */}
              <a href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Wise Parent</span>
                <img className="h-8 w-auto" src={logoSource} alt="" />
              </a>
              {/* Close Button */}
              <button
                type="button"
                className={`-m-2.5 rounded-md p-2.5 ${buttonClasses}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                {/* Navigation Links */}
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={`-mx-3 block rounded-lg px-3 py-2 text-base leading-7 ${themeClasses}`}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                {/* Login Button */}
                <div className="py-6">
                  {localStorage.getItem("user") !== null ? (
                    <NavbarProfile
                      isOpen={profileOpen}
                      toggleDropdown={toggleDropdown}
                      user={localStorage.getItem("user")}
                      theme={theme}
                    />
                  ) : (
                    <a
                      href="/login"
                      className={`-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 ${themeClasses}`}
                    >
                      Log in
                    </a>
                  )}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </div>
  );
}
