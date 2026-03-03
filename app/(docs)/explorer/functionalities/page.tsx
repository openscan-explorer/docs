import type { Metadata } from "next"
import { PageHeader, InfoCard } from "@/components/docs-components"
import {
  Globe,
  Search,
  Link2,
  Fuel,
  Blocks,
  ArrowRightLeft,
  FileCode2,
  Eye,
  Wallet,
  Image,
  Bitcoin,
  Settings,
  TestTube,
  Wrench,
  Users,
  Monitor,
  Languages,
  Database,
  Server,
  ShieldCheck,
  Network,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Explorer Functionalities",
  description:
    "Complete reference of every feature available in the Explorer: multi-chain support, EVM and Bitcoin browsing, DevTools, settings, and more.",
}

export default function ExplorerFunctionalitiesPage() {
  return (
    <div className="prose">
      <PageHeader
        title="Explorer Functionalities"
        description="A comprehensive reference covering every feature of the Explorer, from multi-network navigation and smart search to EVM and Bitcoin chain browsing, contract interaction, DevTools, and RPC management."
      />

      {/* ── Global App ─────────────────────────────────── */}
      <h2 id="global-app">Global App</h2>
      <p>
        The Explorer ships as a multi-network application with a unified
        interface. The home screen presents network cards for every supported
        chain, and a <strong>Show testnets</strong> toggle lets you reveal or
        hide test networks.
      </p>
      <div className="not-prose grid gap-4 sm:grid-cols-2 mb-8">
        <InfoCard
          title="Theme & Display"
          description="Dark and light mode support with a global theme toggle. Background blocks animation can be enabled or disabled."
          icon={<Monitor className="h-5 w-5" />}
        />
        <InfoCard
          title="Network Status"
          description="A real-time status chip in the navbar shows the latest block number and a quick-link to gas metrics (EVM chains)."
          icon={<Globe className="h-5 w-5" />}
        />
        <InfoCard
          title="Responsive Layout"
          description="Fully responsive UI with dedicated desktop and mobile menu variants. Mobile menu includes all navigation and settings access."
          icon={<Monitor className="h-5 w-5" />}
        />
        <InfoCard
          title="Super-User Mode"
          description="A toggle that unlocks advanced controls such as persistent cache management, size inspection, and manual cache clearing."
          icon={<ShieldCheck className="h-5 w-5" />}
        />
      </div>
      <p>
        The header and footer provide navigation to About, Subscriptions,
        Contact, Supporters, GitHub, X, bug reporting, and version/commit
        information. Browser metadata and OpenSearch integration are included,
        along with MetaMask explorer URL redirect handling.
      </p>

      {/* ── Search ─────────────────────────────────────── */}
      <h2 id="search">Search</h2>
      <p>
        A context-aware search box appears on every network page and
        automatically detects the type of query you enter:
      </p>
      <ul>
        <li>
          <strong>EVM / BTC transaction hashes</strong> — Detected and routed
          directly to the transaction detail page.
        </li>
        <li>
          <strong>EVM / BTC addresses</strong> — Identified by format and routed
          to the correct address page.
        </li>
        <li>
          <strong>Block numbers</strong> — Numeric inputs resolve to the block
          detail page.
        </li>
        <li>
          <strong>ENS names</strong> — Resolved to their underlying address and
          routed to the address page.
        </li>
      </ul>
      <p>
        A dedicated search results page (<code>{'#/search?q=...'}</code>)
        provides query type detection with per-network result links. Invalid
        queries surface user-facing error messages.
      </p>

      {/* ── Supported Chains ───────────────────────────── */}
      <h2 id="supported-chains">Supported Chains</h2>
      <div className="not-prose grid gap-4 sm:grid-cols-2 mb-8">
        <InfoCard
          title="EVM Chains"
          description="Ethereum, Base, Arbitrum, Optimism, BNB Chain, Polygon, plus testnets and localhost support through configuration."
          icon={<Network className="h-5 w-5" />}
        />
        <InfoCard
          title="Bitcoin"
          description="Bitcoin Mainnet and Testnet with full block, transaction, address, and mempool browsing."
          icon={<Bitcoin className="h-5 w-5" />}
        />
      </div>

      {/* ── EVM Explorer ───────────────────────────────── */}
      <h2 id="evm-explorer">EVM Explorer</h2>
      <p>
        The EVM Explorer provides a full suite of tools for inspecting
        Ethereum-compatible chains:
      </p>

      <h3 id="evm-dashboard">Network Dashboard</h3>
      <p>
        An at-a-glance overview showing current price, gas tier breakdown
        (low / average / high), the latest block, and the most recent
        transactions.
      </p>

      <h3 id="gas-tracker">Gas Tracker</h3>
      <p>
        A dedicated gas page displaying low, average, and high gas prices, the
        current base fee, and estimated transaction costs broken down by common
        action types (transfer, swap, deploy, etc.).
      </p>

      <h3 id="blocks">Blocks</h3>
      <div className="not-prose grid gap-4 sm:grid-cols-2 mb-8">
        <InfoCard
          title="Block List"
          description="Paginated block list with latest / newer / older navigation, validator links, and provider selection indicator."
          icon={<Blocks className="h-5 w-5" />}
        />
        <InfoCard
          title="Block Detail"
          description="Core fields, gas usage %, base fee, burnt fee, extra data, withdrawals, transaction list, previous/next block navigation, and extended technical fields."
          icon={<Blocks className="h-5 w-5" />}
        />
      </div>

      <h3 id="transactions">Transactions</h3>
      <div className="not-prose grid gap-4 sm:grid-cols-2 mb-8">
        <InfoCard
          title="Transaction List"
          description="Block-scoped pagination with drill-down links to individual transactions and addresses."
          icon={<ArrowRightLeft className="h-5 w-5" />}
        />
        <InfoCard
          title="Transaction Detail"
          description="Status, confirmations, fee math, gas metrics, nonce, type, and human-readable timestamps."
          icon={<ArrowRightLeft className="h-5 w-5" />}
        />
      </div>
      <p>Additional transaction capabilities include:</p>
      <ul>
        <li>
          <strong>Receipt and log decoding</strong> — Decoded function input,
          decoded event logs (ABI and generic), raw topics and data.
        </li>
        <li>
          <strong>L2 extras</strong> — Arbitrum-specific and
          Optimism-specific fields are displayed when applicable.
        </li>
        <li>
          <strong>Debug trace / call trace</strong> — A dedicated trace panel is
          available when a trace-capable backend is connected.
        </li>
        <li>
          <strong>Mempool</strong> — A mempool route exists for pending
          transaction visibility.
        </li>
      </ul>

      {/* ── Address & Contract Pages ───────────────────── */}
      <h2 id="address-contract">Address & Contract Pages</h2>
      <p>
        The Explorer detects the type of an address and routes to the
        appropriate display: account, contract, ERC-20, ERC-721, or ERC-1155.
      </p>

      <h3 id="ens">ENS Support</h3>
      <p>
        ENS reverse resolution and full ENS records display (mainnet-aware),
        including avatar, contenthash, and text records.
      </p>

      <h3 id="account-view">Account View</h3>
      <ul>
        <li>Balance and info cards with transaction history search, caching, and load-more pagination.</li>
        <li>Token holdings panel showing supporter tokens, popular-token fetch, and custom token lookup.</li>
      </ul>

      <h3 id="contract-view">Contract View</h3>
      <div className="not-prose grid gap-4 sm:grid-cols-2 mb-8">
        <InfoCard
          title="Verification & Source"
          description="Verification state (Sourcify / local artifact), bytecode display, source code viewer, and ABI display."
          icon={<FileCode2 className="h-5 w-5" />}
        />
        <InfoCard
          title="Contract Interaction"
          description="Read and write function execution UI, wallet connect flow, and transaction status/result links."
          icon={<Wallet className="h-5 w-5" />}
        />
      </div>
      <p>
        ERC-20, ERC-721, and ERC-1155 contracts display additional
        contract-specific metadata panels (supply, decimals, collection info,
        etc.).
      </p>

      {/* ── NFT Token Details ──────────────────────────── */}
      <h2 id="nft-token-details">NFT Token Details</h2>
      <p>
        Individual token pages are available at{" "}
        <code>{'#/network/address/:contract/:tokenId'}</code>. The Explorer
        auto-detects ERC-721 vs ERC-1155 via interface checks.
      </p>
      <div className="not-prose grid gap-4 sm:grid-cols-2 mb-8">
        <InfoCard
          title="ERC-721 Tokens"
          description="Metadata, image, attributes, current owner, approval status, collection info, token URI, and raw metadata."
          icon={<Image className="h-5 w-5" />}
        />
        <InfoCard
          title="ERC-1155 Tokens"
          description="Metadata, image, attributes, token URI, raw metadata, and balance lookup for any arbitrary holder address."
          icon={<Image className="h-5 w-5" />}
        />
      </div>

      {/* ── Bitcoin Explorer ───────────────────────────── */}
      <h2 id="bitcoin-explorer">Bitcoin Explorer</h2>
      <p>
        A full-featured Bitcoin explorer with the same level of detail as the
        EVM side:
      </p>
      <ul>
        <li>
          <strong>Dashboard</strong> — Network stats, latest blocks, latest
          transactions, and search.
        </li>
        <li>
          <strong>Blocks</strong> — Paginated list with drill-down. Block detail
          shows reward, fees, difficulty, size, coinbase message, and
          transaction list.
        </li>
        <li>
          <strong>Transactions</strong> — Block and page pagination. Detail view
          with input/output flow, fee rates, coinbase/RBF/witness flags,
          confirmations, and BTC + USD formatting.
        </li>
        <li>
          <strong>Addresses</strong> — Balance, UTXO set, recent transactions,
          and special handling for the genesis address.
        </li>
        <li>
          <strong>Mempool</strong> — Periodic refresh, paginated pending
          transaction table, fee and feerate metrics, and deep-link support for
          individual mempool transactions.
        </li>
      </ul>

      {/* ── Settings & RPC Management ──────────────────── */}
      <h2 id="settings">Settings & RPC Management</h2>
      <div className="not-prose grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-8">
        <InfoCard
          title="Appearance"
          description="Toggle background blocks animation and switch between dark and light themes."
          icon={<Monitor className="h-5 w-5" />}
        />
        <InfoCard
          title="Language"
          description="Select from English, Spanish, Chinese, Japanese, and Portuguese (BR)."
          icon={<Languages className="h-5 w-5" />}
        />
        <InfoCard
          title="Cache Management"
          description="Clear individual caches or all site data. Super-user mode adds persistent cache size inspection."
          icon={<Database className="h-5 w-5" />}
        />
        <InfoCard
          title="RPC Strategy"
          description="Choose between fallback, parallel, and race strategies. Configure parallel request limits."
          icon={<Server className="h-5 w-5" />}
        />
        <InfoCard
          title="API Keys"
          description="Manage Infura, Alchemy, and AI provider API keys in one place."
          icon={<Settings className="h-5 w-5" />}
        />
        <InfoCard
          title="Per-Network RPC Editor"
          description="Add, remove, reorder, copy, sync, and re-rank endpoints. Tags for opensource, private, and tracking classification."
          icon={<Link2 className="h-5 w-5" />}
        />
      </div>
      <p>
        MetaMask integration allows setting the Explorer as the default block
        explorer for any supported EVM chain directly from the settings page.
      </p>

      {/* ── RPC Testing ────────────────────────────────── */}
      <h2 id="rpc-testing">RPC Testing</h2>
      <p>
        A per-network endpoint testing page allows you to verify the health and
        performance of your RPC connections:
      </p>
      <ul>
        <li>Dropdown selection for network endpoints.</li>
        <li>
          <strong>Test all</strong> and <strong>retest single</strong> endpoint
          actions.
        </li>
        <li>Sort by provider, latency, or status.</li>
        <li>
          Displays health status, latency, latest block, tracking
          classification, and active state for each endpoint.
        </li>
      </ul>

      {/* ── DevTools ───────────────────────────────────── */}
      <h2 id="devtools">DevTools</h2>
      <p>
        A suite of built-in developer tools accessible from the Explorer
        interface:
      </p>

      <h3 id="devtools-transactions">Transactions</h3>
      <p>
        Transaction builder with gas and fee estimation, revert simulation,
        nonce fetch, send transaction, and raw RLP broadcast.
      </p>

      <h3 id="devtools-signatures">Signatures</h3>
      <p>
        Message signer, signature inspector (including compact signatures), and
        EIP-712 typed-data encoder/decoder.
      </p>

      <h3 id="devtools-utils">Utilities</h3>
      <div className="not-prose grid gap-4 sm:grid-cols-3 mb-8">
        <InfoCard
          title="ETH Unit Converter"
          description="Convert between wei, gwei, and ETH with instant bidirectional input."
          icon={<Wrench className="h-5 w-5" />}
        />
        <InfoCard
          title="Keccak Hasher"
          description="Hash arbitrary input with keccak256 and copy the result."
          icon={<Wrench className="h-5 w-5" />}
        />
        <InfoCard
          title="Hex Encoder / Decoder"
          description="Encode text to hex or decode hex back to human-readable strings."
          icon={<Wrench className="h-5 w-5" />}
        />
      </div>

      <h3 id="devtools-contracts">Contracts</h3>
      <p>
        Sourcify standard and metadata verification, Etherscan import,
        similarity verification, and storage slot reader.
      </p>

      <h3 id="devtools-development">Development</h3>
      <p>
        Hardhat Ignition artifact ZIP upload and parsing, plus local artifact
        flow for development-time contract verification.
      </p>

      {/* ── Community & Metadata ───────────────────────── */}
      <h2 id="community">Community & Metadata</h2>
      <div className="not-prose grid gap-4 sm:grid-cols-2 mb-8">
        <InfoCard
          title="About"
          description="Project principles, feature highlights, supported networks, and version statistics."
          icon={<Users className="h-5 w-5" />}
        />
        <InfoCard
          title="Contact"
          description="Reach out via XMTP or through social and issue channels."
          icon={<Users className="h-5 w-5" />}
        />
        <InfoCard
          title="Subscriptions"
          description="Tiered pricing plans, early-adopter schedule, and DAO payment address with submission flow."
          icon={<Wallet className="h-5 w-5" />}
        />
        <InfoCard
          title="Supporters & Profiles"
          description="Tier-grouped supporter listing with links, plus profile pages for app, network, and organization metadata."
          icon={<Users className="h-5 w-5" />}
        />
      </div>
    </div>
  )
}
