import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import Image from 'next/image'

interface BookingItemProps {
  serviceName: string
  barbershopName: string
  barbershopimageUrl: string
  date: Date
}

const BookingItemComponent = ({
  serviceName,
  barbershopName,
  barbershopimageUrl,
  date,
}: BookingItemProps) => {
  return (
    <Card className="flex w-full min-w-full flex-row items-center justify-between p-0">
      <div className="flex flex-col gap-4 p-4">
        <Badge>Confirmado</Badge>
        <div className="flex flex-col gap-2">
          <p className="font-bold">{serviceName}</p>
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src={barbershopimageUrl} />
            </Avatar>
            <div className="text-muted-foreground text-sm">
              {barbershopName}
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-full flex-col items-center justify-center border-l p-4">
        <p className="text-xs capitalize">
          {date.toLocaleDateString('pt-BR', { month: 'long' })}
        </p>
        <p>{date.toLocaleDateString('pt-BR', { day: '2-digit' })}</p>
        <p className="text-xs">
          {date.toLocaleTimeString('pt-BR', {
            hour: '2-digit',
            minute: '2-digit',
          })}
        </p>
      </div>
    </Card>
  )
}

export default BookingItemComponent
