// import Link from "next/link";
// import Image from "next/image";
// import { format } from "date-fns";
// import BgComponent from "@/app/components/BgComponent";
// import postsData from "@/lib/data/posts.json";

// export default async function Posts() {
//   // Use static posts from local JSON file instead of Prisma
//   const posts = postsData;

//   return (
//     <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 pointer-events-auto">
//       {/* <div className="absolute inset-0 -z-10 w-full h-full">
//         <BgComponent />
//       </div> */}
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-20">
//           <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-700 mb-6 tracking-tight">
//             Our Latest Stories
//           </h1>
//           <p className="text-xl text-blue-950 dark:text-amber-50 max-w-2xl mx-auto">
//             Discover insightful articles and creative content from our community
//           </p>
//         </div>

//         {posts.length === 0 ? (
//           <div className="text-center py-20">
//             <div className="inline-block p-8 bg-white rounded-2xl shadow-lg">
//               <p className="text-2xl text-blue-950 dark:text-amber-50 mb-6">
//                 No posts yet. Be the first to create one!
//               </p>
//             </div>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {posts.map((post) => (
//               <div
//                 key={post.id}
//                 className="group relative bg-amber-100 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
//               >
//                 <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-amber/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

//                 <Link href={`/posts/${post.id}`} className="block">
//                   <div className="relative h-64 overflow-hidden">
//                     <Image
//                       src={`http://localhost:3000${post.imageUrl}`}
//                       alt={post.title}
//                       fill
//                       className="object-cover transition-transform duration-700 group-hover:scale-105"
//                       sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                     />
//                     <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-500"></div>
//                   </div>

//                   <div className="p-6 relative z-20">
//                     <div className="flex items-center text-sm text-gray-500 mb-3">
//                       <span className="font-medium text-amber-400">
//                         {post.author.name}
//                       </span>
//                       <span className="mx-2">•</span>
//                       <span className="text-blue-950 dark:text-amber-50">
//                         {format(new Date(post.createdAt), "MMM d, yyyy")}
//                       </span>
//                     </div>

//                     <h2 className="text-2xl font-bold text-blue-950 dark:text-amber-50 mb-3 transition-colors duration-300 group-hover:text-amber-400">
//                       {post.title}
//                     </h2>
//                     {post.excerpt && (
//                       <p className="text-gray-600 line-clamp-2 group-hover:text-gray-800 transition-colors duration-300">
//                         {post.excerpt}
//                       </p>
//                     )}
//                     <div className="mt-4 flex items-center text-amber-600 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
//                       <span>Read more</span>
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="h-4 w-4 ml-2"
//                         viewBox="0 0 20 20"
//                         fill="currentColor"
//                       >
//                         <path
//                           fillRule="evenodd"
//                           d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
//                           clipRule="evenodd"
//                         />
//                       </svg>
//                     </div>
//                   </div>
//                 </Link>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import { Calendar, User } from "lucide-react";
// import BgComponent from "@/app/components/BgComponent";
import postsData from "./posts.json";

export default async function Posts() {
  // Use static posts from local JSON file
  const posts = postsData;

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 pointer-events-auto">
      {/* <div className="absolute inset-0 -z-10 w-full h-full">
        <BgComponent />
      </div> */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-700 mb-6 tracking-tight">
            Our Latest Stories
          </h1>
          <p className="text-xl text-blue-950 dark:text-amber-50 max-w-2xl mx-auto">
            Discover insightful articles and creative content from our community
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-20">
            <div className="inline-block p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
              <p className="text-2xl text-blue-950 dark:text-amber-50 mb-6">
                No posts yet. Be the first to create one!
              </p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <div
                key={post.id}
                className="group relative bg-amber-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-amber-100 dark:border-gray-700"
              >
                {/* Hover Overlay Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>

                <Link
                  href={`/posts/${post.id}`}
                  className="block h-full flex flex-col"
                >
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      // UPDATED: Removed 'http://localhost:3000' prefix because JSON now has full URLs
                      src={post.imageUrl || "https://placehold.co/600x400"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-500"></div>
                  </div>

                  {/* Content Container */}
                  <div className="p-6 relative z-20 flex flex-col flex-grow">
                    {/* Meta Data */}
                    <div className="flex items-center text-xs font-medium text-gray-500 dark:text-gray-400 mb-4 space-x-4">
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3 text-amber-500" />
                        <span>{post.author?.name || "Anonymous"}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-amber-500" />
                        <span>
                          {post.createdAt
                            ? format(new Date(post.createdAt), "MMM d, yyyy")
                            : "Date N/A"}
                        </span>
                      </div>
                    </div>

                    {/* Title */}
                    <h2 className="text-xl font-bold text-blue-950 dark:text-amber-50 mb-3 transition-colors duration-300 group-hover:text-amber-600 dark:group-hover:text-amber-400 line-clamp-2">
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    {post.excerpt && (
                      <p className="text-gray-600 dark:text-gray-300 line-clamp-3 mb-6 flex-grow text-sm leading-relaxed">
                        {post.excerpt}
                      </p>
                    )}

                    {/* Read More Link */}
                    <div className="mt-auto flex items-center text-amber-600 dark:text-amber-400 font-semibold text-sm group-hover:translate-x-1 transition-transform duration-300">
                      <span>Read Article</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
