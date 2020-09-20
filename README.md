# cypress-test-template
为了让cypress的工程的结构更加标准化，我们为此创建了模板工程，以供更多开发者快速复用。

## cypress.json
所有个性化的配置都包含在cypress.json内，相关关键字解释：
key | 含义 | 工程设置值
---|---|---
fileServerFolder | 根项目文件夹 | e2e
fixturesFolder | 包含集成测试配置文件的路径（通过false禁用） | e2e/fixtures
integrationFolder | 包含集成测试文件的路径 | e2e/specs
pluginsFile | 插件文件的路径（通过false禁用) | e2e/plugins/index.js
screenshotFolder | 截图文件的路径，包含cy.screenshot()命令 和 cypress run测试失败期间保存的屏幕截图。 | e2e/screenshots
supportFile | 在加载测试文件之前加载文件的路径（通过false禁用） | e2e/support/index.js

## 安装依赖
在工程根目录，执行如下命令：
```
npm install
```

## 打开cypress
在工程根目录，执行如下命令：
```
npm run cypress:open
```

## 运行所有Tests
```
npm run cypress:run
```
在执行完之后，会在/mochawesome-report下生成测试报告(.html)
