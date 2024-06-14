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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923499833604";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_47_06_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDI2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDk0LFxuICAgICAgICA3OCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEwMixcbiAgICAgICAgNzIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTEzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDg0LFxuICAgICAgICAxODgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDExNixcbiAgICAgICAgMjQ1LFxuICAgICAgICA5NyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE0LFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MSxcbiAgICAgICAgMjI4LFxuICAgICAgICA5NixcbiAgICAgICAgMjU0LFxuICAgICAgICA5OCxcbiAgICAgICAgODQsXG4gICAgICAgIDkzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTksXG4gICAgICAgIDY2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDkyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDkxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTk2LFxuICAgICAgICA5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTM4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDI0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDg2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMzBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDcxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNTksXG4gICAgICAgIDEyNixcbiAgICAgICAgMTU5LFxuICAgICAgICA0MixcbiAgICAgICAgMjM2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjA4LFxuICAgICAgICAzMSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjE4LFxuICAgICAgICA2NCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgODcsXG4gICAgICAgIDcwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMTksXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkyLFxuICAgICAgICA4NixcbiAgICAgICAgMTUzLFxuICAgICAgICA5MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDE2NixcbiAgICAgICAgNjAsXG4gICAgICAgIDcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNTMsXG4gICAgICAgIDk3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOSxcbiAgICAgICAgNyxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgOTEsXG4gICAgICAgIDcxLFxuICAgICAgICAxODksXG4gICAgICAgIDIxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDcyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDUwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMzEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjIwLFxuICAgICAgICA4NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMTksXG4gICAgICAgIDYyLFxuICAgICAgICA0MSxcbiAgICAgICAgMTkzLFxuICAgICAgICA2NCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDQ0LFxuICAgICAgICA2MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE5LFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA2MCxcbiAgICAgICAgMTcwLFxuICAgICAgICAzNixcbiAgICAgICAgMTY4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjEsXG4gICAgICAgIDksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNzcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTM5LFxuICAgICAgICAzNSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgODAsXG4gICAgICAgIDQzLFxuICAgICAgICAxMDksXG4gICAgICAgIDE3MCxcbiAgICAgICAgODcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMTdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA4MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTM2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDU3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNSxcbiAgICAgICAgMTI3LFxuICAgICAgICAzMyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMjksXG4gICAgICAgIDksXG4gICAgICAgIDQ1LFxuICAgICAgICAzLFxuICAgICAgICA2MyxcbiAgICAgICAgODUsXG4gICAgICAgIDExNixcbiAgICAgICAgNTksXG4gICAgICAgIDExNixcbiAgICAgICAgMjIxLFxuICAgICAgICA1OCxcbiAgICAgICAgNTcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgODQsXG4gICAgICAgIDc4LFxuICAgICAgICA1NyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDg3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDc3LFxuICAgICAgICA1MyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA3MSxcbiAgICAgICAgNTcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMyxcbiAgICAgICAgMTgyLFxuICAgICAgICA3MCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxOSxcbiAgICAgICAgMjMsXG4gICAgICAgIDExMSxcbiAgICAgICAgOTAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDQ0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlpGRVEya3cwQk9ZV3VlZVRiZFFReDJWVVpueFRVaStJM2kyVTNYd3Nzd2s9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiA2MSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiA2MSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlpnNlZLbnBiUk9DTzdrM0RvY29TSWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMWQzOWYwMDctMDI5Yi00YjM5LTg3MTctMGM0ZDg1N2MzZDYyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5MixcbiAgICAgIDIyMyxcbiAgICAgIDcyLFxuICAgICAgMTQwLFxuICAgICAgMjA5LFxuICAgICAgMTk3LFxuICAgICAgMjAxLFxuICAgICAgMTgyLFxuICAgICAgMTgwLFxuICAgICAgMTgxLFxuICAgICAgMTY4LFxuICAgICAgMTgzLFxuICAgICAgOTgsXG4gICAgICA4LFxuICAgICAgMTc4LFxuICAgICAgOTgsXG4gICAgICAxOSxcbiAgICAgIDEzLFxuICAgICAgMzksXG4gICAgICAxMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5MSxcbiAgICAgIDIzOSxcbiAgICAgIDE0MSxcbiAgICAgIDUxLFxuICAgICAgMjIwLFxuICAgICAgMTg0LFxuICAgICAgMTk3LFxuICAgICAgMTMwLFxuICAgICAgMTkzLFxuICAgICAgMTY3LFxuICAgICAgMTM1LFxuICAgICAgMjEzLFxuICAgICAgMjA1LFxuICAgICAgMTgwLFxuICAgICAgNTIsXG4gICAgICA4MSxcbiAgICAgIDE1LFxuICAgICAgOTMsXG4gICAgICA5MyxcbiAgICAgIDIzN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJNVFpHSkVHNFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzNDk5ODMzNjA0OjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJJc21haWwgS2hhblwiLFxuICAgIFwibGlkXCI6IFwiMTMwMzgyODI1NTIxMjc0OjVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTWFsOG9nSEVKZS9zTE1HR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJUeTNEaCtHb0JSYXQ5d3Zqc1VyeFBFcWJTbGpVbGkzYTVPL3QyQ2VrRm00PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkQrOW9OempxVzZkaDJXWXNzQ293WTNMd2I2SjI1UjBHUFJ1MXI5VjQ1bWQ3Q1J1K2k5Zng2R2pkcHdDSzJlZktsTU8wejgzbnNCUng5QnMvbmpDUkJ3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImpSZ2RtNkRZNm9HcTlNZE11S2VFekFYbEhsNDEwektHNXY0ZDlheXZCWVpPd2Y0WVZJdVlPT1dVSjY1Ni9pSEY3OVJaL0hGcEJodzdqaHQxdm5aZURBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzQ5OTgzMzYwNDo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxODM2MjAxMCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUJMc1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQkxzLmpzb24iOiAie1wia2V5RGF0YVwiOlwiaTFpbkgrYUZ0UnpFdnQwTXZoUXlOZWMrTjRnS2tPN0NhZXFXTFA2RTZzaz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODk3Njk3OTg3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


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
  //readmessage:process.env.READ_MESSAGE|| "true",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "true", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "true", 
  //alwaysonline:process.env.WAPRESENCE|| "available", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
