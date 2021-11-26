function run(ssh, command, path) {
  return new Promise((resolve, reject) => {
    ssh.execCommand(command, {
      cwd: path
    }).then(res => {
      if(res.stderr) {
        reject(console.error('命令执行发生错误: ' + res.stderr))
        process.exit()
      } else {
        resolve(console.log(command + '\n ------- ' + '执行完成 -------'))
      }
    })
  })
}

module.exports = run