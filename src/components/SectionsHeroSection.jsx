// src/components/SectionsHeroSection.jsx
const SectionsHeroSection = (props) => {
  const copyCommand = async () => {
    try {
      await navigator.clipboard.writeText(props.textData.commandPlaceholder);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <section class="relative pt-32 lg:pt-36">
      <div class="px-5 sm:px-10 md:px-12 lg:px-5 mx-auto max-w-7xl w-full flex flex-col lg:flex-row gap-10 lg:gap-12">
        {/* Gradient decorations */}
        <div class="absolute w-full lg:w-1/2 inset-y-0 lg:right-0 hidden lg:block">
          <span class="absolute -left-6 md:left-4 top-24 lg:top-28 w-24 h-24 rotate-90 skew-x-12 rounded-3xl bg-green-400 blur-xl opacity-60 lg:opacity-95 hidden lg:block"></span>
          <span class="absolute right-4 bottom-12 w-24 h-24 rounded-3xl bg-emerald-600 blur-xl opacity-80"></span>
        </div>
        <span class="w-4/12 lg:w-2/12 aspect-square bg-gradient-to-tr from-emerald-600 to-green-400 absolute -top-5 lg:left-0 rounded-full skew-y-12 blur-2xl opacity-40 skew-x-12 rotate-90"></span>

        {/* Left Column: Content */}
        <div class="relative flex flex-col items-center text-center lg:text-left lg:py-7 xl:py-8 lg:items-start lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2">
          <h1 class="text-3xl sm:text-4xl md:text-5xl xl:text-6xl text-neutral-800 dark:text-white font-bold tracking-tight">
            {props.textData.title}{" "}
            <span class="text-transparent bg-clip-text bg-gradient-to-br from-teal-600 via-emerald-600 to-green-600">
              {props.textData.highlightedText}
            </span>
          </h1>

          <p class="mt-8 text-lg text-neutral-700 dark:text-neutral-300">
            {props.textData.description}
          </p>

          {/* Installation Command */}
          <div class="mt-10 w-full">
            <div class="max-w-xl bg-neutral-900 rounded-lg overflow-hidden border border-neutral-800">
              <div class="flex items-center justify-between px-4 py-2 bg-neutral-800/50">
                <div class="flex items-center gap-2">
                  <div class="i-carbon-terminal text-emerald-400" />
                  <span class="text-neutral-400 text-sm font-mono">Installation</span>
                </div>
                <button
                  onClick={copyCommand}
                  class="p-1.5 hover:bg-neutral-700 rounded transition-colors"
                  aria-label="Copy command"
                >
                  <div class="i-carbon-copy text-neutral-400" />
                </button>
              </div>
              <div class="p-4">
                <code class="font-mono text-emerald-400">{props.textData.commandPlaceholder}</code>
              </div>
            </div>

            {/* Command Examples */}
            <div class="mt-8 space-y-6">
              {/* Available Commands */}
              <div class="space-y-3">
                <p class="text-sm font-medium text-neutral-500">Available commands:</p>
                <div class="bg-neutral-900 rounded-lg border border-neutral-800 divide-y divide-neutral-800">
                  {props.textData.commands.available.map(({ cmd, desc }) => (
                    <div class="p-3 flex items-center justify-between">
                      <code class="font-mono text-emerald-400">{cmd}</code>
                      <span class="text-sm text-neutral-500">{desc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Example Usage */}
              <div class="space-y-3">
                <p class="text-sm font-medium text-neutral-500">Example transfers:</p>
                <div class="bg-neutral-900 rounded-lg border border-neutral-800 divide-y divide-neutral-800">
                  {props.textData.commands.examples.map(({ cmd, desc }) => (
                    <div class="p-3 flex items-center justify-between">
                      <code class="font-mono text-emerald-400">{cmd}</code>
                      <span class="text-sm text-neutral-500">{desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Image */}
        <div class="flex flex-1 items-center justify-center relative lg:max-w-none mx-auto max-w-3xl lg:w-1/2">
          <img
            src={props.textData.heroImage}
            alt={props.textData.heroImageAlt}
            width="640"
            height="180"
//            class="rounded-3xl object-cover lg:absolute w-full lg:h-full lg:max-w-[640px] lg:max-h-[180px] max-w-full max-h-full"
            class="rounded-3xl object-contain w-full h-auto max-w-[640px]"
          />
        </div>
      </div>
    </section>
  );
};

export default SectionsHeroSection;
