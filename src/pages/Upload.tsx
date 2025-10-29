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
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <PageTitle>Upload Interest Rates</PageTitle>
        
        <div className="max-w-2xl mx-auto bg-card rounded-lg border p-8">
          <div className="flex flex-col items-center gap-6">
            <Input
              type="file"
              onChange={handleFileChange}
              className="max-w-md"
              accept=".csv,.xlsx,.xls"
            />
            
            <Button 
              onClick={handleSubmit}
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8"
            >
              Send
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Upload;
