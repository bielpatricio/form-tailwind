'use client'

import { ComponentProps } from 'react'

export type TextareaProps = ComponentProps<'textarea'>

export function Textarea({ ...props }: TextareaProps) {
  return (
    <textarea
      className="min-h-[120px] w-full resize-y rounded-lg border border-zinc-300 px-3 py-2 text-sm font-normal text-zinc-700 shadow-sm outline-none focus:border-violet-300 focus:border-violet-600 focus:ring-4 focus:ring-violet-100 focus:ring-violet-600"
      {...props}
    />
  )
}
