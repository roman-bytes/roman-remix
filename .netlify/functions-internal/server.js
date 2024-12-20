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
var import_node_stream = require("node:stream"), import_node2 = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = require("isbot"), import_server = require("react-dom/server");

// app/mocks/node.ts
var import_node = require("msw/node");

// app/mocks/handlers.ts
var import_msw = require("msw"), handlers = [
  import_msw.http.get("https://api.github.com/users/roman-bytes/repos?sort=updated_at", () => import_msw.HttpResponse.json([{
    id: 866282411,
    node_id: "R_kgDOM6Jrqw",
    name: "mock-roman-bytes-repo",
    full_name: "roman-bytes/pocket-ts",
    private: !1,
    owner: {
      login: "roman-bytes",
      id: 4601329,
      node_id: "MDQ6VXNlcjQ2MDEzMjk=",
      avatar_url: "https://avatars.githubusercontent.com/u/4601329?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/roman-bytes",
      html_url: "https://github.com/roman-bytes",
      followers_url: "https://api.github.com/users/roman-bytes/followers",
      following_url: "https://api.github.com/users/roman-bytes/following{/other_user}",
      gists_url: "https://api.github.com/users/roman-bytes/gists{/gist_id}",
      starred_url: "https://api.github.com/users/roman-bytes/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/roman-bytes/subscriptions",
      organizations_url: "https://api.github.com/users/roman-bytes/orgs",
      repos_url: "https://api.github.com/users/roman-bytes/repos",
      events_url: "https://api.github.com/users/roman-bytes/events{/privacy}",
      received_events_url: "https://api.github.com/users/roman-bytes/received_events",
      type: "User",
      user_view_type: "public",
      site_admin: !1
    },
    html_url: "https://github.com/roman-bytes/pocket-ts",
    description: "This is a mock call and a temp description to test for all sorts of things and make sure that we do not have too long of a description. ya ya ya all fun kind by peanut butter m and m's. ",
    fork: !1,
    url: "https://api.github.com/repos/roman-bytes/pocket-ts",
    forks_url: "https://api.github.com/repos/roman-bytes/pocket-ts/forks",
    keys_url: "https://api.github.com/repos/roman-bytes/pocket-ts/keys{/key_id}",
    collaborators_url: "https://api.github.com/repos/roman-bytes/pocket-ts/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/roman-bytes/pocket-ts/teams",
    hooks_url: "https://api.github.com/repos/roman-bytes/pocket-ts/hooks",
    issue_events_url: "https://api.github.com/repos/roman-bytes/pocket-ts/issues/events{/number}",
    events_url: "https://api.github.com/repos/roman-bytes/pocket-ts/events",
    assignees_url: "https://api.github.com/repos/roman-bytes/pocket-ts/assignees{/user}",
    branches_url: "https://api.github.com/repos/roman-bytes/pocket-ts/branches{/branch}",
    tags_url: "https://api.github.com/repos/roman-bytes/pocket-ts/tags",
    blobs_url: "https://api.github.com/repos/roman-bytes/pocket-ts/git/blobs{/sha}",
    git_tags_url: "https://api.github.com/repos/roman-bytes/pocket-ts/git/tags{/sha}",
    git_refs_url: "https://api.github.com/repos/roman-bytes/pocket-ts/git/refs{/sha}",
    trees_url: "https://api.github.com/repos/roman-bytes/pocket-ts/git/trees{/sha}",
    statuses_url: "https://api.github.com/repos/roman-bytes/pocket-ts/statuses/{sha}",
    languages_url: "https://api.github.com/repos/roman-bytes/pocket-ts/languages",
    stargazers_url: "https://api.github.com/repos/roman-bytes/pocket-ts/stargazers",
    contributors_url: "https://api.github.com/repos/roman-bytes/pocket-ts/contributors",
    subscribers_url: "https://api.github.com/repos/roman-bytes/pocket-ts/subscribers",
    subscription_url: "https://api.github.com/repos/roman-bytes/pocket-ts/subscription",
    commits_url: "https://api.github.com/repos/roman-bytes/pocket-ts/commits{/sha}",
    git_commits_url: "https://api.github.com/repos/roman-bytes/pocket-ts/git/commits{/sha}",
    comments_url: "https://api.github.com/repos/roman-bytes/pocket-ts/comments{/number}",
    issue_comment_url: "https://api.github.com/repos/roman-bytes/pocket-ts/issues/comments{/number}",
    contents_url: "https://api.github.com/repos/roman-bytes/pocket-ts/contents/{+path}",
    compare_url: "https://api.github.com/repos/roman-bytes/pocket-ts/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/roman-bytes/pocket-ts/merges",
    archive_url: "https://api.github.com/repos/roman-bytes/pocket-ts/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/roman-bytes/pocket-ts/downloads",
    issues_url: "https://api.github.com/repos/roman-bytes/pocket-ts/issues{/number}",
    pulls_url: "https://api.github.com/repos/roman-bytes/pocket-ts/pulls{/number}",
    milestones_url: "https://api.github.com/repos/roman-bytes/pocket-ts/milestones{/number}",
    notifications_url: "https://api.github.com/repos/roman-bytes/pocket-ts/notifications{?since,all,participating}",
    labels_url: "https://api.github.com/repos/roman-bytes/pocket-ts/labels{/name}",
    releases_url: "https://api.github.com/repos/roman-bytes/pocket-ts/releases{/id}",
    deployments_url: "https://api.github.com/repos/roman-bytes/pocket-ts/deployments",
    created_at: "2024-10-02T00:54:39Z",
    updated_at: "2024-10-26T12:45:11Z",
    pushed_at: "2024-10-26T12:45:07Z",
    git_url: "git://github.com/roman-bytes/pocket-ts.git",
    ssh_url: "git@github.com:roman-bytes/pocket-ts.git",
    clone_url: "https://github.com/roman-bytes/pocket-ts.git",
    svn_url: "https://github.com/roman-bytes/pocket-ts",
    homepage: null,
    size: 133,
    stargazers_count: 0,
    watchers_count: 0,
    language: "TypeScript",
    has_issues: !0,
    has_projects: !0,
    has_downloads: !0,
    has_wiki: !0,
    has_pages: !1,
    has_discussions: !1,
    forks_count: 0,
    mirror_url: null,
    archived: !1,
    disabled: !1,
    open_issues_count: 0,
    license: {
      key: "other",
      name: "Other",
      spdx_id: "NOASSERTION",
      url: null,
      node_id: "MDc6TGljZW5zZTA="
    },
    allow_forking: !0,
    is_template: !1,
    web_commit_signoff_required: !1,
    topics: ["portfolio"],
    visibility: "public",
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "main"
  }])),
  import_msw.http.get("https://api.github.com/repos/roman-bytes/pocket-ts/languages", () => import_msw.HttpResponse.json({ CSS: 12334, TypeScript: 1, Javascript: 7, HTML: 77, Go: 69 })),
  import_msw.http.get("https://dev.to/api/artiiiiicles", () => import_msw.HttpResponse.json(
    [
      {
        type_of: "article",
        id: 442766,
        title: "Hi, I'm Jacob Roman: A Decade in Web Development",
        description: "Hey web friends, my name is Jacob Roman or you might also know me as Roman Bytes. By day I am a Full...",
        readable_publish_date: "Nov 11",
        slug: "hi-im-jacob-roman-a-decade-in-web-development-3kpp",
        path: "/romanbytes/hi-im-jacob-roman-a-decade-in-web-development-3kpp",
        url: "https://dev.to/romanbytes/hi-im-jacob-roman-a-decade-in-web-development-3kpp",
        comments_count: 0,
        public_reactions_count: 0,
        collection_id: null,
        published_timestamp: "2024-11-11T15:09:38Z",
        positive_reactions_count: 0,
        cover_image: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F0fua0ahqklwljazws96o.jpg",
        social_image: "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F0fua0ahqklwljazws96o.jpg",
        canonical_url: "https://dev.to/romanbytes/hi-im-jacob-roman-a-decade-in-web-development-3kpp",
        created_at: "2020-08-31T19:52:40Z",
        edited_at: "2024-11-11T15:10:16Z",
        crossposted_at: null,
        published_at: "2024-11-11T15:09:38Z",
        last_comment_at: "2024-11-11T15:09:38Z",
        reading_time_minutes: 2,
        tags: "developer, firstpost, blog, helloworld",
        tag_list: [
          "developer",
          "firstpost",
          "blog",
          "helloworld"
        ],
        body_html: `<p>Hey web friends, my name is Jacob Roman or you might also know me as Roman Bytes. By day I am a Full Stack developer that has knowledge with the Javascript ecosystem. I have worked with the web for over a decade now and..... have seen all sorts of things. From working with Dreamweaver and FTPing files to the server. Yes, FTP. (For those that do not know FTP stands for File Transfer Protocol). The good ol drag and drop your files to update your site. To the modern stack of Calude, Cursor, and Shadcn. I am excited that I finally decided to take the leap and start sharing my experiences, insights and tips with web development. I have been wanting to do this for quite some time. </p>

<p>So now you may be wondering, "Great, glad that you started. No what can I expect?" Glad you asked. To start I plan on sharing some basic things that I have learned while working in this field. I may create small useful bits of code that have been super helpful for me when developing. We might just call those 'bytes'. I plan on sharing my thoughts on best practices and what I have seen work and what doesn't. Who knows what else might come from this journey, either way I am excited to share what I have learned and connect with other developers.</p>

<p>My main reason for starting a blog is to not only give back to the community because I to started out reading and going through others blogs to learn. I am starting this to have a place to keep record and track of all sorts of things that I learned and can reference in the future. I am sure my future self will thank me.</p>

<p>I hope that some of you follow me in this journey and follow my blog and other spaces. I am not only trying to start writing here but I am trying my hand a live coding over on Twitch. For now I think that is a good start and we can see where things take us. </p>

<p>Thanks for reading this first post!</p>

<p><a href="https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F23i5no84sl5ecg5fwfka.jpg" class="article-body-image-wrapper"><img src="https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F23i5no84sl5ecg5fwfka.jpg" alt="Image description" loading="lazy" width="800" height="800"></a></p>

<p>X: <a href="https://x.com/romanbytes" target="_blank" rel="noopener noreferrer">https://x.com/romanbytes</a><br>
BlueSky: <a href="https://bsky.app/profile/romanbytes.bsky.social" target="_blank" rel="noopener noreferrer">https://bsky.app/profile/romanbytes.bsky.social</a><br>
Twitch: <a href="https://www.twitch.tv/romanbytes" target="_blank" rel="noopener noreferrer">https://www.twitch.tv/romanbytes</a><br>
Website: <a href="https://romanbytes.dev/" target="_blank" rel="noopener noreferrer">https://romanbytes.dev/</a></p>

<p>Till Next Byte, Roman out</p>

`,
        body_markdown: `Hey web friends, my name is Jacob Roman or you might also know me as Roman Bytes. By day I am a Full Stack developer that has knowledge with the Javascript ecosystem. I have worked with the web for over a decade now and..... have seen all sorts of things. From working with Dreamweaver and FTPing files to the server. Yes, FTP. (For those that do not know FTP stands for File Transfer Protocol). The good ol drag and drop your files to update your site. To the modern stack of Calude, Cursor, and Shadcn. I am excited that I finally decided to take the leap and start sharing my experiences, insights and tips with web development. I have been wanting to do this for quite some time. 


So now you may be wondering, "Great, glad that you started. No what can I expect?" Glad you asked. To start I plan on sharing some basic things that I have learned while working in this field. I may create small useful bits of code that have been super helpful for me when developing. We might just call those 'bytes'. I plan on sharing my thoughts on best practices and what I have seen work and what doesn't. Who knows what else might come from this journey, either way I am excited to share what I have learned and connect with other developers.


My main reason for starting a blog is to not only give back to the community because I to started out reading and going through others blogs to learn. I am starting this to have a place to keep record and track of all sorts of things that I learned and can reference in the future. I am sure my future self will thank me.


I hope that some of you follow me in this journey and follow my blog and other spaces. I am not only trying to start writing here but I am trying my hand a live coding over on Twitch. For now I think that is a good start and we can see where things take us. 

Thanks for reading this first post!




![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/23i5no84sl5ecg5fwfka.jpg)


X: https://x.com/romanbytes
BlueSky: https://bsky.app/profile/romanbytes.bsky.social
Twitch: https://www.twitch.tv/romanbytes
Website: https://romanbytes.dev/


Till Next Byte, Roman out

`,
        user: {
          name: "Jacob Roman",
          username: "romanbytes",
          twitter_username: null,
          github_username: "roman-bytes",
          user_id: 253488,
          website_url: "https://romanbytes.dev",
          profile_image: "https://media2.dev.to/dynamic/image/width=640,height=640,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F253488%2F1225fa77-2a11-4ae5-a423-a2b3442ec44e.jpg",
          profile_image_90: "https://media2.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F253488%2F1225fa77-2a11-4ae5-a423-a2b3442ec44e.jpg"
        }
      },
      {
        type_of: "article",
        id: 54321,
        title: "Hey there!",
        description: "Did u know, that this is my first draft? I'm actually testing the API",
        readable_publish_date: "Apr 6",
        slug: "hey-there-34hj",
        path: "/guilhermecheng/hey-there-34hj",
        url: "https://dev.to/guilhermecheng/hey-there-34hj",
        comments_count: 0,
        public_reactions_count: 0,
        collection_id: null,
        published_timestamp: "2023-04-06T23:29:44Z",
        positive_reactions_count: 0,
        cover_image: null,
        social_image: "https://dev.to/social_previews/article/1419842.png",
        canonical_url: "https://dev.to/guilhermecheng/hey-there-34hj",
        created_at: "2023-03-29T23:59:07Z",
        edited_at: null,
        crossposted_at: null,
        published_at: "2023-04-06T23:29:44Z",
        last_comment_at: "2023-04-06T23:29:44Z",
        reading_time_minutes: 1,
        tag_list: [
          "NextJS",
          "react",
          "javascript",
          "monitoring"
        ],
        tags: "NextJS, react, javascript, monitoring",
        user: {
          name: "Mock Roman",
          username: "mock roman",
          twitter_username: null,
          github_username: "mock-roman",
          user_id: 101010,
          website_url: null,
          profile_image: "https://res.cloudinary.com/practicaldev/image/fetch/s--sDcHxoDy--/c_fill,f_auto,fl_progressive,h_640,q_auto,w_640/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/1046757/543e3ca0-4f99-46ba-b8a1-79c06976b72b.jpeg",
          profile_image_90: "https://res.cloudinary.com/practicaldev/image/fetch/s--4IlcgxTN--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/1046757/543e3ca0-4f99-46ba-b8a1-79c06976b72b.jpeg"
        }
      }
    ]
  )),
  import_msw.http.get("https://dev.to/api/articles/12345", () => import_msw.HttpResponse.json(
    {
      type_of: "article",
      id: 442766,
      title: "Hi, I'm Jacob Roman: A Decade in Web Development",
      description: "Hey web friends, my name is Jacob Roman or you might also know me as Roman Bytes. By day I am a Full...",
      readable_publish_date: "Nov 11",
      slug: "hi-im-jacob-roman-a-decade-in-web-development-3kpp",
      path: "/romanbytes/hi-im-jacob-roman-a-decade-in-web-development-3kpp",
      url: "https://dev.to/romanbytes/hi-im-jacob-roman-a-decade-in-web-development-3kpp",
      comments_count: 0,
      public_reactions_count: 0,
      collection_id: null,
      published_timestamp: "2024-11-11T15:09:38Z",
      positive_reactions_count: 0,
      cover_image: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F0fua0ahqklwljazws96o.jpg",
      social_image: "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F0fua0ahqklwljazws96o.jpg",
      canonical_url: "https://dev.to/romanbytes/hi-im-jacob-roman-a-decade-in-web-development-3kpp",
      created_at: "2020-08-31T19:52:40Z",
      edited_at: "2024-11-11T15:10:16Z",
      crossposted_at: null,
      published_at: "2024-11-11T15:09:38Z",
      last_comment_at: "2024-11-11T15:09:38Z",
      reading_time_minutes: 2,
      tag_list: "developer, firstpost, blog, helloworld",
      tags: [
        "developer",
        "firstpost",
        "blog",
        "helloworld"
      ],
      body_html: `<p>Hey web friends, my name is Jacob Roman or you might also know me as Roman Bytes. By day I am a Full Stack developer that has knowledge with the Javascript ecosystem. I have worked with the web for over a decade now and..... have seen all sorts of things. From working with Dreamweaver and FTPing files to the server. Yes, FTP. (For those that do not know FTP stands for File Transfer Protocol). The good ol drag and drop your files to update your site. To the modern stack of Calude, Cursor, and Shadcn. I am excited that I finally decided to take the leap and start sharing my experiences, insights and tips with web development. I have been wanting to do this for quite some time. </p>

<p>So now you may be wondering, "Great, glad that you started. No what can I expect?" Glad you asked. To start I plan on sharing some basic things that I have learned while working in this field. I may create small useful bits of code that have been super helpful for me when developing. We might just call those 'bytes'. I plan on sharing my thoughts on best practices and what I have seen work and what doesn't. Who knows what else might come from this journey, either way I am excited to share what I have learned and connect with other developers.</p>

<p>My main reason for starting a blog is to not only give back to the community because I to started out reading and going through others blogs to learn. I am starting this to have a place to keep record and track of all sorts of things that I learned and can reference in the future. I am sure my future self will thank me.</p>

<p>I hope that some of you follow me in this journey and follow my blog and other spaces. I am not only trying to start writing here but I am trying my hand a live coding over on Twitch. For now I think that is a good start and we can see where things take us. </p>

<p>Thanks for reading this first post!</p>

<p><a href="https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F23i5no84sl5ecg5fwfka.jpg" class="article-body-image-wrapper"><img src="https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F23i5no84sl5ecg5fwfka.jpg" alt="Image description" loading="lazy" width="800" height="800"></a></p>

<p>X: <a href="https://x.com/romanbytes" target="_blank" rel="noopener noreferrer">https://x.com/romanbytes</a><br>
BlueSky: <a href="https://bsky.app/profile/romanbytes.bsky.social" target="_blank" rel="noopener noreferrer">https://bsky.app/profile/romanbytes.bsky.social</a><br>
Twitch: <a href="https://www.twitch.tv/romanbytes" target="_blank" rel="noopener noreferrer">https://www.twitch.tv/romanbytes</a><br>
Website: <a href="https://romanbytes.dev/" target="_blank" rel="noopener noreferrer">https://romanbytes.dev/</a></p>

<p>Till Next Byte, Roman out</p>

`,
      body_markdown: `Hey web friends, my name is Jacob Roman or you might also know me as Roman Bytes. By day I am a Full Stack developer that has knowledge with the Javascript ecosystem. I have worked with the web for over a decade now and..... have seen all sorts of things. From working with Dreamweaver and FTPing files to the server. Yes, FTP. (For those that do not know FTP stands for File Transfer Protocol). The good ol drag and drop your files to update your site. To the modern stack of Calude, Cursor, and Shadcn. I am excited that I finally decided to take the leap and start sharing my experiences, insights and tips with web development. I have been wanting to do this for quite some time. 


So now you may be wondering, "Great, glad that you started. No what can I expect?" Glad you asked. To start I plan on sharing some basic things that I have learned while working in this field. I may create small useful bits of code that have been super helpful for me when developing. We might just call those 'bytes'. I plan on sharing my thoughts on best practices and what I have seen work and what doesn't. Who knows what else might come from this journey, either way I am excited to share what I have learned and connect with other developers.


My main reason for starting a blog is to not only give back to the community because I to started out reading and going through others blogs to learn. I am starting this to have a place to keep record and track of all sorts of things that I learned and can reference in the future. I am sure my future self will thank me.


I hope that some of you follow me in this journey and follow my blog and other spaces. I am not only trying to start writing here but I am trying my hand a live coding over on Twitch. For now I think that is a good start and we can see where things take us. 

Thanks for reading this first post!




![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/23i5no84sl5ecg5fwfka.jpg)


X: https://x.com/romanbytes
BlueSky: https://bsky.app/profile/romanbytes.bsky.social
Twitch: https://www.twitch.tv/romanbytes
Website: https://romanbytes.dev/


Till Next Byte, Roman out

`,
      user: {
        name: "Jacob Roman",
        username: "romanbytes",
        twitter_username: null,
        github_username: "roman-bytes",
        user_id: 253488,
        website_url: "https://romanbytes.dev",
        profile_image: "https://media2.dev.to/dynamic/image/width=640,height=640,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F253488%2F1225fa77-2a11-4ae5-a423-a2b3442ec44e.jpg",
        profile_image_90: "https://media2.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F253488%2F1225fa77-2a11-4ae5-a423-a2b3442ec44e.jpg"
      }
    }
  ))
];

