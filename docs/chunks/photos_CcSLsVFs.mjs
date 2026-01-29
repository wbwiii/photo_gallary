import { c as createComponent, a as createAstro, e as renderHead, d as addAttribute, f as renderSlot, b as renderTemplate } from './astro/server_B2gVtGRP.mjs';
import 'piccolore';
import 'html-escaper';
import 'clsx';

const $$Astro = createAstro();
const $$SiteLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SiteLayout;
  const { title = "Photo Gallery" } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>${title}</title>${renderHead()}</head> <body style="margin:0; font-family: system-ui;"> <header style="padding:18px 24px; display:flex; gap:18px; align-items:center; border-bottom:1px solid rgba(0,0,0,.08);"> <a${addAttribute(`${Astro2.site?.base ?? ""}/`, "href")} style="text-decoration:none; font-weight:700;">Will’s Photos</a> <nav style="display:flex; gap:12px;"> <a${addAttribute(`${Astro2.site?.base ?? ""}/locations/`, "href")} style="text-decoration:none;">Locations</a> <a${addAttribute(`${Astro2.site?.base ?? ""}/timeline/`, "href")} style="text-decoration:none;">Timeline</a> </nav> </header> <main style="padding:24px; max-width:1100px; margin:0 auto;"> ${renderSlot($$result, $$slots["default"])} </main> <footer style="padding:24px; opacity:.7; font-size:14px;">
© ${(/* @__PURE__ */ new Date()).getFullYear()} Will Williams
</footer> </body></html>`;
}, "C:/Users/wbwil/Projects/photo_website/photos-site/src/layouts/SiteLayout.astro", void 0);

const photos = [
	{
		id: "sample-iceland-001",
		title: "Black sand coast",
		description: "Windy afternoon on the southern coast.",
		country: "iceland",
		region: "south",
		locationLabel: "Iceland — South Coast",
		date: "2024-09-12",
		urls: {
			thumb: "https://picsum.photos/id/1011/600/400",
			web: "https://picsum.photos/id/1011/1600/1067"
		},
		featured: true
	},
	{
		id: "sample-usa-ca-001",
		title: "California light",
		description: "Golden hour on the trail.",
		country: "usa",
		region: "california",
		locationLabel: "USA — California",
		date: "2023-05-03",
		urls: {
			thumb: "https://picsum.photos/id/1025/600/400",
			web: "https://picsum.photos/id/1025/1600/1067"
		},
		featured: true
	},
	{
		id: "sample-usa-ut-001",
		title: "Desert lines",
		description: "Ridge patterns near sunset.",
		country: "usa",
		region: "utah",
		locationLabel: "USA — Utah",
		date: "2022-10-18",
		urls: {
			thumb: "https://picsum.photos/id/1039/600/400",
			web: "https://picsum.photos/id/1039/1600/1067"
		},
		featured: false
	}
];

export { $$SiteLayout as $, photos as p };
