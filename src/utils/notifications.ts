export function requestNotificationPermission() {
  if (!("Notification" in window)) return;

  Notification.requestPermission();
}

export function showNotification(title: string, body: string) {
  if (!("Notification" in window)) return;

  if (Notification.permission !== "granted") {
    console.log("Notification permission not granted");
    return;
  }

  new Notification(title, {
    body,
    icon: "/favicon.svg",
  });
}
