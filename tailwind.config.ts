
import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        skyx: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          500: "#0ea5e9"
        },
        navyx: {
          700: "#1d4ed8",
          900: "#0b1b44"
        }
      }
    }
  },
  plugins: []
} satisfies Config;
