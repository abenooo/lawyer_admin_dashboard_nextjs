"use client";
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

const baseUrl = "https://vgf59b03-5001.uks1.devtunnels.ms";
const itemsPerPage = 10;

const fetchNews = async (): Promise<NewsItem[]> => {
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
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchNews().then(data => {
      setNewsItems(data);
      setTotalPages(Math.ceil(data.length / itemsPerPage));
    });
  }, []);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

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
          </TableRow>
        </TableHeader>
        <TableBody>
          {newsItems.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((item, index) => (
            <TableRow key={item._id}>
              <TableCell>{(currentPage - 1) * itemsPerPage + index + 1}</TableCell>
              <TableCell>{item.BlogTitle}</TableCell>
              <TableCell>{item.BlogDescription}</TableCell>
              <TableCell>{item.BlogTitle}</TableCell>
              <TableCell>
                {new Date(item.createdAt).toLocaleDateString()}
              </TableCell>
              <TableCell>
                <img
                  src={new URL(item.BlogImage, baseUrl).href}
                  alt="Blog"
                  style={{ width: "100px", height: "auto" }}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div style={{ marginTop: "20px", display: "flex", justifyContent: "center" }}>
        <div style={{ display: "flex", gap: "8px" }}>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
            <button
              key={number}
              style={{
                width: "35px",
                height: "35px",
                lineHeight: "35px",
                borderRadius: "50%",
                backgroundColor: currentPage === number ? "#007bff" : "transparent",
                color: currentPage === number ? "#fff" : "#007bff",
                border: `2px solid ${currentPage === number ? "#007bff" : "#ddd"}`,
                cursor: "pointer",
              }}
              onClick={() => paginate(number)}
            >
              {number}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Page;
