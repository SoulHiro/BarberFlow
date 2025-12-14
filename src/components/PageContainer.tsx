import { cn } from "@/lib/utils";

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
}

const PageContainer = ({children, className}: PageContainerProps) => {
  return (
    <div className={cn("px-5", className)}>
      {children}
    </div>
  );
};

export default PageContainer;