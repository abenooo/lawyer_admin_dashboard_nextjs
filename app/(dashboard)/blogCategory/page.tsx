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

interface BlogCategory {
  _id: string;
  BlogCategoryName?: string;
  BlogCategoryDescription?: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

const baseUrl = "https://vgf59b03-5001.uks1.devtunnels.ms";

const Page = () => {
  const [categories, setCategories] = useState<BlogCategory[]>([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await fetch(`${baseUrl}/api/blogCategory`);
      if (!response.ok) {
        throw new Error(`Failed to fetch categories: ${response.status}`);
      }
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error("Error fetching blog categories:", error);
    }
  };

  const handleDelete = async (categoryId: string) => {
    const deleteUrl = `${baseUrl}/api/blogCategory/${categoryId}`;
    console.log("Delete URL:", deleteUrl);
    try {
      const response = await fetch(deleteUrl, {
        method: 'DELETE'
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Failed to delete the category: ${errorData.message}`);
      }
      alert('Category deleted successfully!');
      fetchCategories(); // Refresh the list after deletion
    } catch (error) {
      console.error("Error deleting category:", error);
      alert(`Failed to delete category`);
    }
  };

  return (
    <Table>
      <TableCaption>A list of your blog categories.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Number</TableHead>
          <TableHead>Category Name</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Date</TableHead>
          <TableHead className="text-right">Operations</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {categories.map((category, index) => (
          <TableRow key={category._id}>
            <TableCell className="font-medium">{index + 1}</TableCell>
            <TableCell>{category.BlogCategoryName || "Unnamed Category"}</TableCell>
            <TableCell>{category.BlogCategoryDescription || "No description provided"}</TableCell>
            <TableCell>{new Date(category.createdAt).toLocaleDateString()}</TableCell>
            <TableCell className="text-right">
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <button className="text-red-500">Delete</button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete the category.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel asChild>
                      <button>Cancel</button>
                    </AlertDialogCancel>
                    <AlertDialogAction asChild>
                      <button onClick={() => handleDelete(category._id)}>Continue</button>
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default Page;
