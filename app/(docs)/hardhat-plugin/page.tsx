import type { Metadata } from "next"
import { PageHeader, Step, InfoCard } from "@/components/docs-components"
import { Eye, Globe, Terminal, Wrench } from "lucide-react"

export const metadata: Metadata = {
  title: "Hardhat Plugin",
  description:
    "Hardhat 3 plugin that launches the OpenScan Explorer webapp and logs transaction links with OpenScan URLs.",
}

export default function HardhatPluginPage() {
  return (
    <div className="prose">
      <PageHeader
        title="Hardhat Plugin"
        description="Hardhat 3 plugin that automatically launches the OpenScan Explorer webapp, opens your browser, and logs transaction links with OpenScan URLs."
      />

      <h2 id="features">Features</h2>
      <div className="not-prose grid gap-4 sm:grid-cols-2 mb-8">
        <InfoCard
          title="Explorer Webapp"
          description="Automatically launches the OpenScan Explorer on localhost:3030 when you start a Hardhat node."
          icon={<Eye className="h-5 w-5" />}
        />
        <InfoCard
          title="Browser Auto-Open"
          description="Opens your browser to the explorer automatically — no manual setup needed."
          icon={<Globe className="h-5 w-5" />}
        />
        <InfoCard
          title="Transaction Links"
          description="Logs transaction links with OpenScan URLs directly in your Hardhat console output."
          icon={<Terminal className="h-5 w-5" />}
        />
        <InfoCard
          title="Hardhat 3 Native"
          description="Built as a Hardhat 3 plugin using network Hook Handlers for clean integration."
          icon={<Wrench className="h-5 w-5" />}
        />
      </div>

      <h2 id="quick-start">Quick Start</h2>
      <div className="not-prose mb-8">
        <Step
          number={1}
          title="Install Dependencies"
          description="The repository is a pnpm monorepo. Make sure you have pnpm installed, then install dependencies and build."
          code={`pnpm install\npnpm build`}
        />
        <Step
          number={2}
          title="Run the Tests"
          description="Verify everything is working by running the plugin test suite."
          code="pnpm test"
        />
        <Step
          number={3}
          title="Start the Hardhat Node"
          description="Try the plugin out in the example project. This will launch the OpenScan Explorer, open your browser, and log transaction links."
          code={`cd packages/example-project\npnpm hardhat node`}
        />
      </div>
      <p>
        This will automatically:
      </p>
      <ul>
        <li>Launch the OpenScan Explorer webapp on <code>http://localhost:3030</code></li>
        <li>Open your browser to the explorer</li>
        <li>Log transaction links with OpenScan URLs</li>
      </ul>

      <h2 id="repository-structure">Repository Structure</h2>
      <p>
        The repository is structured as a pnpm monorepo with two packages:
      </p>
      <ul>
        <li>
          <strong>packages/plugin</strong> — The plugin itself, including
          the <code>src/index.ts</code> entry point and a network Hook Handler
          in <code>src/hooks/network.ts</code> that prints OpenScan links.
        </li>
        <li>
          <strong>packages/example-project</strong> — An example Hardhat 3 project
          that uses the plugin. Use it as a playground to experiment and manually test.
        </li>
      </ul>
      <pre>
        <code>{`packages/
├── plugin/
│   ├── src/
│   │   ├── index.ts           # Plugin definition and exports
│   │   └── hooks/
│   │       └── network.ts     # Network Hook Handler (prints OpenScan links)
│   ├── README.md
│   └── package.json
└── example-project/
    ├── hardhat.config.ts
    └── package.json`}</code>
      </pre>

      <h2 id="development">Development</h2>

      <h3 id="prerequisites">Prerequisites</h3>
      <ul>
        <li><strong>Node.js</strong> version 24</li>
        <li><strong>pnpm</strong> — <a href="https://pnpm.io/">pnpm.io</a></li>
      </ul>

      <h3 id="commands">Available Commands</h3>
      <p>
        Run these from the repository root:
      </p>
      <pre>
        <code>{`pnpm install   # Install all dependencies
pnpm build     # Build the plugin
pnpm test      # Run the test suite
pnpm lint      # Run linting checks
pnpm watch     # Watch mode — rebuilds on changes`}</code>
      </pre>
      <p>
        Running <code>pnpm watch</code> is helpful when using the example project.
        Keep a terminal running it so changes are rebuilt by the time you try them
        in <code>packages/example-project</code>.
      </p>

      <h3 id="tooling">Tooling</h3>
      <ul>
        <li><strong>TypeScript</strong> and <strong>ESLint</strong> — based on official recommendations with custom rules for Hardhat plugins</li>
        <li><strong>Prettier</strong> — code formatting with default configuration</li>
      </ul>

      <h2 id="ci-cd">CI/CD</h2>
      <p>
        A GitHub Actions workflow runs on every push to <code>main</code>, on pull
        requests, and when manually triggered. It runs on <code>ubuntu-latest</code> with
        Node.js 24 and executes:
      </p>
      <pre>
        <code>{`pnpm install
pnpm build
pnpm test
pnpm lint`}</code>
      </pre>
    </div>
  )
}
