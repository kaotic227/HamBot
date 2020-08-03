const {Client,Attachment,MessageEmbed,
} = require('discord.js');
const Discord = require('discord.io');
const bot = new Client();
const cheerio = require('cheerio')
const request = require('request')
const ms = require('ms')
const fs = require('fs')
const config = require('./config.json');
const { Canvas } = require('canvas');

bot.login(config.token);

bot.on('ready', () =>{
console.log('Initiating Project R.U.B');
let activitySet = Math.floor(Math.random() * 3) + 1;
    switch(activitySet){
        case 1:
        bot.user.setActivity('Ham', { type: 'LISTENING' });
        break
        case 2:
        bot.user.setActivity('With Ham', { type: 'PLAYING' });
        break;
        case 3:
        bot.user.setActivity('Ham', { type: 'WATCHING' });
        break;
    }
})

var ver = 20.7

const prefix = 'ham ';

//STREAM DETECTION START
bot.on('message', msg=>{
if(msg.content == '@everyone mickeyds11 went live on Twitch') {bot.user.setActivity("HAM GOD", {type: "STREAMING", url: "https://www.twitch.tv/mickeyds11"});}
if(msg.author.id == '338036054114435074'){ 
if(msg.content.includes('twitch')) {bot.user.setActivity("HAM GOD", {type: "STREAMING", url: "https://www.twitch.tv/mickeyds11"});}
}})
//STREAM DETECTION END

//REGULAR COMMANDS START

bot.on('message', msg=>{

    let msgContentLowerCase = msg.content.toLowerCase();
    if(msgContentLowerCase.startsWith("so heres the thing")){
        msg.reply('gimme')
    }

    console.log(msg.content);
    
    switch(msg.content.toLowerCase()){

    case 'fuck hambot':
    case 'fuck Hambot':
    case 'fuck HamBot':
    case 'fuck ham bot':
    case 'fuck Ham bot':
    case 'fuck Ham Bot':
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

    case 'the farm':
    msg.channel.send('im sorry, we go by ham headquarters now, get with the times.')
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

    case 'ham version':
    case 'ham ver':
    case 'ham info':
    msg.channel.send('version ' + ver)
    break;
    
    case 'ham help':
    msg.channel.send('nothing here, but do "ham commands" for a list of commands')
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
    case 'ham steamed secret':
    msg.channel.send('https://youtu.be/MP6jyY2rs9w ||hehe its a burger||')
    break;


}})
//REGULAR COMMANDS END







//ADVANCED COMMANDS START
bot.on('message', async msg=>{
    let args = msg.content.substring(prefix.length).split(" ")

    switch(args[0].toLowerCase()){

        
    case '8ball':
    
    if(!args[0]) return msg.reply('Please ask a question')
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
    
        break;
        
        case 'activity':
        if(msg.author.id == '338036054114435074') {
        if(!args[0]) return msg.reply('Please write an activity type and custom activity status ham.activity.ActivityType.CustomActivityStatus')
        if(!args[1]) return msg.reply('Please write a custom activity status')
        let argslice = args.slice(2).join(" ");
        let argslice2lwr = args.slice(2).join(" ").toLowerCase();
        let argslice3 = args.slice(3).join(" ");
        let args2upper = args[1].toUpperCase();
        if(argslice2lwr.startsWith('to')) {bot.user.setActivity(argslice3, { type: 'LISTENING' });} else {
        bot.user.setActivity(argslice, { type: args2upper });
        }
        } else {msg.channel.send('Insufficient privilege')}
        break;
        
        
        case 'bug', 'bugs':
        let jsonString = 
        fs.writeFile('./bugs.json', jsonString, err => {
            if (err) {
                    console.log('Error writing file', err)
            } else {
                    console.log('Successfully wrote file')
            }})
        break;

        //case 'simp':
        //let streamer1 = ['kitty', 'kitten', 'kittycat', 'cat', 'dog' , 'puppy', 'doggo']
        //let streamer1Random = Math.floor(Math.random() * 7) + 1;
        //let steamer2 = ['snuggler', 'petter', 'comforter', 'lover', 'adorer']
        //let streamer2Random = Math.floor(Math.random() * 5) + 1;
        //let streamerAmt1Response = ['Ayo ' + dollarAmt + ' bucks!', 'uwu thx for the ' + dollarAmt + ' dowwas senpai uwu', '... (cricket sounds)']
        //let streamerAmt2Response = ['omg thank you so much for the ' + dollarAmt + ' dollars', 'uwu senpai someone just donated ' + dollarAmt + ' dowwaws uwu thank you so much uwu senpai', '... she was afk']
        //let streamerAmt3Response = ['HOLY FUCKING SHIT SOMEONE JUST DONATED ' + dollarAmt + ' DOLLARS OMG', 'uwu i think i-im gonna cwy u-uwu senpai thank you so much uwu', '... she was afk']
        //let streamerAmtResponseRNG = Math.floor(Math.random() * 3) + 1;
        //var response
        //var moneyResponse
        //var dollarAmt = args[1]
        //if(dollarAmt < 100){moneyResponse = 1}
        //if(dollarAmt > 100){if(dollarAmt < 1000){moneyResponse = 2} else {moneyResponse = 3}}
        //const simpEmbed = new MessageEmbed()
        //.setTitle(msg.author.username + ' Donates ')
        //break;
        case 'rules':
        const rulesEmbed = new MessageEmbed()
        .setTitle('Rules for Ham Headquarters')
        .setDescription('Rules by Mickeyds11')
        .addField('Rule #1', 'Absolutely no racism, discrimination, or harassment of any kind in any of the text or voice channels.\n These will NOT be tolerated and will result in a permanent ban.')
        .addField('Rule #2', 'No spamming (copypastas)  and ear-raping on the text channels and voice channels respectively \nNo one likes to be spammed or ear-raped. Doing so will get you muted.')
        .addField('Rule #3', 'No doxxing or personal attacks allowed in any of the channels.\n Banter is okay. Anything above that is not allowed.')
        .addField('Rule #4', "No political or religious talks allowed.\n Let's keep this server a happy, positive, and welcoming place for all people.")
        .addField('Rule #5', 'No NSFW content allowed, may be it gore, etc.\n No one wants to see those kinds of stuff.\n\n\n in #NSFW only please')
        msg.channel.send(rulesEmbed)
        break;
        case 'playing':
        if(!args[1]) {msg.channel.send('Please specify song name')} else {
        if(!args[2]) {msg.channel.send('Please specify your feature')} else {
        const playingEmbed = new MessageEmbed()
        .setTitle('now playing:')
        .setDescription(args[1] + ' (Feat: ' + args[2] +') \n───────────:white_circle:────── ◄◄⠀▐▐⠀►► 𝟸:𝟷𝟾 / 𝟹:𝟻𝟼⠀───○ :loud_sound:')
        msg.channel.send(playingEmbed)
        }}
        case 'poopy':
        const canvas = Canvas.createCanvas(640, 472)
        const ctx = canvas.getContext('2d');
        const backround = await Canvas.loadImage('./cancer.png')
        ctx.drawImage(backround, 0, 0, canvas.width, canvas.height);
        const avatar = awaitCanvas.loadImage(msg.author.displayAvatarURL({format: 'png'}))
        ctx.drawImage(avatar, 351, 300, 100, 100)
        msg.channel.send(canvas.toBuffer(), 'cancer.png')
        break;

}})


