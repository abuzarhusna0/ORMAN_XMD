
const fs = require('fs')
const chalk = require('chalk')
// setting bot
global.owner = "923130948950"
global.ownername = "AbuXar-46"
global.botname = "ORMAN-XMD"
global.author = "256704291969"
global.xprefix = '.'
global.autostatus = true 
global.Public = true 
global.egg = "15"
global.loc = "1"
global.domain = ""
global.apikey = ""
global.capikey = ""
global.mess = {
    owner: '`command reserved for owner only<\>`',
 prem: '`command reserved for premium only<\>`',
    admin: '`command reserved for admins only<\>`',
    group: '`feature for group only<\>`',
    done: '`Done ✓`',
    error: 'Error !',
    success: 'Succes •'
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.green.bold(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
