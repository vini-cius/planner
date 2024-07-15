import { CheckCircle2Icon, CircleDashedIcon, UserCogIcon } from 'lucide-react'
import { Button } from '../../components/button'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../../lib/axios'

interface Participant {
  id: string
  name: string | null
  email: string
  is_confirmed: boolean
}

export function Guests() {
  const [participants, setParticipantsTrip] = useState<Participant[]>([])

  const { tripId } = useParams()

  useEffect(() => {
    async function getDetails() {
      const response = await api.get(`trips/${tripId}/participants`)

      setParticipantsTrip(response.data.participants)
    }

    getDetails()
  }, [tripId])

  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Convidados</h2>

      <div className="space-y-5">
        {participants.map((participant, index) => (
          <div
            key={participant.id}
            className="flex items-center justify-between gap-4"
          >
            <div className="space-y-1.5">
              <span className="block font-medium text-zinc-100">
                {participant.name ?? `Convidado ${index}`}
              </span>
              <span className="block text-sm text-zinc-400 truncate">
                {participant.email}
              </span>
            </div>

            {participant.is_confirmed ? (
              <CheckCircle2Icon className="text-green-400 size-5 shrink-0" />
            ) : (
              <CircleDashedIcon className="text-zinc-400 size-5 shrink-0" />
            )}
          </div>
        ))}
      </div>

      <Button variant="secondary" size="full">
        <UserCogIcon className="size-5" />
        Gerenciar convidados
      </Button>
    </div>
  )
}
