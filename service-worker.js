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
    "revision": "c50ae356d826a58b4514b78a2228b304"
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
    "url": "assets/js/12.6a9e1917.js",
    "revision": "d4bcbb43e9a1d243c289435e0f560648"
  },
  {
    "url": "assets/js/13.d3059b5b.js",
    "revision": "e6f24b5c2efd47346c6c52e9a6d160a6"
  },
  {
    "url": "assets/js/14.e91c67d0.js",
    "revision": "7d55bfe1b322cd36c30635a3c3217c5e"
  },
  {
    "url": "assets/js/15.8ebc98d2.js",
    "revision": "cc36bde366dc3a231d5493ec6472a294"
  },
  {
    "url": "assets/js/16.1b585f3a.js",
    "revision": "47a28c5d8ed94f77e0d7cfc029cbf001"
  },
  {
    "url": "assets/js/17.79a44560.js",
    "revision": "68e21a8b800caa000b89214f35b6becf"
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
    "url": "assets/js/app.1bbe2d49.js",
    "revision": "a94296f49fa22fba6148d06a00ed901c"
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
    "revision": "61616893545b7a6958839b0d0fee8acc"
  },
  {
    "url": "categories/java/index.html",
    "revision": "a6aa63539ac5aeeb1397370f8ebf19c9"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "960a2b5c0c8e7e9b51ec991006dbe769"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "8ffcd4c04670d272f116545b4e2296c9"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "42acdd87ee2bb04204720dd120ff0ed0"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "343a6af15a92337243d1e06bf10cf33c"
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
    "revision": "233375289ef30bdc85f4e1f80543b08f"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "edd8fa3d9e1ad2a89e50ba6496a2dbaf"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "e5c1295113360851dd7c11f270bfc202"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "50c1ec0af611acef123b166396fc1c64"
  },
  {
    "url": "tags/js/index.html",
    "revision": "0b7ee132dc50f36ffe05b24947463a92"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "fa794a2374933a067b2af42a8530caa5"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "1cb1263a16aacbf621a606a81a898d3b"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "2454522fd58489292cf80dd837221104"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "a68273471d393caa206cb30807ae85d0"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "2d953a2f2d4e02d6a9dfb9537255e700"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "16c3dc3e4a2f9abf0c6d5eabadea5bfc"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "286c6882da2d2977aba0aa3624a1e20d"
  },
  {
    "url": "timeline/index.html",
    "revision": "413dc956be4a7fae4d16149d1d732c8d"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "917426c763093664474f07ca6011373a"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "85d864118f55c405496ce06fe20c4bff"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "7c2ba6bf646952af57825c618b0e216d"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "e5e0a05d761c9ddabf0646fd871bedfa"
  },
  {
    "url": "生活分享/life.html",
    "revision": "e57533b8ff7f234a9ad3b0b97c70afa1"
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
