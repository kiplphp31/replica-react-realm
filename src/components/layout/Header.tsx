import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Globe className="w-8 h-8" />
          <h1 className="text-xl md:text-2xl font-semibold">CAPSIL Interest Rates Interface</h1>
        </div>
        <Button variant="ghost" className="text-primary-foreground hover:bg-primary/80">
          Logout
        </Button>
      </div>
    </header>
  );
};

export default Header;
