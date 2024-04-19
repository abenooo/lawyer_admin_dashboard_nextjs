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

  useEffect(() => {
    fetchNews().then(setNewsItems);
  }, []);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(newsItems.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const maxPageNumberLimit = 5;
  const maxPageVisible = 5;
  let pages = [];
  if (pageNumbers.length <= maxPageVisible) {
    pages = pageNumbers;
  } else {
    if (currentPage <= 3) {
      pages = [1, 2, 3, 4, '...', pageNumbers.length];
    } else if (currentPage > pageNumbers.length - 2) {
      pages = [1, '...', pageNumbers.length - 3, pageNumbers.length - 2, pageNumbers.length - 1, pageNumbers.length];
    } else {
      pages = [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', pageNumbers.length];
    }
  }

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
              <TableCell>{new Date(item.createdAt).toLocaleDateString()}</TableCell>
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
      <nav aria-label="Page navigation example">
        <ul className="inline-flex -space-x-px text-base h-10">
          {pages.map((page, index) => (
            <li key={index}>
              {page === '...' ? (
                <span className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{page}</span>
              ) : (
                <a onClick={() => paginate(page as number)} className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer">
                  {page}
                </a>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Page;
