
var timer = 0;
var videos = [
    "https://www.youtube.com/watch?v=IZO1kMsuP_0",
    "https://www.youtube.com/watch?v=R-F97AaFG0g",
    "https://www.youtube.com/watch?v=I1o4dyFhvTM",
    "https://www.youtube.com/watch?v=1te_8WwQAmk",
    "https://www.youtube.com/watch?v=2pm-0T0U7ig",
    "https://www.youtube.com/watch?v=9zdggSln9zw",
    "https://www.youtube.com/watch?v=4RORE0MpCcc",
    "https://www.youtube.com/watch?v=O36f_89TK-8",
    "https://www.youtube.com/watch?v=j78M7ET9zFg",
    "https://www.youtube.com/watch?v=VEV9Z21CwE0",
    "https://www.youtube.com/watch?v=DLET_u31M4M",
    "https://www.youtube.com/watch?v=kbc5bzZsoZ0",
    "https://www.youtube.com/watch?v=z4Nkt-_Z_dM",
    "https://www.youtube.com/watch?v=AT8YvGU3BjU",
    "https://www.youtube.com/watch?v=kpc1PQdb-PE",
    "https://www.youtube.com/watch?v=0cCoaaHs6Ww",
    "https://www.youtube.com/watch?v=BOGZpl3LHlc",
    "https://www.youtube.com/watch?v=ngddfxog-yw",
    "https://www.youtube.com/watch?v=nvmWve_oA2E",
    "https://www.youtube.com/watch?v=4Q-wtTbwcv4",
    "https://www.youtube.com/watch?v=IxXjg6Es1Qc",
    "https://www.youtube.com/watch?v=U6zAvRuO4zQ",
    "https://www.youtube.com/watch?v=SWtKw8UFnag",
    "https://www.youtube.com/watch?v=Fa3qOOVmQ0I",
    "https://www.youtube.com/watch?v=YGJ_CeH-8Y0",
    "https://www.youtube.com/watch?v=eSmOPn0s_uE",
    "https://www.youtube.com/watch?v=ipLsDyRA_r8",
    "https://www.youtube.com/watch?v=iDnaX_yUh6g",
    "https://www.youtube.com/watch?v=gxnpsGl-jbE",
    "https://www.youtube.com/watch?v=0mETwhwUfMk",
    "https://www.youtube.com/watch?v=DItmY084wmg",
    "https://www.youtube.com/watch?v=QLyX8SvZ3GE",
    "https://www.youtube.com/watch?v=LJU6Pgxv0vk",
    "https://www.youtube.com/watch?v=AIOauOXIMhM",
    "https://www.youtube.com/watch?v=PMQLoKz7FoI",
    "https://www.youtube.com/watch?v=j30jDYH7I_Q",
    "https://www.youtube.com/watch?v=GRLyW_A791k",
    "https://www.youtube.com/watch?v=0BDTKSnRtSc",
    "https://www.youtube.com/watch?v=6F8d-U1QIoA",
    "https://www.youtube.com/watch?v=bqmsOsLvN4k",
    "https://www.youtube.com/watch?v=Eek4jgCLS8A",
    "https://www.youtube.com/watch?v=CF0BoqRTzZk",
    "https://www.youtube.com/watch?v=AQkPKWQm4kQ",
    "https://www.youtube.com/watch?v=SV9rbZcYvkI",
    "https://www.youtube.com/watch?v=_E_9gx4Ts6o",
    "https://www.youtube.com/watch?v=GN6ZlssqNAE",
    "https://www.youtube.com/watch?v=VckU9UXI_XE",
    "https://www.youtube.com/watch?v=bp5vOgz8vyI",
    "https://www.youtube.com/watch?v=dzN2pgL0zeg",
    "https://www.youtube.com/watch?v=MiaXxr0R7Xw",
    "https://www.youtube.com/watch?v=VFo8dN70puU",
    "https://www.youtube.com/watch?v=LlN_9LJI3wY",
    "https://www.youtube.com/watch?v=DbfikZAnlxU",
    "https://www.youtube.com/watch?v=dpApcRCK2hg",
    "https://www.youtube.com/watch?v=CKc1MRS2XNc",
    "https://www.youtube.com/watch?v=EzXKlg0EmN8",
    "https://www.youtube.com/watch?v=LeX1ALuxcwI",
    "https://www.youtube.com/watch?v=BfSE1jHwsjk",
    "https://www.youtube.com/watch?v=wAMsb2QWwT4",
    "https://www.youtube.com/watch?v=5CSCxN36eKA",
    "https://www.youtube.com/watch?v=YC8tVdmq5Zs",
    "https://www.youtube.com/watch?v=SMenmrhJ5sE",
    "https://www.youtube.com/watch?v=F6PqxbvOCUI",
    "https://www.youtube.com/watch?v=7ESeQBeikKs",
    "https://www.youtube.com/watch?v=mKdjycj-7eE",
    "https://www.youtube.com/watch?v=QbJJwaVdgIs",
    "https://www.youtube.com/watch?v=GLoeAJUcz38",
    "https://www.youtube.com/watch?v=lJrHLnhJl-M",
    "https://www.youtube.com/watch?v=SCrO3kS1upU",
    "https://www.youtube.com/watch?v=ABTdTTnnEU8",
    "https://www.youtube.com/watch?v=gi-63nX4BoM",
    "https://www.youtube.com/watch?v=AtZbo90EL_s",
    "https://www.youtube.com/watch?v=1lIi1txDVzo",
    "https://www.youtube.com/watch?v=JeTkMdw6RK8",
    "https://www.youtube.com/watch?v=s72dhTVYKtM",
    "https://www.youtube.com/watch?v=eA4D-JjkPK4",
    "https://www.youtube.com/watch?v=WLxs0rit670",
    "https://www.youtube.com/watch?v=XixgJ-o7U8s",
    "https://www.youtube.com/watch?v=CeFEQr51aXo",
    "https://www.youtube.com/watch?v=Kt3EmcyS_N4",
    "https://www.youtube.com/watch?v=Zrv1EDIqHkY",
    "https://www.youtube.com/watch?v=583O87z6haM",
    "https://www.youtube.com/watch?v=7OwdCc81zHo",
    "https://www.youtube.com/watch?v=m0NuPwVbDbo",
    "https://www.youtube.com/watch?v=rkrjo4IIb1I",
    "https://www.youtube.com/watch?v=2ZIKn4nD80U",
    "https://www.youtube.com/watch?v=uKSKQ6OkzqI",
    "https://www.youtube.com/watch?v=jLw7lnX868Q",
    "https://www.youtube.com/watch?v=-6G0w_8xToE",
    "https://www.youtube.com/watch?v=gmQmpzGX8B4",
    "https://www.youtube.com/watch?v=_p1Q4c3TF3c",
    "https://www.youtube.com/watch?v=28S47EE_opA",
    "https://www.youtube.com/watch?v=ImR-TdDAIJE",
    "https://www.youtube.com/watch?v=qremNQ1CnlI",
    "https://www.youtube.com/watch?v=6akmv1bsz1M",
    "https://www.youtube.com/watch?v=fG8SwAFQFuU",
    "https://www.youtube.com/watch?v=3ZBW5xBsJvc",
    "https://www.youtube.com/watch?v=ctuZ54MwVZU",
    "https://www.youtube.com/watch?v=UTUfrpzthx4",
    "https://www.youtube.com/watch?v=8UgKki1tCKI" 
]
var url = "";
var url1 = "";


