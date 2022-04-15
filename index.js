const qrcode = require('qrcode-terminal');
const ytsr = require('ytsr');
const gTTS = require('gtts');
const axios = require('axios').default;

var chatmoodenabled = []






const { Client, ChatTypes, MessageMedia } = require('whatsapp-web.js');



const client = new Client();

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', msg => {
    if (msg.body == '!wall-e') {
        msg.reply('hellow i am wall-e');
    }
    else if(msg.body=='!chatmood'){

        function arrayRemove(arr, value) { 
    
            return arr.filter(function(ele){ 
                return ele != value; array
            });
        }



        
        
        console.log(msg.from);
        (async()=>{
            console.log(await msg.getChat())
        })
        
        if (msg.author == '919064176535@c.us' || msg.author == '916295489435@c.us' || msg.author == '918250604409@c.us') {

            msg.reply("Ai Chatmood is disabled for some errors will be available in some days")

            // var msgfrom = msg.from;
            // if(chatmoodenabled.includes(msgfrom)){
            //     var result = arrayRemove(chatmoodenabled, msgfrom);
            //     chatmoodenabled=[]
            //     chatmoodenabled=result
            // }else{
            //     chatmoodenabled.push(msgfrom)
            // }

            // if(chatmoodenabled.includes(msgfrom)){
            //     msg.reply("ai chat mood turned on");
            // }else{
            //     msg.reply("ai chat mood turned off");
            // }
        } else {
            msg.reply("you are not authorized to toogle between chat moods");
        }
    }
    else if (msg.body.includes('!spamall')) {
        var num = msg.body.replace("!spamall ", "");
        (async () => {
            const chat = await msg.getChat();

            let text = "";
            let mentions = [];

            for (let participant of chat.participants) {
                const contact = await client.getContactById(participant.id._serialized);

                mentions.push(contact);
                text += `@${participant.id.user} `;
            }

            if (msg.author == '919064176535@c.us' || msg.author == '916295489435@c.us' || msg.author == '17736448375@c.us' || msg.author == '917477508440@c.us' || msg.author == '918250604409@c.us') {
                for (let i = 0; i < num; i++) {
                    chat.sendMessage(text, { mentions });
                }
            } else {
                msg.reply("you are not authorized for master all spam");
            }
        })();
    }
    else if (msg.body.includes('!say')) {
        var num = "";
        if(msg.body.toLocaleLowerCase().includes("sahil") || msg.body.toLocaleLowerCase().includes("shibam") || msg.body.toLocaleLowerCase().includes("cbom") || msg.body.toLocaleLowerCase().includes("cibam") || msg.body.toLocaleLowerCase().includes("cibom") || msg.body.toLocaleLowerCase().includes("sahil")){
            num = "i dont speak about my masters";
        }else{
            num = msg.body.replace("!say ","");
        }
        (async () => {
            const chat = await msg.getChat();

            if(num.length<=200){
                var gtts = new gTTS(num, 'hi');
                gtts.save('hello.mp3', function (err, result) {
                    if (err) { throw new Error(err) }
                    const media = MessageMedia.fromFilePath('hello.mp3');
                    chat.sendMessage(media);
                });
            }
            else{
                msg.reply("sentence is too long . The long sentence support is not available")
            }



        })();
    }
    // else if (msg.body == '!name') {
    //     const media = MessageMedia.fromFilePath(
    //         path.resolve('.', `hello.mp3`),
    //     );

    //     msg.reply(media);
    // }
    else if (msg.body.includes('!wiki')) {
        var serch = msg.body.replace("!wiki ", "");
        (async () => {
            try {
                const page = await wiki.page(serch);
                const summary = await page.summary();
                msg.reply(summary['extract']);

                //Response of type @wikiSummary - contains the intro and the main image
            } catch (error) {
                msg.reply("Please Check your sopelling")
                //=> Typeof wikiError
            }
        })();
    }
    else if (msg.body.includes('!play')) {
        var serch = msg.body.replace("!play ", "");
        (async () => {
            try {
                const search = await ytsr(serch, { pages: 1 });
                msg.reply(search['items'][0]['url']);
                msg.reply("You can use YTFY to listen to all music for free..")
            } catch (error) {
                msg.reply("Please Check your sopelling")
                //=> Typeof wikiError
            }
        })();
    }
    else if (msg.body.includes('!contest')) {
        var serch = msg.body.replace("!contest ", "");
        var data;
        var size;
        (async () => {
            try {
                axios.get(`https://kontests.net/api/v1/${serch}`)
                    .then(function (response) {
                        console.log(response);
                        data = response.data;
                        size = data.length;
                    })
                    .then(res => {
                        console.log();
                    }).then(req => {
                        for (let i = 0; i < size; i++) {
                            msg.reply(`NAME :- ${data[i]['name']}\n\nSTARTS :- ${data[i]['start_time']}\n\nENDS :- ${data[i]['end_time']}\n\nURL :- ${data[i]['url']}`)
                        }
                    })
            } catch (error) {
                msg.reply('cp platform name not found');
            }
        })();
    }
    else if (msg.body.includes('!math')) {
        var serch = msg.body.replace("!math ", "");
        var data;
        (async () => {
            try {
                axios.get(`https://newton.vercel.app/api/v2/${serch}`)
                    .then(function (response) {
                        console.log(response);
                        data = response.data;
                    })
                    .then(res => {
                        console.log();
                    }).then(req => {
                        msg.reply(data['result'])
                    })
            } catch (error) {
                msg.reply('Something is wrong sorry')
            }
        })();
    }
    else if (msg.body == '!help--math') {
        msg.reply("for Simplify	 simplify/2^2+2(2)	8 \n\nfor Factor factor/x^2 + 2x	x (x + 2)\n\nfor Derive    derive/x^2+2x  	2 x + 2\n\nfor Integrate	integrate/x^2+2x	1/3 x^3 + x^2 + C \n\nfor Find 0's	zeroes/x^2+2x	[-2, 0] \n\nfor Find Tangent	tangent/2lx^3	12 x + -16\n\nfor Area Under Curve	area/2:4lx^3	60\n\nfor Cosine	cos/pi	-1\n\nfor Sine	sin/0	0\n\nfor Tangent	tan/0	0 \n\nfor Inverse Cosine	arccos/1	0\n\nfor Inverse Sine	arcsin/0	0\n\nfor Inverse Tangent	arctan/0	0\n\nfor Absolute Value	abs/-1	1\n\nfor Logarithm	log/2l8	3");
    }

    else if (msg.body.includes('!spam')) {
        if (msg.author == '919064176535@c.us' || msg.author == '916295489435@c.us' || msg.author == '17736448375@c.us' || msg.author == '917477508440@c.us' || msg.author == '918250604409@c.us') {
            var serch = msg.body.replace("!spam ", "");
            var res = serch.split("*");
            var lenth = res[0];
            var key = serch.replace(`${res[0]} `, "");
            var size = lenth < 40 ? lenth : 40;
            for (let j = 0; j < size; j++) {
                msg.reply(key);
            }
        }
        else {
            msg.reply('Yoy are not aythorized toperform spam')
        }
    }
    else if (msg.body.includes('!news')) {
        var search = msg.body.replace("!news ", "");
        var data;
        (async () => {
            try {
                axios.get(`https://newsapi.org/v2/everything?q=${search}&sortBy=popularity&apiKey=6ffb40a98c6549a4814c8b76bc75644a`)
                    .then(function (response) {
                        console.log(response);
                        data = response.data;
                    })
                    .then(res => {
                        console.log();
                    }).then(req => {
                        var size = data['articles'].length < 10 ? data['articles'].length : 10;
                        for (var i = 0; i < size; i++) {
                            var resp = `*${data['articles'][i]["title"]}*\n\n${data['articles'][i]["description"]}\n\nLink: ${data['articles'][i]["url"]}`;
                            msg.reply(resp);
                        }
                    })
            } catch (error) {
                msg.reply('Something is wrong sorry')
            }
        })();
    }
    else if (msg.body.includes('!weather')) {
        var search = msg.body.replace("!weather ", "");
        var data;
        (async () => {
            try {
                axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${search}&appid=2c451e495d222ab11efa8d522ef33a5f`)
                    .then(function (response) {
                        console.log(response);
                        data = response.data;
                    })
                    .then(res => {
                        console.log();
                    }).then(req => {
                        var resp = `*Weather in ${data["name"]}*\n${data["weather"][0]["description"]}\n`;
                        resp += `Temperature: ${Number((data["main"]["temp"]) - 273)} C\n`;
                        resp += `Min: ${Number((data["main"]["temp_min"]) - 273)} C\n`;
                        resp += `Max: ${Number((data["main"]["temp_max"]) - 273)} C\n`;
                        msg.reply(resp);
                    })
            } catch (error) {
                msg.reply('Something is wrong sorry')
            }
        })();
    }
    else{
        if(chatmoodenabled.includes(msg.from)){
            var text = msg.body;
            var reply="";
            var rep = "";
            (async()=>{
                try {
                    var options = {
                        method: 'GET',
                        url: `https://api.pgamerx.com/v3/ai/response?message=encodeURIComponent("${text}")&type=stable`,
                        headers: {
                          'x-api-key': 'jYLk9BFC0WEO',
                          'x-rapidapi-key': '740d2467acmshef1446e20d79861p16ed12jsn18c35912f27c',
                          'x-rapidapi-host': 'random-stuff-api.p.rapidapi.com'
                        }
                      };
                      
                      axios.request(options).then(function (response) {
                        if(response.data[0]['message'].includes('RSA.')){
                            rep = response.data[0]['message'].replace("RSA.","Rose wall-e");
                        }
                        else if(response.data[0]['message'].includes('PGamerX.')){
                            rep = response.data[0]['message'].replace("PGamerX.","SHIBAM & SAHIL");
                        }
                        else if(response.data[0]['message'].includes('PGamerX')){
                            rep = response.data[0]['message'].replace("PGamerX","SHIBAM & SAHIL");
                        }
                        else{
                            rep = response.data[0]['message'];
                        }
                        msg.reply(rep);
                      })
                      
                      .catch(function (error) {
                          console.error(error);
                      }); 
                } catch (error) {
                    
                }
            })();
        }
    }
})

client.initialize();