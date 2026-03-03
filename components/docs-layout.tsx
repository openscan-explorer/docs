import { DocsSidebar, MobileNav } from "@/components/docs-sidebar"

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col lg:flex-row">
      <DocsSidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <MobileNav />
        <main className="flex-1 px-4 py-8 sm:px-6 lg:px-12 lg:py-12">
          <div className="mx-auto max-w-3xl">{children}</div>
        </main>
        <footer className="border-t border-border px-4 py-6 sm:px-6 lg:px-12">
          <div className="mx-auto max-w-3xl">
            <p className="text-sm text-muted-foreground">
              Built by OpenScan. The source code is available on GitHub.
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}
