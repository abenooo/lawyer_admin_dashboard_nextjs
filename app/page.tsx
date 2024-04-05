// First, import necessary components and types
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Overview } from './components/overview';
import { RecentSales } from './components/recent-sales';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';

// The main component for the Home page
export default function Home() {
  return (
    <>
      <h2 className="text-3xl font-bold tracking-tight my-4">Dashboard</h2>
      <div className="flex-1 space-y-4">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {/* Card components for displaying various information */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Category
              </CardTitle>
              {/* SVG icon placeholder */}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">15</div>
              <p className="text-xs text-muted-foreground">
                +20.1% from last month
              </p>
            </CardContent>
          </Card>
          {/* Other cards would follow with similar structure */}
        </div>
        <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-7">
          <Card className="lg:col-span-4">
            <CardHeader>
              <CardTitle>Overview</CardTitle>
            </CardHeader>
            <CardContent className="pl-2">
              <Overview />
            </CardContent>
          </Card>
          <Card className="lg:col-span-3">
            <CardHeader>
              <CardTitle>Recent Sales</CardTitle>
              <CardDescription>
                You made 265 sales this month.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <RecentSales />
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}

// Server-side redirect using getServerSideProps with TypeScript
export const getServerSideProps: GetServerSideProps = async (_context: GetServerSidePropsContext) => {
  return {
    redirect: {
      destination: '/login',
      permanent: false, // Change to true if the redirect is permanent
    },
  };
};
