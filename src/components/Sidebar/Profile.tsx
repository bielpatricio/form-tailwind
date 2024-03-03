import { LogOut } from 'lucide-react'
import { Button } from '../Button'

export function Profile() {
  return (
    <div className="flex items-center gap-3">
      <img
        src="https://github.com/bielpatricio.png"
        className="h-10 w-10 rounded-full"
        alt=""
      />

      <div className="flex flex-1 flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-100">
          Gabriel Patricio
        </span>
        <span className=" truncate text-sm text-zinc-500 dark:text-zinc-400">
          gabrielpatricio@psoft.com
        </span>
      </div>

      <Button type="button" variant="ghost">
        <LogOut className="h-5 w-5 text-zinc-500 group-hover:text-red-400" />
      </Button>
    </div>
  )
}