// app/mocks/node.ts
var server = (0, import_node.setupServer)(...handlers);

// app/entry.server.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
server.listen({
  onUnhandledRequest: "bypass"
});
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 47,
          columnNumber: 9
        },
        this
      ),
      {
        onAllReady() {
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node2.Response(body, {
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 89,
          columnNumber: 9
        },
        this
      ),
      {
        onShellReady() {
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node2.Response(body, {
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
  action: () => action,
  default: () => App,
  links: () => links,
  loader: () => loader
});
var import_react6 = require("@remix-run/react"), import_clsx = __toESM(require("clsx"));

// app/components/layout.tsx
var import_react3 = require("react"), import_classnames = __toESM(require("classnames")), import_react_terminal = require("react-terminal"), import_remix_utils = require("remix-utils"), import_react4 = require("@remix-run/react");

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
var import_node4 = require("@remix-run/node");

// app/components/new-layout.tsx
var import_react_router = require("react-router"), import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function NewLayout({ children }) {
  let isHomePage = (0, import_react_router.useMatches)()[1].pathname === "/";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: `flex flex-col items-center ${isHomePage ? "lg:justify-center lg:h-full" : ""} w-full`, children }, void 0, !1, {
    fileName: "app/components/new-layout.tsx",
    lineNumber: 14,
    columnNumber: 9
  }, this);
}

// app/components/roman-bytes-logo.tsx
var import_react2 = require("@remix-run/react"), import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function RomanBytesLogo() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
    import_react2.Link,
    {
      to: "/",
      className: "mb-8 flex w-full lg:w-fit justify-center",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("svg", { width: "30", height: "38", viewBox: "0 0 30 38", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
          "path",
          {
            d: "M25.8144 20.2562C24.6151 22.3551 21.7168 24.2539 20.5674 24.9036C19.6679 25.2034 19.6679 25.5032 19.518 25.6531C19.3681 25.803 19.9678 25.6531 19.0683 27.452C18.3487 28.8912 16.8696 28.6513 16.2199 28.3515C15.8701 28.1017 15.0806 27.8418 14.7208 28.8013C14.361 29.7607 16.07 30.6002 16.9695 30.9H19.3681C19.518 32.4991 20.4775 35.9371 23.116 36.8966C25.7544 37.856 27.7133 37.896 28.3629 37.7961C28.8127 37.4962 29.7121 35.6973 29.7121 30.9C29.7121 26.1028 27.9132 21.9053 27.0137 20.4062C26.564 19.8065 26.414 18.6071 25.8144 20.2562Z",
            fill: "#CC9340"
          },
          void 0,
          !1,
          {
            fileName: "app/components/roman-bytes-logo.tsx",
            lineNumber: 11,
            columnNumber: 17
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
          "path",
          {
            d: "M6.17574 23.8541L4.07696 25.2033L1.97817 26.7025C1.52843 27.1522 1.4085 27.0023 1.2286 26.5526C0.0292971 23.5543 -0.0706452 20.0063 0.0292971 18.6072C0.0792682 16.1086 1.43848 10.0021 6.47557 5.56469C11.5127 1.12727 17.1694 0.0178868 19.3681 0.0178754C19.2482 1.09724 18.9184 2.86625 19.2182 3.31597L21.9166 0.317702C22.2165 0.0178754 21.9166 -0.0345871 22.966 0.0178754C25.3647 0.137806 28.263 1.3671 29.4123 1.96675C30.1319 2.32654 29.8121 3.01614 29.5622 3.31597C28.5628 4.46531 26.474 6.97386 26.1142 7.81337C25.7544 8.65288 25.1648 8.56294 24.9149 8.41302C24.2653 8.01326 22.0366 7.18374 18.3187 7.06381C14.6009 6.94388 10.7731 9.71228 9.32393 11.1115C11.1729 10.3619 15.4704 8.83279 17.869 8.71286C20.8673 8.56295 22.0666 9.31251 23.2659 9.61234C24.2253 9.8522 23.9655 10.5118 23.7156 10.8116L21.7667 13.5101C21.4669 14.1097 21.1671 14.0624 20.5674 13.8099C17.7191 12.6106 14.7208 13.2103 10.8231 15.6089C6.92531 18.0075 6.62548 22.355 6.62548 23.1045C6.62548 23.7042 6.32566 23.8541 6.17574 23.8541Z",
            fill: "#CC9340"
          },
          void 0,
          !1,
          {
            fileName: "app/components/roman-bytes-logo.tsx",
            lineNumber: 14,
            columnNumber: 17
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
          "path",
          {
            d: "M8.12483 26.2531C9.68393 30.6905 7.47521 32.2996 6.17596 32.5494C5.17654 32.6993 3.77735 33.1791 6.17596 33.8987C9.17423 34.7981 12.4723 31.5 13.5217 29.851C14.3612 28.5318 14.1713 27.0026 13.9715 26.403C13.7716 25.9033 13.6716 24.574 14.8709 23.2548C16.3701 21.6058 18.7687 23.4047 19.0685 24.0044C19.3084 24.4841 19.868 24.2043 20.1179 24.0044C21.5171 22.855 24.4954 20.3465 25.215 19.507C25.9345 18.6675 25.7147 18.2577 25.5148 18.1578C25.2649 17.5081 23.8058 15.8791 19.968 14.5598C16.1302 13.2406 12.2724 15.5093 10.8233 16.8085C9.27417 18.1078 6.56574 21.8156 8.12483 26.2531Z",
            fill: "#CC9340"
          },
          void 0,
          !1,
          {
            fileName: "app/components/roman-bytes-logo.tsx",
            lineNumber: 17,
            columnNumber: 17
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("circle", { cx: "16.8204", cy: "25.5035", r: "1.79896", fill: "#CC9340" }, void 0, !1, {
          fileName: "app/components/roman-bytes-logo.tsx",
          lineNumber: 20,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/roman-bytes-logo.tsx",
        lineNumber: 10,
        columnNumber: 13
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/roman-bytes-logo.tsx",
      lineNumber: 6,
      columnNumber: 9
    },
    this
  );
}
var roman_bytes_logo_default = RomanBytesLogo;

// app/components/layout.tsx
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
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
  return data.ENV.FEATURE_NEW_BRAND === "true" ? /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(NewLayout, {}, void 0, !1, {
    fileName: "app/components/layout.tsx",
    lineNumber: 52,
    columnNumber: 13
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react_terminal.TerminalContextProvider, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("main", { className: "h-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "lg:block absolute xl:top-5 xl:left-5 lg:top-2.5 lg:left-2.5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(roman_bytes_logo_default, {}, void 0, !1, {
        fileName: "app/components/layout.tsx",
        lineNumber: 60,
        columnNumber: 21
      }, this) }, void 0, !1, {
        fileName: "app/components/layout.tsx",
        lineNumber: 59,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex h-full w-full justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("main", { className: "container lg:mx-40 h-max min-h-full lg:flex", children }, void 0, !1, {
        fileName: "app/components/layout.tsx",
        lineNumber: 63,
        columnNumber: 21
      }, this) }, void 0, !1, {
        fileName: "app/components/layout.tsx",
        lineNumber: 62,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "hidden lg:flex w-full fixed text-romanText xl:p-20 lg:p-10 justify-between items-end bottom-0 left-0 right-0", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(social_default, {}, void 0, !1, {
          fileName: "app/components/layout.tsx",
          lineNumber: 68,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(nav_default, {}, void 0, !1, {
          fileName: "app/components/layout.tsx",
          lineNumber: 69,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/layout.tsx",
        lineNumber: 67,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "lg:hidden p-5 border-t border-white bg-romanBlack w-full fixed text-romanText lg:p-10 flex justify-between bottom-0 left-0 right-0 flex-col", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex flex-row justify-between items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "xl:top-5 xl:left-5 lg:top-2.5 lg:left-2.5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(logo_default, {}, void 0, !1, {
            fileName: "app/components/layout.tsx",
            lineNumber: 74,
            columnNumber: 29
          }, this) }, void 0, !1, {
            fileName: "app/components/layout.tsx",
            lineNumber: 73,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
            "svg",
            {
              width: 24,
              height: 24,
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              className: "sm:block lg:hidden xl:hidden cursor-pointer",
              onClick: () => handleMenuOpen(),
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
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
                  lineNumber: 85,
                  columnNumber: 29
                },
                this
              )
            },
            void 0,
            !1,
            {
              fileName: "app/components/layout.tsx",
              lineNumber: 76,
              columnNumber: 25
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/layout.tsx",
          lineNumber: 72,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: mobileMenuClass, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(social_default, {}, void 0, !1, {
            fileName: "app/components/layout.tsx",
            lineNumber: 94,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(nav_default, {}, void 0, !1, {
            fileName: "app/components/layout.tsx",
            lineNumber: 95,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/layout.tsx",
          lineNumber: 93,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("footer", { className: footerMobileClass, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "text-sm", children: "Made with love from Michigan." }, void 0, !1, {
            fileName: "app/components/layout.tsx",
            lineNumber: 98,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "text-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("a", { href: "https://github.com/roman-bytes/roman-bytes-dev", children: [
            "Source Code",
            " "
          ] }, void 0, !0, {
            fileName: "app/components/layout.tsx",
            lineNumber: 102,
            columnNumber: 29
          }, this) }, void 0, !1, {
            fileName: "app/components/layout.tsx",
            lineNumber: 101,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/layout.tsx",
          lineNumber: 97,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/layout.tsx",
        lineNumber: 71,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(footer_default, {}, void 0, !1, {
        fileName: "app/components/layout.tsx",
        lineNumber: 108,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/layout.tsx",
      lineNumber: 58,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_remix_utils.ClientOnly, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", {}, void 0, !1, {
      fileName: "app/components/layout.tsx",
      lineNumber: 110,
      columnNumber: 35
    }, this), children: () => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(particles_default, {}, void 0, !1, {
      fileName: "app/components/layout.tsx",
      lineNumber: 110,
      columnNumber: 51
    }, this) }, void 0, !1, {
      fileName: "app/components/layout.tsx",
      lineNumber: 110,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/layout.tsx",
    lineNumber: 57,
    columnNumber: 9
  }, this);
}, layout_default = Layout;

// app/root.tsx
var import_node6 = require("@remix-run/node");

// app/utils/theme.server.ts
var import_node5 = require("@remix-run/node"), themeStorage = (0, import_node5.createCookieSessionStorage)({
  cookie: {
    name: "theme",
    secure: !1,
    secrets: ["supersecret"],
    // Replace with your actual secret
    sameSite: "lax",
    path: "/",
    httpOnly: !0
  }
});
async function getThemeSession(request) {
  let session = await themeStorage.getSession(request.headers.get("Cookie"));
  return {
    getTheme: () => session.get("theme"),
    setTheme: (theme) => session.set("theme", theme),
    commit: () => themeStorage.commitSession(session)
  };
}

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-OR6DCSDU.css";

// app/components/set-mode.tsx
var import_react5 = require("@remix-run/react"), import_jsx_dev_runtime10 = require("react/jsx-dev-runtime");
function SetMode({ mode }) {
  let fetcher = (0, import_react5.useFetcher)(), prefersDarkMQ = "(prefers-color-scheme: dark)", getPreferredTheme = () => typeof window != "object" || window.matchMedia(prefersDarkMQ).matches ? "DARK" : "LIGHT";
  function getIcon(mode2) {
    switch (mode2) {
      case "LIGHT":
        return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", className: "fill-romanPrimary", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("path", { d: "M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" }, void 0, !1, {
          fileName: "app/components/set-mode.tsx",
          lineNumber: 24,
          columnNumber: 25
        }, this) }, void 0, !1, {
          fileName: "app/components/set-mode.tsx",
          lineNumber: 23,
          columnNumber: 21
        }, this);
      default:
        return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", className: "fill-romanPrimary", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("path", { fillRule: "evenodd", d: "M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z", clipRule: "evenodd" }, void 0, !1, {
          fileName: "app/components/set-mode.tsx",
          lineNumber: 31,
          columnNumber: 25
        }, this) }, void 0, !1, {
          fileName: "app/components/set-mode.tsx",
          lineNumber: 30,
          columnNumber: 21
        }, this);
    }
  }
  let currentMode = mode || getPreferredTheme();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(fetcher.Form, { method: "post", className: "w-8 h-8 rounded bg-white dark:bg-romanBlack absolute right-10 top-10", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("input", { type: "hidden", name: "theme", value: currentMode === "DARK" ? "LIGHT" : "DARK" }, void 0, !1, {
      fileName: "app/components/set-mode.tsx",
      lineNumber: 41,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("button", { type: "submit", className: "w-full", children: getIcon(currentMode) }, void 0, !1, {
      fileName: "app/components/set-mode.tsx",
      lineNumber: 42,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/set-mode.tsx",
    lineNumber: 40,
    columnNumber: 9
  }, this);
}

// app/root.tsx
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime"), links = () => [{ rel: "stylesheet", href: tailwind_default }];
async function loader({ request }) {
  let theme = (await getThemeSession(request)).getTheme(), prefersDarkMQ = "(prefers-color-scheme: dark)", getPreferredTheme = () => typeof window != "object" || window.matchMedia(prefersDarkMQ).matches ? "DARK" : "LIGHT";
  return (0, import_node6.json)({
    ENV: {
      FEATURE_NEW_BRAND: process.env.FEATURE_NEW_BRAND
    },
    theme: theme || getPreferredTheme()
  });
}
async function action({ request }) {
  let themeSession = await getThemeSession(request), theme = (await request.formData()).get("theme");
  return typeof theme == "string" && themeSession.setTheme(theme), (0, import_node6.json)(
    { mode: theme },
    {
      headers: {
        "Set-Cookie": await themeSession.commit()
      }
    }
  );
}
function App() {
  return (0, import_react6.useLoaderData)().ENV.FEATURE_NEW_BRAND === "true" ? /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Document, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(NewLayout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react6.Outlet, {}, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 76,
    columnNumber: 21
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 75,
    columnNumber: 17
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 74,
    columnNumber: 7
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Document, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(layout_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react6.Outlet, {}, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 85,
    columnNumber: 17
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 84,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 83,
    columnNumber: 5
  }, this);
}
function ErrorBoundary({ error }) {
  return console.error(error), "true" ? /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Document, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(NewLayout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react6.Outlet, {}, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 100,
    columnNumber: 21
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 99,
    columnNumber: 17
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 98,
    columnNumber: 7
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Document, { title: "Error!", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(layout_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h1", { children: "There was an error" }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 111,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("p", { children: error.message }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 112,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("hr", {}, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 113,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("p", { children: "Hey, developer, you should replace this with what you want your users to see." }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 114,
      columnNumber: 21
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 110,
    columnNumber: 17
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 109,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 108,
    columnNumber: 5
  }, this);
}
function CatchBoundary() {
  let caught = (0, import_react6.useCatch)(), isNewLayout = "true", message;
  switch (caught.status) {
    case 401:
      message = /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("p", { children: "Oops! Looks like you tried to visit a page that you do not have access to." }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 133,
        columnNumber: 7
      }, this);
      break;
    case 404:
      message = /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("p", { children: "What you are looking for is not there. Please visit the home page and try again." }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 141,
        columnNumber: 7
      }, this);
      break;
    default:
      throw new Error(caught.data || caught.statusText);
  }
  return isNewLayout ? /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Document, { title: `${caught.status} ${caught.statusText}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(NewLayout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "mt-20 mb-40 mx-auto p-14 text-md font-sans text-white border border-white bg-romanBlack", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h1", { className: "text-8xl font-bold mt-16 font-ubuntu leading-heading tracking-heading", children: [
    caught.status,
    ": ",
    caught.statusText
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 157,
    columnNumber: 25
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 156,
    columnNumber: 21
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 155,
    columnNumber: 17
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 154,
    columnNumber: 7
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Document, { title: `${caught.status} ${caught.statusText}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(layout_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "mt-20 mb-40 mx-auto p-14 text-md font-sans text-white border border-white bg-romanBlack", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h1", { className: "text-8xl font-bold mt-16 font-ubuntu leading-heading tracking-heading", children: [
    caught.status,
    ": ",
    caught.statusText
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 170,
    columnNumber: 21
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 169,
    columnNumber: 17
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 168,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 167,
    columnNumber: 5
  }, this);
}
function Document({
  children,
  title
}) {
  var _a;
  let data = (0, import_react6.useLoaderData)(), actionData = (0, import_react6.useActionData)(), theme = (actionData == null ? void 0 : actionData.mode) || (data == null ? void 0 : data.theme);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("html", { lang: "en", className: (0, import_clsx.default)("w-full h-full font-mono", {
    dark: theme === "DARK"
  }), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 195,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
        "meta",
        {
          name: "viewport",
          content: "width=device-width,initial-scale=1"
        },
        void 0,
        !1,
        {
          fileName: "app/root.tsx",
          lineNumber: 196,
          columnNumber: 17
        },
        this
      ),
      title ? /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("title", { children: title }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 200,
        columnNumber: 26
      }, this) : null,
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react6.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 201,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react6.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 202,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 194,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("body", { className: `${((_a = data == null ? void 0 : data.ENV) == null ? void 0 : _a.FEATURE_NEW_BRAND) === "true" ? "bg-white dark:bg-romanBlack roman-grid" : "bg-romanBlack"} w-full h-full`, children: [
      children,
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react6.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 206,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react6.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 207,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react6.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 208,
        columnNumber: 60
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(SetMode, { mode: theme }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 209,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 204,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 191,
    columnNumber: 5
  }, this);
}

// app/routes/projects/$name.tsx
var name_exports = {};
__export(name_exports, {
  default: () => name_default,
  loader: () => loader2
});
var import_node7 = require("@remix-run/node");
var import_react_router2 = require("react-router"), import_react7 = require("@remix-run/react"), import_jsx_dev_runtime12 = require("react/jsx-dev-runtime"), loader2 = async ({ params }) => {
  let path = params;
  console.log(path);
  let currentRepo = await fetch(`https://api.github.com/repos/roman-bytes/${path.name}`).then((res) => res.json());
  return (0, import_node7.json)({
    repo: currentRepo
  });
};
function Name() {
  let currentRoute = (0, import_react_router2.useMatches)()[1], { repo } = (0, import_react7.useLoaderData)();
  return console.log("repo", repo), /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "container relative border-2 border-romanBlack rounded-3xl bg-white pt-32 px-28 pb-28 my-28", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "absolute top-10 left-0 right-0 text-center text-romanPrimary mb-16", children: `~ ${currentRoute.pathname} ` }, void 0, !1, {
      fileName: "app/routes/projects/$name.tsx",
      lineNumber: 28,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(roman_bytes_logo_default, {}, void 0, !1, {
      fileName: "app/routes/projects/$name.tsx",
      lineNumber: 29,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react7.Link, { to: "/projects", children: "../ Back to projects" }, void 0, !1, {
      fileName: "app/routes/projects/$name.tsx",
      lineNumber: 30,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { children: "add in CMS here." }, void 0, !1, {
      fileName: "app/routes/projects/$name.tsx",
      lineNumber: 31,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/projects/$name.tsx",
    lineNumber: 27,
    columnNumber: 9
  }, this);
}
var name_default = Name;

// app/routes/projects/index.tsx
var projects_exports = {};
__export(projects_exports, {
  default: () => Projects,
  loader: () => loader3
});
var import_react8 = require("@remix-run/react"), import_node8 = require("@remix-run/node");
var import_react_router3 = require("react-router");

// app/components/plus.tsx
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime");
function Plus({ className }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("svg", { className: `${className} fill-romanBlack dark:fill-white`, width: "5", height: "5", viewBox: "0 0 5 5", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("path", { d: "M1.96429 5V2.97968H0V1.99774H1.96429V0H3.03571V1.99774H5V2.97968H3.03571V5H1.96429Z" }, void 0, !1, {
    fileName: "app/components/plus.tsx",
    lineNumber: 10,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/components/plus.tsx",
    lineNumber: 9,
    columnNumber: 9
  }, this);
}
var plus_default = Plus;

// app/routes/projects/index.tsx
var import_jsx_dev_runtime14 = require("react/jsx-dev-runtime"), getLangColors = async (langs) => {
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
  return (0, import_node8.json)({
    repos: projects,
    ENV: {
      FEATURE_NEW_BRAND: process.env.FEATURE_NEW_BRAND
    }
  });
};
function Projects() {
  let { repos, ENV } = (0, import_react8.useLoaderData)(), currentRoute = (0, import_react_router3.useMatches)()[1], isNewLayout = (ENV == null ? void 0 : ENV.FEATURE_NEW_BRAND) === "true", repoTiles = repos.map((repo) => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
    "a",
    {
      href: repo.private ? "" : repo.html_url,
      target: "_blank",
      className: "w-full overflow-hidden my-2 px-2 xl:w-1/3",
      rel: "noreferrer",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "border border-white bg-romanBlack p-4 flex justify-between items-center cursor-pointer hover:border-romanYellow hover:bg-romanYellow hover:text-romanBlack", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { children: repo.name }, void 0, !1, {
          fileName: "app/routes/projects/index.tsx",
          lineNumber: 103,
          columnNumber: 21
        }, this),
        repo.private ? /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
          "svg",
          {
            width: 24,
            height: 24,
            viewBox: "0 0 24 24",
            className: "fill-current",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
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
                lineNumber: 113,
                columnNumber: 29
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "app/routes/projects/index.tsx",
            lineNumber: 105,
            columnNumber: 25
          },
          this
        ) : /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
          "svg",
          {
            width: 8,
            height: 12,
            viewBox: "0 0 8 12",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
              "path",
              {
                d: "M1.70504 0L0.295044 1.41L4.87504 6L0.295044 10.59L1.70504 12L7.70504 6L1.70504 0Z",
                fill: "white"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/projects/index.tsx",
                lineNumber: 127,
                columnNumber: 29
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "app/routes/projects/index.tsx",
            lineNumber: 120,
            columnNumber: 25
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/projects/index.tsx",
        lineNumber: 102,
        columnNumber: 17
      }, this)
    },
    repo.id,
    !1,
    {
      fileName: "app/routes/projects/index.tsx",
      lineNumber: 95,
      columnNumber: 13
    },
    this
  )), getLastUpdated = (dateString) => {
    let date = new Date(dateString), differenceInTime = (/* @__PURE__ */ new Date()).getTime() - date.getTime(), minutes = Math.floor(differenceInTime / (1e3 * 60)), hours = Math.floor(differenceInTime / (1e3 * 60 * 60)), days = Math.floor(differenceInTime / (1e3 * 60 * 60 * 24));
    return days > 0 ? `${days} day${days > 1 ? "s" : ""} ago` : hours > 0 ? `${hours} hour${hours > 1 ? "s" : ""} ago` : `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  };
  if (isNewLayout) {
    let repoCards = repos.map((repo, ix) => {
      let langs = Object.keys(repo.languages);
      return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("section", { className: "w-full lg:w-1/2 max-w-[400] max-h-[225] min-w-[400] min-h-[225] border border-dashed hover:border-solid hover:border-romanPrimary border-romanText p-6 mt-[-1px] ml-0 lg:ml-[-1px] relative", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { className: "text-md text-romanPrimary", children: getLastUpdated(repo.updated_at) }, void 0, !1, {
          fileName: "app/routes/projects/index.tsx",
          lineNumber: 161,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h2", { className: "text-xl dark:text-white", children: repo.name }, void 0, !1, {
          fileName: "app/routes/projects/index.tsx",
          lineNumber: 162,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { className: "mt-8 text-md text-romanPrimary", children: repo.description ? repo.description : "No description" }, void 0, !1, {
          fileName: "app/routes/projects/index.tsx",
          lineNumber: 163,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("footer", { className: "flex justify-between items-center mt-36", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "flex flex-row", children: langs.map((lang) => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "bg-romanText text-slate-700 rounded-full border-2 border-slate-500 text-md flex items-center justify-center p-3", children: lang }, lang, !1, {
            fileName: "app/routes/projects/index.tsx",
            lineNumber: 167,
            columnNumber: 33
          }, this)) }, void 0, !1, {
            fileName: "app/routes/projects/index.tsx",
            lineNumber: 165,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
            "a",
            {
              href: repo.html_url,
              target: "_blank",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
                "svg",
                {
                  width: "107",
                  height: "16",
                  viewBox: "0 0 107 16",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
                    "path",
                    {
                      d: "M106.707 8.70711C107.098 8.31658 107.098 7.68342 106.707 7.29289L100.343 0.928932C99.9526 0.538408 99.3195 0.538408 98.9289 0.928932C98.5384 1.31946 98.5384 1.95262 98.9289 2.34315L104.586 8L98.9289 13.6569C98.5384 14.0474 98.5384 14.6805 98.9289 15.0711C99.3195 15.4616 99.9526 15.4616 100.343 15.0711L106.707 8.70711ZM0 9H106V7H0V9Z",
                      fill: "#BF860F"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/projects/index.tsx",
                      lineNumber: 183,
                      columnNumber: 33
                    },
                    this
                  )
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/projects/index.tsx",
                  lineNumber: 176,
                  columnNumber: 29
                },
                this
              )
            },
            void 0,
            !1,
            {
              fileName: "app/routes/projects/index.tsx",
              lineNumber: 172,
              columnNumber: 25
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/projects/index.tsx",
          lineNumber: 164,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(plus_default, { className: "absolute top-[-3px] left-[-3px]" }, void 0, !1, {
          fileName: "app/routes/projects/index.tsx",
          lineNumber: 190,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(plus_default, { className: "absolute top-[-3px] right-[-3px]" }, void 0, !1, {
          fileName: "app/routes/projects/index.tsx",
          lineNumber: 191,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(plus_default, { className: "absolute bottom-[-3px] left-[-3px]" }, void 0, !1, {
          fileName: "app/routes/projects/index.tsx",
          lineNumber: 192,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(plus_default, { className: "absolute bottom-[-3px] right-[-3px]" }, void 0, !1, {
          fileName: "app/routes/projects/index.tsx",
          lineNumber: 193,
          columnNumber: 21
        }, this)
      ] }, repo.id, !0, {
        fileName: "app/routes/projects/index.tsx",
        lineNumber: 160,
        columnNumber: 17
      }, this);
    });
    return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "container relative border-2 border-romanBlack dark:border-romanPrimary lg:rounded-3xl bg-white dark:bg-romanBlack px-10 pt-10 lg:pt-32 lg:px-28 pb-28 lg:my-28", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "hidden lg:block absolute top-10 left-0 right-0 text-center text-romanPrimary mb-16", children: `~ ${currentRoute.pathname} ` }, void 0, !1, {
        fileName: "app/routes/projects/index.tsx",
        lineNumber: 200,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(roman_bytes_logo_default, {}, void 0, !1, {
        fileName: "app/routes/projects/index.tsx",
        lineNumber: 201,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h1", { className: "text-romanBlack font-newMono font-bold text-2xl lg:hidden", children: "Projects" }, void 0, !1, {
        fileName: "app/routes/projects/index.tsx",
        lineNumber: 202,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "flex flex-wrap mt-10 lg:mt-28 w-full lg:w-10/12", children: repoCards }, void 0, !1, {
        fileName: "app/routes/projects/index.tsx",
        lineNumber: 203,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/projects/index.tsx",
      lineNumber: 199,
      columnNumber: 13
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "container flex flex-col items-center justify-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h1", { className: "lg:hidden text-4xl text-white p-4 border-b border-white", children: "Projects" }, void 0, !1, {
      fileName: "app/routes/projects/index.tsx",
      lineNumber: 213,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "flex flex-wrap p-4 xl:-mx-2 overflow-hidden lg:mt-4 text-white mb-20", children: repoTiles }, void 0, !1, {
      fileName: "app/routes/projects/index.tsx",
      lineNumber: 216,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/projects/index.tsx",
    lineNumber: 212,
    columnNumber: 9
  }, this);
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
var import_react_router4 = require("react-router"), import_react9 = require("@remix-run/react"), import_node9 = require("@remix-run/node"), import_date_fns = require("date-fns"), import_jsx_dev_runtime15 = require("react/jsx-dev-runtime"), loader6 = async ({ params }) => {
  let currentDevToPost = await fetch(`https://dev.to/api/articles/${params.slug}`).then((res) => res.json());
  return (0, import_node9.json)({
    article: currentDevToPost
  });
}, formatTime = (time) => (0, import_date_fns.format)((0, import_date_fns.parseISO)(time), "MMMM dd, yyyy");
function Slug() {
  let currentRoute = (0, import_react_router4.useMatches)()[1], data = (0, import_react9.useLoaderData)(), hasCoverImage = data.article.cover_image;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
    "main",
    {
      className: "content container relative border-2 font-newMono dark:text-white border-romanBlack dark:border-romanPrimary lg:rounded-3xl lg:my-28 bg-contain overflow-hidden",
      style: {
        backgroundImage: `url(${data.article.cover_image})`
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: `${hasCoverImage ? "bg-white dark:bg-romanBlack text-romanBlack" : "bg-romanBlack text-romanPrimary"} absolute top-10 left-0 right-0 text-center mb-16 w-fit mx-auto hidden lg:block z-10`, children: `~ ${currentRoute.pathname} ` }, void 0, !1, {
          fileName: "app/routes/blog/$slug.tsx",
          lineNumber: 34,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: `pt-10 lg:pt-48 px-10 lg:px-28 pb-10 relative ${hasCoverImage ? "bg-white dark:bg-romanBlack dark:bg-opacity-80 bg-opacity-90" : "bg-romanBlack"}`, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(roman_bytes_logo_default, {}, void 0, !1, {
            fileName: "app/routes/blog/$slug.tsx",
            lineNumber: 36,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react9.Link, { className: "hidden lg:block absolute right-28 bottom-10", to: "/blog", children: "../ Back to blog" }, void 0, !1, {
            fileName: "app/routes/blog/$slug.tsx",
            lineNumber: 37,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("h2", { className: `${hasCoverImage ? "" : "text-romanPrimary"} font-extrabold text-5xl mt-20 w-3/4`, children: data.article.title }, void 0, !1, {
            fileName: "app/routes/blog/$slug.tsx",
            lineNumber: 38,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/blog/$slug.tsx",
          lineNumber: 35,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "bg-white dark:bg-romanBlack px-10 lg:px-28 pb-24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "w-full lg:w-6/12", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "text-romanPrimary font-bold pt-10", children: formatTime(data.article.created_at) }, void 0, !1, {
            fileName: "app/routes/blog/$slug.tsx",
            lineNumber: 42,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "flex items-center flex-wrap", children: data.article.tags.map((tag) => /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "text-romanPrimary text-md mr-4", children: [
            "#",
            tag
          ] }, tag, !0, {
            fileName: "app/routes/blog/$slug.tsx",
            lineNumber: 44,
            columnNumber: 65
          }, this)) }, void 0, !1, {
            fileName: "app/routes/blog/$slug.tsx",
            lineNumber: 43,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "mt-20", dangerouslySetInnerHTML: { __html: data.article.body_html } }, void 0, !1, {
            fileName: "app/routes/blog/$slug.tsx",
            lineNumber: 46,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/blog/$slug.tsx",
          lineNumber: 41,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/blog/$slug.tsx",
          lineNumber: 40,
          columnNumber: 13
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/routes/blog/$slug.tsx",
      lineNumber: 28,
      columnNumber: 9
    },
    this
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
var import_react10 = require("@remix-run/react"), import_node10 = require("@remix-run/node"), import_date_fns2 = require("date-fns"), import_jsx_dev_runtime16 = require("react/jsx-dev-runtime"), loader7 = async () => {
  let articles = await fetch("https://dev.to/api/articles?username=romanbytes").then((res) => res.json());
  return (0, import_node10.json)({
    posts: articles
  });
}, formatTime2 = (time) => (0, import_date_fns2.format)((0, import_date_fns2.parseISO)(time), "MM/dd/yyyy");
function Blog() {
  let { posts } = (0, import_react10.useLoaderData)(), currentRoute = (0, import_react_router5.useMatches)()[1];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("main", { className: "container relative border-2 border-romanBlack dark:border-romanPrimary lg:rounded-3xl bg-white dark:bg-romanBlack dark:text-white pt-10 lg:pt-32 px-10 lg:px-28 pb-10 lg:pb-28 lg:my-28", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "hidden lg:block absolute top-10 left-0 right-0 text-center text-romanPrimary mb-16", children: `~ ${currentRoute.pathname} ` }, void 0, !1, {
      fileName: "app/routes/blog/index.tsx",
      lineNumber: 35,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(roman_bytes_logo_default, {}, void 0, !1, {
      fileName: "app/routes/blog/index.tsx",
      lineNumber: 36,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("h1", { className: "font-newMono text-romanBlack text-2xl font-bold hidden lg:hidden", children: "Blog" }, void 0, !1, {
      fileName: "app/routes/blog/index.tsx",
      lineNumber: 37,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("section", { className: "mt-10 lg:mt-32", children: posts.map((post) => /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "relative w-full lg:w-1/2 max-w-[400] max-h-[225] min-w-[400] min-h-[225] border border-dashed border-romanText hover:border-solid hover:border-romanPrimary p-8 mt-[-1px] ml-0 lg:ml-[-1px]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "lg:ml-16", children: formatTime2(post.created_at) }, void 0, !1, {
        fileName: "app/routes/blog/index.tsx",
        lineNumber: 42,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react10.Link, { to: `/blog/${post.id}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("h2", { className: "text-lg lg:text-4xl flex my-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("span", { className: "hidden lg:block text-romanText mr-6", children: "//" }, void 0, !1, {
          fileName: "app/routes/blog/index.tsx",
          lineNumber: 45,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("span", { className: "block", children: post.title }, void 0, !1, {
          fileName: "app/routes/blog/index.tsx",
          lineNumber: 46,
          columnNumber: 33
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/blog/index.tsx",
        lineNumber: 44,
        columnNumber: 29
      }, this) }, void 0, !1, {
        fileName: "app/routes/blog/index.tsx",
        lineNumber: 43,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "flex flex-wrap items-center lg:ml-16", children: post.tag_list.map((tag) => /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "text-romanPrimary text-md mr-4", children: [
        "#",
        tag
      ] }, tag, !0, {
        fileName: "app/routes/blog/index.tsx",
        lineNumber: 50,
        columnNumber: 65
      }, this)) }, void 0, !1, {
        fileName: "app/routes/blog/index.tsx",
        lineNumber: 49,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(plus_default, { className: "absolute top-[-3px] left-[-3px]" }, void 0, !1, {
        fileName: "app/routes/blog/index.tsx",
        lineNumber: 52,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(plus_default, { className: "absolute top-[-3px] right-[-3px]" }, void 0, !1, {
        fileName: "app/routes/blog/index.tsx",
        lineNumber: 53,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(plus_default, { className: "absolute bottom-[-3px] left-[-3px]" }, void 0, !1, {
        fileName: "app/routes/blog/index.tsx",
        lineNumber: 54,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(plus_default, { className: "absolute bottom-[-3px] right-[-3px]" }, void 0, !1, {
        fileName: "app/routes/blog/index.tsx",
        lineNumber: 55,
        columnNumber: 25
      }, this)
    ] }, post.id, !0, {
      fileName: "app/routes/blog/index.tsx",
      lineNumber: 41,
      columnNumber: 21
    }, this)) }, void 0, !1, {
      fileName: "app/routes/blog/index.tsx",
      lineNumber: 39,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/blog/index.tsx",
    lineNumber: 34,
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
var import_jsx_dev_runtime17 = require("react/jsx-dev-runtime"), meta = () => ({
  title: "Roman Bytes - Full Stack Developer"
});
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "grid xl:gap-11 grid-cols-1 xl:grid-cols-2 grid-rows-1 my-10 xl:w-full lg:w-3/4 text-md leading-8 font-sans text-white border border-white bg-romanBlack", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "flex items-center justify-center w-full relative xl:overflow-visible overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "xl:pl-0 pl-12 pr-12", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("h1", { className: "text-8xl font-bold mt-16 font-ubuntu leading-heading tracking-heading", children: "Hello!" }, void 0, !1, {
        fileName: "app/routes/about.tsx",
        lineNumber: 21,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "text-lg text-stone-500 mt-4 mb-16 font-normal", children: "husband - father - coder - jedi" }, void 0, !1, {
        fileName: "app/routes/about.tsx",
        lineNumber: 24,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "text-md", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("p", { children: "I am full-stack developer who has a strong background with the front-end and is improving my back-end knowledge every day. I was born in 1988 and grew up in Michigan. Once I graduated High School I knew that I wanted to do something with computers. I ended up taking a Graphic Design class and loved it, so I went to Spring Arbor University and got a Bachelor of Fine Arts with a focus on Graphic Design. During my time in college I fell in love with coding and realized that stuff I designed, I could also build in code. Thus began my journey to learn everything I know about coding to this day." }, void 0, !1, {
          fileName: "app/routes/about.tsx",
          lineNumber: 28,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("p", { children: "I have written code for Steel Fish Design, Traffic Digital Agency, and Deque. I also help out maintain a few open source projects when I have the free time. I currently work at Launch by NTT Data as a Senior Digital Engineer. In my current position I lead a team of front end developers for a client. In our day to day we use React, GQL, and Sass." }, void 0, !1, {
          fileName: "app/routes/about.tsx",
          lineNumber: 42,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("p", { children: "I met my wife while attending SAU. We live in a small town in Michigan with our six year old son and two year old daughter." }, void 0, !1, {
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
  loader: () => loader8,
  meta: () => meta2
});
var import_node11 = require("@remix-run/node"), import_react12 = require("@remix-run/react");

// app/components/terminal.tsx
var import_react_terminal2 = require("react-terminal"), import_jsx_dev_runtime18 = require("react/jsx-dev-runtime"), RomanTerminal = () => /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "hidden lg:flex w-800 h-460", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
  import_react_terminal2.ReactTerminal,
  {
    commands: {
      whoami: "Jacob Roman",
      help: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("span", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("span", { children: "Commands:" }, void 0, !1, {
          fileName: "app/components/terminal.tsx",
          lineNumber: 11,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("br", {}, void 0, !1, {
          fileName: "app/components/terminal.tsx",
          lineNumber: 12,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("br", {}, void 0, !1, {
          fileName: "app/components/terminal.tsx",
          lineNumber: 13,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("span", { children: "VARIABLES" }, void 0, !1, {
          fileName: "app/components/terminal.tsx",
          lineNumber: 15,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("br", {}, void 0, !1, {
          fileName: "app/components/terminal.tsx",
          lineNumber: 16,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("span", { style: { marginLeft: "20px" }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("strong", { children: "about" }, void 0, !1, {
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("br", {}, void 0, !1, {
          fileName: "app/components/terminal.tsx",
          lineNumber: 20,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("span", { style: { marginLeft: "20px" }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("strong", { children: "resume" }, void 0, !1, {
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("br", {}, void 0, !1, {
          fileName: "app/components/terminal.tsx",
          lineNumber: 24,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("span", { style: { marginLeft: "20px" }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("strong", { children: "contact" }, void 0, !1, {
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("br", {}, void 0, !1, {
          fileName: "app/components/terminal.tsx",
          lineNumber: 28,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("br", {}, void 0, !1, {
          fileName: "app/components/terminal.tsx",
          lineNumber: 29,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("span", { children: "FUNCTIONS" }, void 0, !1, {
          fileName: "app/components/terminal.tsx",
          lineNumber: 31,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("br", {}, void 0, !1, {
          fileName: "app/components/terminal.tsx",
          lineNumber: 32,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("span", { style: { marginLeft: "20px" }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("strong", { children: "experience()" }, void 0, !1, {
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("br", {}, void 0, !1, {
          fileName: "app/components/terminal.tsx",
          lineNumber: 36,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("span", { style: { marginLeft: "40px" }, children: "returns the total years of working experience" }, void 0, !1, {
          fileName: "app/components/terminal.tsx",
          lineNumber: 37,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("br", {}, void 0, !1, {
          fileName: "app/components/terminal.tsx",
          lineNumber: 40,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/terminal.tsx",
        lineNumber: 10,
        columnNumber: 13
      }, this),
      contact: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("span", { children: "follow me on twitter or send me an email" }, void 0, !1, {
        fileName: "app/components/terminal.tsx",
        lineNumber: 43,
        columnNumber: 18
      }, this),
      about: "Javascript Developer, Accessibility Advocate, and Team player. I am always seeking opportunities to learn and grow. I am a simple guy who loves all things tech and a good cup of coffee. Nice to meet you.",
      resume: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("span", { children: [
        "You can",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
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
    welcomeMessage: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("span", { children: [
      'Type "help" for more information. ',
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("br", {}, void 0, !1, {
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

// app/components/new-index.tsx
var import_react11 = require("@remix-run/react");

// app/components/newFooter.tsx
var import_react_router6 = require("react-router");
var import_jsx_dev_runtime19 = require("react/jsx-dev-runtime");
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
  return (0, import_react_router6.useMatches)()[1].pathname === "/" ? /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("ul", { className: "flex flex-col lg:items-end mt-10 lg:mt-0 ", children: socialLinks.map((link) => /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
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
      lineNumber: 31,
      columnNumber: 21
    },
    this
  )) }, void 0, !1, {
    fileName: "app/components/newFooter.tsx",
    lineNumber: 29,
    columnNumber: 13
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "flex flex-row justify-between", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(roman_bytes_logo_default, {}, void 0, !1, {
      fileName: "app/components/newFooter.tsx",
      lineNumber: 45,
      columnNumber: 12
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("ul", { className: "flex flex-col items-end", children: socialLinks.map((link) => /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
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
        lineNumber: 48,
        columnNumber: 20
      },
      this
    )) }, void 0, !1, {
      fileName: "app/components/newFooter.tsx",
      lineNumber: 46,
      columnNumber: 12
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/newFooter.tsx",
    lineNumber: 44,
    columnNumber: 8
  }, this);
}
var newFooter_default = NewFooter;

// app/components/new-index.tsx
var import_react_router7 = require("react-router"), import_jsx_dev_runtime20 = require("react/jsx-dev-runtime");
function NewIndex() {
  let currentRoute = (0, import_react_router7.useMatches)()[1];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "container relative border-2 border-romanBlack dark:border-romanPrimary lg:rounded-3xl bg-white dark:bg-romanBlack p-10 lg:pt-32 lg:px-28 lg:pb-28", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "hidden lg:block absolute top-10 left-0 right-0 text-center text-romanPrimary", children: `~ ${currentRoute.pathname} ` }, void 0, !1, {
      fileName: "app/components/new-index.tsx",
      lineNumber: 11,
      columnNumber: 14
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(roman_bytes_logo_default, {}, void 0, !1, {
      fileName: "app/components/new-index.tsx",
      lineNumber: 12,
      columnNumber: 14
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "font-newMono mt-20 w-full lg:w-5/12 dark:text-white", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("p", { children: "I\u2019m Jacob Roman, also known as Roman Bytes, a Senior Digital Engineer with over a decade of experience leading multiple teams to build high-performance web applications. I love clean design, video games, and hockey." }, void 0, !1, {
        fileName: "app/components/new-index.tsx",
        lineNumber: 14,
        columnNumber: 18
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("h2", { className: "font-bold mt-8", children: "Thoughts" }, void 0, !1, {
        fileName: "app/components/new-index.tsx",
        lineNumber: 19,
        columnNumber: 18
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("p", { children: [
        "I don\u2019t write much. I am looking to change that. You can see any future posts on ",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
          import_react11.Link,
          {
            to: "/blog",
            className: "text-romanPrimary underline",
            children: "my blog page."
          },
          void 0,
          !1,
          {
            fileName: "app/components/new-index.tsx",
            lineNumber: 22,
            columnNumber: 22
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/new-index.tsx",
        lineNumber: 20,
        columnNumber: 18
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("h2", { className: "font-bold mt-8", children: "Projects" }, void 0, !1, {
        fileName: "app/components/new-index.tsx",
        lineNumber: 29,
        columnNumber: 18
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("p", { children: [
        "I have a number of side projects that I am currently working on. You can see ",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
          import_react11.Link,
          {
            to: "/projects",
            className: "text-romanPrimary underline",
            children: "those projects here."
          },
          void 0,
          !1,
          {
            fileName: "app/components/new-index.tsx",
            lineNumber: 32,
            columnNumber: 22
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/new-index.tsx",
        lineNumber: 30,
        columnNumber: 18
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/new-index.tsx",
      lineNumber: 13,
      columnNumber: 14
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(newFooter_default, {}, void 0, !1, {
      fileName: "app/components/new-index.tsx",
      lineNumber: 40,
      columnNumber: 14
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/new-index.tsx",
    lineNumber: 10,
    columnNumber: 10
  }, this);
}

// app/routes/index.tsx
var import_jsx_dev_runtime21 = require("react/jsx-dev-runtime"), meta2 = () => ({
  title: "Roman Bytes | Senior Digital Engineer",
  description: "Experienced Senior Digital Engineer with a demonstrated history of working in the computer software industry. Skilled in modern Front-end technologies, and Fron-end design. Strong engineering professional with a Bachelor of Arts focused on Graphic Design from Spring Arbor University.",
  "og:url": "https://romanbytes.dev/",
  "og:type": "website",
  "og:image": profile_pic_default,
  "twitter:image": profile_pic_default,
  "twitter:card": "summary_large_image"
});
async function loader8() {
  return (0, import_node11.json)({
    ENV: {
      FEATURE_NEW_BRAND: process.env.FEATURE_NEW_BRAND
    }
  });
}
function Index2() {
  return (0, import_react12.useLoaderData)().ENV.FEATURE_NEW_BRAND === "true" ? /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(NewLayout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(NewIndex, {}, void 0, !1, {
    fileName: "app/routes/index.tsx",
    lineNumber: 41,
    columnNumber: 17
  }, this) }, void 0, !1, {
    fileName: "app/routes/index.tsx",
    lineNumber: 40,
    columnNumber: 13
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "flex justify-center items-center w-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("h1", { className: "font-sans text-white left-2.5 lg:right-2.5 xl:right-5 absolute top-2.5 xl:top-5 text-2xl text-left lg:text-right", children: [
      "Hello, I am Jacob Roman, a self taught",
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("br", {}, void 0, !1, {
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(terminal_default, {}, void 0, !1, {
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
var import_jsx_dev_runtime22 = require("react/jsx-dev-runtime");
function test() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "mt-20 mb-40 p-14 text-md font-sans text-white border border-white bg-romanBlack", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("h1", { className: "text-8xl font-bold mt-16 font-ubuntu leading-heading tracking-heading", children: "Hello!" }, void 0, !1, {
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
var assets_manifest_default = { entry: { module: "/build/entry.client-EZSPVNDB.js", imports: ["/build/_shared/chunk-VVWHR7QM.js", "/build/_shared/chunk-K5VTLWI2.js", "/build/_shared/chunk-CZ6D5A5Z.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-SSNBS7SW.js", imports: ["/build/_shared/chunk-UCRUBDCY.js", "/build/_shared/chunk-NYB5REXD.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !0 }, "routes/404": { id: "routes/404", parentId: "root", path: "404", index: void 0, caseSensitive: void 0, module: "/build/routes/404-YODO7E7I.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/[robots.txt]": { id: "routes/[robots.txt]", parentId: "root", path: "robots.txt", index: void 0, caseSensitive: void 0, module: "/build/routes/[robots.txt]-KBLGU22A.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/[sitemap.xml]": { id: "routes/[sitemap.xml]", parentId: "root", path: "sitemap.xml", index: void 0, caseSensitive: void 0, module: "/build/routes/[sitemap.xml]-YOANNW2S.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/about": { id: "routes/about", parentId: "root", path: "about", index: void 0, caseSensitive: void 0, module: "/build/routes/about-7MCZS6HO.js", imports: ["/build/_shared/chunk-K6M27BHM.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/blog/$slug": { id: "routes/blog/$slug", parentId: "root", path: "blog/:slug", index: void 0, caseSensitive: void 0, module: "/build/routes/blog/$slug-QG42A67P.js", imports: ["/build/_shared/chunk-E7RQ6GJJ.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/blog/index": { id: "routes/blog/index", parentId: "root", path: "blog", index: !0, caseSensitive: void 0, module: "/build/routes/blog/index-OMK5AZRE.js", imports: ["/build/_shared/chunk-7JHC4DEH.js", "/build/_shared/chunk-E7RQ6GJJ.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-Q4CIW6OM.js", imports: ["/build/_shared/chunk-K6M27BHM.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/projects/$name": { id: "routes/projects/$name", parentId: "root", path: "projects/:name", index: void 0, caseSensitive: void 0, module: "/build/routes/projects/$name-EOUWE4CM.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/projects/index": { id: "routes/projects/index", parentId: "root", path: "projects", index: !0, caseSensitive: void 0, module: "/build/routes/projects/index-EANLLD67.js", imports: ["/build/_shared/chunk-7JHC4DEH.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "719b6ed0", hmr: void 0, url: "/build/manifest-719B6ED0.js" };

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
  mode: "development"
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
//# sourceMappingURL=server.js.map
