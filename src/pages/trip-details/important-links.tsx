import { Link2Icon, PlusIcon } from 'lucide-react'
import { Button } from '../../components/button'

export function ImportantLinks() {
  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Links importantes</h2>

      <div className="space-y-5">
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="block font-medium text-zinc-100">
              Reserva do AirBnB
            </span>
            <a
              href="https://www.airbnb.com.br/rooms/104700011"
              className="block text-xs text-zinc-400 truncate hover:text-zinc-200"
            >
              https://www.airbnb.com.br/rooms/104700011ssssssssssssssssssssssssssssssssssssss
            </a>
          </div>

          <Link2Icon className="text-zinc-400 size-5 shrink-0" />
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="block font-medium text-zinc-100">
              Reserva do AirBnB
            </span>
            <a
              href="https://www.airbnb.com.br/rooms/104700011"
              className="block text-xs text-zinc-400 truncate hover:text-zinc-200"
            >
              https://www.airbnb.com.br/rooms/104700011ssssssssssssssssssssssssssssssssssssss
            </a>
          </div>

          <Link2Icon className="text-zinc-400 size-5 shrink-0" />
        </div>
      </div>

      <Button variant="secondary" size="full">
        <PlusIcon className="size-5" />
        Cadastrar novo link
      </Button>
    </div>
  )
}
