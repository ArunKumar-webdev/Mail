let data;
let sidebarItem = [];
let chatsList = [];
let lablesList = [];
let mailList = [];
var container = document.getElementById('container');
var menuItems = document.getElementsByClassName('menu-items');
var lablesMenuItems = document.getElementsByClassName('lables-menu-items');
var chatsMenuItems = document.getElementsByClassName('chats-menu-items');
var mailTable = document.getElementsByClassName('mail-table');
var mailpaneContent = document.getElementById('panecontent');
var menuOut = '';
var lablesOut = '';
var chatsOut = '';
var mailitemOut = '';
var mailpaneContenttemp = '';
var checkbox = "./Assets/check-box.svg";
var favicon = "./Assets/add_to_fav_icon.svg";
var unreadmsg = '';
var hrtag = `<hr/>`;
var dribbblelable = "./Assets/dribbble_lable.svg";
var roommateslable = "./Assets/roommate_lable.svg";
var billslable = "./Assets/bills_lables.svg";
var lableimage = "";



const promiseOfData = fetch("data.json")
    .then(response => response.json())
    .then(json => {
        // console.log(json);
        return json;
    });


window.onload = async () => {
    data = await promiseOfData;
    // console.log(data);
    sidebarItem = data.sidebarItem.map(current => current);
    chatsList = data.chatsList.map(current => current);
    lablesList = data.lablesList.map(current => current);
    mailList = data.mailList.map(current => current);

    sidebarItem.forEach(element => {
        if (element == "INBOX") {
            menuOut += `<li class='sideli activee' style="width: 170%;font-weight: bold;">${element}<span style="color: white" class="dot dotactive"><div class="circle">5</div></span></li><br>`;
            $(menuItems).html(menuOut);
        } else if (element == "DRAFT") {
            menuOut += `<li class='sideli' style="width: 170%;font-weight: bold;">${element}<span class='dottli' style="border: 2px solid darkslategrey;height: 25px;
                    width: 25px;
                    border-radius: 50%;
                    margin-left: 197px;
                    display: inline-block;
                    text-align: center;"><div class="circle">2</div></span></li><br>`;
            $(menuItems).html(menuOut);
        } else if (element == "MESSAGE") {
            menuOut += `<li class='sideli' style="width: 200%;font-weight: bold;">${element}<span class='dottli' style="border: 2px solid darkslategrey;height: 25px;
                    width: 25px;
                    border-radius: 50%;
                    margin-left: 174px;
                    display: inline-block;
                    text-align: center;"><div class="circle">2</div></span></li><br>`;
            $(menuItems).html(menuOut);
        }
        else if (element == "SPAN") {
            menuOut += `<li class='sideli' style="width: 170%;font-weight: bold;">${element}<span class='dottli' style="border: 2px solid darkslategrey;    height: 25px;
                    width: 25px;
                    border-radius: 50%;
                    margin-left: 207px;
                    display: inline-block;
                    text-align: center;"><div class="circle">3</div></span></li><br>`;
            $(menuItems).html(menuOut);
        }
        else {
            menuOut += `<li class='sideli' style="width: 200%;font-weight: bold;">${element}</li><br>`;
            $(menuItems).html(menuOut);
        }
    });



    mailList.forEach(element => {
        if (element.mailRead != true) {
            unreadmsg = "unreadMsg";
        }
        else {
            unreadmsg = "";
        }


        if (element.fromMail == "Roman Gonzalez") {
            mailitemOut += `<tr class='mail-item active'>
                                <td class='tableData'>                                
                                <div class='item-container fromto-container ${unreadmsg}'>
                                 ${lableimage}
                                ${element.fromMail},
                                ${element.toMe}
                                ${element.numberOfMail}
                                </div> &emsp;
                                <div class='item-container subject-container ${unreadmsg}'>
                                ${element.subject}
                                ${element.content}
                                </div>
                                <div class='item-container ${unreadmsg}'>
                                ${element.date}
                                </div>
                                </div>
                                </td>
                                </tr>`;

            $(mailTable).html(mailitemOut);
        }
        else {
            mailitemOut += `<tr class='mail-item'>
                                <td class='tableData'>                                
                                <div class='item-container fromto-container ${unreadmsg}'>
                                 ${lableimage}
                                ${element.fromMail},
                                ${element.toMe}
                                ${element.numberOfMail}
                                </div> &emsp;
                                <div class='item-container subject-container ${unreadmsg}'>
                                ${element.subject}
                                ${element.content}
                                </div>
                                <div class='item-container ${unreadmsg}'>
                                ${element.date}
                                </div>
                                </div>
                                </td>
                                </tr>`;

            $(mailTable).html(mailitemOut);
        }

    });

    // default load 
    $(document).ready(function () {
        mailpaneContenttemp += `<p id="name" style="font-size: 12px;">Hi Eric,</p>
                <p id="heading" style="padding-top: 20px;">There are things I love and hate about Aussie food.</p>
                <p id="contentPane" style="margin-top: 22px;font-size: 12px;">Being American, I loathe Australian hamburgers and lack of quality Mexican food. I love the amount of Asian restaurants available in the cities, and you can take me out for a pub dinner (schnitzel) any day of the week. My fascination with Australia started young and was probably enhanced as a tween when I fell in love with Silverchair. I always thought it sounded like an exotic place to travel, and you never meet an Aussie traveling that doesn't love their home country</p>
                <p style="padding-top: 30px;font-size: 12px;">Thank you..</p>
                <p id="thanksarea" style="font-size: 10px;">Kenil Bhavsar</p>
                <br>
                <br>
                <hr style="width: 685px;opacity: 0.1;">
                <div style="padding-top: 6px;padding-bottom: 7px;"><p style="font-size: 11px;">Attachment :</p>
                <img style="    margin-top: -23px;margin-left: 655px;width: 25px;" src="./Assets/download-file.png"
                    alt="circle effects png" />
                <p style="font-size: 8px;margin-top: -12px;">My Photo.jpg</p>                        
                </div>
                <hr style="width: 685px;opacity: 0.1;">

                <input id="reply" style="margin-top: 40px;width: 686px;height: 70px;font-size: 10px;padding-bottom: 35px;border: 1px solid lightgray; opacity: 0.7; padding-left: 10px; padding-bottom: 35px; background-size: 26px;"  type="text"></p>
                <button class="button button3">Send</button>`;

                $(mailpaneContent).html(mailpaneContenttemp);
    });

    $(".mail-item").click(function () {
        $(this).addClass("active").siblings().removeClass("active");

        for(let i=0;i<mailList.length;i++){
            var res = this.innerText.split(",");
            if (mailList[i].fromMail == res[0] && res[0] != "Roman Gonzalez") {
                document.getElementById("name").innerHTML = res[0] + ',';
                document.getElementById("contentPane").innerHTML = mailList[i].content;
                document.getElementById("heading").innerHTML = mailList[i].content;
                document.getElementById("contentPane").innerHTML = mailList[i].innercontent;
                document.getElementById("thanksarea").innerHTML = res[0];
                document.getElementById("headingname").innerHTML = res[0];
                document.getElementById("headingsubject").innerHTML = mailList[i].content;
                return;                
            } else if (res[0] == "Roman Gonzalez"){
                mailpaneContenttemp = '';
                mailpaneContenttemp += `<p id="name" style="font-size: 12px;">Hi Eric,</p>
                <p id="heading" style="padding-top: 20px;">There are things I love and hate about Aussie food.</p>
                <p id="contentPane" style="margin-top: 22px;font-size: 12px;">Being American, I loathe Australian hamburgers and lack of quality Mexican food. I love the amount of Asian restaurants available in the cities, and you can take me out for a pub dinner (schnitzel) any day of the week. My fascination with Australia started young and was probably enhanced as a tween when I fell in love with Silverchair. I always thought it sounded like an exotic place to travel, and you never meet an Aussie traveling that doesn't love their home country</p>
                <p style="padding-top: 30px;font-size: 12px;">Thank you..</p>
                <p id="thanksarea" style="font-size: 10px;">Kenil Bhavsar</p>
                <br>
                <br>
                <hr style="width: 685px;opacity: 0.1;">
                <div style="padding-top: 6px;padding-bottom: 7px;"><p style="font-size: 11px;">Attachment :</p>
                <img style="    margin-top: -23px;margin-left: 655px;width: 25px;" src="./Assets/download-file.png"
                    alt="circle effects png" />
                <p style="font-size: 8px;margin-top: -12px;">My Photo.jpg</p>                        
                </div>
                <hr style="width: 685px;opacity: 0.1;">

                <input value="it's really an amazing. I want to know more about it..!!" id="reply" style="margin-top: 40px;width: 686px;height: 70px;font-size: 10px;padding-bottom: 35px;border: 1px solid lightgray; opacity: 0.7; padding-left: 10px; padding-bottom: 35px; background-size: 26px;"  type="text"></p>
                <button class="button button3">Send</button>`;
                document.getElementById("headingname").innerHTML = "Kenil Bhavsar";
                document.getElementById("headingsubject").innerHTML = 'My Amazing trip of australia!';
                $(mailpaneContent).html(mailpaneContenttemp);
                return;
            }
    }
    });

    $(".sideli").click(function () {
        $(this).addClass("activee").siblings().removeClass("activee");
    });

    $(".tablinks").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
    });

    $(document).ready(function () {
        $("#reply").val("it's really an amazing. I want to know more about it..!!");
    });

    $("#turnoff").click(function () {
        alert('Signing Out : Have a nice day 🤗')
        setTimeout(document.getElementById("container").innerHTML = "",1000)
        
    });

};