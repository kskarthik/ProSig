/* 
Name: Proton+
Author: Sai Karthik <kskarthik@protonmail.com>
Licence: MPL v2  
*/
'use strict';

//functions run at 2 second intervals
setInterval(removeSig, 2000);
setInterval(colorCompose, 2000);

//change color of compose button
function colorCompose() {

	document.getElementsByClassName("compose")[0].style.backgroundColor = "#d11919";
    
	replaceIcon();
}

//replace the glyphicon with appropriate one 
function replaceIcon() {
	
	let x = document.getElementsByClassName("fa-life-ring")[0];
        x.classList.add("fa-bug");	 
        x.classList.remove("fa-life-ring");
}

//remove protonmail signature in HTML compose mode
function removeSig() {
       
   for ( let i=0; i<4; i++) {		 
     let frame = document.getElementsByTagName("iframe")[i].contentWindow;
         frame.document.getElementsByClassName("protonmail_signature_block-proton")[0].remove();
 }
}    
//change compose color on mobile site, unlock all fields in edit contacts 
let style = document.createElement("style"); 
    style.type = "text/css";
    style.textContent = ".headerSecuredMobile-compose {background-color: #d11919;} .contactDetails-fields-locked {display: none;}";
    document.body.appendChild(style);