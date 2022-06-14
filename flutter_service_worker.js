'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "07aafe4910561ca94f389181260c18ba",
".git/config": "56ce9b2138ba5f38d99ef52ca9e28fae",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "c3ba713080c6f9bedf959b4dc598e8a9",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ff180b6288829b12ff5313543fc83ec8",
".git/logs/refs/heads/master": "ff180b6288829b12ff5313543fc83ec8",
".git/logs/refs/remotes/origin/master": "6562c19c39ee185f53c5141d25714ae3",
".git/objects/33/db5752b152679a0eddc287ad937ed4fb4c6d72": "cdfb56e63073f1370a3d8941ad50c0fb",
".git/objects/49/791a2ca62b2cda9f2ad1e44e0a123a6874eef9": "6892ac9cda08ee720a0cada03f04bba3",
".git/objects/51/405b274ee160c25436ca5e8ff8e8f85159432b": "e2c3f5cbc7c2d583df4954e6b70426eb",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/b5/74cfca77e29d5b03866e11823e23dc8b58b771": "9dee787eaf3abe4d2673c1708487271c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/refs/heads/master": "e410b163c1f01d9a99bccf448bb29197",
".git/refs/remotes/origin/master": "e410b163c1f01d9a99bccf448bb29197",
"assets/AssetManifest.json": "07cce8171b07b1ec13583de2939275ed",
"assets/assets/fonts/NotoSerif-Bold.ttf": "cd68b227ac0046292ae4975cf76ad561",
"assets/assets/fonts/NotoSerif.ttf": "ceeb2cf5944c44d51fd3e6b3733e3aa5",
"assets/assets/fonts/Roboto-Bold.ttf": "9ece5b48963bbc96309220952cda38aa",
"assets/assets/fonts/Roboto-Regular.ttf": "f36638c2135b71e5a623dca52b611173",
"assets/assets/icons/bug.png": "848324e6949084122bbc69bee3bafd0e",
"assets/assets/icons/dog.png": "70e57a5e83a526d433dbbe16bc4a9ac6",
"assets/assets/icons/food.png": "5f3131e146d3e3df1ad5c04ce6cbacb1",
"assets/assets/icons/latex.png": "22a52e7150899d3259babf689f7fb76a",
"assets/assets/icons/medicine.png": "6e79aba2e709f2eb6aa0ae1b039324a6",
"assets/assets/icons/mold.png": "4b1cfa8cdbe0c7fee5dd44df7f7cc882",
"assets/assets/icons/pollen.png": "af0b07758ff9cd4c1d0cae263a79a2ae",
"assets/assets/icons/previous.png": "e4c0e91772c5a477999a4fff2adfa50d",
"assets/assets/images/allergy.jpg": "dc43c1220054c3692778dbe9e100dd40",
"assets/assets/images/ambulance.png": "111b6609b664c6fcaef14913e9ee64bb",
"assets/assets/images/ambulancecall.jpg": "3fc4349378c260634d417a95316a9346",
"assets/assets/images/anaphylaxis.png": "4af28e9ee551efd9d5723271d41a6192",
"assets/assets/images/animasyon.gif": "82cea05cbc5a24d2142aab8a39958ce1",
"assets/assets/images/appointment.jpg": "da156b216166697c00cd988fd52c05b4",
"assets/assets/images/background.jpg": "7ac5c1ac67013cd60afe6d5f274ecbb2",
"assets/assets/images/clinic.png": "cf5071bf748d2eb59c740a4127ed20c7",
"assets/assets/images/covid.jpg": "6d633d0faad42f00b562134801c72b67",
"assets/assets/images/covidsymptom.jpg": "08eeaf4b9bc7774b9649a27a20584221",
"assets/assets/images/doctor.png": "2fcd70100c01031b129fe2dca549a9fb",
"assets/assets/images/doctors.png": "1d0fb223947ba05c3364a6f89a4d48f3",
"assets/assets/images/elderlycare.jpg": "6b1040dc0ed341fada5bf470a4daeb21",
"assets/assets/images/hospital.png": "1ca03b1222f84ddeaa8505d8b183ced4",
"assets/assets/images/login.png": "260b8e8b441a86d84ecd6274cb8878cf",
"assets/assets/images/loginanimasyon.gif": "e50ec01d79f8ae3fb0e3e033e26620ad",
"assets/assets/images/loginbackground.jpg": "3f0a6af8d2843ce15e898468f6a511d6",
"assets/assets/images/mainbackground.jpg": "027f7b162460a63acedf90f466d01f10",
"assets/assets/images/notes.png": "131438d6276f5c459b559ccab55722a3",
"assets/assets/images/prescription.png": "e6a209c9b5690959a2c1e56ee8bfce1b",
"assets/assets/images/register.png": "fc5503d3f6c6bc0d3b6c836f3b635815",
"assets/assets/images/report.jpg": "3d98e6ea918a90253dbf1a53cf9d639f",
"assets/assets/images/report.png": "d650bcaaa9671c5f14668d271145f971",
"assets/assets/images/time.png": "a1a3c5cf0e7e495db531a4d0aff22697",
"assets/assets/images/user.png": "bb3ab8390dc34307def06528a9d03f27",
"assets/FontManifest.json": "591c28ef29630118dc3f5628ec95d146",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "e6460a243262f3cd048ee2809d2fb5f2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "491ccf6200f56f137f9f06110d8e16d1",
"/": "491ccf6200f56f137f9f06110d8e16d1",
"main.dart.js": "93772151fa1c4895986b84d4756a13f7",
"manifest.json": "c7ba89ce9cd5749d3ca7694ca4d4ac86",
"version.json": "98d196b3bc3072cf5e91561fe6d47995"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
