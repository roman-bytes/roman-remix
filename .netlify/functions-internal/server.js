var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// server.js
var server_exports = {};
__export(server_exports, {
  handler: () => handler
});

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React = __toESM(require("react"));

// server.js
var import_netlify = require("@remix-run/netlify");

// server-entry-module:@remix-run/dev/server-build
var server_build_exports = {};
__export(server_build_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_server = require("react-dom/server");
var import_react = require("@remix-run/react");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_react.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/workspaces/roman-remix/app/root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links
});
var import_react7 = require("@remix-run/react");

// app/components/layout.tsx
var import_react6 = __toESM(require("react"));
var import_classnames = __toESM(require("classnames"));
var import_react_terminal = require("react-terminal");

// app/components/footer.tsx
var import_react2 = __toESM(require("react"));
var Footer = () => /* @__PURE__ */ import_react2.default.createElement("footer", {
  className: "hidden lg:block w-full fixed top-1/2 text-romanText"
}, /* @__PURE__ */ import_react2.default.createElement("div", {
  className: "absolute xl:left-5 lg:left-2.5 text-sm origin-center transform -rotate-90 -translate-x-1/2"
}, "Made with love from Michigan."), /* @__PURE__ */ import_react2.default.createElement("div", {
  className: "absolute xl:right-5 lg:right-2.5 text-sm origin-center transform rotate-90 translate-x-1/2"
}, /* @__PURE__ */ import_react2.default.createElement("a", {
  href: "https://github.com/roman-bytes/roman-bytes-dev"
}, "Source Code")));
var footer_default = Footer;

// app/components/social.tsx
var import_react3 = __toESM(require("react"));
var Social = () => /* @__PURE__ */ import_react3.default.createElement("ul", {
  className: "social"
}, /* @__PURE__ */ import_react3.default.createElement("li", null, /* @__PURE__ */ import_react3.default.createElement("a", {
  target: "_blank",
  href: "https://twitter.com/romanbytes",
  className: "hover:text-white relative"
}, "Twitter")), /* @__PURE__ */ import_react3.default.createElement("li", null, /* @__PURE__ */ import_react3.default.createElement("a", {
  target: "_blank",
  href: "https://github.com/roman-bytes",
  className: "hover:text-white relative"
}, "Github")), /* @__PURE__ */ import_react3.default.createElement("li", null, /* @__PURE__ */ import_react3.default.createElement("a", {
  target: "_blank",
  href: "https://codepen.io/romanbytes",
  className: "hover:text-white relative"
}, "CodePen")), /* @__PURE__ */ import_react3.default.createElement("li", null, /* @__PURE__ */ import_react3.default.createElement("a", {
  target: "_blank",
  href: "https://dev.to/romanbytes",
  className: "hover:text-white relative"
}, "Dev.to")));
var social_default = Social;

// app/components/nav.tsx
var import_react4 = __toESM(require("react"));
var Nav = () => /* @__PURE__ */ import_react4.default.createElement("ul", {
  className: "text-right nav"
}, /* @__PURE__ */ import_react4.default.createElement("li", null, /* @__PURE__ */ import_react4.default.createElement("a", {
  href: "/",
  className: "hover:text-white relative"
}, "Index")), /* @__PURE__ */ import_react4.default.createElement("li", null, /* @__PURE__ */ import_react4.default.createElement("a", {
  href: "/projects",
  className: "hover:text-white relative"
}, "Projects")), /* @__PURE__ */ import_react4.default.createElement("li", null, /* @__PURE__ */ import_react4.default.createElement("a", {
  href: "/about",
  className: "hover:text-white relative"
}, "About")));
var nav_default = Nav;

