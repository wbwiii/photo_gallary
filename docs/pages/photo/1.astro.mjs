import { c as createComponent, d as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_DU5ntMWG.mjs';
import 'piccolore';
import 'html-escaper';
import { p as photos, $ as $$SiteLayout } from '../../chunks/photos_DtuSmS8R.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { id } = Astro2.params;
  const photo = photos.find((p) => p.id === id);
  if (!photo) {
    throw new Error(`Photo not found: ${id}`);
  }
  return renderTemplate`${renderComponent($$result, "SiteLayout", $$SiteLayout, { "title": `${photo.title} \u2014 Will\u2019s Photos` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div style="display:grid; gap:14px;"> <div style="border-radius:18px; overflow:hidden;"> <img${addAttribute(photo.urls.web, "src")}${addAttribute(photo.title, "alt")} style="width:100%; max-height:70vh; object-fit:cover; display:block;"> </div> <h1 style="margin:0;">${photo.title}</h1> <div style="opacity:.7;">${photo.locationLabel} • ${photo.date}</div> <p style="max-width:70ch; line-height:1.6;">${photo.description}</p> <a${addAttribute(`/locations/${photo.country}/${photo.region}/`, "href")}>← Back to ${photo.locationLabel}</a> </div> ` })}`;
}, "C:/Users/wbwil/Projects/photo_website/photos-site/src/pages/photo/1/index.astro", void 0);

const $$file = "C:/Users/wbwil/Projects/photo_website/photos-site/src/pages/photo/1/index.astro";
const $$url = "/photo_gallary/photo/1";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
