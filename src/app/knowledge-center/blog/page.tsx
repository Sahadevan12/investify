import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { BLOG_POSTS } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on NRI investing, taxation, insurance and inheritance planning from the Investify Prism team.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Knowledge Center"
        title="Insights for the NRI Investor"
        description="Practical guides on investing, taxation and planning across borders, updated regularly."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Knowledge Center" },
          { label: "Blog" },
        ]}
      />

      <section className="section-pad bg-white">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {BLOG_POSTS.map((post) => (
              <article
                key={post.slug}
                className="group flex flex-col rounded-[20px] border border-border p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-hover"
              >
                <span className="mb-5 inline-flex w-fit items-center rounded-full bg-green/10 px-3 py-1 text-[12px] font-semibold text-green-dark">
                  {post.category}
                </span>
                <h2 className="mb-3 text-[18px] font-semibold leading-snug text-navy">
                  {post.title}
                </h2>
                <p className="mb-6 flex-1 text-[14.5px] leading-relaxed text-body">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-[13px] text-body">
                  <span>
                    {post.date} &middot; {post.readTime}
                  </span>
                  <span className="flex items-center gap-1 font-semibold text-green-dark">
                    Read
                    <Icon
                      name="ArrowRight"
                      className="size-3.5 transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
