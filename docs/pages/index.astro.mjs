import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_B2gVtGRP.mjs';
import 'piccolore';
import 'html-escaper';
import { p as photos, $ as $$SiteLayout } from '../chunks/photos_CcSLsVFs.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const featured = photos.filter((p) => p.featured).slice(0, 6);
  const hero = featured[0];
  return renderTemplate`${renderComponent($$result, "SiteLayout", $$SiteLayout, { "title": "Will\u2019s Photos" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section style="display:grid; gap:16px;"> <div style="border-radius:18px; overflow:hidden; position:relative;"> <img${addAttribute(hero.urls.web, "src")}${addAttribute(hero.title, "alt")} style="width:100%; height:420px; object-fit:cover; display:block;"> <div style="position:absolute; left:18px; bottom:18px; color:white; text-shadow:0 2px 18px rgba(0,0,0,.5);"> <div style="font-size:28px; font-weight:800;">${hero.locationLabel}</div> <div style="opacity:.95;">${hero.title} — ${hero.date}</div> </div> </div> <h2 style="margin:8px 0 0;">Featured</h2> <div style="display:grid; grid-template-columns:repeat(auto-fill,minmax(240px,1fr)); gap:14px;"> ${featured.map((p) => renderTemplate`<a${addAttribute(`/photo/${p.id}/`, "href")} style="text-decoration:none; color:inherit;"> <div style="border-radius:14px; overflow:hidden; border:1px solid rgba(0,0,0,.08);"> <img${addAttribute(p.urls.thumb, "src")}${addAttribute(p.title, "alt")} style="width:100%; height:170px; object-fit:cover; display:block;"> <div style="padding:12px;"> <div style="font-weight:700;">${p.title}</div> <div style="opacity:.7; font-size:14px;">${p.locationLabel}</div> </div> </div> </a>`)} </div> </section> ` })}`;
}, "C:/Users/wbwil/Projects/photo_website/photos-site/src/pages/index.astro", void 0);

const $$file = "C:/Users/wbwil/Projects/photo_website/photos-site/src/pages/index.astro";
const $$url = "/photo_gallary";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
