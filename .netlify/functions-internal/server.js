"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// app/routes/projects/project.tsx
var require_project = __commonJS({
  "app/routes/projects/project.tsx"() {
    "use strict";
  }
});

// server.js
var server_exports = {};
__export(server_exports, {
  handler: () => handler
});
module.exports = __toCommonJS(server_exports);
var import_netlify = require("@remix-run/netlify");

// server-entry-module:@remix-run/dev/server-build
var server_build_exports = {};
__export(server_build_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_server = require("react-dom/server"), import_react = require("@remix-run/react"), import_jsx_runtime = require("react/jsx-runtime");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.RemixServer, { context: remixContext, url: request.url })
  );
  return responseHeaders.set("Content-Type", "text/html"), new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links
});
var import_react3 = require("@remix-run/react");

// app/components/layout.tsx
var import_react2 = require("react"), import_classnames = __toESM(require("classnames")), import_react_terminal = require("react-terminal"), import_remix_utils = require("remix-utils");

// app/components/footer.tsx
var import_jsx_runtime2 = require("react/jsx-runtime"), Footer = () => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("footer", { className: "hidden lg:block -z-50 w-full fixed top-1/2 text-romanText", children: [
  /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "absolute xl:left-5 lg:left-2.5 text-sm origin-center transform -rotate-90 -translate-x-1/2", children: "Made with love from Michigan." }),
  /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "absolute xl:right-5 lg:right-2.5 text-sm origin-center transform rotate-90 translate-x-1/2", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("a", { href: "https://github.com/roman-bytes/roman-remix", children: "Source Code" }) })
] }), footer_default = Footer;

// app/components/social.tsx
var import_jsx_runtime3 = require("react/jsx-runtime"), Social = () => /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("ul", { className: "social", children: [
  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    "a",
    {
      target: "_blank",
      href: "https://twitter.com/romanbytes",
      className: "hover:text-white relative",
      children: "Twitter"
    }
  ) }),
  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    "a",
    {
      target: "_blank",
      href: "https://github.com/roman-bytes",
      className: "hover:text-white relative",
      children: "Github"
    }
  ) }),
  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    "a",
    {
      target: "_blank",
      href: "https://codepen.io/romanbytes",
      className: "hover:text-white relative",
      children: "CodePen"
    }
  ) }),
  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    "a",
    {
      target: "_blank",
      href: "https://dev.to/romanbytes",
      className: "hover:text-white relative",
      children: "Dev.to"
    }
  ) })
] }), social_default = Social;

// app/components/nav.tsx
var import_jsx_runtime4 = require("react/jsx-runtime"), Nav = () => /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("ul", { className: "text-right nav", children: [
  /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("a", { href: "/", className: "hover:text-white relative", children: "Index" }) }),
  /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("a", { href: "/projects", className: "hover:text-white relative", children: "Projects" }) }),
  /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("a", { href: "/about", className: "hover:text-white relative", children: "About" }) })
] }), nav_default = Nav;

// app/components/logo.tsx
var import_jsx_runtime5 = require("react/jsx-runtime"), Logo = () => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("a", { href: "/", "aria-label": "Go back to home page", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
  "img",
  {
    className: "w-16",
    src: "/roman-bytes-mark.svg",
    alt: "Roman Bytes Logo Mark"
  }
) }), logo_default = Logo;

// app/components/particles.tsx
var THREE = __toESM(require("three")), import_fiber = require("@react-three/fiber"), import_jsx_runtime6 = require("react/jsx-runtime"), SEPARATION = 100, AMOUNTX = 100, AMOUNTY = 70, numParticles = AMOUNTX * AMOUNTY, positions = new Float32Array(numParticles * 3), scales = new Float32Array(numParticles), i = 0, j = 0;
for (let ix = 0; ix < AMOUNTX; ix++)
  for (let iy = 0; iy < AMOUNTY; iy++)
    positions[i] = ix * SEPARATION - AMOUNTX * SEPARATION / 2, positions[i + 1] = 0, positions[i + 2] = iy * SEPARATION - AMOUNTY * SEPARATION / 2, scales[j] = 1, i += 3, j++;
