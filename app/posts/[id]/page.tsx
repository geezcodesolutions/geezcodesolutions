import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../../components/ui/button";
import { ArrowLeft, Calendar, User, Clock, Share2 } from "lucide-react";
import { Badge } from "../../components/ui/badge";
import postsData from "../posts.json";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
// import BgComponent from "@/app/components/BgComponent";

// Next.js 15: Params is a Promise
type PageProps = {
  params: Promise<{ id: string }>;
};

interface Author {
  name?: string | null;
  role?: string; // Optional: Add this to your JSON if you want to show it
  avatar?: string; // Optional
}

interface Post {
  id: string | number;
  title: string;
  content?: string | null;
  imageUrl?: string | null;
  createdAt: string;
  author: Author;
  published?: boolean;
  readTime?: string; // Optional: You could add this to JSON or calculate it
}

export default async function PostPage({ params }: PageProps) {
  // 1. Await params (Next.js 15 requirement)
  const { id } = await params;

  // 2. Validate ID is a number (if your logic requires numeric IDs)
  // If your IDs can be UUID strings, remove the isNaN check.
  if (isNaN(Number(id))) {
    notFound();
  }

  // 3. Find post safely
  const post = postsData.find((p) => String(p.id) === id) as Post | undefined;

  if (!post) {
    notFound();
  }

  // Calculate estimated read time if not provided (approx 200 words per min)
  const estimatedReadTime = post.content
    ? `${Math.ceil(post.content.split(" ").length / 200)} min read`
    : "3 min read";

  return (
    <article className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 pointer-events-auto relative">
      {/* Background Wrapper */}
      {/* <div className="absolute inset-0 -z-10 w-full h-full">
        <BgComponent />
      </div> */}

      <div className="max-w-7xl mx-auto">
        {/* Navigation */}
        <Button asChild variant="ghost" className="mb-8">
          <Link
            href="/posts"
            className="flex items-center hover:bg-transparent text-blue-300 hover:text-blue-500 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to all posts
          </Link>
        </Button>

        {/* Header Section */}
        <div className="mb-10 text-center max-w-4xl mx-auto">
          <div className="flex justify-center items-center gap-2 mb-4">
            {"published" in post && post.published ? (
              <Badge
                variant="secondary"
                className="bg-green-900/30 text-green-400 border-0"
              >
                Published
              </Badge>
            ) : (
              <Badge variant="outline" className="text-muted-foreground">
                Draft
              </Badge>
            )}
            <span className="text-sm text-blue-300 flex items-center gap-1">
              <Clock className="w-3 h-3" /> {estimatedReadTime}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-blue-200 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center justify-center space-x-4 text-sm text-muted-foregroun border-y border-blue-500 py-4 w-fit mx-auto px-8">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4 text-blue-500" />
              <span className="font-medium text-blue-100">
                {post.author?.name || "Anonymous"}
              </span>
            </div>
            <span className="text-blue-300">|</span>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-blue-600" />
              <span className="text-blue-100">
                {new Date(post.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
          </div>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content Column */}
          <div className="lg:col-span-8">
            {/* Hero Image */}
            <div className="relative aspect-video w-full overflow-hidden rounded-xl shadow-lg mb-10 bg-muted">
              <Image
                src={post.imageUrl || "https://placehold.co/1280x720.png"}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Markdown Content */}
            <div
              className="prose prose-lg dark:prose-invert max-w-none
              prose-headings:text-primary dark:prose-headings:text-gold
              prose-a:text-blue-600 dark:prose-a:text-blue-400
              prose-img:rounded-xl prose-img:shadow-md text-blue-200"
            >
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {post.content || "No content available."}
              </ReactMarkdown>
            </div>
          </div>

          {/* Sidebar Column */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-6">
              {/* Author Card */}
              <div className="bg-blue-950/50 rounded-xl p-6 shadow-sm border border-blue-500">
                <h3 className="font-bold text-lg mb-4 text-blue-200 ">
                  About the Author
                </h3>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-blue-300 flex items-center justify-center text-blue-950 font-bold text-xl">
                    {post.author?.name?.charAt(0) || "A"}
                  </div>
                  <div>
                    <p className="font-medium text-blue-200 ">
                      {post.author?.name || "Unknown Author"}
                    </p>
                    <p className="text-xs text-blue-300 ">Content Creator</p>
                  </div>
                </div>
              </div>

              {/* Share/Action Card (Placeholder) */}
              <div className="bg-blue-950/50 rounded-xl p-6 shadow-sm border border-blue-500">
                <h3 className="font-bold text-lg mb-4 text-blue-200  flex items-center gap-2">
                  <Share2 className="w-4 h-4 text-blue-500" /> Share
                </h3>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full text-blue-100 hover:text-blue-100 bg-blue-900 hover:bg-blue-950 border-blue-500"
                  >
                    Twitter
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full text-blue-100 hover:text-blue-100 bg-blue-900 hover:bg-blue-950 border-blue-500"
                  >
                    LinkedIn
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
