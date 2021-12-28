card_name =[]
show = []
elixer_all = []
elixer = []
elixer_all[26000010]=1
elixer_all[26000030]=1
elixer_all[26000031]=1
elixer_all[26000084]=1
elixer_all[26000002]=2
elixer_all[26000013]=2
elixer_all[26000019]=2
elixer_all[26000049]=2
elixer_all[28000008]=2
elixer_all[28000017]=2
elixer_all[26000000]=3
elixer_all[26000001]=3
elixer_all[26000005]=3
elixer_all[26000041]=3
elixer_all[26000056]=3
elixer_all[26000064]=3
elixer_all[27000000]=3
elixer_all[28000001]=3
elixer_all[28000018]=3
elixer_all[26000080]=4
elixer_all[27000002]=4
elixer_all[27000006]=4
elixer_all[26000008]=5
elixer_all[26000022]=5
elixer_all[26000053]=5
elixer_all[26000024]=6
elixer_all[26000043]=6
elixer_all[26000047]=7
elixer_all[28000016]=1
elixer_all[26000038]=2
elixer_all[26000039]=3
elixer_all[26000040]=3
elixer_all[26000067]=3
elixer_all[27000009]=3
elixer_all[28000014]=3
elixer_all[26000011]=4
elixer_all[26000014]=4
elixer_all[26000018]=4
elixer_all[26000021]=4
elixer_all[26000036]=4
elixer_all[26000052]=4
elixer_all[26000057]=4
elixer_all[26000068]=4
elixer_all[27000004]=4
elixer_all[27000010]=4
elixer_all[27000012]=4
elixer_all[28000000]=4
elixer_all[26000003]=5
elixer_all[26000017]=5
elixer_all[26000059]=5
elixer_all[27000001]=5
elixer_all[27000003]=5
elixer_all[27000007]=6
elixer_all[28000003]=6
elixer_all[27000005]=7
elixer_all[26000028]=9
elixer_all[26000058]=2
elixer_all[28000002]=2
elixer_all[28000015]=2
elixer_all[26000012]=3
elixer_all[26000025]=3
elixer_all[28000004]=3
elixer_all[28000012]=3
elixer_all[28000013]=3
elixer_all[26000015]=4
elixer_all[26000027]=4
elixer_all[26000044]=4
elixer_all[27000013]=4
elixer_all[28000005]=4
elixer_all[28000009]=4
elixer_all[26000006]=5
elixer_all[26000007]=5
elixer_all[26000016]=5
elixer_all[26000034]=5
elixer_all[26000045]=5
elixer_all[26000054]=5
elixer_all[26000063]=5
elixer_all[26000020]=6
elixer_all[26000060]=6
elixer_all[27000008]=6
elixer_all[28000007]=6
elixer_all[26000004]=7
elixer_all[26000009]=8
elixer_all[26000085]=8
elixer_all[28000006]=
elixer_all[28000011]=2
elixer_all[26000023]=3
elixer_all[26000026]=3
elixer_all[26000032]=3
elixer_all[26000046]=3
elixer_all[26000050]=3
elixer_all[26000061]=3
elixer_all[26000035]=4
elixer_all[26000037]=4
elixer_all[26000042]=4
elixer_all[26000048]=4
elixer_all[26000062]=4
elixer_all[26000083]=4
elixer_all[26000051]=5
elixer_all[28000010]=5
elixer_all[26000033]=6
elixer_all[26000029]=7
elixer_all[26000055]=7
elixer_all[26000069]=4
elixer_all[26000072]=4
elixer_all[26000074]=5


