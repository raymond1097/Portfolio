import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from "path"

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    }
  }
})

//This snippet in a Vite config sets up a **path alias** so you can import modules more cleanly. The `resolve` section tells Vite how to handle module paths, and the `alias` part maps `"@"` to the project’s `src` folder using `path.resolve(__dirname, "./src")`. This means instead of writing long relative paths like `import Button from '../../components/Button'`, you can simply write `import Button from '@/components/Button'`, making your imports shorter, cleaner, and easier to maintain across your project.
