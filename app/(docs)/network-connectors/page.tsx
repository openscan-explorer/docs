import type { Metadata } from "next"
import { PageHeader, InfoCard } from "@/components/docs-components"
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table"
import {
  Wifi,
  Zap,
  ShieldCheck,
  RefreshCw,
  Layers,
  Package,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Network Connectors",
  description:
    "TypeScript library providing unified, type-safe RPC client interfaces for multiple blockchain networks with configurable request execution strategies.",
}

export default function NetworkConnectorsPage() {
  return (
    <div className="prose">
      <PageHeader
        title="Network Connectors"
        description="TypeScript library providing unified, type-safe RPC client interfaces for multiple blockchain networks with configurable request execution strategies."
      />

      <h2 id="features">Features</h2>
      <div className="not-prose grid gap-4 sm:grid-cols-2 mb-8">
        <InfoCard
          title="Multi-Network Support"
          description="Unified API for 10+ blockchain networks including EVM chains (Ethereum, Optimism, Arbitrum, Polygon, BNB, Base, Aztec) and Bitcoin."
          icon={<Wifi className="h-5 w-5" />}
        />
        <InfoCard
          title="Strategy Pattern"
          description="Pluggable request execution strategies — Fallback for reliability, Parallel for consistency detection, Race for minimum latency."
          icon={<RefreshCw className="h-5 w-5" />}
        />
        <InfoCard
          title="Type Safety"
          description="Strong TypeScript typing with network-specific type definitions and type-safe client instantiation based on chain IDs."
          icon={<ShieldCheck className="h-5 w-5" />}
        />
        <InfoCard
          title="Zero Dependencies"
          description="Pure Node.js implementation with no external runtime dependencies. Native ESM support for modern JavaScript environments."
          icon={<Zap className="h-5 w-5" />}
        />
        <InfoCard
          title="Factory Pattern"
          description="Type-safe client instantiation based on chain IDs — numeric for EVM, CAIP-2 for Bitcoin."
          icon={<Package className="h-5 w-5" />}
        />
        <InfoCard
          title="Bitcoin Support"
          description="Full Bitcoin Core v28+ RPC support with ~115 methods using CAIP-2/BIP122 chain identifiers."
          icon={<Layers className="h-5 w-5" />}
        />
      </div>

      <h2 id="supported-networks">Supported Networks</h2>

      <h3 id="evm-networks">EVM Networks</h3>
      <div className="not-prose mb-8">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Network</TableHead>
              <TableHead>Chain ID</TableHead>
              <TableHead>Client Class</TableHead>
              <TableHead>Special Features</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Ethereum</TableCell>
              <TableCell><code>1</code></TableCell>
              <TableCell><code>EthereumClient</code></TableCell>
              <TableCell>Full eth_*, web3_*, net_*, debug_*, trace_*, txpool_*</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Optimism</TableCell>
              <TableCell><code>10</code></TableCell>
              <TableCell><code>OptimismClient</code></TableCell>
              <TableCell>Ethereum + optimism_*, opp2p_*, admin_*</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>BNB Smart Chain</TableCell>
              <TableCell><code>56</code></TableCell>
              <TableCell><code>BNBClient</code></TableCell>
              <TableCell>Extended Ethereum + BSC-specific features</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>BNB Testnet</TableCell>
              <TableCell><code>97</code></TableCell>
              <TableCell><code>BNBClient</code></TableCell>
              <TableCell>Maps to BNBClient</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Polygon</TableCell>
              <TableCell><code>137</code></TableCell>
              <TableCell><code>PolygonClient</code></TableCell>
              <TableCell>Ethereum + Polygon Bor validator methods</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Base</TableCell>
              <TableCell><code>8453</code></TableCell>
              <TableCell><code>BaseClient</code></TableCell>
              <TableCell>Optimism-compatible (reuses Optimism types)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Arbitrum One</TableCell>
              <TableCell><code>42161</code></TableCell>
              <TableCell><code>ArbitrumClient</code></TableCell>
              <TableCell>Ethereum + arbtrace_* (Arbitrum traces)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Aztec</TableCell>
              <TableCell><code>677868</code></TableCell>
              <TableCell><code>AztecClient</code></TableCell>
              <TableCell>Custom node_*/nodeAdmin_* methods (non-EVM)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Hardhat</TableCell>
              <TableCell><code>31337</code></TableCell>
              <TableCell><code>EthereumClient</code></TableCell>
              <TableCell>Local development network</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Sepolia Testnet</TableCell>
              <TableCell><code>11155111</code></TableCell>
              <TableCell><code>SepoliaClient</code></TableCell>
              <TableCell>Ethereum-compatible testnet</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <h3 id="bitcoin-networks">Bitcoin Networks</h3>
      <p>
        Bitcoin uses{" "}
        <a href="https://github.com/ChainAgnostic/CAIPs/blob/main/CAIPs/caip-2.md">CAIP-2</a>
        /
        <a href="https://github.com/bitcoin/bips/blob/master/bip-0122.mediawiki">BIP122</a>
        {" "}chain identifiers instead of numeric chain IDs.
      </p>
      <div className="not-prose mb-8">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Network</TableHead>
              <TableHead>Chain ID (CAIP-2)</TableHead>
              <TableHead>Client Class</TableHead>
              <TableHead>Special Features</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Bitcoin Mainnet</TableCell>
              <TableCell><code className="text-xs">bip122:000000000019d6689c085ae165831e93</code></TableCell>
              <TableCell><code>BitcoinClient</code></TableCell>
              <TableCell>Full Bitcoin Core v28+ RPC (~115 methods)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Bitcoin Testnet3</TableCell>
              <TableCell><code className="text-xs">bip122:000000000933ea01ad0ee984209779ba</code></TableCell>
              <TableCell><code>BitcoinClient</code></TableCell>
              <TableCell>Bitcoin testnet3 network</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Bitcoin Testnet4</TableCell>
              <TableCell><code className="text-xs">bip122:00000000da84f2bafbbc53dee25a72ae</code></TableCell>
              <TableCell><code>BitcoinClient</code></TableCell>
              <TableCell>Bitcoin testnet4 (BIP94)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Bitcoin Signet</TableCell>
              <TableCell><code className="text-xs">bip122:00000008819873e925422c1ff0f99f7c</code></TableCell>
              <TableCell><code>BitcoinClient</code></TableCell>
              <TableCell>Bitcoin signet (BIP325)</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <h4 id="bitcoin-chain-id-constants">Bitcoin Chain ID Constants</h4>
      <p>
        For convenience, use the exported constants instead of raw chain ID strings:
      </p>
      <pre>
        <code>{`import {
  BITCOIN_MAINNET,
  BITCOIN_TESTNET3,
  BITCOIN_TESTNET4,
  BITCOIN_SIGNET
} from "@openscan/network-connectors";

// BITCOIN_MAINNET = "bip122:000000000019d6689c085ae165831e93"`}</code>
      </pre>

      <h4 id="bitcoin-method-categories">Bitcoin Method Categories (~115 methods)</h4>
      <div className="not-prose mb-8">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Category</TableHead>
              <TableHead>Methods</TableHead>
              <TableHead>Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Blockchain</TableCell>
              <TableCell>~15</TableCell>
              <TableCell><code>getBlockchainInfo</code>, <code>getBlock</code>, <code>getBlockHash</code>, <code>getBlockHeader</code>, <code>getBlockStats</code>, <code>getChainTips</code>, <code>getDifficulty</code>, etc.</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Mempool</TableCell>
              <TableCell>~10</TableCell>
              <TableCell><code>getMempoolInfo</code>, <code>getRawMempool</code>, <code>getMempoolEntry</code>, <code>testMempoolAccept</code>, <code>submitPackage</code>, etc.</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Raw Transactions</TableCell>
              <TableCell>~7</TableCell>
              <TableCell><code>getRawTransaction</code>, <code>decodeRawTransaction</code>, <code>decodeScript</code>, <code>sendRawTransaction</code>, <code>createRawTransaction</code>, etc.</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>PSBT</TableCell>
              <TableCell>~8</TableCell>
              <TableCell><code>createPsbt</code>, <code>decodePsbt</code>, <code>analyzePsbt</code>, <code>combinePsbt</code>, <code>finalizePsbt</code>, <code>joinPsbts</code>, etc.</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Network</TableCell>
              <TableCell>~13</TableCell>
              <TableCell><code>getNetworkInfo</code>, <code>getPeerInfo</code>, <code>getConnectionCount</code>, <code>getNetTotals</code>, <code>ping</code>, <code>addNode</code>, etc.</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Fee Estimation</TableCell>
              <TableCell>~1</TableCell>
              <TableCell><code>estimateSmartFee</code> with economical/conservative modes</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Utility</TableCell>
              <TableCell>~7</TableCell>
              <TableCell><code>validateAddress</code>, <code>getDescriptorInfo</code>, <code>deriveAddresses</code>, <code>createMultisig</code>, <code>verifyMessage</code>, etc.</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Mining</TableCell>
              <TableCell>~9</TableCell>
              <TableCell><code>getMiningInfo</code>, <code>getNetworkHashPs</code>, <code>getBlockTemplate</code>, <code>submitBlock</code>, <code>generateToAddress</code>, etc.</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Wallet</TableCell>
              <TableCell>~35</TableCell>
              <TableCell><code>getWalletInfo</code>, <code>getBalances</code>, <code>listWallets</code>, <code>sendToAddress</code>, <code>listUnspent</code>, <code>importDescriptors</code>, etc.</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Control</TableCell>
              <TableCell>~6</TableCell>
              <TableCell><code>getMemoryInfo</code>, <code>getRpcInfo</code>, <code>help</code>, <code>uptime</code>, <code>logging</code>, <code>stop</code></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <h2 id="architecture">Architecture Overview</h2>

      <h3 id="strategy-pattern">Strategy Pattern</h3>
      <p>
        The library uses the Strategy Pattern to provide flexible RPC request execution:
      </p>
      <div className="not-prose grid gap-4 sm:grid-cols-3 mb-8">
        <InfoCard
          title="FallbackStrategy"
          description="Tries RPC providers sequentially until one succeeds. Minimal overhead — stops at first success. Best for reliability when providers are generally consistent."
          icon={<RefreshCw className="h-5 w-5" />}
        />
        <InfoCard
          title="ParallelStrategy"
          description="Executes all providers concurrently. Tracks response times and detects data inconsistencies via response hashing. Best for detecting provider divergence."
          icon={<Layers className="h-5 w-5" />}
        />
        <InfoCard
          title="RaceStrategy"
          description="Executes all providers concurrently, returns first success via Promise.any. Minimizes latency. Only fails if ALL providers fail."
          icon={<Zap className="h-5 w-5" />}
        />
      </div>
      <p>
        Strategies can be configured at client creation or switched dynamically
        using <code>updateStrategy()</code>.
      </p>

      <h3 id="factory-pattern">Factory Pattern</h3>
      <p>
        The <code>ClientFactory</code> provides type-safe client instantiation based on chain IDs:
      </p>
      <pre>
        <code>{`import { ClientFactory, BITCOIN_MAINNET } from "@openscan/network-connectors";

const config = {
  type: "fallback" as const,
  rpcUrls: ["https://rpc.example.com"]
};

// EVM client (numeric chain ID)
const ethClient = ClientFactory.createClient(1, config);
// ethClient is typed as EthereumClient

// Bitcoin client (CAIP-2 chain ID)
const btcClient = ClientFactory.createClient(BITCOIN_MAINNET, config);
// btcClient is typed as BitcoinClient

// Type-safe client with network-specific methods
const arbClient = ClientFactory.createTypedClient(42161, config);
// arbClient has Arbitrum-specific methods like arbtraceBlock()`}</code>
      </pre>

      <h3 id="type-safe-clients">Type-Safe Network Clients</h3>
      <p>
        Each network has a dedicated client class extending <code>NetworkClient</code>:
      </p>
      <ul>
        <li>Fully typed with network-specific type definitions</li>
        <li>Network-specific RPC methods (e.g., Arbitrum traces, Optimism rollup methods)</li>
        <li>Inherits base Ethereum methods for compatible networks</li>
        <li>Strong TypeScript inference for return types</li>
      </ul>

      <h2 id="project-structure">Project Structure</h2>
      <pre>
        <code>{`@openscan/network-connectors/
├── src/
│   ├── strategies/          # Request execution strategies (Fallback, Parallel, Race)
│   ├── networks/            # Network-specific clients organized by chain ID
│   ├── factory/             # Client instantiation and chain ID mapping
│   ├── NetworkClient.ts     # Base network client (abstract class)
│   ├── RpcClient.ts         # Low-level JSON-RPC 2.0 client
│   ├── RpcClientTypes.ts    # Blockchain type definitions
│   └── index.ts             # Main export file
├── tests/                   # Comprehensive test suite
│   ├── strategies/          # Strategy tests
│   ├── networks/            # Network-specific client tests
│   └── helpers/             # Test utilities
├── scripts/
│   └── publish-and-tag.sh   # Automated release workflow
├── .github/workflows/
│   └── npm-publish.yml      # CI/CD automation
├── biome.json               # Linting and formatting configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Project metadata and dependencies`}</code>
      </pre>

      <h3 id="directory-purposes">Directory Purposes</h3>
      <ul>
        <li>
          <strong>src/strategies/</strong> — Implements the Strategy pattern for RPC request execution
          (<code>FallbackStrategy</code>, <code>ParallelStrategy</code>, <code>RaceStrategy</code>, <code>StrategyFactory</code>)
        </li>
        <li>
          <strong>src/networks/</strong> — Network-specific client implementations, one directory per chain ID.
          Each client extends <code>NetworkClient</code> and provides network-specific RPC methods.
        </li>
        <li>
          <strong>src/factory/</strong> — Client instantiation logic.
          <code>ClientRegistry</code> maps chain IDs to client classes with type safety.
        </li>
        <li>
          <strong>tests/</strong> — Comprehensive test coverage using Node.js native test framework with tsx.
        </li>
        <li>
          <strong>scripts/</strong> — Automation scripts for release workflows.
        </li>
      </ul>

      <h2 id="development">Development</h2>

      <h3 id="prerequisites">Prerequisites</h3>
      <ul>
        <li><strong>Node.js</strong> version 24 or higher</li>
        <li><strong>npm</strong> (comes with Node.js)</li>
      </ul>

      <h3 id="installation">Installation</h3>
      <pre>
        <code>{`npm install @openscan/network-connectors`}</code>
      </pre>

      <h3 id="commands">Available Commands</h3>
      <div className="not-prose mb-8">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Command</TableHead>
              <TableHead>Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell><code>npm install</code></TableCell>
              <TableCell>Install project dependencies</TableCell>
            </TableRow>
            <TableRow>
              <TableCell><code>npm run build</code></TableCell>
              <TableCell>Compile TypeScript to JavaScript (output: dist/)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell><code>npm run typecheck</code></TableCell>
              <TableCell>Type check without code emission</TableCell>
            </TableRow>
            <TableRow>
              <TableCell><code>npm run test</code></TableCell>
              <TableCell>Run test suite using Node.js native test runner</TableCell>
            </TableRow>
            <TableRow>
              <TableCell><code>npm run format</code></TableCell>
              <TableCell>Check code formatting (Biome)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell><code>npm run format:fix</code></TableCell>
              <TableCell>Auto-fix formatting issues</TableCell>
            </TableRow>
            <TableRow>
              <TableCell><code>npm run lint</code></TableCell>
              <TableCell>Check linting rules (Biome)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell><code>npm run lint:fix</code></TableCell>
              <TableCell>Auto-fix linting issues</TableCell>
            </TableRow>
            <TableRow>
              <TableCell><code>npm run check</code></TableCell>
              <TableCell>Combined format + lint check</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <h3 id="testing">Testing</h3>
      <pre>
        <code>{`npm run test  # Run all tests`}</code>
      </pre>
      <p>
        The project uses the Node.js native test framework with tsx for TypeScript execution.
        No external test frameworks like Jest or Mocha are required.
      </p>
      <p>Tests are organized by functionality:</p>
      <ul>
        <li>
          <strong>tests/strategies/</strong> — Strategy execution, constructor validation, response metadata, inconsistency detection
        </li>
        <li>
          <strong>tests/networks/</strong> — Client instantiation, method parameter handling, type safety, error propagation
        </li>
        <li>
          <strong>tests/helpers/</strong> — Test utilities and validation helpers
        </li>
      </ul>

      <h2 id="contributing">Contributing</h2>

      <h3 id="adding-a-new-network">Adding a New Network</h3>
      <ol>
        <li>
          <strong>Create network directory</strong> — <code>mkdir -p src/networks/&lt;CHAIN_ID&gt;</code>
        </li>
        <li>
          <strong>Define network-specific types</strong> — Create types file, extending base Ethereum types if applicable
        </li>
        <li>
          <strong>Create client class</strong> — Extend <code>NetworkClient</code>, implement
          network-specific RPC methods using <code>this.execute&lt;T&gt;(method, params)</code>
        </li>
        <li>
          <strong>Update factory</strong> — Add chain ID to <code>SupportedChainId</code> type,
          update <code>ChainIdToClient</code> mapping, and add cases to <code>createClient()</code> and <code>createTypedClient()</code>
        </li>
        <li>
          <strong>Export from index</strong> — Add exports to <code>src/index.ts</code>
        </li>
        <li>
          <strong>Add tests</strong> — Create test file in <code>tests/networks/&lt;CHAIN_ID&gt;/</code>
        </li>
      </ol>

      <h3 id="adding-rpc-methods">Adding New RPC Methods</h3>
      <pre>
        <code>{`async methodName(param1: Type1, param2?: Type2): Promise<StrategyResult<ReturnType>> {
  const params: any[] = [param1];
  if (param2 !== undefined) params.push(param2);
  return this.execute<ReturnType>("rpc_methodName", params);
}`}</code>
      </pre>

      <h3 id="code-style">Code Style Guidelines</h3>
      <p>
        This project uses <strong>Biome</strong> for linting and formatting:
      </p>
      <ul>
        <li><strong>Line Width</strong>: 100 characters</li>
        <li><strong>Indentation</strong>: 2 spaces</li>
        <li><strong>Quotes</strong>: Double quotes</li>
        <li><strong>Semicolons</strong>: Required</li>
        <li><strong>Trailing Commas</strong>: ES5 (no trailing commas in function parameters)</li>
      </ul>
      <pre>
        <code>{`npm run format:fix  # Auto-fix formatting
npm run lint:fix    # Auto-fix linting issues`}</code>
      </pre>

      <h3 id="pull-request-process">Pull Request Process</h3>
      <ol>
        <li>Fork the repository</li>
        <li>Create a feature branch: <code>git checkout -b feature/your-feature-name</code></li>
        <li>Make your changes following code style guidelines</li>
        <li>
          Run quality checks:
          <pre>
            <code>{`npm run check
npm run typecheck
npm run test`}</code>
          </pre>
        </li>
        <li>Commit: <code>git commit -m &quot;feat: description of your changes&quot;</code></li>
        <li>Push and open a pull request against the <code>main</code> branch</li>
      </ol>

      <h2 id="release-process">Release Process</h2>
      <p>
        Every push to the <code>main</code> branch triggers automatic npm publication
        via GitHub Actions. The CI/CD workflow runs on ubuntu-latest with Node.js 24
        and uses OIDC authentication for npm publishing.
      </p>
      <p>
        For manual releases, run <code>npm run release</code> from a clean <code>main</code> branch.
        The script validates the environment, runs quality checks, builds, publishes to npm,
        and creates a git tag.
      </p>
      <p>
        Follow{" "}
        <a href="https://semver.org/">Semantic Versioning</a>: MAJOR for breaking changes,
        MINOR for new features, PATCH for bug fixes.
      </p>

      <h2 id="configuration-files">Configuration</h2>
      <ul>
        <li>
          <strong>tsconfig.json</strong> — Target ES5, ESNext modules, strict mode enabled, declarations output to <code>dist/types/</code>
        </li>
        <li>
          <strong>biome.json</strong> — 100 char line width, 2-space indent, recommended linter rules with relaxed explicit any checks in test files
        </li>
        <li>
          <strong>package.json</strong> — ES module type, dual support for require/import, only <code>dist/</code> published to npm
        </li>
      </ul>
    </div>
  )
}
