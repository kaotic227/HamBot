//Remember to edit the config.json file for your preferences and discord bot token

const {Client,Attachment,MessageEmbed,Message,WebhookClient} = require('discord.js');
const Discord = require('discord.io');
const bot = new Client();
const cheerio = require('cheerio')
const request = require('request')
const ms = require('ms')
const fs = require('fs')
const config = require('./config.json');
const Canvas = require('canvas');
const prefix = 'ham ';
bot.login(config.token);


bot.on('ready', () =>{
console.log('Initiating Project R.U.B');
let statusRandom = Math.floor(Math.random() * 3) + 1;
var statusArray = ['Ham', 'With Ham', 'HAM', 'LISTENING', 'PLAYING', 'WATCHING', 'STREAMING']
    switch(statusRandom){
        case 1:
        bot.user.setActivity(statusArray[1], { type: statusArray[4] });
        break
        case 2:
        bot.user.setActivity(statusArray[2], { type: statusArray[5] });
        break;
        case 3:
        bot.user.setActivity(statusArray[1], { type: statusArray[6] });
        break;
    }
})

//Messages in console (does not log dm messages because of errors)
if(config.messagesinconsole == true) {bot.on('message', msg=>{if(msg.channel.type == 'text') {console.log(msg.member.user.tag + ' ' + msg.content)}})}


//Congrats to the king
bot.on('message', msg=>{
    switch(msg.author.id){
        case '338036054114435074':
        msg.react('🗿')
        msg.react('👑')
        break;
}})


//STREAM DETECTION START
bot.on('message', msg=>{
if(msg.content.includes(config.streamer) && msg.channel.type == 'text') {
if(config.streamer.startsWith('https://www.twitch.tv/')) {
    bot.user.setActivity("HAM GOD", {type: "STREAMING", url: config.streamer});
    setTimeout(function(){ bot.status }, 5400000 /* < 1 hour + 15 min */);
} else {throw 'Streamer name must be full twitch URL'}}})


//REGULAR COMMANDS START
bot.on('message', msg=>{
if(msg.channel.type == 'text') {
var huodfh = msg.content.toLowerCase();
if(huodfh.includes('who asked') || huodfh.includes('who tf asked') || huodfh.includes('who the fuck asked') ) {msg.channel.send('holy shit that was a LOL moment YOU just got beaned on 🤡 🤡 🤡')}
}})

bot.on('message', msg=>{
if(msg.channel.type == 'text') {
    let msgLow = msg.content.toLowerCase();
    if(msgLow.startsWith("so heres the thing")){
        msg.reply('gimme')
    }
    
    switch(msg.content.toLowerCase()){
    //some of the first commands created for hambot id recommend deleting or at least editing this if you are using this for a different streamer 
    
    case 'fuck hambot':
    case 'fuck ham bot':
    msg.reply("heck u kid ur adopted", {files: ["https://cdn.discordapp.com/attachments/678502901408333824/720879090042929172/no_u.mp4"]});
    break;
    
    case 'intimidation':
    msg.channel.send("<@" + msg.author.id + ">, INTIMIDATION", {files: ["https://media.discordapp.net/attachments/678502901408333824/720865873014816779/unknown.png?width=677&height=677"]});
    break;
    
    case 'i hate it here':
    msg.reply('me too <3');
    break;
    
    case 'roast eric':
    msg.channel.send('<@!252371615831162880> kinda cringe')
    break;


    case 'wheres the thing?':
    case 'wheres the thing':
    msg.channel.send('*hands you the thing*')
    break;

    case 'kaotics new album':
    msg.channel.send('https://www.youtube.com/watch?v=2Nvamnma_Aw&feature=youtu.be&t=35')
    break;
    
    case 'ham':
    msg.channel.send('<@' + msg.author.id + '>, ham')
    break;

    case "ham raid osama's but cave":
    case 'ham raid osamas nut cave':
    msg.channel.send('https://www.twitch.tv/osamus_nut_cave')
    break;
    
    case 'ham help':
    msg.channel.send('no help for you bubby boy, but say "ham commands" for a list of commands')
    break;

    case 'ham listening':
    bot.user.setActivity('Ham', { type: 'LISTENING' });
    break;

    case 'ham playing':
    bot.user.setActivity('With Ham', { type: 'PLAYING' });
    break;

    case 'ham watching':
    bot.user.setActivity('Ham', { type: 'WATCHING' });
    break;
    
    case 'ham pics':
    case 'ham pic':
    number = 20;
    imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
    msg.channel.send("Here you go", {files: ["./HamPics/" + imageNumber + ".png"]})
    break;
    
    case 'ham authors':
    case 'ham developers':
    case 'ham devs':
    msg.channel.send('kaotic, and a sprinkle of WG25')
    break;

    case 'ham steamed':
    msg.channel.send('https://youtu.be/MP6jyY2rs9w')
    break;


}}})


