const discord = require('discord.js')
const ytdl = require('ytdl-core')
const bot = new discord.Client()


const token = 'NzI2NTUyMzUyMTI2OTI2OTM5.XvfArw.03wdjFpPuVwN-TG8lPfztKNlGEE'
const prefix = '!' 

var servers = {}

bot.on('ready' , () => {
    // console.log('Bot is online!')
    
})

bot.on('message' , (msg) => {

    let args = msg.content.substring(prefix.length).split(" ")

    switch(args[0]){
        case 'play':

            const  play = (connection,msg) => {
                var server = servers[msg.guild.id]

                server.dispatcher = connection.play(ytdl(server.queue[0],{filter: "audioonly"}))

                server.queue.shift()

                server.dispatcher.on("end" , ()=>{
                    if(server.queue[0]){
                        play(connection,msg)
                    }else{
                        connection.disconnect()
                    }
                })


            }

            if(!args[1]){
                msg.channel.send('You need to provide a youtube link.')
                return;
            }

            if(!msg.member.voice.channel){
        
                msg.channel.send('You need to be in a voice channel to play music!')
                return;
            }

            if(!servers[msg.guild.id]){
                servers[msg.guild.id] = {
                    queue : []
                }
            }

            var server = servers[msg.guild.id]

            server.queue.push(args[1])

            if(!msg.guild.voiceConnection){
                msg.member.voice.channel.join().then((connection) => {
                    play(connection,msg)
                })
            }



        break;


    }


})

bot.login(token)
