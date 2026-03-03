import type { Metadata } from "next"
import Link from "next/link"
import { PageHeader, InfoCard } from "@/components/docs-components"
import { Activity, BarChart3, Code2, Eye, Search, Layers } from "lucide-react"

export const metadata: Metadata = {
  title: "Explorer",
  description:
    "A real-time blockchain explorer built into the Acme stack. Inspect transactions, contracts, and on-chain data across all connected networks.",
}

export default function ExplorerPage() {
  return (
    <div className="prose">
      <PageHeader
        title="Explorer"
        description="A real-time blockchain explorer built into the Acme stack. Inspect transactions, decode contract calls, and browse on-chain data across every connected network."
      />

      <h2 id="overview">Overview</h2>
      <p>
        The Acme Explorer provides a unified interface for browsing and
        analyzing on-chain activity. Unlike external block explorers, it is
        tightly integrated with the rest of the Acme stack, so it automatically
        recognizes your deployed contracts, decodes function calls using your
        ABIs, and links directly to your project context.
      </p>

      <div className="not-prose grid gap-4 sm:grid-cols-2 mb-8">
        <InfoCard
          title="Transaction Inspector"
          description="Drill into any transaction to see decoded input data, internal calls, event logs, and gas consumption breakdown."
          icon={<Search className="h-5 w-5" />}
        />
        <InfoCard
          title="Contract Browser"
          description="View verified source code, read/write contract state, and interact with functions directly from the UI."
          icon={<Code2 className="h-5 w-5" />}
        />
        <InfoCard
          title="Real-Time Feed"
          description="Stream new blocks, pending transactions, and events as they happen with configurable filters."
          icon={<Activity className="h-5 w-5" />}
        />
        <InfoCard
          title="Analytics Dashboard"
          description="Visualize gas trends, contract usage, and token transfer volumes with built-in charts."
          icon={<BarChart3 className="h-5 w-5" />}
        />
      </div>

      <h2 id="getting-started">Getting Started</h2>
      <p>
        The Explorer is available as a standalone package or as part of the full
        Acme platform:
      </p>
      <pre>
        <code>{`npm install @acme/explorer`}</code>
      </pre>
      <p>
        Initialize the Explorer with your Acme instance to automatically pick
        up all configured networks and deployed contracts:
      </p>
      <pre>
        <code>{`import { Acme } from "@acme/core";
import { Explorer } from "@acme/explorer";

const app = new Acme({ /* ... */ });

const explorer = new Explorer({
  acme: app,
  port: 4000, // local UI port
  theme: "dark",
});

await explorer.start();
// Explorer UI available at http://localhost:4000`}</code>
      </pre>

      <h2 id="search">Universal Search</h2>
      <p>
        The Explorer search bar accepts multiple input types and resolves them
        automatically:
      </p>
      <ul>
        <li>
          <strong>Transaction hash</strong> — Full 66-character hex string
          (e.g. <code>0xabc...def</code>).
        </li>
        <li>
          <strong>Block number</strong> — Numeric block height or{" "}
          <code>latest</code>.
        </li>
        <li>
          <strong>Address</strong> — EOA or contract address. If the address
          matches a verified contract, the contract view opens automatically.
        </li>
        <li>
          <strong>ENS name</strong> — Resolves ENS domains on supported
          networks.
        </li>
        <li>
          <strong>Function selector</strong> — 4-byte selector (e.g.{" "}
          <code>0xa9059cbb</code>) to find matching function signatures.
        </li>
      </ul>

      <h2 id="contract-interaction">Contract Interaction</h2>
      <p>
        For contracts with verified or uploaded ABIs, the Explorer renders a
        full read/write interface:
      </p>
      <pre>
        <code>{`// Programmatic contract interaction via the Explorer SDK
const contract = await explorer.getContract("0x1234...abcd");

// Read state
const name = await contract.read("name");
const balance = await contract.read("balanceOf", ["0xowner..."]);

// Write (requires signer)
const tx = await contract.write("transfer", ["0xrecipient...", 1000n]);
console.log("TX Hash:", tx.hash);`}</code>
      </pre>

      <h2 id="functionalities">Functionalities</h2>
      <p>
        The Explorer ships with a rich set of built-in functionalities. For a
        detailed breakdown of every feature, see the{" "}
        <Link href="/explorer/functionalities" className="text-accent">
          Functionalities
        </Link>{" "}
        page.
      </p>
      <p>Highlights include:</p>
      <ul>
        <li>ABI auto-detection and decoding for known contracts</li>
        <li>Token balance aggregation across networks</li>
        <li>Event log filtering and export</li>
        <li>Internal transaction tracing (debug_traceTransaction)</li>
        <li>Gas profiling per function call</li>
        <li>Source code diffing between verified versions</li>
      </ul>

      <h2 id="configuration">Configuration</h2>
      <p>
        Customize the Explorer behavior with the following options:
      </p>
      <pre>
        <code>{`const explorer = new Explorer({
  acme: app,
  port: 4000,
  theme: "dark",            // "dark" | "light"
  defaultChain: 1,          // Default chain to display
  maxBlockRange: 10000,     // Max blocks for range queries
  cacheEnabled: true,       // Cache decoded transactions
  cacheTTL: 300,            // Cache lifetime in seconds
  abiSources: [             // Additional ABI resolution
    "etherscan",
    "sourcify",
    "./abis/",              // Local ABI directory
  ],
});`}</code>
      </pre>
    </div>
  )
}
