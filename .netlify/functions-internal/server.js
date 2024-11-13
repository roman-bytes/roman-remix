"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
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
var import_node_stream = require("node:stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = require("isbot"), import_server = require("react-dom/server");
var import_jsx_runtime = require("react/jsx-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return (0, import_isbot.isbot)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onAllReady() {
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onShellReady() {
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          console.error(error), responseStatusCode = 500;
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links,
  loader: () => loader
});
var import_react5 = require("@remix-run/react");

// app/components/layout.tsx
var import_react3 = require("react"), import_classnames = __toESM(require("classnames")), import_react_terminal = require("react-terminal"), import_remix_utils = require("remix-utils"), import_react4 = require("@remix-run/react");

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
var import_node2 = require("@remix-run/node");

// app/components/new-layout.tsx
var import_react_router = require("react-router"), import_jsx_runtime7 = require("react/jsx-runtime");
function NewLayout({ children }) {
  let isHomePage = (0, import_react_router.useMatches)()[1].pathname === "/";
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: `flex flex-col items-center ${isHomePage ? "lg:justify-center lg:h-full" : ""} w-full`, children });
}

// app/components/roman-bytes-logo.tsx
var import_react2 = require("@remix-run/react"), import_jsx_runtime8 = require("react/jsx-runtime");
function RomanBytesLogo() {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
    import_react2.Link,
    {
      to: "/",
      className: "mb-8 flex w-full lg:w-fit justify-center",
      children: /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("svg", { width: "30", height: "38", viewBox: "0 0 30 38", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
          "path",
          {
            d: "M25.8144 20.2562C24.6151 22.3551 21.7168 24.2539 20.5674 24.9036C19.6679 25.2034 19.6679 25.5032 19.518 25.6531C19.3681 25.803 19.9678 25.6531 19.0683 27.452C18.3487 28.8912 16.8696 28.6513 16.2199 28.3515C15.8701 28.1017 15.0806 27.8418 14.7208 28.8013C14.361 29.7607 16.07 30.6002 16.9695 30.9H19.3681C19.518 32.4991 20.4775 35.9371 23.116 36.8966C25.7544 37.856 27.7133 37.896 28.3629 37.7961C28.8127 37.4962 29.7121 35.6973 29.7121 30.9C29.7121 26.1028 27.9132 21.9053 27.0137 20.4062C26.564 19.8065 26.414 18.6071 25.8144 20.2562Z",
            fill: "#CC9340"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
          "path",
          {
            d: "M6.17574 23.8541L4.07696 25.2033L1.97817 26.7025C1.52843 27.1522 1.4085 27.0023 1.2286 26.5526C0.0292971 23.5543 -0.0706452 20.0063 0.0292971 18.6072C0.0792682 16.1086 1.43848 10.0021 6.47557 5.56469C11.5127 1.12727 17.1694 0.0178868 19.3681 0.0178754C19.2482 1.09724 18.9184 2.86625 19.2182 3.31597L21.9166 0.317702C22.2165 0.0178754 21.9166 -0.0345871 22.966 0.0178754C25.3647 0.137806 28.263 1.3671 29.4123 1.96675C30.1319 2.32654 29.8121 3.01614 29.5622 3.31597C28.5628 4.46531 26.474 6.97386 26.1142 7.81337C25.7544 8.65288 25.1648 8.56294 24.9149 8.41302C24.2653 8.01326 22.0366 7.18374 18.3187 7.06381C14.6009 6.94388 10.7731 9.71228 9.32393 11.1115C11.1729 10.3619 15.4704 8.83279 17.869 8.71286C20.8673 8.56295 22.0666 9.31251 23.2659 9.61234C24.2253 9.8522 23.9655 10.5118 23.7156 10.8116L21.7667 13.5101C21.4669 14.1097 21.1671 14.0624 20.5674 13.8099C17.7191 12.6106 14.7208 13.2103 10.8231 15.6089C6.92531 18.0075 6.62548 22.355 6.62548 23.1045C6.62548 23.7042 6.32566 23.8541 6.17574 23.8541Z",
            fill: "#CC9340"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
          "path",
          {
            d: "M8.12483 26.2531C9.68393 30.6905 7.47521 32.2996 6.17596 32.5494C5.17654 32.6993 3.77735 33.1791 6.17596 33.8987C9.17423 34.7981 12.4723 31.5 13.5217 29.851C14.3612 28.5318 14.1713 27.0026 13.9715 26.403C13.7716 25.9033 13.6716 24.574 14.8709 23.2548C16.3701 21.6058 18.7687 23.4047 19.0685 24.0044C19.3084 24.4841 19.868 24.2043 20.1179 24.0044C21.5171 22.855 24.4954 20.3465 25.215 19.507C25.9345 18.6675 25.7147 18.2577 25.5148 18.1578C25.2649 17.5081 23.8058 15.8791 19.968 14.5598C16.1302 13.2406 12.2724 15.5093 10.8233 16.8085C9.27417 18.1078 6.56574 21.8156 8.12483 26.2531Z",
            fill: "#CC9340"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("circle", { cx: "16.8204", cy: "25.5035", r: "1.79896", fill: "#CC9340" })
      ] })
    }
  );
}
var roman_bytes_logo_default = RomanBytesLogo;

// app/components/layout.tsx
var import_jsx_runtime9 = require("react/jsx-runtime");
var Layout = ({
  children
}) => {
  let data = (0, import_react4.useLoaderData)(), [mobileMenu, setMobileMenu] = (0, import_react3.useState)(!1), handleMenuOpen = () => {
    setMobileMenu(!mobileMenu);
  }, mobileMenuClass = (0, import_classnames.default)(
    "justify-between my-5",
    mobileMenu ? "flex h-auto" : "hidden h-0"
  ), footerMobileClass = (0, import_classnames.default)(
    "flex-no-wrap justify-center",
    mobileMenu ? "flex" : "hidden"
  );
  return data.ENV.FEATURE_NEW_BRAND === "true" ? /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(NewLayout, {}) : /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(import_react_terminal.TerminalContextProvider, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("main", { className: "h-full", children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "lg:block absolute xl:top-5 xl:left-5 lg:top-2.5 lg:left-2.5", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(roman_bytes_logo_default, {}) }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "flex h-full w-full justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("main", { className: "container lg:mx-40 h-max min-h-full lg:flex", children }) }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "hidden lg:flex w-full fixed text-romanText xl:p-20 lg:p-10 justify-between items-end bottom-0 left-0 right-0", children: [
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(social_default, {}),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(nav_default, {})
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "lg:hidden p-5 border-t border-white bg-romanBlack w-full fixed text-romanText lg:p-10 flex justify-between bottom-0 left-0 right-0 flex-col", children: [
        /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "flex flex-row justify-between items-center", children: [
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "xl:top-5 xl:left-5 lg:top-2.5 lg:left-2.5", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(logo_default, {}) }),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
            "svg",
            {
              width: 24,
              height: 24,
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              className: "sm:block lg:hidden xl:hidden cursor-pointer",
              onClick: () => handleMenuOpen(),
              children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
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
        /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: mobileMenuClass, children: [
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(social_default, {}),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(nav_default, {})
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("footer", { className: footerMobileClass, children: [
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "text-sm", children: "Made with love from Michigan." }),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "text-sm", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("a", { href: "https://github.com/roman-bytes/roman-bytes-dev", children: [
            "Source Code",
            " "
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(footer_default, {})
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_remix_utils.ClientOnly, { fallback: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", {}), children: () => /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(particles_default, {}) })
  ] });
}, layout_default = Layout;

// app/root.tsx
var import_node3 = require("@remix-run/node");

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-XDJPK255.css";

// app/root.tsx
var import_jsx_runtime10 = require("react/jsx-runtime"), links = () => [{ rel: "stylesheet", href: tailwind_default }];
async function loader() {
  return (0, import_node3.json)({
    ENV: {
      FEATURE_NEW_BRAND: process.env.FEATURE_NEW_BRAND
    }
  });
}
function App() {
  return (0, import_react5.useLoaderData)().ENV.FEATURE_NEW_BRAND === "true" ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Document, { children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(NewLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_react5.Outlet, {}) }) }) : /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Document, { children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(layout_default, { children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_react5.Outlet, {}) }) });
}
function ErrorBoundary({ error }) {
  return console.error(error), "true" ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Document, { children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(NewLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_react5.Outlet, {}) }) }) : /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Document, { title: "Error!", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(layout_default, { children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("h1", { children: "There was an error" }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { children: error.message }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("hr", {}),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { children: "Hey, developer, you should replace this with what you want your users to see." })
  ] }) }) });
}
function CatchBoundary() {
  let caught = (0, import_react5.useCatch)(), isNewLayout = "true", message;
  switch (caught.status) {
    case 401:
      message = /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { children: "Oops! Looks like you tried to visit a page that you do not have access to." });
      break;
    case 404:
      message = /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { children: "What you are looking for is not there. Please visit the home page and try again." });
      break;
    default:
      throw new Error(caught.data || caught.statusText);
  }
  return isNewLayout ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Document, { title: `${caught.status} ${caught.statusText}`, children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(NewLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "mt-20 mb-40 mx-auto p-14 text-md font-sans text-white border border-white bg-romanBlack", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("h1", { className: "text-8xl font-bold mt-16 font-ubuntu leading-heading tracking-heading", children: [
    caught.status,
    ": ",
    caught.statusText
  ] }) }) }) }) : /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Document, { title: `${caught.status} ${caught.statusText}`, children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(layout_default, { children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "mt-20 mb-40 mx-auto p-14 text-md font-sans text-white border border-white bg-romanBlack", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("h1", { className: "text-8xl font-bold mt-16 font-ubuntu leading-heading tracking-heading", children: [
    caught.status,
    ": ",
    caught.statusText
  ] }) }) }) });
}
function Document({
  children,
  title
}) {
  var _a;
  let data = (0, import_react5.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("html", { lang: "en", className: "w-full h-full font-mono", children: [
    /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
        "meta",
        {
          name: "viewport",
          content: "width=device-width,initial-scale=1"
        }
      ),
      title ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("title", { children: title }) : null,
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_react5.Meta, {}),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_react5.Links, {})
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("body", { className: `${((_a = data == null ? void 0 : data.ENV) == null ? void 0 : _a.FEATURE_NEW_BRAND) === "true" ? "bg-white roman-grid" : "bg-romanBlack"} w-full h-full`, children: [
      children,
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_react5.ScrollRestoration, {}),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_react5.Scripts, {}),
      !1
    ] })
  ] });
}

