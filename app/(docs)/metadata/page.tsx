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
  BookOpen,
  Coins,
  Database,
  FolderTree,
  Globe,
  Heart,
  Image,
  Tag,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Metadata",
  description:
    "Open, community-driven metadata repository for the OpenScan blockchain explorer. Tokens, networks, apps, organizations, addresses, events, and more.",
}

export default function MetadataPage() {
  return (
    <div className="prose">
      <PageHeader
        title="OpenScan Metadata"
        description="Open, community-driven metadata repository for the OpenScan blockchain explorer. Verified metadata for tokens, networks, apps, organizations, addresses, events, supporters, and donations."
      />

      <h2 id="overview">Overview</h2>
      <p>
        The <code>@openscan/metadata</code> package contains verified metadata
        displayed on the OpenScan explorer. It is published to npm and served via
        CDN, providing token info, address labels, event signatures, RPC endpoints,
        and more.
      </p>

      <div className="not-prose grid gap-4 sm:grid-cols-2 mb-8">
        <InfoCard
          title="Community-Driven"
          description="Anyone can submit metadata via pull request. Add tokens, label addresses, register events, or list your app."
          icon={<Heart className="h-5 w-5" />}
        />
        <InfoCard
          title="CDN-Delivered"
          description="Built metadata is served via jsDelivr CDN from the published npm package. No API keys, no rate limits."
          icon={<Globe className="h-5 w-5" />}
        />
        <InfoCard
          title="Schema-Validated"
          description="All submissions are validated against JSON schemas. Run npm run validate before submitting."
          icon={<Database className="h-5 w-5" />}
        />
        <InfoCard
          title="Multi-Chain"
          description="Supports EVM chains (by chain ID) and Bitcoin networks (by slug). Organized by network type."
          icon={<FolderTree className="h-5 w-5" />}
        />
      </div>

      <h2 id="structure">Repository Structure</h2>
      <pre>
        <code>{`explorer-metadata/
├── data/
│   ├── tokens/{networkType}/{id}/{address}.json
│   ├── addresses/{networkType}/{id}/{addr}.json
│   ├── events/{networkType}/{id}/common.json
│   ├── events/{networkType}/{id}/{addr}.json
│   ├── rpcs/{networkType}/{id}.json
│   ├── networks.json
│   ├── apps/{id}.json
│   ├── orgs/{id}.json
│   └── donations.json
├── profiles/
│   ├── tokens/{chainId}/{address}.md
│   ├── apps/{id}.md
│   └── organizations/{id}.md
├── assets/
│   ├── tokens/{chainId}/{address}.png    # 128x128
│   ├── networks/{chainId}.svg            # 256x256
│   ├── apps/{id}.svg                     # 256x256
│   └── organizations/{id}.svg            # 256x256
└── schemas/                              # JSON Schema definitions`}</code>
      </pre>
      <p>
        Data directories are organized by network type (<code>evm/</code>, <code>btc/</code>).
        EVM networks use chain IDs as identifiers (e.g., <code>evm/1/</code>),
        while Bitcoin networks use slugs (e.g., <code>btc/mainnet/</code>).
      </p>

      <h2 id="adding-metadata">Adding Metadata</h2>
      <h3 id="quick-start">Quick Start: Add a Token</h3>
      <pre>
        <code>{`npm install
npm run add-token`}</code>
      </pre>
      <p>Follow the interactive prompts to add a new token.</p>

      <h3 id="manual-submission">Manual Submission</h3>
      <ol>
        <li>Fork the repository</li>
        <li>Add your data file to the appropriate <code>data/</code> folder</li>
        <li>Add logo to <code>assets/</code> (see image requirements below)</li>
        <li>(Optional) Add profile markdown to <code>profiles/</code></li>
        <li>Run <code>npm run validate</code> to check your submission</li>
        <li>Submit a Pull Request using the appropriate template</li>
      </ol>

      <h2 id="data-schemas">Data Schemas</h2>

      <h3 id="token-schema">Token</h3>
      <p>
        Tokens support <strong>ERC20</strong>, <strong>ERC721</strong> (NFTs),
        and <strong>ERC1155</strong> (Multi-Token) standards. All token types
        support free listings and paid subscriptions.
      </p>

      <h4 id="free-listing">Free Listing</h4>
      <pre>
        <code>{`{
  "address": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
  "chainId": 1,
  "name": "USD Coin",
  "symbol": "USDC",
  "decimals": 6
}`}</code>
      </pre>

      <h4 id="nft-collection">NFT Collection (ERC721)</h4>
      <pre>
        <code>{`{
  "address": "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d",
  "chainId": 1,
  "type": "ERC721",
  "name": "Bored Ape Yacht Club",
  "symbol": "BAYC",
  "decimals": 0,
  "totalSupply": 10000
}`}</code>
      </pre>

      <h4 id="paid-subscription">Paid Subscription (additional features)</h4>
      <pre>
        <code>{`{
  "address": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
  "chainId": 1,
  "name": "USD Coin",
  "symbol": "USDC",
  "decimals": 6,
  "subscription": {
    "tier": 2,
    "expiresAt": "2026-01-01"
  },
  "verified": true,
  "logo": "assets/tokens/1/0x....png",
  "profile": "profiles/tokens/1/0x....md",
  "project": {
    "name": "Circle",
    "description": "USDC is a fully reserved stablecoin"
  },
  "links": [
    { "name": "Website", "url": "https://circle.com/usdc" },
    { "name": "Twitter", "url": "https://twitter.com/circle" }
  ],
  "networks": [
    { "chainId": 42161, "address": "0xaf88d065e77c8cc2239327c5edb3a432268e5831" },
    { "chainId": 10, "address": "0x0b2c639c533813f4aa9d7837caf62653d097ff85" }
  ],
  "tags": ["stablecoin", "defi"]
}`}</code>
      </pre>

      <h3 id="network-schema">Network</h3>
      <p>
        Networks are identified using{" "}
        <a href="https://github.com/ChainAgnostic/CAIPs/blob/main/CAIPs/caip-2.md">CAIP-2</a>
        {" "}chain identifiers.
      </p>

      <h4 id="evm-network">EVM Network</h4>
      <pre>
        <code>{`{
  "type": "evm",
  "networkId": "eip155:42161",
  "name": "Arbitrum One",
  "shortName": "Arbitrum",
  "description": "Ethereum Layer 2 scaling solution",
  "currency": "ETH",
  "color": "#28A0F0",
  "isTestnet": false,
  "subscription": { "tier": 2, "expiresAt": "2026-01-01" },
  "logo": "assets/networks/42161.svg",
  "rpc": { "public": ["https://arb1.arbitrum.io/rpc"] },
  "links": [
    { "name": "Website", "url": "https://arbitrum.io" },
    { "name": "Bridge", "url": "https://bridge.arbitrum.io" },
    { "name": "Docs", "url": "https://docs.arbitrum.io" }
  ]
}`}</code>
      </pre>

      <h4 id="bitcoin-network">Non-EVM Network (Bitcoin)</h4>
      <pre>
        <code>{`{
  "type": "bitcoin",
  "networkId": "bip122:000000000019d6689c085ae165831e93",
  "name": "Bitcoin Mainnet",
  "shortName": "Bitcoin",
  "description": "The original decentralized cryptocurrency network",
  "currency": "BTC",
  "color": "#F7931A",
  "isTestnet": false,
  "logo": "assets/networks/bitcoin-mainnet.svg",
  "links": [
    { "name": "Website", "url": "https://bitcoin.org" },
    { "name": "Whitepaper", "url": "https://bitcoin.org/bitcoin.pdf" }
  ]
}`}</code>
      </pre>

      <h4 id="caip-2">CAIP-2 Network Identifiers</h4>
      <div className="not-prose mb-8">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Network Type</TableHead>
              <TableHead>Format</TableHead>
              <TableHead>Example</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>EVM chains</TableCell>
              <TableCell><code>{`eip155:{chainId}`}</code></TableCell>
              <TableCell><code>eip155:1</code> (Ethereum), <code>eip155:137</code> (Polygon)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Bitcoin</TableCell>
              <TableCell><code>{`bip122:{genesisHash}`}</code></TableCell>
              <TableCell><code className="text-xs">bip122:000000000019d6689c085ae165831e93</code></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <h3 id="app-schema">App</h3>
      <pre>
        <code>{`{
  "id": "uniswap",
  "name": "Uniswap",
  "type": "dapp",
  "description": "Decentralized trading protocol",
  "subscription": { "tier": 2, "expiresAt": "2026-01-01" },
  "verified": true,
  "logo": "assets/apps/uniswap.svg",
  "profile": "profiles/apps/uniswap.md",
  "contracts": [
    { "chainId": 1, "address": "0x...", "label": "SwapRouter02" }
  ],
  "networks": [1, 42161, 10, 137],
  "links": [
    { "name": "Website", "url": "https://uniswap.org" },
    { "name": "App", "url": "https://app.uniswap.org" },
    { "name": "Docs", "url": "https://docs.uniswap.org" }
  ],
  "tags": ["defi", "dex", "amm"]
}`}</code>
      </pre>

      <h3 id="organization-schema">Organization</h3>
      <pre>
        <code>{`{
  "id": "ethereum-foundation",
  "name": "Ethereum Foundation",
  "type": "foundation",
  "description": "Supporting Ethereum development",
  "subscription": { "tier": 3, "expiresAt": "2026-01-01" },
  "logo": "assets/organizations/ethereum-foundation.svg",
  "profile": "profiles/organizations/ethereum-foundation.md",
  "links": [
    { "name": "Website", "url": "https://ethereum.foundation" },
    { "name": "Blog", "url": "https://blog.ethereum.org" },
    { "name": "Twitter", "url": "https://twitter.com/ethereum" }
  ]
}`}</code>
      </pre>

      <h3 id="address-schema">Address</h3>
      <pre>
        <code>{`{
  "address": "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
  "chainId": 1,
  "supporter": "uniswap",
  "label": "Router V2"
}`}</code>
      </pre>
      <ul>
        <li><strong>address</strong> — checksummed contract address</li>
        <li><strong>chainId</strong> — chain ID where the address is deployed</li>
        <li><strong>supporter</strong> — ID of the app or organization</li>
        <li><strong>label</strong> — optional human-readable label</li>
      </ul>

      <h3 id="event-schema">Event</h3>
      <p>
        Events are stored per chain. Common events (ERC20 Transfer, Approval, etc.)
        go in <code>common.json</code>, and address-specific events go in <code>{`{address}.json`}</code>.
      </p>
      <pre>
        <code>{`// common.json — standard events
{
  "0xddf252ad...": {
    "event": "Transfer(address,address,uint256)",
    "description": "ERC20/ERC721 token transfer."
  },
  "0x8c5be1e5...": {
    "event": "Approval(address,address,uint256)",
    "description": "ERC20/ERC721 approval granted."
  }
}

// {address}.json — contract-specific events
{
  "0xd78ad95f...": {
    "event": "Swap(address,uint256,uint256,uint256,uint256,address)",
    "description": "Token swap executed."
  }
}`}</code>
      </pre>

      <h3 id="supporter-schema">Supporter</h3>
      <pre>
        <code>{`{
  "id": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
  "type": "token",
  "networkId": "eip155:1",
  "name": "USD Coin (USDC)",
  "startedAt": "2025-01-01",
  "currentTier": 2,
  "expiresAt": "2026-01-01",
  "history": [
    { "tier": 2, "from": "2025-01-01", "to": "2026-01-01" }
  ]
}`}</code>
      </pre>

      <h3 id="donation-schema">Donation</h3>
      <pre>
        <code>{`{
  "from": "vitalik.eth",
  "amount": "1 ETH",
  "transaction": "0x1234...abcdef",
  "chainId": 1,
  "message": "Keep building the open web!",
  "date": "2025-12-01"
}`}</code>
      </pre>
      <p>
        Individual donations are welcome. When you donate through the OpenScan
        payment contract, you can include a message (max 500 characters) that will
        be permanently recorded in the repository.
      </p>

      <h2 id="subscription-tiers">Subscription Tiers</h2>
      <p>
        Tiers are represented as integers:
      </p>
      <ul>
        <li><strong>1 = Backer</strong> — entry-level support (base price)</li>
        <li><strong>2 = Partner</strong> — enhanced benefits and visibility (3x Backer price)</li>
        <li><strong>3 = Ally</strong> — full partnership with direct team access (6x Backer price)</li>
      </ul>

      <h3 id="token-tiers">Tokens</h3>
      <div className="not-prose mb-8">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Tier</TableHead>
              <TableHead>Monthly Rate</TableHead>
              <TableHead>Key Benefits</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell><strong>Backer</strong> (Tier 1)</TableCell>
              <TableCell>$500</TableCell>
              <TableCell>Token page with ERC20 details, project name, custom URLs. Verified and tagged contracts.</TableCell>
            </TableRow>
            <TableRow>
              <TableCell><strong>Partner</strong> (Tier 2)</TableCell>
              <TableCell>$1,500</TableCell>
              <TableCell>Token balance shown on main explorer. Simple profile page.</TableCell>
            </TableRow>
            <TableRow>
              <TableCell><strong>Ally</strong> (Tier 3)</TableCell>
              <TableCell>$3,000</TableCell>
              <TableCell>Complete profile page with markdown. Direct communication with technical team.</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <h3 id="network-tiers">Networks</h3>
      <div className="not-prose mb-8">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Tier</TableHead>
              <TableHead>Monthly Rate</TableHead>
              <TableHead>Key Benefits</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell><strong>Backer</strong> (Tier 1)</TableCell>
              <TableCell>$2,000</TableCell>
              <TableCell>Complete profile page. Priority placement on home page.</TableCell>
            </TableRow>
            <TableRow>
              <TableCell><strong>Partner</strong> (Tier 2)</TableCell>
              <TableCell>$6,000</TableCell>
              <TableCell>Dedicated subdomain explorer. Multiple network listing. Direct team communication.</TableCell>
            </TableRow>
            <TableRow>
              <TableCell><strong>Ally</strong> (Tier 3)</TableCell>
              <TableCell>$12,000</TableCell>
              <TableCell>Roadmap voting power. Network-specific features in dedicated explorer.</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <h3 id="app-tiers">Apps</h3>
      <div className="not-prose mb-8">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Tier</TableHead>
              <TableHead>Monthly Rate</TableHead>
              <TableHead>Key Benefits</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell><strong>Backer</strong> (Tier 1)</TableCell>
              <TableCell>$1,000</TableCell>
              <TableCell>Simple profile page. Verified and tagged contracts. Contract events listing.</TableCell>
            </TableRow>
            <TableRow>
              <TableCell><strong>Partner</strong> (Tier 2)</TableCell>
              <TableCell>$3,000</TableCell>
              <TableCell>OpenScan subdomain. Complete profile.</TableCell>
            </TableRow>
            <TableRow>
              <TableCell><strong>Ally</strong> (Tier 3)</TableCell>
              <TableCell>$6,000</TableCell>
              <TableCell>Roadmap voting power. Direct communication with technical team.</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <h3 id="organization-tiers">Organizations</h3>
      <div className="not-prose mb-8">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Tier</TableHead>
              <TableHead>Monthly Rate</TableHead>
              <TableHead>Key Benefits</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell><strong>Backer</strong> (Tier 1)</TableCell>
              <TableCell>$500</TableCell>
              <TableCell>Simple profile page. Verified and tagged contracts. Contract events listing.</TableCell>
            </TableRow>
            <TableRow>
              <TableCell><strong>Partner</strong> (Tier 2)</TableCell>
              <TableCell>$1,500</TableCell>
              <TableCell>Complete profile. OpenScan subdomain.</TableCell>
            </TableRow>
            <TableRow>
              <TableCell><strong>Ally</strong> (Tier 3)</TableCell>
              <TableCell>$3,000</TableCell>
              <TableCell>Roadmap voting power. Direct communication with technical team.</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <h3 id="profile-limits">Profile Limits</h3>
      <div className="not-prose mb-8">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Entity Type</TableHead>
              <TableHead>Simple Profile</TableHead>
              <TableHead>Complete Profile</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Tokens</TableCell>
              <TableCell>&le;1,000 characters (Tier 2)</TableCell>
              <TableCell>Unlimited markdown (Tier 3)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Networks</TableCell>
              <TableCell>Unlimited markdown (all tiers)</TableCell>
              <TableCell>Unlimited markdown (all tiers)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Apps</TableCell>
              <TableCell>&le;1,000 characters (Tier 1)</TableCell>
              <TableCell>Unlimited markdown (Tier 2+)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Organizations</TableCell>
              <TableCell>&le;1,000 characters (Tier 1)</TableCell>
              <TableCell>Unlimited markdown (Tier 2+)</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <h2 id="image-requirements">Image Requirements</h2>
      <div className="not-prose mb-8">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Type</TableHead>
              <TableHead>Format</TableHead>
              <TableHead>Size</TableHead>
              <TableHead>Max File Size</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Tokens</TableCell>
              <TableCell>PNG</TableCell>
              <TableCell>128x128px</TableCell>
              <TableCell>50KB</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Networks</TableCell>
              <TableCell>SVG (preferred)</TableCell>
              <TableCell>256x256px</TableCell>
              <TableCell>100KB</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Apps</TableCell>
              <TableCell>SVG (preferred)</TableCell>
              <TableCell>256x256px</TableCell>
              <TableCell>100KB</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Organizations</TableCell>
              <TableCell>SVG (preferred)</TableCell>
              <TableCell>256x256px</TableCell>
              <TableCell>100KB</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <p>
        Run <code>npm run optimize-images</code> to automatically optimize images.
      </p>

      <h2 id="api">API</h2>
      <p>
        The built metadata is available via jsDelivr CDN from the published npm package.
      </p>

      <h3 id="base-url">Base URL</h3>
      <pre>
        <code>{`https://cdn.jsdelivr.net/npm/@openscan/metadata/dist`}</code>
      </pre>
      <p>
        Pin to a specific version: <code>{`https://cdn.jsdelivr.net/npm/@openscan/metadata@1.0.0/dist`}</code>
      </p>

      <h3 id="distribution-structure">Distribution Structure</h3>
      <pre>
        <code>{`dist/
├── tokens/{networkType}/{id}/
│   ├── all.json              # All tokens (basic info)
│   └── {address}.json        # Individual token details
├── addresses/{networkType}/{id}/
│   ├── all.json              # All addresses (basic info)
│   └── {address}.json        # Individual address details
├── events/{networkType}/{id}/
│   ├── common.json           # Common events (ERC20, etc.)
│   └── {address}.json        # Address-specific events
├── rpcs/
│   ├── all.json              # All RPC endpoint summaries
│   ├── evm/{chainId}.json    # Per EVM chain
│   └── btc/{slug}.json       # Per Bitcoin network
├── networks.json
├── apps.json
├── organizations.json
├── supporters.json
├── donations.json
├── manifest.json             # Build metadata
├── profiles/                 # Markdown profiles
└── assets/                   # Images and logos`}</code>
      </pre>

      <h3 id="example-requests">Example Requests</h3>
      <pre>
        <code>{`# Networks, apps, supporters, donations
curl .../dist/networks.json
curl .../dist/apps.json
curl .../dist/supporters.json
curl .../dist/donations.json

# Tokens — list all on Ethereum mainnet
curl .../dist/tokens/evm/1/all.json

# Tokens — specific token details
curl .../dist/tokens/evm/1/0xa0b8...eb48.json

# Addresses — list all on Ethereum mainnet
curl .../dist/addresses/evm/1/all.json

# Events — common events for a chain
curl .../dist/events/evm/1/common.json

# RPCs — all summaries or per-chain
curl .../dist/rpcs/all.json
curl .../dist/rpcs/evm/1.json
curl .../dist/rpcs/btc/mainnet.json

# Profiles and assets
curl .../dist/profiles/tokens/1/0x....md
curl .../dist/assets/tokens/1/0x....png`}</code>
      </pre>

      <h2 id="development">Development</h2>
      <pre>
        <code>{`npm install               # Install dependencies
npm run validate          # Validate all metadata
npm run optimize-images   # Optimize images
npm run build             # Build distribution
npm run add-token         # Add a token interactively`}</code>
      </pre>
    </div>
  )
}
