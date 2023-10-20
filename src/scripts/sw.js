import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute, Route } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';
import CONFIG from './globals/config';

// Do precaching
precacheAndRoute(self.__WB_MANIFEST);

const apiResturant = new Route(
    ({
        url
    }) => url.href.startsWith(CONFIG.API_BASE_URL),
    new StaleWhileRevalidate({
        cacheName: 'restaurant-api',
    }),
);

registerRoute(apiResturant);

self.addEventListener('install', () => {
    console.log('Service Worker: Installed');
    self.skipWaiting();
});

// self.addEventListener('push', (event) => {
//     const dataJson = event.data.json();
//     const notification = {
//         title: dataJson.title,
//         options: {
//             body: dataJson.options.body,
//             icon: dataJson.options.icon,
//             image: dataJson.options.image,
//         },
//     };
//     event.waitUntil(self.registration.showNotification(notification.title, notification.options));
// });