// app/routes/projects/$name.tsx
var name_exports = {};
__export(name_exports, {
  default: () => name_default,
  loader: () => loader2
});
var import_node4 = require("@remix-run/node");
var import_react_router2 = require("react-router"), import_react6 = require("@remix-run/react"), import_jsx_runtime11 = require("react/jsx-runtime"), loader2 = async ({ params }) => {
  let path = params;
  console.log(path);
  let currentRepo = await fetch(`https://api.github.com/repos/roman-bytes/${path.name}`).then((res) => res.json());
  return (0, import_node4.json)({
    repo: currentRepo
  });
};
function Name() {
  let currentRoute = (0, import_react_router2.useMatches)()[1], { repo } = (0, import_react6.useLoaderData)();
  return console.log("repo", repo), /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "container relative border-2 border-romanBlack rounded-3xl bg-white pt-32 px-28 pb-28 my-28", children: [
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "absolute top-10 left-0 right-0 text-center text-romanPrimary mb-16", children: `~ ${currentRoute.pathname} ` }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(roman_bytes_logo_default, {}),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_react6.Link, { to: "/projects", children: "../ Back to projects" }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { children: "add in CMS here." })
  ] });
}
var name_default = Name;

// app/routes/projects/index.tsx
var projects_exports = {};
__export(projects_exports, {
  default: () => Projects,
  loader: () => loader3
});
var import_react7 = require("@remix-run/react"), import_node5 = require("@remix-run/node");
var import_react_router3 = require("react-router");

