const Discord = require('discord.js');
const client = new Discord.Client();

//كود تغير البلاينج او التويتش

const adminprefix = "~";//تذكير نغير البرفكس
const devs = ['516576049778130954','492575063233658880'];//zمهم نحط الايدي
client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' '); //حقوق GMZN Host
    if (!devs.includes(message.author.id)) return;
   
if (message.content.startsWith(adminprefix + 'ply')) { //حقوق GMZN Host
  client.user.setGame(argresult);
    message.channel.sendMessage(`**${argresult} تم تغيير بلاينق البوت إلى **`) //حقوق GMZN Host
} else
 
if (message.content.startsWith(adminprefix + 'tw')) {
  client.user.setGame(argresult, "https://www.twitch.tv/idk");
    message.channel.sendMessage(`**تم تغيير تويتش البوت إلى  ${argresult}**`) //حقوق GMZN Host
}
});

client.on('message' , message => {
 
    if (message.content === "~inv") {
        message.reply(`تم ارساله الرابط في الخاص`)
        if(!message.channel.guild) return message.reply('**الآمر فقط في السيرفرات**');
     const embed = new Discord.RichEmbed()
 .setColor("RANDOM")
 .setThumbnail(client.user.avatarURL)    
 .setDescription("Add me" + `
 **
رابط البوت |
https://discordapp.com/api/oauth2/authorize?client_id=522572942807400449&permissions=0&scope=bot
 **
`);
  message.author.sendEmbed(embed);
   }
});

client.on("message", message => {
  var prefix = "*";
if (message.content === "~help") {
   message.channel.send('**تم ارسالك في الخاص** :mailbox_with_mail: ');
const embed = new Discord.RichEmbed()
    .setDescription(`
**╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱
╱╱┏╮╱╱╱╱╱╱╱╱╱╱╱
╱╱┃┃╱╱╱┳╱┓┳╭┫┳┓
▉━╯┗━╮╱┃╱┃┣┻╮┣╱
▉┈┈┈┈┃╱┻┛┛┻╱┻┻┛
▉╮┈┈┈┃╱╱╱╱╱╱╱╱╱
╱╰━━━╯╱╱╱╱╱╱╱╱╱**
**:fire: ~inv ~ لدعوة البوت ل سيرفرك :fire:**
**:fire: ~suppport ~ سيرفر البوت :fire:**
   [❖═══════ اوامر اداريه ═══════❖]
:arrow_right: ** ~uchat ~ ل فك تقفيل الشات**
:arrow_right: ** ~cchat ~ ل تقفيل الشات**
:arrow_right: ** ~umute ~ لفك الميوت الكتابي**
:arrow_right: ** ~mute ~ لعمل ميوت كتابي لحد**
:arrow_right: ** ~send ~ ل عمل تصويت ب روم محدد**
:arrow_right: ** ~bc ~ ل ارسال رساله لاعضاء السيرفر**
:arrow_right: ** ~nbc ~ ارسال رساله لاعضاء السيرفر كلام فقد**
:arrow_right: ** ~ban ~ ل تبنيد احد من السيرفر**
:arrow_right: ** ~kick ~ ل طرد احد من السيرفر**
:arrow_right: ** ~role ~ ل اعطاء احد رتبه**
:arrow_right: ** ~ccolors ~ لانشاء 200 لون **
:arrow_right: ** ~bans ~ لمعرفت عدد الاشخاص المتبندين **
:arrow_right: ** ~id ~ لعرض معلومات حسابك **
:arrow_right: ** ~clear ~ ل مسح الرسائل **
:arrow_right: ** ~avatar ~ ل عرض صورتك او التمنشن لهو**
:arrow_right: ** ~ping ~ لمعرفت سرعة البوت **
:arrow_right: ** ~warn ~ لاعطاء تحذير لاحد **   
:arrow_right: ** ~ticket ~ لعمل روم مساعده او استفسار مبينك انت والادمنيه**
:arrow_right: ** ~server ~ يعرض لك معلومات عن السيرفر **
:arrow_right: ** ~time ~ يعرض لك توقيت مصر والامرات **
   [❖═══════ معلومات ═══════❖
:globe_with_meridians: **welcome ~ لتشغيل خاصية الترحيب اصنع روم باسم**
:globe_with_meridians: **byby ~ لتشغيل خاصية المغادرة اصنع روم باسم **
:globe_with_meridians: **warns ~ اصنع روم باسم ~ ~warn ~ لتشغيل خاصية **
:globe_with_meridians: **اكتب اسم اي دولة يطلعلك العلم بتاعة:wink:  **
:globe_with_meridians: **:hammer_pick: بوت مزال تحت تطوير  :tools: **
`)
 message.author.sendEmbed(embed)
 
 }
 });

client.login(process.env.BOT_TOKEN);
