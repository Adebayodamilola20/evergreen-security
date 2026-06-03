import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPost } from "@/lib/blog";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="bg-white">
      <section className="bg-navy pt-32 pb-16 text-white">
        <div className="container-custom px-4">
          <Link href="/blog" className="text-sm font-semibold text-white/70 transition-colors hover:text-white">
            ← Back to Latest Posts
          </Link>
          <div className="mt-8 max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">{post.category}</p>
            <h1 className="mt-4 text-4xl sm:text-5xl font-bold leading-tight tracking-tight">{post.title}</h1>
            <p className="mt-5 text-base text-white/70">{post.date}</p>
          </div>
        </div>
      </section>

      <div className="container-custom px-4 py-12">
        <div className="relative h-[320px] overflow-hidden rounded-lg bg-gray-100 md:h-[520px]">
          <Image src={post.image} alt={post.imageAlt} fill sizes="100vw" className="object-cover" priority />
        </div>

        <div className="mx-auto mt-12 max-w-3xl space-y-6 text-lg leading-8 text-gray-700">
          {post.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </article>
  );
}
