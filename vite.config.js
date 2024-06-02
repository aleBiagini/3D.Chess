// vite.config.js
import { defineConfig } from 'vite';
import fs from 'fs';
import path from 'path';

export default defineConfig({
  server: {
    https: {
      key: fs.readFileSync(path.resolve('./certs/localhost-key.pem')),
      cert: fs.readFileSync(path.resolve('./certs/localhost.pem'))
    }
  }
});

