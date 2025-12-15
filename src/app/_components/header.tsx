'use client'
import { Button } from '@/components/ui/button'
import { authClient } from '@/lib/auth-client'

import { LogInIcon, MenuIcon } from 'lucide-react'

const HeaderComponent = () => {
  const handlelogin = async () => {
    await authClient.signIn.social({ provider: 'google' })
  }
  return (
    <header className="flex items-center justify-between px-5 py-6">
      <h1>BarberFlow</h1>
      <div>
        <Button variant="outline" size="icon" onClick={handlelogin}>
          <LogInIcon />
        </Button>
        <Button variant="outline" size="icon">
          <MenuIcon />
        </Button>
      </div>
    </header>
  )
}

export default HeaderComponent
