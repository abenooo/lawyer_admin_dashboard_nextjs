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
  NewsTitle: string;
  NewsCategory: string;
  NewsDescription: string;
  NewsImage: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

const baseUrl = "https://vgf59b03-5001.uks1.devtunnels.ms";
const itemsPerPage = 5;

const fetchNews = async (): Promise<NewsItem[]> => {
  try {
    const response = await fetch(`${baseUrl}/api/news`);
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
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(newsItems.length / itemsPerPage);

  useEffect(() => {
    fetchNews().then(setNewsItems);
  }, []);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / itemsPerPage) * itemsPerPage;
    return new Array(totalPages).fill(1).map((_, idx) => start + idx + 1);
  };

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
              <TableCell>{item.NewsTitle}</TableCell>
              <TableCell>{item.NewsDescription}</TableCell>
              <TableCell>{item.NewsCategory}</TableCell>
              <TableCell>
                {new Date(item.createdAt).toLocaleDateString()}
              </TableCell>
              <TableCell>
                <img
                  src={item.NewsImage.startsWith('http') ? item.NewsImage : `${baseUrl}${item.NewsImage}`}
                  alt="News"
                  style={{ width: "100px", height: "auto" }}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div style={{ marginTop: "20px", display: "flex", justifyContent: "center" }}>
        <div style={{ display: "flex", gap: "8px" }}>
          {getPaginationGroup().map((number) => (
            <button
              key={number}
              onClick={() => paginate(number)}
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
