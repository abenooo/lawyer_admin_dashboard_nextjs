"use client"
import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Overview } from "../../components/overview";
import { RecentSales } from "../../components/recent-sales";
import { redirect } from "next/navigation";
import Link from "next/link";

export default function Home() {
  const [totalNews, setTotalNews] = useState(0);
  const [totalBlogs, setTotalBlogs] = useState(0);
  const [totalNewsCategories, setTotalNewsCategories] = useState(0);
  const [totalBlogCategories, setTotalBlogCategories] = useState(0);

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const newsResponse = await fetch('https://vgf59b03-5001.uks1.devtunnels.ms/api/news');
        const blogsResponse = await fetch('https://vgf59b03-5001.uks1.devtunnels.ms/api/blog');
        const newsCategoryResponse = await fetch('https://vgf59b03-5001.uks1.devtunnels.ms/api/newsCategory');
        const blogCategoryResponse = await fetch('https://vgf59b03-5001.uks1.devtunnels.ms/api/blogCategory');

        const newsData = await newsResponse.json();
        const blogsData = await blogsResponse.json();
        const newsCategoryData = await newsCategoryResponse.json();
        const blogCategoryData = await blogCategoryResponse.json();

        setTotalNews(newsData.length);
        setTotalBlogs(blogsData.length);
        setTotalNewsCategories(newsCategoryData.length);
        setTotalBlogCategories(blogCategoryData.length);
      } catch (error) {
        console.error("Failed to fetch counts:", error);
      }
    };

    fetchCounts();
  }, []);

  return (
    <>
      <h2 className="text-3xl font-bold tracking-tight my-4">Dashboard</h2>
      <div className="flex-1 space-y-4">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total News</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalNews}</div>
              <Link href="/news">News Details</Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Blogs</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalBlogs}</div>
              <Link href="/blog">Blog Details</Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total News Categories</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalNewsCategories}</div>
              <Link href="/blog">Total News Categories</Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Blog Categories</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalBlogCategories}</div>
              <Link href="/blog">Total Blog Categories</Link>
            </CardContent>
          </Card>
        </div>
        {/* Additional components like Overview can be added here */}
        <Overview />
      </div>
    </>
  );
}
