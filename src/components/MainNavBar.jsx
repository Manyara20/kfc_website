"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaSearch,
  FaBars,
  FaTimes,
  FaChevronDown,
  FaChevronRight,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import navigationItems from "./navigationItems";

/* ─────────────────────────────────────────────────
   Recursive desktop sub-menu (nested dropdowns)
───────────────────────────────────────────────── */
const DesktopSubMenu = ({ items, level = 0 }) => (
  <ul
    className={`
      absolute bg-white shadow-xl border border-gray-100 min-w-[210px] py-1 z-50
      ${level === 0 ? "top-full left-0" : "top-0 left-full"}
      opacity-0 invisible group-hover:opacity-100 group-hover:visible
      translate-y-1 group-hover:translate-y-0
      transition-all duration-200 ease-out
    `}
  >
    {items.map((item, i) => (
      <li key={i} className="group/sub relative">
        <Link
          href={item.link || "#"}
          target={item.isExternal ? "_blank" : "_self"}
          rel={item.isExternal ? "noopener noreferrer" : undefined}
          className="flex items-center justify-between px-4 py-2.5 text-sm text-gray-700 font-medium
                     hover:bg-[#0D3C00] hover:text-white transition-colors duration-150
                     border-l-2 border-transparent hover:border-[#fe7c02]"
        >
          <span>{item.label}</span>
          {item.subItems?.length > 0 && (
            <FaChevronRight className="text-xs opacity-60 ml-2 flex-shrink-0" />
          )}
        </Link>
        {item.subItems?.length > 0 && (
          <DesktopSubMenu items={item.subItems} level={level + 1} />
        )}
      </li>
    ))}
  </ul>
);

/* ─────────────────────────────────────────────────
   Recursive mobile accordion menu
───────────────────────────────────────────────── */
const MobileMenuItem = ({ item, depth = 0, onClose }) => {
  const [open, setOpen] = useState(false);
  const hasChildren = item.subItems?.length > 0;

  return (
    <li>
      <div className="flex items-center justify-between">
        {hasChildren ? (
          <button
            onClick={() => setOpen((p) => !p)}
            className={`flex-1 flex items-center justify-between py-2.5 text-sm font-semibold text-white
                        hover:text-[#fe7c02] transition-colors text-left
                        ${depth > 0 ? "pl-" + (4 + depth * 4) : "pl-0"}`}
          >
            <span>{item.label}</span>
            <FaChevronDown
              className={`text-xs transition-transform duration-200 mr-1 ${open ? "rotate-180" : ""}`}
            />
          </button>
        ) : (
          <Link
            href={item.link || "#"}
            target={item.isExternal ? "_blank" : "_self"}
            rel={item.isExternal ? "noopener noreferrer" : undefined}
            onClick={onClose}
            className={`flex-1 py-2.5 text-sm font-semibold text-white hover:text-[#fe7c02] transition-colors
                        ${depth > 0 ? "pl-" + (4 + depth * 4) : "pl-0"}`}
          >
            {item.label}
          </Link>
        )}
      </div>

      {hasChildren && open && (
        <ul className="pl-4 border-l border-white/20 mt-0.5 mb-1">
          {item.subItems.map((child, i) => (
            <MobileMenuItem key={i} item={child} depth={depth + 1} onClose={onClose} />
          ))}
        </ul>
      )}
      <div className="h-px bg-white/10" />
    </li>
  );
};

/* ─────────────────────────────────────────────────
   Main NavBar
───────────────────────────────────────────────── */
const MainNavBar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const searchRef = useRef(null);

  /* Scroll handler */
  useEffect(() => {
    const onScroll = () => setIsSticky(window.scrollY > 0);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Close drawer on resize to desktop */
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setDrawerOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  /* Focus search input when opened */
  useEffect(() => {
    if (searchOpen) setTimeout(() => searchRef.current?.focus(), 100);
  }, [searchOpen]);

  /* Flatten nav items for search */
  const flattenItems = (items, parents = []) => {
    let out = [];
    for (const item of items) {
      const trail = [...parents, item.label];
      if (item.link) out.push({ label: trail.join(" › "), link: item.link, isExternal: item.isExternal });
      if (item.subItems) out = out.concat(flattenItems(item.subItems, trail));
    }
    return out;
  };
  const flatItems = flattenItems(navigationItems);

  useEffect(() => {
    const q = searchQuery.trim().toLowerCase();
    setFilteredItems(q ? flatItems.filter((i) => i.label.toLowerCase().includes(q)) : []);
  }, [searchQuery]);

  const bgClass = isSticky
    ? "bg-[#0D3C00] shadow-lg"
    : "bg-black/20 backdrop-blur-sm";

  return (
    <>
      {/* ── NAV BAR ── */}
      <nav className={`sticky top-0 z-40 transition-all duration-300 ${bgClass}`}>
        <div className="max-w-[1600px] mx-auto px-4 xl:px-6 py-2 flex items-center justify-between gap-4">

          {/* Logos */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <Link href="/">
              <Image src="/kfc/kfs_logo.png" alt="KFS Logo" width={52} height={40} className="object-contain" />
            </Link>
            <Link href="/">
              <Image src="/kfc/logo/transparent.png" alt="KFC Logo" width={52} height={40} className="object-contain" />
            </Link>
          </div>

          {/* Desktop nav items */}
          <ul className="hidden lg:flex items-center gap-1 flex-1 justify-center">
            {navigationItems.map((item, i) => (
              <li key={i} className="group relative">
                {item.subItems ? (
                  <>
                    <button
                      className="flex items-center gap-1 px-3 py-2 text-white text-sm xl:text-[0.95rem] font-semibold
                                 capitalize rounded hover:bg-white/10 transition-colors duration-150 cursor-pointer"
                    >
                      {item.label}
                      <FaChevronDown className="text-[10px] opacity-70 mt-0.5 transition-transform duration-200 group-hover:rotate-180" />
                    </button>
                    <DesktopSubMenu items={item.subItems} />
                  </>
                ) : (
                  <Link
                    href={item.link}
                    target={item.isExternal ? "_blank" : "_self"}
                    rel={item.isExternal ? "noopener noreferrer" : undefined}
                    className="block px-3 py-2 text-white text-sm xl:text-[0.95rem] font-semibold
                               capitalize rounded hover:bg-white/10 transition-colors duration-150"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Right: social + search + hamburger */}
          <div className="flex items-center gap-2 flex-shrink-0">
            {/* Social icons – desktop */}
            <div className="hidden xl:flex items-center gap-2 mr-1">
              <Link href="https://x.com/LondianiKfc?t=sD2K8H64ZJAChDRqD4uD5w&s=09" target="_blank" rel="noopener noreferrer"
                    className="text-white hover:text-[#fe7c02] transition-colors" aria-label="X / Twitter">
                <FaXTwitter size={16} />
              </Link>
              <Link href="https://www.facebook.com/share/1JqUFNiSwp/" target="_blank" rel="noopener noreferrer"
                    className="text-white hover:text-[#fe7c02] transition-colors" aria-label="Facebook">
                <FaFacebookF size={16} />
              </Link>
              <Link href="https://www.instagram.com/forestrycollegeke?igsh=N3g5a2NyOG9jejQ3" target="_blank" rel="noopener noreferrer"
                    className="text-white hover:text-[#fe7c02] transition-colors" aria-label="Instagram">
                <FaInstagram size={16} />
              </Link>
              <Link href="/" target="_blank" rel="noopener noreferrer"
                    className="text-white hover:text-[#fe7c02] transition-colors" aria-label="YouTube">
                <FaYoutube size={16} />
              </Link>
            </div>

            {/* Search button */}
            <button
              onClick={() => setSearchOpen(true)}
              className="p-2 text-white hover:bg-white/10 rounded transition-colors"
              aria-label="Search"
            >
              <FaSearch size={15} />
            </button>

            {/* Hamburger – mobile */}
            <button
              onClick={() => setDrawerOpen(true)}
              className="lg:hidden p-2 text-white hover:bg-white/10 rounded transition-colors"
              aria-label="Open menu"
            >
              <FaBars size={20} />
            </button>
          </div>
        </div>
      </nav>

      {/* ── MOBILE DRAWER ── */}
      {/* Backdrop */}
      {drawerOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-50 lg:hidden"
          onClick={() => setDrawerOpen(false)}
        />
      )}
      {/* Panel */}
      <aside
        className={`fixed top-0 right-0 h-full w-[300px] bg-[#0D3C00] z-50 flex flex-col
                    shadow-2xl transition-transform duration-300 lg:hidden
                    ${drawerOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/15">
          <Link href="/" onClick={() => setDrawerOpen(false)}>
            <Image src="/kfc/logo/transparent.png" alt="KFC Logo" width={44} height={34} />
          </Link>
          <button
            onClick={() => setDrawerOpen(false)}
            className="text-white hover:text-[#fe7c02] transition-colors p-1"
            aria-label="Close menu"
          >
            <FaTimes size={20} />
          </button>
        </div>

        {/* Nav items */}
        <nav className="flex-1 overflow-y-auto px-5 py-4">
          <ul className="space-y-0.5">
            {navigationItems.map((item, i) => (
              <MobileMenuItem key={i} item={item} onClose={() => setDrawerOpen(false)} />
            ))}
          </ul>
        </nav>

        {/* Social icons */}
        <div className="flex items-center justify-center gap-5 px-5 py-4 border-t border-white/15">
          <Link href="https://x.com/LondianiKfc?t=sD2K8H64ZJAChDRqD4uD5w&s=09" target="_blank" rel="noopener noreferrer"
                className="text-white hover:text-[#fe7c02] transition-colors"><FaXTwitter size={18} /></Link>
          <Link href="https://www.facebook.com/share/1JqUFNiSwp/" target="_blank" rel="noopener noreferrer"
                className="text-white hover:text-[#fe7c02] transition-colors"><FaFacebookF size={18} /></Link>
          <Link href="https://www.instagram.com/forestrycollegeke?igsh=N3g5a2NyOG9jejQ3" target="_blank" rel="noopener noreferrer"
                className="text-white hover:text-[#fe7c02] transition-colors"><FaInstagram size={18} /></Link>
          <Link href="/" target="_blank" rel="noopener noreferrer"
                className="text-white hover:text-[#fe7c02] transition-colors"><FaYoutube size={18} /></Link>
        </div>
      </aside>

      {/* ── SEARCH OVERLAY ── */}
      {searchOpen && (
        <div
          className="fixed inset-0 bg-black/70 z-50 flex flex-col items-center justify-start pt-24 px-4"
          onClick={(e) => { if (e.target === e.currentTarget) { setSearchOpen(false); setSearchQuery(""); } }}
        >
          <div className="w-full max-w-2xl">
            {/* Input */}
            <div className="relative flex items-center bg-white/10 backdrop-blur-md border border-white/30 rounded-lg overflow-hidden">
              <FaSearch className="text-white/60 ml-4 flex-shrink-0" size={16} />
              <input
                ref={searchRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search the website…"
                className="flex-1 bg-transparent text-white placeholder-white/50 px-4 py-4 text-base outline-none"
              />
              <button
                onClick={() => { setSearchOpen(false); setSearchQuery(""); }}
                className="text-white/60 hover:text-white mr-4 transition-colors"
              >
                <FaTimes size={16} />
              </button>
            </div>

            {/* Results */}
            {filteredItems.length > 0 && (
              <ul className="mt-2 bg-white rounded-lg shadow-2xl max-h-[60vh] overflow-y-auto divide-y divide-gray-100">
                {filteredItems.map((item, i) => (
                  <li key={i}>
                    <Link
                      href={item.link}
                      target={item.isExternal ? "_blank" : "_self"}
                      rel={item.isExternal ? "noopener noreferrer" : undefined}
                      onClick={() => { setSearchOpen(false); setSearchQuery(""); }}
                      className="flex items-center gap-3 px-5 py-3 hover:bg-[#0D3C00] hover:text-white
                                 text-gray-700 text-sm transition-colors group"
                    >
                      <FaSearch className="text-gray-400 group-hover:text-white/70 flex-shrink-0" size={12} />
                      <span>{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
            {searchQuery.trim() && filteredItems.length === 0 && (
              <p className="mt-4 text-white/60 text-center text-sm">No results found for "{searchQuery}"</p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default MainNavBar;
