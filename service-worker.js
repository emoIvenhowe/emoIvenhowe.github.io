/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "0941b26049026c4876011b457cada71d"
  },
  {
    "url": "assets/css/0.styles.c986e881.css",
    "revision": "a42f4bd6b90ab87430d2b9ff5d1dc994"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.d4b92052.js",
    "revision": "84dae207cecb211ebcb6357182805778"
  },
  {
    "url": "assets/js/10.6b79bd4b.js",
    "revision": "7b19d008056ecdcf504b53bae609b322"
  },
  {
    "url": "assets/js/11.b9e832f1.js",
    "revision": "867b178e0fe337d950b7313bd0ff7fd0"
  },
  {
    "url": "assets/js/12.9a1c1815.js",
    "revision": "fcf7f2a9c12b6f13bfc54b8aedc7d4d9"
  },
  {
    "url": "assets/js/13.d90a9c89.js",
    "revision": "17ae3d808a4d99f2799ba4b1d837b9ed"
  },
  {
    "url": "assets/js/14.e91c67d0.js",
    "revision": "7d55bfe1b322cd36c30635a3c3217c5e"
  },
  {
    "url": "assets/js/15.74879778.js",
    "revision": "15a6106ce72939118e5e452286208c55"
  },
  {
    "url": "assets/js/16.8e39ac90.js",
    "revision": "5efac7b825b1d840f231ba40626a9c45"
  },
  {
    "url": "assets/js/17.ea2fffa9.js",
    "revision": "23a16002a25969a14bdd8f81fbaa28c4"
  },
  {
    "url": "assets/js/18.811f2669.js",
    "revision": "086235dc9aa06aa40f207ba5daaf0207"
  },
  {
    "url": "assets/js/4.d5083a5c.js",
    "revision": "736b52e98da51b38ed5a28430ca94910"
  },
  {
    "url": "assets/js/5.c2820dc6.js",
    "revision": "5e0d19f3a4d51708bd55401e4a3ce910"
  },
  {
    "url": "assets/js/6.a5cd173d.js",
    "revision": "6534dd4a2db6ad8bb0fe76c27e370f8a"
  },
  {
    "url": "assets/js/7.5878f3ad.js",
    "revision": "8b0941d36948b3c96dae41cb38879a89"
  },
  {
    "url": "assets/js/8.44d8e251.js",
    "revision": "4c85e3f125aaf9efbed15076a9ca3242"
  },
  {
    "url": "assets/js/9.d14ae279.js",
    "revision": "afdcd6b807f02bf91e666289ab6fdbc5"
  },
  {
    "url": "assets/js/app.d6107bbe.js",
    "revision": "f86d0fbb507660ac132e78fc5a58b652"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.7597310a.js",
    "revision": "4e99e0a52737730379809c6486767d89"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "35fbd121dd79a7817c35698f9d4c7974"
  },
  {
    "url": "categories/java/index.html",
    "revision": "af430ed2e112a320d7f39e413a04ad1f"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "310dd4bacb81cf6270ee5e1fa7fc4113"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "6990d75082670fe78886ade20b9d767c"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "48ddef3347a72d4490bdb91a689526ad"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "30f2aaf501a70c84038078e7f7f502b7"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "510f462bfdada40312b02cea1a9c1936"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "8721563f9c7b35882bbfb700172c0dde"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "47d408d2836627ff0f2c784dd7f7dbd0"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "6844af9bd49f6350126939a4a0c82fe7"
  },
  {
    "url": "tags/js/index.html",
    "revision": "5a38c67ba9a0e0725fbbdb3335b95eb9"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "25d285bfab43a6b9822fe79f3a5896cf"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "a610688a4fc62400463b6de452d36431"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "95d8307d941ea37851875bfce361bbcd"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "4cb3906de5dfc9e17fd37f83bb271951"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "2e2313488a443900d6ce5ceabb1b5e9b"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "de74ac1bc67a0a56c3da2d5f52aebece"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "cd5dee57c11f1f1dcdb9545250d77ae0"
  },
  {
    "url": "timeline/index.html",
    "revision": "903499a080e799e603644810db2fc2a7"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "547d6ed031e45b3725e55316e32240f1"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "00e39e717b9f9774c4c6041d7a84981a"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "2eee75b6c9c666bfe69794e1fd998581"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "2deaf2004728688e234788357af16788"
  },
  {
    "url": "生活分享/life.html",
    "revision": "8642a3a3bd7d73e4e6c5905fb6914ee0"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
