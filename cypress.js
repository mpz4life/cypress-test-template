const cypress = require('cypress')
const fse = require('fs-extra')
const { merge } = require('mochawesome-merge')
const generator = require('mochawesome-report-generator')
const reportPath = 'mochawesome-report'

async function runTests() {
  await fse.remove(reportPath)
  const { totalFailed } = await cypress.run()
  const jsonReport = await merge()
  await generator.create(jsonReport)
  process.exit(totalFailed)
}

runTests()