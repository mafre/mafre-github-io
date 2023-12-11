import path from "path";
import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
			"openfl": path.resolve (__dirname, "node_modules/openfl/lib/openfl")
		},
  },
});