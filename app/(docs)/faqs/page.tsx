import type { Metadata } from "next"
import { PageHeader } from "@/components/docs-components"

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Frequently asked questions about Acme — setup, usage, billing, and troubleshooting.",
}

const faqs: { category: string; questions: { q: string; a: string }[] }[] = [
  {
    category: "General",
    questions: [
      {
        q: "What is Acme?",
        a: "Acme is a developer toolkit for building, deploying, and monitoring on-chain applications. It provides network connectors, an explorer, composable skills, CLI tools, and a Hardhat plugin — all designed to work together seamlessly.",
      },
      {
        q: "Is Acme open source?",
        a: "Yes. The core SDK and all plugins are fully open source under the MIT license. You can inspect the source, contribute, or fork it to fit your needs.",
      },
      {
        q: "Which blockchains does Acme support?",
        a: "Acme supports Ethereum Mainnet, Polygon, Arbitrum, Optimism, Base, BSC, Avalanche, and any EVM-compatible chain. You can add custom networks through the Network Connectors configuration.",
      },
    ],
  },
  {
    category: "Setup & Installation",
    questions: [
      {
        q: "How do I install Acme?",
        a: "Run npm install @acme/core in your project directory. For the Hardhat plugin, add npm install @acme/hardhat-plugin --save-dev. Refer to the individual Stack pages for detailed setup instructions.",
      },
      {
        q: "What are the system requirements?",
        a: "Acme requires Node.js 18 or later and npm, yarn, or pnpm. The Hardhat plugin requires Hardhat v2.14 or above. No other system-level dependencies are needed.",
      },
      {
        q: "Can I use Acme with an existing project?",
        a: "Absolutely. Acme is designed to integrate incrementally. You can add individual modules — like just the Explorer or a single Skill — without adopting the entire stack.",
      },
    ],
  },
  {
    category: "Network Connectors",
    questions: [
      {
        q: "How do I add a custom RPC endpoint?",
        a: "Pass your RPC URL in the connectors configuration object when initializing Acme, or set the ACME_RPC_URL environment variable. The Network Connectors page has full configuration examples.",
      },
      {
        q: "Does Acme handle automatic failover?",
        a: "Yes. You can provide an array of RPC endpoints per chain. Acme will automatically cycle through them if one becomes unresponsive, with configurable retry logic and health-check intervals.",
      },
    ],
  },
  {
    category: "Explorer",
    questions: [
      {
        q: "Can I use the Explorer with private or local chains?",
        a: "Yes. Point the Explorer at any JSON-RPC endpoint — including a local Hardhat or Anvil node — to inspect transactions, decode calls, and browse contract storage.",
      },
      {
        q: "Does the Explorer support contract verification?",
        a: "The Explorer can display verified source code from Etherscan-compatible APIs. For local or private chains, you can supply ABI files directly to enable call decoding.",
      },
    ],
  },
  {
    category: "Skills & Tools",
    questions: [
      {
        q: "What is a Skill?",
        a: "A Skill is a composable, audited on-chain action module. Skills handle common operations like token transfers, swaps, bridging, staking, and governance voting — each with built-in simulation, gas estimation, and error handling.",
      },
      {
        q: "Can I create custom Skills?",
        a: "Yes. The Skills API exposes a base class you can extend. Implement the required execute, estimate, and simulate methods and register your Skill with the SDK.",
      },
      {
        q: "What CLI tools are included?",
        a: "The Tools package ships with acme init for scaffolding, acme generate for code generation, acme inspect for transaction debugging, and acme bench for gas benchmarking.",
      },
    ],
  },
  {
    category: "Hardhat Plugin",
    questions: [
      {
        q: "How do I enable the Hardhat plugin?",
        a: "Add require('@acme/hardhat-plugin') to the top of your hardhat.config.js (or import it in TypeScript). The plugin registers additional tasks and extends the Hardhat Runtime Environment automatically.",
      },
      {
        q: "Does the plugin work with Foundry or other frameworks?",
        a: "The plugin is Hardhat-specific. However, the core SDK works independently of any framework, so you can use Acme features in Foundry scripts via the JavaScript SDK directly.",
      },
    ],
  },
  {
    category: "Billing & Licensing",
    questions: [
      {
        q: "Is Acme free to use?",
        a: "The open-source SDK, plugins, and CLI tools are completely free. Acme Cloud — which provides managed RPC endpoints, hosted Explorer instances, and analytics — offers a free tier with paid plans for higher usage.",
      },
      {
        q: "What license does Acme use?",
        a: "All open-source packages are released under the MIT license. You are free to use, modify, and distribute them in commercial and non-commercial projects.",
      },
    ],
  },
]

export default function FaqsPage() {
  return (
    <div className="prose">
      <PageHeader
        title="Frequently Asked Questions"
        description="Answers to the most common questions about Acme. Can't find what you're looking for? Reach out on GitHub Discussions or Discord."
      />

      <div className="not-prose flex flex-col gap-10">
        {faqs.map((section) => (
          <section key={section.category} id={section.category.toLowerCase().replace(/\s+/g, "-")}>
            <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
              {section.category}
            </h2>
            <div className="flex flex-col gap-5">
              {section.questions.map((item, idx) => (
                <details
                  key={idx}
                  className="group rounded-xl border border-border bg-card transition-colors hover:border-accent/40"
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-4 px-5 py-4 text-sm font-medium text-foreground select-none [&::-webkit-details-marker]:hidden list-none">
                    <span>{item.q}</span>
                    <svg
                      className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </summary>
                  <div className="px-5 pb-4 text-sm leading-relaxed text-muted-foreground">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
