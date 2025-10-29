import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageTitle from "@/components/layout/PageTitle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const Edit = () => {
  const navigate = useNavigate();
  const { companyCode } = useParams();
  
  const [formData, setFormData] = useState({
    plan: "FPDA",
    rateScale: "1",
    effectiveMonth: "5",
    effectiveDay: "1",
    effectiveYear: "2025",
    duration: "0",
    rate: "4.0000",
    maxAmount: "999999999",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleApply = () => {
    toast.success("Interest rate updated successfully");
    navigate(`/detail/${companyCode}`);
  };

  const handleCancel = () => {
    navigate(`/detail/${companyCode}`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <PageTitle>Edit Interest Rate</PageTitle>

        <div className="max-w-3xl mx-auto bg-card rounded-lg border p-8">
          <div className="grid gap-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="plan">Plan</Label>
                <Input
                  id="plan"
                  value={formData.plan}
                  onChange={(e) => handleChange("plan", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="rateScale">Rate Scale</Label>
                <Input
                  id="rateScale"
                  value={formData.rateScale}
                  onChange={(e) => handleChange("rateScale", e.target.value)}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label>Effective Date</Label>
                <div className="flex gap-2">
                  <Input
                    placeholder="Month"
                    value={formData.effectiveMonth}
                    onChange={(e) => handleChange("effectiveMonth", e.target.value)}
                    className="w-20"
                  />
                  <Input
                    placeholder="Day"
                    value={formData.effectiveDay}
                    onChange={(e) => handleChange("effectiveDay", e.target.value)}
                    className="w-20"
                  />
                  <Input
                    placeholder="Year"
                    value={formData.effectiveYear}
                    onChange={(e) => handleChange("effectiveYear", e.target.value)}
                    className="w-24"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="duration">Duration</Label>
                <Input
                  id="duration"
                  type="number"
                  value={formData.duration}
                  onChange={(e) => handleChange("duration", e.target.value)}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="rate">Rate</Label>
                <Input
                  id="rate"
                  value={formData.rate}
                  onChange={(e) => handleChange("rate", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="maxAmount">Max Amount</Label>
                <Input
                  id="maxAmount"
                  value={formData.maxAmount}
                  onChange={(e) => handleChange("maxAmount", e.target.value)}
                />
              </div>
            </div>

            <div className="flex gap-3 justify-center pt-4">
              <Button
                onClick={handleApply}
                className="bg-accent hover:bg-accent/90 px-8"
              >
                Apply
              </Button>
              <Button
                variant="default"
                onClick={handleCancel}
                className="bg-accent hover:bg-accent/90 px-8"
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Edit;
