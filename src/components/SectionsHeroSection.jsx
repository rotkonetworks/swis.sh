const SectionsHeroSection = (props) => {
  return (
    <section class="relative pt-32 lg:pt-36">
      <div class="px-5 sm:px-10 md:px-12 lg:px-5 mx-auto max-w-7xl w-full flex flex-col lg:flex-row gap-10 lg:gap-12">
        {/* Background decorative elements */}
        <div class="absolute w-full lg:w-1/2 inset-y-0 lg:right-0 hidden lg:block">
          <span class="absolute -left-6 md:left-4 top-24 lg:top-28 w-24 h-24 rotate-90 skew-x-12 rounded-3xl bg-green-400 blur-xl opacity-60 lg:opacity-95 hidden lg:block"></span>
          <span class="absolute right-4 bottom-12 w-24 h-24 rounded-3xl bg-emerald-600 blur-xl opacity-80"></span>
        </div>
        <span class="w-4/12 lg:w-2/12 aspect-square bg-gradient-to-tr from-emerald-600 to-green-400 absolute -top-5 lg:left-0 rounded-full skew-y-12 blur-2xl opacity-40 skew-x-12 rotate-90"></span>

        <div class="relative flex flex-col items-center text-center lg:text-left lg:py-7 xl:py-8 lg:items-start lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2">
          <h1 class="text-3xl sm:text-4xl md:text-5xl xl:text-6xl text-neutral-800 dark:text-white font-bold">
            {props.textData.title} <span class="text-transparent bg-clip-text bg-gradient-to-br from-teal-600 via-emerald-600 to-green-600">{props.textData.highlightedText}</span>
          </h1>
          <p class="mt-8 text-neutral-700 dark:text-neutral-300">
            {props.textData.description}
          </p>

          {/* Installation Command */}
          <div class="mt-10 w-full flex max-w-md mx-auto lg:mx-0">
            <div class="flex sm:flex-row flex-col gap-5 w-full">
              <div class="py-1 pl-6 w-full pr-1 flex gap-3 items-center text-neutral-600 dark:text-neutral-400 shadow-lg bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-full ease-linear">
                <span class="min-w-max pr-2 border-r border-neutral-200 dark:border-neutral-700">
                  <div class="i-carbon-terminal text-xl bg-neutral-800 dark:bg-neutral-200" />
                </span>
                <code class="w-full py-3 text-emerald-400">curl https://get.swis.sh | bash</code>
                <button 
                  aria-label="Copy command" 
                  class="outline-none flex justify-center items-center sm:w-max min-w-max px-6 h-12 bg-emerald-600 hover:bg-emerald-700 rounded-full relative overflow-hidden transition-colors"
                >
                  <span class="hidden sm:flex relative z-20 text-white">Copy</span>
                  <span class="flex sm:hidden relative z-20">
                    <div class="i-carbon-copy text-xl text-white" />
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Command Examples */}
          <div class="mt-8 space-y-4 w-full max-w-md mx-auto lg:mx-0">
            <div class="space-y-2">
              <p class="text-sm text-neutral-500">Available commands:</p>
              <div class="py-2 px-4 text-neutral-400 bg-neutral-800 rounded-lg space-y-1">
                <code class="block">swissh balance</code>
                <code class="block">swissh transfer &lt;AMOUNT&gt; &lt;TARGET&gt;</code>
                <code class="block">swissh export-private-key</code>
              </div>
            </div>
            
            <div class="space-y-2">
              <p class="text-sm text-neutral-500">Example transfer:</p>
              <div class="py-2 px-4 text-neutral-400 bg-neutral-800 rounded-lg">
                <code>swissh transfer 10 gh:username</code>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div class="flex flex-1 lg:h-auto relative lg:max-w-none mx-auto max-w-3xl lg:w-1/2">
          <img
            src={props.textData.heroImage}
            alt={props.textData.heroImageAlt}
            width="2350"
            height="2359"
            class="rounded-3xl object-cover lg:absolute w-full lg:h-full lg:max-h-none max-h-96"
          />
        </div>
      </div>
    </section>
  );
};

export default SectionsHeroSection;
