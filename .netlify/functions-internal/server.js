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
var import_server = require("react-dom/server"), import_react = require("@remix-run/react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 12,
      columnNumber: 5
    }, this)
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
  links: () => links,
  loader: () => loader
});
var import_react4 = require("@remix-run/react");

// app/components/layout.tsx
var import_react2 = require("react"), import_classnames = __toESM(require("classnames")), import_react_terminal = require("react-terminal"), import_remix_utils = require("remix-utils"), import_react3 = require("@remix-run/react");

// app/components/footer.tsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), Footer = () => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("footer", { className: "hidden lg:block -z-50 w-full fixed top-1/2 text-romanText", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "absolute xl:left-5 lg:left-2.5 text-sm origin-center transform -rotate-90 -translate-x-1/2", children: "Made with love from Michigan." }, void 0, !1, {
    fileName: "app/components/footer.tsx",
    lineNumber: 5,
    columnNumber: 9
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "absolute xl:right-5 lg:right-2.5 text-sm origin-center transform rotate-90 translate-x-1/2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "https://github.com/roman-bytes/roman-remix", children: "Source Code" }, void 0, !1, {
    fileName: "app/components/footer.tsx",
    lineNumber: 9,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/components/footer.tsx",
    lineNumber: 8,
    columnNumber: 9
  }, this)
] }, void 0, !0, {
  fileName: "app/components/footer.tsx",
  lineNumber: 4,
  columnNumber: 5
}, this), footer_default = Footer;

// app/components/social.tsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), Social = () => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { className: "social", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
    "a",
    {
      target: "_blank",
      href: "https://twitter.com/romanbytes",
      className: "hover:text-white relative",
      children: "Twitter"
    },
    void 0,
    !1,
    {
      fileName: "app/components/social.tsx",
      lineNumber: 8,
      columnNumber: 13
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/social.tsx",
    lineNumber: 7,
    columnNumber: 9
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
    "a",
    {
      target: "_blank",
      href: "https://github.com/roman-bytes",
      className: "hover:text-white relative",
      children: "Github"
    },
    void 0,
    !1,
    {
      fileName: "app/components/social.tsx",
      lineNumber: 17,
      columnNumber: 13
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/social.tsx",
    lineNumber: 16,
    columnNumber: 9
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
    "a",
    {
      target: "_blank",
      href: "https://codepen.io/romanbytes",
      className: "hover:text-white relative",
      children: "CodePen"
    },
    void 0,
    !1,
    {
      fileName: "app/components/social.tsx",
      lineNumber: 26,
      columnNumber: 13
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/social.tsx",
    lineNumber: 25,
    columnNumber: 9
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
    "a",
    {
      target: "_blank",
      href: "https://dev.to/romanbytes",
      className: "hover:text-white relative",
      children: "Dev.to"
    },
    void 0,
    !1,
    {
      fileName: "app/components/social.tsx",
      lineNumber: 35,
      columnNumber: 13
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/social.tsx",
    lineNumber: 34,
    columnNumber: 9
  }, this)
] }, void 0, !0, {
  fileName: "app/components/social.tsx",
  lineNumber: 6,
  columnNumber: 5
}, this), social_default = Social;

// app/components/nav.tsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), Nav = () => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { className: "text-right nav", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("a", { href: "/", className: "hover:text-white relative", children: "Index" }, void 0, !1, {
    fileName: "app/components/nav.tsx",
    lineNumber: 8,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/components/nav.tsx",
    lineNumber: 7,
    columnNumber: 9
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("a", { href: "/projects", className: "hover:text-white relative", children: "Projects" }, void 0, !1, {
    fileName: "app/components/nav.tsx",
    lineNumber: 13,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/components/nav.tsx",
    lineNumber: 12,
    columnNumber: 9
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("a", { href: "/about", className: "hover:text-white relative", children: "About" }, void 0, !1, {
    fileName: "app/components/nav.tsx",
    lineNumber: 18,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/components/nav.tsx",
    lineNumber: 17,
    columnNumber: 9
  }, this)
] }, void 0, !0, {
  fileName: "app/components/nav.tsx",
  lineNumber: 6,
  columnNumber: 5
}, this), nav_default = Nav;

// app/components/logo.tsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), Logo = () => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("a", { href: "/", "aria-label": "Go back to home page", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
  "img",
  {
    className: "w-16",
    src: "/roman-bytes-mark.svg",
    alt: "Roman Bytes Logo Mark"
  },
  void 0,
  !1,
  {
    fileName: "app/components/logo.tsx",
    lineNumber: 6,
    columnNumber: 9
  },
  this
) }, void 0, !1, {
  fileName: "app/components/logo.tsx",
  lineNumber: 5,
  columnNumber: 5
}, this), logo_default = Logo;

