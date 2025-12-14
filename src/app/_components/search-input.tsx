import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

const SearchInputComponent = () => {
  return (
    <div className="flex itemsp-center gap-2">
      <Input type="text" placeholder="Pesquise serviços ou barbearias..." className="border-border rounded-full">
      </Input>
      <Button variant="default" size="icon" className="rounded-full">
        <SearchIcon />
      </Button>
      
      
    </div>
  );
};

export default SearchInputComponent;