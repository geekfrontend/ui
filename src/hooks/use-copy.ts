"use client"

import { useCallback, useState } from "react"

export function useCopy(timeout = 1600) {
  const [copied, setCopied] = useState(false)
  const copy = useCallback(
    async (text: string) => {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), timeout)
    },
    [timeout],
  )
  return { copied, copy }
}
