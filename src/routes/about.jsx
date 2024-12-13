// src/routes/about.jsx
import { onMount } from "solid-js";

const KeyReuseDiagram = () => (
  <div class="bg-neutral-900 rounded-lg p-6 mb-8 text-sm font-mono">
    <div class="flex flex-col items-center gap-4">
      <div class="text-emerald-400">~/.ssh/id_ed25519 (Ed25519 Key)</div>
      <div class="text-neutral-400">↓</div>
      <div class="grid grid-cols-2 gap-8">
        <div class="text-center">
          <div class="text-teal-400">Ed25519 Public Key</div>
          <div class="text-neutral-500">↓</div>
          <div class="text-teal-400">SS58 Address</div>
        </div>
        <div class="text-center">
          <div class="text-sky-400">X25519 Public Key</div>
          <div class="text-neutral-500">↓</div>
          <div class="text-sky-400">People Chain Identity</div>
        </div>
      </div>
    </div>
  </div>
);

export default function About() {
  onMount(() => {
    document.title = "About - swis.sh";
  });

  return (
    <main class="max-w-4xl mx-auto px-4 py-24">
      <h1 class="text-4xl font-bold mb-8 dark:text-white">
        About swis.sh
      </h1>

      {/* Core Concept */}
      <section class="mb-16">
        <h2 class="text-2xl font-bold mb-4 dark:text-white">Core Concept</h2>
        <p class="text-neutral-700 dark:text-neutral-300 mb-6">
          swis.sh repurposes Ed25519 SSH keys as Web3 wallets, enabling GitHub users to receive crypto without any blockchain knowledge. The same key material powers SSH authentication, blockchain transactions, and optional X25519 encryption.
        </p>
        <KeyReuseDiagram />
      </section>

      {/* Key Features */}
      <section class="mb-16">
        <h2 class="text-2xl font-bold mb-4 dark:text-white">Key Features</h2>
        <div class="grid gap-6">
          <div class="bg-neutral-50 dark:bg-neutral-900 p-6 rounded-lg">
            <h3 class="font-bold mb-2 dark:text-white">SSH Key Reuse</h3>
            <p class="text-neutral-600 dark:text-neutral-400">
              Ed25519 SSH private keys contain a 32-byte scalar that's mathematically compatible with both transaction signing and X25519 encryption, enabling secure key reuse across protocols.
            </p>
          </div>
          <div class="bg-neutral-50 dark:bg-neutral-900 p-6 rounded-lg">
            <h3 class="font-bold mb-2 dark:text-white">GitHub Integration</h3>
            <p class="text-neutral-600 dark:text-neutral-400">
              Public SSH keys from GitHub profiles are used to derive recipient addresses, enabling seamless transfers to any GitHub username without requiring pre-registration.
            </p>
          </div>
          <div class="bg-neutral-50 dark:bg-neutral-900 p-6 rounded-lg">
            <h3 class="font-bold mb-2 dark:text-white">Optional Encryption</h3>
            <p class="text-neutral-600 dark:text-neutral-400">
              Users can publish derived X25519 public keys to Polkadot's People chain, enabling encrypted messaging while maintaining key material separation.
            </p>
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section class="mb-16">
        <h2 class="text-2xl font-bold mb-4 dark:text-white">Technical Details</h2>
        <div class="bg-neutral-900 rounded-lg overflow-hidden mb-6">
          <div class="border-b border-neutral-800 p-4">
            <code class="text-emerald-400 font-mono">Key Derivation Process</code>
          </div>
          <div class="p-4 text-neutral-300 space-y-2 font-mono text-sm">
            <p>1. Extract Ed25519 scalar from SSH key</p>
            <p>2. Use for Polkadot transaction signing</p>
            <p>3. Optionally derive X25519 key pair</p>
            <p>4. Publish X25519 pubkey on People chain</p>
          </div>
        </div>
      </section>

      {/* Limitations */}
      <section>
        <h2 class="text-2xl font-bold mb-4 dark:text-white">Current Limitations</h2>
        <ul class="list-disc pl-6 space-y-2 text-neutral-700 dark:text-neutral-300">
          <li>Basic ECIES encryption (no Signal Protocol features)</li>
          <li>Requires GitHub users to have Ed25519 SSH keys</li>
          <li>Permanent key association with GitHub identity</li>
          <li>.dot domain system still in development</li>
        </ul>
      </section>
    </main>
  );
}
