---
description: how to deploy the LearnHub Grid application
---

To deploy this application to a production environment:

1. **Verify the Build**:
   Run the build script locally to ensure there are no production errors.
   ```bash
   npm run build
   ```

2. **Choose a Hosting Provider**:
   Since this is a static Vite application, the most efficient platforms are:
   - **Vercel** (Highly recommended for React/Vite)
   - **Netlify**
   - **GitHub Pages**

3. **Deploy via CLI (Vercel Example)**:
   // turbo
   ```bash
   npx vercel@latest
   ```
   Follow the prompts to link your account and deploy. Use `./dist` as the directory to upload.

4. **Connect Your Domain**:
   - Go to your domain provider (e.g., Namecheap, GoDaddy).
   - In the "Settings" of your hosting provider, find the "Domains" section.
   - Add your custom domain.
   - Update your DNS records:
     - **A Record**: Point `@` to the IP provided by your host.
     - **CNAME**: Point `www` to the alias provided by your host.

5. **Configure Base Path (If needed)**:
   If deploying to a subfolder (like GitHub Pages), update `vite.config.ts`:
   ```typescript
   export default defineConfig({
     base: '/your-repo-name/',
     // ...
   })
   ```