//ADVANCED COMMANDS START
bot.on('message', async msg=>{
    if(msg.channel.type == 'text' && msg.content.toLowerCase().startsWith(prefix)) {
    
    let args = msg.content.substring(prefix.length).split(" ")
    var textArgument = args.slice(1).join(" ");
    switch(args[0].toLowerCase()){

        
    case '8ball':
    //Basic 8ball command
    if(!args[0]) return msg.reply('Please ask a question')
        if(!args[1]) {msg.channel.send('Please specify question')} else {
        let replies = ["As I see it, yes.", "Ask again later.", "Better not tell you now.", "cannot predict now", "Conentrate and ask again", "Don't count on it.", "It is certain", "It is decidedly so.", "Most likely", "My reply is no", "My sources say no", "Outlook not so good.", "outlook good", "Reply hazy, try again", "Signs pount to yes", "Very doubtful", 'without a doubt', "yes", "you may rely on it"];
        let questionmark
        console.log(args[1])
        console.log(args[2])
        let question = args.slice(1).join(" ");
        let result = Math.floor((Math.random() * replies.length));
        if (question.indexOf('?') > -1){
            questionmark = ''
        } else {questionmark = '?'}
        msg.channel.send('You said "' + question + questionmark +'" the Magic 8ball said "' + replies[result] + '"')
    }
        break;

        case 'uwu':
        //uwu text generator
        var text = args.slice(1).join(" ")
        let uwu = ''
        var i
        if(!text) {msg.channel.send('specify message to uwuify uwu')} else {
        for (i = 0; i < text.length; i++) {
        let a = false
        switch(text[i]) {
            case 'r':
            case 'l':
            uwu += 'w'
            a = true
            break;
            case 'R':
            case 'L':
            uwu += 'W'
            a = true
            break;
        }
        switch(a) {
            case false:
            uwu += text[i]
            break;
        }}
        msg.channel.send(uwu)}
        break;

        case 'simp':
        //im not even going to begin trying to explain this
        if(!args[1] || !textArgument.match("-?\\d+(\\.\\d+)?")) {msg.channel.send('specify dowawws pls uwu and make suwe you message has onwy numbews in it')} else {
        //Name & Random
        let a1 = ['kitty', 'kitten', 'kittycat', 'cat', 'dog' , 'puppy', 'doggo']
        let a2 = ['snuggler', 'petter', 'comforter', 'lover', 'adorer']
        let random = Math.floor((Math.random() * 6) + 1)
        let random2 = Math.floor((Math.random() * 4) + 1)
        let random3 = Math.floor((Math.random() * 2) + 1)
        let a5 = 'xX_' + a1[random] + '_' + a2[random2] + '_Xx'
        //Reaction
        let b1 = textArgument
        let b2 = ['uwu thx for the '+ b1 +' dowwas senpai uwu', 'uwu senpai someone just donated ' + b1 + ' dowwaws uwu thank you so much uwu senpai', 'uwu i think i-im gonna cwy u-uwu senpai thank you so much uwu']
        let b4 = ['i think she likes me hehe better donate another' + b1 + 'dollars', 'she has a bf hehe she will be mine DAREK', 'dont cry precious hehe *sips gfuel*']
        //Message
        const simpEmbed = new MessageEmbed()
        .setTitle(msg.author.username + ' Donated ' + b1 + ' dollars to ' + a5)
        .setDescription('||' + b2[random3] + '|| \n *whispers to self* \n ||' + b4[random3] + '||')
        msg.channel.send(simpEmbed)
        
        }
        break;

        case 'rules':
        //Rules listed on the discord server for twitch.tv/mickeyds11 recreated in an embed
            const rulesEmbed = new MessageEmbed()
            .setTitle('Rules for the Ham Fam Discord Server')
            .setColor('#f7a3a3')
            .setDescription('Rules are by Mickeyds11 and are not HamBot TOS')
            .addField('Rules', "`Absolutely no racism, discrimination, or harassment of any kind in any of the text or voice channels. These will NOT be tolerated and will result in a permanent ban.` \n\n `No spamming (copypastas) and ear-raping on the text channels and voice channels respectively, No one likes to be spammed or ear-raped. Doing so will get you muted.` \n\n `No doxxing or personal attacks allowed in any of the channels. Banter is okay. Anything above that is not allowed.` \n\n `No political or religious talks allowed. Let's keep this server a happy, positive, and welcoming place for all people.` \n\n `No NSFW content allowed, may be it gore, etc. No one wants to see those kinds of stuff.`\n\n `in #NSFW only please`")
        msg.channel.send(rulesEmbed)
        break;
        
        case 'song':
        //displays song name and feature in some ascii art
        let argslice = args.slice(1).join(" ");
        if(!args[1] || !argslice || !args[2]) {msg.channel.send('Please specify song name and feature')} else {
        if(args[3]) {msg.channel.send('songs and features can have spaces between them but not within them')} else {
        
        const playingEmbed = new MessageEmbed()
        .setTitle('now playing:')
        .setColor('#f7a3a3')
        .setDescription(args[1] + ' (Feat: ' + args[2] +') \n───────────:white_circle:────── ◄◄⠀▐▐⠀►► 𝟸:𝟷𝟾 / 𝟹:𝟻𝟼⠀───○ :loud_sound:')
        msg.channel.send(playingEmbed)
        }}
        break;
        
        case 'cancer':
        //litterally a blatant command stolen from dankmemer bot
        const canvas = Canvas.createCanvas(640, 472);
        const ctx = canvas.getContext('2d');
        const backround = await Canvas.loadImage('./Image_manipulation/cancer.png')
        ctx.drawImage(backround, 0, 0, canvas.width, canvas.height);
        const avatar = await Canvas.loadImage(msg.author.displayAvatarURL({ format: 'png' }));
        ctx.drawImage(avatar, 351, 200, 100, 100);
        msg.channel.send({ files: [canvas.toBuffer()]});
        break;
        case 'crazy':
        //shit b crazy doe
        msg.react('😱')
        msg.react('🇳')
        msg.react('🇴')
        msg.react('🇼')
        msg.react('🇦')
        msg.react('🇾')
        break;
        
        case 'test':
        
        break;

}}})


//HAM COMMANDS START
bot.on('message', msg=>{
let args = msg.content.substring(prefix.length).split(" ")

switch(args[0]){
case 'command':
case 'commands':
        //all commands that are featured in this build of hambot are listed here for people to play around with
        const commandsEmbed = new MessageEmbed()
            .setTitle('Ham Commands')
            .setColor('#f7a3a3')
            .setDescription("Most commands cannot be executed in DM form \n\n `fuck hambot` \n `ham` \n `ham 8ball` \n `ham cancer` \n `ham commands` \n `ham developers` \n `ham help` \n `ham listening` \n  `ham pics` \n  `ham playing` \n `ham raid osama's nut cave` \n`ham rules` \n`ham simp` \n `ham song` \n `ham steamed` \n `ham uwu` \n `ham watching` \n `intimidation` \n `kaotics new album` \n `roast eric` \n `wheres the thing`")
        
       msg.channel.send(commandsEmbed)
    break;
}})