// app/components/particles.tsx
var THREE = __toESM(require("three")), import_fiber = require("@react-three/fiber"), import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), SEPARATION = 100, AMOUNTX = 100, AMOUNTY = 70, numParticles = AMOUNTX * AMOUNTY, positions = new Float32Array(numParticles * 3), scales = new Float32Array(numParticles), i = 0, j = 0;
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
}), /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("points", { geometry, material }, void 0, !1, {
  fileName: "app/components/particles.tsx",
  lineNumber: 83,
  columnNumber: 12
}, this)), Particles = () => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("ambientLight", { intensity: 0.5 }, void 0, !1, {
        fileName: "app/components/particles.tsx",
        lineNumber: 97,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("spotLight", { position: [10, 10, 10], angle: 0.15, penumbra: 1 }, void 0, !1, {
        fileName: "app/components/particles.tsx",
        lineNumber: 98,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("pointLight", { position: [-10, -10, -10] }, void 0, !1, {
        fileName: "app/components/particles.tsx",
        lineNumber: 99,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Particle, {}, void 0, !1, {
        fileName: "app/components/particles.tsx",
        lineNumber: 100,
        columnNumber: 13
      }, this)
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/components/particles.tsx",
    lineNumber: 88,
    columnNumber: 9
  },
  this
), particles_default = Particles;

// app/components/layout.tsx
var import_node = require("@remix-run/node");

// app/components/new-layout.tsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function NewLayout({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex flex-col items-center justify-center h-full w-full", children }, void 0, !1, {
    fileName: "app/components/new-layout.tsx",
    lineNumber: 9,
    columnNumber: 9
  }, this);
}

