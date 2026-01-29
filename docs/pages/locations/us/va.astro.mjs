import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../../chunks/astro/server_B2gVtGRP.mjs';
import 'piccolore';
import 'html-escaper';
import { p as photos, $ as $$SiteLayout } from '../../../chunks/photos_CcSLsVFs.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const unique = /* @__PURE__ */ new Map();
  for (const p of photos) {
    unique.set(`${p.country}/${p.region}`, { country: p.country, region: p.region });
  }
  return Array.from(unique.values()).map(({ country, region }) => ({
    params: { country, region }
  }));
}
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { country, region } = Astro2.params;
  const items = photos.filter((p) => p.country === country && p.region === region);
  const label = items[0]?.locationLabel ?? `${country}/${region}`;
  return renderTemplate`${renderComponent($$result, "SiteLayout", $$SiteLayout, { "title": `${label} \u2014 Will\u2019s Photos` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>${label}</h1> <div style="display:grid; grid-template-columns:repeat(auto-fill,minmax(240px,1fr)); gap:14px;"> ${items.map((p) => renderTemplate`<a${addAttribute(`/photo/${p.id}/`, "href")} style="text-decoration:none; color:inherit;"> <div style="border-radius:14px; overflow:hidden; border:1px solid rgba(0,0,0,.08);"> <img${addAttribute(p.urls.thumb, "src")}${addAttribute(p.title, "alt")} style="width:100%; height:170px; object-fit:cover; display:block;"> <div style="padding:12px;"> <div style="font-weight:700;">${p.title}</div> <div style="opacity:.7; font-size:14px;">${p.date}</div> </div> </div> </a>`)} </div> ` })}`;
}, "C:/Users/wbwil/Projects/photo_website/photos-site/src/pages/locations/US/va/index.astro", void 0);

const $$file = "C:/Users/wbwil/Projects/photo_website/photos-site/src/pages/locations/US/va/index.astro";
const $$url = "/photo_gallary/locations/US/va";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
