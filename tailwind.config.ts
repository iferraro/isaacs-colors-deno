import { type Config } from "tailwindcss";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "armorbearer": "#6F4B27",
        "wet-sand": "#AEA98B",
      },
    },
  },
} satisfies Config;
