import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const page = () => {
  return (
    <Table>
      <TableCaption>A list of your recent news.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Number</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Date</TableHead>
          <TableHead className="text-right">Operation</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="border-b border-natural-200 transition duration-300 ease-in-out">
        <TableRow>
          <TableCell className="font-medium">1</TableCell>
          <TableCell>Civil low</TableCell>
          <TableCell>Talks about civil low in this blog</TableCell>
          <TableCell>01/02/2024</TableCell>
          <TableCell className="text-right">
            <AlertDialog>
              <AlertDialogTrigger className="text-red-500">
                Delete
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </TableCell>
          <TableCell>View</TableCell>
          <TableCell>Edit</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">2</TableCell>
          <TableCell>Civil low</TableCell>
          <TableCell>Talks about civil low in this blog</TableCell>
          <TableCell>01/02/2024</TableCell>
          <TableCell className="text-right">
            <AlertDialog>
              <AlertDialogTrigger className="text-red-500">
                Delete
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </TableCell>
          <TableCell>View</TableCell>
          <TableCell>Edit</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">3</TableCell>
          <TableCell>Civil low</TableCell>
          <TableCell>Talks about civil low in this blog</TableCell>
          <TableCell>01/02/2024</TableCell>
          <TableCell className="text-right">
            <AlertDialog>
              <AlertDialogTrigger className="text-red-500">
                Delete
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </TableCell>
          <TableCell>View</TableCell>
          <TableCell>Edit</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default page;