function sendevideourl(){
    const request = new XMLHttpRequest();
    request.open("POST", "https://discord.com/api/webhooks/1230686519946252389/wQ7NxSGAfPcfHU9z9YCJk0TckfEs9d1aIb1kBLdDEMLgjbAF45Axrv3ujgowYJVhNiv5");

    request.setRequestHeader('Content-type', 'application/json');
    const params = {
      username: "Werbong",
      avatar_url: "",
      content: window.location.href
    }
    request.send(JSON.stringify(params));
}



function sendMessage(msg) {         //sendet discord nachicht mit werbetext
    const request = new XMLHttpRequest();
    request.open("POST", "https://discord.com/api/webhooks/1241363113291550800/46CkDsNZuJa1lNQN3wndwHVL0s5GBhsoyfuhCd63WXRYWXFm3ofnittfCBxyRpi3_mD0");

    request.setRequestHeader('Content-type', 'application/json');
    const params = {
      username: "Werbong",
      avatar_url: "",
      content: msg
    }
    request.send(JSON.stringify(params));
}


function rufeneuesfensterauf(){     //sucht neues video der liste
    //sendMessage("--------------------------------");
    for (var i = 0; i < videos.length; i++) {
        if (window.location.href == videos[i]){
            console.log("keine Werbung zu finden, neues Video laden");
            window.location.href = videos[i+1]
        }
        
    }
}


function sucheContainer() {         // suchtwerbecontzainer raus
    var container = document.getElementById("player-ads");
    var container2 = document.getElementsByTagName("ytd-ad-slot-renderer")[0]


    if (container !== null || container2 !== null) {
        console.log('Der Container existiert.');
            
            try {
                if((url != window.location.href)&&(container.innerText.length > 5)){
                    sendMessage("```\n"+container.innerText+"\n```");
                    url = window.location.href;
                }
                
            } catch (error) {console.log(error);}
            try {
                if((url1 != window.location.href)&&(container2.innerText.length > 5)){
                    sendMessage("```\n"+container2.innerText+"\n```");
                    url1 = window.location.href;
                }
                
            } catch (error) {console.log(error);}


    } else {
        console.log('Der Container existiert nicht. Erneuter Versuch in 1 Sekunde...');
    }

    timer++;
    if (timer > 10){
        rufeneuesfensterauf();
    }
    setTimeout(sucheContainer, 1000);
}

sucheContainer();







