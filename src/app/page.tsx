import PageContainer from "@/components/PageContainer";
import HeaderComponent from "./_components/header"
import SearchInputComponent from "./_components/search-input";
import banner from "../../public/banner.png"
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeaderComponent />
      <PageContainer className="space-y-4">
        <SearchInputComponent />
        <Image src={banner} alt="Agende agora!" sizes="100vw" className="w-full h-auto" />
      </PageContainer>
    </div>
  );
}
