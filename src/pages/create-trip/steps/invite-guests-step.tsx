import { ArrowRightIcon, UserRoundPlusIcon } from 'lucide-react'
import { Button } from '../../../components/button'

interface InviteGuestsStepProps {
  openGuestsModal: () => void
  openConfirmTripModal: () => void
  emailsToInvite: string[]
}

export function InviteGuestsStep({
  emailsToInvite,
  openGuestsModal,
  openConfirmTripModal,
}: InviteGuestsStepProps) {
  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
      <button
        type="button"
        className="flex items-center gap-2 flex-1"
        onClick={openGuestsModal}
      >
        <UserRoundPlusIcon className="size-5 text-zinc-400" />

        {emailsToInvite.length > 0 ? (
          <span className="text-zinc-100 text-lg flex-1 text-left">
            {emailsToInvite.length} pessoa(s) convidada(s)
          </span>
        ) : (
          <span className="text-zinc-400 text-lg flex-1 text-left">
            Quem estará na viagem?
          </span>
        )}
      </button>

      <div className="w-px h-6 bg-zinc-800" />

      <Button type="button" variant="primary" onClick={openConfirmTripModal}>
        Confirmar viagem
        <ArrowRightIcon className="size-5" />
      </Button>
    </div>
  )
}
