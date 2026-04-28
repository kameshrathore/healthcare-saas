import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableCell, TableBody } from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";

export default function Dashboard() {
  return (
    <div className="p-6 space-y-8">
      {/* Page Title */}
      <h2 className="text-text-h font-heading text-3xl mb-4">Dashboard</h2>
      <p className="text-text">Welcome to the Healthcare SaaS Dashboard!</p>

      {/* Quick Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Total Patients</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">120</p>
            <Progress value={70} className="mt-2" />
            <p className="text-sm text-muted-foreground mt-1">70% capacity</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Appointments Today</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">18</p>
            <Progress value={40} className="mt-2" />
            <p className="text-sm text-muted-foreground mt-1">40% booked</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">$12,450</p>
            <p className="text-sm text-muted-foreground mt-1">This month</p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Patients Table */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Patients</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Age</TableHead>
                <TableHead>Condition</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>John Doe</TableCell>
                <TableCell>45</TableCell>
                <TableCell>Diabetes</TableCell>
                <TableCell><span className="text-green-600">Stable</span></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Jane Smith</TableCell>
                <TableCell>32</TableCell>
                <TableCell>Hypertension</TableCell>
                <TableCell><span className="text-yellow-600">Under Review</span></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Michael Brown</TableCell>
                <TableCell>60</TableCell>
                <TableCell>Asthma</TableCell>
                <TableCell><span className="text-red-600">Critical</span></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Navigation Buttons */}
      <nav className="flex gap-4 mt-6">
        <Button asChild><a href="/analytics">Analytics</a></Button>
        <Button asChild><a href="/patients">Patient Details</a></Button>
      </nav>
    </div>
  );
}
