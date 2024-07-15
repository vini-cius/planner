import { CircleCheckIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../../lib/axios'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

interface Activity {
  date: string
  activities: {
    id: string
    title: string
    occurs_at: string
  }[]
}

export function Activities() {
  const [activities, setActivities] = useState<Activity[]>([])

  const { tripId } = useParams()

  useEffect(() => {
    async function getDetails() {
      const response = await api.get(`trips/${tripId}/activities`)

      setActivities(response.data.activities)
    }

    getDetails()
  }, [tripId])

  return (
    <div className="space-y-8">
      {activities.map((activity) => (
        <div key={activity.date} className="space-y-2.5">
          <div className="flex gap-2 items-baseline">
            <span className="text-xl text-zinc-300">
              Dia {format(activity.date, 'dd')}
            </span>
            <span className="text-xs text-zinc-500">
              {format(activity.date, 'EEEE', { locale: ptBR })}
            </span>
          </div>

          {activity.activities.length > 0 ? (
            <div>
              {activity.activities.map((item) => (
                <div key={item.id} className="space-y-2.5">
                  <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
                    <CircleCheckIcon className="size-5 text-lime-300" />

                    <span className="text-zinc-100">{item.title}</span>
                    <span className="text-zinc-400 ml-auto">
                      {' '}
                      {format(item.occurs_at, 'HH:mm')}h
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-zinc-500 text-sm">
              Nenhuma atividade cadastrada nessa data.
            </p>
          )}
        </div>
      ))}

      <div className="space-y-2.5">
        <div className="flex gap-2 items-baseline">
          <span className="text-xl text-zinc-300">Dia 18</span>
          <span className="text-xs text-zinc-500">Domingo</span>
        </div>

        <div className="space-y-2.5">
          <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
            <CircleCheckIcon className="size-5 text-lime-300" />

            <span className="text-zinc-100">Universal Studios</span>
            <span className="text-zinc-400 ml-auto">09:00h</span>
          </div>
        </div>

        <div className="space-y-2.5">
          <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
            <CircleCheckIcon className="size-5 text-lime-300" />

            <span className="text-zinc-100">Universal Studios</span>
            <span className="text-zinc-400 ml-auto">09:00h</span>
          </div>
        </div>
      </div>
    </div>
  )
}
