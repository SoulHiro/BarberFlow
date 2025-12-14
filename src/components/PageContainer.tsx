import { cn } from '@/lib/utils'

interface PageContainerProps {
  children: React.ReactNode
  className?: string
}

const PageContainer = ({ children, className }: PageContainerProps) => {
  return <div className={cn('px-5 pb-5', className)}>{children}</div>
}

const PageSectionTitle = ({ children }: PageContainerProps) => {
  return (
    <h2 className="text-mds text-foreground font-semibold uppercase">
      {children}
    </h2>
  )
}

const PageSection = ({ children }: PageContainerProps) => {
  return <div className="space-y-3">{children}</div>
}

const PageSectionScroller = ({ children }: PageContainerProps) => {
  return (
    <div className="flex gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
      {children}
    </div>
  )
}

export { PageContainer, PageSectionTitle, PageSection, PageSectionScroller }
