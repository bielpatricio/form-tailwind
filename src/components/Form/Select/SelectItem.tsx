'use client'

import * as SelectRadix from '@radix-ui/react-select'
import { Check } from 'lucide-react'

export type SelectItemProps = SelectRadix.SelectItemProps & {
  text: string
}

export function SelectItem({ text, ...props }: SelectItemProps) {
  return (
    <SelectRadix.Item
      className="flex items-center justify-between  gap-2 px-3 py-2.5 outline-none data-[highlighted]:cursor-pointer data-[highlighted]:bg-zinc-50"
      {...props}
    >
      <SelectRadix.ItemText className="text-black">{text}</SelectRadix.ItemText>

      <SelectRadix.ItemIndicator>
        <Check className="h-4 w-4 text-violet-500" />
      </SelectRadix.ItemIndicator>
    </SelectRadix.Item>
  )
}
