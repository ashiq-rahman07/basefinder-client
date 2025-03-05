import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function ListingCard() {
  return (
    <Card>
      <CardHeader>
        <Image src={`https://cdn.britannica.com/05/157305-004-53D5D212.jpg`} width={100} height={100} alt="Property"  className="w-full h-48 object-cover rounded-t-lg" />
      </CardHeader>
      <CardContent>
        <CardTitle className="text-xl">Cozy Apartment in Downtown</CardTitle>
        <CardDescription className="mt-2">$1200/month</CardDescription>
        <CardDescription className="mt-1">New York, NY</CardDescription>
      </CardContent>
      <CardFooter>
        <Button className="w-full">View Details</Button>
      </CardFooter>
    </Card>
  );
}