import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function Dashboard() {
  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold">Dashboard</h2>
        <p className="text-muted-foreground">
          Welcome to the Healthcare SaaS Dashboard!
        </p>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Total Patients</CardTitle>
            <CardDescription>Overall patient count</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">120</p>
            <Progress value={70} className="mt-3" />
            <p className="text-xs text-muted-foreground mt-1">70% capacity</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Appointments</CardTitle>
            <CardDescription>Today's bookings</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">18</p>
            <Progress value={40} className="mt-3" />
            <p className="text-xs text-muted-foreground mt-1">40% booked</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Revenue</CardTitle>
            <CardDescription>This month</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">$12,450</p>
          </CardContent>
        </Card>
      </div>

      {/* Navigation Cards */}
      <div className="grid md:grid-cols-2 gap-6">

        {/* Analytics Card */}
        <Card className="hover:shadow-lg transition cursor-pointer">
          <CardHeader>
            <CardTitle>Analytics</CardTitle>
            <CardDescription>
              View insights, trends, and performance metrics
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <a href="/analytics">Go to Analytics →</a>
            </Button>
          </CardContent>
        </Card>

        {/* Patient Details Card */}
        <Card className="hover:shadow-lg transition cursor-pointer">
          <CardHeader>
            <CardTitle>Patient Details</CardTitle>
            <CardDescription>
              Manage patient records and information
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full" variant="secondary">
              <a href="/patients">View Patients →</a>
            </Button>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
