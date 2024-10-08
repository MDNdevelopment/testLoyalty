export default function Navbar() {
  return (
    <nav className="bg-navbar">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-24 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img
                className="h-16 w-auto"
                src="/brand-logo.webp"
                alt="Your Company"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
