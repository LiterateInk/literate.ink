import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ redirect }) => {
  return redirect('https://pawnote.js.org', 301);
}