// app/components/logo.tsx
var import_react5 = __toESM(require("react"));
var Logo = () => /* @__PURE__ */ import_react5.default.createElement("a", {
  href: "/",
  "aria-label": "Go back to home page"
}, /* @__PURE__ */ import_react5.default.createElement("svg", {
  width: 57,
  height: 46,
  viewBox: "0 0 57 46",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, /* @__PURE__ */ import_react5.default.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M25.704 7.33914H30.6735L29.6507 11.269H26.7544L25.704 7.33914Z",
  fill: "#BF860F"
}), /* @__PURE__ */ import_react5.default.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M26.8124 11.7816H29.6484L29.2722 13.3962C29.2722 13.3962 37.0573 14.8024 37.8271 22.3005C38.0262 23.4077 37.5026 23.3054 37.0546 22.679C34.8235 20.2162 33.0018 17.7109 28.1796 16.4846C23.4189 17.6127 19.2312 22.679 19.2312 22.679C19.2312 22.679 18.5069 23.5273 18.5069 22.1519C18.5069 20.7765 19.8931 14.3145 27.036 13.3962C26.9162 12.2576 26.8124 11.7816 26.8124 11.7816Z",
  fill: "#BF860F"
}), /* @__PURE__ */ import_react5.default.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M28.1907 17.6764C31.6677 19.0311 34.4076 20.0679 37.8824 25.5682C38.0302 26.1637 37.8824 26.4111 37.8824 26.4111C37.8824 26.4111 36.4639 28.429 36.4639 29.5038C36.4639 30.5785 37.4165 31.9252 37.4165 31.9252C37.4165 31.9252 37.5232 32.3224 37.4028 32.873C35.9895 35.2466 34.2588 36.8131 34.2588 36.8131C34.2588 36.8131 34.6191 32.8374 33.6813 27.5965C34.927 27.222 35.1255 26.8131 35.1255 26.8131L33.4441 23.9644L29.2257 25.2306H27.1516L22.8403 23.9644L21.1404 26.8131C21.1404 26.8131 21.2292 27.2594 22.8403 27.6086C21.8271 34.0021 21.9323 36.8131 21.9323 36.8131C21.9323 36.8131 20.2128 35.4297 18.9699 32.873C18.8195 32.479 18.9699 31.9252 18.9699 31.9252C18.9699 31.9252 19.7965 30.4659 19.7965 29.5038C19.8845 28.2875 18.499 26.4111 18.499 26.4111C18.499 26.4111 18.1721 26.0358 18.499 25.5682C20.2398 22.1153 24.5225 18.4014 28.1907 17.6764Z",
  fill: "#BF860F"
}), /* @__PURE__ */ import_react5.default.createElement("path", {
  d: "M4.05064 23.0387C4.53611 23.3119 4.97606 23.6458 5.37051 24.0405C5.76495 24.4048 6.09871 24.8753 6.37179 25.4521C6.64487 26.0289 6.84209 26.7272 6.96346 27.5468C7.11517 28.3665 7.19102 29.3379 7.19102 30.4612V35.3336C7.19102 36.7605 7.22136 37.9444 7.28205 38.8855C7.34273 39.857 7.52478 40.6311 7.8282 41.2079C8.16196 41.8151 8.6626 42.2401 9.33012 42.4829C9.99764 42.7258 10.9534 42.8472 12.1974 42.8472V45.1241H11.8333C10.3769 45.1241 9.16324 44.9571 8.1923 44.6232C7.22136 44.2892 6.44765 43.8035 5.87115 43.166C5.325 42.5285 4.93055 41.7392 4.68782 40.7981C4.47542 39.857 4.36923 38.7641 4.36923 37.5194V28.6852C4.36923 28.1388 4.27821 27.6075 4.09616 27.0915C3.94445 26.545 3.68654 26.0593 3.32244 25.6343C2.95834 25.2093 2.50321 24.8602 1.95705 24.5869C1.4109 24.3137 0.758546 24.1771 0 24.1771V21.9458C0.758546 21.9458 1.4109 21.8092 1.95705 21.536C2.50321 21.2627 2.95834 20.9136 3.32244 20.4886C3.68654 20.0636 3.94445 19.593 4.09616 19.077C4.27821 18.5305 4.36923 17.9841 4.36923 17.4376V8.60347C4.36923 7.38916 4.47542 6.31145 4.68782 5.37035C4.93055 4.3989 5.325 3.59442 5.87115 2.9569C6.44765 2.31938 7.22136 1.83366 8.1923 1.49972C9.16324 1.16578 10.3769 0.99881 11.8333 0.99881H12.1974V3.27566C10.9534 3.27566 9.99764 3.39709 9.33012 3.63996C8.6626 3.88282 8.16196 4.30783 7.8282 4.91498C7.52478 5.49179 7.34273 6.26591 7.28205 7.23736C7.22136 8.17846 7.19102 9.36243 7.19102 10.7893V15.6617C7.19102 16.7849 7.11517 17.7564 6.96346 18.5761C6.84209 19.3654 6.64487 20.0484 6.37179 20.6252C6.09871 21.202 5.76495 21.6877 5.37051 22.0824C4.97606 22.4467 4.53611 22.7655 4.05064 23.0387Z",
  fill: "#BF860F"
}), /* @__PURE__ */ import_react5.default.createElement("path", {
  d: "M52.1555 23.0387C51.67 22.7655 51.2301 22.4467 50.8356 22.0824C50.4412 21.6877 50.1074 21.202 49.8344 20.6252C49.5613 20.0484 49.3489 19.3654 49.1972 18.5761C49.0758 17.7564 49.0151 16.7849 49.0151 15.6617V10.7893C49.0151 9.36243 48.9848 8.17846 48.9241 7.23736C48.8634 6.26591 48.6662 5.49179 48.3324 4.91498C48.029 4.30783 47.5435 3.88282 46.876 3.63996C46.2085 3.39709 45.2527 3.27566 44.0087 3.27566V0.99881H44.3728C45.8292 0.99881 47.0429 1.16578 48.0138 1.49972C48.9848 1.83366 49.7433 2.31938 50.2895 2.9569C50.866 3.59442 51.2604 4.3989 51.4728 5.37035C51.7155 6.31145 51.8369 7.38916 51.8369 8.60347V17.4376C51.8369 17.9841 51.9128 18.5305 52.0645 19.077C52.2465 19.593 52.5196 20.0636 52.8837 20.4886C53.2478 20.9136 53.7029 21.2627 54.2491 21.536C54.7952 21.8092 55.4476 21.9458 56.2061 21.9458V24.1771C55.4476 24.1771 54.7952 24.3137 54.2491 24.5869C53.7029 24.8602 53.2478 25.2093 52.8837 25.6343C52.5196 26.0593 52.2465 26.545 52.0645 27.0915C51.9128 27.6075 51.8369 28.1388 51.8369 28.6852V37.5194C51.8369 38.7641 51.7155 39.857 51.4728 40.7981C51.2604 41.7392 50.866 42.5285 50.2895 43.166C49.7433 43.8035 48.9848 44.2892 48.0138 44.6232C47.0429 44.9571 45.8292 45.1241 44.3728 45.1241H44.0087V42.8472C45.2527 42.8472 46.2085 42.7258 46.876 42.4829C47.5435 42.2401 48.029 41.8151 48.3324 41.2079C48.6662 40.6311 48.8634 39.857 48.9241 38.8855C48.9848 37.9444 49.0151 36.7605 49.0151 35.3336V30.4612C49.0151 29.3379 49.0758 28.3665 49.1972 27.5468C49.3489 26.7272 49.5613 26.0289 49.8344 25.4521C50.1074 24.8753 50.4412 24.4048 50.8356 24.0405C51.2301 23.6458 51.67 23.3119 52.1555 23.0387Z",
  fill: "#BF860F"
})));
var logo_default = Logo;

