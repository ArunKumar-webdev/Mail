let data;
let sidebarItem=[];
let chatsList= [];
let lablesList =[];
let mailList= [];
var container = document.getElementById('container');
var menuItems=document.getElementsByClassName('menu-items');
var lablesMenuItems=document.getElementsByClassName('lables-menu-items');
var chatsMenuItems=document.getElementsByClassName('chats-menu-items');
var mailTable=document.getElementsByClassName('mail-table');
var menuOut='';
var lablesOut='';
var chatsOut='';
var mailitemOut='';
var checkbox="./Assets/check-box.svg";
var favicon="./Assets/add_to_fav_icon.svg";
var unreadmsg='';
var hrtag=`<hr/>`;
var dribbblelable="./Assets/dribbble_lable.svg";
var roommateslable="./Assets/roommate_lable.svg";
var billslable="./Assets/bills_lables.svg";
var lableimage=""



const promiseOfData=fetch("data.json")
                        .then(response => response.json())
                        .then(json => {
                            console.log(json);
                            return json;
                        });

                        

window.onload = async () => {
    data = await promiseOfData;
            console.log(data);
            sidebarItem = data.sidebarItem.map(current => current);
            chatsList= data.chatsList.map(current => current);
            lablesList = data.lablesList.map(current => current);
            mailList= data.mailList.map(current => current); 

            sidebarItem.forEach(element => {
                if(element == "INBOX"){
                    menuOut += `<li style="background-color: white;color: black;width: 170%;">${element}<span style="color: white" class="dot"><div class="circle">4</div></span></li><br>`;
                $(menuItems).html(menuOut);
                } else if(element == "DRAFTS"){
                    menuOut += `<li style="width: 170%;">${element}<span style="border: 2px solid darkslategrey;height: 25px;
                    width: 25px;
                    border-radius: 50%;
                    margin-left: 211px;
                    display: inline-block;
                    text-align: center;"><div class="circle">2</div></span></li><br>`;
                $(menuItems).html(menuOut);
                } else if(element == "MESSAGE"){
                    menuOut += `<li style="width: 170%;">${element}<span style="border: 2px solid darkslategrey;height: 25px;
                    width: 25px;
                    border-radius: 50%;
                    margin-left: 198px;
                    display: inline-block;
                    text-align: center;"><div class="circle">2</div></span></li><br>`;
                $(menuItems).html(menuOut);
                }
                else if(element == "SPAN"){
                    menuOut += `<li style="width: 170%;">${element}<span style="border: 2px solid darkslategrey;    height: 25px;
                    width: 25px;
                    border-radius: 50%;
                    margin-left: 230px;
                    display: inline-block;
                    text-align: center;"><div class="circle">3</div></span></li><br>`;
                $(menuItems).html(menuOut);
                }
                 else {
                menuOut += `<li style="width: 200%;">${element}</li><br>`;
                $(menuItems).html(menuOut);
                }
            });
           


            mailList.forEach(element => {
                if(element.mailRead != true) {
                     unreadmsg="unreadMsg";
                }
                else{
                    unreadmsg="";
                }

                
                if(element.fromMail == "Roman Gonzalez"){
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
           
            $(".mail-item").click(function (){
                $(this).addClass("active").siblings().removeClass("active");                
              });
              
                        
    };