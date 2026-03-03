import type { Metadata } from "next"
import { PageHeader } from "@/components/docs-components"

export const metadata: Metadata = {
  title: "Tutorials",
  description:
    "Step-by-step OpenScan tutorials. Currently includes the Hardhat plugin tutorial.",
}

export default function TutorialsPage() {
  return (
    <div className="prose">
      <PageHeader
        title="Tutorials"
        description="Hands-on guides for OpenScan. More tutorials will be added over time."
        badge="Guides"
      />

      <h2 id="available-tutorials">Available Tutorials</h2>
      <p>
        Welcome to the OpenScan tutorials page! Here you'll find step-by-step guides to help you get started with OpenScan and its various features. Whether you're new to OpenScan or looking to deepen your understanding, these tutorials will provide you with practical insights and hands-on experience.
      </p>
      <ul>
        <li>
          <a
            href="https://medium.com/@mati-os/openscan-hardhat-3-plugin-df43274217c7"
            target="_blank"
            rel="noreferrer"
            className="text-accent"
          >
            Setting up OpenScan Hardhat 3 Plugin
          </a>
        </li>
      </ul>
    </div>
  )
}
