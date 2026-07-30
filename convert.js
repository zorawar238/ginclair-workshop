import puppeteer from 'puppeteer';
import { readFileSync, writeFileSync } from 'fs';
import { marked } from 'marked';

async function convert() {
  const md = readFileSync('Detailed_CRO_Audit.md', 'utf8');
  const htmlContent = marked.parse(md);
  
  const fullHtml = `
  <!DOCTYPE html>
  <html>
  <head>
    <style>
      body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; padding: 40px; color: #241008; line-height: 1.6; }
      h1, h2, h3 { color: #241008; }
      h1 { font-size: 2.5em; border-bottom: 2px solid #FF644E; padding-bottom: 10px; }
      h2 { font-size: 1.8em; margin-top: 40px; }
      h3 { font-size: 1.4em; color: #FF644E; }
      li { margin-bottom: 10px; }
      hr { border: 0; border-top: 1px solid #ccc; margin: 40px 0; }
    </style>
  </head>
  <body>
    ${htmlContent}
  </body>
  </html>
  `;

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setContent(fullHtml, { waitUntil: 'networkidle0' });
  await page.pdf({ path: 'Detailed_CRO_Audit.pdf', format: 'A4', margin: { top: '20px', bottom: '20px', left: '20px', right: '20px' } });
  await browser.close();
  console.log('PDF Generated!');
}

convert().catch(console.error);
