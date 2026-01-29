import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_DU5ntMWG.mjs';
import 'piccolore';
import 'html-escaper';
import { p as photos, $ as $$SiteLayout } from '../chunks/photos_DtuSmS8R.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const groups = /* @__PURE__ */ new Map();
  for (const p of photos) {
    const key = `${p.country}/${p.region}`;
    if (!groups.has(key)) groups.set(key, { country: p.country, region: p.region, label: p.locationLabel, count: 0 });
    groups.get(key).count += 1;
  }
  const locations = Array.from(groups.values()).sort((a, b) => a.label > b.label ? 1 : -1);
  return renderTemplate`${renderComponent($$result, "SiteLayout", $$SiteLayout, { "title": "Locations \u2014 Will\u2019s Photos" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Locations</h1> <ul> ${locations.map((l) => renderTemplate`<li> <a${addAttribute(`/locations/${l.country}/${l.region}/`, "href")}>${l.label}</a> (${l.count})
</li>`)} </ul> ` })}`;
}, "C:/Users/wbwil/Projects/photo_website/photos-site/src/pages/locations/index.astro", void 0);

const $$file = "C:/Users/wbwil/Projects/photo_website/photos-site/src/pages/locations/index.astro";
const $$url = "/photo_gallary/locations";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
