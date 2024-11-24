import { Dialog } from './components/ui/dialog'

import { CreateGoal } from './components/create-goal'
import { Summary } from './components/summary'
import { EmptyGoals } from './components/empty-goals'
import { useEffect, useState } from 'react'
import axios from 'axios'

type SummaryResponse = {
  completed: number
  total: number
  goalsPerDate: Record<
    string,
    {
      id: string
      title: string
      completedAt: Date
    }[]
  >
}
export function App() {
  const [summary, setSummary] = useState<SummaryResponse | null | undefined>(
    null
  )
  useEffect(() => {
    const fetchSummaryCompleatedGoals = async () => {
      try {
        const { data } = await axios.get('http://localhost:3333/summary')
        setSummary(data.summary)
      } catch (error) {
        console.log('error', error)
      }
    }
    fetchSummaryCompleatedGoals()
  }, [])
  return (
    <Dialog>
      <EmptyGoals />
      {summary?.total && summary.total > 0 ? <Summary /> : <EmptyGoals />}
      <CreateGoal />
    </Dialog>
  )
}
