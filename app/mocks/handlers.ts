import { http, HttpResponse } from 'msw'

export const handlers = [
    http.get('https://api.github.com/users/roman-bytes/repos?sort=updated_at', () => {
        return HttpResponse.json([{
            "id": 866282411,
            "node_id": "R_kgDOM6Jrqw",
            "name": "mock-roman-bytes-repo",
            "full_name": "roman-bytes/pocket-ts",
            "private": false,
            "owner": {
                "login": "roman-bytes",
                "id": 4601329,
                "node_id": "MDQ6VXNlcjQ2MDEzMjk=",
                "avatar_url": "https://avatars.githubusercontent.com/u/4601329?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/roman-bytes",
                "html_url": "https://github.com/roman-bytes",
                "followers_url": "https://api.github.com/users/roman-bytes/followers",
                "following_url": "https://api.github.com/users/roman-bytes/following{/other_user}",
                "gists_url": "https://api.github.com/users/roman-bytes/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/roman-bytes/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/roman-bytes/subscriptions",
                "organizations_url": "https://api.github.com/users/roman-bytes/orgs",
                "repos_url": "https://api.github.com/users/roman-bytes/repos",
                "events_url": "https://api.github.com/users/roman-bytes/events{/privacy}",
                "received_events_url": "https://api.github.com/users/roman-bytes/received_events",
                "type": "User",
                "user_view_type": "public",
                "site_admin": false
            },
            "html_url": "https://github.com/roman-bytes/pocket-ts",
            "description": "This is a mock call and a temp description to test for all sorts of things and make sure that we do not have too long of a description. ya ya ya all fun kind by peanut butter m and m's. ",
            "fork": false,
            "url": "https://api.github.com/repos/roman-bytes/pocket-ts",
            "forks_url": "https://api.github.com/repos/roman-bytes/pocket-ts/forks",
            "keys_url": "https://api.github.com/repos/roman-bytes/pocket-ts/keys{/key_id}",
            "collaborators_url": "https://api.github.com/repos/roman-bytes/pocket-ts/collaborators{/collaborator}",
            "teams_url": "https://api.github.com/repos/roman-bytes/pocket-ts/teams",
            "hooks_url": "https://api.github.com/repos/roman-bytes/pocket-ts/hooks",
            "issue_events_url": "https://api.github.com/repos/roman-bytes/pocket-ts/issues/events{/number}",
            "events_url": "https://api.github.com/repos/roman-bytes/pocket-ts/events",
            "assignees_url": "https://api.github.com/repos/roman-bytes/pocket-ts/assignees{/user}",
            "branches_url": "https://api.github.com/repos/roman-bytes/pocket-ts/branches{/branch}",
            "tags_url": "https://api.github.com/repos/roman-bytes/pocket-ts/tags",
            "blobs_url": "https://api.github.com/repos/roman-bytes/pocket-ts/git/blobs{/sha}",
            "git_tags_url": "https://api.github.com/repos/roman-bytes/pocket-ts/git/tags{/sha}",
            "git_refs_url": "https://api.github.com/repos/roman-bytes/pocket-ts/git/refs{/sha}",
            "trees_url": "https://api.github.com/repos/roman-bytes/pocket-ts/git/trees{/sha}",
            "statuses_url": "https://api.github.com/repos/roman-bytes/pocket-ts/statuses/{sha}",
            "languages_url": "https://api.github.com/repos/roman-bytes/pocket-ts/languages",
            "stargazers_url": "https://api.github.com/repos/roman-bytes/pocket-ts/stargazers",
            "contributors_url": "https://api.github.com/repos/roman-bytes/pocket-ts/contributors",
            "subscribers_url": "https://api.github.com/repos/roman-bytes/pocket-ts/subscribers",
            "subscription_url": "https://api.github.com/repos/roman-bytes/pocket-ts/subscription",
            "commits_url": "https://api.github.com/repos/roman-bytes/pocket-ts/commits{/sha}",
            "git_commits_url": "https://api.github.com/repos/roman-bytes/pocket-ts/git/commits{/sha}",
            "comments_url": "https://api.github.com/repos/roman-bytes/pocket-ts/comments{/number}",
            "issue_comment_url": "https://api.github.com/repos/roman-bytes/pocket-ts/issues/comments{/number}",
            "contents_url": "https://api.github.com/repos/roman-bytes/pocket-ts/contents/{+path}",
            "compare_url": "https://api.github.com/repos/roman-bytes/pocket-ts/compare/{base}...{head}",
            "merges_url": "https://api.github.com/repos/roman-bytes/pocket-ts/merges",
            "archive_url": "https://api.github.com/repos/roman-bytes/pocket-ts/{archive_format}{/ref}",
            "downloads_url": "https://api.github.com/repos/roman-bytes/pocket-ts/downloads",
            "issues_url": "https://api.github.com/repos/roman-bytes/pocket-ts/issues{/number}",
            "pulls_url": "https://api.github.com/repos/roman-bytes/pocket-ts/pulls{/number}",
            "milestones_url": "https://api.github.com/repos/roman-bytes/pocket-ts/milestones{/number}",
            "notifications_url": "https://api.github.com/repos/roman-bytes/pocket-ts/notifications{?since,all,participating}",
            "labels_url": "https://api.github.com/repos/roman-bytes/pocket-ts/labels{/name}",
            "releases_url": "https://api.github.com/repos/roman-bytes/pocket-ts/releases{/id}",
            "deployments_url": "https://api.github.com/repos/roman-bytes/pocket-ts/deployments",
            "created_at": "2024-10-02T00:54:39Z",
            "updated_at": "2024-10-26T12:45:11Z",
            "pushed_at": "2024-10-26T12:45:07Z",
            "git_url": "git://github.com/roman-bytes/pocket-ts.git",
            "ssh_url": "git@github.com:roman-bytes/pocket-ts.git",
            "clone_url": "https://github.com/roman-bytes/pocket-ts.git",
            "svn_url": "https://github.com/roman-bytes/pocket-ts",
            "homepage": null,
            "size": 133,
            "stargazers_count": 0,
            "watchers_count": 0,
            "language": "TypeScript",
            "has_issues": true,
            "has_projects": true,
            "has_downloads": true,
            "has_wiki": true,
            "has_pages": false,
            "has_discussions": false,
            "forks_count": 0,
            "mirror_url": null,
            "archived": false,
            "disabled": false,
            "open_issues_count": 0,
            "license": {
                "key": "other",
                "name": "Other",
                "spdx_id": "NOASSERTION",
                "url": null,
                "node_id": "MDc6TGljZW5zZTA="
            },
            "allow_forking": true,
            "is_template": false,
            "web_commit_signoff_required": false,
            "topics": ["portfolio"],
            "visibility": "public",
            "forks": 0,
            "open_issues": 0,
            "watchers": 0,
            "default_branch": "main"
        }])
    }),
    http.get('https://api.github.com/repos/roman-bytes/pocket-ts/languages', () => {
       return HttpResponse.json({ CSS: 12334, TypeScript: 1, Javascript: 7, HTML: 77, Go: 69})
    }),
    http.get('https://dev.to/api/artiiiiicles', () => {
       return HttpResponse.json(
           [
               {
                   "type_of": "article",
                   "id": 442766,
                   "title": "Hi, I'm Jacob Roman: A Decade in Web Development",
                   "description": "Hey web friends, my name is Jacob Roman or you might also know me as Roman Bytes. By day I am a Full...",
                   "readable_publish_date": "Nov 11",
                   "slug": "hi-im-jacob-roman-a-decade-in-web-development-3kpp",
                   "path": "/romanbytes/hi-im-jacob-roman-a-decade-in-web-development-3kpp",
                   "url": "https://dev.to/romanbytes/hi-im-jacob-roman-a-decade-in-web-development-3kpp",
                   "comments_count": 0,
                   "public_reactions_count": 0,
                   "collection_id": null,
                   "published_timestamp": "2024-11-11T15:09:38Z",
                   "positive_reactions_count": 0,
                   "cover_image": "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F0fua0ahqklwljazws96o.jpg",
                   "social_image": "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F0fua0ahqklwljazws96o.jpg",
                   "canonical_url": "https://dev.to/romanbytes/hi-im-jacob-roman-a-decade-in-web-development-3kpp",
                   "created_at": "2020-08-31T19:52:40Z",
                   "edited_at": "2024-11-11T15:10:16Z",
                   "crossposted_at": null,
                   "published_at": "2024-11-11T15:09:38Z",
                   "last_comment_at": "2024-11-11T15:09:38Z",
                   "reading_time_minutes": 2,
                   "tags": "developer, firstpost, blog, helloworld",
                   "tag_list": [
                       "developer",
                       "firstpost",
                       "blog",
                       "helloworld"
                   ],
                   "body_html": "\u003Cp\u003EHey web friends, my name is Jacob Roman or you might also know me as Roman Bytes. By day I am a Full Stack developer that has knowledge with the Javascript ecosystem. I have worked with the web for over a decade now and..... have seen all sorts of things. From working with Dreamweaver and FTPing files to the server. Yes, FTP. (For those that do not know FTP stands for File Transfer Protocol). The good ol drag and drop your files to update your site. To the modern stack of Calude, Cursor, and Shadcn. I am excited that I finally decided to take the leap and start sharing my experiences, insights and tips with web development. I have been wanting to do this for quite some time. \u003C/p\u003E\n\n\u003Cp\u003ESo now you may be wondering, \"Great, glad that you started. No what can I expect?\" Glad you asked. To start I plan on sharing some basic things that I have learned while working in this field. I may create small useful bits of code that have been super helpful for me when developing. We might just call those 'bytes'. I plan on sharing my thoughts on best practices and what I have seen work and what doesn't. Who knows what else might come from this journey, either way I am excited to share what I have learned and connect with other developers.\u003C/p\u003E\n\n\u003Cp\u003EMy main reason for starting a blog is to not only give back to the community because I to started out reading and going through others blogs to learn. I am starting this to have a place to keep record and track of all sorts of things that I learned and can reference in the future. I am sure my future self will thank me.\u003C/p\u003E\n\n\u003Cp\u003EI hope that some of you follow me in this journey and follow my blog and other spaces. I am not only trying to start writing here but I am trying my hand a live coding over on Twitch. For now I think that is a good start and we can see where things take us. \u003C/p\u003E\n\n\u003Cp\u003EThanks for reading this first post!\u003C/p\u003E\n\n\u003Cp\u003E\u003Ca href=\"https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F23i5no84sl5ecg5fwfka.jpg\" class=\"article-body-image-wrapper\"\u003E\u003Cimg src=\"https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F23i5no84sl5ecg5fwfka.jpg\" alt=\"Image description\" loading=\"lazy\" width=\"800\" height=\"800\"\u003E\u003C/a\u003E\u003C/p\u003E\n\n\u003Cp\u003EX: \u003Ca href=\"https://x.com/romanbytes\" target=\"_blank\" rel=\"noopener noreferrer\"\u003Ehttps://x.com/romanbytes\u003C/a\u003E\u003Cbr\u003E\nBlueSky: \u003Ca href=\"https://bsky.app/profile/romanbytes.bsky.social\" target=\"_blank\" rel=\"noopener noreferrer\"\u003Ehttps://bsky.app/profile/romanbytes.bsky.social\u003C/a\u003E\u003Cbr\u003E\nTwitch: \u003Ca href=\"https://www.twitch.tv/romanbytes\" target=\"_blank\" rel=\"noopener noreferrer\"\u003Ehttps://www.twitch.tv/romanbytes\u003C/a\u003E\u003Cbr\u003E\nWebsite: \u003Ca href=\"https://romanbytes.dev/\" target=\"_blank\" rel=\"noopener noreferrer\"\u003Ehttps://romanbytes.dev/\u003C/a\u003E\u003C/p\u003E\n\n\u003Cp\u003ETill Next Byte, Roman out\u003C/p\u003E\n\n",
                   "body_markdown": "Hey web friends, my name is Jacob Roman or you might also know me as Roman Bytes. By day I am a Full Stack developer that has knowledge with the Javascript ecosystem. I have worked with the web for over a decade now and..... have seen all sorts of things. From working with Dreamweaver and FTPing files to the server. Yes, FTP. (For those that do not know FTP stands for File Transfer Protocol). The good ol drag and drop your files to update your site. To the modern stack of Calude, Cursor, and Shadcn. I am excited that I finally decided to take the leap and start sharing my experiences, insights and tips with web development. I have been wanting to do this for quite some time. \n\n\nSo now you may be wondering, \"Great, glad that you started. No what can I expect?\" Glad you asked. To start I plan on sharing some basic things that I have learned while working in this field. I may create small useful bits of code that have been super helpful for me when developing. We might just call those 'bytes'. I plan on sharing my thoughts on best practices and what I have seen work and what doesn't. Who knows what else might come from this journey, either way I am excited to share what I have learned and connect with other developers.\n\n\nMy main reason for starting a blog is to not only give back to the community because I to started out reading and going through others blogs to learn. I am starting this to have a place to keep record and track of all sorts of things that I learned and can reference in the future. I am sure my future self will thank me.\n\n\nI hope that some of you follow me in this journey and follow my blog and other spaces. I am not only trying to start writing here but I am trying my hand a live coding over on Twitch. For now I think that is a good start and we can see where things take us. \n\nThanks for reading this first post!\n\n\n\n\n![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/23i5no84sl5ecg5fwfka.jpg)\n\n\nX: https://x.com/romanbytes\nBlueSky: https://bsky.app/profile/romanbytes.bsky.social\nTwitch: https://www.twitch.tv/romanbytes\nWebsite: https://romanbytes.dev/\n\n\nTill Next Byte, Roman out\n\n",
                   "user": {
                       "name": "Jacob Roman",
                       "username": "romanbytes",
                       "twitter_username": null,
                       "github_username": "roman-bytes",
                       "user_id": 253488,
                       "website_url": "https://romanbytes.dev",
                       "profile_image": "https://media2.dev.to/dynamic/image/width=640,height=640,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F253488%2F1225fa77-2a11-4ae5-a423-a2b3442ec44e.jpg",
                       "profile_image_90": "https://media2.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F253488%2F1225fa77-2a11-4ae5-a423-a2b3442ec44e.jpg"
                   }
               },
               {
                   "type_of": "article",
                   "id": 54321,
                   "title": "Hey there!",
                   "description": "Did u know, that this is my first draft? I'm actually testing the API",
                   "readable_publish_date": "Apr 6",
                   "slug": "hey-there-34hj",
                   "path": "/guilhermecheng/hey-there-34hj",
                   "url": "https://dev.to/guilhermecheng/hey-there-34hj",
                   "comments_count": 0,
                   "public_reactions_count": 0,
                   "collection_id": null,
                   "published_timestamp": "2023-04-06T23:29:44Z",
                   "positive_reactions_count": 0,
                   "cover_image": null,
                   "social_image": "https://dev.to/social_previews/article/1419842.png",
                   "canonical_url": "https://dev.to/guilhermecheng/hey-there-34hj",
                   "created_at": "2023-03-29T23:59:07Z",
                   "edited_at": null,
                   "crossposted_at": null,
                   "published_at": "2023-04-06T23:29:44Z",
                   "last_comment_at": "2023-04-06T23:29:44Z",
                   "reading_time_minutes": 1,
                   "tag_list": [
                       "NextJS", "react", "javascript", "monitoring"
                   ],
                   "tags": "NextJS, react, javascript, monitoring",
                   "user": {
                       "name": "Mock Roman",
                       "username": "mock roman",
                       "twitter_username": null,
                       "github_username": "mock-roman",
                       "user_id": 101010,
                       "website_url": null,
                       "profile_image": "https://res.cloudinary.com/practicaldev/image/fetch/s--sDcHxoDy--/c_fill,f_auto,fl_progressive,h_640,q_auto,w_640/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/1046757/543e3ca0-4f99-46ba-b8a1-79c06976b72b.jpeg",
                       "profile_image_90": "https://res.cloudinary.com/practicaldev/image/fetch/s--4IlcgxTN--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/1046757/543e3ca0-4f99-46ba-b8a1-79c06976b72b.jpeg"
                   }
               }
               ]
       )
    }),
    http.get('https://dev.to/api/articles/12345', () => {
        return HttpResponse.json(
            {
                "type_of": "article",
                "id": 442766,
                "title": "Hi, I'm Jacob Roman: A Decade in Web Development",
                "description": "Hey web friends, my name is Jacob Roman or you might also know me as Roman Bytes. By day I am a Full...",
                "readable_publish_date": "Nov 11",
                "slug": "hi-im-jacob-roman-a-decade-in-web-development-3kpp",
                "path": "/romanbytes/hi-im-jacob-roman-a-decade-in-web-development-3kpp",
                "url": "https://dev.to/romanbytes/hi-im-jacob-roman-a-decade-in-web-development-3kpp",
                "comments_count": 0,
                "public_reactions_count": 0,
                "collection_id": null,
                "published_timestamp": "2024-11-11T15:09:38Z",
                "positive_reactions_count": 0,
                "cover_image": "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F0fua0ahqklwljazws96o.jpg",
                "social_image": "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F0fua0ahqklwljazws96o.jpg",
                "canonical_url": "https://dev.to/romanbytes/hi-im-jacob-roman-a-decade-in-web-development-3kpp",
                "created_at": "2020-08-31T19:52:40Z",
                "edited_at": "2024-11-11T15:10:16Z",
                "crossposted_at": null,
                "published_at": "2024-11-11T15:09:38Z",
                "last_comment_at": "2024-11-11T15:09:38Z",
                "reading_time_minutes": 2,
                "tag_list": "developer, firstpost, blog, helloworld",
                "tags": [
                    "developer",
                    "firstpost",
                    "blog",
                    "helloworld"
                ],
                "body_html": "\u003Cp\u003EHey web friends, my name is Jacob Roman or you might also know me as Roman Bytes. By day I am a Full Stack developer that has knowledge with the Javascript ecosystem. I have worked with the web for over a decade now and..... have seen all sorts of things. From working with Dreamweaver and FTPing files to the server. Yes, FTP. (For those that do not know FTP stands for File Transfer Protocol). The good ol drag and drop your files to update your site. To the modern stack of Calude, Cursor, and Shadcn. I am excited that I finally decided to take the leap and start sharing my experiences, insights and tips with web development. I have been wanting to do this for quite some time. \u003C/p\u003E\n\n\u003Cp\u003ESo now you may be wondering, \"Great, glad that you started. No what can I expect?\" Glad you asked. To start I plan on sharing some basic things that I have learned while working in this field. I may create small useful bits of code that have been super helpful for me when developing. We might just call those 'bytes'. I plan on sharing my thoughts on best practices and what I have seen work and what doesn't. Who knows what else might come from this journey, either way I am excited to share what I have learned and connect with other developers.\u003C/p\u003E\n\n\u003Cp\u003EMy main reason for starting a blog is to not only give back to the community because I to started out reading and going through others blogs to learn. I am starting this to have a place to keep record and track of all sorts of things that I learned and can reference in the future. I am sure my future self will thank me.\u003C/p\u003E\n\n\u003Cp\u003EI hope that some of you follow me in this journey and follow my blog and other spaces. I am not only trying to start writing here but I am trying my hand a live coding over on Twitch. For now I think that is a good start and we can see where things take us. \u003C/p\u003E\n\n\u003Cp\u003EThanks for reading this first post!\u003C/p\u003E\n\n\u003Cp\u003E\u003Ca href=\"https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F23i5no84sl5ecg5fwfka.jpg\" class=\"article-body-image-wrapper\"\u003E\u003Cimg src=\"https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F23i5no84sl5ecg5fwfka.jpg\" alt=\"Image description\" loading=\"lazy\" width=\"800\" height=\"800\"\u003E\u003C/a\u003E\u003C/p\u003E\n\n\u003Cp\u003EX: \u003Ca href=\"https://x.com/romanbytes\" target=\"_blank\" rel=\"noopener noreferrer\"\u003Ehttps://x.com/romanbytes\u003C/a\u003E\u003Cbr\u003E\nBlueSky: \u003Ca href=\"https://bsky.app/profile/romanbytes.bsky.social\" target=\"_blank\" rel=\"noopener noreferrer\"\u003Ehttps://bsky.app/profile/romanbytes.bsky.social\u003C/a\u003E\u003Cbr\u003E\nTwitch: \u003Ca href=\"https://www.twitch.tv/romanbytes\" target=\"_blank\" rel=\"noopener noreferrer\"\u003Ehttps://www.twitch.tv/romanbytes\u003C/a\u003E\u003Cbr\u003E\nWebsite: \u003Ca href=\"https://romanbytes.dev/\" target=\"_blank\" rel=\"noopener noreferrer\"\u003Ehttps://romanbytes.dev/\u003C/a\u003E\u003C/p\u003E\n\n\u003Cp\u003ETill Next Byte, Roman out\u003C/p\u003E\n\n",
                "body_markdown": "Hey web friends, my name is Jacob Roman or you might also know me as Roman Bytes. By day I am a Full Stack developer that has knowledge with the Javascript ecosystem. I have worked with the web for over a decade now and..... have seen all sorts of things. From working with Dreamweaver and FTPing files to the server. Yes, FTP. (For those that do not know FTP stands for File Transfer Protocol). The good ol drag and drop your files to update your site. To the modern stack of Calude, Cursor, and Shadcn. I am excited that I finally decided to take the leap and start sharing my experiences, insights and tips with web development. I have been wanting to do this for quite some time. \n\n\nSo now you may be wondering, \"Great, glad that you started. No what can I expect?\" Glad you asked. To start I plan on sharing some basic things that I have learned while working in this field. I may create small useful bits of code that have been super helpful for me when developing. We might just call those 'bytes'. I plan on sharing my thoughts on best practices and what I have seen work and what doesn't. Who knows what else might come from this journey, either way I am excited to share what I have learned and connect with other developers.\n\n\nMy main reason for starting a blog is to not only give back to the community because I to started out reading and going through others blogs to learn. I am starting this to have a place to keep record and track of all sorts of things that I learned and can reference in the future. I am sure my future self will thank me.\n\n\nI hope that some of you follow me in this journey and follow my blog and other spaces. I am not only trying to start writing here but I am trying my hand a live coding over on Twitch. For now I think that is a good start and we can see where things take us. \n\nThanks for reading this first post!\n\n\n\n\n![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/23i5no84sl5ecg5fwfka.jpg)\n\n\nX: https://x.com/romanbytes\nBlueSky: https://bsky.app/profile/romanbytes.bsky.social\nTwitch: https://www.twitch.tv/romanbytes\nWebsite: https://romanbytes.dev/\n\n\nTill Next Byte, Roman out\n\n",
                "user": {
                    "name": "Jacob Roman",
                    "username": "romanbytes",
                    "twitter_username": null,
                    "github_username": "roman-bytes",
                    "user_id": 253488,
                    "website_url": "https://romanbytes.dev",
                    "profile_image": "https://media2.dev.to/dynamic/image/width=640,height=640,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F253488%2F1225fa77-2a11-4ae5-a423-a2b3442ec44e.jpg",
                    "profile_image_90": "https://media2.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F253488%2F1225fa77-2a11-4ae5-a423-a2b3442ec44e.jpg"
                }
            }
        )
    }),
]