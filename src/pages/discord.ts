import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ redirect }) => {
  return redirect('https://discord.gg/f5KNCnMWzB', 301);
}