function img(){
    card0 = show[0]+".png";
    card1 = show[1]+".png";
    card2 = show[2]+".png";
    card3 = show[3]+".png";
    card4 = show[4]+".png";
    card5 = show[5]+".png";
    card6 = show[6]+".png";
    card7 = show[7]+".png";

    let img_0 = document.getElementById("img_0");
    img_0.src = card0;
    let img_1 = document.getElementById("img_1");
    img_1.src = card1;
    let img_2 = document.getElementById("img_2");
    img_2.src = card2;
    let img_3 = document.getElementById("img_3");
    img_3.src = card3;
    let img_4 = document.getElementById("img_4");
    img_4.src = card4;
    let img_5 = document.getElementById("img_5");
    img_5.src = card5;
    let img_6 = document.getElementById("img_6");
    img_6.src = card6;
    let img_7 = document.getElementById("img_7");
    img_7.src = card7;
    if(show.length==9){
        show.splice(-1,1);
    }
    if(elixer.length==9){
        elixer.splice(-1,1);
    }
    elixer_number = 0
    for(a=0;a<elixer.length;a++){
        elixer_number += Number(elixer[a])
    }
    document.getElementById("elixer").innerText = Number(elixer_number)/Number(elixer.length)
    
}
document.getElementById("search").addEventListener("click", function () {
    search_href = "https://royaleapi.com/decks/popular?time=7d&sort=rating&size=20&players=PvP&min_trophies=0&max_trophies=10000&min_elixir=1&max_elixir=9&min_cycle_elixir=4&max_cycle_elixir=28&mode=detail&type=NormalBattle&"
    // inc=skeletons&inc=ice-spirit&&global_exclude=false
    for(b=0;b<card_name.length;b++){
        search_href += "inc="+card_name[b]+"&"
    }
    search_href += "&global_exclude=false"
    location = search_href
}, false);
document.getElementById("1_delete").addEventListener("click", function () {
	show.splice(-1,1);
    elixer.splice(-1,1);
    img()
    if(show.length==0){  
        card = "white.png";
        let img_0 = document.getElementById("img_0");
        img_0.src = card;
        let img_1 = document.getElementById("img_1");
        img_1.src = card;
        let img_2 = document.getElementById("img_2");
        img_2.src = card;
        let img_3 = document.getElementById("img_3");
        img_3.src = card;
        let img_4 = document.getElementById("img_4");
        img_4.src = card;
        let img_5 = document.getElementById("img_5");
        img_5.src = card;
        let img_6 = document.getElementById("img_6");
        img_6.src = card;
        let img_7 = document.getElementById("img_7");
        img_7.src = card;
        document.getElementById("elixer").innerText = ""
    }
}, false);
document.getElementById("all_delete").addEventListener("click", function () {
	show=[];
    elixer=[];
    card = "white.png";
    let img_0 = document.getElementById("img_0");
    img_0.src = card;
    let img_1 = document.getElementById("img_1");
    img_1.src = card;
    let img_2 = document.getElementById("img_2");
    img_2.src = card;
    let img_3 = document.getElementById("img_3");
    img_3.src = card;
    let img_4 = document.getElementById("img_4");
    img_4.src = card;
    let img_5 = document.getElementById("img_5");
    img_5.src = card;
    let img_6 = document.getElementById("img_6");
    img_6.src = card;
    let img_7 = document.getElementById("img_7");
    img_7.src = card;
    document.getElementById("elixer").innerText = ""
    // img()
}, false);
document.getElementById("26000010").addEventListener("click", function () {
	card_name.push(document.getElementById("26000010").name)
    show.push(document.getElementById("26000010").value)
	elixer.push(elixer_all[document.getElementById("26000010").value])
	img()
}, false);
document.getElementById("26000030").addEventListener("click", function () {
    card_name.push(document.getElementById("26000030").name)
    show.push(document.getElementById("26000030").value)
	elixer.push(elixer_all[document.getElementById("26000030").value])
	img()
}, false);
document.getElementById("26000031").addEventListener("click", function () {
	card_name.push(document.getElementById("26000031").name)
	show.push(document.getElementById("26000031").value)
	elixer.push(elixer_all[document.getElementById("26000031").value])
	img()
}, false);
document.getElementById("26000084").addEventListener("click", function () {
	card_name.push(document.getElementById("26000084").name)
	show.push(document.getElementById("26000084").value)
	elixer.push(elixer_all[document.getElementById("26000084").value])
	img()
}, false);
document.getElementById("26000002").addEventListener("click", function () {
	card_name.push(document.getElementById("26000002").name)
	show.push(document.getElementById("26000002").value)
	elixer.push(elixer_all[document.getElementById("26000002").value])
	img()
}, false);
document.getElementById("26000013").addEventListener("click", function () {
	card_name.push(document.getElementById("26000013").name)
	show.push(document.getElementById("26000013").value)
	elixer.push(elixer_all[document.getElementById("26000013").value])
	img()
}, false);
document.getElementById("26000019").addEventListener("click", function () {
	card_name.push(document.getElementById("26000019").name)
	show.push(document.getElementById("26000019").value)
	elixer.push(elixer_all[document.getElementById("26000019").value])
	img()
}, false);
document.getElementById("26000049").addEventListener("click", function () {
	card_name.push(document.getElementById("26000049").name)
	show.push(document.getElementById("26000049").value)
	elixer.push(elixer_all[document.getElementById("26000049").value])
	img()
}, false);
document.getElementById("28000008").addEventListener("click", function () {
	card_name.push(document.getElementById("28000008").name)
	show.push(document.getElementById("28000008").value)
	elixer.push(elixer_all[document.getElementById("28000008").value])
	img()
}, false);
document.getElementById("28000017").addEventListener("click", function () {
	card_name.push(document.getElementById("28000017").name)
	show.push(document.getElementById("28000017").value)
	elixer.push(elixer_all[document.getElementById("28000017").value])
	img()
}, false);
document.getElementById("26000000").addEventListener("click", function () {
	card_name.push(document.getElementById("26000000").name)
	show.push(document.getElementById("26000000").value)
	elixer.push(elixer_all[document.getElementById("26000000").value])
	img()
}, false);
document.getElementById("26000001").addEventListener("click", function () {
	card_name.push(document.getElementById("26000001").name)
	show.push(document.getElementById("26000001").value)
	elixer.push(elixer_all[document.getElementById("26000001").value])
	img()
}, false);
document.getElementById("26000005").addEventListener("click", function () {
	card_name.push(document.getElementById("26000005").name)
	show.push(document.getElementById("26000005").value)
	elixer.push(elixer_all[document.getElementById("26000005").value])
	img()
}, false);
document.getElementById("26000041").addEventListener("click", function () {
	card_name.push(document.getElementById("26000041").name)
	show.push(document.getElementById("26000041").value)
	elixer.push(elixer_all[document.getElementById("26000041").value])
	img()
}, false);
document.getElementById("26000056").addEventListener("click", function () {
	card_name.push(document.getElementById("26000056").name)
	show.push(document.getElementById("26000056").value)
	elixer.push(elixer_all[document.getElementById("26000056").value])
	img()
}, false);
document.getElementById("26000064").addEventListener("click", function () {
	card_name.push(document.getElementById("26000064").name)
	show.push(document.getElementById("26000064").value)
	elixer.push(elixer_all[document.getElementById("26000064").value])
	img()
}, false);
document.getElementById("27000000").addEventListener("click", function () {
	card_name.push(document.getElementById("27000000").name)
	show.push(document.getElementById("27000000").value)
	elixer.push(elixer_all[document.getElementById("27000000").value])
	img()
}, false);
document.getElementById("28000001").addEventListener("click", function () {
	card_name.push(document.getElementById("28000001").name)
	show.push(document.getElementById("28000001").value)
	elixer.push(elixer_all[document.getElementById("28000001").value])
	img()
}, false);
document.getElementById("28000018").addEventListener("click", function () {
	card_name.push(document.getElementById("28000018").name)
	show.push(document.getElementById("28000018").value)
	elixer.push(elixer_all[document.getElementById("28000018").value])
	img()
}, false);
document.getElementById("26000080").addEventListener("click", function () {
	card_name.push(document.getElementById("26000080").name)
	show.push(document.getElementById("26000080").value)
	elixer.push(elixer_all[document.getElementById("26000080").value])
	img()
}, false);
document.getElementById("27000002").addEventListener("click", function () {
	card_name.push(document.getElementById("27000002").name)
	show.push(document.getElementById("27000002").value)
	elixer.push(elixer_all[document.getElementById("27000002").value])
	img()
}, false);
document.getElementById("27000006").addEventListener("click", function () {
	card_name.push(document.getElementById("27000006").name)
	show.push(document.getElementById("27000006").value)
	elixer.push(elixer_all[document.getElementById("27000006").value])
	img()
}, false);
document.getElementById("26000008").addEventListener("click", function () {
	card_name.push(document.getElementById("26000008").name)
	show.push(document.getElementById("26000008").value)
	elixer.push(elixer_all[document.getElementById("26000008").value])
	img()
}, false);
document.getElementById("26000022").addEventListener("click", function () {
	card_name.push(document.getElementById("26000022").name)
	show.push(document.getElementById("26000022").value)
	elixer.push(elixer_all[document.getElementById("26000022").value])
	img()
}, false);
document.getElementById("26000053").addEventListener("click", function () {
	card_name.push(document.getElementById("26000053").name)
	show.push(document.getElementById("26000053").value)
	elixer.push(elixer_all[document.getElementById("26000053").value])
	img()
}, false);
document.getElementById("26000024").addEventListener("click", function () {
	card_name.push(document.getElementById("26000024").name)
	show.push(document.getElementById("26000024").value)
	elixer.push(elixer_all[document.getElementById("26000024").value])
	img()
}, false);
document.getElementById("26000043").addEventListener("click", function () {
	card_name.push(document.getElementById("26000043").name)
	show.push(document.getElementById("26000043").value)
	elixer.push(elixer_all[document.getElementById("26000043").value])
	img()
}, false);
document.getElementById("26000047").addEventListener("click", function () {
	card_name.push(document.getElementById("26000047").name)
	show.push(document.getElementById("26000047").value)
	elixer.push(elixer_all[document.getElementById("26000047").value])
	img()
}, false);
document.getElementById("28000016").addEventListener("click", function () {
	card_name.push(document.getElementById("28000016").name)
	show.push(document.getElementById("28000016").value)
	elixer.push(elixer_all[document.getElementById("28000016").value])
	img()
}, false);
document.getElementById("26000038").addEventListener("click", function () {
	card_name.push(document.getElementById("26000038").name)
	show.push(document.getElementById("26000038").value)
	elixer.push(elixer_all[document.getElementById("26000038").value])
	img()
}, false);
document.getElementById("26000039").addEventListener("click", function () {
	card_name.push(document.getElementById("26000039").name)
	show.push(document.getElementById("26000039").value)
	elixer.push(elixer_all[document.getElementById("26000039").value])
	img()
}, false);
document.getElementById("26000040").addEventListener("click", function () {
	card_name.push(document.getElementById("26000040").name)
	show.push(document.getElementById("26000040").value)
	elixer.push(elixer_all[document.getElementById("26000040").value])
	img()
}, false);
document.getElementById("26000067").addEventListener("click", function () {
	card_name.push(document.getElementById("26000067").name)
	show.push(document.getElementById("26000067").value)
	elixer.push(elixer_all[document.getElementById("26000067").value])
	img()
}, false);
document.getElementById("27000009").addEventListener("click", function () {
	card_name.push(document.getElementById("27000009").name)
	show.push(document.getElementById("27000009").value)
	elixer.push(elixer_all[document.getElementById("27000009").value])
	img()
}, false);
document.getElementById("28000014").addEventListener("click", function () {
	card_name.push(document.getElementById("28000014").name)
	show.push(document.getElementById("28000014").value)
	elixer.push(elixer_all[document.getElementById("28000014").value])
	img()
}, false);
document.getElementById("26000011").addEventListener("click", function () {
	card_name.push(document.getElementById("26000011").name)
	show.push(document.getElementById("26000011").value)
	elixer.push(elixer_all[document.getElementById("26000011").value])
	img()
}, false);
document.getElementById("26000014").addEventListener("click", function () {
	card_name.push(document.getElementById("26000014").name)
	show.push(document.getElementById("26000014").value)
	elixer.push(elixer_all[document.getElementById("26000014").value])
	img()
}, false);
document.getElementById("26000018").addEventListener("click", function () {
	card_name.push(document.getElementById("26000018").name)
	show.push(document.getElementById("26000018").value)
	elixer.push(elixer_all[document.getElementById("26000018").value])
	img()
}, false);
document.getElementById("26000021").addEventListener("click", function () {
	card_name.push(document.getElementById("26000021").name)
	show.push(document.getElementById("26000021").value)
	elixer.push(elixer_all[document.getElementById("26000021").value])
	img()
}, false);
document.getElementById("26000036").addEventListener("click", function () {
	card_name.push(document.getElementById("26000036").name)
	show.push(document.getElementById("26000036").value)
	elixer.push(elixer_all[document.getElementById("26000036").value])
	img()
}, false);
document.getElementById("26000052").addEventListener("click", function () {
	card_name.push(document.getElementById("26000052").name)
	show.push(document.getElementById("26000052").value)
	elixer.push(elixer_all[document.getElementById("26000052").value])
	img()
}, false);
document.getElementById("26000057").addEventListener("click", function () {
	card_name.push(document.getElementById("26000057").name)
	show.push(document.getElementById("26000057").value)
	elixer.push(elixer_all[document.getElementById("26000057").value])
	img()
}, false);
document.getElementById("26000068").addEventListener("click", function () {
	card_name.push(document.getElementById("26000068").name)
	show.push(document.getElementById("26000068").value)
	elixer.push(elixer_all[document.getElementById("26000068").value])
	img()
}, false);
document.getElementById("27000004").addEventListener("click", function () {
	card_name.push(document.getElementById("27000004").name)
	show.push(document.getElementById("27000004").value)
	elixer.push(elixer_all[document.getElementById("27000004").value])
	img()
}, false);
document.getElementById("27000010").addEventListener("click", function () {
	card_name.push(document.getElementById("27000010").name)
	show.push(document.getElementById("27000010").value)
	elixer.push(elixer_all[document.getElementById("27000010").value])
	img()
}, false);
document.getElementById("27000012").addEventListener("click", function () {
	card_name.push(document.getElementById("27000012").name)
	show.push(document.getElementById("27000012").value)
	elixer.push(elixer_all[document.getElementById("27000012").value])
	img()
}, false);
document.getElementById("28000000").addEventListener("click", function () {
	card_name.push(document.getElementById("28000000").name)
	show.push(document.getElementById("28000000").value)
	elixer.push(elixer_all[document.getElementById("28000000").value])
	img()
}, false);
document.getElementById("26000003").addEventListener("click", function () {
	card_name.push(document.getElementById("26000003").name)
	show.push(document.getElementById("26000003").value)
	elixer.push(elixer_all[document.getElementById("26000003").value])
	img()
}, false);
document.getElementById("26000017").addEventListener("click", function () {
	card_name.push(document.getElementById("26000017").name)
	show.push(document.getElementById("26000017").value)
	elixer.push(elixer_all[document.getElementById("26000017").value])
	img()
}, false);
document.getElementById("26000059").addEventListener("click", function () {
	card_name.push(document.getElementById("26000059").name)
	show.push(document.getElementById("26000059").value)
	elixer.push(elixer_all[document.getElementById("26000059").value])
	img()
}, false);
document.getElementById("27000001").addEventListener("click", function () {
	card_name.push(document.getElementById("27000001").name)
	show.push(document.getElementById("27000001").value)
	elixer.push(elixer_all[document.getElementById("27000001").value])
	img()
}, false);
document.getElementById("27000003").addEventListener("click", function () {
	card_name.push(document.getElementById("27000003").name)
	show.push(document.getElementById("27000003").value)
	elixer.push(elixer_all[document.getElementById("27000003").value])
	img()
}, false);
document.getElementById("27000007").addEventListener("click", function () {
	card_name.push(document.getElementById("27000007").name)
	show.push(document.getElementById("27000007").value)
	elixer.push(elixer_all[document.getElementById("27000007").value])
	img()
}, false);
document.getElementById("28000003").addEventListener("click", function () {
	card_name.push(document.getElementById("28000003").name)
	show.push(document.getElementById("28000003").value)
	elixer.push(elixer_all[document.getElementById("28000003").value])
	img()
}, false);
document.getElementById("27000005").addEventListener("click", function () {
	card_name.push(document.getElementById("27000005").name)
	show.push(document.getElementById("27000005").value)
	elixer.push(elixer_all[document.getElementById("27000005").value])
	img()
}, false);
document.getElementById("26000028").addEventListener("click", function () {
	card_name.push(document.getElementById("26000028").name)
	show.push(document.getElementById("26000028").value)
	elixer.push(elixer_all[document.getElementById("26000028").value])
	img()
}, false);
document.getElementById("26000058").addEventListener("click", function () {
	card_name.push(document.getElementById("26000058").name)
	show.push(document.getElementById("26000058").value)
	elixer.push(elixer_all[document.getElementById("26000058").value])
	img()
}, false);
document.getElementById("28000002").addEventListener("click", function () {
	card_name.push(document.getElementById("28000002").name)
	show.push(document.getElementById("28000002").value)
	elixer.push(elixer_all[document.getElementById("28000002").value])
	img()
}, false);
document.getElementById("28000015").addEventListener("click", function () {
	card_name.push(document.getElementById("28000015").name)
	show.push(document.getElementById("28000015").value)
	elixer.push(elixer_all[document.getElementById("28000015").value])
	img()
}, false);
document.getElementById("26000012").addEventListener("click", function () {
	card_name.push(document.getElementById("26000012").name)
	show.push(document.getElementById("26000012").value)
	elixer.push(elixer_all[document.getElementById("26000012").value])
	img()
}, false);
document.getElementById("26000025").addEventListener("click", function () {
	card_name.push(document.getElementById("26000025").name)
	show.push(document.getElementById("26000025").value)
	elixer.push(elixer_all[document.getElementById("26000025").value])
	img()
}, false);
document.getElementById("28000004").addEventListener("click", function () {
	card_name.push(document.getElementById("28000004").name)
	show.push(document.getElementById("28000004").value)
	elixer.push(elixer_all[document.getElementById("28000004").value])
	img()
}, false);
document.getElementById("28000012").addEventListener("click", function () {
	card_name.push(document.getElementById("28000012").name)
	show.push(document.getElementById("28000012").value)
	elixer.push(elixer_all[document.getElementById("28000012").value])
	img()
}, false);
document.getElementById("28000013").addEventListener("click", function () {
	card_name.push(document.getElementById("28000013").name)
	show.push(document.getElementById("28000013").value)
	elixer.push(elixer_all[document.getElementById("28000013").value])
	img()
}, false);
document.getElementById("26000015").addEventListener("click", function () {
	card_name.push(document.getElementById("26000015").name)
	show.push(document.getElementById("26000015").value)
	elixer.push(elixer_all[document.getElementById("26000015").value])
	img()
}, false);
document.getElementById("26000027").addEventListener("click", function () {
	card_name.push(document.getElementById("26000027").name)
	show.push(document.getElementById("26000027").value)
	elixer.push(elixer_all[document.getElementById("26000027").value])
	img()
}, false);
document.getElementById("26000044").addEventListener("click", function () {
	card_name.push(document.getElementById("26000044").name)
	show.push(document.getElementById("26000044").value)
	elixer.push(elixer_all[document.getElementById("26000044").value])
	img()
}, false);
document.getElementById("27000013").addEventListener("click", function () {
	card_name.push(document.getElementById("27000013").name)
	show.push(document.getElementById("27000013").value)
	elixer.push(elixer_all[document.getElementById("27000013").value])
	img()
}, false);
document.getElementById("28000005").addEventListener("click", function () {
	card_name.push(document.getElementById("28000005").name)
	show.push(document.getElementById("28000005").value)
	elixer.push(elixer_all[document.getElementById("28000005").value])
	img()
}, false);
document.getElementById("28000009").addEventListener("click", function () {
	card_name.push(document.getElementById("28000009").name)
	show.push(document.getElementById("28000009").value)
	elixer.push(elixer_all[document.getElementById("28000009").value])
	img()
}, false);
document.getElementById("26000006").addEventListener("click", function () {
	card_name.push(document.getElementById("26000006").name)
	show.push(document.getElementById("26000006").value)
	elixer.push(elixer_all[document.getElementById("26000006").value])
	img()
}, false);
document.getElementById("26000007").addEventListener("click", function () {
	card_name.push(document.getElementById("26000007").name)
	show.push(document.getElementById("26000007").value)
	elixer.push(elixer_all[document.getElementById("26000007").value])
	img()
}, false);
document.getElementById("26000016").addEventListener("click", function () {
	card_name.push(document.getElementById("26000016").name)
	show.push(document.getElementById("26000016").value)
	elixer.push(elixer_all[document.getElementById("26000016").value])
	img()
}, false);
document.getElementById("26000034").addEventListener("click", function () {
	card_name.push(document.getElementById("26000034").name)
	show.push(document.getElementById("26000034").value)
	elixer.push(elixer_all[document.getElementById("26000034").value])
	img()
}, false);
document.getElementById("26000045").addEventListener("click", function () {
	card_name.push(document.getElementById("26000045").name)
	show.push(document.getElementById("26000045").value)
	elixer.push(elixer_all[document.getElementById("26000045").value])
	img()
}, false);
document.getElementById("26000054").addEventListener("click", function () {
	card_name.push(document.getElementById("26000054").name)
	show.push(document.getElementById("26000054").value)
	elixer.push(elixer_all[document.getElementById("26000054").value])
	img()
}, false);
document.getElementById("26000063").addEventListener("click", function () {
	card_name.push(document.getElementById("26000063").name)
	show.push(document.getElementById("26000063").value)
	elixer.push(elixer_all[document.getElementById("26000063").value])
	img()
}, false);
document.getElementById("26000020").addEventListener("click", function () {
	card_name.push(document.getElementById("26000020").name)
	show.push(document.getElementById("26000020").value)
	elixer.push(elixer_all[document.getElementById("26000020").value])
	img()
}, false);
document.getElementById("26000060").addEventListener("click", function () {
	card_name.push(document.getElementById("26000060").name)
	show.push(document.getElementById("26000060").value)
	elixer.push(elixer_all[document.getElementById("26000060").value])
	img()
}, false);
document.getElementById("27000008").addEventListener("click", function () {
	card_name.push(document.getElementById("27000008").name)
	show.push(document.getElementById("27000008").value)
	elixer.push(elixer_all[document.getElementById("27000008").value])
	img()
}, false);
document.getElementById("28000007").addEventListener("click", function () {
	card_name.push(document.getElementById("28000007").name)
	show.push(document.getElementById("28000007").value)
	elixer.push(elixer_all[document.getElementById("28000007").value])
	img()
}, false);
document.getElementById("26000004").addEventListener("click", function () {
	card_name.push(document.getElementById("26000004").name)
	show.push(document.getElementById("26000004").value)
	elixer.push(elixer_all[document.getElementById("26000004").value])
	img()
}, false);
document.getElementById("26000009").addEventListener("click", function () {
	card_name.push(document.getElementById("26000009").name)
	show.push(document.getElementById("26000009").value)
	elixer.push(elixer_all[document.getElementById("26000009").value])
	img()
}, false);
document.getElementById("26000085").addEventListener("click", function () {
	card_name.push(document.getElementById("26000085").name)
	show.push(document.getElementById("26000085").value)
	elixer.push(elixer_all[document.getElementById("26000085").value])
	img()
}, false);
document.getElementById("28000006").addEventListener("click", function () {
	card_name.push(document.getElementById("28000006").name)
	show.push(document.getElementById("28000006").value)
	elixer.push(elixer_all[document.getElementById("28000006").value])
	img()
}, false);
document.getElementById("28000011").addEventListener("click", function () {
	card_name.push(document.getElementById("28000011").name)
	show.push(document.getElementById("28000011").value)
	elixer.push(elixer_all[document.getElementById("28000011").value])
	img()
}, false);
document.getElementById("26000023").addEventListener("click", function () {
	card_name.push(document.getElementById("26000023").name)
	show.push(document.getElementById("26000023").value)
	elixer.push(elixer_all[document.getElementById("26000023").value])
	img()
}, false);
document.getElementById("26000026").addEventListener("click", function () {
	card_name.push(document.getElementById("26000026").name)
	show.push(document.getElementById("26000026").value)
	elixer.push(elixer_all[document.getElementById("26000026").value])
	img()
}, false);
document.getElementById("26000032").addEventListener("click", function () {
	card_name.push(document.getElementById("26000032").name)
	show.push(document.getElementById("26000032").value)
	elixer.push(elixer_all[document.getElementById("26000032").value])
	img()
}, false);
document.getElementById("26000046").addEventListener("click", function () {
	card_name.push(document.getElementById("26000046").name)
	show.push(document.getElementById("26000046").value)
	elixer.push(elixer_all[document.getElementById("26000046").value])
	img()
}, false);
document.getElementById("26000050").addEventListener("click", function () {
	card_name.push(document.getElementById("26000050").name)
	show.push(document.getElementById("26000050").value)
	elixer.push(elixer_all[document.getElementById("26000050").value])
	img()
}, false);
document.getElementById("26000061").addEventListener("click", function () {
	card_name.push(document.getElementById("26000061").name)
	show.push(document.getElementById("26000061").value)
	elixer.push(elixer_all[document.getElementById("26000061").value])
	img()
}, false);
document.getElementById("26000035").addEventListener("click", function () {
	card_name.push(document.getElementById("26000035").name)
	show.push(document.getElementById("26000035").value)
	elixer.push(elixer_all[document.getElementById("26000035").value])
	img()
}, false);
document.getElementById("26000037").addEventListener("click", function () {
	card_name.push(document.getElementById("26000037").name)
	show.push(document.getElementById("26000037").value)
	elixer.push(elixer_all[document.getElementById("26000037").value])
	img()
}, false);
document.getElementById("26000042").addEventListener("click", function () {
	card_name.push(document.getElementById("26000042").name)
	show.push(document.getElementById("26000042").value)
	elixer.push(elixer_all[document.getElementById("26000042").value])
	img()
}, false);
document.getElementById("26000048").addEventListener("click", function () {
	card_name.push(document.getElementById("26000048").name)
	show.push(document.getElementById("26000048").value)
	elixer.push(elixer_all[document.getElementById("26000048").value])
	img()
}, false);
document.getElementById("26000062").addEventListener("click", function () {
	card_name.push(document.getElementById("26000062").name)
	show.push(document.getElementById("26000062").value)
	elixer.push(elixer_all[document.getElementById("26000062").value])
	img()
}, false);
document.getElementById("26000083").addEventListener("click", function () {
	card_name.push(document.getElementById("26000083").name)
	show.push(document.getElementById("26000083").value)
	elixer.push(elixer_all[document.getElementById("26000083").value])
	img()
}, false);
document.getElementById("26000051").addEventListener("click", function () {
	card_name.push(document.getElementById("26000051").name)
	show.push(document.getElementById("26000051").value)
	elixer.push(elixer_all[document.getElementById("26000051").value])
	img()
}, false);
document.getElementById("28000010").addEventListener("click", function () {
	card_name.push(document.getElementById("28000010").name)
	show.push(document.getElementById("28000010").value)
	elixer.push(elixer_all[document.getElementById("28000010").value])
	img()
}, false);
document.getElementById("26000033").addEventListener("click", function () {
	card_name.push(document.getElementById("26000033").name)
	show.push(document.getElementById("26000033").value)
	elixer.push(elixer_all[document.getElementById("26000033").value])
	img()
}, false);
document.getElementById("26000029").addEventListener("click", function () {
	card_name.push(document.getElementById("26000029").name)
	show.push(document.getElementById("26000029").value)
	elixer.push(elixer_all[document.getElementById("26000029").value])
	img()
}, false);
document.getElementById("26000055").addEventListener("click", function () {
	card_name.push(document.getElementById("26000055").name)
	show.push(document.getElementById("26000055").value)
	elixer.push(elixer_all[document.getElementById("26000055").value])
	img()
}, false);
document.getElementById("26000069").addEventListener("click", function () {
	card_name.push(document.getElementById("26000069").name)
	show.push(document.getElementById("26000069").value)
	elixer.push(elixer_all[document.getElementById("26000069").value])
	img()
}, false);
document.getElementById("26000072").addEventListener("click", function () {
	card_name.push(document.getElementById("26000072").name)
	show.push(document.getElementById("26000072").value)
	elixer.push(elixer_all[document.getElementById("26000072").value])
	img()
}, false);
document.getElementById("26000074").addEventListener("click", function () {
	card_name.push(document.getElementById("26000074").name)
	show.push(document.getElementById("26000074").value)
	elixer.push(elixer_all[document.getElementById("26000074").value])
	img()
}, false);