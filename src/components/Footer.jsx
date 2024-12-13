const Footer = () => {
  // Simplified footer sections
  const sections = [
    {
      title: "Product",
      links: [
        { label: "Install", href: "/install" },
        { label: "Docs", href: "/docs" },
        { label: "GitHub", href: "https://github.com/rotkonetworks/swissh" }
      ]
    },
    {
      title: "Community",
      links: [
        { label: "Matrix Chat", href: "https://matrix.to/#/#swissh:matrix.rotko.net" },
        { label: "Twitter", href: "https://twitter.com/rotkonetworks" }
      ]
    }
  ];

  return (
    <footer class="bg-neutral-50 dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800">
      <div class="max-w-7xl mx-auto px-4 py-12">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Company Info */}
          <div class="md:col-span-2 space-y-4">
            <div class="flex items-center gap-2">
              <span class="w-2 h-4 rounded-l-full bg-emerald-600"></span>
              <span class="w-2 h-4 rounded-r-full bg-teal-400 mt-1"></span>
              <span class="font-mono font-bold text-lg">swis.sh</span>
            </div>
          </div>

          {/* Navigation Sections */}
          {sections.map(section => (
            <div class="space-y-4">
              <h3 class="font-medium text-neutral-900 dark:text-white">
                {section.title}
              </h3>
              <ul class="space-y-2">
                {section.links.map(link => (
                  <li>
                    <a
                      href={link.href}
                      class="text-neutral-600 dark:text-neutral-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div class="mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-800">
          <p class="text-center text-sm text-neutral-600 dark:text-neutral-400">
            🄯 2024 All rights reversed.
          </p>
        </div>
      </div>
    </footer>
  );
};
