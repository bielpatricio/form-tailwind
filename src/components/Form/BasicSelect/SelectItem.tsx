'use client'

import * as SelectRadix from '@radix-ui/react-select'
import { Check } from 'lucide-react'

export type SelectItemProps = SelectRadix.SelectItemProps & {
  text: string
}

export function SelectItem({ text, ...props }: SelectItemProps) {
  return (
    <SelectRadix.Item
      className="flex h-11 w-full items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm outline-none focus:border-violet-300 focus:ring-4 focus:ring-violet-100 data-[highlighted]:cursor-pointer data-[placeholder]:text-zinc-600 dark:border-zinc-700 dark:bg-zinc-800 dark:focus-within:border-violet-500 dark:focus-within:ring-violet-500/20 dark:data-[placeholder]:text-zinc-400"
      {...props}
    >
      <SelectRadix.ItemText asChild>
        <span className="text-black dark:text-zinc-100">{text}</span>
      </SelectRadix.ItemText>

      <SelectRadix.ItemIndicator>
        <Check className="h-4 w-4 text-violet-500 dark:text-violet-300" />
      </SelectRadix.ItemIndicator>
    </SelectRadix.Item>
  )
}
