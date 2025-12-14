import PageContainer from '@/components/PageContainer'
import HeaderComponent from './_components/header'
import SearchInputComponent from './_components/search-input'
import banner from '../../public/banner.png'
import Image from 'next/image'
import BookingItemComponent from './_components/booking-item'

export default function Home() {
  return (
    <main>
      <HeaderComponent />
      <PageContainer className="space-y-6">
        <SearchInputComponent />
        <Image
          src={banner}
          alt="Agende agora!"
          sizes="100vw"
          className="h-auto w-full"
        />
        <h2 className="text-mds text-foreground font-semibold uppercase">
          Agendamentos
        </h2>
        <BookingItemComponent
          barbershopName="Barbearia do Alfredo"
          barbershopimageUrl="https://utfs.io/f/8a457cda-f768-411d-a737-cdb23ca6b9b5-b3pegf.png"
          serviceName="Corte de cabelo"
          date={new Date()}
        />
      </PageContainer>
    </main>
  )
}