var geometry = new THREE.BufferGeometry();
geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
geometry.setAttribute("scale", new THREE.BufferAttribute(scales, 1));
var material = new THREE.ShaderMaterial({
  uniforms: {
    color: { value: new THREE.Color(16777215) }
  },
  vertexShader: (
    /* glsl */
    `
    attribute float scale;

    void main() {
      vec4 mvPosition = modelViewMatrix * vec4(position, 1);
      gl_PointSize = scale * (300.0 / -mvPosition.z);
      gl_Position = projectionMatrix * mvPosition;
    }
  `
  ),
  fragmentShader: (
    /* glsl */
    `
    uniform vec3 color;

    void main() {
      if (length(gl_PointCoord - 0.5) > 0.475) discard;
      gl_FragColor = vec4(color, 1);
    }
  `
  )
}), Particle = () => ((0, import_fiber.useFrame)((state) => {
  let time = state.clock.getElapsedTime(), position = geometry.attributes.position.array, scale = geometry.attributes.scale.array, i2 = 0, j2 = 0;
  for (let ix = 0; ix < AMOUNTX; ix++)
    for (let iy = 0; iy < AMOUNTY; iy++)
      position[i2 + 1] = Math.sin((ix + time) * 0.3) * 50 + Math.sin((iy + time) * 0.5) * 50, scale[j2] = (Math.sin((ix + time) * 0.3) + 1) * 2 + (Math.sin((iy + time) * 0.5) + 1) * 2, i2 += 3, j2++;
  geometry.attributes.position.needsUpdate = !0, geometry.attributes.scale.needsUpdate = !0;
}), /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("points", { geometry, material })), Particles = () => /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
  import_fiber.Canvas,
  {
    className: "!fixed top-0 left-0 -z-50",
    camera: {
      fov: 120,
      near: 1,
      far: 1e4,
      position: [85, 342, 1e3]
    },
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("ambientLight", { intensity: 0.5 }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("spotLight", { position: [10, 10, 10], angle: 0.15, penumbra: 1 }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("pointLight", { position: [-10, -10, -10] }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Particle, {})
    ]
  }
), particles_default = Particles;

