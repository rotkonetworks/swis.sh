import { useLocation } from "@solidjs/router";
import { createSignal } from "solid-js";

export default function Nav() {
  const location = useLocation();
  const [navIsOpen, setNavIsOpen] = createSignal(false);

  const navItems = [
    { id: 1, text: "Home", href: "/" },
    { id: 2, text: "Docs", href: "/docs" },
    { id: 3, text: "Transfer", href: "/transfer" },
    { id: 4, text: "GitHub", href: "https://github.com/rotkonetworks/swissh" }
  ];

  return (
    <header class="fixed w-full top-0 z-50 backdrop-blur-sm bg-white/75 dark:bg-neutral-900/75 border-b border-neutral-200 dark:border-neutral-800">
      <div class="max-w-7xl mx-auto px-4 py-4">
        <nav class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <div class="flex items-center">
              <span class="w-2 h-4 rounded-l-full bg-emerald-600"></span>
              <span class="w-2 h-4 rounded-r-full bg-teal-400 mt-1"></span>
            </div>
            <span class="font-mono font-bold text-lg dark:text-white">swis.sh</span>
          </div>

          {/* Desktop Navigation */}
          <div class="hidden md:flex items-center gap-8">
            {navItems.map(item => (
              <a 
                href={item.href}
                class="text-neutral-700 dark:text-neutral-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
              >
                {item.text}
              </a>
            ))}
            <a 
              href="/install"
              class="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full transition-colors"
            >
              Install
            </a>
          </div>

          {/* Mobile Navigation Button */}
          <button
            onClick={() => setNavIsOpen(!navIsOpen())}
            class="md:hidden p-2"
            aria-label="Toggle navigation"
          >
            <div class="i-carbon-menu text-2xl dark:text-white"></div>
          </button>
        </nav>

        {/* Mobile Navigation Menu */}
        <div
          class={`md:hidden absolute left-0 right-0 top-full bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 ${
            navIsOpen() ? 'block' : 'hidden'
          }`}
        >
          <div class="p-4 flex flex-col gap-4">
            {navItems.map(item => (
              <a 
                href={item.href}
                class="text-neutral-700 dark:text-neutral-300 hover:text-emerald-600 dark:hover:text-emerald-400"
              >
                {item.text}
              </a>
            ))}
            <a 
              href="/install"
              class="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full text-center"
            >
              Install
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
