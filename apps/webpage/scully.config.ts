import { ScullyConfig } from '@scullyio/scully';
export const config: ScullyConfig = {
  puppeteerLaunchOptions: {
    args: ['--headless'],
  },
  projectRoot: './apps/webpage/src',
  projectName: 'webpage',
  outDir: './dist/static',
  routes: {}
};
