"use client"
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableHeader,
  TableRow,
  TableCell,
  TableHead,
} from "@/components/ui/table";
import Image from "next/image";

interface Blog {
  _id: string;
  BlogTitle: string;
  BlogCategory: string;
  BlogDescription: string;
  BlogImage: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

const baseUrl = "https://vgf59b03-5001.uks1.devtunnels.ms"; // Updated Base URL

const fetchBlogs = async (): Promise<Blog[]> => {
  try {
    const response = await fetch(`${baseUrl}/api/blog`);
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
};

const Page: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    fetchBlogs().then(setBlogs);
  }, []);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Image</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {blogs.map((blog, index) => (
          <TableRow key={blog._id}>
            <TableCell>{index + 1}</TableCell>
            <TableCell>{blog.BlogTitle}</TableCell>
            <TableCell>{blog.BlogDescription}</TableCell>
            <TableCell>{blog.BlogCategory}</TableCell>
            <TableCell>
              {new Date(blog.createdAt).toLocaleDateString()}
            </TableCell>
            <TableCell>
              <Image
                src={`${baseUrl}${blog.BlogImage}`}
                alt={blog.BlogTitle}
                width={200}
                height={200}
                objectFit="cover"
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default Page;
