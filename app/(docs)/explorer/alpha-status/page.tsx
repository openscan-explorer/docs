import type { Metadata } from "next"
import Link from "next/link"
import { PageHeader } from "@/components/docs-components"

export const metadata: Metadata = {
  title: "Explorer Alpha Status",
  description:
    "What alpha release means for openscan.eth.link during early development and community feedback.",
}

export default function ExplorerAlphaStatusPage() {
  return (
    <div className="prose">
      <PageHeader
        title="Explorer Alpha Status"
        description="openscan.eth.link is currently in alpha release. It is not production-ready yet and is focused on early validation."
      />

      <h2 id="what-alpha-means">What Alpha Means</h2>
      <p>
        This alpha stage exists to validate the first version of OpenScan in
        real usage and improve it quickly with community input.
      </p>

      <h2 id="current-goals">Current Goals</h2>
      <ul>
        <li>Test the explorer's core and initial functionalities.</li>
        <li>Collect community feedback on functionality and user experience.</li>
        <li>Iterate rapidly based on user feedback.</li>
      </ul>

      <h2 id="what-to-expect">What to Expect</h2>
      <ul>
        <li>Some features may be incomplete or change quickly.</li>
        <li>Temporary bugs and rough edges are expected in this stage.</li>
        <li>Frequent improvements will be shipped as feedback comes in.</li>
      </ul>

      <h2 id="long-term-goal">Long-Term Goal</h2>
      <p>
        The long-term objective is to deliver a production-ready explorer for
        all supported networks in future releases.
      </p>

      <h2 id="tutorial-links">Tutorial Links</h2>
      <p>
        If you want to learn more and explore the product in depth, start with
        these guides:
      </p>
      <ul>
        <li>
          <Link href="/tutorials" className="text-accent">
            Tutorials
          </Link>{" "}
          — Follow step-by-step guides, including the Hardhat plugin tutorial.
        </li>
        <li>
          <Link href="/how-it-works" className="text-accent">
            How It Works
          </Link>{" "}
          — Understand how OpenScan fetches and renders on-chain data.
        </li>
        <li>
          <Link href="/explorer/functionalities" className="text-accent">
            Explorer Functionalities
          </Link>{" "}
          — Browse all currently available explorer features.
        </li>
      </ul>
    </div>
  )
}