// app/components/layout.tsx
var Layout = ({
  children
}) => {
  const [mobileMenu, setMobileMenu] = (0, import_react6.useState)(false);
  const handleMenuOpen = () => {
    setMobileMenu(!mobileMenu);
  };
  const mobileMenuClass = (0, import_classnames.default)("justify-between my-5", mobileMenu ? "flex h-auto" : "hidden h-0");
  const footerMobileClass = (0, import_classnames.default)("flex-no-wrap justify-center", mobileMenu ? "flex" : "hidden");
  return /* @__PURE__ */ import_react6.default.createElement(import_react_terminal.TerminalContextProvider, null, /* @__PURE__ */ import_react6.default.createElement("main", {
    className: "h-full"
  }, /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "hidden lg:block absolute xl:top-5 xl:left-5 lg:top-2.5 lg:left-2.5 h-"
  }, /* @__PURE__ */ import_react6.default.createElement(logo_default, null)), /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "flex items-center justify-center h-full w-full"
  }, /* @__PURE__ */ import_react6.default.createElement("main", {
    className: "container lg:mx-32 h-full lg:flex items-center justify-center"
  }, children)), /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "hidden lg:flex w-full fixed text-romanText xl:p-20 lg:p-10 justify-between items-end bottom-0 left-0 right-0"
  }, /* @__PURE__ */ import_react6.default.createElement(social_default, null), /* @__PURE__ */ import_react6.default.createElement(nav_default, null)), /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "lg:hidden p-5 border-t border-white bg-romanBlack w-full fixed text-romanText lg:p-10 flex justify-between bottom-0 left-0 right-0 flex-col"
  }, /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "flex flex-row justify-between items-center"
  }, /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "xl:top-5 xl:left-5 lg:top-2.5 lg:left-2.5"
  }, /* @__PURE__ */ import_react6.default.createElement(logo_default, null)), /* @__PURE__ */ import_react6.default.createElement("svg", {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "sm:block lg:hidden xl:hidden cursor-pointer",
    onClick: () => handleMenuOpen()
  }, /* @__PURE__ */ import_react6.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3 8V6H21V8H3ZM3 13H21V11H3V13ZM3 18H21V16H3V18Z",
    fill: "white"
  }))), /* @__PURE__ */ import_react6.default.createElement("div", {
    className: mobileMenuClass
  }, /* @__PURE__ */ import_react6.default.createElement(social_default, null), /* @__PURE__ */ import_react6.default.createElement(nav_default, null)), /* @__PURE__ */ import_react6.default.createElement("footer", {
    className: footerMobileClass
  }, /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "text-sm"
  }, "Made with love from Michigan."), /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "text-sm"
  }, /* @__PURE__ */ import_react6.default.createElement("a", {
    href: "https://github.com/roman-bytes/roman-bytes-dev"
  }, "Source Code", " ")))), /* @__PURE__ */ import_react6.default.createElement(footer_default, null)));
};
var layout_default = Layout;

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-PF6D4IZR.css";

