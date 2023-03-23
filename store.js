require('./settings')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs');
const os = require('os')
const util = require('util');
const chalk = require('chalk');
const axios = require('axios');
const moment = require('moment-timezone');
const ms = toMs = require('ms');
const { Configuration, OpenAIApi } = require("openai");
const FormData = require("form-data");
const { fromBuffer } = require('file-type')
const { fetchBuffer } = require("./lib/myfunc2")
const fetch = require('node-fetch')
const { exec, spawn, execSync } = require("child_process")
const fsx = require('fs-extra')
const { igApi, getSessionId } = require('insta-fetcher');
let ig = new igApi("csrftoken=6wrPrUbsa05Csm9wlqxAOSqRwxxscjD;rur=16771\05427758921939\0541695476019:01f7994241f5e244ccf1bb676853d91b4f281e385e564f6c99a3592b27b0a39dada825e8;mid=Yy21jQALAAEmUl5E0beHHz_eVvyI;ds_user_id=27758921939;sessionid=27758921939%3ASGdS1WkMZToRfs%3A12%3AAYe5Sp23sp78pv0PnIRL6X-ySJdCDpe4uxbuJxtcxw;ig_did=09B76BA7-2D56-42E5-89BB-3584A9EAD69B");
ig.setCookie("csrftoken=6wrPrUbsa05Csm9wlqxAOSqRwxxscjD;rur=16771\05427758921939\0541695476019:01f7994241f5e244ccf1bb676853d91b4f281e385e564f6c99a3592b27b0a39dada825e8;mid=Yy21jQALAAEmUl5E0beHHz_eVvyI;ds_user_id=27758921939;sessionid=27758921939%3ASGdS1WkMZToRfs%3A12%3AAYe5Sp23sp78pv0PnIRL6X-ySJdCDpe4uxbuJxtcxw;ig_did=09B76BA7-2D56-42E5-89BB-3584A9EAD69B");

// STALKER
const { stalkff } = require("./STALKER/stalk-ff");
const { stalkml } = require("./STALKER/stalk-ml");

const { smsg, fetchJson, getBuffer } = require('./lib/simple')
const { 
  updateResponList,
  delResponList,
  isAlreadyResponListGroup,
  sendResponList,
  isAlreadyResponList,
  getDataResponList,
  addResponList,
  isSetClose,
    addSetClose,
    removeSetClose,
    changeSetClose,
    getTextSetClose,
    isSetDone,
    addSetDone,
    removeSetDone,
    changeSetDone,
    getTextSetDone,
    isSetLeft,
    addSetLeft,
    removeSetLeft,
    changeSetLeft,
    getTextSetLeft,
    isSetOpen,
    addSetOpen,
    removeSetOpen,
    changeSetOpen,
    getTextSetOpen,
    isSetProses,
    addSetProses,
    removeSetProses,
    changeSetProses,
    getTextSetProses,
    isSetWelcome,
    addSetWelcome,
    removeSetWelcome,
    changeSetWelcome,
    getTextSetWelcome,
    addSewaGroup,
    getSewaExpired,
    getSewaPosition,
    expiredCheck,
    checkSewaGroup,
    addPay,
    updatePay
} = require("./lib/store")

async function getGroupAdmins(participants){
        let admins = []
        for (let i of participants) {
            i.admin === "superadmin" ? admins.push(i.id) :  i.admin === "admin" ? admins.push(i.id) : ''
        }
        return admins || []
}
const _prem = require("./lib/premium");
let premium = JSON.parse(fs.readFileSync('./database/premium.json'));
let ntilinkall =JSON.parse(fs.readFileSync('./database/antilinkall.json'));
let nttoxic = JSON.parse(fs.readFileSync('./database/antitoxic.json'));
let bad = JSON.parse(fs.readFileSync('./src/bad.json'));

function TelegraPh (Path) {
	return new Promise (async (resolve, reject) => {
		if (!fs.existsSync(Path)) return reject(new Error("File not Found"))
		try {
			const form = new FormData();
			form.append("file", fs.createReadStream(Path))
			const data = await  axios({
				url: "https://telegra.ph/upload",
				method: "POST",
				headers: {
					...form.getHeaders()
				},
				data: form
			})
			return resolve("https://telegra.ph" + data.data[0].src)
		} catch (err) {
			return reject(new Error(String(err)))
		}
	})
}

function msToDate(mse) {
               temp = mse
               days = Math.floor(mse / (24 * 60 * 60 * 1000));
               daysms = mse % (24 * 60 * 60 * 1000);
               hours = Math.floor((daysms) / (60 * 60 * 1000));
               hoursms = mse % (60 * 60 * 1000);
               minutes = Math.floor((hoursms) / (60 * 1000));
               minutesms = mse % (60 * 1000);
               sec = Math.floor((minutesms) / (1000));
               return days + " Days " + hours + " Hours " + minutes + " Minutes";
            }
            
const isUrl = (url) => {
    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
}

const getRandom = (ext) => {
	return `${Math.floor(Math.random() * 10000)}${ext}`
}

const runtime = function(seconds) {
	seconds = Number(seconds);
	var d = Math.floor(seconds / (3600 * 24));
	var h = Math.floor(seconds % (3600 * 24) / 3600);
	var m = Math.floor(seconds % 3600 / 60);
	var s = Math.floor(seconds % 60);
	var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
	var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
	var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
	var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
	return dDisplay + hDisplay + mDisplay + sDisplay;
}

const jsonformat = (string) => {
	return JSON.stringify(string, null, 2)
}

async function UploadDulu(medianya, options = {}) {
const { ext } = await fromBuffer(medianya) || options.ext
        var form = new FormData()
        form.append('file', medianya, 'tmp.'+ext)
        let jsonnya = await fetch('https://tenaja.zeeoneofc.repl.co/upload', {
                method: 'POST',
                body: form
        })
        .then((response) => response.json())
        return jsonnya
}

const tanggal = (numer) => {
	myMonths = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
				myDays = ['Minggu','Senin','Selasa','Rabu','Kamis','Jum’at','Sabtu']; 
				var tgl = new Date(numer);
				var day = tgl.getDate()
				bulan = tgl.getMonth()
				var thisDay = tgl.getDay(),
				thisDay = myDays[thisDay];
				var yy = tgl.getYear()
				var year = (yy < 1000) ? yy + 1900 : yy; 
				const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
				let d = new Date
				let locale = 'id'
				let gmt = new Date(0).getTime() - new Date('1 January 1970').getTime()
				let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
				
				return`${thisDay}, ${day} - ${myMonths[bulan]} - ${year}`
}