// app/components/plus.tsx
var import_jsx_runtime12 = require("react/jsx-runtime");
function Plus({ className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("svg", { className, width: "5", height: "5", viewBox: "0 0 5 5", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("path", { d: "M1.96429 5V2.97968H0V1.99774H1.96429V0H3.03571V1.99774H5V2.97968H3.03571V5H1.96429Z", fill: "black" }) });
}
var plus_default = Plus;

// app/routes/projects/index.tsx
var import_jsx_runtime13 = require("react/jsx-runtime"), getLangColors = async (langs) => {
  let colors = await fetch("https://raw.githubusercontent.com/ozh/github-colors/refs/heads/master/colors.json").then((res) => res.json());
  return langs.reduce((acc, lang) => (colors[lang] && (acc[lang] = {
    color: colors[lang].color,
    name: lang
  }), acc), {});
}, loader3 = async () => {
  let portfolio = (await fetch(
    "https://api.github.com/users/roman-bytes/repos?sort=updated_at"
  ).then((response) => response.json())).filter(
    (repo) => repo.topics.includes("portfolio")
  ), setLangs = async (repo) => {
    let githubLangs = await fetch(repo.languages_url).then((response) => response.json());
    return await getLangColors(Object.keys(githubLangs));
  }, projects = await Promise.all(portfolio.map(async (repo) => ({
    topics: repo.topics,
    html_url: repo.html_url,
    id: repo.id,
    private: repo.private,
    name: repo.name,
    updated_at: repo.updated_at,
    description: repo.description,
    languages: setLangs(repo)
  })));
  return (0, import_node5.json)({
    repos: projects,
    ENV: {
      FEATURE_NEW_BRAND: process.env.FEATURE_NEW_BRAND
    }
  });
};
function Projects() {
  let { repos, ENV } = (0, import_react7.useLoaderData)(), currentRoute = (0, import_react_router3.useMatches)()[1], isNewLayout = (ENV == null ? void 0 : ENV.FEATURE_NEW_BRAND) === "true", repoTiles = repos.map((repo) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
    "a",
    {
      href: repo.private ? "" : repo.html_url,
      target: "_blank",
      className: "w-full overflow-hidden my-2 px-2 xl:w-1/3",
      rel: "noreferrer",
      children: /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "border border-white bg-romanBlack p-4 flex justify-between items-center cursor-pointer hover:border-romanYellow hover:bg-romanYellow hover:text-romanBlack", children: [
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { children: repo.name }),
        repo.private ? /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
          "svg",
          {
            width: 24,
            height: 24,
            viewBox: "0 0 24 24",
            className: "fill-current",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
              "path",
              {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M17 8.5H18C19.1 8.5 20 9.4 20 10.5V20.5C20 21.6 19.1 22.5 18 22.5H6C4.90002 22.5 4 21.6 4 20.5V10.5C4 9.4 4.90002 8.5 6 8.5H7V6.5C7 3.74 9.23999 1.5 12 1.5C14.76 1.5 17 3.74 17 6.5V8.5ZM12 3.5C10.34 3.5 9 4.84 9 6.5V8.5H15V6.5C15 4.84 13.66 3.5 12 3.5ZM6 20.5V10.5H18V20.5H6ZM14 15.5C14 16.6 13.1 17.5 12 17.5C10.9 17.5 10 16.6 10 15.5C10 14.4 10.9 13.5 12 13.5C13.1 13.5 14 14.4 14 15.5Z"
              }
            )
          }
        ) : /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
          "svg",
          {
            width: 8,
            height: 12,
            viewBox: "0 0 8 12",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
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
  )), getLastUpdated = (dateString) => {
    let date = new Date(dateString), differenceInTime = (/* @__PURE__ */ new Date()).getTime() - date.getTime(), minutes = Math.floor(differenceInTime / (1e3 * 60)), hours = Math.floor(differenceInTime / (1e3 * 60 * 60)), days = Math.floor(differenceInTime / (1e3 * 60 * 60 * 24));
    return days > 0 ? `${days} day${days > 1 ? "s" : ""} ago` : hours > 0 ? `${hours} hour${hours > 1 ? "s" : ""} ago` : `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  };
  if (isNewLayout) {
    let repoCards = repos.map((repo, ix) => {
      let langs = Object.keys(repo.languages);
      return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("section", { className: "w-full lg:w-1/2 max-w-[400] max-h-[225] min-w-[400] min-h-[225] border border-dashed hover:border-solid hover:border-romanPrimary border-romanText p-6 mt-[-1px] ml-0 lg:ml-[-1px] relative", children: [
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("p", { className: "text-md text-romanPrimary", children: getLastUpdated(repo.updated_at) }),
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("h2", { className: "text-xl", children: repo.name }),
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("p", { className: "mt-8 text-md text-romanPrimary", children: repo.description ? repo.description : "No description" }),
        /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("footer", { className: "flex justify-between items-center mt-36", children: [
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "flex flex-row", children: langs.map((lang) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "bg-romanText text-slate-700 rounded-full border-2 border-slate-500 text-md flex items-center justify-center p-3", children: lang }, lang)) }),
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
            "a",
            {
              href: repo.html_url,
              target: "_blank",
              children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
                "svg",
                {
                  width: "107",
                  height: "16",
                  viewBox: "0 0 107 16",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
                    "path",
                    {
                      d: "M106.707 8.70711C107.098 8.31658 107.098 7.68342 106.707 7.29289L100.343 0.928932C99.9526 0.538408 99.3195 0.538408 98.9289 0.928932C98.5384 1.31946 98.5384 1.95262 98.9289 2.34315L104.586 8L98.9289 13.6569C98.5384 14.0474 98.5384 14.6805 98.9289 15.0711C99.3195 15.4616 99.9526 15.4616 100.343 15.0711L106.707 8.70711ZM0 9H106V7H0V9Z",
                      fill: "#BF860F"
                    }
                  )
                }
              )
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(plus_default, { className: "absolute top-[-3px] left-[-3px]" }),
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(plus_default, { className: "absolute top-[-3px] right-[-3px]" }),
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(plus_default, { className: "absolute bottom-[-3px] left-[-3px]" }),
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(plus_default, { className: "absolute bottom-[-3px] right-[-3px]" })
      ] }, repo.id);
    });
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "container relative border-2 border-romanBlack lg:rounded-3xl bg-white px-10 pt-10 lg:pt-32 lg:px-28 pb-28 lg:my-28", children: [
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "hidden lg:block absolute top-10 left-0 right-0 text-center text-romanPrimary mb-16", children: `~ ${currentRoute.pathname} ` }),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(roman_bytes_logo_default, {}),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("h1", { className: "text-romanBlack font-newMono font-bold text-2xl hidden lg:block", children: "Projects" }),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "flex flex-wrap mt-10 lg:mt-28 w-full lg:w-10/12", children: repoCards })
    ] });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "container flex flex-col items-center justify-center", children: [
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("h1", { className: "text-4xl text-white p-4 border-b border-white", children: "Projects" }),
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "flex flex-wrap p-4 xl:-mx-2 overflow-hidden lg:mt-4 text-white mb-20", children: repoTiles })
  ] });
}

// app/routes/[sitemap.xml].jsx
var sitemap_xml_exports = {};
__export(sitemap_xml_exports, {
  loader: () => loader4
});
var loader4 = () => {
  let content = `
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
    <loc>https://www.romanbytes.dev/</loc>
    <lastmod>2022-01-08T00:15:16+01:00</lastmod>
    <priority>1.0</priority>
    </url>
    </urlset>
    `;
  return new Response(content, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
      "xml-version": "1.0",
      encoding: "UTF-8"
    }
  });
};

// app/routes/[robots.txt].jsx
var robots_txt_exports = {};
__export(robots_txt_exports, {
  loader: () => loader5
});
var loader5 = () => {
  let robotText = `
    User-agent: Googlebot
    Disallow: /nogooglebot/
    Disallow: /wp-content/
    Disallow: /wp-admin/

    User-agent: *
    Allow: /

    Sitemap: http://www.romanbytes.dev/sitemap.xml
    `;
  return new Response(robotText, {
    status: 200,
    headers: {
      "Content-Type": "text/plain"
    }
  });
};

// app/routes/blog/$slug.tsx
var slug_exports = {};
__export(slug_exports, {
  default: () => slug_default,
  loader: () => loader6
});
var import_react_router4 = require("react-router"), import_react8 = require("@remix-run/react"), import_node6 = require("@remix-run/node"), import_date_fns = require("date-fns"), import_jsx_runtime14 = require("react/jsx-runtime"), loader6 = async ({ params }) => {
  let currentDevToPost = await fetch(`https://dev.to/api/articles/${params.slug}`).then((res) => res.json());
  return (0, import_node6.json)({
    article: currentDevToPost
  });
}, formatTime = (time) => (0, import_date_fns.format)((0, import_date_fns.parseISO)(time), "MMMM dd, yyyy");
function Slug() {
  let currentRoute = (0, import_react_router4.useMatches)()[1], data = (0, import_react8.useLoaderData)(), hasCoverImage = data.article.cover_image;
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
    "main",
    {
      className: "content container relative border-2 font-newMono border-romanBlack lg:rounded-3xl lg:my-28 bg-contain overflow-hidden",
      style: {
        backgroundImage: `url(${data.article.cover_image})`
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: `${hasCoverImage ? "bg-white text-romanBlack" : "bg-romanBlack text-romanPrimary"} absolute top-10 left-0 right-0 text-center mb-16 w-fit mx-auto hidden lg:block z-10`, children: `~ ${currentRoute.pathname} ` }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: `pt-10 lg:pt-48 px-10 lg:px-28 pb-10 relative ${hasCoverImage ? "bg-white bg-opacity-90" : "bg-romanBlack"}`, children: [
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(roman_bytes_logo_default, {}),
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_react8.Link, { className: "hidden lg:block absolute right-28 bottom-10", to: "/blog", children: "../ Back to blog" }),
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("h2", { className: `${hasCoverImage ? "" : "text-romanPrimary"} font-extrabold text-5xl mt-20 w-3/4`, children: data.article.title })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "bg-white px-10 lg:px-28 pb-24", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "w-full lg:w-6/12", children: [
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "text-romanPrimary font-bold pt-10", children: formatTime(data.article.created_at) }),
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "flex items-center flex-wrap", children: data.article.tags.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "text-romanPrimary text-md mr-4", children: [
            "#",
            tag
          ] }, tag)) }),
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "mt-20", dangerouslySetInnerHTML: { __html: data.article.body_html } })
        ] }) })
      ]
    }
  );
}
var slug_default = Slug;

