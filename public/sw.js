self.addEventListener("install", () => {
  console.log("Service Worker Installed");
  self.skipWaiting();
});

self.addEventListener("activate", () => {
  console.log("Service Worker Active");
});

self.addEventListener("push", function (event) {
  const data = event.data ? event.data.json() : {};

  self.registration.showNotification(data.title || "Notification", {
    body: data.body || "New update available",
    icon: "/favicon.svg",
  });
});
