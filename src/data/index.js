import { NativeModules, AsyncStorage } from 'react-native';

exports.get = function get(api, params) {
  const opt = {
    method: 'GET',
  };

  return fetch(api, opt)
    .then(response => {
      // 如果请求的返回结果不是OK则返回空数组，UI显示无数据
      if (response.status !== 200) {
        return [];
      }

      return response.json();
    })
    .catch(e => {
      console.log(`[API][error] ${e}`);
    });
};

export function getAllBooks(page) {
  return fetch(`https://api.gitbook.com/books/all?limit=10&page=${page}`).then(res => res.json());
}

export function getBook(id) {
  return fetch(`https://api.gitbook.com/book/${id}`).then(res => res.json());
}

export function getBooksFromSQL(page) {
  return 
}
const historyKey = id => `@history#${id}`;
/**
 * 保存阅读记录
 */
export function saveReadHistory(bookInfo) {
  // 记录额外的信息
  bookInfo.lastReadTime = Date.now();

  console.log('save history', historyKey(bookInfo.id));

  AsyncStorage.setItem(historyKey(bookInfo.id), JSON.stringify(bookInfo));
}

/**
 * 读取阅读记录
 */
export function getReadHisotry() {
  console.log('get historys');

  return AsyncStorage.getAllKeys().then(keys => {
    const historyKeys = [];
    keys.forEach(key => {
      if (key.indexOf('@history') === 0) {
        historyKeys.push(key);
      }
    });

    return AsyncStorage.multiGet(historyKeys).then(res => {
      return res.map(item => JSON.parse(item[1]));
    });
  });
}

