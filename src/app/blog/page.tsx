import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/lib/blog";

export default function BlogPage() {
  return (
    <div className="bg-white">
      <section className="bg-navy pt-32 pb-20 text-white">
        <div className="container-custom px-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">Our Blog</p>
          <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight">Latest Posts</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/80">
            Security insights, training updates, and field notes from Evergreen Protective Services.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-4 flex items-center justify-between gap-4 text-xs font-semibold uppercase tracking-wide">
                    <span className="text-evergreen">{post.category}</span>
                    <span className="text-gray-500">{post.date}</span>
                  </div>
                  <h2 className="text-xl font-bold leading-snug text-navy transition-colors group-hover:text-evergreen">
                    {post.title}
                  </h2>
                  <p className="mt-4 text-sm leading-6 text-gray-600">{post.excerpt}</p>
                  <span className="mt-6 inline-flex text-sm font-semibold text-evergreen">
                    Read more
                    <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
