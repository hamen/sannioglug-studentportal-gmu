// ==UserScript==
// @name           Unisannio Student Portal
// @namespace      org.sannioglug.greasemonkey
// @description    Aggiunge funzionalita` allo Student Portal
// @include        https://servizistudenti.unisannio.it:4446/*
// ==/UserScript==

const matricola = "";
const password = "";

function $(d) { return document.getElementById(d); }

var unisanniogmuBox = document.createElement('div');
unisanniogmuBox.id = "unisanniogmuBox";

var unisanniogmuBoxTitle = document.createElement('div');
unisanniogmuBoxTitle.id = "unisanniogmuBoxTitle";
unisanniogmuBoxTitle.className = "titleboxinfo";
unisanniogmuBoxTitle.innerHTML = "<span>SannioGLUG menu</span>";

var unisanniogmuBoxMenu = document.createElement('div');
unisanniogmuBoxMenu.id = "unisanniogmuBoxMenu";
unisanniogmuBoxMenu.className = "testoinfo";

var unisanniogmuBoxMenuContent = document.createElement('div');
unisanniogmuBoxMenuContent.id = "unisanniogmuBoxMenuContent";
unisanniogmuBoxMenuContent.className = "menuServ";

var unisanniogmuBoxMenuList = document.createElement('ul');
unisanniogmuBoxMenuList.id = "unisanniogmuBoxMenuList";

var emailLinkListItem = document.createElement('li');
emailLinkListItem.id = "emailLinkListItem";
emailLinkListItem.setAttribute("style", 'background-image: url("http://draftmag.com/images/icons/mail_icon.gif");'
			       + 'background-repeat: no-repeat;'+ 'background-position: 2px, 2px;');
emailLinkListItem.innerHTML = '<a target="_blank" href="https://webmail.studenti.unisannio.it/">Mail studenti</a>';

var boxinfo = document.getElementById('boxinfo');
boxinfo.parentNode.insertBefore(unisanniogmuBox, boxinfo.nextSibling);
unisanniogmuBox.appendChild(unisanniogmuBoxTitle);
unisanniogmuBox.appendChild(unisanniogmuBoxMenu);
unisanniogmuBoxMenu.appendChild(unisanniogmuBoxMenuContent);
unisanniogmuBoxMenuContent.appendChild(unisanniogmuBoxMenuList);
unisanniogmuBoxMenuList.appendChild(emailLinkListItem);

GM_xmlhttpRequest({
	method: "post",
	url: "https://webmail.studenti.unisannio.it/imp/index.php",
	headers: { "Content-type" : "application/x-www-form-urlencoded" },
	data: encodeURI("imapuser="+ matricola + "&pass=" + password),
	onload: function(e) { //alert(e.responseText);
			    }
});

GM_xmlhttpRequest({
	method: "get",
	url: "https://webmail.studenti.unisannio.it/services/portal/sidebar.php",
	onload: function(f) {
	    //GM_openInTab("https://webmail.studenti.unisannio.it/");
	}
});

// UserScript menu draft
GM_registerMenuCommand( "Options", pippo); 
function pippo(){
    alert('Options panel - place holder');
}