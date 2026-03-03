import type { Metadata } from "next"
import { PageHeader } from "@/components/docs-components"
import { Check, Minus, X } from "lucide-react"

export const metadata: Metadata = {
  title: "Comparison",
  description:
    "See how Acme compares to alternatives across features, pricing, performance, and more.",
}

function FeatureIcon({ status }: { status: "yes" | "no" | "partial" }) {
  if (status === "yes") {
    return (
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/15">
        <Check className="h-3.5 w-3.5 text-accent" />
      </span>
    )
  }
  if (status === "partial") {
    return (
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-muted">
        <Minus className="h-3.5 w-3.5 text-muted-foreground" />
      </span>
    )
  }
  return (
    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-destructive/15">
      <X className="h-3.5 w-3.5 text-destructive-foreground" />
    </span>
  )
}

type FeatureStatus = "yes" | "no" | "partial"

interface ComparisonRow {
  feature: string
  acme: FeatureStatus
  alternativeA: FeatureStatus
  alternativeB: FeatureStatus
}

const features: ComparisonRow[] = [
  { feature: "Self-hosting support", acme: "yes", alternativeA: "partial", alternativeB: "no" },
  { feature: "Edge computing", acme: "yes", alternativeA: "yes", alternativeB: "no" },
  { feature: "Custom pipelines", acme: "yes", alternativeA: "no", alternativeB: "partial" },
  { feature: "Real-time webhooks", acme: "yes", alternativeA: "yes", alternativeB: "yes" },
  { feature: "SOC 2 Type II", acme: "yes", alternativeA: "yes", alternativeB: "no" },
  { feature: "Multi-region replication", acme: "yes", alternativeA: "partial", alternativeB: "no" },
  { feature: "Custom connectors", acme: "yes", alternativeA: "no", alternativeB: "partial" },
  { feature: "Open source core", acme: "yes", alternativeA: "no", alternativeB: "yes" },
  { feature: "GraphQL API", acme: "yes", alternativeA: "yes", alternativeB: "partial" },
  { feature: "Audit logs", acme: "yes", alternativeA: "partial", alternativeB: "no" },
  { feature: "SSO / SAML", acme: "yes", alternativeA: "yes", alternativeB: "partial" },
  { feature: "Unlimited team members", acme: "yes", alternativeA: "no", alternativeB: "yes" },
]

export default function ComparisonPage() {
  return (
    <div className="prose">
      <PageHeader
        title="Comparison"
        description="An honest look at how Acme stacks up against the most popular alternatives. We let the features speak for themselves."
      />

      <h2 id="feature-comparison">Feature Comparison</h2>
      <p>
        A side-by-side comparison of core features across Acme and two leading
        alternatives:
      </p>

      <div className="not-prose mb-10 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="py-3 pr-4 text-left font-semibold text-foreground">
                Feature
              </th>
              <th className="px-4 py-3 text-center font-semibold text-accent">
                Acme
              </th>
              <th className="px-4 py-3 text-center font-semibold text-muted-foreground">
                Alternative A
              </th>
              <th className="px-4 py-3 text-center font-semibold text-muted-foreground">
                Alternative B
              </th>
            </tr>
          </thead>
          <tbody>
            {features.map((row) => (
              <tr
                key={row.feature}
                className="border-b border-border/50 last:border-0"
              >
                <td className="py-3 pr-4 text-muted-foreground">
                  {row.feature}
                </td>
                <td className="px-4 py-3">
                  <div className="flex justify-center">
                    <FeatureIcon status={row.acme} />
                  </div>
                </td>
                <td className="px-4 py-3">
                  <div className="flex justify-center">
                    <FeatureIcon status={row.alternativeA} />
                  </div>
                </td>
                <td className="px-4 py-3">
                  <div className="flex justify-center">
                    <FeatureIcon status={row.alternativeB} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 id="pricing">Pricing Overview</h2>
      <p>
        Acme offers transparent, predictable pricing with no hidden fees.
        Here is how the plans compare:
      </p>

      <div className="not-prose mb-10 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="py-3 pr-4 text-left font-semibold text-foreground">
                Plan
              </th>
              <th className="px-4 py-3 text-center font-semibold text-accent">
                Acme
              </th>
              <th className="px-4 py-3 text-center font-semibold text-muted-foreground">
                Alternative A
              </th>
              <th className="px-4 py-3 text-center font-semibold text-muted-foreground">
                Alternative B
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border/50">
              <td className="py-3 pr-4 text-muted-foreground">Free tier</td>
              <td className="px-4 py-3 text-center text-foreground">
                10K events/mo
              </td>
              <td className="px-4 py-3 text-center text-muted-foreground">
                5K events/mo
              </td>
              <td className="px-4 py-3 text-center text-muted-foreground">
                1K events/mo
              </td>
            </tr>
            <tr className="border-b border-border/50">
              <td className="py-3 pr-4 text-muted-foreground">Pro</td>
              <td className="px-4 py-3 text-center text-foreground">
                $29/mo
              </td>
              <td className="px-4 py-3 text-center text-muted-foreground">
                $49/mo
              </td>
              <td className="px-4 py-3 text-center text-muted-foreground">
                $39/mo
              </td>
            </tr>
            <tr className="border-b border-border/50">
              <td className="py-3 pr-4 text-muted-foreground">Enterprise</td>
              <td className="px-4 py-3 text-center text-foreground">
                Custom
              </td>
              <td className="px-4 py-3 text-center text-muted-foreground">
                Custom
              </td>
              <td className="px-4 py-3 text-center text-muted-foreground">
                Custom
              </td>
            </tr>
            <tr>
              <td className="py-3 pr-4 text-muted-foreground">Self-hosted</td>
              <td className="px-4 py-3 text-center text-foreground">Free</td>
              <td className="px-4 py-3 text-center text-muted-foreground">
                Enterprise only
              </td>
              <td className="px-4 py-3 text-center text-muted-foreground">
                N/A
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="performance">Performance Benchmarks</h2>
      <p>
        Independent benchmarks comparing request latency and throughput across
        platforms (lower is better for latency, higher is better for throughput):
      </p>
      <ul>
        <li>
          <strong>P50 Latency</strong> — Acme: 12ms | Alternative A: 28ms |
          Alternative B: 45ms
        </li>
        <li>
          <strong>P99 Latency</strong> — Acme: 48ms | Alternative A: 120ms |
          Alternative B: 230ms
        </li>
        <li>
          <strong>Throughput</strong> — Acme: 50K req/s | Alternative A: 30K
          req/s | Alternative B: 15K req/s
        </li>
        <li>
          <strong>Cold Start</strong> — Acme: 85ms | Alternative A: 200ms |
          Alternative B: 350ms
        </li>
      </ul>

      <h2 id="why-acme">Why Choose Acme</h2>
      <p>
        Acme stands out through a combination of features that no single
        alternative matches:
      </p>
      <ul>
        <li>
          <strong>True self-hosting</strong> — Full feature parity between cloud
          and self-hosted deployments, with no vendor lock-in.
        </li>
        <li>
          <strong>Open source core</strong> — Transparent codebase with an
          active community and regular contributions.
        </li>
        <li>
          <strong>Developer experience</strong> — First-class SDKs, comprehensive
          documentation, and responsive support.
        </li>
        <li>
          <strong>Enterprise ready</strong> — SOC 2, SSO/SAML, audit logs, and
          dedicated support out of the box.
        </li>
      </ul>
    </div>
  )
}