// route:/workspaces/roman-remix/app/root.tsx
var links = () => {
  return [
    { rel: "stylesheet", href: tailwind_default }
  ];
};
function App() {
  return /* @__PURE__ */ React.createElement(Document, null, /* @__PURE__ */ React.createElement(layout_default, null, /* @__PURE__ */ React.createElement(import_react7.Outlet, null)));
}
function ErrorBoundary({ error }) {
  console.error(error);
  return /* @__PURE__ */ React.createElement(Document, {
    title: "Error!"
  }, /* @__PURE__ */ React.createElement(layout_default, null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "There was an error"), /* @__PURE__ */ React.createElement("p", null, error.message), /* @__PURE__ */ React.createElement("hr", null), /* @__PURE__ */ React.createElement("p", null, "Hey, developer, you should replace this with what you want your users to see."))));
}
function CatchBoundary() {
  let caught = (0, import_react7.useCatch)();
  let message;
  switch (caught.status) {
    case 401:
      message = /* @__PURE__ */ React.createElement("p", null, "Oops! Looks like you tried to visit a page that you do not have access to.");
      break;
    case 404:
      message = /* @__PURE__ */ React.createElement("p", null, "Oops! Looks like you tried to visit a page that does not exist.");
      break;
    default:
      throw new Error(caught.data || caught.statusText);
  }
  return /* @__PURE__ */ React.createElement(Document, {
    title: `${caught.status} ${caught.statusText}`
  }, /* @__PURE__ */ React.createElement(layout_default, null, /* @__PURE__ */ React.createElement("h1", null, caught.status, ": ", caught.statusText), message));
}
function Document({
  children,
  title
}) {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en",
    className: "w-full h-full font-mono"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), title ? /* @__PURE__ */ React.createElement("title", null, title) : null, /* @__PURE__ */ React.createElement(import_react7.Meta, null), /* @__PURE__ */ React.createElement(import_react7.Links, null)), /* @__PURE__ */ React.createElement("body", {
    className: "bg-romanBlack w-full h-full",
    style: { backgroundImage: "url(/dots.png)" }
  }, children, /* @__PURE__ */ React.createElement(import_react7.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_react7.Scripts, null), /* @__PURE__ */ React.createElement(import_react7.LiveReload, null)));
}

