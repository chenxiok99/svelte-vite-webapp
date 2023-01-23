/**
 * 新建一个页面（/src/pages/pageName/）
 * Usage: npm run create-page pageName
 */
const fs = require("fs");
const path = require("path");
const childProcess = require("child_process");

const baseName = process.argv[2];
if (!baseName) {
  console.error("请指定新页面的名称。");
  process.exit(1);
}

const pageName = `${baseName}`;
const src = path.join(process.cwd(), "/src");
const pageDir = path.join(src, `pages/${pageName}`);
const tmplDir = path.join(process.cwd(), "/template");

if (!fs.existsSync(pageDir)) {
  childProcess.execSync(`cp -R ${tmplDir} ${pageDir}`, { stdio: "inherit" });
  fs.readFile(`${pageDir}/index.html`, "utf8", function (err, files) {
    const result = files.replace("main.ts", `/src/pages/${pageName}/main.ts`);
    fs.writeFile(`${pageDir}/index.html`, result, "utf8", function (err) {
      if (err) {
        console.log(err);
        return;
      }
    });
  });
  console.log(`页面 ${pageName} 创建成功！`);
} else {
  console.log("页面已存在，跳过创建。");
}
