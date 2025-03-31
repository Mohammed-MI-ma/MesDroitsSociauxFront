import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import AutoImport from "unplugin-auto-import/vite";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    // Tailwind CSS integration
    tailwindcss(),
    // React plugin with SWC for fast builds
    react(),
    // Auto-imports for Ant Design and React Icons
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
            "message",
            "Steps",
            "theme",
            "Flex",
            "Input",
            "DatePicker",
            "Form",
            "FloatButton",
            "Popover",
            "message",
            "Result",
            "Breadcrumb",
            "Badge",
          ],
          "react-icons/io": [
            "IoIosWoman",
            "IoIosArrowForward",
            "IoMdInformationCircle",
            "IoIosAdd",
            "IoTrashBin",
          ],
          "react-icons/md": ["MdModeEdit"],
          "react-icons/fa6": ["FaRegUser"],
          "react-icons/lu": ["LuBaby"],
          "react-icons/fa": ["FaTrash", "FaFacebook"],
        },
      ],
      dts: "src/auto-imports.d.ts", // Generates a TypeScript declaration file for auto-imports
    }),
    // Vite PWA plugin configuration for offline caching
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
          { src: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
          { src: "/icon-512x512.png", sizes: "512x512", type: "image/png" },
        ],
      },

      // Workbox configuration for caching strategy
      workbox: {
        globPatterns: ["**/*.{js,css,html,png,svg,woff2}"],

        runtimeCaching: [
          // Cache the home page ("/") using CacheFirst strategy
          {
            urlPattern: /^\/$/,
            handler: "CacheFirst",
          },
          // Cache JavaScript files using CacheFirst strategy
          {
            urlPattern: /^.*\.js$/,
            handler: "CacheFirst",
          },
          // Cache CSS files using CacheFirst strategy
          {
            urlPattern: /^.*\.css$/,
            handler: "CacheFirst",
          },
          // Cache font files (woff2, ttf) using CacheFirst strategy
          {
            urlPattern: /^.*\.(woff2|ttf)$/,
            handler: "CacheFirst",
          },
          // Cache images (e.g., png, jpeg, gif) using CacheFirst strategy
          {
            urlPattern: ({ request }) => request.destination === "image",
            handler: "CacheFirst",
            options: {
              cacheName: "images-cache",
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 30 * 24 * 60 * 60, // Cache for 30 days
              },
            },
          },
          // Cache fonts using CacheFirst strategy
          {
            urlPattern: ({ request }) => request.destination === "font",
            handler: "CacheFirst",
            options: {
              cacheName: "fonts-cache",
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 30 * 24 * 60 * 60, // Cache for 30 days
              },
            },
          },
        ],
      },
    }),
  ],
  // Public directory for static assets like icons, fonts, etc.
  publicDir: "public",
});
