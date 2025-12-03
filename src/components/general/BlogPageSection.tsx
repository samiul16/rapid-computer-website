"use client";

import React from "react";
import Image from "next/image";
// import Laptop from "@/public/global/bg02.png";
import { FaCalendar } from "react-icons/fa";
import { PrimaryBtn } from "../common/PrimaryBtn";
import Link from "next/link";
import { useRouter } from "next/navigation";

const blogs = [
  {
    id: 1,
    date: "26 Sep 2024",
    category: "Tech Reviews",
    title: "Top 10 Laptops for Work & Study in 2025",
    description:
      "Finding the right laptop can feel confusing with so many new models available. This blog highlights the top 10 laptops based on performance, battery life, and price—ideal for students, professionals, and multitaskers.",
    image: "/blogs/Top 10 Laptops for Work  Study in 2025.png",
  },
  {
    id: 2,
    date: "26 Sep 2024",
    category: "E-Commerce Tips",
    title: "The Ultimate Guide to Building a Custom PC in 2025",
    description:
      "Building your own PC gives you full control over performance and budget. This guide breaks down processors, graphics cards, and essential components—perfect for beginners and gamers starting their first build.",
    image: "/blogs/The Ultimate Guide to Building a Custom PC in 2025.png",
  },
  {
    id: 3,
    date: "26 Sep 2024",
    category: "Gadget & Device Guides",
    title: "5 Cybersecurity Mistakes E-Commerce Owners Must Avoid in 2025",
    description:
      "E-commerce websites are becoming prime targets for digital threats. This article highlights common cybersecurity mistakes businesses make and explains how to protect your store, customer data, and revenue.",
    image: "/blogs/How AI Is Changing the Future of E-Commerce in 2025.png",
  },
  {
    id: 4,
    date: "26 Sep 2024",
    category: "Software & Apps",
    title: "Gaming Accessories You Must Own in 2025 – Budget to Premium",
    description:
      "Great accessories can drastically improve your gaming experience. We compare headsets, keyboards, mice, and chairs across all budgets to help you pick the right gear for comfort, performance, and style.",
    image:
      "/blogs/Gaming Accessories You Must Own in 2025 – Budget to Premium.png",
  },
  {
    id: 5,
    date: "26 Sep 2024",
    category: "Cybersecurity & Safety",
    title: "SSD vs HDD: Which Storage Option Is Right for You in 2025?",
    description:
      "Storage plays a huge role in your computer’s speed and performance. This blog compares SSDs and HDDs, explaining their advantages, limitations, and which option suits your needs and budget.",
    image: "/blogs/SSD vs HDD Which One Should You Choose in 2025.png",
  },
];

const latestBlogs = [
  {
    id: 1,
    title:
      "Top 10 Budget Laptops in 2025 – Best Value for Students & Professionals",
    date: "",
    category: "",
    image:
      "/blogs/Top 10 Budget Laptops in 2025 – Best Value for Students Professionals.png",
  },
  {
    id: 2,
    title: "How to Choose the Right Gaming PC: A Beginner-Friendly Guide",
    date: "",
    category: "",
    image:
      "/blogs/How to Choose the Right Gaming PC A Beginner-Friendly Guide.png",
  },
  {
    id: 3,
    title: "Why Your E-Commerce Store Needs Strong Cybersecurity in 2025",
    date: "",
    category: "",
    image:
      "/blogs/Why Your E-Commerce Store Needs Strong Cybersecurity in 2025.png",
  },
  {
    id: 4,
    title: "SSD vs HDD: Which One Should You Choose in 2025?",
    date: "",
    category: "",
    image: "/blogs/SSD vs HDD Which One Should You Choose in 2025.png",
  },
  {
    id: 5,
    title: "5 Must-Have Tech Gadgets Under AED 500 This Year",
    date: "",
    category: "",
    image: "",
  },
];

const BlogPageComponents = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col max-w-8xl mx-auto px-4 lg:px-28">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left: Blog Cards */}
        <div className="md:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-sky-400/5 rounded-2xl shadow-md backdrop-blur-md overflow-hidden hover:bg-sky-200 transition-all duration-300 cursor-pointer"
                onClick={() => router.push(`/blogs/${blog.id}`)}
              >
                <Image
                  src={blog.image}
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
                    href={`/blogs/${blog.id}`}
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
              <span className="px-4">Latest Blogs</span>
            </div>
            <div className="flex flex-col gap-6 p-4">
              {latestBlogs.slice(0, 3).map((blog, i) => (
                <div
                  key={i}
                  className="flex gap-4 cursor-pointer"
                  onClick={() => router.push(`/blogs/${blog.id}`)}
                >
                  <Image
                    width={100}
                    height={100}
                    src={blog.image}
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
                    // onClick={() => router.push(`/blogs/${blog.id}`)}
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
