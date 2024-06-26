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
  links: () => links
});
var import_react3 = require("@remix-run/react");

// app/components/layout.tsx
var import_react2 = require("react"), import_classnames = __toESM(require("classnames")), import_react_terminal = require("react-terminal"), import_remix_utils = require("remix-utils");

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
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), Layout = ({
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react_terminal.TerminalContextProvider, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("main", { className: "h-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "hidden lg:block absolute xl:top-5 xl:left-5 lg:top-2.5 lg:left-2.5 h-", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(logo_default, {}, void 0, !1, {
        fileName: "app/components/layout.tsx",
        lineNumber: 41,
        columnNumber: 21
      }, this) }, void 0, !1, {
        fileName: "app/components/layout.tsx",
        lineNumber: 40,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex h-full w-full justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("main", { className: "container lg:mx-40 h-max min-h-full lg:flex", children }, void 0, !1, {
        fileName: "app/components/layout.tsx",
        lineNumber: 44,
        columnNumber: 21
      }, this) }, void 0, !1, {
        fileName: "app/components/layout.tsx",
        lineNumber: 43,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "hidden lg:flex w-full fixed text-romanText xl:p-20 lg:p-10 justify-between items-end bottom-0 left-0 right-0", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(social_default, {}, void 0, !1, {
          fileName: "app/components/layout.tsx",
          lineNumber: 49,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(nav_default, {}, void 0, !1, {
          fileName: "app/components/layout.tsx",
          lineNumber: 50,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/layout.tsx",
        lineNumber: 48,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "lg:hidden p-5 border-t border-white bg-romanBlack w-full fixed text-romanText lg:p-10 flex justify-between bottom-0 left-0 right-0 flex-col", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex flex-row justify-between items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "xl:top-5 xl:left-5 lg:top-2.5 lg:left-2.5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(logo_default, {}, void 0, !1, {
            fileName: "app/components/layout.tsx",
            lineNumber: 55,
            columnNumber: 29
          }, this) }, void 0, !1, {
            fileName: "app/components/layout.tsx",
            lineNumber: 54,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            "svg",
            {
              width: 24,
              height: 24,
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              className: "sm:block lg:hidden xl:hidden cursor-pointer",
              onClick: () => handleMenuOpen(),
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
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
                  lineNumber: 66,
                  columnNumber: 29
                },
                this
              )
            },
            void 0,
            !1,
            {
              fileName: "app/components/layout.tsx",
              lineNumber: 57,
              columnNumber: 25
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/layout.tsx",
          lineNumber: 53,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: mobileMenuClass, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(social_default, {}, void 0, !1, {
            fileName: "app/components/layout.tsx",
            lineNumber: 75,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(nav_default, {}, void 0, !1, {
            fileName: "app/components/layout.tsx",
            lineNumber: 76,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/layout.tsx",
          lineNumber: 74,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("footer", { className: footerMobileClass, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "text-sm", children: "Made with love from Michigan." }, void 0, !1, {
            fileName: "app/components/layout.tsx",
            lineNumber: 79,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "text-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("a", { href: "https://github.com/roman-bytes/roman-bytes-dev", children: [
            "Source Code",
            " "
          ] }, void 0, !0, {
            fileName: "app/components/layout.tsx",
            lineNumber: 83,
            columnNumber: 29
          }, this) }, void 0, !1, {
            fileName: "app/components/layout.tsx",
            lineNumber: 82,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/layout.tsx",
          lineNumber: 78,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/layout.tsx",
        lineNumber: 52,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(footer_default, {}, void 0, !1, {
        fileName: "app/components/layout.tsx",
        lineNumber: 89,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/layout.tsx",
      lineNumber: 39,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_remix_utils.ClientOnly, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", {}, void 0, !1, {
      fileName: "app/components/layout.tsx",
      lineNumber: 91,
      columnNumber: 35
    }, this), children: () => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(particles_default, {}, void 0, !1, {
      fileName: "app/components/layout.tsx",
      lineNumber: 91,
      columnNumber: 51
    }, this) }, void 0, !1, {
      fileName: "app/components/layout.tsx",
      lineNumber: 91,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/layout.tsx",
    lineNumber: 38,
    columnNumber: 9
  }, this);
}, layout_default = Layout;

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-5CTGXWZT.css";

// app/root.tsx
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime"), links = () => [{ rel: "stylesheet", href: tailwind_default }];
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Document, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(layout_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react3.Outlet, {}, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 27,
    columnNumber: 17
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 26,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
}
function ErrorBoundary({ error }) {
  return console.error(error), /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Document, { title: "Error!", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(layout_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h1", { children: "There was an error" }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 40,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: error.message }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 41,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("hr", {}, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 42,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: "Hey, developer, you should replace this with what you want your users to see." }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 43,
      columnNumber: 21
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 39,
    columnNumber: 17
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 38,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 37,
    columnNumber: 5
  }, this);
}
function CatchBoundary() {
  let caught = (0, import_react3.useCatch)(), message;
  switch (caught.status) {
    case 401:
      message = /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: "Oops! Looks like you tried to visit a page that you do not have access to." }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 61,
        columnNumber: 7
      }, this);
      break;
    case 404:
      message = /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: "What you are looking for is not there. Please visit the home page and try again." }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 69,
        columnNumber: 7
      }, this);
      break;
    default:
      throw new Error(caught.data || caught.statusText);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Document, { title: `${caught.status} ${caught.statusText}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(layout_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "mt-20 mb-40 mx-auto p-14 text-md font-sans text-white border border-white bg-romanBlack", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h1", { className: "text-8xl font-bold mt-16 font-ubuntu leading-heading tracking-heading", children: [
    caught.status,
    ": ",
    caught.statusText
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 84,
    columnNumber: 21
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 83,
    columnNumber: 17
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 82,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 81,
    columnNumber: 5
  }, this);
}
function Document({
  children,
  title
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("html", { lang: "en", className: "w-full h-full font-mono", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 103,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
        "meta",
        {
          name: "viewport",
          content: "width=device-width,initial-scale=1"
        },
        void 0,
        !1,
        {
          fileName: "app/root.tsx",
          lineNumber: 104,
          columnNumber: 17
        },
        this
      ),
      title ? /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("title", { children: title }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 108,
        columnNumber: 26
      }, this) : null,
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react3.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 109,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react3.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 110,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 102,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
      "script",
      {
        async: !0,
        src: "https://www.googletagmanager.com/gtag/js?id=G-T0T5SRHCGN"
      },
      void 0,
      !1,
      {
        fileName: "app/root.tsx",
        lineNumber: 112,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("body", { className: "bg-romanBlack w-full h-full", children: [
      children,
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react3.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 118,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react3.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 119,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react3.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 120,
        columnNumber: 60
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 116,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 101,
    columnNumber: 5
  }, this);
}

// server-entry-module:@remix-run/dev/server-build
var route1 = __toESM(require_project());

// app/routes/projects/index.tsx
var projects_exports = {};
__export(projects_exports, {
  default: () => Projects,
  loader: () => loader
});
var import_react4 = require("@remix-run/react"), import_jsx_dev_runtime9 = require("react/jsx-dev-runtime"), loader = async () => (await fetch(
  "https://api.github.com/users/roman-bytes/repos"
).then((response) => response.json())).filter(
  (repo) => repo.topics.includes("portfolio")
);
function Projects() {
  let repoTiles = (0, import_react4.useLoaderData)().map((repo) => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
    "a",
    {
      href: repo.private ? "" : repo.html_url,
      target: "_blank",
      className: "w-full overflow-hidden my-2 px-2 xl:w-1/3",
      rel: "noreferrer",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "border border-white bg-romanBlack p-4 flex justify-between items-center cursor-pointer hover:border-romanYellow hover:bg-romanYellow hover:text-romanBlack", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { children: repo.name }, void 0, !1, {
          fileName: "app/routes/projects/index.tsx",
          lineNumber: 39,
          columnNumber: 21
        }, this),
        repo.private ? /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
          "svg",
          {
            width: 24,
            height: 24,
            viewBox: "0 0 24 24",
            className: "fill-current",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
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
        ) : /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
          "svg",
          {
            width: 8,
            height: 12,
            viewBox: "0 0 8 12",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "container flex flex-col items-center justify-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h1", { className: "text-4xl text-white p-4 border-b border-white", children: "Projects" }, void 0, !1, {
      fileName: "app/routes/projects/index.tsx",
      lineNumber: 76,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex flex-wrap p-4 xl:-mx-2 overflow-hidden lg:mt-4 text-white mb-20", children: repoTiles }, void 0, !1, {
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

// app/routes/about.tsx
var about_exports = {};
__export(about_exports, {
  default: () => Index,
  meta: () => meta
});

// public/profile-pic.jpg
var profile_pic_default = "/build/_assets/profile-pic-MNCDYPPO.jpg";

// app/routes/about.tsx
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime"), meta = () => ({
  title: "Roman Bytes - Full Stack Developer"
});
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "grid xl:gap-11 grid-cols-1 xl:grid-cols-2 grid-rows-1 my-10 xl:w-full lg:w-3/4 text-md leading-8 font-sans text-white border border-white bg-romanBlack", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex items-center justify-center w-full relative xl:overflow-visible overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "xl:pl-0 pl-12 pr-12", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h1", { className: "text-8xl font-bold mt-16 font-ubuntu leading-heading tracking-heading", children: "Hello!" }, void 0, !1, {
        fileName: "app/routes/about.tsx",
        lineNumber: 21,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "text-lg text-stone-500 mt-4 mb-16 font-normal", children: "husband - father - coder - jedi" }, void 0, !1, {
        fileName: "app/routes/about.tsx",
        lineNumber: 24,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "text-md", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { children: "I am full-stack developer who has a strong background with the front-end and is improving my back-end knowledge every day. I was born in 1988 and grew up in Michigan. Once I graduated High School I knew that I wanted to do something with computers. I ended up taking a Graphic Design class and loved it, so I went to Spring Arbor University and got a Bachelor of Fine Arts with a focus on Graphic Design. During my time in college I fell in love with coding and realized that stuff I designed, I could also build in code. Thus began my journey to learn everything I know about coding to this day." }, void 0, !1, {
          fileName: "app/routes/about.tsx",
          lineNumber: 28,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { children: "I have written code for Steel Fish Design, Traffic Digital Agency, and Deque. I also help out maintain a few open source projects when I have the free time. I currently work at Launch by NTT Data as a Senior Digital Engineer. In my current position I lead a team of front end developers for a client. In our day to day we use React, GQL, and Sass." }, void 0, !1, {
          fileName: "app/routes/about.tsx",
          lineNumber: 42,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { children: "I met my wife while attending SAU. We live in a small town in Michigan with our six year old son and two year old daughter." }, void 0, !1, {
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
  meta: () => meta2
});

// app/components/terminal.tsx
var import_react_terminal2 = require("react-terminal"), import_jsx_dev_runtime11 = require("react/jsx-dev-runtime"), RomanTerminal = () => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "hidden lg:flex w-800 h-460", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
  import_react_terminal2.ReactTerminal,
  {
    commands: {
      whoami: "Jacob Roman",
      help: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("span", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("span", { children: "Commands:" }, void 0, !1, {
          fileName: "app/components/terminal.tsx",
          lineNumber: 11,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("br", {}, void 0, !1, {
          fileName: "app/components/terminal.tsx",
          lineNumber: 12,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("br", {}, void 0, !1, {
          fileName: "app/components/terminal.tsx",
          lineNumber: 13,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("span", { children: "VARIABLES" }, void 0, !1, {
          fileName: "app/components/terminal.tsx",
          lineNumber: 15,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("br", {}, void 0, !1, {
          fileName: "app/components/terminal.tsx",
          lineNumber: 16,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("span", { style: { marginLeft: "20px" }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("strong", { children: "about" }, void 0, !1, {
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("br", {}, void 0, !1, {
          fileName: "app/components/terminal.tsx",
          lineNumber: 20,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("span", { style: { marginLeft: "20px" }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("strong", { children: "resume" }, void 0, !1, {
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("br", {}, void 0, !1, {
          fileName: "app/components/terminal.tsx",
          lineNumber: 24,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("span", { style: { marginLeft: "20px" }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("strong", { children: "contact" }, void 0, !1, {
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("br", {}, void 0, !1, {
          fileName: "app/components/terminal.tsx",
          lineNumber: 28,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("br", {}, void 0, !1, {
          fileName: "app/components/terminal.tsx",
          lineNumber: 29,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("span", { children: "FUNCTIONS" }, void 0, !1, {
          fileName: "app/components/terminal.tsx",
          lineNumber: 31,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("br", {}, void 0, !1, {
          fileName: "app/components/terminal.tsx",
          lineNumber: 32,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("span", { style: { marginLeft: "20px" }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("strong", { children: "experience()" }, void 0, !1, {
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("br", {}, void 0, !1, {
          fileName: "app/components/terminal.tsx",
          lineNumber: 36,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("span", { style: { marginLeft: "40px" }, children: "returns the total years of working experience" }, void 0, !1, {
          fileName: "app/components/terminal.tsx",
          lineNumber: 37,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("br", {}, void 0, !1, {
          fileName: "app/components/terminal.tsx",
          lineNumber: 40,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/terminal.tsx",
        lineNumber: 10,
        columnNumber: 13
      }, this),
      contact: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("span", { children: "follow me on twitter or send me an email" }, void 0, !1, {
        fileName: "app/components/terminal.tsx",
        lineNumber: 43,
        columnNumber: 18
      }, this),
      about: "Javascript Developer, Accessibility Advocate, and Team player. I am always seeking opportunities to learn and grow. I am a simple guy who loves all things tech and a good cup of coffee. Nice to meet you.",
      resume: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("span", { children: [
        "You can",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
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
    welcomeMessage: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("span", { children: [
      'Type "help" for more information. ',
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("br", {}, void 0, !1, {
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

// app/routes/index.tsx
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime"), meta2 = () => ({
  title: "Roman Bytes | Senior Digital Engineer",
  description: "Experienced Senior Digital Engineer with a demonstrated history of working in the computer software industry. Skilled in modern Front-end technologies, and Fron-end design. Strong engineering professional with a Bachelor of Arts focused on Graphic Design from Spring Arbor University.",
  "og:url": "https://romanbytes.dev/",
  "og:type": "website",
  "og:image": profile_pic_default,
  "twitter:image": profile_pic_default,
  "twitter:card": "summary_large_image"
});
function Index2() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "flex justify-center items-center w-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("h1", { className: "font-sans text-white left-2.5 lg:right-2.5 xl:right-5 absolute top-2.5 xl:top-5 text-2xl text-left lg:text-right", children: [
      "Hello, I am Jacob Roman, a",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("span", { className: "text-romanYellow line-through", children: [
        " ",
        "designer",
        " "
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 25,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 29,
        columnNumber: 17
      }, this),
      " Senior Digital Engineer based in Michigan."
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 23,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(terminal_default, {}, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 31,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/index.tsx",
    lineNumber: 22,
    columnNumber: 9
  }, this);
}

// app/routes/test.tsx
var test_exports = {};
__export(test_exports, {
  default: () => test
});
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime");
function test() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "mt-20 mb-40 p-14 text-md font-sans text-white border border-white bg-romanBlack", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("h1", { className: "text-8xl font-bold mt-16 font-ubuntu leading-heading tracking-heading", children: "Hello!" }, void 0, !1, {
      fileName: "app/routes/test.tsx",
      lineNumber: 4,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "text-lg text-stone-500 mt-4 mb-16 font-normal", children: "husband - father - coder - jedi" }, void 0, !1, {
      fileName: "app/routes/test.tsx",
      lineNumber: 7,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "text-md", children: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis lacus massa. Curabitur vitae enim id tortor malesuada scelerisque. Cras libero elit, fringilla ut consectetur vitae, dapibus ut erat. Phasellus volutpat quam eu lorem commodo porttitor. Nam id condimentum massa, vitae faucibus sapien. Sed quis dui quis dolor ullamcorper accumsan tempus quis ligula. Mauris scelerisque eleifend mollis. Cras commodo risus vitae iaculis placerat. Integer egestas interdum mi, non vestibulum elit sodales pretium. Curabitur faucibus dolor eu volutpat consequat. Nulla euismod neque egestas, rutrum lacus pretium, venenatis libero. Pellentesque fringilla lectus ultricies ultrices tincidunt. Etiam quis pretium nulla, nec ornare ex. Cras imperdiet dolor orci, ut aliquet lorem luctus a. Nullam ultrices tincidunt tortor vel sodales. In pulvinar magna lorem, in fermentum orci pulvinar sit amet. Nulla facilisi. Quisque ipsum sem, lobortis et aliquam non, efficitur ut quam. In lacinia consectetur bibendum. Suspendisse in lacinia eros, vel luctus diam. Nullam hendrerit tellus sed libero congue vehicula. Integer ipsum justo, euismod vel mattis vel, faucibus vel massa. Integer convallis sem nec metus congue mattis. Sed vel rhoncus nulla, nec euismod urna. Integer a nunc sem. Phasellus vehicula nunc et justo sollicitudin viverra. Cras blandit lacus id maximus efficitur. Ut blandit, elit eu interdum malesuada, purus turpis fringilla arcu, et sodales ante dolor eu dui. Morbi convallis, justo et ullamcorper pellentesque, ex elit dignissim nisl, eu commodo turpis nisi vel sem. Nulla euismod libero nec augue lobortis, eget rutrum nunc imperdiet. Phasellus laoreet metus sed nisi lacinia consectetur. Vestibulum at maximus mauris. Nulla eget pretium magna. Nulla pharetra congue metus et pretium. Nunc purus nisi, ultricies ac imperdiet eu, pharetra a metus. Aenean accumsan tellus quis arcu malesuada, at scelerisque dolor varius. Pellentesque mollis, turpis in luctus scelerisque, est tellus iaculis sapien, eu accumsan augue sem sed tellus. Nulla dictum mattis lectus, at tincidunt purus viverra in. In luctus nunc elit, efficitur euismod est congue id. Pellentesque rhoncus, nisl ac pretium blandit, augue tellus elementum est, ac molestie sapien sem non leo. Proin lobortis pharetra lacus quis pretium. Donec pulvinar nunc sed luctus porta. Integer tristique efficitur nunc, nec placerat tortor. Nullam aliquam ac metus sed malesuada. Integer id ante ac turpis bibendum commodo. Curabitur faucibus rutrum rutrum. Pellentesque vehicula ipsum nunc, eget vulputate eros fringilla at. Sed eu leo eget leo tristique molestie non eu diam. Aliquam vitae maximus tortor. Mauris venenatis dapibus nibh tincidunt condimentum. Nulla facilisi. Vivamus augue ligula, iaculis sed tortor eu, hendrerit facilisis turpis. Etiam faucibus laoreet arcu et egestas. Donec mauris diam, interdum sed pellentesque nec, convallis sed ex. In purus diam, condimentum sit amet elementum sit amet, tempus at sem. Aenean ligula nisl, suscipit eu ex et, ornare elementum risus. Proin sodales massa sed orci tempor, vitae elementum ligula suscipit. Fusce a ligula vehicula, porttitor metus non, commodo sem. Sed ut magna mattis, venenatis mi congue, vestibulum nisi. Proin et lectus eu libero dignissim molestie vitae vitae libero. Proin convallis at ex id efficitur. Nulla efficitur, lacus ut ornare tempor, massa urna mattis magna, vel porta leo neque vitae dui. Nam congue congue turpis id euismod. Curabitur vel sapien elementum lacus malesuada imperdiet ut eget sem. In accumsan arcu erat, ac dictum sapien varius sed. Nulla a neque eu sem rhoncus scelerisque. Phasellus eget lacus sit amet sapien semper tempor. Nunc finibus dui eget metus auctor, eget dignissim tortor aliquam. Sed elit nisl, tempor eleifend neque et, ullamcorper auctor sapien. In maximus eu nisi a convallis. Duis ut pharetra nulla. Duis non sapien egestas, egestas augue in, rutrum dolor. Nullam pharetra molestie sapien. In fringilla leo eu mi finibus, vitae dictum neque condimentum. Quisque dignissim sem vitae dui gravida, ac volutpat augue finibus. Suspendisse euismod sed nisl et posuere. Ut finibus vulputate volutpat. Duis vestibulum sem ac lorem gravida, a varius elit faucibus. Aliquam erat volutpat. Nunc sed elementum nulla. In orci elit, lacinia sed finibus ut, consequat non sem. Nunc pharetra semper metus, vel luctus justo elementum vitae. Ut convallis velit sem, id pharetra sapien aliquet a. Fusce eleifend lorem ut malesuada commodo. Donec elementum odio eros, nec ullamcorper elit elementum nec. Nam non erat vel sapien euismod aliquam vel sit amet sem. Cras hendrerit gravida massa, sit amet tincidunt velit pretium eu. Proin quis maximus est. Curabitur luctus lacus mi, suscipit mattis diam pharetra ut. Nam quis porttitor lorem. Maecenas velit dolor, pharetra ac lectus in, ultrices condimentum tortor. Pellentesque sed ex pellentesque sapien efficitur dignissim eget id felis. Pellentesque sed tortor euismod, maximus justo vitae, maximus ante. Nam in mi vestibulum, tincidunt ex in, porta arcu. Pellentesque pellentesque, quam eget congue consectetur, diam augue mollis lectus, ut gravida libero libero quis leo. Donec tincidunt neque nec metus mollis tempus. Aenean ac nulla eget magna consectetur lobortis. Nunc quis rutrum ex, eget ornare elit. Nullam porta magna sit amet erat volutpat varius. Phasellus magna ex, malesuada nec tristique et, laoreet sed justo. Suspendisse potenti. Donec consequat suscipit semper. Vivamus dictum, metus quis sodales faucibus, leo diam dapibus urna, aliquam pretium lorem arcu volutpat ante. Nullam luctus diam id velit luctus mattis. Cras sodales, lorem nec sollicitudin vehicula, risus elit blandit ex, a fermentum leo augue vitae nisi. Integer iaculis neque eget magna laoreet, eu imperdiet velit vehicula. Duis nec luctus nulla, sit amet scelerisque neque. Duis vitae dui porta, eleifend urna ultricies, posuere risus. Phasellus sit amet elit vel turpis varius efficitur a sed erat. Ut vel finibus nisi. Aliquam a pharetra ante, vel malesuada tellus. Fusce fringilla, elit quis molestie sagittis, leo tellus imperdiet felis, et volutpat leo lacus vel nunc. Phasellus porttitor turpis quis lorem venenatis semper. Quisque dictum diam quis accumsan suscipit. Pellentesque vehicula rhoncus vestibulum. Ut viverra ante ac ante maximus, eu pulvinar leo laoreet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque sit amet rutrum felis, vitae faucibus metus. In accumsan vestibulum dui, ut efficitur lacus fermentum vel. Sed posuere dolor porttitor, eleifend odio ac, suscipit arcu. Quisque vulputate arcu eget elit dictum, vitae consectetur nunc mollis. Sed ex metus, congue a enim et, commodo consequat tellus. Aenean porta tempor dui quis viverra. Etiam pretium tellus at justo vulputate, sed dignissim nibh finibus. Morbi vitae ex feugiat, vestibulum sem et, ultricies sapien. Aliquam id velit nec leo faucibus ultricies. Curabitur consectetur pharetra felis, in imperdiet libero. Morbi congue pretium dignissim. Donec ornare mollis orci in hendrerit. Aenean ut dignissim nulla. Aenean imperdiet aliquet rutrum. Integer quis suscipit nibh, ac tincidunt lorem. Aenean non tellus semper, euismod felis eu, volutpat tortor. Donec non ullamcorper elit. Praesent vitae velit sit amet tortor efficitur ultrices eu nec justo. Aliquam eget quam est. Ut dignissim gravida euismod. Maecenas sit amet hendrerit nunc. Donec quis elit quis tortor euismod dignissim vel vel ex. Nam quis quam ut risus ullamcorper feugiat. Pellentesque vel bibendum quam. Duis elementum diam sed ligula blandit iaculis. Sed posuere porttitor eros, id mollis nibh tempor ut. Proin interdum velit vel tincidunt laoreet. Aenean sodales urna et tortor tempor, et suscipit tortor tincidunt. Quisque sagittis ex erat, id dignissim sem imperdiet vitae. Fusce vestibulum, sem quis aliquam facilisis, libero lectus suscipit nulla, id vulputate nisl purus eu nunc. Duis at vehicula est. Nunc semper magna vitae lacus suscipit dictum. Quisque varius dolor at lacinia posuere. Nullam eget mauris eu lorem posuere hendrerit. Nullam vel lacinia leo, nec laoreet quam. Sed tempus efficitur justo. Vestibulum id nisi finibus, accumsan tellus id, porta nulla. Nulla vel nisl justo. Fusce pellentesque mattis lorem eget condimentum. In rhoncus augue sed nisi lobortis, eu malesuada nulla rhoncus. Mauris ut mauris eget dolor imperdiet dignissim tempor eget ex. Donec velit turpis, ornare quis mi id, sodales vestibulum nunc. Praesent euismod tristique tellus, id suscipit mauris vestibulum a. Fusce et est in lorem tempus fermentum in conggvallis ligula.",
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { children: "I am full-stack developer who has a strong background with the front-end and is improving my back-end knowledge every day. I was born in 1988 and grew up in Michigan. Once I graduated High School I knew that I wanted to do something with computers. I ended up taking a Graphic Design class and loved it, so I went to Spring Arbor University and got a Bachelor of Fine Arts with a focus on Graphic Design. During my time in college I fell in love with coding and realized that stuff I designed, I could also build in code. Thus began my journey to learn everything I know about coding to this day." }, void 0, !1, {
        fileName: "app/routes/test.tsx",
        lineNumber: 151,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { children: "I have written code for Steel Fish Design, Traffic Digital Agency, and Deque. I also help out maintain a few open source projects when I have the free time. I currently work at Nexient as a Senior Developer I. In my current position I lead a team of front end developers for a client. In our day to day we use React, GQL, and Sass." }, void 0, !1, {
        fileName: "app/routes/test.tsx",
        lineNumber: 164,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { children: "I met my wife while attending SAU. We live in a small town in Michigan with our six year old son and two year old daughter." }, void 0, !1, {
        fileName: "app/routes/test.tsx",
        lineNumber: 172,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/test.tsx",
      lineNumber: 10,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/test.tsx",
    lineNumber: 3,
    columnNumber: 9
  }, this);
}

// app/routes/404.tsx
var __exports = {};
__export(__exports, {
  default: () => test2
});
var import_jsx_dev_runtime14 = require("react/jsx-dev-runtime");
function test2() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "mt-20 mb-40 p-14 text-md font-sans text-white border border-white bg-romanBlack", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h1", { className: "text-8xl font-bold mt-16 font-ubuntu leading-heading tracking-heading", children: "Hello!" }, void 0, !1, {
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
var assets_manifest_default = { entry: { module: "/build/entry.client-PUOIK5DD.js", imports: ["/build/_shared/chunk-OFDAVSOL.js", "/build/_shared/chunk-JR7JHID7.js", "/build/_shared/chunk-4D7IJTTE.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-NSM26OW5.js", imports: ["/build/_shared/chunk-M2RJYPDF.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !0, hasErrorBoundary: !0 }, "routes/404": { id: "routes/404", parentId: "root", path: "404", index: void 0, caseSensitive: void 0, module: "/build/routes/404-5XDYRPD7.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/about": { id: "routes/about", parentId: "root", path: "about", index: void 0, caseSensitive: void 0, module: "/build/routes/about-PGP2KDUF.js", imports: ["/build/_shared/chunk-K6M27BHM.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-4XUEQ5OI.js", imports: ["/build/_shared/chunk-K6M27BHM.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/projects/index": { id: "routes/projects/index", parentId: "root", path: "projects", index: !0, caseSensitive: void 0, module: "/build/routes/projects/index-B5NEP32T.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/projects/project": { id: "routes/projects/project", parentId: "root", path: "projects/project", index: void 0, caseSensitive: void 0, module: "/build/routes/projects/project-UZEBTHP3.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/test": { id: "routes/test", parentId: "root", path: "test", index: void 0, caseSensitive: void 0, module: "/build/routes/test-MYRIMMEQ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "a59c73c5", hmr: void 0, url: "/build/manifest-A59C73C5.js" };

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
