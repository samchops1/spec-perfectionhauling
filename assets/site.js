(function(){var b=document.querySelector(".nav-toggle"),n=document.querySelector("nav");if(!b||!n)return;b.onclick=function(){var o=n.classList.toggle("open");b.setAttribute("aria-expanded",o?"true":"false")}})();
function sendInquiry(e){e.preventDefault();var f=e.target;var body=["Name: "+(f.name.value||""),"Phone: "+(f.phone.value||""),"",(f.note.value||"")].join("\n");
location.href="mailto:PERFECTION.HAUL@GMAIL.COM?subject="+encodeURIComponent("Website inquiry")+"&body="+encodeURIComponent(body);}
