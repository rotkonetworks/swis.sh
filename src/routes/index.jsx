// src/routes/index.jsx
import { onMount } from 'solid-js';
import SectionsHeroSection from '~/components/SectionsHeroSection';

const textData = {
  hero: {
    title: "Your SSH key is now a",
    highlightedText: "Web3 wallet",
    description: "No more seed phrases. swis.sh uses Ed25519 SSH keys for Polkadot transactions, letting you send assets to GitHub users or .dot domains.",
    commandPlaceholder: "curl https://get.swis.sh | sh",
    buttonText: "Install now",
    heroImage: "/images/swissh.webp",
    heroImageAlt: "swissh key derivation illustration",
    commands: {
      available: [
        { cmd: "swissh balance", desc: "Check your wallet" },
        { cmd: "swissh transfer <AMOUNT> <ASSET> <TARGET>", desc: "Send assets" },
      ],
      examples: [
        { cmd: "swissh transfer 10 USDT username.gh -i ~/.ssh/id_ed25519", desc: "Send dollars to GitHub user" },
      ]
    }
  }
};

export default function Home() {
  onMount(() => {
    document.title = 'swis.sh - SSH Keys as Web3 Identity';

    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'Use Ed25519 SSH keys for transactions. Send money to any GitHub username.';
    document.head.appendChild(metaDescription);

    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  });

  return (
    <main class="flex-1">
      <SectionsHeroSection textData={textData.hero} />
    </main>
  );
}
