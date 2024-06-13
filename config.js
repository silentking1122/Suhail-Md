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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923436062975";




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
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_04_04_06_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTI2LFxuICAgICAgICA2NCxcbiAgICAgICAgMTcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNjksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDk2LFxuICAgICAgICA0NyxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDc5LFxuICAgICAgICA3NCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMSxcbiAgICAgICAgMzQsXG4gICAgICAgIDcxLFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDc0LFxuICAgICAgICA4OSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDU5LFxuICAgICAgICAxODcsXG4gICAgICAgIDE2MixcbiAgICAgICAgODcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDExMixcbiAgICAgICAgMTM4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDUxLFxuICAgICAgICA3MyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDcxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTIwLFxuICAgICAgICA0OSxcbiAgICAgICAgMjU0LFxuICAgICAgICA3NixcbiAgICAgICAgMSxcbiAgICAgICAgM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNDcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTcyLFxuICAgICAgICA5OSxcbiAgICAgICAgNzgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNDMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA1NyxcbiAgICAgICAgMyxcbiAgICAgICAgMTUxLFxuICAgICAgICA4LFxuICAgICAgICA3NCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDU3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE3LFxuICAgICAgICA0MCxcbiAgICAgICAgNzQsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzcsXG4gICAgICAgIDYyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDg4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDU0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTg0LFxuICAgICAgICAzMSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxODUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTYyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMzYsXG4gICAgICAgIDYzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgODEsXG4gICAgICAgIDE0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNjcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA3NSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMTksXG4gICAgICAgIDcxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjE5LFxuICAgICAgICA3NyxcbiAgICAgICAgMTI0LFxuICAgICAgICA0MyxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDMzLFxuICAgICAgICA4MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTUwLFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NSxcbiAgICAgICAgMTYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjA5LFxuICAgICAgICAxODUsXG4gICAgICAgIDUxLFxuICAgICAgICA1NyxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMTksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMzksXG4gICAgICAgIDExMixcbiAgICAgICAgMjA0LFxuICAgICAgICAxOSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxODYsXG4gICAgICAgIDI1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTc3LFxuICAgICAgICA5NSxcbiAgICAgICAgMjA3LFxuICAgICAgICA2MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA5MFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDExNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1NSxcbiAgICAgICAgNDMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjA4LFxuICAgICAgICAzOCxcbiAgICAgICAgMjIxLFxuICAgICAgICA5NSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDYwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyOSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDM4LFxuICAgICAgICA2MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE2LFxuICAgICAgICA3MyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNjksXG4gICAgICAgIDExLFxuICAgICAgICA2MCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNTMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjM0LFxuICAgICAgICA0MCxcbiAgICAgICAgMTUxLFxuICAgICAgICA1MyxcbiAgICAgICAgODEsXG4gICAgICAgIDM4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTY1LFxuICAgICAgICAxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDY2LFxuICAgICAgICA0MyxcbiAgICAgICAgOTIsXG4gICAgICAgIDExMSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDc2LFxuICAgICAgICA1MCxcbiAgICAgICAgMTEsXG4gICAgICAgIDI2LFxuICAgICAgICA5MSxcbiAgICAgICAgMCxcbiAgICAgICAgMTQzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIitiaFkwTiszb0EzbXBYNWpmVjI4YWx3Uk5jMTNkM0RobGtlZ0JmaDhXVXM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzNDM2MDYyOTc1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI5QzRGNDNDQjdCOTVBOUNEMDBBRDlBMjlCQUY5MzJDNVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTgyNTE0NTdcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjM0MzYwNjI5NzVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkU4NDUzRDQ5MjdCNEM3RUNDMkY0NTRGNTQ5NjYyMzU3XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxODI1MTQ1N1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJJTVhqc0N6aVJPQ3JwRXhnLWM2WTF3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjQ5MzRmMGNmLTQ1OTktNDNlZS04ZmRlLTJkZGU4ZDUxNjQ2YVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjksXG4gICAgICAyNDgsXG4gICAgICAyMzUsXG4gICAgICA2OSxcbiAgICAgIDE1MCxcbiAgICAgIDI2LFxuICAgICAgNzIsXG4gICAgICAxOTksXG4gICAgICA4NSxcbiAgICAgIDE0NCxcbiAgICAgIDg0LFxuICAgICAgOTUsXG4gICAgICAzLFxuICAgICAgMSxcbiAgICAgIDE5OSxcbiAgICAgIDE3MixcbiAgICAgIDIzLFxuICAgICAgMTM0LFxuICAgICAgODIsXG4gICAgICA3OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDgsXG4gICAgICAyMDAsXG4gICAgICAyMjksXG4gICAgICAxNCxcbiAgICAgIDI0MSxcbiAgICAgIDI0NCxcbiAgICAgIDUyLFxuICAgICAgMTAwLFxuICAgICAgMTgsXG4gICAgICA0MyxcbiAgICAgIDIwMCxcbiAgICAgIDEyOSxcbiAgICAgIDYzLFxuICAgICAgMjI3LFxuICAgICAgNTgsXG4gICAgICAxOTUsXG4gICAgICAxMzMsXG4gICAgICAyMDIsXG4gICAgICA0NixcbiAgICAgIDExM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIzQUhTQ05ES1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzNDM2MDYyOTc1OjIwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNzgzMzE4NDA0NTg5NTA6MjBAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi4pqU77iP8J+SnvCdkIwt8J2QjPCdkIDwnZCL8J2QiPCdkIot8J2QivCdkIfwnZCA8J2QjfCfkp7impTvuI9cIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJeXl4YXNFRUxmZnFiTUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlR2RXRqQjQvalhJWEJ5VFg1SlNZdCtjaEgwZFlGZC90RW5OZ3VZWXQxa2M9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiOTVaaFQzUjA3NXd2TVN6d0ZPN2ZZRkN1TUFpZzZicVUxSXNOTmQrNTRNWmQrNXMvZTdhRHlVdk5vd0dQL045NW1vcE9FbjFrZWh3WWxRUkFDYlNqRFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwidHNnTEtxZnVpWkdyS2NvWU82ZzdDR1dxOEUyNHZhVm43WVcwT1JSSDQyTngxaHpHTXhUZWVHMWFvM0FzNVN5TWtST3BibUVVZUJjTjBRQmwyQWFtZ2c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzNDM2MDYyOTc1OjIwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNzFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxODI1MTQ1MSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUZmUFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRmZQLmpzb24iOiAie1wia2V5RGF0YVwiOlwidHNhWVBvVkgwQklkMW5kNGhPeUd6dTk5NFp4OEZhang3ZUhTWjJkR2cvUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMTY1MDU2MjY3LFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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