module.exports = alpha = async (alpha, m, chatUpdate, store, opengc, antilink, antiwame, antilink2, antiwame2, set_welcome_db, set_left_db, set_proses, set_done, set_open, set_close, sewa, _welcome, _left, db_respon_list, ) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : '' //omzee
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = /^[°•π÷×¶∆£¢€¥®™�✓_=|~!?#/$%^&.+-,\\\©^]/.test(body)
        const command = body.replace(prefix, "").trim().split(/ +/).shift().toLowerCase();
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await alpha.decodeJid(alpha.user.id)
        const isCreator = ["6281315252010@s.whatsapp.net",botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const isMedia = /image|video|sticker|audio/.test(mime)
        const groupMetadata = m.isGroup ? await alpha.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const from = mek.key.remoteJid
        const AntiLinkAll = m.isGroup ? ntilinkall.includes(from) : false
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
        const isPremium = _prem.checkPremiumUser(m.sender, premium)
        const messagesD = body.slice(0).trim().split(/ +/).shift().toLowerCase()
        const antiToxic = m.isGroup ? nttoxic.includes(from) : false
      	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
      	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
      	const isSewa = checkSewaGroup(m.chat, sewa)
        const isAntiLink = antilink.includes(m.chat) ? true : false
        const isAntiWame = antiwame.includes(m.chat) ? true : false  
        const isAntiLink2 = antilink2.includes(m.chat) ? true : false
        const isAntiWame2 = antiwame2.includes(m.chat) ? true : false  
const isWelcome = _welcome.includes(m.chat)
const isLeft = _left.includes(m.chat)
        const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')

const reply = (text) =>{
  m.reply(text)
}
async function getGcName(groupID) {
            try {
                let data_name = await alpha.groupMetadata(groupID)
                return data_name.subject
            } catch (err) {
                return '-'
            }
        }
        if (m.message) {
            alpha.readMessages([m.key])
            console.log(chalk.black(chalk.bgWhite('[ CMD ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(m.isGroup ? pushname : 'Chat Pribadi', m.chat))
        }
if(m.isGroup){
    expiredCheck(alpha, sewa)
    }
        function pickRandom(list) {
        	return list[Math.floor(Math.random() * list.length)]
        }
      if (isAntiLink) {
        if (budy.match(`chat.whatsapp.com`)) {
        m.reply(`*「 ANTI LINK 」*\n\nLink grup detected, maaf kamu akan di kick !`)
        if (!isBotAdmins) return m.reply(`Upsss... gajadi, bot bukan admin`)
        let gclink = (`https://chat.whatsapp.com/`+await alpha.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return m.reply(`Upsss... gak jadi, untung link gc sendiri`)
        if (isAdmins) return m.reply(`Upsss... gak jadi, kasian adminnya klo di kick`)
        if (isCreator) return m.reply(`Upsss... gak jadi, kasian owner ku klo di kick`)
        if (m.key.fromMe) return m.reply(`Upsss... gak jadi, kasian owner ku klo di kick`)
await alpha.sendMessage(m.chat, {
               delete: {
                  remoteJid: m.chat,

                  fromMe: false,
                  id: m.key.id,
                  participant: m.key.participant
               }
            })
        alpha.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }
      if (isAntiLink2) {
        if (budy.match(`chat.whatsapp.com`)) {
        if (!isBotAdmins) return //m.reply(`Upsss... gajadi, bot bukan admin`)
        let gclink = (`https://chat.whatsapp.com/`+await alpha.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return //m.reply(`Upsss... gak jadi, untung link gc sendiri`)
        if (isAdmins) return //m.reply(`Upsss... gak jadi, kasian adminnya klo di kick`)
        if (isCreator) return //m.reply(`Upsss... gak jadi, kasian owner ku klo di kick`)
        if (m.key.fromMe) return //m.reply(`Upsss... gak jadi, kasian owner ku klo di kick`)
await alpha.sendMessage(m.chat, {
               delete: {
                  remoteJid: m.chat,

                  fromMe: false,
                  id: m.key.id,
                  participant: m.key.participant
               }
            })
        }
        }
      if (isAntiWame) {
        if (budy.match(`wa.me/`)) {
        m.reply(`*「 ANTI WA ME 」*\n\nWa Me detected, maaf kamu akan di kick !`)
        if (!isBotAdmins) return m.reply(`Upsss... gajadi, bot bukan admin`)
        if (isAdmins) return m.reply(`Upsss... gak jadi, kasian adminnya klo di kick`)
        if (isCreator) return m.reply(`Upsss... gak jadi, kasian owner ku klo di kick`)
        if (m.key.fromMe) return m.reply(`Upsss... gak jadi, kasian owner ku klo di kick`)
await alpha.sendMessage(m.chat, {
               delete: {
                  remoteJid: m.chat,

                  fromMe: false,
                  id: m.key.id,
                  participant: m.key.participant
               }
            })        
        alpha.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }
      if (isAntiWame2) {
        if (budy.match(`wa.me/`)) {
        if (!isBotAdmins) return //m.reply(`Upsss... gajadi, bot bukan admin`)
        if (isAdmins) return //m.reply(`Upsss... gak jadi, kasian adminnya klo di kick`)
        if (isCreator) return //m.reply(`Upsss... gak jadi, kasian owner ku klo di kick`)
        if (m.key.fromMe) return //m.reply(`Upsss... gak jadi, kasian owner ku klo di kick`)
await alpha.sendMessage(m.chat, {
               delete: {
                  remoteJid: m.chat,

                  fromMe: false,
                  id: m.key.id,
                  participant: m.key.participant
               }
            })        
        }
        }
      if (isAntiWame) {
        if (budy.includes((`Wa.me/`) || (`Wa.me/`))) {
        m.reply(`*「 ANTI WA ME 」*\n\nWa Me detected, maaf kamu akan di kick !`)
        if (!isBotAdmins) return m.reply(`Upsss... gajadi, bot bukan admin`)
        if (isAdmins) return m.reply(`Upsss... gak jadi, kasian adminnya klo di kick`)
        if (isCreator) return m.reply(`Upsss... gak jadi, kasian owner ku klo di kick`)
        if (m.key.fromMe) return m.reply(`Upsss... gak jadi, kasian owner ku klo di kick`)
        alpha.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }
        
        if (isAlreadyResponList((m.isGroup ? m.chat: botNumber), body, db_respon_list)) {
            var get_data_respon = getDataResponList((m.isGroup ? m.chat: botNumber), body, db_respon_list)
            if (get_data_respon.isImage === false) {
                alpha.sendMessage(m.chat, { text: sendResponList((m.isGroup ? m.chat: botNumber), body, db_respon_list) }, {
                    quoted: m
                })
            } else {
                alpha.sendMessage(m.chat, { image: await getBuffer(get_data_respon.image_url), caption: get_data_respon.response }, {
                    quoted: m
                })
            }
        }
        
        _prem.expiredCheck(alpha, premium)

        //antilink all by xeon
        if (AntiLinkAll)
        if (budy.includes("https://")){
        	if (!isBotAdmins) (bvl)
        bvl = `\`\`\`ã€Œ Link Detected ã€\`\`\`\n\nAdmin has sent a link, admin is free to send any linkðŸ˜‡`
        if (isAdmins) return m.reply(bvl)
        if (m.key.fromMe) return m.reply(bvl)
        if (isCreator) return m.reply(bvl)
        await alpha.sendMessage(m.chat,
        {
        	delete: {
        	remoteJid: m.chat,
        fromMe: false,
        id: m.key.id,
        participant: m.key.participant
        }
        })
        alpha.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        alpha.sendMessage(from, {text:`\`\`\`ã€Œ Link Detected ã€\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
        } else {
        	}
        
        //anti bad words by xeon
        if (antiToxic)
        if (bad.includes(messagesD)) {
        	tos = ['Hey, watch your mouth','Never been taught how to speak?','Stop being toxic my friendðŸ¤¢','Dont be toxicðŸ¦„']
        sin =  tos[Math.floor(Math.random() * (tos.length))]
        m.reply(sin)
        if (m.text) {
        	bvl = `\`\`\`ã€Œ Bad Word Detected ã€\`\`\`\n\nYou are using bad word but you are an admin that's why i won't kick youðŸ˜‡`
        if (isAdmins) return m.reply(bvl)
        if (m.key.fromMe) return m.reply(bvl)
        if (isCreator) return m.reply(bvl)
        await alpha.sendMessage(m.chat,
        {
        	delete: {
        	remoteJid: m.chat,
        fromMe: false,
        id: m.key.id,
        participant: m.key.participant
        }
        })
        alpha.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        alpha.sendMessage(from, {text:`\`\`\`ã€Œ Bad Word Detected ã€\`\`\`\n\n@${m.sender.split("@")[0]} was kicked because of using bad words in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})}
        }
        
        // Respon Cmd with media
        
        switch(command) {
         case 'owner':
         case 'creator': {
            alpha.sendContact(m.chat, global.owner, m)
         }
         break
         case 'menu': case 'help': case '?': {
         alpha.sendMessage(m.chat, {image: pp_bot, caption: require("./settings").helpMenu(pushname)}, {quoted:m})
          }
          break
		case 'list': case 'store':{
            if (db_respon_list.length === 0) return m.reply(`Belum ada list message di database`)
            if (!isAlreadyResponListGroup((m.isGroup ? m.chat: botNumber), db_respon_list)) return m.reply(`Belum ada list message yang terdaftar di group/chat ini`)
            var arr_rows = [];
            for (let x of db_respon_list) {
                if (x.id === (m.isGroup ? m.chat: botNumber)) {
                    arr_rows.push({
                        title: x.key,
                        rowId: x.key
                    })
                }
            }
            var listMsg = {
                text: `Halo @${m.sender.split("@")[0]}, silahkan pilih item yang kamu butuhkan`,
                buttonText: 'Klik Disini',
                footer: `${footer_text}`,
                mentions: [m.sender],
                sections: [{
                    title: (m.isGroup ? groupName : namabot), rows: arr_rows
                }]
            }
            alpha.sendMessage(m.chat, listMsg)
			}
            break
			case 'dellist':{
	       // if (!m.isGroup) return m.reply('Fitur Khusus Group!')
			if (!(m.isGroup? isAdmins : isCreator)) return m.reply('Fitur Khusus admin & owner!')
            if (db_respon_list.length === 0) return m.reply(`Belum ada list message di database`)
            if (!text) return m.reply(`Gunakan dengan cara ${prefix + command} *key*\n\n_Contoh_\n\n${prefix + command} hello`)
            if (!isAlreadyResponList((m.isGroup? m.chat: botNumber), q, db_respon_list)) return m.reply(`List respon dengan key *${q}* tidak ada di database!`)
            delResponList((m.isGroup? m.chat: botNumber), q, db_respon_list)
            reply(`Sukses delete list message dengan key *${q}*`)
			}
            break
			case'addlist':{
            //if (!m.isGroup) return m.reply('Fitur Khusus Group!')
			if (!(m.isGroup? isAdmins : isCreator)) return m.reply('Fitur Khusus admin & owner!')
            var args1 = q.split("|")[0]
            var args2 = q.split("|")[1]
            if (!q.includes("|")) return m.reply(`Gunakan dengan cara ${command} *key|response*\n\n_Contoh_\n\n${command} tes|apa`)
            if (isAlreadyResponList((m.isGroup ? m.chat :botNumber), args1, db_respon_list)) return m.reply(`List respon dengan key : *${args1}* sudah ada di chat ini.`)
            if(m.isGroup){
            if (/image/.test(mime)) {
                let media = await alpha.downloadAndSaveMediaMessage(quoted)
                let mem = await TelegraPh(media)
                        addResponList(m.chat, args1, args2, true, mem, db_respon_list)
                        reply(`Sukses set list message dengan key : *${args1}*`)
                        if (fs.existsSync(media)) fs.unlinkSync(media)
            } else {
                addResponList(m.chat, args1, args2, false, '-', db_respon_list)
                reply(`Sukses set list message dengan key : *${args1}*`)
            }
            } else {
            if (/image/.test(mime)) {
                let media = await alpha.downloadAndSaveMediaMessage(quoted)
                let mem = await TelegraPh(media)
                        addResponList(botNumber, args1, args2, true, mem, db_respon_list)
                        reply(`Sukses set list message dengan key : *${args1}*`)
                        if (fs.existsSync(media)) fs.unlinkSync(media)
            } else {
                addResponList(botNumber, args1, args2, false, '-', db_respon_list)
                reply(`Sukses set list message dengan key : *${args1}*`)
            }
            }
			}
            break
			case 'updatelist': case 'update':{
   	    // if (!m.isGroup) return m.reply('Fitur Khusus Group!')
			if (!(m.isGroup? isAdmins : isCreator)) return m.reply('Fitur Khusus admin & owner!')
            var args1 = q.split("|")[0]
            var args2 = q.split("|")[1]
            if (!q.includes("|")) return m.reply(`Gunakan dengan cara ${command} *key|response*\n\n_Contoh_\n\n${command} tes|apa`)
            if (!isAlreadyResponListGroup((m.isGroup? m.chat: botNumber), db_respon_list)) return m.reply(`Maaf, untuk key *${args1}* belum terdaftar di chat ini`)
            if (/image/.test(mime)) {
                let media = await alpha.downloadAndSaveMediaMessage(quoted)
                let mem = await TelegraPh(media)
                        updateResponList((m.isGroup? m.chat: botNumber), args1, args2, true, mem, db_respon_list)
                        reply(`Sukses update respon list dengan key *${args1}*`)
                        if (fs.existsSync(media)) fs.unlinkSync(media)
            } else {
                updateResponList((m.isGroup? m.chat: botNumber), args1, args2, false, '-', db_respon_list)
                reply(`Sukses update respon list dengan key *${args1}*`)
            }
			}
            break
case 'jeda': {
            if (!m.isGroup) return m.reply('Fitur Khusus Group!')
			if (!isAdmins) return m.reply('Fitur Khusus admin!')
            if (!isBotAdmins) return m.reply("Jadikan bot sebagai admin terlebih dahulu")
            if (!text) return m.reply(`kirim ${command} waktu\nContoh: ${command} 30m\n\nlist waktu:\ns = detik\nm = menit\nh = jam\nd = hari`)
            opengc[m.chat] = { id: m.chat, time: Date.now() + toMS(text) }
            fs.writeFileSync('./database/opengc.json', JSON.stringify(opengc))
            alpha.groupSettingUpdate(m.chat, "announcement")
            .then((res) => reply(`Sukses, group akan dibuka ${text} lagi`))
            .catch((err) => reply('Error'))
            }
            break
case 'tambah':{
	if (!text.includes('+')) return m.reply(`Gunakan dengan cara ${command} *angka* + *angka*\n\n_Contoh_\n\n${command} 1+2`)
arg = args.join(' ')
atas = arg.split('+')[0]
bawah = arg.split('+')[1]
            var nilai_one = Number(atas)
            var nilai_two = Number(bawah)
            reply(`${nilai_one + nilai_two}`)}
            break
        case 'kurang':{
            if (!text.includes('-')) return m.reply(`Gunakan dengan cara ${command} *angka* - *angka*\n\n_Contoh_\n\n${command} 1-2`)
arg = args.join(' ')
atas = arg.split('-')[0]
bawah = arg.split('-')[1]
            var nilai_one = Number(atas)
            var nilai_two = Number(bawah)
            reply(`${nilai_one - nilai_two}`)}
            break
        case 'kali':{
            if (!text.includes('*')) return m.reply(`Gunakan dengan cara ${command} *angka* * *angka*\n\n_Contoh_\n\n${command} 1*2`)
arg = args.join(' ')
atas = arg.split('*')[0]
bawah = arg.split('*')[1]
            var nilai_one = Number(atas)
            var nilai_two = Number(bawah)
            reply(`${nilai_one * nilai_two}`)}
            break
        case 'bagi':{
            if (!text.includes('/')) return m.reply(`Gunakan dengan cara ${command} *angka* / *angka*\n\n_Contoh_\n\n${command} 1/2`)
arg = args.join(' ')
atas = arg.split('/')[0]
bawah = arg.split('/')[1]
            var nilai_one = Number(atas)
            var nilai_two = Number(bawah)
            reply(`${nilai_one / nilai_two}`)}
            break
		case 'setproses': case 'setp':{
		if (!(m.isGroup? isAdmins : isCreator)) return m.reply('Fitur Khusus admin!')
            if (!text) return m.reply(`Gunakan dengan cara ${prefix + command} *teks*\n\n_Contoh_\n\n${prefix + command} Pesanan sedang di proses ya @user\n\n- @user (tag org yg pesan)\n- @pesanan (pesanan)\n- @jam (waktu pemesanan)\n- @tanggal (tanggal pemesanan) `)
            if (isSetProses((m.isGroup? m.chat: botNumber), set_proses)) return m.reply(`Set proses already active`)
            addSetProses(text, (m.isGroup? m.chat: botNumber), set_proses)
            reply(`✅ Done set proses!`)
		}
            break
        case 'changeproses': case 'changep':{
		if (!(m.isGroup? isAdmins : isCreator)) return m.reply('Fitur Khusus admin!')
            if (!text) return m.reply(`Gunakan dengan cara ${prefix + command} *teks*\n\n_Contoh_\n\n${prefix + command} Pesanan sedang di proses ya @user\n\n- @user (tag org yg pesan)\n- @pesanan (pesanan)\n- @jam (waktu pemesanan)\n- @tanggal (tanggal pemesanan) `)
            if (isSetProses((m.isGroup? m.chat: botNumber), set_proses)) {
                changeSetProses(text, (m.isGroup? m.chat: botNumber), set_proses)
                m.reply(`Sukses ubah set proses!`)
            } else {
                addSetProses(text, (m.isGroup? m.chat: botNumber), set_proses)
                m.reply(`Sukses ubah set proses!`)
            }
        }
            break
        case 'delsetproses': case 'delsetp':{
		if (!(m.isGroup? isAdmins : isCreator)) return m.reply('Fitur Khusus admin!')
            if (!isSetProses((m.isGroup? m.chat: botNumber), set_proses)) return m.reply(`Belum ada set proses di gc ini`)
            removeSetProses((m.isGroup? m.chat: botNumber), set_proses)
            reply(`Sukses delete set proses`)
        }
            break
		case 'setdone':{
		if (!(m.isGroup? isAdmins : isCreator)) return m.reply('Fitur Khusus admin!')
			if (!text) return m.reply(`Gunakan dengan cara ${prefix + command} *teks*\n\n_Contoh_\n\n${prefix + command} Done @user\n\n- @user (tag org yg pesan)\n- @pesanan (pesanan)\n- @jam (waktu pemesanan)\n- @tanggal (tanggal pemesanan) `)
            if (isSetDone((m.isGroup? m.chat: botNumber), set_done)) return m.reply(`Udh set done sebelumnya`)
            addSetDone(text, (m.isGroup? m.chat: botNumber), set_done)
            reply(`Sukses set done!`)
            break
            }
           case 'changedone': case 'changed':{
		if (!(m.isGroup? isAdmins : isCreator)) return m.reply('Fitur Khusus admin!')
            if (!text) return m.reply(`Gunakan dengan cara ${prefix + command} *teks*\n\n_Contoh_\n\n${prefix + command} Done @user\n\n- @user (tag org yg pesan)\n- @pesanan (pesanan)\n- @jam (waktu pemesanan)\n- @tanggal (tanggal pemesanan) `)
            if (isSetDone((m.isGroup? m.chat: botNumber), set_done)) {
                changeSetDone(text, (m.isGroup? m.chat: botNumber), set_done)
                m.reply(`Sukses ubah set done!`)
            } else {
                addSetDone(text, (m.isGroup? m.chat: botNumber), set_done)
                m.reply(`Sukses ubah set done!`)
            }
           }
            break
        case 'delsetdone': case 'delsetd':{
		if (!(m.isGroup? isAdmins : isCreator)) return m.reply('Fitur Khusus admin!')
            if (!isSetDone((m.isGroup? m.chat: botNumber), set_done)) return m.reply(`Belum ada set done di gc ini`)
            removeSetDone((m.isGroup? m.chat: botNumber), set_done)
            m.reply(`Sukses delete set done`)
        }
            break
            case"p": case"proses":{
		if (!(m.isGroup? isAdmins : isCreator)) return m.reply('Fitur Khusus admin!')
			if (!m.quoted) return m.reply('Reply pesanan yang akan proses')
            let tek = m.quoted ? quoted.text : quoted.text.split(args[0])[1]
            let proses = `「 *TRANSAKSI PENDING* 」\n\n\`\`\`📆 TANGGAL : @tanggal\n⌚ JAM     : @jam\n✨ STATUS  : Pending\`\`\`\n\n📝 Catatan :\n@pesanan\n\nPesanan @user sedang di proses!`
            const getTextP = getTextSetProses((m.isGroup? m.chat: botNumber), set_proses);
            if (getTextP !== undefined) {
            	var anunya = (getTextP.replace('@pesanan', tek ? tek : '-').replace('@user', '@' + m.quoted.sender.split("@")[0]).replace('@jam', time).replace('@tanggal', tanggal(new Date())).replace('@user', '@' + m.quoted.sender.split("@")[0]))
                alpha.sendTextWithMentions(m.chat, anunya, m)
            } else {
   alpha.sendTextWithMentions(m.chat, (proses.replace('@pesanan', tek ? tek : '-').replace('@user', '@' + m.quoted.sender.split("@")[0]).replace('@jam', time).replace('@tanggal', tanggal(new Date())).replace('@user', '@' + m.quoted.sender.split("@")[0])), m)
            }
            }
            break
            case "d": case'done':{
		if (!(m.isGroup? isAdmins : isCreator)) return m.reply('Fitur Khusus admin!')
			if (!m.quoted) return m.reply('Reply pesanan yang telah di proses')
            let tek = m.quoted ? quoted.text : quoted.text.split(args[0])[1]
            let sukses = `「 *TRANSAKSI BERHASIL* 」\n\n\`\`\`📆 TANGGAL : @tanggal\n⌚ JAM     : @jam\n✨ STATUS  : Berhasil\`\`\`\n\nTerimakasih @user Next Order ya🙏`            
            const getTextD = getTextSetDone((m.isGroup? m.chat: botNumber), set_done);
            if (getTextD !== undefined) {
            	var anunya = (getTextD.replace('@pesanan', tek ? tek : '-').replace('@user', '@' + m.quoted.sender.split("@")[0]).replace('@jam', time).replace('@tanggal', tanggal(new Date())).replace('@user', '@' + m.quoted.sender.split("@")[0]))
            	alpha.sendTextWithMentions(m.chat, anunya, m)
               } else {
               	alpha.sendTextWithMentions(m.chat, (sukses.replace('@pesanan', tek ? tek : '-').replace('@user', '@' + m.quoted.sender.split("@")[0]).replace('@jam', time).replace('@tanggal', tanggal(new Date())).replace('@user', '@' + m.quoted.sender.split("@")[0])), m)
               }
   }
   break
			case'welcome':{
            if (!m.isGroup) return m.reply('Fitur Khusus Group!')
			if (!isAdmins) return m.reply('Fitur Khusus admin!')
            if (args[0] === "on") {
               if (isWelcome) return m.reply(`Udah on`)
                _welcome.push(m.chat)
                fs.writeFileSync('./database/welcome.json', JSON.stringify(_welcome, null, 2))
                reply('Sukses mengaktifkan welcome di grup ini')
            } else if (args[0] === "off") {
               if (!isWelcome) return m.reply(`Udah off`)
                let anu = _welcome.indexOf(m.chat)
               _welcome.splice(anu, 1)
                fs.writeFileSync('./database/welcome.json', JSON.stringify(_welcome, null, 2))
                reply('Sukses menonaktifkan welcome di grup ini')
            } else {
                reply(`Kirim perintah ${prefix + command} on/off\n\nContoh: ${prefix + command} on`)
			}
			}
            break
        case'left': case 'goodbye':{
            if (!m.isGroup) return m.reply('Fitur Khusus Group!')
			if (!isAdmins) return m.reply('Fitur Khusus admin!')
            if (args[0] === "on") {
               if (isLeft) return m.reply(`Udah on`)
                _left.push(m.chat)
                fs.writeFileSync('./database/left.json', JSON.stringify(_left, null, 2))
                reply('Sukses mengaktifkan goodbye di grup ini')
            } else if (args[0] === "off") {
               if (!isLeft) return m.reply(`Udah off`)
                let anu = _left.indexOf(m.chat)
               _left.splice(anu, 1)
                fs.writeFileSync('./database/welcome.json', JSON.stringify(_left, null, 2))
                reply('Sukses menonaktifkan goodbye di grup ini')
            } else {
                reply(`Kirim perintah ${prefix + command} on/off\n\nContoh: ${prefix + command} on`)
            }
        }
            break
        	case'setwelcome':{
            if (!m.isGroup) return m.reply('Fitur Khusus Group!')
			if (!isCreator && !isAdmins) return m.reply('Fitur Khusus owner!')
            if (!text) return m.reply(`Gunakan dengan cara ${command} *teks_welcome*\n\n_Contoh_\n\n${command} Halo @user, Selamat datang di @group`)
            if (isSetWelcome(m.chat, set_welcome_db)) return m.reply(`Set welcome already active`)
            addSetWelcome(text, m.chat, set_welcome_db)
           reply(`Successfully set welcome!`)
        	}
            break
        case'changewelcome':{
            if (!m.isGroup) return m.reply('Fitur Khusus Group!')
			if (!isCreator && !isAdmins) return m.reply('Fitur Khusus owner!')
            if (!text) return m.reply(`Gunakan dengan cara ${command} *teks_welcome*\n\n_Contoh_\n\n${command} Halo @user, Selamat datang di @group`)
            if (isSetWelcome(m.chat, set_welcome_db)) {
               changeSetWelcome(q, m.chat, set_welcome_db)
                reply(`Sukses change set welcome teks!`)
            } else {
              addSetWelcome(q, m.chat, set_welcome_db)
                reply(`Sukses change set welcome teks!`)
            }}
            break
        case'delsetwelcome':{
            if (!m.isGroup) return m.reply('Fitur Khusus Group!')
			if (!isCreator && !isAdmins) return m.reply('Fitur Khusus owner!')
            if (!isSetWelcome(m.chat, set_welcome_db)) return m.reply(`Belum ada set welcome di sini..`)
            removeSetWelcome(m.chat, set_welcome_db)
           reply(`Sukses delete set welcome`)
        }
            break
        case'setleft':{
            if (!m.isGroup) return m.reply('Fitur Khusus Group!')
			if (!isCreator && !isAdmins) return m.reply('Fitur Khusus owner!')
            if (!text) return m.reply(`Gunakan dengan cara ${prefix + command} *teks_left*\n\n_Contoh_\n\n${prefix + command} Halo @user, Selamat tinggal dari @group`)
            if (isSetLeft(m.chat, set_left_db)) return m.reply(`Set left already active`)
           addSetLeft(q, m.chat, set_left_db)
            reply(`Successfully set left!`)
        }
            break
        case'changeleft':{
            if (!m.isGroup) return m.reply('Fitur Khusus Group!')
			if (!isCreator && !isAdmins) return m.reply('Fitur Khusus owner!')
            if (!text) return m.reply(`Gunakan dengan cara ${prefix + command} *teks_left*\n\n_Contoh_\n\n${prefix + command} Halo @user, Selamat tinggal dari @group`)
            if (isSetLeft(m.chat, set_left_db)) {
               changeSetLeft(q, m.chat, set_left_db)
                reply(`Sukses change set left teks!`)
            } else {
                addSetLeft(q, m.chat, set_left_db)
                reply(`Sukses change set left teks!`)
            }
        }
            break
        case'delsetleft':{
            if (!m.isGroup) return m.reply('Fitur Khusus Group!')
			if (!isCreator && !isAdmins) return m.reply('Fitur Khusus owner!')
            if (!isSetLeft(m.chat, set_left_db)) return m.reply(`Belum ada set left di sini..`)
            removeSetLeft(m.chat, set_left_db)
            reply(`Sukses delete set left`)
        }
            break
case'antiwame':{
            if (!m.isGroup) return m.reply('Fitur Khusus Group!')
				if (!isAdmins) return m.reply('Fitur Khusus admin!')
                if (!isBotAdmins) return m.reply("Jadikan bot sebagai admin terlebih dahulu")
             if (args[0] === "on") {
                if (isAntiWame) return m.reply(`Udah aktif`)
                antiwame.push(m.chat)
                fs.writeFileSync('./database/antiwame.json', JSON.stringify(antiwame, null, 2))
                reply('Successfully Activate Antiwame In This Group')
            } else if (args[0] === "off") {
                if (!isAntiWame) return m.reply(`Udah nonaktif`)
                let anu = antiwame.indexOf(m.chat)
                antiwame.splice(anu, 1)
                fs.writeFileSync('./database/antiwame.json', JSON.stringify(antiwame, null, 2))
                reply('Successfully Disabling Antiwame In This Group')
            } else {
                reply(`Kirim perintah ${prefix + command} on/off\n\nContoh: ${prefix + command} on`)
            }
}
            break
			case'open': case'buka':{
				if (!m.isGroup) return m.reply('Fitur Khusus Group!')
				if (!isAdmins) return m.reply('Fitur Khusus admin!')
				if (!isBotAdmins) return m.reply("Bot bukan admin")
				alpha.groupSettingUpdate(m.chat, 'not_announcement')
				const textOpen = await getTextSetOpen(m.chat, set_open);
				reply(textOpen || `Sukses mengizinkan semua peserta dapat mengirim pesan ke grup ini`)
			}
			break
case'antilink':{
            if (!m.isGroup) return m.reply('Fitur Khusus Group!')
				if (!isAdmins) return m.reply('Fitur Khusus admin!')
                if (!isBotAdmins) return m.reply("Bot harus menjadi admin")
            if (args[0] === "on") {
               if (isAntiLink) return m.reply(`Udah aktif`)
                antilink.push(m.chat)
                fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink, null, 2))
                reply('Successfully Activate Antilink In This Group')
            } else if (args[0] === "off") {
               if (!isAntiLink) return m.reply(`Udah nonaktif`)
                let anu = antilink.indexOf(m.chat)
                antilink.splice(anu, 1)
                fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink, null, 2))
                reply('Successfully Disabling Antilink In This Group')
            } else {
                reply(`Kirim perintah ${prefix + command} on/off\n\nContoh: ${prefix + command} on`)
            }
  
}
            break
case'close': case'tutup':{
            if (!m.isGroup) return m.reply('Fitur Khusus Group!')
				if (!isAdmins) return m.reply('Fitur Khusus admin!')
                if (!isBotAdmins) return m.reply("Bot bukan admin")
	    alpha.groupSettingUpdate(m.chat, 'announcement')
			const textClose = await getTextSetClose(m.chat, set_close);
		    reply(textClose || `Sukses mengizinkan hanya admin yang dapat mengirim pesan ke grup ini`)
}
		    break
         case 'h':
         case 'hidetag':{
            if (!m.isGroup) return reply("Khusus grup")
            if (!(isAdmins || isCreator)) return reply("Fitur khusus admin")
   let tek = m.quoted ? quoted.text : (text ? text : "")
            alpha.sendMessage(m.chat, {
               text: tek ,
               mentions: participants.map(a => a.id)
            }, {
            })
         }
         break
         case 'sewa':{
         	reply(sewabot)
         }
         break
         case 'donasi': case 'donate':{
         	alpha.sendMessage(m.chat, {image: qris, caption: donasi}, {quoted:m})
         }
         break
         case 'q':{
         	reply ("On Kok Kak Bot Nya")
         }
         break
         case 'kick':{
         	if (!m.isGroup) return reply("Hanya Dapat Di Gunakan Di Group")
         if (!isBotAdmins) return reply("Bot Bukan Admin")
         if (!isAdmins) return reply("Fitur Ini Hanya Dapat Di Gunakan Oleh Admin")
         let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
         await alpha.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => reply(jsonformat())).catch((err) => reply(`Mampus Gua Kick`)())
         }
         break
         case 'add': {
         	if (!m.isGroup) return reply("Hanya Dapat Di Gunakan Di Group")
         if (!isBotAdmins) return reply("Bot Bukan Admin")
         if (!isAdmins) return reply("Fitur Ini Hanya Dapat Di Gunakan Oleh Admin")
         let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
         await alpha.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
         }
         break
         case 'promote': {
         	if (!m.isGroup) return reply("Hanya Dapat Di Gunakan Di Group")
         if (!isBotAdmins) return reply("Bot Bukan Admin")
         if (!isAdmins) return reply("Fitur Ini Hanya Dapat Di Gunakan Oleh Admin")
         let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
         await alpha.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
         }
         case 'demote': {
         	if (!m.isGroup) return reply("Hanya Dapat Di Gunakan Di Group")
         if (!isBotAdmins) return reply("Bot Bukan Admin")
         if (!isAdmins) return reply("Fitur Ini Hanya Dapat Di Gunakan Oleh Admin")
         let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
         await alpha.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
         }
         break
         case 'sc':
         case 'script':{
         	teks = `「 ${global.namabot} SCRIPT 」\n\nScript: ${global.script}\nWebsite: ${global.websitex}\n\nJangan Lupa Subscribe Yt Ku Om`
         let buttons = [
         {buttonId: `owner`, buttonText: {displayText: 'Owner'}, type: 1}
         ]
         let buttonMessage = {
         	image: {url: `https://ibb.co/3dMbQWZ`},
         caption: teks,
         footer: `${namabot}`,
         buttons: buttons,
         headerType: 4,
         contextInfo:{externalAdReply:{
         	title:"JIKA MAU DONASI",
         body: "KETIK DONATE", 
         thumbnail: fs.readFileSync("image/allmenubot.jpg"),
         mediaType:1,
         mediaUrl: 'https://ibb.co/WgX7T24',
         sourceUrl: "https://ibb.co/WgX7T24"
         }}
         }
         alpha.sendMessage(m.chat, buttonMessage, { quoted: m })
         }
         break
         case 'tqto':
         case 'thanksto':{
         	reply(`╭─❒ 「 THANKS TO 」 
│○ Allah Swt.
│○ Myparents
│○ Hads
│○ VinzDev
│○ Misel
│○ Fatih Arridho
│○ Ferdiz
│○ Zeeoneofc
│○ JerOfc
│○ All Creator Bot
╰❒`)
         }
         break
         case 'setppbot':{
         	if (!m.key.fromMe && !isCreator) return reply("Fitur Ini Hanya Dapat Di Gunakan Oleh Owner")
         if (!/image/.test(mime)) return `Kirim/Reply Image Dengan Caption ${prefix + command}`
         if (/webp/.test(mime)) return `Kirim/Reply Image Dengan Caption ${prefix + command}`
         let media = await alpha.downloadAndSaveMediaMessage(qmsg)
         await alpha.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
         }
         break
         case 'jasrun':{
         	reply(`Mau jasrun ? silahkan hubungi Owner`)
         }
         break
         case 'join':{
         	if (!isCreator) return reply(`Fitur Ini Hanya Dapat Di Gunakan Oleh Owner`)
         if (!text) return reply(`Masukan Link Group !`)
         if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(`Link Eror !`)
         reply("Sedang Di Proses ⏳")
         let result = args[0].split('https://chat.whatsapp.com/')[1]
         await alpha.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
         }
         break
         case "tiktoknowm":
         case "tiktok":{
         	if (!isPremium && !isCreator) return reply(`Fitur Khusus Member Premium, Buy Premium ? Ketik .buyprem`)
         	if (!args[0]) return reply(`Kirim perintah:\n${prefix+command} link tiktok video\n\nContoh penggunaan:\n${prefix+command} https://www.tiktok.com/@zeeone.official/video/7210229439744003355?_r=1&u_code=e44201c8bfkd30&region=ID&mid=7202111782981913370&preview_pb=0&language=id&_d=e0cah74j08m7c7&share_item_id=7210229439744003355&source=h5_t&timestamp=1679216331&user_id=7148061777321133083&sec_user_id=MS4wLjABAAAA50SieLfP2YD-R-gqSE3svcPxaPqr_53pA6RKyJUkQo_AreOGrLDiVRnajBVglVIk&utm_source=copy&utm_campaign=client_share&utm_medium=android&share_iid=7160625938232592154&share_link_id=6b2fea89-b038-4919-8d58-38b4efba5b9c&share_app_id=1180&ugbiz_name=Main&ug_btm=b8727%2Cb2878`)
         if (!isUrl(args[0])  && !args[0].includes("tiktok.com")) return reply(`Kirim perintah:\n${prefix+command} link tiktok video\n\nContoh penggunaan:\n${prefix+command} https://www.tiktok.com/@zeeone.official/video/7210229439744003355?_r=1&u_code=e44201c8bfkd30&region=ID&mid=7202111782981913370&preview_pb=0&language=id&_d=e0cah74j08m7c7&share_item_id=7210229439744003355&source=h5_t&timestamp=1679216331&user_id=7148061777321133083&sec_user_id=MS4wLjABAAAA50SieLfP2YD-R-gqSE3svcPxaPqr_53pA6RKyJUkQo_AreOGrLDiVRnajBVglVIk&utm_source=copy&utm_campaign=client_share&utm_medium=android&share_iid=7160625938232592154&share_link_id=6b2fea89-b038-4919-8d58-38b4efba5b9c&share_app_id=1180&ugbiz_name=Main&ug_btm=b8727%2Cb2878`)
         reply("Sedang Di Proses ⏳")
         let res = await fetch(global.api('alfa', '/api/downloader/tiktok', {url: args[0]}, 'apikey'))
         if (!res.ok) throw await res.text()
         var result = await res.json()
         var result = result.result 
         alpha.sendMessage(from, {video:{url: result.audio}, mimetype:"video/mp4", caption: `DONE ✅`}, {quoted:m})
         }
         break
         case "tiktokaudio":{
         	if (!isPremium && !isCreator) return reply(`Fitur Khusus Member Premium, Buy Premium ? Ketik .buyprem`)
         if (!args[0]) return reply(`Kirim perintah:\n${prefix+command} link tiktok video\n\nContoh penggunaan:\n${prefix+command} https://www.tiktok.com/@zeeone.official/video/7210229439744003355?_r=1&u_code=e44201c8bfkd30&region=ID&mid=7202111782981913370&preview_pb=0&language=id&_d=e0cah74j08m7c7&share_item_id=7210229439744003355&source=h5_t&timestamp=1679216331&user_id=7148061777321133083&sec_user_id=MS4wLjABAAAA50SieLfP2YD-R-gqSE3svcPxaPqr_53pA6RKyJUkQo_AreOGrLDiVRnajBVglVIk&utm_source=copy&utm_campaign=client_share&utm_medium=android&share_iid=7160625938232592154&share_link_id=6b2fea89-b038-4919-8d58-38b4efba5b9c&share_app_id=1180&ugbiz_name=Main&ug_btm=b8727%2Cb2878`)
         if (!isUrl(args[0]) && !args[0].includes("tiktok.com")) return reply(`Kirim perintah:\n${prefix+command} link tiktok video\n\nContoh penggunaan:\n${prefix+command} https://www.tiktok.com/@zeeone.official/video/7210229439744003355?_r=1&u_code=e44201c8bfkd30&region=ID&mid=7202111782981913370&preview_pb=0&language=id&_d=e0cah74j08m7c7&share_item_id=7210229439744003355&source=h5_t&timestamp=1679216331&user_id=7148061777321133083&sec_user_id=MS4wLjABAAAA50SieLfP2YD-R-gqSE3svcPxaPqr_53pA6RKyJUkQo_AreOGrLDiVRnajBVglVIk&utm_source=copy&utm_campaign=client_share&utm_medium=android&share_iid=7160625938232592154&share_link_id=6b2fea89-b038-4919-8d58-38b4efba5b9c&share_app_id=1180&ugbiz_name=Main&ug_btm=b8727%2Cb2878`)
         reply("Sedang Di Proses ⏳")
         let res = await fetch(global.api('alfa', '/api/downloader/tiktok', {url: args[0]}, 'apikey'))
         if (!res.ok) throw await res.text()
         var result = await res.json()
         var result = result.result 
         alpha.sendMessage(from, {audio:{url: result.audio}, mimetype:"audio/mpeg", caption: `DONE ✅`}, {quoted:m})
         }
         break
         case "tiktokvn":{
         	if (!isPremium && !isCreator) return reply(`Fitur Khusus Member Premium, Buy Premium ? Ketik .buyprem`)
         	if (!args[0]) return reply(`Kirim perintah:\n${prefix+command} link tiktok video\n\nContoh penggunaan:\n${prefix+command} https://www.tiktok.com/@zeeone.official/video/7210229439744003355?_r=1&u_code=e44201c8bfkd30&region=ID&mid=7202111782981913370&preview_pb=0&language=id&_d=e0cah74j08m7c7&share_item_id=7210229439744003355&source=h5_t&timestamp=1679216331&user_id=7148061777321133083&sec_user_id=MS4wLjABAAAA50SieLfP2YD-R-gqSE3svcPxaPqr_53pA6RKyJUkQo_AreOGrLDiVRnajBVglVIk&utm_source=copy&utm_campaign=client_share&utm_medium=android&share_iid=7160625938232592154&share_link_id=6b2fea89-b038-4919-8d58-38b4efba5b9c&share_app_id=1180&ugbiz_name=Main&ug_btm=b8727%2Cb2878`)
         if (!isUrl(args[0]) && !args[0].includes("tiktok.com")) return reply(`Kirim perintah:\n${prefix+command} link tiktok video\n\nContoh penggunaan:\n${prefix+command} https://www.tiktok.com/@zeeone.official/video/7210229439744003355?_r=1&u_code=e44201c8bfkd30&region=ID&mid=7202111782981913370&preview_pb=0&language=id&_d=e0cah74j08m7c7&share_item_id=7210229439744003355&source=h5_t&timestamp=1679216331&user_id=7148061777321133083&sec_user_id=MS4wLjABAAAA50SieLfP2YD-R-gqSE3svcPxaPqr_53pA6RKyJUkQo_AreOGrLDiVRnajBVglVIk&utm_source=copy&utm_campaign=client_share&utm_medium=android&share_iid=7160625938232592154&share_link_id=6b2fea89-b038-4919-8d58-38b4efba5b9c&share_app_id=1180&ugbiz_name=Main&ug_btm=b8727%2Cb2878`)
         reply("Sedang Di Proses ⏳")
         let res = await fetch(global.api('alfa', '/api/downloader/tiktok', {url: args[0]}, 'apikey'))
         if (!res.ok) throw await res.text()
         var result = await res.json()
         var result = result.result 
         alpha.sendMessage(from, {audio:{url: result.audio}, mimetype:"audio/mpeg", ptt:true, caption: `DONE ✅`}, {quoted:m})
         }
         break
         case "patrick":
         case "popoci":
         case "sponsbob":
         case "kawan-sponsbob":
         case "awoawo":
         case "chat":
         case "benedict":
         case "dbfly":
         case "dino-kuning":
         case "doge":
         case "gojosatoru":
         case "hope-boy":
         case "jisoo":
         case "kr-robot":
         case "kucing":
         case "lonte":
         case "manusia-lidi":
         case "menjamet":
         case "meow":
         case "nicholas":
         case "tyni": {
         	reply("Sedang Di Proses ⏳")
         let res = await fetch(global.api('alfa', '/api/telegram-sticker/' + command, {}, 'apikey'))
         if (!res.ok) throw await res.text()
         let img = await res.buffer()
         let savestik = await alpha.sendImageAsSticker(m.chat, img, m, {
         	packname: packname,
         author: author
         })
         await fs.unlinkSync(savestik)
         }
         case 'ttp':
         case 'attp':{
         	if (!isPremium && !isCreator) return reply(`Fitur Khusus Member Premium, Buy Premium ? Ketik .buyprem`)
         if (!text) return reply(`Kirim perintah:\n${prefix+command} teks\n\nContoh penggunaan\n${prefix+command} saya robok anda goblok`)
         let res = await fetch(global.api('alfa', '/api/canvas/' + command, {text: text}, 'apikey'))
         if (!res.ok) throw await res.text()
         let img = await res.buffer()
         let encmedia = await alpha.sendMediaAsSticker(m.chat, img, m, {
         	packname: global.packname,
         author: author
         })
         await fs.unlinkSync(savestik)
         }
         break
         case 'linkgroup': case 'linkgc': case 'gclink': case 'grouplink':{
         	if (!m.isGroup) throw reply(`Fitur Ini Khusus Group`)
         if (!isBotAdmins) throw reply(`Bot Bukan Admin`)
         reply("Sedang Di Proses ⏳")
         let response = await alpha.groupInviteCode(m.chat)
         alpha.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nGroup Link : ${groupMetadata.subject}`, m, { detectLink: true })
         reply("Itu Link Group Nya Kak")
         }
         break
         case 'revoke':
         case 'resetlink':
         case 'resetlinkgrup':
         case 'resetlinkgroup':
         case 'resetlinkgc':{
         	if (!m.isGroup) throw reply(`Fitur Ini Khusus Group`)
         if (!isBotAdmins) throw reply(`Bot Bukan Admin`)
         if (!isAdmins && !isCreator) return m.reply(`Fitur Ini Khusus Admin !`)
         reply("Sedang Di Proses ⏳")
         alpha.groupRevokeInvite(m.chat)
         reply(`Done Reset Link Gc Nya Kak`)
         }
         break
         case 'delete': case 'del':{
         	if (!m.quoted) throw false
         let { chat, fromMe, id, isBaileys } = m.quoted
         if (!isBaileys) return 'Pesan Itu Bukan Di kirim Oleh Bot'
         alpha.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
         reply("Sukses Delete Pesan ✅")
         }
         break
         case 'kosong':{
         	if (!isCreator) return (`Fitur Ini Khusus Owner`)
         	reply(`
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         `)
         }
         break
         case 'out':{
         	if (!m.isGroup) throw reply(`Fitur Ini Khusus Group`)
         	if (!isCreator) return reply(`Fitur Ini Khusus Owner`)
         await alpha.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
         }
         break
         case 'listonline': case 'onlinelist':{
         	if (!isPremium && !isCreator) return reply(`Fitur Khusus Member Premium, Buy Premium ? Ketik .buyprem`)
         	let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
         let online = [...Object.keys(store.presences[id]), botNumber]
         alpha.sendText(m.chat, 'List Online:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, m, {
         	mentions: online
         })
         }
         break
         case 'public':{
         	if (!isCreator) return (`Fitur Ini Khusus Owner`)
         alpha.public = true
         m.reply('*Sukses Ganti Bot Ke Mode Public*')
         }
         break
         case 'self':{
         	if (!isCreator) return (`Fitur Ini Khusus Owner`)
         alpha.public = false 
         m.reply('*Sukses Ganti Bot Ke mode Self, Jika Mau Ganti Bot  Ke Mode Public Silahkan Ke Nomor Bot Ketik .public*')
         }
         break
         case 'tiktokkayes':{
         	if (!isPremium && !isCreator) return reply(`Fitur Khusus Member Premium, Buy Premium ? Ketik .buyprem`)
         reply("Sedang Di Proses ⏳")
         var but = [{ buttonId: `grubbot`, buttonText: { displayText: `GROUP BOT` }, type: 1 }]
         var kayes = JSON.parse(fs.readFileSync('./tiktok/kayes.json'))
         var hasil = pickRandom(kayes)
         alpha.sendMessage(m.chat, { caption: `Jangan Lupa Bilang Makasih !`, video: { url: hasil.url }, buttons: but, footer: namabot }, { quoted: m })
         }
         break
         case 'tiktokgirl':{
         	if (!isPremium && !isCreator) return reply(`Fitur Khusus Member Premium, Buy Premium ? Ketik .buyprem`)
         reply("Sedang Di Proses ⏳")
         var but = [{ buttonId: `donasi`, buttonText: { displayText: `DONASI` }, type: 1 }]
         var asupan = JSON.parse(fs.readFileSync('./tiktok/tiktokgirl.json'))
         var hasil = pickRandom(asupan)
         alpha.sendMessage(m.chat, { caption: `Jangan Lupa Bilang Makasih !`, video: { url: hasil.url }, buttons: but, footer: namabot }, { quoted: m })
         }
         break
         case 'tiktokghea':{
         	if (!isPremium && !isCreator) return reply(`Fitur Khusus Member Premium, Buy Premium ? Ketik .buyprem`)
         	reply("Sedang Di Proses ⏳")
         var but = [{ buttonId: `donasi`, buttonText: { displayText: `DONASI` }, type: 1 }]
         var gheayubi = JSON.parse(fs.readFileSync('./tiktok/gheayubi.json'))
         var hasil = pickRandom(gheayubi)
         alpha.sendMessage(m.chat, { caption: `Jangan Lupa Bilang Makasih !`, video: { url: hasil.url }, buttons: but, footer: namabot }, { quoted: m })
         }
         break
         case 'tiktokbocil':{
         	if (!isPremium && !isCreator) return reply(`Fitur Khusus Member Premium, Buy Premium ? Ketik .buyprem`)
         	reply("Sedang Di Proses ⏳")
         var but = [{ buttonId: `donasi`, buttonText: { displayText: `DONASI` }, type: 1 }]
         var bocil = JSON.parse(fs.readFileSync('./tiktok/bocil.json'))
         var hasil = pickRandom(bocil)
         alpha.sendMessage(m.chat, { caption: `Jangan Lupa Bilang Makasih !`, video: { url: hasil.url }, buttons: but, footer: namabot }, { quoted: m })
         }
         break
         case 'tiktokukhty':{
         	if (!isPremium && !isCreator) return reply(`Fitur Khusus Member Premium, Buy Premium ? Ketik .buyprem`)
         	reply("Sedang Di Proses ⏳")
         var but = [{ buttonId: `donasi`, buttonText: { displayText: `DONASI` }, type: 1 }]
         var ukhty = JSON.parse(fs.readFileSync('./tiktok/ukhty.json'))
         var hasil = pickRandom(ukhty)
         alpha.sendMessage(m.chat, { caption: `Jangan Lupa Bilang Makasih !`, video: { url: hasil.url }, buttons: but, footer: namabot }, { quoted: m })
         }
         break
         case 'tiktoksantuy':{
         	if (!isPremium && !isCreator) return reply(`Fitur Khusus Member Premium, Buy Premium ? Ketik .buyprem`)
         	reply("Sedang Di Proses ⏳")
         var but = [{ buttonId: `donasi`, buttonText: { displayText: `DONASI` }, type: 1 }]
         var santuy = JSON.parse(fs.readFileSync('./tiktok/santuy.json'))
         var hasil = pickRandom(santuy)
         alpha.sendMessage(m.chat, { caption: `Jangan Lupa Bilang Makasih !`, video: { url: hasil.url }, buttons: but, footer: namabot }, { quoted: m })
         }
         break
         case 'tiktokpanrika':{
         	if (!isPremium && !isCreator) return reply(`Fitur Khusus Member Premium, Buy Premium ? Ketik .buyprem`)
         	reply("Sedang Di Proses ⏳")
         var but = [{ buttonId: `donasi`, buttonText: { displayText: `DONASI` }, type: 1 }]
         var rikagusriani = JSON.parse(fs.readFileSync('./tiktok/panrika.json'))
         var hasil = pickRandom(rikagusriani)
         alpha.sendMessage(m.chat, { caption: `Jangan Lupa Bilang Makasih !`, video: { url: hasil.url }, buttons: but, footer: namabot }, { quoted: m })
         }
         break
         case 'tiktoknotnot':{
         	if (!isPremium && !isCreator) return reply(`Fitur Khusus Member Premium, Buy Premium ? Ketik .buyprem`)
         reply("Sedang Di Proses ⏳")
         var but = [{ buttonId: `donasi`, buttonText: { displayText: `DONASI` }, type: 1 }]
         var notnot = JSON.parse(fs.readFileSync('./tiktok/notnot.json'))
         var hasil = pickRandom(notnot)
         alpha.sendMessage(m.chat, { caption: `Jangan Lupa Bilang Makasih !`, video: { url: hasil.url }, buttons: but, footer: namabot }, { quoted: m })
         }
         break
         case 'tiktokgabagtha':{
         	if (!isPremium && !isCreator) return reply(`Fitur Khusus Member Premium, Buy Premium ? Ketik .buyprem`)
         	reply("Sedang Di Proses ⏳")
         var but = [{ buttonId: `command`, buttonText: { displayText: `NEXT VIDIO ➡️` }, type: 1 }]
         var gabagtha = JSON.parse(fs.readFileSync('./tiktok/tiktokgabagtha.json'))
         var hasil = pickRandom(gabagtha)
         alpha.sendMessage(m.chat, { caption: `Jangan Lupa Bilang Makasih !`, video: { url: hasil.url }, buttons: but, footer: namabot }, { quoted: m })
         }
         break
         case 'block':{
         	if (!isCreator) return reply(`Fitur Ini Khusus Owner`)
         let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
         await alpha.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
         }
         break
         case 'unblock':{
         	if (!isCreator) return reply(`Fitur Ini Khusus Owner`)
         let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
         await alpha.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
         }
         break
         case 'setname':{
         if (!m.isGroup) return(`Fitur Ini Khusus Group`)
         if (!isBotAdmins) return(`Bot Bukan Admin`)
         if (!isAdmins) return(`Fitur Ini Khusus Admin !`)
         if (!text) throw 'Text Nya ?'
         await alpha.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
         }
         break
         case 'setdesc': case 'setdesk':{
         	if (!m.isGroup) return(`Fitur Ini Khusus Group`)
         if (!isBotAdmins) return(`Bot Bukan Admin`)
         if (!isAdmins) return(`Fitur Ini Khusus Admin !`)
         if (!text) throw 'Text Nya ?'
         await alpha.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
         }
         break
         case 'gitclone':{
         	if (!args[0]) return m.reply(`Mana link nya?\nContoh :\n${prefix}${command} https://github.com/JER-BOTZ/JERxxx`)
         if (!isUrl(args[0]) && !args[0].includes('github.com')) return reply(`Eror Bang Link Nya`)
         let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
         let [, user, repo] = args[0].match(regex1) || []
         repo = repo.replace(/.git$/, '')
         let url = `https://api.github.com/repos/${user}/${repo}/zipball`
         let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
         alpha.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => reply("Sukses"))
         }
         break
         case 'developer': case 'dev': {
         	reply(`JER-BOT DEVELOPER\n\n\n©2021-2022 JER-BOTZ MD.\n\nJER\nPm: wa.me/6281315252010`)
         }
         break
case 'delprem':

         case 'unprem':

         case 'delpremium': {

            if (!isCreator) return (`Emank Lu Owner Gua Kah ?`)
            if (!text) return reply(`*Kek gini bang*\n\n• ${prefix + command} number\n*Example:* ${prefix + command} 62887435047326\n\natau\n\n• ${prefix + command} @tag\n*Example:* ${prefix + command} @62887435047326`)

            let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            if (users) {

               premium.splice(_prem.getPremiumPosition(users, premium), 1)

               fs.writeFileSync('./database/premium.json', JSON.stringify(premium))

               m.reply("Sukses del premium")

            } else {

               var cekpr = await alpha.onWhatsApp(args[0] + "@s.whatsapp.net")

               if (cekpr.length == 0) return m.reply(`Nomor ${args[0]} tidak terdaftar di WhatsApp`)

               premium.splice(_prem.getPremiumPosition(args[0] + '@s.whatsapp.net', premium), 1)

               fs.writeFileSync('./database/premium.json', JSON.stringify(premium))

               m.reply("Sukses del premium")

            }

         }

         break
         case 'addprem':{
         if (!isCreator) return (`Emank Lu Owner Gua Kah ?`)
         
            const swn = args.join(" ")

            const pcknm = swn.split("|")[0];

            const atnm = swn.split("|")[1];

            if (!(pcknm && atnm)) return reply(`Penggunaan :\n*${prefix}addprem* @tag|waktu\n*${prefix}addprem* nomor|waktu\n\nContoh : ${command} @62887435047326|30d`)

            let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            if (users) {

               _prem.addPremiumUser((pcknm.replace('@', '') + '@s.whatsapp.net').replace(' @', '@'), atnm, premium)

               m.reply("Sukses add premium")

            } else {

               var cekap = await alpha.onWhatsApp(pcknm + "@s.whatsapp.net")

               if (cekap.length == 0) return m.reply(`Nomor ${pcknm} tidak terdaftar di WhatsApp`)

               _prem.addPremiumUser((pcknm.replace('@', '') + '@s.whatsapp.net').replace(' @', '@'), atnm, premium)

               m.reply("Sukses add premium")

            }
         }
         break
         case 'listpremium': {

            let txt = ""

            let men = [];

            for (let i of premium) {

               men.push(i.id)

               txt += `*🆔 ID:* @${i.id.split("@")[0]}\n`

               if (i.expired === 'PERMANENT') {

                  let cekvip = 'PERMANENT'

                  txt += `*⏰ Expired:* PERMANENT\n\n`

               } else {

                  let cekvip = i.expired - Date.now()

                  txt += `*⏰ Expired:* ${msToDate(cekvip)}`

               }

            }

            alpha.sendMessage(m.chat, { text: `「 *PREMIUM USER LIST* 」\n\n*👑 Total Premium : ${premium.length} user*\n\n${txt}` }, { mentions: men, quoted: m })

         }

         break
         case 'buyprem':{
         	alpha.sendContact(m.chat, global.owner,), reply(`Buy Premium Chat Owner`)
         }
         break
         case'addsewa':{
         	if (!isCreator) return m.reply("Fitur khusus owner!")
         if (text < 2) return m.reply(`Gunakan dengan cara ${prefix + command} *linkgc waktu*\n\nContoh : ${command} https://chat.whatsapp.com/JanPql7MaMLa 30d\n\n*CATATAN:*\nd = hari (day)\nm = menit(minute)\ns = detik (second)\ny = tahun (year)\nh = jam (hour)`)
         if (!isUrl(args[0])) return m.reply("Link grup wa gk gitu modelnya cuy")
         var url = args[0]
         url = url.split('https://chat.whatsapp.com/')[1]
         if (!args[1]) return m.reply(`Waktunya?`)
         var data = await alpha.groupAcceptInvite(url)
         if(checkSewaGroup(data, sewa)) return m.reply(`Bot sudah disewa oleh grup tersebut!`)
         addSewaGroup(data, args[1], sewa)
         reply(`Success Add Sewa Group Berwaktu!`)
         }
         break
         case'delsewa':{
         	if (!isCreator) return m.reply("Fitur khusus owner!")
         if (!m.isGroup) return m.reply(`Perintah ini hanya bisa dilakukan di Grup yang menyewa bot`)
         if (!isSewa) return m.reply(`Bot tidak disewa di Grup ini`)
         sewa.splice(getSewaPosition(m.chat, sewa), 1)
         fs.writeFileSync('./database/sewa.json', JSON.stringify(sewa, null, 2))
         reply(`Sukses del sewa di grup ini`)
         }
         break
         case 'ceksewa': case 'listsewa':{
         	let list_sewa_list = `*LIST SEWA*\n\n*Total:* ${sewa.length}\n\n`
         let data_array = [];
         for (let x of sewa) {
         	list_sewa_list += `*Name:* ${await getGcName(x.id)}\n*ID :* ${x.id}\n`
         if (x.expired === 'PERMANENT') {
         	let ceksewa = 'PERMANENT'
         list_sewa_list += `*Expire :* PERMANENT\n\n`
         } else {
         	let ceksewa = x.expired - Date.now()
         list_sewa_list += `*Expired :* ${msToDate(ceksewa)}\n\n`
         }
         }
         alpha.sendMessage(m.chat, { text: list_sewa_list }, { quoted: m })
         }
         break
         case 'ai': case 'chatgpt':
         if (!isPremium && !isCreator) return reply(`Fitur Khusus Member Premium, Buy Premium ? Ketik .buyprem`)
         try {
         if (global.keyopenai === "ISI_APIKEY_OPENAI_DISINI") return reply("Apikey belum diisi\n\nSilahkan isi terlebih dahulu apikeynya di file settings.json\n\nApikeynya bisa dibuat di website: https://beta.openai.com/account/api-keys");
         if (!text) return reply(`Chat dengan AI.\n\nContoh:\n${prefix}${command} Apa itu resesi`);
         reply("Sedang Di Proses ⏳")
         const configuration = new Configuration({
         	apiKey: global.keyopenai,
         });
         const openai = new OpenAIApi(configuration);
         
         const response = await openai.createCompletion({
         model: "text-davinci-003",
         prompt: text,
         temperature: 0, // Higher values means the model will take more risks.
         max_tokens: 2048, // The maximum number of tokens to generate in the completion. Most models have a context length of 2048 tokens (except for the newest models, which support 4096).
         top_p: 1, // alternative to sampling with temperature, called nucleus sampling
         frequency_penalty: 0.3, // Number between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model's likelihood to repeat the same line verbatim.
         presence_penalty: 0 // Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far, increasing the model's likelihood to talk about new topics.
     });
     m.reply(`${response.data.choices[0].text}`);
     } catch (error) {
     	if (error.response) {
     	console.log(error.response.status);
     	console.log(error.response.data);
     console.log(`${error.response.status}\n\n${error.response.data}`);
     } else {
     	console.log(error);
     m.reply("Maaf, sepertinya ada yang error :"+ error.message);
     }
         }
         break
         case'antiwame2':{
         	if (!m.isGroup) return m.reply('Fitur Khusus Group!')
         if (!isAdmins) return m.reply('Fitur Khusus admin!')
         if (!isBotAdmins) return m.reply("Jadikan bot sebagai admin terlebih dahulu")
         if (args[0] === "on") {
         	if (isAntiWame2) return m.reply(`Udah aktif`)
         antiwame2.push(m.chat)
         fs.writeFileSync('./database/antiwame2.json', JSON.stringify(antiwame2, null, 2))
         reply('Successfully Activate antiwame2 In This Group')
         } else if (args[0] === "off") {
         	if (!isAntiWame2) return m.reply(`Udah nonaktif`)
         let anu = antiwame2.indexOf(m.chat)
         antiwame2.splice(anu, 1)
         fs.writeFileSync('./database/antiwame2.json', JSON.stringify(antiwame2, null, 2))
         reply('Successfully Disabling antiwame2 In This Group')
         } else {
         	reply(`Kirim perintah ${prefix + command} on/off\n\nContoh: ${prefix + command} on`)
         }
}
break
case'antilink2':{
	if (!m.isGroup) return m.reply(`Fitur Ini Khusus Group`)
	if (!isAdmins) return m.reply('Fitur Khusus admin!')
	if (!isBotAdmins) return m.reply("Bot harus menjadi admin")
	if (args[0] === "on") {
		if (isAntiLink2) return m.reply(`Udah aktif`)
		antilink2.push(m.chat)
		fs.writeFileSync('./database/antilink2.json', JSON.stringify(antilink2, null, 2))
		reply('Successfully Activate antilink2 In This Group')
		} else if (args[0] === "off") {
			if (!isAntiLink2) return m.reply(`Udah nonaktif`)
			let anu = antilink2.indexOf(m.chat)
			antilink2.splice(anu, 1)
			fs.writeFileSync('./database/antilink2.json', JSON.stringify(antilink2, null, 2))
			reply('Successfully Disabling antilink2 In This Group')
			} else {
				reply(`Kirim perintah ${prefix + command} on/off\n\nContoh: ${prefix + command} on`)
				}
				}
				break
				case 'groupbot': case 'grubbot': case 'grupbot':{
					reply("Ini Kak Link Grub Bot Nya : https://chat.whatsapp.com/KTXtrESxZCg8aTUbP62c6d")
					}
						break
						case 'spotify':{ //credit: Ray Senpaiâ¤ï¸ https://github.com/EternityBots/Nezuko
						if (!isPremium && !isCreator) return reply(`Fitur Khusus Member Premium, Buy Premium ? Ketik .buyprem`)
						if (!text) return m.reply(`Mana Link Nya ?`)
						const Spotify = require('./lib/spotify')
						const spotify = new Spotify(text)
						const info = await spotify.getInfo()
						if ((info).error) throw `The link you provided is not spotify link`
						const { name, artists, album_name, release_date, cover_url } = info
						const details = `*Title:* ${name || ''}\n*Artists:* ${(artists || []).join(
						','
						)}\n*Album:* ${album_name}\n*Release Date:* ${release_date || ''}`
						const response = await alpha.sendMessage(m.chat, { image: { url: cover_url }, caption: details }, { quoted: m })
						const bufferpotify = await spotify.download()
						await alpha.sendMessage(m.chat, { audio: bufferpotify }, { quoted: response })
					}
					break
					case 'yts': case 'ytsearch': {
						if (!isPremium && !isCreator) return reply(`Fitur Khusus Member Premium, Buy Premium ? Ketik .buyprem`)
						if (!text) throw `Example : ${prefix + command} story wa anime`
						reply("Sedang Di Proses ⏳")
						let yts = require("youtube-yts")
						let search = await yts(text)
						let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
						let no = 1
						for (let i of search.all) {
							teks += `No : ${no++}\nType : ${i.type}\nVideo ID : ${i.videoId}\nTitle : ${i.title}\nViews : ${i.views}\nDuration : ${i.timestamp}\nUploaded : ${i.ago}\nUrl : ${i.url}\n\nIni Hasil Nya Kak\n\n`
							}
						alpha.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
					}
					break
					case 'google': {
						if (!isPremium && !isCreator) return reply(`Fitur Khusus Member Premium, Buy Premium ? Ketik .buyprem`)
						if (!text) throw `Contoh : ${prefix + command} fatih arridho`
						let google = require('google-it')
						google({'query': text}).then(res => {
							let teks = `Google Search From : ${text}\n\n`
							for (let g of res) {
								teks += `*Title* : ${g.title}\n`
								teks += `*Description* : ${g.snippet}\n`
								teks += `*Link* : ${g.link}\n\nIni Hasil Nya Kak\n\n`
								}
							m.reply(teks)
						})
					}
					break
					case 'menfess':{
					if (!isPremium && !isCreator) return reply(`Fitur Khusus Member Premium, Buy Premium ? Ketik .buyprem`)
					if (m.isGroup) return m.reply(`Fitur Ini Hanya Dapat Di Gunakan Di Private Chat`)
					if (!text) return m.reply(`*Kayak Gini Kak*\n\Contoh : ${prefix + command} nomor|nama|pesan`)
					let nomor = q.split('|')[0] ? q.split('|')[0] : q
					let saking = q.split('|')[1] ? q.split('|')[1] : q
					let pesan = q.split('|')[2] ? q.split('|')[2] : ''
					if (pesan.length < 1) return m.reply(`Semua Nya Harus Di Isi ! contoh : menfess 62xxxxxxxxxx|someone|hello KakaAll must be filled in! eg : confess 62xxxxxxxxxx|from|hello dude`)
					let teksnya = `Hi Kak Ada Menfess Nih\n\nFrom :  _${saking}_  \nMessage : _${pesan}_ `
					gambar = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMkjAJhYezm4h6k1AJ6qfreGkaRdBcR7UHMw&usqp=CAU`
					var button = [{ buttonId: `owner`, buttonText: { displayText: `OWNER` }, type: 1 }, { buttonId: `groupbot`, buttonText: { displayText: `GROUP BOT` }, type: 1 }]
					alpha.sendMessage(`${nomor}@s.whatsapp.net`, { caption: teksnya, image: {url: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMkjAJhYezm4h6k1AJ6qfreGkaRdBcR7UHMw&usqp=CAU`}, buttons: button, footer: namabot })
					m.reply(`Sukses Kirim Menfess !!`)
					}
						break
						case 'runtime': case 'speed':{
						reply(`Runtime : ${runtime(process.uptime())}`)
						}
						break
						case 'antilinkall': {
							if (!m.isGroup) return m.reply(`Fitur Ini Khusus Group`)
							if (!isBotAdmins) return m.reply(`Bot Bukan Admin`)
							if (!isAdmins && !isCreator) return m.reply(`Fitur Ini Khusus Admin !`)
							if (args[0] === "on") {
								if (AntiLinkAll) return m.reply('Already activated')
								ntilinkall.push(from)
								fs.writeFileSync('./database/antilinkall.json', JSON.stringify(ntilinkall))
								m.reply('Success in turning on all antilink in this group')
								var groupe = await alpha.groupMetadata(from)
								var members = groupe['participants']
								var mems = []
								members.map(async adm => {
									mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
									})
									alpha.sendMessage(from, {text: `\`\`\`ã€Œ âš ï¸Warningâš ï¸ ã€\`\`\`\n\nIf you're not an admin, don't send any link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
									} else if (args[0] === "off") {
										if (!AntiLinkAll) return m.reply('Already deactivated')
										let off = ntilinkall.indexOf(from)
										ntilinkall.splice(off, 1)
										fs.writeFileSync('./database/antilinkall.json', JSON.stringify(ntilinkall))
										m.reply('Success in turning off all antilink in this group')
										} else {
											reply(`Kirim perintah ${prefix + command} on/off\n\nContoh: ${prefix + command} on`)
											}
											}
											break
case 'antitoxic': {
	if (!m.isGroup) return m.reply(`Fitur Ini Khusus Group`)
	if (!isBotAdmins) return m.reply(`Bot Bukan Admin`)
	if (!isAdmins && !isCreator) return m.reply(`Fitur Ini Khusus Admin`)
	if (args[0] === "on") {
		if (antiToxic) return m.reply('Already activated')
		nttoxic.push(from)
		fs.writeFileSync('./database/antitoxic.json', JSON.stringify(nttoxic))
		m.reply('Success in turning on antitoxic in this group')
		var groupe = await alpha.groupMetadata(from)
		var members = groupe['participants']
		var mems = []
		members.map(async adm => {
			mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
			})
			alpha.sendMessage(from, {text: `\`\`\`ã€Œ âš ï¸Warningâš ï¸ ã€\`\`\`\n\nNobody is allowed to use bad words in this group, one who uses will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
			} else if (args[0] === "off") {
				if (!antiToxic) return m.reply('Already deactivated')
				let off = nttoxic.indexOf(from)
				nttoxic.splice(off, 1)
				fs.writeFileSync('./database/antitoxic.json', JSON.stringify(nttoxic))
				m.reply('Success in turning off antitoxic in this group')
				} else {
					reply(`Kirim perintah ${prefix + command} on/off\n\nContoh: ${prefix + command} on`)
					}
					}
					break
case 'ytmp3xx': {
	if (!isPremium && !isCreator) return reply(`Fitur Khusus Member Premium, Buy Premium ? Ketik .buyprem`)
	let { yta } = require('./lib/y2mate')
	if (!text) throw `Contoh : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
	reply("Sedang Di Proses ⏳")
	let quality = args[1] ? args[1] : '128kbps'
	let media = await yta(text, quality)
	if (media.filesize >= 100000) return m.reply('File Over Limit '+util.format(media))
	alpha.sendImage(m.chat, media.thumb, `Title : ${media.title}\nFile Size : ${media.filesizeF}\nUrl : ${isUrl(text)}\nExt : MP3\nResolution : ${args[1] || '128kbps'}`, m)
	alpha.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
	}
	break
case 'ytmp3':
	if (!isPremium && !isCreator) return reply(`Fitur Khusus Member Premium, Buy Premium ? Ketik .buyprem`)
	const xeonaudp3 = require('./lib/ytdl2')
	if (args.length < 1 || !isUrl(text) || !xeonaudp3.isYTUrl(text)) throw `Where's the yt link?\nExample: ${prefix + command} https://youtu.be/J3xCWEpDUqc`
	reply("Sedang Di Proses ⏳")
	const audio=await xeonaudp3.mp3(text)
	await alpha.sendMessage(m.chat,{
		audio: fs.readFileSync(audio.path),
		mimetype: 'audio/mp4', ptt: true,
		contextInfo:{
			externalAdReply:{
				title:audio.meta.title,
				body: namabot,
				mediaType:2,
				mediaUrl:text,
				}
				},
				},{quoted:m})
				await fs.unlinkSync(audio.path)
				reply("Done ✅")
				break
case 'ytmp4':
if (!isPremium && !isCreator) return reply(`Fitur Khusus Member Premium, Buy Premium ? Ketik .buyprem`)
const xeonvidoh = require('./lib/ytdl2')
if (args.length < 1 || !isUrl(text) || !xeonvidoh.isYTUrl(text)) throw `Mana Link Nya??\n\nContoh : ${prefix + command} https://youtu.be/J3xCWEpDUqc 128kbps`
reply("Sedang Di Proses ⏳")
const vid=await xeonvidoh.mp4(text)
const ytc=`
*Tittle:* ${vid.title}
*Date:* ${vid.date}
*Duration:* ${vid.duration}
*Quality:* ${vid.quality}`
await alpha.sendMessage(m.chat,{
	video: {url:vid.videoUrl},
	caption: ytc
	},{quoted:m})
	reply("Done ✅")
	break
case 'ytmp4xx': case 'ytvideoxx': {
	if (!isPremium && !isCreator) return reply(`Fitur Khusus Member Premium, Buy Premium ? Ketik .buyprem`)
	let { ytv } = require('./lib/y2mate')
	if (!text) return `Contoh : ${prefix + command} https://youtu.be/J3xCWEpDUqc360p`
	reply("Sedang Di Proses ⏳")
	let quality = args[1] ? args[1] : '360p'
	let media = await ytv(text, quality)
	if (media.filesize >= 100000) return m.reply('File Melebihi Batas Limit '+util.format(media))
	alpha.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `Title : ${media.title}\nFile Size : ${media.filesizeF}\nUrl : ${isUrl(text)}\nExt : MP3\nResolution : ${args[1] || '360p'}` }, { quoted: m })
	}
	break
case 'pinterest':{
	if (!isPremium && !isCreator) return reply(`Fitur Khusus Member Premium, Buy Premium ? Ketik .buyprem`)
	if (!text) return reply('Contoh Penggunaan : .pinterest JerOfc')
	let { pinterest } = require('./lib/scraper')
	anu = await pinterest(text)
	result = anu[Math.floor(Math.random(), anu.length)]
	alpha.sendMessage(m.chat, { image: { url: result }, caption: `Media Url : `+result }, { quoted: m })
	}
break
case 'bctext': case 'broadcasttext': case 'broadcast':
if (!isCreator) return m.reply("Fitur khusus owner!")
if (!text) throw `Mana Text Nya ?`
var data = await store.chats.all()
for (let i of data) {
	alpha.sendMessage(i.id, {text: `${namaowner}'s Broadcast\n\nMessage : ${q}` })
	await sleep(1000)
	}
	break
case 'toimage': case 'toimg': {
	if (!isPremium && !isCreator) return reply(`Fitur Khusus Member Premium, Buy Premium ? Ketik .buyprem`)
	if (!quoted) throw 'Reply image'
	if (!/webp/.test(mime)) throw `Reply sticker with caption *${prefix + command}*`
	reply("Sedang Di Proses ⏳")
	let media = await alpha.downloadAndSaveMediaMessage(quoted)
	let ran = await getRandom('.png')
	exec(`ffmpeg -i ${media} ${ran}`, (err) => {
		fs.unlinkSync(media)
		if (err) throw err
		let bufferimg13x = fs.readFileSync(ran)
		alpha.sendMessage(m.chat, { image: bufferimg13x }, { quoted: m })
		fs.unlinkSync(ran)
		})
		}
		break
case 'sticker': case 's': case 'stickergif': case 'sgif': {
	if (!isPremium && !isCreator) return reply(`Fitur Khusus Member Premium, Buy Premium ? Ketik .buyprem`)
	if (!quoted) throw `*Reply Video/Image With Caption* ${prefix + command}`
	if (/image/.test(mime)) {
		reply("Sedang Di Proses ⏳")
		let media = await quoted.download()
		let encmedia = await alpha.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
		await fs.unlinkSync(encmedia)
		} else if (/video/.test(mime)) {
			if ((quoted.msg || quoted).seconds > 11) return m.reply('*Maximum 10 seconds!*')
			let media = await quoted.download()
			let encmedia = await XeonBotInc.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
			await fs.unlinkSync(encmedia)
			} else {
				m.reply(`Kirim/reply gambar/video/gif dengan caption ${prefix + command}\nDurasi Video/Gif 1-9 Detik`)
				}
				}
				break
				case 'setnamabot': case 'setnamebot': {
					if (!text) throw `Example : ${prefix + command} WhatsApp ✅`
					let name = await alpha.updateProfileName(text)
					m.reply(`Successfully renamed bot to ${name}`)
					}
					break
case 'setstatus': case 'setbiobot': case 'setbotbio': {
	if (!text) throw `this is a WhatsApp Bot named JerOfc`
	let name = await alpha.updateProfileStatus(text)
	m.reply(`Successfully changed bot bio status to ${name}`)
	}
	break
case 'play': case 'ytplay':{
	if (!isPremium && !isCreator) return reply(`Fitur Khusus Member Premium, Buy Premium ? Ketik .buyprem`)
	if (!text) throw `Contoh : ${prefix + command} anime whatsapp status`
	reply("Sedang Di Proses ⏳")
	let yts = require("youtube-yts")
	let search = await yts(text)
	let anulay = search.videos[Math.floor(Math.random() * search.videos.length)]
	let buttons = [
	{buttonId: `playmp3 ${anulay.url}`, buttonText: {displayText: '🎵 Audio'}, type: 1},
	{buttonId: `playmp4 ${anulay.url}`, buttonText: {displayText: '» Video'}, type: 1}
	]
	let buttonMessage = {
		image: { url: anulay.thumbnail },
		caption: `
Title : ${anulay.title}
Ext : Search
ID : ${anulay.videoId}
Duration : ${anulay.timestamp}
Viewers : ${anulay.views}
Upload At : ${anulay.ago}
Author : ${anulay.author.name}
Channel : ${anulay.author.url}
Description : ${anulay.description}
Url : ${anulay.url}`,
footer: namabot,
buttons: buttons,
headerType: 4
}
alpha.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'playmp3': //credit: Ray Senpai â¤ï¸ https://github.com/EternityBots/Nezuko
if (!isPremium && !isCreator) return reply(`Fitur Khusus Member Premium, Buy Premium ? Ketik .buyprem`)
if (!text) throw `Contoh : ${prefix + command} anime whatsapp status`
reply("Sedang Di Proses ⏳")
const xeonplaymp3 = require('./lib/ytdl2')
let yts = require("youtube-yts")
let search = await yts(text)
let anup3k = search.videos[0]
const pl= await xeonplaymp3.mp3(anup3k.url)
await alpha.sendMessage(m.chat,{
	audio: fs.readFileSync(pl.path),
	fileName: anup3k.title + '.mp3',
	mimetype: 'audio/mp4', ptt: true,
	contextInfo:{
		externalAdReply:{
			title:anup3k.title,
			body: namabot,
			thumbnail: await fetchBuffer(pl.meta.image),
			mediaType:2,
			mediaUrl:anup3k.url, 
			}
			},
			},{quoted:m})
			await fs.unlinkSync(pl.path)
			break
case 'playmp4': //credit: Ray Senpai â¤ï¸ https://github.com/EternityBots/Nezuko
if (!isPremium && !isCreator) return reply(`Fitur Khusus Member Premium, Buy Premium ? Ketik .buyprem`)
if(!text) throw `Contoh : ${prefix + command} anime whatsapp status`
reply("Sedang Di Proses ⏳")
const xeonplaymp4 = require('./lib/ytdl2')
let ytsmp4 = require("youtube-yts")
let xeonsearch13 = await ytsmp4(text)
let anuvidoke4 = xeonsearch13.videos[0]
const pl2= await xeonplaymp4.mp4(anuvidoke4.url)
await alpha.sendMessage(m.chat,{
	document: {url:pl2.videoUrl},
	fileName: anuvidoke4.title + '.mp4',
	mimetype: 'video/mp4',
	contextInfo:{
		externalAdReply:{
			title:anuvidoke4.title,
			body: namabot,
			thumbnail: await fetchBuffer(anuvidoke4.thumbnail),
			mediaType:2,
			mediaUrl:anuvidoke4.url,
			}
			},
			},{quoted:m})
			break
case 'smeme': case 'stickmeme': case 'stikmeme': case 'stickermeme': case 'stikermeme': {
	if (!isPremium && !isCreator) return reply(`Fitur Khusus Member Premium, Buy Premium ? Ketik .buyprem`)
	let { TelegraPh } = require('./lib/uploader')
	if (!text) return m.reply(`Send/Reply Photo With Caption ${prefix + command} *text*`)
	if (text.includes('|')) return m.reply(`Send/Reply Photo With Caption ${prefix + command} *text*`)
	if (!/image/.test(mime)) return m.reply(`Send/Reply Photo With Caption ${prefix + command} *text*`)
	reply("Sedang Di Proses ⏳")
	mee = await alpha.downloadAndSaveMediaMessage(quoted)
	mem = await TelegraPh(mee)
	meme = `https://api.memegen.link/images/custom/-/${text}.png?background=${mem}`
	memek = await alpha.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
	await fs.unlinkSync(memek)
	}
	break
case 'emojimix': {
	if (!isPremium && !isCreator) return reply(`Fitur Khusus Member Premium, Buy Premium ? Ketik .buyprem`)
	let [emoji1, emoji2] = text.split`+`
	if (!emoji1) throw `Example : ${prefix + command} 😅+🤔`
	if (!emoji2) throw `Example : ${prefix + command} 😅+🤔`
	let anumojimix = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
	for (let res of anumojimix.results) {
		let encmedia = await alpha.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		await fs.unlinkSync(encmedia)
		}
		}
		break
		case 'emojimix2': {
			if (!isPremium && !isCreator) return reply(`Fitur Khusus Member Premium, Buy Premium ? Ketik .buyprem`)
			if (!text) throw `Example : ${prefix + command} 😅`
			let anumix2 = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
			for (let res of anumix2.results) {
				let encmedia= await alpha.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
				await fs.unlinkSync(encmedia)
				}
				}
				break
case 'ffstalk':{
	if (!isPremium && !isCreator) return reply(`Fitur Khusus Member Premium, Buy Premium ? Ketik .buyprem`)
	if (!q) return reply(`Kirim perintah ${prefix+command} id\nContoh: ${prefix+command} 12345678`)
	var pack = q
	stalkff(pack).then(i=>{
		if (i.status !== 200) return reply('Terjadi Kesalahan!!\nid ff tidak ditemukan')
		reply(`*STALKER FF*

ID: ${i.id}
Nickname: ${i.nickname}`)
		})
		}
		break
case 'mlstalk':{
	if (!isPremium && !isCreator) return reply(`Fitur Khusus Member Premium, Buy Premium ? Ketik .buyprem`)
	if (!q) return reply(`Kirim perintah ${prefix+command} id|zone\nContoh: ${prefix+command} 1234578|1234`)
	var id = q.split('|')[0]
	var zon = q.split('|')[1]
	if (!id) return reply('ID wajib di isi')
	if (!zon) return reply('ZoneID wajib di isi')
	stalkml(id, zon).then(i=>{
		if (i.status !== 200) return reply('Terjadi Kesalahan!!\nid/zone tidak ditemukan')
		reply(`*STALKER ML*
		
ID: ${id}
Zone: ${zon}
Nickname: ${i.nickname}`)
})
}
break
case 'sendlinkgc': {
	if (!m.isGroup) return m.reply('Fitur Khusus Group!')
	if (!isAdmins) return m.reply('Fitur Khusus admin!')
	if (!isBotAdmins) return m.reply('Bot Bukan Admin Cuy')
	if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281315252010`)
	bnnd = text.split("|")[0]+'@s.whatsapp.net'
	let response = await alpha.groupInviteCode(from)
	alpha.sendText(bnnd, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
	reply("Sukses SendLinkGc Ke Nomor Itu")
	}
	break
case 'assalamualaikum':{
	m.reply(`Waalaikumsalam`)
	}
	break
case 'broadcastvid': case 'bcimage': case 'broadcastvideo': case 'broadcastvid':{
if (!isCreator) return m.reply("Fitur khusus owner!")
if (!text) throw `Mana Text Nya ?`
let getGroups = await alpha.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let xeoncast = groups.map(v => v.id)
m.reply(` Broadcasting in ${xeoncast.length} Group Chat, in ${xeoncast.length * 1.5} seconds`)
for (let i of xeoncast) {
	let txt = `${namaowner}'s Broadcast\n\nMessage : ${text}`
	if(/image/.test(mime)) {
		let media = await quoted.download()
		await alpha.sendMessage(i, { image:media,  caption: txt,mentions:participants.map(a => a.id) })
		}
		if(/video/.test(mime)){
			let media = await quoted.download()
			await alpha.sendMessage(i, { video:media,  caption: txt, mentions:participants.map(a => a.id) })
			}
			}
			m.reply(`Sukses Broadcast in ${xeoncast.length} Groups`)      
			}
			break
case 'tagall': {
	if (!m.isGroup) return m.reply('Fitur Khusus Group!')
	if (!isAdmins) return m.reply('Fitur Khusus admin!')
	if (!isBotAdmins) return m.reply('Bot Bukan Admin Cuy')
	let teks = `╚» Tag All «╝ 
	
🌿 *Message : ${q ? q : 'empty'}*\n\n`
	for (let mem of participants) {
		teks += `@${mem.id.split('@')[0]}\n`
		}
		alpha.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
		}
		break
case 'mediafire': {
	if (!text) throw `Mana Link Nya ?`
	if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) throw `The link you provided is invalid`
	const { mediafireDl } = require('./lib/mediafire.js')
	const baby1 = await mediafireDl(text)
	if (baby1[0].size.split('MB')[0] >= 999) return m.reply('*File Over Limit* '+util.format(baby1))
	const result4 = `*MEDIAFIRE DOWNLOADER*

*Name* : ${baby1[0].nama}
*Size* : ${baby1[0].size}
*Mime* : ${baby1[0].mime}
*Link* : ${baby1[0].link}`
m.reply(`${result4}`)
alpha.sendMessage(m.chat, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime }, { quoted : m }).catch ((err) => reply(mess.error))
}
break
case 'igphoto':
case 'instaphoto':
case 'instafoto':
case 'igfoto':
case "ig":
case "igdl":{
	if (!isPremium && !isCreator) return reply(`Fitur Khusus Member Premium, Buy Premium ? Ketik .buyprem`)
	if (!args[0]) return reply(`Kirim perintah:\n${prefix+command} link Instagram\n\nContoh penggunaan:\n${prefix+command} https://www.instagram.com/p/ClU74LNpgaw/?igshid=YmMyMTA2M2Y=`)
	if (!isUrl(args[0])) return reply(`Kirim perintah:\n${prefix+command} link Instagram\n\nContoh penggunaan:\n${prefix+command} https://www.instagram.com/p/ClU74LNpgaw/?igshid=YmMyMTA2M2Y=`)
	reply("Sedang Di Proses ⏳")
	let res = await fetch(global.api('alfa', '/api/downloader/instagram-photo', {url: args[0]}, 'apikey'))
	if (!res.ok) throw await res.text()
	var result = await res.json()
	var result = result.result
	for(let i of result.url){
		alpha.sendFile(m.chat, i, 'ig.jpg', `DONE ✅`, m)
		}
		}
		case 'igvideo':
		case 'instavideo':
		case 'instavid':
		case 'igreels':
		case 'instareels':
		case 'instareel':{
			if (!isPremium && !isCreator) return reply(`Fitur Khusus Member Premium, Buy Premium ? Ketik .buyprem`)
			if (!args[0]) return reply(`Kirim perintah:\n${prefix+command} link Instagram video/reels\n\nContoh penggunaan:\n${prefix+command} https://www.instagram.com/reel/CnVwm3KrQRl/?igshid=YmMyMTA2M2Y=`)
			if (!isUrl(args[0])) return reply(`Kirim perintah:\n${prefix+command} link Instagram video/reels\n\nContoh penggunaan:\n${prefix+command} https://www.instagram.com/reel/CnVwm3KrQRl/?igshid=YmMyMTA2M2Y=`)
			reply("Sedang Di Proses ⏳")
			let res = await fetch(global.api('alfa', '/api/downloader/instagram-video', {url: args[0]}, 'apikey'))
			if (!res.ok) throw await res.text()
			var result = await res.json()
			var result = result.result
			for(let i of result.url){
				alpha.sendFile(m.chat, i, 'ig.mp4', `DONE ✅`, m)
				}
				}
// CECAN
				break
				case 'china':
				case 'indonesia':
				case 'malaysia':
				case 'thailand':
				case 'korea':
				case 'japan':
				case 'vietnam':
				case 'jenni':
				case 'jiiso':
				case 'lisa':
				case 'rose': {
					reply("Sedang Di Proses ⏳")
					let res = await fetch(global.api('alfa', '/api/cecan/' + command, {}, 'apikey'))
					if (!res.ok) throw await res.text()
					let img = await res.buffer()
					alpha.sendFile(m.chat, img, 'cecan.jpg', `DONE ✅`, m)
				}
				break
				
            default:
if (budy.startsWith('>')) {
                    if (!isCreator) return
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(util.format(err))
                    }
                }
       }
        
    } catch (err) {
        m.reply(util.format(err))
    }
}