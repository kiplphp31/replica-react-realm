import { useNavigate } from "react-router-dom";
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

const mockData = [
  { companyCode: "BC", rateCount: 92, status: "Initial" },
  { companyCode: "SU", rateCount: 1, status: "Initial" },
  { companyCode: "BU", rateCount: 191, status: "Initial" },
  { companyCode: "CL", rateCount: 108, status: "Initial" },
  { companyCode: "UO", rateCount: 49, status: "Initial" },
  { companyCode: "UA", rateCount: 99, status: "Initial" },
];

const Summary = () => {
  const navigate = useNavigate();

  const handleViewDetails = (companyCode: string) => {
    navigate(`/detail/${companyCode}`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <PageTitle>Upload Summary</PageTitle>
        
        <div className="max-w-4xl mx-auto bg-card rounded-lg border overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted">
                <TableHead className="font-bold">Company Code</TableHead>
                <TableHead className="font-bold">Rate Count</TableHead>
                <TableHead className="font-bold">Status</TableHead>
                <TableHead className="font-bold">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockData.map((row) => (
                <TableRow key={row.companyCode}>
                  <TableCell className="font-medium">{row.companyCode}</TableCell>
                  <TableCell>{row.rateCount}</TableCell>
                  <TableCell>{row.status}</TableCell>
                  <TableCell>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleViewDetails(row.companyCode)}
                    >
                      View Details
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          
          <div className="p-4 text-center border-t">
            <Button
              variant="link"
              className="text-accent"
              onClick={() => navigate("/")}
            >
              Upload a different file
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Summary;
