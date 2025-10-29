import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageTitle from "@/components/layout/PageTitle";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";

const mockRates = Array.from({ length: 92 }, (_, i) => ({
  plan: "FPDA",
  rateScale: "1",
  effectiveDate: `05/01/${2025 - Math.floor(i / 12)}`,
  duration: i * 12,
  maxAmount: "999,999,999",
  rate: "4.0000",
  status: "Uploaded",
}));

const Detail = () => {
  const navigate = useNavigate();
  const { companyCode } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;
  const totalPages = Math.ceil(mockRates.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentRates = mockRates.slice(startIndex, endIndex);

  const handleEdit = (index: number) => {
    navigate(`/edit/${companyCode}/${startIndex + index}`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-4">
          <Button
            variant="link"
            className="text-accent p-0"
            onClick={() => navigate("/summary")}
          >
            ← Summary Information for {companyCode}
          </Button>
        </div>

        <PageTitle>Interest Rate Set Detail</PageTitle>

        <div className="flex flex-wrap gap-3 mb-6 justify-center">
          <Button
            variant="default"
            className="bg-accent hover:bg-accent/90"
            onClick={() => navigate("/summary")}
          >
            Return to Summary
          </Button>
          <Button variant="default" className="bg-accent hover:bg-accent/90">
            Validate Rates
          </Button>
          <Button variant="secondary" disabled>
            Submit Rates
          </Button>
        </div>

        <div className="bg-card rounded-lg border overflow-hidden">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted">
                  <TableHead className="font-bold">Plan</TableHead>
                  <TableHead className="font-bold">Ratescale</TableHead>
                  <TableHead className="font-bold">Effective Date</TableHead>
                  <TableHead className="font-bold">Duration</TableHead>
                  <TableHead className="font-bold">Max Amount</TableHead>
                  <TableHead className="font-bold">Rate</TableHead>
                  <TableHead className="font-bold">Status</TableHead>
                  <TableHead className="font-bold">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {currentRates.map((rate, index) => (
                  <TableRow key={index}>
                    <TableCell>{rate.plan}</TableCell>
                    <TableCell>{rate.rateScale}</TableCell>
                    <TableCell>{rate.effectiveDate}</TableCell>
                    <TableCell>{rate.duration}</TableCell>
                    <TableCell>{rate.maxAmount}</TableCell>
                    <TableCell>{rate.rate}</TableCell>
                    <TableCell>{rate.status}</TableCell>
                    <TableCell>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleEdit(index)}
                      >
                        Edit
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="flex items-center justify-center gap-2 p-4 border-t">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setCurrentPage(1)}
              disabled={currentPage === 1}
            >
              <ChevronsLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <span className="text-sm px-4">
              {startIndex + 1}-{Math.min(endIndex, mockRates.length)} of {mockRates.length}
            </span>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setCurrentPage(totalPages)}
              disabled={currentPage === totalPages}
            >
              <ChevronsRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Detail;