// app/components/layout.tsx
var import_jsx_runtime7 = require("react/jsx-runtime"), Layout = ({
  children
}) => {
  let [mobileMenu, setMobileMenu] = (0, import_react2.useState)(!1), handleMenuOpen = () => {
    setMobileMenu(!mobileMenu);
  }, mobileMenuClass = (0, import_classnames.default)(
    "justify-between my-5",
    mobileMenu ? "flex h-auto" : "hidden h-0"
  ), footerMobileClass = (0, import_classnames.default)(
    "flex-no-wrap justify-center",
    mobileMenu ? "flex" : "hidden"
  );
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_react_terminal.TerminalContextProvider, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("main", { className: "h-full", children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "hidden lg:block absolute xl:top-5 xl:left-5 lg:top-2.5 lg:left-2.5 h-", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(logo_default, {}) }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "flex h-full w-full justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("main", { className: "container lg:mx-40 h-max min-h-full lg:flex", children }) }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "hidden lg:flex w-full fixed text-romanText xl:p-20 lg:p-10 justify-between items-end bottom-0 left-0 right-0", children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(social_default, {}),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(nav_default, {})
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "lg:hidden p-5 border-t border-white bg-romanBlack w-full fixed text-romanText lg:p-10 flex justify-between bottom-0 left-0 right-0 flex-col", children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "flex flex-row justify-between items-center", children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "xl:top-5 xl:left-5 lg:top-2.5 lg:left-2.5", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(logo_default, {}) }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
            "svg",
            {
              width: 24,
              height: 24,
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              className: "sm:block lg:hidden xl:hidden cursor-pointer",
              onClick: () => handleMenuOpen(),
              children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
                "path",
                {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M3 8V6H21V8H3ZM3 13H21V11H3V13ZM3 18H21V16H3V18Z",
                  fill: "white"
                }
              )
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: mobileMenuClass, children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(social_default, {}),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(nav_default, {})
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("footer", { className: footerMobileClass, children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "text-sm", children: "Made with love from Michigan." }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "text-sm", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("a", { href: "https://github.com/roman-bytes/roman-bytes-dev", children: [
            "Source Code",
            " "
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(footer_default, {})
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_remix_utils.ClientOnly, { fallback: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", {}), children: () => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(particles_default, {}) })
  ] });
}, layout_default = Layout;

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-HMBAJWTJ.css";

// app/root.tsx
var import_jsx_runtime8 = require("react/jsx-runtime"), links = () => [{ rel: "stylesheet", href: tailwind_default }];
function App() {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Document, { children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(layout_default, { children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_react3.Outlet, {}) }) });
}
function ErrorBoundary({ error }) {
  return console.error(error), /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Document, { title: "Error!", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(layout_default, { children: /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h1", { children: "There was an error" }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { children: error.message }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("hr", {}),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { children: "Hey, developer, you should replace this with what you want your users to see." })
  ] }) }) });
}
function CatchBoundary() {
  let caught = (0, import_react3.useCatch)(), message;
  switch (caught.status) {
    case 401:
      message = /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { children: "Oops! Looks like you tried to visit a page that you do not have access to." });
      break;
    case 404:
      message = /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { children: "Oops! Looks like you tried to visit a page that does not exist." });
      break;
    default:
      throw new Error(caught.data || caught.statusText);
  }
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Document, { title: `${caught.status} ${caught.statusText}`, children: /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(layout_default, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("h1", { children: [
      caught.status,
      ": ",
      caught.statusText
    ] }),
    message
  ] }) });
}
function Document({
  children,
  title
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("html", { lang: "en", className: "w-full h-full font-mono", children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
        "meta",
        {
          name: "viewport",
          content: "width=device-width,initial-scale=1"
        }
      ),
      title ? /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("title", { children: title }) : null,
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_react3.Meta, {}),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_react3.Links, {})
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
      "script",
      {
        async: !0,
        src: "https://www.googletagmanager.com/gtag/js?id=G-T0T5SRHCGN"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("body", { className: "bg-romanBlack w-full h-full", children: [
      children,
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_react3.ScrollRestoration, {}),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_react3.Scripts, {}),
      !1
    ] })
  ] });
}

// server-entry-module:@remix-run/dev/server-build
var route1 = __toESM(require_project());

// app/routes/projects/index.tsx
var projects_exports = {};
__export(projects_exports, {
  default: () => Projects,
  loader: () => loader
});
var import_react4 = require("@remix-run/react"), import_jsx_runtime9 = require("react/jsx-runtime"), loader = async () => (await fetch(
  "https://api.github.com/users/roman-bytes/repos"
).then((response) => response.json())).filter(
  (repo) => repo.topics.includes("portfolio")
);
function Projects() {
  let repoTiles = (0, import_react4.useLoaderData)().map((repo) => /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
    "a",
    {
      href: repo.private ? "" : repo.html_url,
      target: "_blank",
      className: "w-full overflow-hidden my-2 px-2 xl:w-1/3",
      rel: "noreferrer",
      children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "border border-white bg-romanBlack p-4 flex justify-between items-center cursor-pointer hover:border-romanYellow hover:bg-romanYellow hover:text-romanBlack", children: [
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { children: repo.name }),
        repo.private ? /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
          "svg",
          {
            width: 24,
            height: 24,
            viewBox: "0 0 24 24",
            className: "fill-current",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
              "path",
              {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M17 8.5H18C19.1 8.5 20 9.4 20 10.5V20.5C20 21.6 19.1 22.5 18 22.5H6C4.90002 22.5 4 21.6 4 20.5V10.5C4 9.4 4.90002 8.5 6 8.5H7V6.5C7 3.74 9.23999 1.5 12 1.5C14.76 1.5 17 3.74 17 6.5V8.5ZM12 3.5C10.34 3.5 9 4.84 9 6.5V8.5H15V6.5C15 4.84 13.66 3.5 12 3.5ZM6 20.5V10.5H18V20.5H6ZM14 15.5C14 16.6 13.1 17.5 12 17.5C10.9 17.5 10 16.6 10 15.5C10 14.4 10.9 13.5 12 13.5C13.1 13.5 14 14.4 14 15.5Z"
              }
            )
          }
        ) : /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
          "svg",
          {
            width: 8,
            height: 12,
            viewBox: "0 0 8 12",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
              "path",
              {
                d: "M1.70504 0L0.295044 1.41L4.87504 6L0.295044 10.59L1.70504 12L7.70504 6L1.70504 0Z",
                fill: "white"
              }
            )
          }
        )
      ] })
    },
    repo.id
  ));
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "container flex flex-col items-center justify-center", children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("h1", { className: "text-4xl text-white p-4 border-b border-white", children: "Projects" }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "flex flex-wrap p-4 xl:-mx-2 overflow-hidden lg:mt-4 text-white mb-20", children: repoTiles })
  ] });
}

