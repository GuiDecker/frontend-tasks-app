import { Plus } from 'lucide-react'
import logoInOrbit from '../../assets/logo-in-orbit.svg'
import letsStartIllustration from '../../assets/lets-start-illustration.svg'
import { Button } from './button'
import { DialogTrigger } from './dialog'

export function EmptyGoals() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-8">
      <img src={logoInOrbit} alt="logo in orbit" />
      <img src={letsStartIllustration} alt="lets start Illustration" />
      <p className="text-zinc-300 leading-relaxed max-w-80 text-center">
        Você ainda não cadastrou nenhuma meta, que tal cadastrar um agora mesmo?
      </p>

      <DialogTrigger asChild>
        <Button>
          <Plus className="size-4" />
          Cadastrar meta
        </Button>
      </DialogTrigger>
    </div>
  )
}
