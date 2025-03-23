import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import AutoImport from "unplugin-auto-import/vite";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    AutoImport({
      imports: [
        {
          antd: [
            "Avatar",
            "ConfigProvider",
            "Space",
            "Button",
            "Tooltip",
            "Spin",
            "Dropdown",
            "Modal",
            "Radio",
            "Group",
            "Progress",
            "Collapse",
          ],
          "react-icons/io": ["IoIosArrowForward", "IoMdInformationCircle"],
        },
      ],
      dts: "src/auto-imports.d.ts", // Generates a TypeScript declaration file
    }),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: true, // Enable PWA in development mode
      },
      manifest: {
        name: "Mes droits sociaux",
        short_name: "DrSociaux",
        description: "A React Vite PWA",
        theme_color: "#ffffff",
        background_color: "#ffffff",
        display: "standalone",
        icons: [
          {
            src: "/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },

      workbox: {
        runtimeCaching: [
          {
            urlPattern: ({ request }) => request.destination === "image",
            handler: "CacheFirst",
            options: {
              cacheName: "images-cache",
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
              },
            },
          },
        ],
      },
    }),
  ],
  publicDir: "public",
});
