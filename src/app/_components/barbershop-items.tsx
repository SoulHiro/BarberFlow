import type { Barbershop } from '@/generated/prisma/client'
import Image from 'next/image'

interface BarbershopItemProps {
  barbershop: Barbershop
}

const BarbershopItem = ({ barbershop }: BarbershopItemProps) => {
  return (
    <div className="relative min-h-[200px] min-w-[290px] rounded-xl">
      <div className="absolute top-0 left-0 z-10 h-full w-full rounded-xl bg-linear-to-t from-black/75 to-transparent" />
      <Image
        src={barbershop.imageURL}
        alt={barbershop.name}
        fill
        className="rounded-xl object-cover"
      />
      <div className="absolute right-0 bottom-0 left-0 z-20 p-4">
        <h3 className="text-lg font-bold text-white">{barbershop.name}</h3>
        <p className="text-sm text-white">{barbershop.address}</p>
      </div>
    </div>
  )
}

export default BarbershopItem
