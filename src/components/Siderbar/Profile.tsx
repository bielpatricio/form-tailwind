import { LogOut } from 'lucide-react'

export function Profile() {
  return (
    <div className="grid items-center gap-3 grid-cols-profile">
      <img
        src="https://github.com/bielpatricio.png"
        className="w-10 h-10 rounded-full"
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
        className="group ml-auto p-2 hover:bg-zinc-50 rounded-md"
      >
        <LogOut className="w-5 h-5 text-zinc-500 group-hover:text-red-400" />
      </button>
    </div>
  )
}
