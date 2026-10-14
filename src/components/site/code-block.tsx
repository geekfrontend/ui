import { Copy } from "lucide-react"

// UI / Code Block — wrapper + dark panel. Swap <pre> for Shiki output when wiring highlighting.
export function CodeBlock({ file, code }: { file?: string; code: string }) {
  return (
    <div className="flex flex-col gap-2 rounded-2xl bg-ui-card p-2 elevation-wrapper">
      <div className="flex items-center justify-between px-2">
        <span className="font-mono text-xs text-site-soft">{file ?? "Terminal"}</span>
        <Copy className="size-3.5 text-site-soft" />
      </div>
      <pre className="overflow-x-auto rounded-lg bg-code-bg px-4 py-3.5 font-mono text-[13px] text-[#ededed]">
        <code>{code}</code>
      </pre>
    </div>
  )
}
