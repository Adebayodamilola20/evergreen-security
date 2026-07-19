import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPost } from "@/lib/blog";
import MaskText from "@/components/motion/MaskText";
import Reveal from "@/components/motion/Reveal";

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
            <Reveal y={20}>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">{post.category}</p>
            </Reveal>
            <h1 className="mt-4 text-4xl sm:text-5xl font-bold leading-tight tracking-tight">
              <MaskText text={post.title} delay={0.1} />
            </h1>
            <Reveal delay={0.3}>
              <p className="mt-5 text-base text-white/70">{post.date}</p>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="container-custom px-4 py-12">
        <div className="relative h-[320px] overflow-hidden rounded-lg bg-white md:h-[520px]"></div>

        <div className="mx-auto mt-12 max-w-3xl space-y-6 text-lg leading-8 text-gray-700">
          {post.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </article>
  );
}
