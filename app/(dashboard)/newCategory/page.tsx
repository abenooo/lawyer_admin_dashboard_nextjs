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

interface NewsCategory {
  _id: string;
  NewsCategoryName?: string;
  NewsCategoryDescription?: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

const baseUrl = "https://lawyerpw.onrender.com"; // API base URL

const Page = () => {
  const [categories, setCategories] = useState<NewsCategory[]>([]);

  useEffect(() => {
    fetchNewsCategories();
  }, []);

  const fetchNewsCategories = async () => {
    try {
      const response = await fetch(`${baseUrl}/api/newsCategory`);
      if (!response.ok) {
        throw new Error(`Failed to fetch categories: ${response.status}`);
      }
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error("Error fetching news categories:", error);
    }
  };

  const handleDelete = async (categoryId: string) => {
    try {
      const deleteUrl = `${baseUrl}/api/newsCategory/${categoryId}`; // Assuming the API uses path parameters for DELETE
      const response = await fetch(deleteUrl, {
        method: 'DELETE'
      });
      if (!response.ok) {
        throw new Error('Failed to delete the category');
      }
      alert('Category deleted successfully!');
      fetchNewsCategories(); // Refresh the list after deletion
    } catch (error) {
      console.error("Error deleting category:", error);
      alert('Failed to delete category.');
    }
  };

  return (
    <Table>
      <TableCaption>A list of your recent news categories.</TableCaption>
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
            <TableCell>{category.NewsCategoryName || "Unnamed Category"}</TableCell>
            <TableCell>{category.NewsCategoryDescription || "No description provided"}</TableCell>
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
