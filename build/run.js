const childProcess = require('child_process')
const path = require('path')

const filePath = {
  vue2: path.join(__dirname, '../vue2-web'),
  vue3: path.join(__dirname, '../vue3-web'),
  react: path.join(__dirname, '../react-web'),
  service: path.join(__dirname, '../service'),
}

function runChild() {
  Object.values(filePath).forEach(item => {
    childProcess.spawn(`cd ${item} && npm start`, {
      stdio: 'inherit',
      shell: true
    })
  })
}

runChild()