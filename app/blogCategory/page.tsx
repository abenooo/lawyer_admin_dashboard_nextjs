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
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog"

const page = () => {
  return (
    <>
    <Dialog>
      <DialogTrigger asChild>
        <Button  className="flex justify-center w-[200px]">Add Blog Category</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Blog Category</DialogTitle>
          <DialogDescription>
            Make changes to add blog category. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
    <Table>
      <TableCaption>A list of your recent news.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Number</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Image</TableHead>
          <TableHead className="text-right">Operation</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="border-b border-natural-200 transition duration-300 ease-in-out">
        <TableRow>
          <TableCell className="font-medium">1</TableCell>
          <TableCell>Pending</TableCell>
          <TableCell>Civil low</TableCell>
          <TableCell>Talks about civil low in this blog</TableCell>
          <TableCell>01/02/2024</TableCell>
          <TableCell>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </TableCell>
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
          <TableCell>Done</TableCell>
          <TableCell>Civil low</TableCell>
          <TableCell>Talks about civil low in this blog</TableCell>
          <TableCell>01/02/2024</TableCell>
          <TableCell>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </TableCell>
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
          <TableCell>Done</TableCell>
          <TableCell>Civil low</TableCell>
          <TableCell>Talks about civil low in this blog</TableCell>
          <TableCell>01/02/2024</TableCell>
          <TableCell>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </TableCell>
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
    </>
  );
};

export default page;