//HAM COMMANDS START
bot.on('message', msg=>{
let args = msg.content.substring(prefix.length).split(" ")

switch(args[0]){
case 'command':
case 'commands':
            const commandsEmbed = new MessageEmbed()
            
            .setTitle('Ham Commands')
            .setColor('#f7a3a3')
            .setDescription('')
            .addField('Command #1', 'ham raid osamas nut cave (posts a link of osamus_nut_cave on twitch)')
            .addField('Command #2', 'wheres the thing? (says "*hands you the thing*")')
            .addField('Command #3', 'ham help (says "nothing here, but do "ham commands" for a list of commands")')
            .addField('Command #4', 'the farm (says "im sorry, we go by ham headquarters now, get with the times.")')
            .addField('Command #5', 'roast eric (says "@Ericlul#8981 kinda cringe")`')
            .addField('Command #6', 'ham commands (gives a list of basic commands as well as describes what they do and the different variations of text to execute them)`')
            .addField('Command #7', 'intimidation (replys "INTIMIDATION" with the attachment `https://media.discordapp.net/attachments/678502901408333824/720865873014816779/unknown.png?width=677&height=677)`')
            .addField('Command #8', 'fuck hambot (replys "heck you kid ur adopted" with the attachment `https://cdn.discordapp.com/attachments/678502901408333824/720879090042929172/no_u.mp4)`')
            .addField('Command #9', 'ham (replys "ham")`')
            .addField('Command #10', 'ham listening (sets activity status to "listening to ham")`')
            .addField('More Commands', 'Say "ham commands 2, pg 2, pg2, page2, or page 2 for more commands!"')
            .setFooter('Support at https://bit.ly/2ZarDN3')
            
            const commandsPg2Embed = new MessageEmbed()
            .setTitle('Ham Commands')
            .setColor('#f7a3a3')
            .setDescription('')
            .addField('Command #11', 'ham playing (sets activity status to "playing with ham")')
            .addField('Command #12', 'watching (sets activity status to "watching ham)')
            .addField('Command #13', 'kaotics new album (sends a link to `https://www.youtube.com/watch?v=2Nvamnma_Aw&feature=youtu.be&t=35)`')
            .setFooter('Support at https://bit.ly/2ZarDN3')
        
    let commandsSwitch = args.slice(1).join(" ");
    switch (commandsSwitch.toLowerCase()){
    case '':
    msg.author.send(commandsEmbed)
    break;
    case '2':
    case 'pg 2':
    case 'pg2':
    case 'page2':
    case 'page 2':
    msg.author.send(commandsPg2Embed)
    break;
    }
    break;
}})
//HAM COMMANDS END
//ADVANCED COMMANDS END