// app/routes/about.tsx
var about_exports = {};
__export(about_exports, {
  default: () => Index,
  meta: () => meta
});

// public/profile-pic.jpg
var profile_pic_default = "/build/_assets/profile-pic-MNCDYPPO.jpg";

// app/routes/about.tsx
var import_jsx_runtime10 = require("react/jsx-runtime"), meta = () => ({
  title: "Roman Bytes - Full Stack Developer"
});
function Index() {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "grid xl:gap-11 grid-cols-1 xl:grid-cols-2 grid-rows-1 my-10 xl:w-full lg:w-3/4 text-md leading-8 font-sans text-white border border-white bg-romanBlack", children: [
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "flex items-center justify-center w-full relative xl:overflow-visible overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
      "img",
      {
        className: "xl:relative absolute xl:top-0 -top-36",
        src: profile_pic_default,
        alt: "Picture of Jacob Roman"
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "xl:pl-0 pl-12 pr-12", children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("h1", { className: "text-8xl font-bold mt-16 font-ubuntu leading-heading tracking-heading", children: "Hello!" }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "text-lg text-stone-500 mt-4 mb-16 font-normal", children: "husband - father - coder - jedi" }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "text-md", children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { children: "I am full-stack developer who has a strong background with the front-end and is improving my back-end knowledge every day. I was born in 1988 and grew up in Michigan. Once I graduated High School I knew that I wanted to do something with computers. I ended up taking a Graphic Design class and loved it, so I went to Spring Arbor University and got a Bachelor of Fine Arts with a focus on Graphic Design. During my time in college I fell in love with coding and realized that stuff I designed, I could also build in code. Thus began my journey to learn everything I know about coding to this day." }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { children: "I have written code for Steel Fish Design, Traffic Digital Agency, and Deque. I also help out maintain a few open source projects when I have the free time. I currently work at Launch by NTT Data as a Senior Digital Engineer. In my current position I lead a team of front end developers for a client. In our day to day we use React, GQL, and Sass." }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { children: "I met my wife while attending SAU. We live in a small town in Michigan with our six year old son and two year old daughter." })
      ] })
    ] })
  ] });
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index2,
  meta: () => meta2
});