// app/routes/blog/index.tsx
var blog_exports = {};
__export(blog_exports, {
  default: () => Blog,
  loader: () => loader7
});
var import_react_router5 = require("react-router");
var import_react9 = require("@remix-run/react"), import_node7 = require("@remix-run/node"), import_date_fns2 = require("date-fns"), import_jsx_runtime15 = require("react/jsx-runtime"), loader7 = async () => {
  let articles = await fetch("https://dev.to/api/articles?username=romanbytes").then((res) => res.json());
  return (0, import_node7.json)({
    posts: articles
  });
}, formatTime2 = (time) => (0, import_date_fns2.format)((0, import_date_fns2.parseISO)(time), "MM/dd/yyyy");
function Blog() {
  let { posts } = (0, import_react9.useLoaderData)(), currentRoute = (0, import_react_router5.useMatches)()[1];
  return console.log("POSTS", posts), /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("main", { className: "container relative border-2 border-romanBlack lg:rounded-3xl bg-white pt-10 lg:pt-32 px-10 lg:px-28 pb-10 lg:pb-28 lg:my-28", children: [
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "hidden lg:block absolute top-10 left-0 right-0 text-center text-romanPrimary mb-16", children: `~ ${currentRoute.pathname} ` }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(roman_bytes_logo_default, {}),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("h1", { className: "font-newMono text-romanBlack text-2xl font-bold hidden lg:hidden", children: "Blog" }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("section", { className: "mt-10 lg:mt-32", children: posts.map((post) => /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "relative w-full lg:w-1/2 max-w-[400] max-h-[225] min-w-[400] min-h-[225] border border-dashed border-romanText hover:border-solid hover:border-romanPrimary p-8 mt-[-1px] ml-0 lg:ml-[-1px]", children: [
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "lg:ml-16", children: formatTime2(post.created_at) }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_react9.Link, { to: `/blog/${post.id}`, children: /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("h2", { className: "text-lg lg:text-4xl flex my-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { className: "hidden lg:block text-romanText mr-6", children: "//" }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { className: "block", children: post.title })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "flex flex-wrap items-center lg:ml-16", children: post.tag_list.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "text-romanPrimary text-md mr-4", children: [
        "#",
        tag
      ] }, tag)) }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(plus_default, { className: "absolute top-[-3px] left-[-3px]" }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(plus_default, { className: "absolute top-[-3px] right-[-3px]" }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(plus_default, { className: "absolute bottom-[-3px] left-[-3px]" }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(plus_default, { className: "absolute bottom-[-3px] right-[-3px]" })
    ] }, post.id)) })
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
var import_jsx_runtime16 = require("react/jsx-runtime"), meta = () => ({
  title: "Roman Bytes - Full Stack Developer"
});
function Index() {
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "grid xl:gap-11 grid-cols-1 xl:grid-cols-2 grid-rows-1 my-10 xl:w-full lg:w-3/4 text-md leading-8 font-sans text-white border border-white bg-romanBlack", children: [
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "flex items-center justify-center w-full relative xl:overflow-visible overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
      "img",
      {
        className: "xl:relative absolute xl:top-0 -top-36",
        src: profile_pic_default,
        alt: "Picture of Jacob Roman"
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "xl:pl-0 pl-12 pr-12", children: [
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("h1", { className: "text-8xl font-bold mt-16 font-ubuntu leading-heading tracking-heading", children: "Hello!" }),
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "text-lg text-stone-500 mt-4 mb-16 font-normal", children: "husband - father - coder - jedi" }),
      /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "text-md", children: [
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("p", { children: "I am full-stack developer who has a strong background with the front-end and is improving my back-end knowledge every day. I was born in 1988 and grew up in Michigan. Once I graduated High School I knew that I wanted to do something with computers. I ended up taking a Graphic Design class and loved it, so I went to Spring Arbor University and got a Bachelor of Fine Arts with a focus on Graphic Design. During my time in college I fell in love with coding and realized that stuff I designed, I could also build in code. Thus began my journey to learn everything I know about coding to this day." }),
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("p", { children: "I have written code for Steel Fish Design, Traffic Digital Agency, and Deque. I also help out maintain a few open source projects when I have the free time. I currently work at Launch by NTT Data as a Senior Digital Engineer. In my current position I lead a team of front end developers for a client. In our day to day we use React, GQL, and Sass." }),
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("p", { children: "I met my wife while attending SAU. We live in a small town in Michigan with our six year old son and two year old daughter." })
      ] })
    ] })
  ] });
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index2,
  loader: () => loader8,
  meta: () => meta2
});
var import_node8 = require("@remix-run/node"), import_react11 = require("@remix-run/react");