// route:/workspaces/roman-remix/app/routes/projects/project.tsx
var project_exports = {};

// route:/workspaces/roman-remix/app/routes/projects/index.tsx
var projects_exports = {};
__export(projects_exports, {
  default: () => Projects,
  loader: () => loader
});
var import_react8 = require("@remix-run/react");
var loader = async () => {
  const fusilierRepos = fetch("https://api.github.com/orgs/fusilier-farms/repos").then((res) => {
    console.log("res", res);
    return res.json();
  });
  const bytesRepos = await fetch("https://api.github.com/users/roman-bytes/repos").then((response) => response.json());
  return fusilierRepos;
};
function Projects() {
  const repos = (0, import_react8.useLoaderData)();
  console.log("repos", repos);
  const repoTiles = repos.map((repo) => {
    return /* @__PURE__ */ React.createElement(import_react8.Link, {
      to: repo.private ? "" : repo.url,
      key: repo.id,
      target: "_blank",
      className: "w-full overflow-hidden my-2 px-2 xl:w-1/3"
    }, /* @__PURE__ */ React.createElement("div", {
      className: "border border-white bg-romanBlack p-4 flex justify-between items-center cursor-pointer hover:border-romanYellow hover:bg-romanYellow hover:text-romanBlack"
    }, /* @__PURE__ */ React.createElement("div", null, repo.name), repo.private ? /* @__PURE__ */ React.createElement("svg", {
      width: 24,
      height: 24,
      viewBox: "0 0 24 24",
      className: "fill-current",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, /* @__PURE__ */ React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M17 8.5H18C19.1 8.5 20 9.4 20 10.5V20.5C20 21.6 19.1 22.5 18 22.5H6C4.90002 22.5 4 21.6 4 20.5V10.5C4 9.4 4.90002 8.5 6 8.5H7V6.5C7 3.74 9.23999 1.5 12 1.5C14.76 1.5 17 3.74 17 6.5V8.5ZM12 3.5C10.34 3.5 9 4.84 9 6.5V8.5H15V6.5C15 4.84 13.66 3.5 12 3.5ZM6 20.5V10.5H18V20.5H6ZM14 15.5C14 16.6 13.1 17.5 12 17.5C10.9 17.5 10 16.6 10 15.5C10 14.4 10.9 13.5 12 13.5C13.1 13.5 14 14.4 14 15.5Z"
    })) : /* @__PURE__ */ React.createElement("svg", {
      width: 8,
      height: 12,
      viewBox: "0 0 8 12",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, /* @__PURE__ */ React.createElement("path", {
      d: "M1.70504 0L0.295044 1.41L4.87504 6L0.295044 10.59L1.70504 12L7.70504 6L1.70504 0Z",
      fill: "white"
    }))));
  });
  return /* @__PURE__ */ React.createElement("div", {
    className: "container flex flex-col"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-4xl text-white p-4 border-b border-white"
  }, "Projects"), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-wrap p-4 xl:-mx-2 overflow-hidden lg:mt-4 text-white mb-20"
  }, repoTiles));
}

// route:/workspaces/roman-remix/app/routes/about.tsx
var about_exports = {};
__export(about_exports, {
  default: () => Index,
  meta: () => meta
});
var meta = () => {
  return {
    title: "Roman Bytes - Full Stack Developer"
  };
};
function Index() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "mb-20 lg:mb-0 xl:w-full lg:w-3/4 text-md leading-8 font-sans p-8 text-white lg:border border-white bg-romanBlack"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "font-mono text-2xl mb-3"
  }, "Hi! I'm Jacob Roman"), /* @__PURE__ */ React.createElement("p", null, "I am full-stack developer who has a strong background with the front-end and is improving my back-end knowledge every day. I was born in 1988 and grew up in Michigan. Once I graduated High School I knew that I wanted to do something with computers. I ended up taking a Graphic Design class and loved it, so I went to Spring Arbor University and got a Bachelor of Fine Arts with a focus on Graphic Design. During my time in college I fell in love with coding and realized that stuff I designed, I could also build in code. Thus began my journey to learn everything I I know about coding to this day."), /* @__PURE__ */ React.createElement("p", null, "I have written code for Steel Fish Design, Traffic Digital Agency, and Deque. I also help out maintain a few open source projects when I have the free time. I currently work at Nexient as a Developer II. In my current position I lead a team of developers for the front end on different websites. We use React and a number of other front-end frameworks."), /* @__PURE__ */ React.createElement("p", null, "I met my wife while attending SAU. We live in a small town of town of Michigan with our five year old son and eight month old daughter, dog, and grandma."));
}