// app/components/terminal.tsx
var import_react_terminal2 = require("react-terminal"), import_jsx_runtime11 = require("react/jsx-runtime"), RomanTerminal = () => /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "hidden lg:flex w-800 h-460", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
  import_react_terminal2.ReactTerminal,
  {
    commands: {
      whoami: "Jacob Roman",
      help: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("span", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { children: "Commands:" }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("br", {}),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("br", {}),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { children: "VARIABLES" }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("br", {}),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("span", { style: { marginLeft: "20px" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("strong", { children: "about" }),
          " -- know more about me"
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("br", {}),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("span", { style: { marginLeft: "20px" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("strong", { children: "resume" }),
          " -- want to have a look at my resume?"
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("br", {}),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("span", { style: { marginLeft: "20px" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("strong", { children: "contact" }),
          " -- want to get in touch?"
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("br", {}),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("br", {}),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { children: "FUNCTIONS" }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("br", {}),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("span", { style: { marginLeft: "20px" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("strong", { children: "experience()" }),
          " - float"
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("br", {}),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { style: { marginLeft: "40px" }, children: "returns the total years of working experience" }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("br", {})
      ] }),
      contact: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { children: "follow me on twitter or send me an email" }),
      about: "Javascript Developer, Accessibility Advocate, and Team player. I am always seeking opportunities to learn and grow. I am a simple guy who loves all things tech and a good cup of coffee. Nice to meet you.",
      resume: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("span", { children: [
        "You can",
        " ",
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
          "a",
          {
            target: "_blank",
            "aria-label": "Resume",
            rel: "noreferrer",
            href: "jacob-roman-resume.pdf",
            className: "underline text-romanPrimary",
            children: "download my resume here"
          }
        )
      ] }),
      "experience()": () => `${((/* @__PURE__ */ new Date() - /* @__PURE__ */ new Date("2010-10-01")) / 1e3 / 60 / 60 / 24 / 365).toFixed(1)} years`
    },
    theme: "dark",
    prompt: "$",
    welcomeMessage: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("span", { children: [
      'Type "help" for more information. ',
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("br", {})
    ] })
  }
) }), terminal_default = RomanTerminal;

// app/routes/index.tsx
var import_jsx_runtime12 = require("react/jsx-runtime"), meta2 = () => ({
  title: "Roman Bytes | Senior Digital Engineer",
  description: "Experienced Senior Digital Engineer with a demonstrated history of working in the computer software industry. Skilled in modern Front-end technologies, and Fron-end design. Strong engineering professional with a Bachelor of Arts focused on Graphic Design from Spring Arbor University.",
  "og:url": "https://romanbytes.dev/",
  "og:type": "website",
  "og:image": profile_pic_default,
  "twitter:image": profile_pic_default,
  "twitter:card": "summary_large_image"
});
function Index2() {
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "flex justify-center items-center w-full", children: [
    /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("h1", { className: "font-sans text-white left-2.5 lg:right-2.5 xl:right-5 absolute top-2.5 xl:top-5 text-2xl text-left lg:text-right", children: [
      "Hello, I am Jacob Roman, a",
      " ",
      /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("span", { className: "text-romanYellow line-through", children: [
        " ",
        "designer",
        " "
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("br", {}),
      " Senior Digital Engineer based in Michigan."
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(terminal_default, {})
  ] });
}

// app/routes/test.tsx
var test_exports = {};
__export(test_exports, {
  default: () => test
});
var import_jsx_runtime13 = require("react/jsx-runtime");
function test() {
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "mt-20 mb-40 p-14 text-md font-sans text-white border border-white bg-romanBlack", children: [
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("h1", { className: "text-8xl font-bold mt-16 font-ubuntu leading-heading tracking-heading", children: "Hello!" }),
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "text-lg text-stone-500 mt-4 mb-16 font-normal", children: "husband - father - coder - jedi" }),
    /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "text-md", children: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis lacus massa. Curabitur vitae enim id tortor malesuada scelerisque. Cras libero elit, fringilla ut consectetur vitae, dapibus ut erat. Phasellus volutpat quam eu lorem commodo porttitor. Nam id condimentum massa, vitae faucibus sapien. Sed quis dui quis dolor ullamcorper accumsan tempus quis ligula. Mauris scelerisque eleifend mollis. Cras commodo risus vitae iaculis placerat. Integer egestas interdum mi, non vestibulum elit sodales pretium. Curabitur faucibus dolor eu volutpat consequat. Nulla euismod neque egestas, rutrum lacus pretium, venenatis libero. Pellentesque fringilla lectus ultricies ultrices tincidunt. Etiam quis pretium nulla, nec ornare ex. Cras imperdiet dolor orci, ut aliquet lorem luctus a. Nullam ultrices tincidunt tortor vel sodales. In pulvinar magna lorem, in fermentum orci pulvinar sit amet. Nulla facilisi. Quisque ipsum sem, lobortis et aliquam non, efficitur ut quam. In lacinia consectetur bibendum. Suspendisse in lacinia eros, vel luctus diam. Nullam hendrerit tellus sed libero congue vehicula. Integer ipsum justo, euismod vel mattis vel, faucibus vel massa. Integer convallis sem nec metus congue mattis. Sed vel rhoncus nulla, nec euismod urna. Integer a nunc sem. Phasellus vehicula nunc et justo sollicitudin viverra. Cras blandit lacus id maximus efficitur. Ut blandit, elit eu interdum malesuada, purus turpis fringilla arcu, et sodales ante dolor eu dui. Morbi convallis, justo et ullamcorper pellentesque, ex elit dignissim nisl, eu commodo turpis nisi vel sem. Nulla euismod libero nec augue lobortis, eget rutrum nunc imperdiet. Phasellus laoreet metus sed nisi lacinia consectetur. Vestibulum at maximus mauris. Nulla eget pretium magna. Nulla pharetra congue metus et pretium. Nunc purus nisi, ultricies ac imperdiet eu, pharetra a metus. Aenean accumsan tellus quis arcu malesuada, at scelerisque dolor varius. Pellentesque mollis, turpis in luctus scelerisque, est tellus iaculis sapien, eu accumsan augue sem sed tellus. Nulla dictum mattis lectus, at tincidunt purus viverra in. In luctus nunc elit, efficitur euismod est congue id. Pellentesque rhoncus, nisl ac pretium blandit, augue tellus elementum est, ac molestie sapien sem non leo. Proin lobortis pharetra lacus quis pretium. Donec pulvinar nunc sed luctus porta. Integer tristique efficitur nunc, nec placerat tortor. Nullam aliquam ac metus sed malesuada. Integer id ante ac turpis bibendum commodo. Curabitur faucibus rutrum rutrum. Pellentesque vehicula ipsum nunc, eget vulputate eros fringilla at. Sed eu leo eget leo tristique molestie non eu diam. Aliquam vitae maximus tortor. Mauris venenatis dapibus nibh tincidunt condimentum. Nulla facilisi. Vivamus augue ligula, iaculis sed tortor eu, hendrerit facilisis turpis. Etiam faucibus laoreet arcu et egestas. Donec mauris diam, interdum sed pellentesque nec, convallis sed ex. In purus diam, condimentum sit amet elementum sit amet, tempus at sem. Aenean ligula nisl, suscipit eu ex et, ornare elementum risus. Proin sodales massa sed orci tempor, vitae elementum ligula suscipit. Fusce a ligula vehicula, porttitor metus non, commodo sem. Sed ut magna mattis, venenatis mi congue, vestibulum nisi. Proin et lectus eu libero dignissim molestie vitae vitae libero. Proin convallis at ex id efficitur. Nulla efficitur, lacus ut ornare tempor, massa urna mattis magna, vel porta leo neque vitae dui. Nam congue congue turpis id euismod. Curabitur vel sapien elementum lacus malesuada imperdiet ut eget sem. In accumsan arcu erat, ac dictum sapien varius sed. Nulla a neque eu sem rhoncus scelerisque. Phasellus eget lacus sit amet sapien semper tempor. Nunc finibus dui eget metus auctor, eget dignissim tortor aliquam. Sed elit nisl, tempor eleifend neque et, ullamcorper auctor sapien. In maximus eu nisi a convallis. Duis ut pharetra nulla. Duis non sapien egestas, egestas augue in, rutrum dolor. Nullam pharetra molestie sapien. In fringilla leo eu mi finibus, vitae dictum neque condimentum. Quisque dignissim sem vitae dui gravida, ac volutpat augue finibus. Suspendisse euismod sed nisl et posuere. Ut finibus vulputate volutpat. Duis vestibulum sem ac lorem gravida, a varius elit faucibus. Aliquam erat volutpat. Nunc sed elementum nulla. In orci elit, lacinia sed finibus ut, consequat non sem. Nunc pharetra semper metus, vel luctus justo elementum vitae. Ut convallis velit sem, id pharetra sapien aliquet a. Fusce eleifend lorem ut malesuada commodo. Donec elementum odio eros, nec ullamcorper elit elementum nec. Nam non erat vel sapien euismod aliquam vel sit amet sem. Cras hendrerit gravida massa, sit amet tincidunt velit pretium eu. Proin quis maximus est. Curabitur luctus lacus mi, suscipit mattis diam pharetra ut. Nam quis porttitor lorem. Maecenas velit dolor, pharetra ac lectus in, ultrices condimentum tortor. Pellentesque sed ex pellentesque sapien efficitur dignissim eget id felis. Pellentesque sed tortor euismod, maximus justo vitae, maximus ante. Nam in mi vestibulum, tincidunt ex in, porta arcu. Pellentesque pellentesque, quam eget congue consectetur, diam augue mollis lectus, ut gravida libero libero quis leo. Donec tincidunt neque nec metus mollis tempus. Aenean ac nulla eget magna consectetur lobortis. Nunc quis rutrum ex, eget ornare elit. Nullam porta magna sit amet erat volutpat varius. Phasellus magna ex, malesuada nec tristique et, laoreet sed justo. Suspendisse potenti. Donec consequat suscipit semper. Vivamus dictum, metus quis sodales faucibus, leo diam dapibus urna, aliquam pretium lorem arcu volutpat ante. Nullam luctus diam id velit luctus mattis. Cras sodales, lorem nec sollicitudin vehicula, risus elit blandit ex, a fermentum leo augue vitae nisi. Integer iaculis neque eget magna laoreet, eu imperdiet velit vehicula. Duis nec luctus nulla, sit amet scelerisque neque. Duis vitae dui porta, eleifend urna ultricies, posuere risus. Phasellus sit amet elit vel turpis varius efficitur a sed erat. Ut vel finibus nisi. Aliquam a pharetra ante, vel malesuada tellus. Fusce fringilla, elit quis molestie sagittis, leo tellus imperdiet felis, et volutpat leo lacus vel nunc. Phasellus porttitor turpis quis lorem venenatis semper. Quisque dictum diam quis accumsan suscipit. Pellentesque vehicula rhoncus vestibulum. Ut viverra ante ac ante maximus, eu pulvinar leo laoreet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque sit amet rutrum felis, vitae faucibus metus. In accumsan vestibulum dui, ut efficitur lacus fermentum vel. Sed posuere dolor porttitor, eleifend odio ac, suscipit arcu. Quisque vulputate arcu eget elit dictum, vitae consectetur nunc mollis. Sed ex metus, congue a enim et, commodo consequat tellus. Aenean porta tempor dui quis viverra. Etiam pretium tellus at justo vulputate, sed dignissim nibh finibus. Morbi vitae ex feugiat, vestibulum sem et, ultricies sapien. Aliquam id velit nec leo faucibus ultricies. Curabitur consectetur pharetra felis, in imperdiet libero. Morbi congue pretium dignissim. Donec ornare mollis orci in hendrerit. Aenean ut dignissim nulla. Aenean imperdiet aliquet rutrum. Integer quis suscipit nibh, ac tincidunt lorem. Aenean non tellus semper, euismod felis eu, volutpat tortor. Donec non ullamcorper elit. Praesent vitae velit sit amet tortor efficitur ultrices eu nec justo. Aliquam eget quam est. Ut dignissim gravida euismod. Maecenas sit amet hendrerit nunc. Donec quis elit quis tortor euismod dignissim vel vel ex. Nam quis quam ut risus ullamcorper feugiat. Pellentesque vel bibendum quam. Duis elementum diam sed ligula blandit iaculis. Sed posuere porttitor eros, id mollis nibh tempor ut. Proin interdum velit vel tincidunt laoreet. Aenean sodales urna et tortor tempor, et suscipit tortor tincidunt. Quisque sagittis ex erat, id dignissim sem imperdiet vitae. Fusce vestibulum, sem quis aliquam facilisis, libero lectus suscipit nulla, id vulputate nisl purus eu nunc. Duis at vehicula est. Nunc semper magna vitae lacus suscipit dictum. Quisque varius dolor at lacinia posuere. Nullam eget mauris eu lorem posuere hendrerit. Nullam vel lacinia leo, nec laoreet quam. Sed tempus efficitur justo. Vestibulum id nisi finibus, accumsan tellus id, porta nulla. Nulla vel nisl justo. Fusce pellentesque mattis lorem eget condimentum. In rhoncus augue sed nisi lobortis, eu malesuada nulla rhoncus. Mauris ut mauris eget dolor imperdiet dignissim tempor eget ex. Donec velit turpis, ornare quis mi id, sodales vestibulum nunc. Praesent euismod tristique tellus, id suscipit mauris vestibulum a. Fusce et est in lorem tempus fermentum in conggvallis ligula.",
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("p", { children: "I am full-stack developer who has a strong background with the front-end and is improving my back-end knowledge every day. I was born in 1988 and grew up in Michigan. Once I graduated High School I knew that I wanted to do something with computers. I ended up taking a Graphic Design class and loved it, so I went to Spring Arbor University and got a Bachelor of Fine Arts with a focus on Graphic Design. During my time in college I fell in love with coding and realized that stuff I designed, I could also build in code. Thus began my journey to learn everything I know about coding to this day." }),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("p", { children: "I have written code for Steel Fish Design, Traffic Digital Agency, and Deque. I also help out maintain a few open source projects when I have the free time. I currently work at Nexient as a Senior Developer I. In my current position I lead a team of front end developers for a client. In our day to day we use React, GQL, and Sass." }),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("p", { children: "I met my wife while attending SAU. We live in a small town in Michigan with our six year old son and two year old daughter." })
    ] })
  ] });
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-LQNAOJYA.js", imports: ["/build/_shared/chunk-CYGJI5SN.js", "/build/_shared/chunk-3Z32TANI.js", "/build/_shared/chunk-T36URGAI.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-5AEJJ5HL.js", imports: ["/build/_shared/chunk-MLOQF2TE.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !0, hasErrorBoundary: !0 }, "routes/about": { id: "routes/about", parentId: "root", path: "about", index: void 0, caseSensitive: void 0, module: "/build/routes/about-CR6E34RA.js", imports: ["/build/_shared/chunk-3LI7YCDA.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-7NNSYYK7.js", imports: ["/build/_shared/chunk-3LI7YCDA.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/projects/index": { id: "routes/projects/index", parentId: "root", path: "projects", index: !0, caseSensitive: void 0, module: "/build/routes/projects/index-YH5PZDJQ.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/projects/project": { id: "routes/projects/project", parentId: "root", path: "projects/project", index: void 0, caseSensitive: void 0, module: "/build/routes/projects/project-I6AMKUWR.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/test": { id: "routes/test", parentId: "root", path: "test", index: void 0, caseSensitive: void 0, module: "/build/routes/test-EXHRJOVC.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "c90e5535", hmr: void 0, url: "/build/manifest-C90E5535.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { v2_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !1, v2_headers: !1, v2_meta: !1, v2_normalizeFormMethod: !1, v2_routeConvention: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/projects/project": {
    id: "routes/projects/project",
    parentId: "root",
    path: "projects/project",
    index: void 0,
    caseSensitive: void 0,
    module: route1
  },
  "routes/projects/index": {
    id: "routes/projects/index",
    parentId: "root",
    path: "projects",
    index: !0,
    caseSensitive: void 0,
    module: projects_exports
  },
  "routes/about": {
    id: "routes/about",
    parentId: "root",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: about_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/test": {
    id: "routes/test",
    parentId: "root",
    path: "test",
    index: void 0,
    caseSensitive: void 0,
    module: test_exports
  }
};

// server.js
function getLoadContext(event, context) {
  let rawAuthorizationString, netlifyGraphToken;
  event.authlifyToken !== null && (netlifyGraphToken = event.authlifyToken);
  let authHeader = event.headers.authorization, graphSignatureHeader = event.headers["x-netlify-graph-signature"];
  authHeader !== null && /Bearer /gi.test(authHeader) && (rawAuthorizationString = authHeader.split(" ")[1]);
  let loadContext = {
    clientNetlifyGraphAccessToken: rawAuthorizationString,
    netlifyGraphToken,
    netlifyGraphSignature: graphSignatureHeader
  };
  return Object.keys(loadContext).forEach((key) => {
    loadContext[key] == null && delete loadContext[key];
  }), loadContext;
}
var handler = (0, import_netlify.createRequestHandler)({
  build: server_build_exports,
  getLoadContext,
  mode: "production"
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
