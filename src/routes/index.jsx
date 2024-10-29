import { onMount } from 'solid-js';
import SectionsHeroSection from '~/components/SectionsHeroSection';

const textData = {
  hero: {
    title: "Send money instantly to",
    highlightedText: "SSH keys!",
    description: "swis.sh lets you send USDT instantly to any GitHub user, .dot domain name, or ed25519 public key holder via Polkadot Asset Hub.",
    commandPlaceholder: "swissh send @github_user 100",
    buttonText: "Install now",
    heroImage: "/images/swissh.webp",
    heroImageAlt: "swissh money transfer illustration",
    extraCommands: [
      "swissh send nickname.dot 50",
      "swissh send gh:hitchhooker 42 DOT",
      "swissh send <base5address> 75"
    ]
  }
};

export default function Home() {
  onMount(() => {
    document.title = 'swis.sh - Send Money via SSH Keys';

    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'Send USDT instantly to GitHub users, .dot domains, and SSH key holders using Polkadot Asset Hub - by Rotko Networks.';
    document.head.appendChild(metaDescription);

    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  });

  return (
    <main class="flex-1">
      <SectionsHeroSection textData={textData.hero} />
      {/* Add other sections as needed */}
    </main>
  );
}
