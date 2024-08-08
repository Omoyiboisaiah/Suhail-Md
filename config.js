const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "9060944505";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_49_08_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICA5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNTEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTQxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxOTksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjA3LFxuICAgICAgICA3NyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgOCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjI0LFxuICAgICAgICA0MixcbiAgICAgICAgNjgsXG4gICAgICAgIDg3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NCxcbiAgICAgICAgMTczLFxuICAgICAgICAxOTIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjAyLFxuICAgICAgICAzNCxcbiAgICAgICAgMzcsXG4gICAgICAgIDMyLFxuICAgICAgICA4MixcbiAgICAgICAgNDUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMzUsXG4gICAgICAgIDEwMixcbiAgICAgICAgNzYsXG4gICAgICAgIDE2MixcbiAgICAgICAgNyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMSxcbiAgICAgICAgMTI0LFxuICAgICAgICAzMixcbiAgICAgICAgNjgsXG4gICAgICAgIDMyLFxuICAgICAgICA3MCxcbiAgICAgICAgOTksXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMTMxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDI2LFxuICAgICAgICA4NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjE2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDExOCxcbiAgICAgICAgNDUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE2MixcbiAgICAgICAgNTMsXG4gICAgICAgIDI0MixcbiAgICAgICAgNzksXG4gICAgICAgIDYxLFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDQ3LFxuICAgICAgICAxODQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMzMsXG4gICAgICAgIDU2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTQsXG4gICAgICAgIDksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjM5LFxuICAgICAgICA0NSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTUyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIzNixcbiAgICAgICAgODgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTc2LFxuICAgICAgICAzNyxcbiAgICAgICAgMTA1LFxuICAgICAgICA4MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDI2LFxuICAgICAgICAzNCxcbiAgICAgICAgMTQyLFxuICAgICAgICA0OSxcbiAgICAgICAgODIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMyxcbiAgICAgICAgNDIsXG4gICAgICAgIDI4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjUwLFxuICAgICAgICA4MSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEwLFxuICAgICAgICA4MixcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE5LFxuICAgICAgICA2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDU3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTQ0LFxuICAgICAgICA4MCxcbiAgICAgICAgODUsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDc0LFxuICAgICAgICAyNCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjI3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTE3LFxuICAgICAgICA3NyxcbiAgICAgICAgNTQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDQsXG4gICAgICAgIDY1LFxuICAgICAgICAzNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMTBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEwNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQzLFxuICAgICAgICA2OSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMSxcbiAgICAgICAgNixcbiAgICAgICAgMTY4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDgxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjExLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgODgsXG4gICAgICAgIDc2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMDksXG4gICAgICAgIDExMixcbiAgICAgICAgMTMzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDk2LFxuICAgICAgICAxMjksXG4gICAgICAgIDUwLFxuICAgICAgICA5NyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDc1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNixcbiAgICAgICAgMTY1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNixcbiAgICAgICAgMTI2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgODcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxOCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIsXG4gICAgICAgIDIzLFxuICAgICAgICAxNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTE2LFxuICBcImFkdlNlY3JldEtleVwiOiBcImxNU3lYbmI4U3hPKzJVaTF3U1JHeFJXcnd5N2d6UW4rbThTRHFxL2s2OWc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInNqSVBhczlRVEVPcW1weHpuTUFZSWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMTU5MjczMDctNzE4Ni00M2JmLTlhMWItNzQ0ZTBlNTFjZGI3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3OCxcbiAgICAgIDIzNyxcbiAgICAgIDcwLFxuICAgICAgMTE4LFxuICAgICAgMTc2LFxuICAgICAgMTQ2LFxuICAgICAgMjgsXG4gICAgICAxMDAsXG4gICAgICAzOCxcbiAgICAgIDgwLFxuICAgICAgMTk1LFxuICAgICAgMjAxLFxuICAgICAgMTg2LFxuICAgICAgMjIsXG4gICAgICAyNTQsXG4gICAgICAzOCxcbiAgICAgIDExLFxuICAgICAgMTg3LFxuICAgICAgMTM4LFxuICAgICAgMTc1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQ5LFxuICAgICAgODUsXG4gICAgICAxMTQsXG4gICAgICAyMjksXG4gICAgICA3NCxcbiAgICAgIDE2LFxuICAgICAgMTMsXG4gICAgICA3NixcbiAgICAgIDEzNixcbiAgICAgIDE2NyxcbiAgICAgIDE5MSxcbiAgICAgIDIwLFxuICAgICAgMTgxLFxuICAgICAgMjIxLFxuICAgICAgMTk1LFxuICAgICAgMzMsXG4gICAgICAxMSxcbiAgICAgIDk2LFxuICAgICAgMzQsXG4gICAgICAxNDBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSDhMQ0pXNURcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwNjA5NDQ1MDU6MzdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJPa2V6aVwiLFxuICAgIFwibGlkXCI6IFwiOTg1OTk2MzEzNDc3NzQ6MzdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSW00aHZZRkVNeTQwYlVHR0FZZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJvakV1RFU0a3FSbHNTL1A4dWJyZ0lGL0tQVllQUENWckVFV2FnT1R3SFV3PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInFzemlwdlFzQ1k3TkxLWlgrbHhyaVErdlFHQS9Ta2dtY0RmWmN1eFJiOS84b1l2ZDJJL3N0dlllZGp6WVJ3eU9YRlltY1FldkltajExVXFFOWp1N0J3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInpmZVArMWpraTFTb1NFUWpnampOWXRiN29ZSkJ1OGh2Vy9jMFNXYzFlMGh0NndUYWFqSjdNTEJjM3gxWVh6ZWlwN09nUUN2WWRCM0R0QnA2NEtPdEJBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwNjA5NDQ1MDU6MzdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDc2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjMwOTYxNDUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKWk9cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUpaTy5qc29uIjogIntcImtleURhdGFcIjpcImlMRGp1M1l4czJMR3JiQ2VmRGpjeE54NU9tNEs4bW5aa3ZGN0svT0gvNjQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTU4OTc0NjY5MixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE3MTg4MzMwMzU0XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
