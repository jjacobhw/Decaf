export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <span className="text-white text-lg font-semibold">Decaffinated</span>
          </div>
            <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Decaffinated. All Rights Reserved.
            </div>
        </div>
      </div>
    </footer>
  );
}