// route:/workspaces/roman-remix/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index2,
  loader: () => loader2,
  meta: () => meta2
});
var import_react10 = require("@remix-run/react");
var import_node = require("@remix-run/node");
var import_react11 = __toESM(require("react"));

// app/components/terminal.tsx
var import_react9 = __toESM(require("react"));
var import_react_terminal2 = require("react-terminal");
var RomanTerminal = () => {
  const commands = {
    whoami: "Jacob Roman",
    help: /* @__PURE__ */ import_react9.default.createElement("span", null, /* @__PURE__ */ import_react9.default.createElement("span", null, "Commands:"), /* @__PURE__ */ import_react9.default.createElement("br", null), /* @__PURE__ */ import_react9.default.createElement("br", null), /* @__PURE__ */ import_react9.default.createElement("span", null, "VARIABLES"), /* @__PURE__ */ import_react9.default.createElement("br", null), /* @__PURE__ */ import_react9.default.createElement("span", {
      style: { marginLeft: "20px" }
    }, /* @__PURE__ */ import_react9.default.createElement("strong", null, "about"), " -- know more about me"), /* @__PURE__ */ import_react9.default.createElement("br", null), /* @__PURE__ */ import_react9.default.createElement("span", {
      style: { marginLeft: "20px" }
    }, /* @__PURE__ */ import_react9.default.createElement("strong", null, "resume"), " -- want to have a look at my resume?"), /* @__PURE__ */ import_react9.default.createElement("br", null), /* @__PURE__ */ import_react9.default.createElement("span", {
      style: { marginLeft: "20px" }
    }, /* @__PURE__ */ import_react9.default.createElement("strong", null, "contact"), " -- want to get in touch?"), /* @__PURE__ */ import_react9.default.createElement("br", null), /* @__PURE__ */ import_react9.default.createElement("br", null), /* @__PURE__ */ import_react9.default.createElement("span", null, "FUNCTIONS"), /* @__PURE__ */ import_react9.default.createElement("br", null), /* @__PURE__ */ import_react9.default.createElement("span", {
      style: { marginLeft: "20px" }
    }, /* @__PURE__ */ import_react9.default.createElement("strong", null, "experience()"), " - float"), /* @__PURE__ */ import_react9.default.createElement("br", null), /* @__PURE__ */ import_react9.default.createElement("span", {
      style: { marginLeft: "40px" }
    }, "returns the total years of working experience"), /* @__PURE__ */ import_react9.default.createElement("br", null)),
    contact: /* @__PURE__ */ import_react9.default.createElement("span", null, "follow me on twitter or send me an email"),
    about: "Javascript Developer, Accessibility Advocate, and Team player. I am always seeking opportunities to learn and grow. I am a simple guy who loves all things tech and a good cup of coffee. Nice to meet you.",
    resume: /* @__PURE__ */ import_react9.default.createElement("span", null, "You can", " ", /* @__PURE__ */ import_react9.default.createElement("a", {
      target: "_blank",
      "aria-label": "Resume",
      rel: "noreferrer",
      href: "jacob-roman-resume.pdf",
      className: "underline text-romanPrimary"
    }, "download my resume here")),
    "experience()": () => {
      const difDate = new Date() - new Date("2010-10-01");
      const experience = (difDate / 1e3 / 60 / 60 / 24 / 365).toFixed(1);
      return `${experience} years`;
    }
  };
  const welcomeMessage = /* @__PURE__ */ import_react9.default.createElement("span", null, 'Type "help" for more information. ', /* @__PURE__ */ import_react9.default.createElement("br", null));
  return /* @__PURE__ */ import_react9.default.createElement("div", {
    className: "hidden lg:flex justify-center fixed top-1/2 w-800 h-460 transform -translate-y-1/2"
  }, /* @__PURE__ */ import_react9.default.createElement(import_react_terminal2.ReactTerminal, {
    commands,
    theme: "dark",
    prompt: "$",
    welcomeMessage
  }));
};
var terminal_default = RomanTerminal;

