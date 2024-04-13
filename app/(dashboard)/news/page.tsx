"use client"
import React, { useEffect, useState } from "react";
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
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
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

interface Blog {
  _id: string;
  NewsTitle: string;
  NewsCategory: string;
  NewsDescription: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

const fetchBlogs = async (): Promise<Blog[]> => {
  try {
    const response = await fetch("https://lawyerpw.onrender.com/api/news");
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
};

const page: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    fetchBlogs().then(setBlogs);
  }, []);

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Image</TableHead>
            <TableHead className="text-right">Operations</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {blogs.map((blog, index) => (
            <TableRow key={blog._id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{blog.NewsTitle}</TableCell>
              <TableCell>{blog.NewsDescription}</TableCell>
              <TableCell>{blog.NewsCategory}</TableCell>
              <TableCell>{new Date(blog.createdAt).toLocaleDateString()}</TableCell>
              {/* <TableCell>
                <Avatar>
                  <AvatarImage src={blog.image} />
                  <AvatarFallback>{blog.BlogTitle[0]}</AvatarFallback>
                </Avatar>
              </TableCell> */}
              {/* <TableCell className="text-right">
                <AlertDialogTrigger className="text-red-500">
                  Delete
                </AlertDialogTrigger>
                <AlertDialog>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                      <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete the blog post.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction>Continue</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default page;
