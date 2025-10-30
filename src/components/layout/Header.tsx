import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="bg-primary text-primary-foreground">
      <div className="max-w-[1000px] mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-xl md:text-2xl font-semibold">CAPSIL Interest Rates Interface</h1>
        <div className="flex flex-col items-center gap-2">
          <img src={logo} alt="Logo" className="w-12 h-12" />
          <Button variant="ghost" className="text-primary-foreground hover:bg-primary/80 h-auto py-1 px-3 text-sm">
            Logout
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
