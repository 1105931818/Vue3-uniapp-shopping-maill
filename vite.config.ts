import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import path from 'path';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
            uni(), 
            createSvgIconsPlugin({
                iconDirs: [path.resolve(process.cwd(), 'src/static/svgs')],
                symbolId: 'icon-[dir]-[name]',
            }),
          ],
});
