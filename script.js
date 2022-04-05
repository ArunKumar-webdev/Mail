// const data=[];
// const mailItem=document.getElementsByClassName("mail-item")
// let item=``;
// $.ajax({
//     type: 'GET',
//     url:  'data.json', 

//     success: function(data){
//         console.log(data)
//         data.map(ele=>{
//             console.log(ele)
//         })
//     },
//     async:false
// });
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
                    menuOut += `<li style="background-color: white;color: black;width: 170%;">${element}<span style="color: white" class="dot">4</span></li><br>`;
                $(menuItems).html(menuOut);
                } else if(element == "DRAFTS"){
                    menuOut += `<li style="width: 170%;">${element}<span style="border: 2px solid darkslategrey;height: 25px;
                    width: 25px;
                    border-radius: 50%;
                    margin-left: 211px;
                    display: inline-block;
                    text-align: center;">2</span></li><br>`;
                $(menuItems).html(menuOut);
                } else if(element == "MESSAGE"){
                    menuOut += `<li style="width: 170%;">${element}<span style="border: 2px solid darkslategrey;height: 25px;
                    width: 25px;
                    border-radius: 50%;
                    margin-left: 198px;
                    display: inline-block;
                    text-align: center;">2</span></li><br>`;
                $(menuItems).html(menuOut);
                }
                else if(element == "SPAN"){
                    menuOut += `<li style="width: 170%;">${element}<span style="border: 2px solid darkslategrey;    height: 25px;
                    width: 25px;
                    border-radius: 50%;
                    margin-left: 230px;
                    display: inline-block;
                    text-align: center;">3</span></li><br>`;
                $(menuItems).html(menuOut);
                }
                 else {
                menuOut += `<li style="width: 200%;">${element}</li><br>`;
                $(menuItems).html(menuOut);
                }
            });
           
            // lablesList.forEach(element => {
            //     if(element=="Dribbble"){
            //         lableimage=`<img alt="lableicon" class="asidelableicon" src="${dribbblelable}">`
            //     }
            //     else if(element=="Roommates"){
            //         lableimage=`<img alt="lableicon" class="asidelableicon" src="${roommateslable}">`
            //     }
            //     else if(element=="Bills"){
            //         lableimage=`<img alt="lableicon" class="asidelableicon" src="${billslable}">`
            //     }
            //     else{
            //         lableimage=" ";
            //     }
                
            //     lablesOut += `<li>${element}</li>${lableimage} `;
                
            //     $(lablesMenuItems).html(lablesOut);
            // });

            // chatsList.forEach(element => {
            //     if(element=="Dale Brewer"){
                    
            //         lableimage='';
            //     }
            //     else if(element=="Amir Mesguich"){
            //         lableimage=`<img alt="lableicon" class="chatlableicon" src="${roommateslable}">`
            //     }
            //     else if(element=="Bill Kenney"){
            //         lableimage=`<img alt="lableicon" class="chatlableicon" src="${roommateslable}">`
            //     }
            //     else if(element=="Charlie Waite"){
            //         lableimage=`<img alt="lableicon" class="chatlableicon" src="${roommateslable}">`
            //     }
            //     else{
            //         lableimage=" ";
            //     }
            //     chatsOut += `${lableimage} <li>${element}</li>`;
            //     $(chatsMenuItems).html(chatsOut);
            // });




            mailList.forEach(element => {
                if(element.mailRead != true) {
                     unreadmsg="unreadMsg";
                }
                else{
                    unreadmsg="";
                }

                if(element.lable=="Dribbble"){
                    lableimage=`<img alt="lableicon" class="lableicon" src="${dribbblelable}">`
                }
                else if(element.lable=="Roommates"){
                    lableimage=`<img alt="lableicon" class="lableicon" src="${roommateslable}">`
                }
                else if(element.lable=="Bills"){
                    lableimage=`<img alt="lableicon" class="lableicon" src="${billslable}">`
                }
                else{
                    lableimage=" ";
                }
                

                mailitemOut += `<tr class='mail-item'>
                                <td class='tableData'>
                                <div class='item-container fromto-container ${unreadmsg}'>
                                 ${lableimage}
                                <img alt="checkbox" class="mailicon" src="${checkbox}">
                                <img alt="favicon" class="mailicon" src="${favicon}">
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
                                </td>
                                </tr>`;
                    
                $(mailTable).html(mailitemOut);
                
            });
           
            $(".mail-item").click(function (){
                $(this).addClass("active").siblings().removeClass("active");
              });    
              
                        
    };

                        
                     

    // $(".mail-item").click(function (){
    //     $(this).addClass("active").siblings().removeClass("active");
    //   });



    //   $(".mail-item").click(function (){
    //     $(this).addClass("active").siblings().removeClass("active");
    //   });      
               

                               
                        // sidebarItem = data.sidebarItem.map(current => current);
                        // chatsList= data.chatsList.map(current => current);
                        // lablesList = data.lablesList.map(current => current);
                        // mailList= data.mailList.map(current => current);  
                        
                        // sidebarItem.map(element=>{ 
                        //     console.log('hiii',element)  
                        //     sidebar.innerHTML += sidebar;
                        // })

                         // <img alt="lable" class="lableicon" src="${lableimage}">