export const firstPageBook = {
  "list": [
    {
      "id": "yeasy/docker_practice",
      "status": "updating_failed",
      "name": "docker_practice",
      "title": "Docker —— 从入门到实践",
      "description": "Help you understand and use docker, with practical cases.",
      "public": true,
      "template": "base",
      "topics": [
        "docker"
      ],
      "license": "nolicense",
      "language": "zh",
      "locked": false,
      "cover": {
        "large": "/cover/book/yeasy/docker_practice.jpg?build=1546740996133",
        "small": "/cover/book/yeasy/docker_practice.jpg?build=1546740996133&size=small"
      },
      "urls": {
        "git": "https://git.gitbook.com/yeasy/docker_practice.git",
        "access": "https://legacy.gitbook.com/book/yeasy/docker_practice",
        "homepage": "https://yeasy.gitbooks.io/docker_practice/",
        "read": "https://legacy.gitbook.com/read/book/yeasy/docker_practice",
        "edit": "https://legacy.gitbook.com/book/yeasy/docker_practice/edit",
        "content": "https://yeasy.gitbooks.io/docker_practice/content/",
        "download": {
          "epub": "https://legacy.gitbook.com/download/epub/book/yeasy/docker_practice",
          "mobi": "https://legacy.gitbook.com/download/mobi/book/yeasy/docker_practice",
          "pdf": "https://legacy.gitbook.com/download/pdf/book/yeasy/docker_practice"
        }
      },
      "counts": {
        "stars": 6310,
        "subscriptions": 1651,
        "updates": 683,
        "discussions": 0,
        "changeRequests": 0
      },
      "dates": {
        "build": "2019-01-06T02:16:36.133Z",
        "failed": "2019-05-09T23:28:35.182Z",
        "created": "2014-09-05T08:22:42.749Z"
      },
      "permissions": {
        "edit": false,
        "admin": false,
        "important": false
      },
      "publish": {
        "ebooks": true,
        "defaultBranch": null,
        "builder": null
      },
      "author": {
        "id": "53ccd960d7e1510200742f8b",
        "hasMigrated": false,
        "type": "User",
        "username": "yeasy",
        "name": "yeasy",
        "location": "",
        "website": "http://yeasy.github.io/",
        "bio": "Engineer who loves technology, art and maths.",
        "verified": true,
        "locked": false,
        "site_admin": false,
        "urls": {
          "profile": "https://legacy.gitbook.com/@yeasy",
          "stars": "https://legacy.gitbook.com/@yeasy/starred",
          "avatar": "https://s.gravatar.com/avatar/cc1fbf21434f0e0922ca8b1ad76fbd7b?s=220&d=https%3A%2F%2Flegacy.gitbook.com%2Fassets%2Fimages%2Favatars%2Fuser.png"
        },
        "permissions": {
          "edit": null,
          "admin": null
        },
        "dates": {
          "created": "2014-07-21T09:12:00.824Z"
        },
        "counts": {},
        "github": {
          "username": "yeasy"
        }
      }
    },
    {
      "id": "siddontang/leetcode-solution",
      "status": "published",
      "name": "leetcode-solution",
      "title": "LeetCode题解",
      "description": "",
      "public": true,
      "template": "base",
      "topics": [
        "programming",
        "c-c-plus-plus"
      ],
      "license": "mit",
      "language": "en",
      "locked": false,
      "cover": {
        "large": "/cover/book/siddontang/leetcode-solution.jpg?build=1513643979585",
        "small": "/cover/book/siddontang/leetcode-solution.jpg?build=1513643979585&size=small"
      },
      "urls": {
        "git": "https://git.gitbook.com/siddontang/leetcode-solution.git",
        "access": "https://legacy.gitbook.com/book/siddontang/leetcode-solution",
        "homepage": "https://siddontang.gitbooks.io/leetcode-solution/",
        "read": "https://legacy.gitbook.com/read/book/siddontang/leetcode-solution",
        "edit": "https://legacy.gitbook.com/book/siddontang/leetcode-solution/edit",
        "content": "https://siddontang.gitbooks.io/leetcode-solution/content/",
        "download": {
          "epub": "https://legacy.gitbook.com/download/epub/book/siddontang/leetcode-solution",
          "mobi": "https://legacy.gitbook.com/download/mobi/book/siddontang/leetcode-solution",
          "pdf": "https://legacy.gitbook.com/download/pdf/book/siddontang/leetcode-solution"
        }
      },
      "counts": {
        "stars": 4241,
        "subscriptions": 999,
        "updates": 86,
        "discussions": 46,
        "changeRequests": 0
      },
      "dates": {
        "build": "2017-12-19T00:39:39.585Z",
        "created": "2014-11-12T05:31:52.037Z"
      },
      "permissions": {
        "edit": false,
        "admin": false,
        "important": false
      },
      "publish": {
        "ebooks": true,
        "defaultBranch": null,
        "builder": null
      },
      "author": {
        "id": "5462e816959d580200766f84",
        "hasMigrated": false,
        "type": "User",
        "username": "siddontang",
        "name": "siddontang",
        "location": "China",
        "website": "https://github.com/siddontang",
        "bio": "",
        "verified": true,
        "locked": false,
        "site_admin": false,
        "urls": {
          "profile": "https://legacy.gitbook.com/@siddontang",
          "stars": "https://legacy.gitbook.com/@siddontang/starred",
          "avatar": "https://s.gravatar.com/avatar/4827e74b5b3bf3fe3bef5e42a00c41d4?s=220&d=https%3A%2F%2Flegacy.gitbook.com%2Fassets%2Fimages%2Favatars%2Fuser.png"
        },
        "permissions": {
          "edit": null,
          "admin": null
        },
        "dates": {
          "created": "2014-11-12T04:54:46.219Z"
        },
        "counts": {},
        "twitter": {
          "username": "siddontang"
        },
        "github": {
          "username": "siddontang"
        },
        "facebook": {}
      }
    },
    {
      "id": "leohxj/a-programmer-prepares",
      "status": "published",
      "name": "a-programmer-prepares",
      "title": "程序员的自我修养",
      "description": "我所认为的程序员的自我养成手册。",
      "public": true,
      "template": "base",
      "topics": [
        "programming",
        "software-engineering",
        "computer-science"
      ],
      "license": "nolicense",
      "language": "zh",
      "locked": false,
      "cover": {
        "large": "/cover/book/leohxj/a-programmer-prepares.jpg?build=1474118160897",
        "small": "/cover/book/leohxj/a-programmer-prepares.jpg?build=1474118160897&size=small"
      },
      "urls": {
        "git": "https://git.gitbook.com/leohxj/a-programmer-prepares.git",
        "access": "https://legacy.gitbook.com/book/leohxj/a-programmer-prepares",
        "homepage": "https://leohxj.gitbooks.io/a-programmer-prepares/",
        "read": "https://legacy.gitbook.com/read/book/leohxj/a-programmer-prepares",
        "edit": "https://legacy.gitbook.com/book/leohxj/a-programmer-prepares/edit",
        "content": "https://leohxj.gitbooks.io/a-programmer-prepares/content/",
        "download": {
          "epub": "https://legacy.gitbook.com/download/epub/book/leohxj/a-programmer-prepares",
          "mobi": "https://legacy.gitbook.com/download/mobi/book/leohxj/a-programmer-prepares",
          "pdf": "https://legacy.gitbook.com/download/pdf/book/leohxj/a-programmer-prepares"
        }
      },
      "counts": {
        "stars": 3333,
        "subscriptions": 807,
        "updates": 57,
        "discussions": 25,
        "changeRequests": 0
      },
      "dates": {
        "build": "2016-09-17T13:16:00.897Z",
        "created": "2015-02-09T07:31:28.994Z"
      },
      "permissions": {
        "edit": false,
        "admin": false,
        "important": false
      },
      "publish": {
        "ebooks": true,
        "defaultBranch": null,
        "builder": null
      },
      "author": {
        "id": "53aa44d690dee90200fa4324",
        "hasMigrated": false,
        "type": "User",
        "username": "leohxj",
        "name": "Leo Hui",
        "location": "Nanjing",
        "website": "http://finalhome.org/",
        "bio": "less is more\r\n",
        "verified": true,
        "locked": false,
        "site_admin": false,
        "urls": {
          "profile": "https://legacy.gitbook.com/@leohxj",
          "stars": "https://legacy.gitbook.com/@leohxj/starred",
          "avatar": "https://s.gravatar.com/avatar/efe66cd608fd8a93826f3d1b5267a98d?s=220&d=https%3A%2F%2Flegacy.gitbook.com%2Fassets%2Fimages%2Favatars%2Fuser.png"
        },
        "permissions": {
          "edit": null,
          "admin": null
        },
        "dates": {
          "created": "2014-06-25T03:41:10.509Z"
        },
        "counts": {},
        "github": {
          "username": "leohxj"
        }
      }
    },
    {
      "id": "frontendmasters/front-end-handbook",
      "status": "published",
      "name": "front-end-handbook",
      "title": "Front-end Developer Handbook 2016",
      "description": "The resources and tools for learning about the practice of front-end development in 2016. Written by Cody Lindley sponsored by",
      "public": true,
      "template": "base",
      "topics": [
        "javascript",
        "programming",
        "web-development",
        "html"
      ],
      "license": "cc-by-nc-nd-4_0",
      "language": "en",
      "locked": false,
      "cover": {
        "large": "/cover/book/frontendmasters/front-end-handbook.jpg?build=1555100025400",
        "small": "/cover/book/frontendmasters/front-end-handbook.jpg?build=1555100025400&size=small"
      },
      "urls": {
        "git": "https://git.gitbook.com/frontendmasters/front-end-handbook.git",
        "access": "https://legacy.gitbook.com/book/frontendmasters/front-end-handbook",
        "homepage": "https://frontendmasters.gitbooks.io/front-end-handbook/",
        "read": "https://legacy.gitbook.com/read/book/frontendmasters/front-end-handbook",
        "edit": "https://legacy.gitbook.com/book/frontendmasters/front-end-handbook/edit",
        "content": "http://www.frontendhandbook.com/",
        "download": {
          "epub": "https://legacy.gitbook.com/download/epub/book/frontendmasters/front-end-handbook",
          "mobi": "https://legacy.gitbook.com/download/mobi/book/frontendmasters/front-end-handbook",
          "pdf": "https://legacy.gitbook.com/download/pdf/book/frontendmasters/front-end-handbook"
        }
      },
      "counts": {
        "stars": 3113,
        "subscriptions": 804,
        "updates": 287,
        "discussions": 42,
        "changeRequests": 0
      },
      "dates": {
        "build": "2019-04-12T20:13:45.400Z",
        "created": "2015-08-27T19:55:14.749Z"
      },
      "permissions": {
        "edit": false,
        "admin": false,
        "important": false
      },
      "publish": {
        "ebooks": true,
        "defaultBranch": null,
        "builder": null
      },
      "author": {
        "id": "55e09713d422b80f0082ff55",
        "hasMigrated": false,
        "type": "Organization",
        "username": "frontendmasters",
        "name": "Frontend Masters",
        "location": "Minneapolis, MN",
        "website": "https://frontendmasters.com/",
        "bio": "Advance Your Skills with In-Depth, Modern Front-End Engineering Courses on JavaScript, React, Node and more!",
        "urls": {
          "profile": "https://legacy.gitbook.com/@frontendmasters",
          "avatar": "https://legacy.gitbook.com/@frontendmasters/avatar",
          "members": "https://legacy.gitbook.com/@frontendmasters/members"
        },
        "permissions": {
          "edit": null,
          "admin": null
        },
        "dates": {
          "created": "2015-08-28T17:14:59.219Z"
        },
        "counts": {},
        "github": {
          "username": "FrontendMasters"
        }
      }
    },
    {
      "id": "0xax/linux-insides",
      "status": "published",
      "name": "linux-insides",
      "title": "Linux Inside",
      "description": "A series of posts about the linux kernel and its insides.",
      "public": true,
      "template": "base",
      "topics": [
        "programming",
        "operating-system",
        "linux"
      ],
      "license": "nolicense",
      "language": "en",
      "locked": false,
      "cover": {
        "large": "/cover/book/0xax/linux-insides.jpg?build=1556105036030",
        "small": "/cover/book/0xax/linux-insides.jpg?build=1556105036030&size=small"
      },
      "urls": {
        "git": "https://git.gitbook.com/0xax/linux-insides.git",
        "access": "https://legacy.gitbook.com/book/0xax/linux-insides",
        "homepage": "https://0xax.gitbooks.io/linux-insides/",
        "read": "https://legacy.gitbook.com/read/book/0xax/linux-insides",
        "edit": "https://legacy.gitbook.com/book/0xax/linux-insides/edit",
        "content": "https://0xax.gitbooks.io/linux-insides/content/",
        "download": {
          "epub": "https://legacy.gitbook.com/download/epub/book/0xax/linux-insides",
          "mobi": "https://legacy.gitbook.com/download/mobi/book/0xax/linux-insides",
          "pdf": "https://legacy.gitbook.com/download/pdf/book/0xax/linux-insides"
        }
      },
      "counts": {
        "stars": 3029,
        "subscriptions": 838,
        "updates": 883,
        "discussions": 125,
        "changeRequests": 0
      },
      "dates": {
        "build": "2019-04-24T11:23:56.030Z",
        "created": "2015-01-28T17:58:04.338Z"
      },
      "permissions": {
        "edit": false,
        "admin": false,
        "important": false
      },
      "publish": {
        "ebooks": true,
        "defaultBranch": null,
        "builder": null
      },
      "author": {
        "id": "53a9320c47bf8c0200039bf2",
        "hasMigrated": false,
        "type": "User",
        "username": "0xax",
        "name": "Alex",
        "location": "",
        "website": "https://github.com/0xAX",
        "bio": "",
        "verified": true,
        "locked": false,
        "site_admin": false,
        "urls": {
          "profile": "https://legacy.gitbook.com/@0xax",
          "stars": "https://legacy.gitbook.com/@0xax/starred",
          "avatar": "https://avatars.io/twitter/0xAX?size=large"
        },
        "permissions": {
          "edit": null,
          "admin": null
        },
        "dates": {
          "created": "2014-06-24T08:08:44.066Z"
        },
        "counts": {},
        "twitter": {
          "username": "0xAX"
        },
        "github": {
          "username": "0xAX"
        }
      }
    },
    {
      "id": "llh911001/mostly-adequate-guide-chinese",
      "status": "published",
      "name": "mostly-adequate-guide-chinese",
      "title": "JS 函数式编程指南",
      "description": "Mostly Adequate Guide 中文版",
      "public": true,
      "template": "base",
      "topics": [],
      "license": "cc-by-sa-4_0",
      "language": "zh",
      "locked": false,
      "cover": {
        "large": "/cover/book/llh911001/mostly-adequate-guide-chinese.jpg?build=1555568405608",
        "small": "/cover/book/llh911001/mostly-adequate-guide-chinese.jpg?build=1555568405608&size=small"
      },
      "urls": {
        "git": "https://git.gitbook.com/llh911001/mostly-adequate-guide-chinese.git",
        "access": "https://legacy.gitbook.com/book/llh911001/mostly-adequate-guide-chinese",
        "homepage": "https://llh911001.gitbooks.io/mostly-adequate-guide-chinese/",
        "read": "https://legacy.gitbook.com/read/book/llh911001/mostly-adequate-guide-chinese",
        "edit": "https://legacy.gitbook.com/book/llh911001/mostly-adequate-guide-chinese/edit",
        "content": "https://llh911001.gitbooks.io/mostly-adequate-guide-chinese/content/",
        "download": {
          "epub": "https://legacy.gitbook.com/download/epub/book/llh911001/mostly-adequate-guide-chinese",
          "mobi": "https://legacy.gitbook.com/download/mobi/book/llh911001/mostly-adequate-guide-chinese",
          "pdf": "https://legacy.gitbook.com/download/pdf/book/llh911001/mostly-adequate-guide-chinese"
        }
      },
      "counts": {
        "stars": 2812,
        "subscriptions": 559,
        "updates": 58,
        "discussions": 92,
        "changeRequests": 0
      },
      "dates": {
        "build": "2019-04-18T06:20:05.608Z",
        "created": "2015-08-09T04:36:16.018Z"
      },
      "permissions": {
        "edit": false,
        "admin": false,
        "important": false
      },
      "publish": {
        "ebooks": true,
        "defaultBranch": null,
        "builder": null
      },
      "author": {
        "id": "55c6d75c64526e100037367a",
        "hasMigrated": false,
        "type": "User",
        "username": "llh911001",
        "name": "Linghao Li",
        "location": "Shanghai",
        "website": "http://hackll.com/",
        "bio": "",
        "verified": true,
        "locked": false,
        "site_admin": false,
        "urls": {
          "profile": "https://legacy.gitbook.com/@llh911001",
          "stars": "https://legacy.gitbook.com/@llh911001/starred",
          "avatar": "https://avatars0.githubusercontent.com/llh911001"
        },
        "permissions": {
          "edit": null,
          "admin": null
        },
        "dates": {
          "created": "2015-08-09T04:30:20.885Z"
        },
        "counts": {},
        "twitter": {
          "username": "lilh42"
        },
        "github": {
          "username": "llh911001"
        },
        "google": {}
      }
    },
    {
      "id": "frontendmasters/front-end-handbook-2017",
      "status": "published",
      "name": "front-end-handbook-2017",
      "title": "Front-end Developer Handbook 2017",
      "description": "The resources and tools for learning about the practice of front-end development in 2017. Written by Cody Lindley sponsored by",
      "public": true,
      "template": "base",
      "topics": [
        "javascript",
        "html",
        "programming",
        "web-development"
      ],
      "license": "cc-by-nc-nd-4_0",
      "language": "en",
      "locked": false,
      "cover": {
        "large": "/cover/book/frontendmasters/front-end-handbook-2017.jpg?build=1555100018210",
        "small": "/cover/book/frontendmasters/front-end-handbook-2017.jpg?build=1555100018210&size=small"
      },
      "urls": {
        "git": "https://git.gitbook.com/frontendmasters/front-end-handbook-2017.git",
        "access": "https://legacy.gitbook.com/book/frontendmasters/front-end-handbook-2017",
        "homepage": "https://frontendmasters.gitbooks.io/front-end-handbook-2017/",
        "read": "https://legacy.gitbook.com/read/book/frontendmasters/front-end-handbook-2017",
        "edit": "https://legacy.gitbook.com/book/frontendmasters/front-end-handbook-2017/edit",
        "content": "http://frontendmasters.com/books/front-end-handbook/2017/",
        "download": {
          "epub": "https://legacy.gitbook.com/download/epub/book/frontendmasters/front-end-handbook-2017",
          "mobi": "https://legacy.gitbook.com/download/mobi/book/frontendmasters/front-end-handbook-2017",
          "pdf": "https://legacy.gitbook.com/download/pdf/book/frontendmasters/front-end-handbook-2017"
        }
      },
      "counts": {
        "stars": 2757,
        "subscriptions": 640,
        "updates": 170,
        "discussions": 7,
        "changeRequests": 0
      },
      "dates": {
        "build": "2019-04-12T20:13:38.210Z",
        "created": "2016-11-09T21:48:45.341Z"
      },
      "permissions": {
        "edit": false,
        "admin": false,
        "important": false
      },
      "publish": {
        "ebooks": true,
        "defaultBranch": null,
        "builder": null
      },
      "author": {
        "id": "55e09713d422b80f0082ff55",
        "hasMigrated": false,
        "type": "Organization",
        "username": "frontendmasters",
        "name": "Frontend Masters",
        "location": "Minneapolis, MN",
        "website": "https://frontendmasters.com/",
        "bio": "Advance Your Skills with In-Depth, Modern Front-End Engineering Courses on JavaScript, React, Node and more!",
        "urls": {
          "profile": "https://legacy.gitbook.com/@frontendmasters",
          "avatar": "https://legacy.gitbook.com/@frontendmasters/avatar",
          "members": "https://legacy.gitbook.com/@frontendmasters/members"
        },
        "permissions": {
          "edit": null,
          "admin": null
        },
        "dates": {
          "created": "2015-08-28T17:14:59.219Z"
        },
        "counts": {},
        "github": {
          "username": "FrontendMasters"
        }
      }
    },
    {
      "id": "wizardforcel/the-art-of-programming-by-july",
      "status": "updating_failed",
      "name": "the-art-of-programming-by-july",
      "title": "编程之法：面试和算法心得",
      "description": "",
      "public": true,
      "template": "base",
      "topics": [
        "algorithm",
        "programming",
        "july"
      ],
      "license": "nolicense",
      "language": "zh",
      "locked": false,
      "cover": {
        "large": "/cover/book/wizardforcel/the-art-of-programming-by-july.jpg?build=1452768777018",
        "small": "/cover/book/wizardforcel/the-art-of-programming-by-july.jpg?build=1452768777018&size=small"
      },
      "urls": {
        "git": "https://git.gitbook.com/wizardforcel/the-art-of-programming-by-july.git",
        "access": "https://legacy.gitbook.com/book/wizardforcel/the-art-of-programming-by-july",
        "homepage": "https://wizardforcel.gitbooks.io/the-art-of-programming-by-july/",
        "read": "https://legacy.gitbook.com/read/book/wizardforcel/the-art-of-programming-by-july",
        "edit": "https://legacy.gitbook.com/book/wizardforcel/the-art-of-programming-by-july/edit",
        "content": "https://wizardforcel.gitbooks.io/the-art-of-programming-by-july/content/",
        "download": {
          "epub": "https://legacy.gitbook.com/download/epub/book/wizardforcel/the-art-of-programming-by-july",
          "mobi": "https://legacy.gitbook.com/download/mobi/book/wizardforcel/the-art-of-programming-by-july",
          "pdf": "https://legacy.gitbook.com/download/pdf/book/wizardforcel/the-art-of-programming-by-july"
        }
      },
      "counts": {
        "stars": 2408,
        "subscriptions": 410,
        "updates": 2,
        "discussions": 23,
        "changeRequests": 0
      },
      "dates": {
        "build": "2016-01-14T10:52:57.018Z",
        "failed": "2016-01-14T10:55:04.702Z",
        "created": "2015-12-23T01:00:10.910Z"
      },
      "permissions": {
        "edit": false,
        "admin": false,
        "important": false
      },
      "publish": {
        "ebooks": true,
        "defaultBranch": null,
        "builder": null
      },
      "author": {
        "id": "547153d82e958e0200381334",
        "hasMigrated": false,
        "type": "User",
        "username": "wizardforcel",
        "name": "wizardforcel",
        "location": "",
        "website": "https://github.com/wizardforcel",
        "bio": "",
        "verified": true,
        "locked": false,
        "site_admin": false,
        "urls": {
          "profile": "https://legacy.gitbook.com/@wizardforcel",
          "stars": "https://legacy.gitbook.com/@wizardforcel/starred",
          "avatar": "https://legacy.gitbook.com/@wizardforcel/avatar"
        },
        "permissions": {
          "edit": null,
          "admin": null
        },
        "dates": {
          "created": "2014-11-23T03:26:16.278Z"
        },
        "counts": {},
        "github": {
          "username": "wizardforcel"
        }
      }
    },
    {
      "id": "samypesse/how-to-create-an-operating-system",
      "status": "published",
      "name": "how-to-create-an-operating-system",
      "title": "How to make an Operating System",
      "description": "Learn how to write, test and run, an operating system in C++ and Assembly from scratch.",
      "public": true,
      "template": "base",
      "topics": [
        "programming",
        "operating-system",
        "c-c-plus-plus"
      ],
      "license": "apache-2",
      "language": "en",
      "locked": false,
      "cover": {
        "large": "/cover/book/samypesse/how-to-create-an-operating-system.jpg?build=1475412619608",
        "small": "/cover/book/samypesse/how-to-create-an-operating-system.jpg?build=1475412619608&size=small"
      },
      "urls": {
        "git": "https://git.gitbook.com/samypesse/how-to-create-an-operating-system.git",
        "access": "https://legacy.gitbook.com/book/samypesse/how-to-create-an-operating-system",
        "homepage": "https://samypesse.gitbooks.io/how-to-create-an-operating-system/",
        "read": "https://legacy.gitbook.com/read/book/samypesse/how-to-create-an-operating-system",
        "edit": "https://legacy.gitbook.com/book/samypesse/how-to-create-an-operating-system/edit",
        "content": "https://samypesse.gitbooks.io/how-to-create-an-operating-system/content/",
        "download": {
          "epub": "https://legacy.gitbook.com/download/epub/book/samypesse/how-to-create-an-operating-system",
          "mobi": "https://legacy.gitbook.com/download/mobi/book/samypesse/how-to-create-an-operating-system",
          "pdf": "https://legacy.gitbook.com/download/pdf/book/samypesse/how-to-create-an-operating-system"
        }
      },
      "counts": {
        "stars": 2190,
        "subscriptions": 560,
        "updates": 81,
        "discussions": 26,
        "changeRequests": 0
      },
      "dates": {
        "build": "2016-10-02T12:50:19.608Z",
        "created": "2014-05-20T01:21:08.289Z"
      },
      "permissions": {
        "edit": false,
        "admin": false,
        "important": false
      },
      "publish": {
        "ebooks": true,
        "defaultBranch": null,
        "builder": null
      },
      "author": {
        "id": "537aadc0556aa60200379f23",
        "hasMigrated": true,
        "type": "User",
        "username": "samypesse",
        "name": "Samy Pessé",
        "location": "Lyon, France",
        "website": "http://samypesse.fr/",
        "bio": "French guy, Co-founder of GitBook",
        "verified": true,
        "locked": false,
        "site_admin": true,
        "urls": {
          "profile": "https://legacy.gitbook.com/@samypesse",
          "stars": "https://legacy.gitbook.com/@samypesse/starred",
          "avatar": "https://legacy.gitbook.com/@samypesse/avatar"
        },
        "permissions": {
          "edit": null,
          "admin": null
        },
        "dates": {
          "created": "2014-05-20T01:20:00.478Z"
        },
        "counts": {},
        "twitter": {
          "username": "SamyPesse"
        },
        "github": {
          "username": "SamyPesse"
        },
        "google": {},
        "facebook": {}
      }
    },
    {
      "id": "qbgbook/spring-boot-reference-guide-zh",
      "status": "published",
      "name": "spring-boot-reference-guide-zh",
      "title": "Spring Boot参考指南",
      "description": "Spring Boot官方文档翻译",
      "public": true,
      "template": "base",
      "topics": [
        "spring-bootcan-kao-zhi-nan",
        "spring-boot"
      ],
      "license": "apache-2",
      "language": "zh",
      "locked": false,
      "cover": {
        "large": "/cover/book/qbgbook/spring-boot-reference-guide-zh.jpg?build=1502178331150",
        "small": "/cover/book/qbgbook/spring-boot-reference-guide-zh.jpg?build=1502178331150&size=small"
      },
      "urls": {
        "git": "https://git.gitbook.com/qbgbook/spring-boot-reference-guide-zh.git",
        "access": "https://legacy.gitbook.com/book/qbgbook/spring-boot-reference-guide-zh",
        "homepage": "https://qbgbook.gitbooks.io/spring-boot-reference-guide-zh/",
        "read": "https://legacy.gitbook.com/read/book/qbgbook/spring-boot-reference-guide-zh",
        "edit": "https://legacy.gitbook.com/book/qbgbook/spring-boot-reference-guide-zh/edit",
        "content": "https://qbgbook.gitbooks.io/spring-boot-reference-guide-zh/content/",
        "download": {
          "epub": "https://legacy.gitbook.com/download/epub/book/qbgbook/spring-boot-reference-guide-zh",
          "mobi": "https://legacy.gitbook.com/download/mobi/book/qbgbook/spring-boot-reference-guide-zh",
          "pdf": "https://legacy.gitbook.com/download/pdf/book/qbgbook/spring-boot-reference-guide-zh"
        }
      },
      "counts": {
        "stars": 2008,
        "subscriptions": 394,
        "updates": 1316,
        "discussions": 31,
        "changeRequests": 0
      },
      "dates": {
        "build": "2017-08-08T07:45:31.150Z",
        "created": "2015-04-19T03:03:11.019Z"
      },
      "permissions": {
        "edit": false,
        "admin": false,
        "important": false
      },
      "publish": {
        "ebooks": true,
        "defaultBranch": null,
        "builder": null
      },
      "author": {
        "id": "55330dd3e4ea7f0300666c11",
        "hasMigrated": false,
        "type": "User",
        "username": "qbgbook",
        "name": "qibaoguang",
        "location": "",
        "website": "",
        "bio": "",
        "verified": true,
        "locked": false,
        "site_admin": false,
        "urls": {
          "profile": "https://legacy.gitbook.com/@qbgbook",
          "stars": "https://legacy.gitbook.com/@qbgbook/starred",
          "avatar": "https://legacy.gitbook.com/@qbgbook/avatar"
        },
        "permissions": {
          "edit": null,
          "admin": null
        },
        "dates": {
          "created": "2015-04-19T02:07:15.223Z"
        },
        "counts": {},
        "github": {
          "username": "qibaoguang"
        }
      }
    }
  ],
  "total": 1183071,
  "limit": 10,
  "page": 0,
  "pages": 118308
};
