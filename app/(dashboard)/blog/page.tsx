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

interface NewsItem {
  _id: string;
  BlogTitle: string;
  BlogDescription: string;
  BlogImage: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

const baseUrl = "https://vgf59b03-5001.uks1.devtunnels.ms"; // Corrected Base URL

const fetchNews = async (): Promise<NewsItem[]> => {
  try {
    const response = await fetch(`${baseUrl}/api/blog`);
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
};

const Page: React.FC = () => {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);

  useEffect(() => {
    fetchNews().then(setNewsItems);
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
        {newsItems.map((item, index) => (
          <TableRow key={item._id}>
            <TableCell>{index + 1}</TableCell>
            <TableCell>{item.BlogTitle}</TableCell>
            <TableCell>{item.BlogDescription}</TableCell>
            <TableCell>{item.BlogTitle}</TableCell>
            <TableCell>
              {new Date(item.createdAt).toLocaleDateString()}
            </TableCell>
            {/* <TableCell>
              <img
                src={`${baseUrl}${item.BlogImage}`}
                alt="News"
                style={{ width: "100px", height: "auto" }}
              />
            </TableCell> */}
            <TableCell>
  <img
    src={new URL(item.BlogImage, baseUrl).href}
    alt="News"
    style={{ width: "100px", height: "auto" }}
  />
</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default Page;
