import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageTitle from "@/components/layout/PageTitle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const Upload = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const navigate = useNavigate();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleSubmit = () => {
    if (!selectedFile) {
      toast.error("Please select a file to upload");
      return;
    }
    toast.success("File uploaded successfully");
    navigate("/summary");
  };

  return (
    <div className="min-h-screen flex justify-center bg-background">
      <div className="w-full max-w-[1000px] flex flex-col">
        <Header />
        <main className="flex-1 px-4">
          <PageTitle>Upload Interest Rates</PageTitle>
          
          <div className="flex items-center justify-center gap-4 mt-16">
            <Input
              type="file"
              onChange={handleFileChange}
              accept=".csv,.xlsx,.xls"
            />
            
            <Button 
              onClick={handleSubmit}
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
              size="sm"
            >
              Send
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Upload;
