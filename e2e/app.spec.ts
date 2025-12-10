import { test, expect } from '@playwright/test';

test.describe('App Home Page', () => {
  test.beforeEach(async ({ page }) => {
    // Playwright 会启动浏览器去访问这个地址
    // 确保 playwright.config.ts 里配置了 baseURL，或者写完整地址 'http://localhost:5173'
    await page.goto('/');
  });

  test('should load critical UI elements @smoke', async ({ page }) => {
    // 验证页面标题
    await expect(page).toHaveTitle('My React Application');

    // 验证文本可见
    await expect(page.getByText('React TypeScript Template')).toBeVisible();
  });

  test('should display all feature items', async ({ page }) => {
    // 验证主标题
    await expect(page.getByText('React TypeScript Template')).toBeVisible();

    // 验证特性列表
    await expect(page.getByText('⚡ Vite + React 18 + TypeScript')).toBeVisible();
    await expect(page.getByText('🎨 Tailwind CSS')).toBeVisible();
    await expect(page.getByText('🧪 Vitest + Testing Library + AI PR Review')).toBeVisible();
  });

  test('should have working navigation buttons', async ({ page }) => {
    // 查找并验证按钮存在
    const learnMoreButton = page.getByRole('link', { name: /learn more/i });
    const viewGitHubButton = page.getByRole('link', { name: /view on github/i });

    await expect(learnMoreButton).toBeVisible();
    await expect(viewGitHubButton).toBeVisible();

    // 验证按钮有正确的 href 属性
    await expect(learnMoreButton).toHaveAttribute('href', '/docs');
    await expect(viewGitHubButton).toHaveAttribute('href', expect.stringContaining('github.com'));
  });

  test('should have proper semantic structure', async ({ page }) => {
    // 验证页面有 main 标签
    const main = page.locator('main');
    await expect(main).toBeVisible();

    // 验证有标题结构
    const headings = page.getByRole('heading');
    await expect(headings).toHaveCount(await headings.count());
    expect(await headings.count()).toBeGreaterThan(0);
  });

  test('should be responsive', async ({ page }) => {
    // 测试桌面视口
    await page.setViewportSize({ width: 1920, height: 1080 });
    await expect(page.getByText('React TypeScript Template')).toBeVisible();

    // 测试平板视口
    await page.setViewportSize({ width: 768, height: 1024 });
    await expect(page.getByText('React TypeScript Template')).toBeVisible();

    // 测试移动视口
    await page.setViewportSize({ width: 375, height: 667 });
    await expect(page.getByText('React TypeScript Template')).toBeVisible();
  });

  test('should pass basic accessibility checks @a11y', async ({ page }) => {
    // 验证页面有 lang 属性
    const html = page.locator('html');
    await expect(html).toHaveAttribute('lang');

    // 验证所有图片都有 alt 属性
    const images = page.locator('img');
    const imageCount = await images.count();
    
    for (let i = 0; i < imageCount; i++) {
      const img = images.nth(i);
      await expect(img).toHaveAttribute('alt');
    }
  });
});
