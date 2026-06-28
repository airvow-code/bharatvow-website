/**
 * Blog post registry — populated in Phase 2.
 * @see docs/website/15_Blogs.md
 */

export const blogPosts = [];

export function getPostBySlug(slug) {
  return blogPosts.find((post) => post.slug === slug) ?? null;
}