// route:/workspaces/roman-remix/app/routes/index.tsx
var loader2 = () => {
  let data = {
    resources: [
      {
        name: "Remix Docs",
        url: "https://remix.run/docs"
      },
      {
        name: "React Router Docs",
        url: "https://reactrouter.com/docs"
      },
      {
        name: "Remix Discord",
        url: "https://discord.gg/VBePs6d"
      }
    ],
    demos: [
      {
        to: "demos/actions",
        name: "Actions"
      },
      {
        to: "demos/about",
        name: "Nested Routes, CSS loading/unloading"
      },
      {
        to: "demos/params",
        name: "URL Params and Error Boundaries"
      }
    ]
  };
  return (0, import_node.json)(data);
};
var meta2 = () => {
  return {
    title: "Roman Bytes | Full stack Developer",
    description: "Welcome to remix!"
  };
};
function Index2() {
  let data = (0, import_react10.useLoaderData)();
  return /* @__PURE__ */ import_react11.default.createElement(import_react11.default.Fragment, null, /* @__PURE__ */ import_react11.default.createElement("h1", {
    className: "font-sans text-white left-2.5 lg:right-2.5 xl:right-5 absolute top-2.5 xl:top-5 text-2xl text-left lg:text-right"
  }, "Hello, I am Jacob Roman, a", " ", /* @__PURE__ */ import_react11.default.createElement("span", {
    className: "text-romanYellow line-through"
  }, " designer "), /* @__PURE__ */ import_react11.default.createElement("br", null), " full stack developer based in Michigan."), /* @__PURE__ */ import_react11.default.createElement(terminal_default, null));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { "version": "a33a3911", "entry": { "module": "/build/entry.client-H3RIRK37.js", "imports": ["/build/_shared/chunk-EFIEF3NY.js", "/build/_shared/chunk-6BO74FWO.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-RBKBPSTI.js", "imports": ["/build/_shared/chunk-6ULDDS6J.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": true, "hasErrorBoundary": true }, "routes/about": { "id": "routes/about", "parentId": "root", "path": "about", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/about-MD6KYMUO.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-N2SE46TQ.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/projects/index": { "id": "routes/projects/index", "parentId": "root", "path": "projects", "index": true, "caseSensitive": void 0, "module": "/build/routes/projects/index-X6K7QQNP.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/projects/project": { "id": "routes/projects/project", "parentId": "root", "path": "projects/project", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/projects/project-BP4EEYKS.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-A33A3911.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
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
    module: project_exports
  },
  "routes/projects/index": {
    id: "routes/projects/index",
    parentId: "root",
    path: "projects",
    index: true,
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
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};

// server.js
function getLoadContext(event, context) {
  let rawAuthorizationString;
  let netlifyGraphToken;
  if (event.authlifyToken !== null) {
    netlifyGraphToken = event.authlifyToken;
  }
  let authHeader = event.headers["authorization"];
  let graphSignatureHeader = event.headers["x-netlify-graph-signature"];
  if (authHeader !== null && /Bearer /gi.test(authHeader)) {
    rawAuthorizationString = authHeader.split(" ")[1];
  }
  let loadContext = {
    clientNetlifyGraphAccessToken: rawAuthorizationString,
    netlifyGraphToken,
    netlifyGraphSignature: graphSignatureHeader
  };
  Object.keys(loadContext).forEach((key) => {
    if (loadContext[key] == null) {
      delete loadContext[key];
    }
  });
  return loadContext;
}
var handler = (0, import_netlify.createRequestHandler)({
  build: server_build_exports,
  getLoadContext,
  mode: "development"
});
module.exports = __toCommonJS(server_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
//# sourceMappingURL=server.js.map
