import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react"

const HeaderComponent = () => {
  return (
    <header className="flex items-center justify-between px-5 py-6">
      <h1>BarberFlow</h1>
      <Button variant="outline" size="icon">
        <MenuIcon />
      </Button>


    </header>
  );
};

export default HeaderComponent;