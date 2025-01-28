"use client";

import { useState } from "react";
import { ProductCard } from "./Product";
import Pagination from "../UI/Pagination";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  currency: string;
  image: string;
  rating: number;
}

const PRODUCTS_PER_PAGE = 10;

export default function Products({ products }: { products: Product[] }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1); // Reset to the first page when searching
  };

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(event.target.value);
    setCurrentPage(1); // Reset to the first page when filtering
  };

  // Filter products based on the search query (case-insensitive)
  let filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Apply sorting based on the selected filter
  if (filter === "pricehigh") {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (filter === "pricelow") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (filter === "ratinghigh") {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  } else if (filter === "ratinglow") {
    filteredProducts.sort((a, b) => a.rating - b.rating);
  }

  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);

  // Get the products for the current page
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
    <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center gap-4 pt-10">
      <div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
          Products Collection
        </h1>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
        <form className="w-full sm:w-auto">
          <select
            id="filter"
            value={filter}
            onChange={handleFilterChange}
            className="block w-full sm:w-auto px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="" disabled>
              Filter
            </option>
            <option value="ratinglow">Rating low to high</option>
            <option value="ratinghigh">Rating high to low</option>
            <option value="pricehigh">Price high to low</option>
            <option value="pricelow">Price low to high</option>
          </select>
        </form>
        <form className="w-full sm:w-auto">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only"
          >
            Search
          </label>
          <div className="relative">

            <input
              type="search"
              id="default-search"
              className="block w-full px-4 py-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search Products, Collections..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
        </form>
      </div>
    </div>
    <div className="container mx-auto py-2 sm:py-8 lg:py-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        {paginatedProducts.length > 0 ? (
          paginatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div className="col-span-4 text-center text-gray-500">
            No products found.
          </div>
        )}
      </div>
    </div>
    <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={handlePageChange}
    />
  </div>
  );
}
