const FooterBottom = () => {
  return (
    <footer className="bg-[#fe7c02] text-white py-4 shadow-lg shadow-gray-800/50 shrink-0 z-10 h-18">
      <div className="border-t border-white/30 pt-2">
          <p className="text-xs md:text-sm text-white text-center">
            © {new Date().getFullYear()} Kenya Forestry College. All rights reserved.
          </p>
        </div>
    </footer>
  );
};

export default FooterBottom;