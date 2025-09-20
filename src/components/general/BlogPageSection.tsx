"use client";

import React from "react";
import Image from "next/image";
import Laptop from "@/public/global/bg02.png";
import { FaCalendar } from "react-icons/fa";
import { PrimaryBtn } from "../common/PrimaryBtn";
import Link from "next/link";

const blogs = [
  {
    id: 1,
    date: "26 Sep 2024",
    category: "Needs",
    title: "Top 10 Must-Have Gadgets for Your Home Office",
    description:
      "Transform your workspace with these essential gadgets that enhance productivity and comfort...",
    image: "https://placehold.co/320x220",
  },
  {
    id: 2,
    date: "26 Sep 2024",
    category: "Furniture",
    title: "Top 10 Must-Have Gadgets for Your Home Office",
    description:
      "Transform your workspace with these essential gadgets that enhance productivity and comfort...",
    image: "https://placehold.co/320x220",
  },
  {
    id: 3,
    date: "26 Sep 2024",
    category: "Furniture",
    title: "Top 10 Must-Have Gadgets for Your Home Office",
    description:
      "Transform your workspace with these essential gadgets that enhance productivity and comfort...",
    image: "https://placehold.co/320x220",
  },
  {
    id: 4,
    date: "26 Sep 2024",
    category: "Technology",
    title: "Top 10 Must-Have Gadgets for Your Home Office",
    description:
      "Transform your workspace with these essential gadgets that enhance productivity and comfort...",
    image: "https://placehold.co/320x220",
  },
  {
    id: 5,
    date: "26 Sep 2024",
    category: "Arts",
    title: "Top 10 Must-Have Gadgets for Your Home Office",
    description:
      "Transform your workspace with these essential gadgets that enhance productivity and comfort...",
    image: "https://placehold.co/320x220",
  },
];

const BlogPageComponents = () => {
  return (
    <div className="flex flex-col max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left: Blog Cards */}
        <div className="md:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-sky-400/5 rounded-2xl shadow-md backdrop-blur-md overflow-hidden hover:bg-sky-200 transition-all duration-300"
              >
                <Image
                  src={Laptop}
                  alt={blog.title}
                  width={320}
                  height={220}
                  className="w-full h-56 object-cover"
                />
                <div className="p-4 flex flex-col gap-3">
                  <div className="flex gap-3 items-start">
                    <FaCalendar className="w-5 h-5 text-neutral-900" />

                    <div>
                      <p className="text-neutral-900 text-md">{blog.date}</p>
                      <p className="text-neutral-900 text-md font-medium">
                        {blog.category}
                      </p>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold">{blog.title}</h3>
                  <p className="text-base text-black">{blog.description}</p>
                  <Link
                    href="#"
                    className="text-blue-950 font-bold underline text-base hover:text-sky-500 transition-all duration-300"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>{" "}
          {/* Load More */}
          <PrimaryBtn className="mt-8 self-start mb-4">Load More</PrimaryBtn>
        </div>

        <div className="flex flex-col gap-8">
          {/* Right: Sidebar */}
          <aside className="w-full bg-sky-400/5 rounded-2xl border border-black/20 hover:bg-sky-200 transition-all duration-300">
            <div className="text-xl font-bold text-neutral-900 mb-4 border-b border-black/20 py-4">
              <span className="px-4">Recent Blogs</span>
            </div>
            <div className="flex flex-col gap-6 p-4">
              {blogs.slice(0, 3).map((blog, i) => (
                <div key={i} className="flex gap-4">
                  <Image
                    src={Laptop}
                    alt="thumbnail"
                    className="w-20 h-14 object-cover rounded-lg"
                  />
                  <div>
                    <h4 className="font-bold text-neutral-900 text-base">
                      {blog.title}
                    </h4>
                    <p className="text-neutral-500 text-sm">{blog.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </aside>
          {/* categories */}
          <aside className="w-full bg-sky-400/5 rounded-2xl border border-black/20 hover:bg-sky-200 transition-all duration-300">
            <div className="text-xl font-bold text-neutral-900 mb-4 border-b border-black/20 py-4">
              <span className="px-4">Blog Categories</span>
            </div>
            <div className="flex flex-col p-4">
              {Array.from(new Set(blogs.map((blog) => blog.category))).map(
                (category, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center py-2 text-base hover:bg-sky-200 transition-all duration-300"
                  >
                    <span className="text-neutral-900 font-extrabold">
                      {category}
                    </span>
                    <span className="text-neutral-500">
                      ({blogs.filter((b) => b.category === category).length})
                    </span>
                  </div>
                )
              )}
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default BlogPageComponents;
