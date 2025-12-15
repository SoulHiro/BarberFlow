'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { MenuIcon, MessageCircleIcon } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import SidebarMenu from '@/app/_components/sidebar-menu'
import Link from 'next/link'
import { ThemeToggle } from '@/components/theme-toggle'

const Header = () => {
  return (
    <header className="bg-background flex items-center justify-between px-5 py-6">
      <h1>Barberflow</h1>
      <div className="flex items-center gap-2">
        <ThemeToggle />
        <Button variant="outline" size="icon" asChild>
          <Link href="/chat">
            <MessageCircleIcon />
          </Link>
        </Button>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent className="w-[370px] p-0">
            <SheetHeader className="border-b px-5 py-6 text-left">
              <SheetTitle className="text-lg font-bold">Menu</SheetTitle>
            </SheetHeader>
            <SidebarMenu />
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

export default Header