// app/components/layout.tsx
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
var Layout = ({
  children
}) => {
  let data = (0, import_react3.useLoaderData)(), [mobileMenu, setMobileMenu] = (0, import_react2.useState)(!1), handleMenuOpen = () => {
    setMobileMenu(!mobileMenu);
  }, mobileMenuClass = (0, import_classnames.default)(
    "justify-between my-5",
    mobileMenu ? "flex h-auto" : "hidden h-0"
  ), footerMobileClass = (0, import_classnames.default)(
    "flex-no-wrap justify-center",
    mobileMenu ? "flex" : "hidden"
  );
  return data.ENV.FEATURE_NEW_BRAND === "true" ? /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(NewLayout, {}, void 0, !1, {
    fileName: "app/components/layout.tsx",
    lineNumber: 51,
    columnNumber: 13
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react_terminal.TerminalContextProvider, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("main", { className: "h-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "hidden lg:block absolute xl:top-5 xl:left-5 lg:top-2.5 lg:left-2.5 h-", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(logo_default, {}, void 0, !1, {
        fileName: "app/components/layout.tsx",
        lineNumber: 59,
        columnNumber: 21
      }, this) }, void 0, !1, {
        fileName: "app/components/layout.tsx",
        lineNumber: 58,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "flex h-full w-full justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("main", { className: "container lg:mx-40 h-max min-h-full lg:flex", children }, void 0, !1, {
        fileName: "app/components/layout.tsx",
        lineNumber: 62,
        columnNumber: 21
      }, this) }, void 0, !1, {
        fileName: "app/components/layout.tsx",
        lineNumber: 61,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "hidden lg:flex w-full fixed text-romanText xl:p-20 lg:p-10 justify-between items-end bottom-0 left-0 right-0", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(social_default, {}, void 0, !1, {
          fileName: "app/components/layout.tsx",
          lineNumber: 67,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(nav_default, {}, void 0, !1, {
          fileName: "app/components/layout.tsx",
          lineNumber: 68,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/layout.tsx",
        lineNumber: 66,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "lg:hidden p-5 border-t border-white bg-romanBlack w-full fixed text-romanText lg:p-10 flex justify-between bottom-0 left-0 right-0 flex-col", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "flex flex-row justify-between items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "xl:top-5 xl:left-5 lg:top-2.5 lg:left-2.5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(logo_default, {}, void 0, !1, {
            fileName: "app/components/layout.tsx",
            lineNumber: 73,
            columnNumber: 29
          }, this) }, void 0, !1, {
            fileName: "app/components/layout.tsx",
            lineNumber: 72,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
            "svg",
            {
              width: 24,
              height: 24,
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              className: "sm:block lg:hidden xl:hidden cursor-pointer",
              onClick: () => handleMenuOpen(),
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
                "path",
                {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M3 8V6H21V8H3ZM3 13H21V11H3V13ZM3 18H21V16H3V18Z",
                  fill: "white"
                },
                void 0,
                !1,
                {
                  fileName: "app/components/layout.tsx",
                  lineNumber: 84,
                  columnNumber: 29
                },
                this
              )
            },
            void 0,
            !1,
            {
              fileName: "app/components/layout.tsx",
              lineNumber: 75,
              columnNumber: 25
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/layout.tsx",
          lineNumber: 71,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: mobileMenuClass, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(social_default, {}, void 0, !1, {
            fileName: "app/components/layout.tsx",
            lineNumber: 93,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(nav_default, {}, void 0, !1, {
            fileName: "app/components/layout.tsx",
            lineNumber: 94,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/layout.tsx",
          lineNumber: 92,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("footer", { className: footerMobileClass, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "text-sm", children: "Made with love from Michigan." }, void 0, !1, {
            fileName: "app/components/layout.tsx",
            lineNumber: 97,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "text-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("a", { href: "https://github.com/roman-bytes/roman-bytes-dev", children: [
            "Source Code",
            " "
          ] }, void 0, !0, {
            fileName: "app/components/layout.tsx",
            lineNumber: 101,
            columnNumber: 29
          }, this) }, void 0, !1, {
            fileName: "app/components/layout.tsx",
            lineNumber: 100,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/layout.tsx",
          lineNumber: 96,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/layout.tsx",
        lineNumber: 70,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(footer_default, {}, void 0, !1, {
        fileName: "app/components/layout.tsx",
        lineNumber: 107,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/layout.tsx",
      lineNumber: 57,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_remix_utils.ClientOnly, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", {}, void 0, !1, {
      fileName: "app/components/layout.tsx",
      lineNumber: 109,
      columnNumber: 35
    }, this), children: () => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(particles_default, {}, void 0, !1, {
      fileName: "app/components/layout.tsx",
      lineNumber: 109,
      columnNumber: 51
    }, this) }, void 0, !1, {
      fileName: "app/components/layout.tsx",
      lineNumber: 109,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/layout.tsx",
    lineNumber: 56,
    columnNumber: 9
  }, this);
}, layout_default = Layout;

// app/root.tsx
var import_node2 = require("@remix-run/node");

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-ALLH3MN4.css";

// app/root.tsx
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime"), links = () => [{ rel: "stylesheet", href: tailwind_default }];
async function loader() {
  return (0, import_node2.json)({
    ENV: {
      FEATURE_NEW_BRAND: process.env.FEATURE_NEW_BRAND
    }
  });
}
function App() {
  return (0, import_react4.useLoaderData)().ENV.FEATURE_NEW_BRAND === "true" ? /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Document, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(NewLayout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react4.Outlet, {}, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 41,
    columnNumber: 21
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 40,
    columnNumber: 17
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 39,
    columnNumber: 7
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Document, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(layout_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react4.Outlet, {}, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 50,
    columnNumber: 17
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 49,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 48,
    columnNumber: 5
  }, this);
}
function ErrorBoundary({ error }) {
  return console.error(error), (0, import_react4.useLoaderData)().ENV.FEATURE_NEW_BRAND === "true" ? /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Document, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(NewLayout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react4.Outlet, {}, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 66,
    columnNumber: 21
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 65,
    columnNumber: 17
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 64,
    columnNumber: 7
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Document, { title: "Error!", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(layout_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h1", { children: "There was an error" }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 77,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { children: error.message }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 78,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("hr", {}, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 79,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { children: "Hey, developer, you should replace this with what you want your users to see." }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 80,
      columnNumber: 21
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 76,
    columnNumber: 17
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 75,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 74,
    columnNumber: 5
  }, this);
}
function CatchBoundary() {
  let caught = (0, import_react4.useCatch)(), isNewLayout = (0, import_react4.useLoaderData)().ENV.FEATURE_NEW_BRAND === "true", message;
  switch (caught.status) {
    case 401:
      message = /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { children: "Oops! Looks like you tried to visit a page that you do not have access to." }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 100,
        columnNumber: 7
      }, this);
      break;
    case 404:
      message = /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { children: "What you are looking for is not there. Please visit the home page and try again." }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 108,
        columnNumber: 7
      }, this);
      break;
    default:
      throw new Error(caught.data || caught.statusText);
  }
  return isNewLayout ? /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Document, { title: `${caught.status} ${caught.statusText}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(NewLayout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "mt-20 mb-40 mx-auto p-14 text-md font-sans text-white border border-white bg-romanBlack", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h1", { className: "text-8xl font-bold mt-16 font-ubuntu leading-heading tracking-heading", children: [
    caught.status,
    ": ",
    caught.statusText
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 124,
    columnNumber: 25
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 123,
    columnNumber: 21
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 122,
    columnNumber: 17
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 121,
    columnNumber: 7
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Document, { title: `${caught.status} ${caught.statusText}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(layout_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "mt-20 mb-40 mx-auto p-14 text-md font-sans text-white border border-white bg-romanBlack", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h1", { className: "text-8xl font-bold mt-16 font-ubuntu leading-heading tracking-heading", children: [
    caught.status,
    ": ",
    caught.statusText
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 137,
    columnNumber: 21
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 136,
    columnNumber: 17
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 135,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 134,
    columnNumber: 5
  }, this);
}
function Document({
  children,
  title
}) {
  var _a;
  let data = (0, import_react4.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("html", { lang: "en", className: "w-full h-full font-mono", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 158,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
        "meta",
        {
          name: "viewport",
          content: "width=device-width,initial-scale=1"
        },
        void 0,
        !1,
        {
          fileName: "app/root.tsx",
          lineNumber: 159,
          columnNumber: 17
        },
        this
      ),
      title ? /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("title", { children: title }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 163,
        columnNumber: 26
      }, this) : null,
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react4.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 164,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react4.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 165,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 157,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("body", { className: `${((_a = data == null ? void 0 : data.ENV) == null ? void 0 : _a.FEATURE_NEW_BRAND) === "true" ? "bg-white grid" : "bg-romanBlack"} w-full h-full`, children: [
      children,
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react4.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 169,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react4.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 170,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react4.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 171,
        columnNumber: 60
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 167,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 156,
    columnNumber: 5
  }, this);
}

// server-entry-module:@remix-run/dev/server-build
var route1 = __toESM(require_project());

// app/routes/projects/index.tsx
var projects_exports = {};
__export(projects_exports, {
  default: () => Projects,
  loader: () => loader2
});
var import_react5 = require("@remix-run/react"), import_jsx_dev_runtime10 = require("react/jsx-dev-runtime"), loader2 = async () => (await fetch(
  "https://api.github.com/users/roman-bytes/repos"
).then((response) => response.json())).filter(
  (repo) => repo.topics.includes("portfolio")
);
function Projects() {
  let repoTiles = (0, import_react5.useLoaderData)().map((repo) => /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
    "a",
    {
      href: repo.private ? "" : repo.html_url,
      target: "_blank",
      className: "w-full overflow-hidden my-2 px-2 xl:w-1/3",
      rel: "noreferrer",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "border border-white bg-romanBlack p-4 flex justify-between items-center cursor-pointer hover:border-romanYellow hover:bg-romanYellow hover:text-romanBlack", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { children: repo.name }, void 0, !1, {
          fileName: "app/routes/projects/index.tsx",
          lineNumber: 39,
          columnNumber: 21
        }, this),
        repo.private ? /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
          "svg",
          {
            width: 24,
            height: 24,
            viewBox: "0 0 24 24",
            className: "fill-current",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
              "path",
              {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M17 8.5H18C19.1 8.5 20 9.4 20 10.5V20.5C20 21.6 19.1 22.5 18 22.5H6C4.90002 22.5 4 21.6 4 20.5V10.5C4 9.4 4.90002 8.5 6 8.5H7V6.5C7 3.74 9.23999 1.5 12 1.5C14.76 1.5 17 3.74 17 6.5V8.5ZM12 3.5C10.34 3.5 9 4.84 9 6.5V8.5H15V6.5C15 4.84 13.66 3.5 12 3.5ZM6 20.5V10.5H18V20.5H6ZM14 15.5C14 16.6 13.1 17.5 12 17.5C10.9 17.5 10 16.6 10 15.5C10 14.4 10.9 13.5 12 13.5C13.1 13.5 14 14.4 14 15.5Z"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/projects/index.tsx",
                lineNumber: 49,
                columnNumber: 29
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "app/routes/projects/index.tsx",
            lineNumber: 41,
            columnNumber: 25
          },
          this
        ) : /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
          "svg",
          {
            width: 8,
            height: 12,
            viewBox: "0 0 8 12",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
              "path",
              {
                d: "M1.70504 0L0.295044 1.41L4.87504 6L0.295044 10.59L1.70504 12L7.70504 6L1.70504 0Z",
                fill: "white"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/projects/index.tsx",
                lineNumber: 63,
                columnNumber: 29
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "app/routes/projects/index.tsx",
            lineNumber: 56,
            columnNumber: 25
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/projects/index.tsx",
        lineNumber: 38,
        columnNumber: 17
      }, this)
    },
    repo.id,
    !1,
    {
      fileName: "app/routes/projects/index.tsx",
      lineNumber: 31,
      columnNumber: 13
    },
    this
  ));
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "container flex flex-col items-center justify-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h1", { className: "text-4xl text-white p-4 border-b border-white", children: "Projects" }, void 0, !1, {
      fileName: "app/routes/projects/index.tsx",
      lineNumber: 76,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex flex-wrap p-4 xl:-mx-2 overflow-hidden lg:mt-4 text-white mb-20", children: repoTiles }, void 0, !1, {
      fileName: "app/routes/projects/index.tsx",
      lineNumber: 79,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/projects/index.tsx",
    lineNumber: 75,
    columnNumber: 9
  }, this);
}

// app/routes/[sitemap.xml].jsx
var sitemap_xml_exports = {};
__export(sitemap_xml_exports, {
  loader: () => loader3
});
var loader3 = () => {
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
  loader: () => loader4
});
var loader4 = () => {
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

// app/routes/about.tsx
var about_exports = {};
__export(about_exports, {
  default: () => Index,
  meta: () => meta
});

// public/profile-pic.jpg
var profile_pic_default = "/build/_assets/profile-pic-MNCDYPPO.jpg";

// app/routes/about.tsx
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime"), meta = () => ({
  title: "Roman Bytes - Full Stack Developer"
});
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "grid xl:gap-11 grid-cols-1 xl:grid-cols-2 grid-rows-1 my-10 xl:w-full lg:w-3/4 text-md leading-8 font-sans text-white border border-white bg-romanBlack", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "flex items-center justify-center w-full relative xl:overflow-visible overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
      "img",
      {
        className: "xl:relative absolute xl:top-0 -top-36",
        src: profile_pic_default,
        alt: "Picture of Jacob Roman"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/about.tsx",
        lineNumber: 14,
        columnNumber: 17
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/about.tsx",
      lineNumber: 13,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "xl:pl-0 pl-12 pr-12", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h1", { className: "text-8xl font-bold mt-16 font-ubuntu leading-heading tracking-heading", children: "Hello!" }, void 0, !1, {
        fileName: "app/routes/about.tsx",
        lineNumber: 21,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "text-lg text-stone-500 mt-4 mb-16 font-normal", children: "husband - father - coder - jedi" }, void 0, !1, {
        fileName: "app/routes/about.tsx",
        lineNumber: 24,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "text-md", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("p", { children: "I am full-stack developer who has a strong background with the front-end and is improving my back-end knowledge every day. I was born in 1988 and grew up in Michigan. Once I graduated High School I knew that I wanted to do something with computers. I ended up taking a Graphic Design class and loved it, so I went to Spring Arbor University and got a Bachelor of Fine Arts with a focus on Graphic Design. During my time in college I fell in love with coding and realized that stuff I designed, I could also build in code. Thus began my journey to learn everything I know about coding to this day." }, void 0, !1, {
          fileName: "app/routes/about.tsx",
          lineNumber: 28,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("p", { children: "I have written code for Steel Fish Design, Traffic Digital Agency, and Deque. I also help out maintain a few open source projects when I have the free time. I currently work at Launch by NTT Data as a Senior Digital Engineer. In my current position I lead a team of front end developers for a client. In our day to day we use React, GQL, and Sass." }, void 0, !1, {
          fileName: "app/routes/about.tsx",
          lineNumber: 42,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("p", { children: "I met my wife while attending SAU. We live in a small town in Michigan with our six year old son and two year old daughter." }, void 0, !1, {
          fileName: "app/routes/about.tsx",
          lineNumber: 51,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/about.tsx",
        lineNumber: 27,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/about.tsx",
      lineNumber: 20,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/about.tsx",
    lineNumber: 12,
    columnNumber: 9
  }, this);
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index2,
  loader: () => loader5,
  meta: () => meta2
});
var import_node3 = require("@remix-run/node"), import_react7 = require("@remix-run/react");

// app/components/terminal.tsx
var import_react_terminal2 = require("react-terminal"), import_jsx_dev_runtime12 = require("react/jsx-dev-runtime"), RomanTerminal = () => /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "hidden lg:flex w-800 h-460", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
  import_react_terminal2.ReactTerminal,
  {
    commands: {
      whoami: "Jacob Roman",
      help: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("span", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("span", { children: "Commands:" }, void 0, !1, {
          fileName: "app/components/terminal.tsx",
          lineNumber: 11,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("br", {}, void 0, !1, {
          fileName: "app/components/terminal.tsx",
          lineNumber: 12,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("br", {}, void 0, !1, {
          fileName: "app/components/terminal.tsx",
          lineNumber: 13,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("span", { children: "VARIABLES" }, void 0, !1, {
          fileName: "app/components/terminal.tsx",
          lineNumber: 15,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("br", {}, void 0, !1, {
          fileName: "app/components/terminal.tsx",
          lineNumber: 16,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("span", { style: { marginLeft: "20px" }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("strong", { children: "about" }, void 0, !1, {
            fileName: "app/components/terminal.tsx",
            lineNumber: 18,
            columnNumber: 21
          }, this),
          " -- know more about me"
        ] }, void 0, !0, {
          fileName: "app/components/terminal.tsx",
          lineNumber: 17,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("br", {}, void 0, !1, {
          fileName: "app/components/terminal.tsx",
          lineNumber: 20,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("span", { style: { marginLeft: "20px" }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("strong", { children: "resume" }, void 0, !1, {
            fileName: "app/components/terminal.tsx",
            lineNumber: 22,
            columnNumber: 21
          }, this),
          " -- want to have a look at my resume?"
        ] }, void 0, !0, {
          fileName: "app/components/terminal.tsx",
          lineNumber: 21,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("br", {}, void 0, !1, {
          fileName: "app/components/terminal.tsx",
          lineNumber: 24,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("span", { style: { marginLeft: "20px" }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("strong", { children: "contact" }, void 0, !1, {
            fileName: "app/components/terminal.tsx",
            lineNumber: 26,
            columnNumber: 21
          }, this),
          " -- want to get in touch?"
        ] }, void 0, !0, {
          fileName: "app/components/terminal.tsx",
          lineNumber: 25,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("br", {}, void 0, !1, {
          fileName: "app/components/terminal.tsx",
          lineNumber: 28,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("br", {}, void 0, !1, {
          fileName: "app/components/terminal.tsx",
          lineNumber: 29,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("span", { children: "FUNCTIONS" }, void 0, !1, {
          fileName: "app/components/terminal.tsx",
          lineNumber: 31,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("br", {}, void 0, !1, {
          fileName: "app/components/terminal.tsx",
          lineNumber: 32,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("span", { style: { marginLeft: "20px" }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("strong", { children: "experience()" }, void 0, !1, {
            fileName: "app/components/terminal.tsx",
            lineNumber: 34,
            columnNumber: 21
          }, this),
          " - float"
        ] }, void 0, !0, {
          fileName: "app/components/terminal.tsx",
          lineNumber: 33,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("br", {}, void 0, !1, {
          fileName: "app/components/terminal.tsx",
          lineNumber: 36,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("span", { style: { marginLeft: "40px" }, children: "returns the total years of working experience" }, void 0, !1, {
          fileName: "app/components/terminal.tsx",
          lineNumber: 37,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("br", {}, void 0, !1, {
          fileName: "app/components/terminal.tsx",
          lineNumber: 40,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/terminal.tsx",
        lineNumber: 10,
        columnNumber: 13
      }, this),
      contact: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("span", { children: "follow me on twitter or send me an email" }, void 0, !1, {
        fileName: "app/components/terminal.tsx",
        lineNumber: 43,
        columnNumber: 18
      }, this),
      about: "Javascript Developer, Accessibility Advocate, and Team player. I am always seeking opportunities to learn and grow. I am a simple guy who loves all things tech and a good cup of coffee. Nice to meet you.",
      resume: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("span", { children: [
        "You can",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
          "a",
          {
            target: "_blank",
            "aria-label": "Resume",
            rel: "noreferrer",
            href: "jacob-roman-resume.pdf",
            className: "underline text-romanPrimary",
            children: "download my resume here"
          },
          void 0,
          !1,
          {
            fileName: "app/components/terminal.tsx",
            lineNumber: 48,
            columnNumber: 17
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/terminal.tsx",
        lineNumber: 46,
        columnNumber: 13
      }, this),
      "experience()": () => `${((/* @__PURE__ */ new Date() - /* @__PURE__ */ new Date("2010-10-01")) / 1e3 / 60 / 60 / 24 / 365).toFixed(1)} years`
    },
    theme: "dark",
    prompt: "$",
    welcomeMessage: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("span", { children: [
      'Type "help" for more information. ',
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/components/terminal.tsx",
        lineNumber: 75,
        columnNumber: 47
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/terminal.tsx",
      lineNumber: 74,
      columnNumber: 9
    }, this)
  },
  void 0,
  !1,
  {
    fileName: "app/components/terminal.tsx",
    lineNumber: 81,
    columnNumber: 13
  },
  this
) }, void 0, !1, {
  fileName: "app/components/terminal.tsx",
  lineNumber: 80,
  columnNumber: 9
}, this), terminal_default = RomanTerminal;

// app/components/roman-bytes-logo.tsx
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime");
function RomanBytesLogo() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("svg", { width: "30", height: "38", viewBox: "0 0 30 38", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
      "path",
      {
        d: "M25.8144 20.2562C24.6151 22.3551 21.7168 24.2539 20.5674 24.9036C19.6679 25.2034 19.6679 25.5032 19.518 25.6531C19.3681 25.803 19.9678 25.6531 19.0683 27.452C18.3487 28.8912 16.8696 28.6513 16.2199 28.3515C15.8701 28.1017 15.0806 27.8418 14.7208 28.8013C14.361 29.7607 16.07 30.6002 16.9695 30.9H19.3681C19.518 32.4991 20.4775 35.9371 23.116 36.8966C25.7544 37.856 27.7133 37.896 28.3629 37.7961C28.8127 37.4962 29.7121 35.6973 29.7121 30.9C29.7121 26.1028 27.9132 21.9053 27.0137 20.4062C26.564 19.8065 26.414 18.6071 25.8144 20.2562Z",
        fill: "#1F242B"
      },
      void 0,
      !1,
      {
        fileName: "app/components/roman-bytes-logo.tsx",
        lineNumber: 6,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
      "path",
      {
        d: "M6.17574 23.8541L4.07696 25.2033L1.97817 26.7025C1.52843 27.1522 1.4085 27.0023 1.2286 26.5526C0.0292971 23.5543 -0.0706452 20.0063 0.0292971 18.6072C0.0792682 16.1086 1.43848 10.0021 6.47557 5.56469C11.5127 1.12727 17.1694 0.0178868 19.3681 0.0178754C19.2482 1.09724 18.9184 2.86625 19.2182 3.31597L21.9166 0.317702C22.2165 0.0178754 21.9166 -0.0345871 22.966 0.0178754C25.3647 0.137806 28.263 1.3671 29.4123 1.96675C30.1319 2.32654 29.8121 3.01614 29.5622 3.31597C28.5628 4.46531 26.474 6.97386 26.1142 7.81337C25.7544 8.65288 25.1648 8.56294 24.9149 8.41302C24.2653 8.01326 22.0366 7.18374 18.3187 7.06381C14.6009 6.94388 10.7731 9.71228 9.32393 11.1115C11.1729 10.3619 15.4704 8.83279 17.869 8.71286C20.8673 8.56295 22.0666 9.31251 23.2659 9.61234C24.2253 9.8522 23.9655 10.5118 23.7156 10.8116L21.7667 13.5101C21.4669 14.1097 21.1671 14.0624 20.5674 13.8099C17.7191 12.6106 14.7208 13.2103 10.8231 15.6089C6.92531 18.0075 6.62548 22.355 6.62548 23.1045C6.62548 23.7042 6.32566 23.8541 6.17574 23.8541Z",
        fill: "#1F242B"
      },
      void 0,
      !1,
      {
        fileName: "app/components/roman-bytes-logo.tsx",
        lineNumber: 9,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
      "path",
      {
        d: "M8.12483 26.2531C9.68393 30.6905 7.47521 32.2996 6.17596 32.5494C5.17654 32.6993 3.77735 33.1791 6.17596 33.8987C9.17423 34.7981 12.4723 31.5 13.5217 29.851C14.3612 28.5318 14.1713 27.0026 13.9715 26.403C13.7716 25.9033 13.6716 24.574 14.8709 23.2548C16.3701 21.6058 18.7687 23.4047 19.0685 24.0044C19.3084 24.4841 19.868 24.2043 20.1179 24.0044C21.5171 22.855 24.4954 20.3465 25.215 19.507C25.9345 18.6675 25.7147 18.2577 25.5148 18.1578C25.2649 17.5081 23.8058 15.8791 19.968 14.5598C16.1302 13.2406 12.2724 15.5093 10.8233 16.8085C9.27417 18.1078 6.56574 21.8156 8.12483 26.2531Z",
        fill: "#1F242B"
      },
      void 0,
      !1,
      {
        fileName: "app/components/roman-bytes-logo.tsx",
        lineNumber: 12,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("circle", { cx: "16.8204", cy: "25.5035", r: "1.79896", fill: "#1F242B" }, void 0, !1, {
      fileName: "app/components/roman-bytes-logo.tsx",
      lineNumber: 15,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/roman-bytes-logo.tsx",
    lineNumber: 5,
    columnNumber: 9
  }, this);
}
var roman_bytes_logo_default = RomanBytesLogo;

// app/components/new-index.tsx
var import_react6 = require("@remix-run/react");

// app/components/newFooter.tsx
var import_jsx_dev_runtime14 = require("react/jsx-dev-runtime");
function NewFooter() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("ul", { className: "flex flex-col items-end", children: [
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
  ].map((link) => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
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
    link.social,
    !0,
    {
      fileName: "app/components/newFooter.tsx",
      lineNumber: 26,
      columnNumber: 17
    },
    this
  )) }, void 0, !1, {
    fileName: "app/components/newFooter.tsx",
    lineNumber: 24,
    columnNumber: 9
  }, this);
}
var newFooter_default = NewFooter;

// app/components/new-index.tsx
var import_react_router = require("react-router"), import_jsx_dev_runtime15 = require("react/jsx-dev-runtime");
function NewIndex() {
  let currentRoute = (0, import_react_router.useMatches)()[1];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "container relative border-2 border-romanBlack rounded-3xl bg-white pt-32 px-28 pb-28", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "absolute top-10 left-0 right-0 text-center text-romanPrimary", children: `~ ${currentRoute.pathname} ` }, void 0, !1, {
      fileName: "app/components/new-index.tsx",
      lineNumber: 12,
      columnNumber: 14
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(roman_bytes_logo_default, {}, void 0, !1, {
      fileName: "app/components/new-index.tsx",
      lineNumber: 13,
      columnNumber: 14
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "font-newMono mt-12 w-5/12", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("p", { children: "I\u2019m Jacob Roman, also known as Roman Bytes, a Senior Digital Engineer with over a decade of experience leading multiple teams to build high-performance web applications. I love clean design, video games, and hockey." }, void 0, !1, {
        fileName: "app/components/new-index.tsx",
        lineNumber: 15,
        columnNumber: 18
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("h2", { className: "font-bold mt-8", children: "Thoughts" }, void 0, !1, {
        fileName: "app/components/new-index.tsx",
        lineNumber: 20,
        columnNumber: 18
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("p", { children: [
        "I don\u2019t write much. I am looking to change that. You can see any future posts on ",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
          import_react6.Link,
          {
            to: "/blog",
            className: "text-romanPrimary underline",
            children: "my blog page."
          },
          void 0,
          !1,
          {
            fileName: "app/components/new-index.tsx",
            lineNumber: 23,
            columnNumber: 22
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/new-index.tsx",
        lineNumber: 21,
        columnNumber: 18
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("h2", { className: "font-bold mt-8", children: "Other" }, void 0, !1, {
        fileName: "app/components/new-index.tsx",
        lineNumber: 30,
        columnNumber: 18
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("p", { children: [
        "I have a number of side projects that I am currently working on. You can see ",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
          import_react6.Link,
          {
            to: "/projects",
            className: "text-romanPrimary underline",
            children: "those projects here."
          },
          void 0,
          !1,
          {
            fileName: "app/components/new-index.tsx",
            lineNumber: 33,
            columnNumber: 22
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/new-index.tsx",
        lineNumber: 31,
        columnNumber: 18
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/new-index.tsx",
      lineNumber: 14,
      columnNumber: 14
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(newFooter_default, {}, void 0, !1, {
      fileName: "app/components/new-index.tsx",
      lineNumber: 41,
      columnNumber: 14
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/new-index.tsx",
    lineNumber: 11,
    columnNumber: 10
  }, this);
}

// app/routes/index.tsx
var import_jsx_dev_runtime16 = require("react/jsx-dev-runtime"), meta2 = () => ({
  title: "Roman Bytes | Senior Digital Engineer",
  description: "Experienced Senior Digital Engineer with a demonstrated history of working in the computer software industry. Skilled in modern Front-end technologies, and Fron-end design. Strong engineering professional with a Bachelor of Arts focused on Graphic Design from Spring Arbor University.",
  "og:url": "https://romanbytes.dev/",
  "og:type": "website",
  "og:image": profile_pic_default,
  "twitter:image": profile_pic_default,
  "twitter:card": "summary_large_image"
});
async function loader5() {
  return (0, import_node3.json)({
    ENV: {
      FEATURE_NEW_BRAND: process.env.FEATURE_NEW_BRAND
    }
  });
}
function Index2() {
  return (0, import_react7.useLoaderData)().ENV.FEATURE_NEW_BRAND === "true" ? /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(NewLayout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(NewIndex, {}, void 0, !1, {
    fileName: "app/routes/index.tsx",
    lineNumber: 41,
    columnNumber: 17
  }, this) }, void 0, !1, {
    fileName: "app/routes/index.tsx",
    lineNumber: 40,
    columnNumber: 13
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "flex justify-center items-center w-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("h1", { className: "font-sans text-white left-2.5 lg:right-2.5 xl:right-5 absolute top-2.5 xl:top-5 text-2xl text-left lg:text-right", children: [
      "Hello, I am Jacob Roman, a self taught",
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 50,
        columnNumber: 17
      }, this),
      " Senior Digital Engineer based in Michigan."
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 48,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(terminal_default, {}, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 52,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/index.tsx",
    lineNumber: 47,
    columnNumber: 9
  }, this);
}

// app/routes/404.tsx
var __exports = {};
__export(__exports, {
  default: () => test
});
var import_jsx_dev_runtime17 = require("react/jsx-dev-runtime");
function test() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "mt-20 mb-40 p-14 text-md font-sans text-white border border-white bg-romanBlack", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("h1", { className: "text-8xl font-bold mt-16 font-ubuntu leading-heading tracking-heading", children: "Hello!" }, void 0, !1, {
    fileName: "app/routes/404.tsx",
    lineNumber: 4,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/404.tsx",
    lineNumber: 3,
    columnNumber: 9
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-YY5AC6NW.js", imports: ["/build/_shared/chunk-E2A4YMCQ.js", "/build/_shared/chunk-JR7JHID7.js", "/build/_shared/chunk-4D7IJTTE.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-2VHI3CDN.js", imports: ["/build/_shared/chunk-TRWIMAD5.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !0 }, "routes/404": { id: "routes/404", parentId: "root", path: "404", index: void 0, caseSensitive: void 0, module: "/build/routes/404-5XDYRPD7.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/[robots.txt]": { id: "routes/[robots.txt]", parentId: "root", path: "robots.txt", index: void 0, caseSensitive: void 0, module: "/build/routes/[robots.txt]-S655RADV.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/[sitemap.xml]": { id: "routes/[sitemap.xml]", parentId: "root", path: "sitemap.xml", index: void 0, caseSensitive: void 0, module: "/build/routes/[sitemap.xml]-2PY4GZS4.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/about": { id: "routes/about", parentId: "root", path: "about", index: void 0, caseSensitive: void 0, module: "/build/routes/about-PGP2KDUF.js", imports: ["/build/_shared/chunk-K6M27BHM.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-P4HUURTM.js", imports: ["/build/_shared/chunk-K6M27BHM.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/projects/index": { id: "routes/projects/index", parentId: "root", path: "projects", index: !0, caseSensitive: void 0, module: "/build/routes/projects/index-XWLVJSCK.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/projects/project": { id: "routes/projects/project", parentId: "root", path: "projects/project", index: void 0, caseSensitive: void 0, module: "/build/routes/projects/project-UZEBTHP3.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "0b3cb3dd", hmr: void 0, url: "/build/manifest-0B3CB3DD.js" };

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
  mode: "development"
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
//# sourceMappingURL=server.js.map
