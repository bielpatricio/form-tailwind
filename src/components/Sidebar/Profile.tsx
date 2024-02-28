import { LogOut } from 'lucide-react'

export function Profile() {
  return (
    <div className="grid-cols-profile grid items-center gap-3">
      <img
        src="https://github.com/bielpatricio.png"
        className="h-10 w-10 rounded-full"
        alt=""
      />

      <div className="flex flex-1 flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">
          Gabriel Patricio
        </span>
        <span className=" truncate text-sm text-zinc-500">
          gabrielpatricio@psoft.com
        </span>
      </div>

      <button
        type="button"
        className="group ml-auto rounded-md p-2 hover:bg-zinc-50"
      >
        <LogOut className="h-5 w-5 text-zinc-500 group-hover:text-red-400" />
      </button>
    </div>
  )
}