// app/components/terminal.tsx
var import_react_terminal2 = require("react-terminal"), import_jsx_runtime17 = require("react/jsx-runtime"), RomanTerminal = () => /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "hidden lg:flex w-800 h-460", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
  import_react_terminal2.ReactTerminal,
  {
    commands: {
      whoami: "Jacob Roman",
      help: /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("span", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { children: "Commands:" }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("br", {}),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("br", {}),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { children: "VARIABLES" }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("br", {}),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("span", { style: { marginLeft: "20px" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("strong", { children: "about" }),
          " -- know more about me"
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("br", {}),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("span", { style: { marginLeft: "20px" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("strong", { children: "resume" }),
          " -- want to have a look at my resume?"
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("br", {}),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("span", { style: { marginLeft: "20px" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("strong", { children: "contact" }),
          " -- want to get in touch?"
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("br", {}),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("br", {}),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { children: "FUNCTIONS" }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("br", {}),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("span", { style: { marginLeft: "20px" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("strong", { children: "experience()" }),
          " - float"
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("br", {}),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { style: { marginLeft: "40px" }, children: "returns the total years of working experience" }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("br", {})
      ] }),
      contact: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { children: "follow me on twitter or send me an email" }),
      about: "Javascript Developer, Accessibility Advocate, and Team player. I am always seeking opportunities to learn and grow. I am a simple guy who loves all things tech and a good cup of coffee. Nice to meet you.",
      resume: /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("span", { children: [
        "You can",
        " ",
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
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
    welcomeMessage: /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("span", { children: [
      'Type "help" for more information. ',
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("br", {})
    ] })
  }
) }), terminal_default = RomanTerminal;

// app/components/new-index.tsx
var import_react10 = require("@remix-run/react");

// app/components/newFooter.tsx
var import_react_router6 = require("react-router");
var import_jsx_runtime18 = require("react/jsx-runtime");
function NewFooter() {
  let socialLinks = [
    {
      social: "X",
      link: "https://x.com/romanbytes"
    },
    {
      social: "github",
      link: "https://github.com/roman-bytes"
    },
    {
      social: "codepen",
      link: "https://codepen.io/romanbytes"
    },
    {
      social: "dev.to",
      link: "https://dev.to/romanbytes"
    }
  ];
  return (0, import_react_router6.useMatches)()[1].pathname === "/" ? /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("ul", { className: "flex flex-col lg:items-end mt-10 lg:mt-0 ", children: socialLinks.map((link) => /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(
    "a",
    {
      href: link.link,
      className: "text-romanPrimary w-28 text-left",
      target: "_blank",
      children: [
        "// ",
        link.social
      ]
    },
    link.social
  )) }) : /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "flex flex-row justify-between", children: [
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(roman_bytes_logo_default, {}),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("ul", { className: "flex flex-col items-end", children: socialLinks.map((link) => /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(
      "a",
      {
        href: link.link,
        className: "text-romanPrimary w-28 text-left",
        target: "_blank",
        children: [
          "// ",
          link.social
        ]
      },
      link.social
    )) })
  ] });
}
var newFooter_default = NewFooter;

// app/components/new-index.tsx
var import_react_router7 = require("react-router"), import_jsx_runtime19 = require("react/jsx-runtime");
function NewIndex() {
  let currentRoute = (0, import_react_router7.useMatches)()[1];
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "container relative border-2 border-romanBlack lg:rounded-3xl bg-white p-10 lg:pt-32 lg:px-28 lg:pb-28", children: [
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "hidden lg:block absolute top-10 left-0 right-0 text-center text-romanPrimary", children: `~ ${currentRoute.pathname} ` }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(roman_bytes_logo_default, {}),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "font-newMono mt-20 w-full lg:w-5/12", children: [
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", { children: "I\u2019m Jacob Roman, also known as Roman Bytes, a Senior Digital Engineer with over a decade of experience leading multiple teams to build high-performance web applications. I love clean design, video games, and hockey." }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("h2", { className: "font-bold mt-8", children: "Thoughts" }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("p", { children: [
        "I don\u2019t write much. I am looking to change that. You can see any future posts on ",
        " ",
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
          import_react10.Link,
          {
            to: "/blog",
            className: "text-romanPrimary underline",
            children: "my blog page."
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("h2", { className: "font-bold mt-8", children: "Projects" }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("p", { children: [
        "I have a number of side projects that I am currently working on. You can see ",
        " ",
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
          import_react10.Link,
          {
            to: "/projects",
            className: "text-romanPrimary underline",
            children: "those projects here."
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(newFooter_default, {})
  ] });
}

// app/routes/index.tsx
var import_jsx_runtime20 = require("react/jsx-runtime"), meta2 = () => ({
  title: "Roman Bytes | Senior Digital Engineer",
  description: "Experienced Senior Digital Engineer with a demonstrated history of working in the computer software industry. Skilled in modern Front-end technologies, and Fron-end design. Strong engineering professional with a Bachelor of Arts focused on Graphic Design from Spring Arbor University.",
  "og:url": "https://romanbytes.dev/",
  "og:type": "website",
  "og:image": profile_pic_default,
  "twitter:image": profile_pic_default,
  "twitter:card": "summary_large_image"
});
async function loader8() {
  return (0, import_node8.json)({
    ENV: {
      FEATURE_NEW_BRAND: process.env.FEATURE_NEW_BRAND
    }
  });
}
function Index2() {
  return (0, import_react11.useLoaderData)().ENV.FEATURE_NEW_BRAND === "true" ? /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(NewLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(NewIndex, {}) }) : /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "flex justify-center items-center w-full", children: [
    /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("h1", { className: "font-sans text-white left-2.5 lg:right-2.5 xl:right-5 absolute top-2.5 xl:top-5 text-2xl text-left lg:text-right", children: [
      "Hello, I am Jacob Roman, a self taught",
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("br", {}),
      " Senior Digital Engineer based in Michigan."
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(terminal_default, {})
  ] });
}

// app/routes/404.tsx
var __exports = {};
__export(__exports, {
  default: () => test
});
var import_jsx_runtime21 = require("react/jsx-runtime");
function test() {
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "mt-20 mb-40 p-14 text-md font-sans text-white border border-white bg-romanBlack", children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("h1", { className: "text-8xl font-bold mt-16 font-ubuntu leading-heading tracking-heading", children: "Hello!" }) });
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-57BPWAKA.js", imports: ["/build/_shared/chunk-YUIR7YLB.js", "/build/_shared/chunk-3Z32TANI.js", "/build/_shared/chunk-T36URGAI.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-4NK3VNHV.js", imports: ["/build/_shared/chunk-FSSP5NJL.js", "/build/_shared/chunk-F344R26M.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !0 }, "routes/404": { id: "routes/404", parentId: "root", path: "404", index: void 0, caseSensitive: void 0, module: "/build/routes/404-NWQPQLI7.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/[robots.txt]": { id: "routes/[robots.txt]", parentId: "root", path: "robots.txt", index: void 0, caseSensitive: void 0, module: "/build/routes/[robots.txt]-6QSMPGV5.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/[sitemap.xml]": { id: "routes/[sitemap.xml]", parentId: "root", path: "sitemap.xml", index: void 0, caseSensitive: void 0, module: "/build/routes/[sitemap.xml]-36UQOX6H.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/about": { id: "routes/about", parentId: "root", path: "about", index: void 0, caseSensitive: void 0, module: "/build/routes/about-CR6E34RA.js", imports: ["/build/_shared/chunk-3LI7YCDA.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/blog/$slug": { id: "routes/blog/$slug", parentId: "root", path: "blog/:slug", index: void 0, caseSensitive: void 0, module: "/build/routes/blog/$slug-GNBNEOIA.js", imports: ["/build/_shared/chunk-W45GZWZZ.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/blog/index": { id: "routes/blog/index", parentId: "root", path: "blog", index: !0, caseSensitive: void 0, module: "/build/routes/blog/index-HV7OLEDK.js", imports: ["/build/_shared/chunk-D63A33KQ.js", "/build/_shared/chunk-W45GZWZZ.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-QIEUOQE7.js", imports: ["/build/_shared/chunk-3LI7YCDA.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/projects/$name": { id: "routes/projects/$name", parentId: "root", path: "projects/:name", index: void 0, caseSensitive: void 0, module: "/build/routes/projects/$name-TOVFYYOB.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/projects/index": { id: "routes/projects/index", parentId: "root", path: "projects", index: !0, caseSensitive: void 0, module: "/build/routes/projects/index-6BT5VBHD.js", imports: ["/build/_shared/chunk-D63A33KQ.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "9f72e33c", hmr: void 0, url: "/build/manifest-9F72E33C.js" };

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
  "routes/projects/$name": {
    id: "routes/projects/$name",
    parentId: "root",
    path: "projects/:name",
    index: void 0,
    caseSensitive: void 0,
    module: name_exports
  },
  "routes/projects/index": {
    id: "routes/projects/index",
    parentId: "root",
    path: "projects",
    index: !0,
    caseSensitive: void 0,
    module: projects_exports
  },
  "routes/[sitemap.xml]": {
    id: "routes/[sitemap.xml]",
    parentId: "root",
    path: "sitemap.xml",
    index: void 0,
    caseSensitive: void 0,
    module: sitemap_xml_exports
  },
  "routes/[robots.txt]": {
    id: "routes/[robots.txt]",
    parentId: "root",
    path: "robots.txt",
    index: void 0,
    caseSensitive: void 0,
    module: robots_txt_exports
  },
  "routes/blog/$slug": {
    id: "routes/blog/$slug",
    parentId: "root",
    path: "blog/:slug",
    index: void 0,
    caseSensitive: void 0,
    module: slug_exports
  },
  "routes/blog/index": {
    id: "routes/blog/index",
    parentId: "root",
    path: "blog",
    index: !0,
    caseSensitive: void 0,
    module: blog_exports
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
  "routes/404": {
    id: "routes/404",
    parentId: "root",
    path: "404",
    index: void 0,
    caseSensitive: void 0,
    module: __exports
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
