import {
  PageContainer,
  PageSectionTitle,
  PageSection,
  PageSectionScroller,
} from '@/components/PageContainer'
import HeaderComponent from './_components/header'
import SearchInputComponent from './_components/search-input'
import banner from '../../public/banner.png'
import Image from 'next/image'
import BookingItemComponent from './_components/booking-item'
import { prisma } from '@/lib/prisma'
import BarbershopItem from './_components/barbershop-items'
import FooterComponent from './_components/footer'

export default async function Home() {
  const barbershops = await prisma.barbershop.findMany({
    orderBy: {
      name: 'asc',
    },
  })
  const popularBarbershops = await prisma.barbershop.findMany({
    orderBy: {
      name: 'desc',
    },
  })
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
        <PageSection>
          <PageSectionTitle>Agendamentos</PageSectionTitle>
          <BookingItemComponent
            barbershopName="Barbearia do Alfredo"
            barbershopimageUrl="https://utfs.io/f/8a457cda-f768-411d-a737-cdb23ca6b9b5-b3pegf.png"
            serviceName="Corte de cabelo"
            date={new Date()}
          />
        </PageSection>

        <PageSection>
          <PageSectionTitle>Barbearias</PageSectionTitle>
          <PageSectionScroller>
            {barbershops.map((barbershop) => (
              <BarbershopItem key={barbershop.id} barbershop={barbershop} />
            ))}
          </PageSectionScroller>
        </PageSection>

        <PageSection>
          <PageSectionTitle>Barbearias populares</PageSectionTitle>
          <PageSectionScroller>
            {popularBarbershops.map((barbershop) => (
              <BarbershopItem key={barbershop.id} barbershop={barbershop} />
            ))}
          </PageSectionScroller>
        </PageSection>
      </PageContainer>
      <FooterComponent />
    </main>
  )
}
