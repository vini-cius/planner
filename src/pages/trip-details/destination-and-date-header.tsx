/* eslint-disable prettier/prettier */
import { MapPinIcon, CalendarIcon, Settings2Icon } from 'lucide-react'
import { Button } from '../../components/button'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { api } from '../../lib/axios'
import { format } from 'date-fns'

interface Trip {
  id: string
  destination: string
  starts_at: string
  ends_at: string
  is_confirmed: boolean
}

export function DestinationAndDateHeader() {
  const [trip, setTrip] = useState<Trip | undefined>()

  const { tripId } = useParams()

  useEffect(() => {
    async function getDetails() {
      const response = await api.get(`trips/${tripId}`)

      setTrip(response.data.trip)
    }

    getDetails()
  }, [tripId])

  const displayedDate = trip
    ? format(trip.starts_at, "dd' de 'LLL")
      .concat(' até ')
      .concat(format(trip.ends_at, "dd' de 'LLL"))
    : null

  return (
    <div className="px-4 h-16 rounded-xl bg-zinc-900 shadow-shape flex items-center justify-between">
      <div className="flex items-center gap-2">
        <MapPinIcon className="size-5 text-zinc-400" />
        <span className="text-zinc-100">{trip?.destination}</span>
      </div>

      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2">
          <CalendarIcon className="size-5 text-zinc-400" />
          <span className="text-zinc-100">{displayedDate}</span>
        </div>

        <div className="w-px h-6 bg-zinc-800" />

        <Button variant="secondary">
          Alterar local/data
          <Settings2Icon className="size-5" />
        </Button>
      </div>
    </div>
  )
}
