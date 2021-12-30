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
elixer_all[28000006]=1
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
elixer_all[26000072]=5
elixer_all[26000074]=4
function func1(c,d){
	if(show.indexOf(c) === -1){
		card_name.push(d)
		show.push(c)
		// alert(card_name)
		elixer.push(elixer_all[c])

		for(e=0;e<show.length;e++){
			localStorage.setItem(e,show[e])
			localStorage.setItem("number",show.length)
		}
		
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
			show.pop();
			show.pop();
		}
		if(elixer.length==9){
			elixer.pop();
		}
		if(card_name.length==9){
			card_name.pop();
		}
		elixer_number = 0
		for(a=0;a<elixer.length;a++){
			elixer_number += Number(elixer[a])
		}
		document.getElementById("elixer").innerText = Math.ceil(Number(elixer_number)/Number(elixer.length)*10)/10
		//4カードサイクル
		if(elixer.length>3){
			var elixer2 = elixer.slice();
			elixer2.sort()
			document.getElementById("cycle").innerText =elixer2[0]+elixer2[1]+elixer2[2]+elixer2[3]
		}
	}
}
function func2(){
	// alert(elixer)
	for(e=0;e<show.length;e++){
        localStorage.setItem(e,show[e])
		localStorage.setItem("number",show.length)
    }
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
	elixer_number = 0
	for(a=0;a<elixer.length;a++){
		elixer_number += Number(elixer[a])
	}
	document.getElementById("elixer").innerText = Math.ceil(Number(elixer_number)/Number(elixer.length)*10)/10
	
	//4カードサイクル
	if(elixer.length>3){
		var elixer2 = elixer.slice();
		elixer2.sort()
		document.getElementById("cycle").innerText = elixer2[0]+elixer2[1]+elixer2[2]+elixer2[3]
	}else{
		document.getElementById("cycle").innerText = ""
	}
	
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
		document.getElementById("cycle").innerText = ""
	
    }
}

//初期設定(ローカルストレージから前回までのやつ更新)
number = localStorage.getItem("number")
for(f=0;f<number;f++){
	g=localStorage.getItem(f)
	h=document.getElementById(g).name
	func1(g,h)
}


document.getElementById("search").addEventListener("click", function () {
	localStorage.clear()
	for(e=0;e<show.length;e++){
        localStorage.setItem(e,show[e])
		localStorage.setItem("number",show.length)
    }
    search_href = "https://royaleapi.com/decks/popular?time=7d&sort=rating&size=20&players=PvP&min_trophies=0&max_trophies=10000&min_elixir=1&max_elixir=9&min_cycle_elixir=4&max_cycle_elixir=28&mode=detail&type=NormalBattle&"
    // inc=skeletons&inc=ice-spirit&&global_exclude=false
    for(b=0;b<card_name.length;b++){
        search_href += "inc="+card_name[b]+"&"
    }
    search_href += "&global_exclude=false"
    location = search_href

}, false);
document.getElementById("1_delete").addEventListener("click", function () {
	card_name.pop();
    show.pop();
    elixer.pop();
	// alert(elixer)
	func2()
}, false);
document.getElementById("all_delete").addEventListener("click", function () {
	localStorage.clear()
	show=[];
    elixer=[];
	card_name =[];
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
	document.getElementById("cycle").innerText =""
    // func1()
}, false);

document.getElementById("img-0").addEventListener("click", function () {
	card_name.splice(0,1);
    show.splice(0,1);
    elixer.splice(0,1);
	func2()
}, false);
document.getElementById("img-1").addEventListener("click", function () {
	card_name.splice(1,1);
    show.splice(1,1);
    elixer.splice(1,1);
	func2()
}, false);
document.getElementById("img-2").addEventListener("click", function () {
	card_name.splice(2,1);
    show.splice(2,1);
    elixer.splice(2,1);
	func2()
}, false);
document.getElementById("img-3").addEventListener("click", function () {
	card_name.splice(3,1);
    show.splice(3,1);
    elixer.splice(3,1);
	func2()
}, false);
document.getElementById("img-4").addEventListener("click", function () {
	card_name.splice(4,1);
    show.splice(4,1);
    elixer.splice(4,1);
	func2()
}, false);
document.getElementById("img-5").addEventListener("click", function () {
	card_name.splice(5,1);
    show.splice(5,1);
    elixer.splice(5,1);
	func2()
}, false);
document.getElementById("img-6").addEventListener("click", function () {
	card_name.splice(6,1);
    show.splice(6,1);
    elixer.splice(6,1);
	func2()
}, false);
document.getElementById("img-7").addEventListener("click", function () {
	card_name.splice(7,1);
    show.splice(7,1);
    elixer.splice(7,1);
	func2()
}, false);


document.getElementById("26000010").addEventListener("click", function () {
	value1 = document.getElementById("26000010").value
	value2 = document.getElementById("26000010").name
	func1(value1,value2)
}, false);
document.getElementById("26000030").addEventListener("click", function () {
    value1 = document.getElementById("26000030").value
    value2 = document.getElementById("26000030").name
    func1(value1,value2)
}, false);
document.getElementById("26000031").addEventListener("click", function () {
	value1 = document.getElementById("26000031").value
	value2 = document.getElementById("26000031").name
	func1(value1,value2)
}, false);
document.getElementById("26000084").addEventListener("click", function () {
	value1 = document.getElementById("26000084").value
	value2 = document.getElementById("26000084").name
	func1(value1,value2)
}, false);
document.getElementById("26000002").addEventListener("click", function () {
	value1 = document.getElementById("26000002").value
	value2 = document.getElementById("26000002").name
	func1(value1,value2)
}, false);
document.getElementById("26000013").addEventListener("click", function () {
	value1 = document.getElementById("26000013").value
	value2 = document.getElementById("26000013").name
	func1(value1,value2)
}, false);
document.getElementById("26000019").addEventListener("click", function () {
	value1 = document.getElementById("26000019").value
	value2 = document.getElementById("26000019").name
	func1(value1,value2)
}, false);
document.getElementById("26000049").addEventListener("click", function () {
	value1 = document.getElementById("26000049").value
	value2 = document.getElementById("26000049").name
	func1(value1,value2)
}, false);
document.getElementById("28000008").addEventListener("click", function () {
	value1 = document.getElementById("28000008").value
	value2 = document.getElementById("28000008").name
	func1(value1,value2)
}, false);
document.getElementById("28000017").addEventListener("click", function () {
	value1 = document.getElementById("28000017").value
	value2 = document.getElementById("28000017").name
	func1(value1,value2)
}, false);
document.getElementById("26000000").addEventListener("click", function () {
	value1 = document.getElementById("26000000").value
	value2 = document.getElementById("26000000").name
	func1(value1,value2)
}, false);
document.getElementById("26000001").addEventListener("click", function () {
	value1 = document.getElementById("26000001").value
	value2 = document.getElementById("26000001").name
	func1(value1,value2)
}, false);
document.getElementById("26000005").addEventListener("click", function () {
	value1 = document.getElementById("26000005").value
	value2 = document.getElementById("26000005").name
	func1(value1,value2)
}, false);
document.getElementById("26000041").addEventListener("click", function () {
	value1 = document.getElementById("26000041").value
	value2 = document.getElementById("26000041").name
	func1(value1,value2)
}, false);
document.getElementById("26000056").addEventListener("click", function () {
	value1 = document.getElementById("26000056").value
	value2 = document.getElementById("26000056").name
	func1(value1,value2)
}, false);
document.getElementById("26000064").addEventListener("click", function () {
	value1 = document.getElementById("26000064").value
	value2 = document.getElementById("26000064").name
	func1(value1,value2)
}, false);
document.getElementById("27000000").addEventListener("click", function () {
	value1 = document.getElementById("27000000").value
	value2 = document.getElementById("27000000").name
	func1(value1,value2)
}, false);
document.getElementById("28000001").addEventListener("click", function () {
	value1 = document.getElementById("28000001").value
	value2 = document.getElementById("28000001").name
	func1(value1,value2)
}, false);
document.getElementById("28000018").addEventListener("click", function () {
	value1 = document.getElementById("28000018").value
	value2 = document.getElementById("28000018").name
	func1(value1,value2)
}, false);
document.getElementById("26000080").addEventListener("click", function () {
	value1 = document.getElementById("26000080").value
	value2 = document.getElementById("26000080").name
	func1(value1,value2)
}, false);
document.getElementById("27000002").addEventListener("click", function () {
	value1 = document.getElementById("27000002").value
	value2 = document.getElementById("27000002").name
	func1(value1,value2)
}, false);
document.getElementById("27000006").addEventListener("click", function () {
	value1 = document.getElementById("27000006").value
	value2 = document.getElementById("27000006").name
	func1(value1,value2)
}, false);
document.getElementById("26000008").addEventListener("click", function () {
	value1 = document.getElementById("26000008").value
	value2 = document.getElementById("26000008").name
	func1(value1,value2)
}, false);
document.getElementById("26000022").addEventListener("click", function () {
	value1 = document.getElementById("26000022").value
	value2 = document.getElementById("26000022").name
	func1(value1,value2)
}, false);
document.getElementById("26000053").addEventListener("click", function () {
	value1 = document.getElementById("26000053").value
	value2 = document.getElementById("26000053").name
	func1(value1,value2)
}, false);
document.getElementById("26000024").addEventListener("click", function () {
	value1 = document.getElementById("26000024").value
	value2 = document.getElementById("26000024").name
	func1(value1,value2)
}, false);
document.getElementById("26000043").addEventListener("click", function () {
	value1 = document.getElementById("26000043").value
	value2 = document.getElementById("26000043").name
	func1(value1,value2)
}, false);
document.getElementById("26000047").addEventListener("click", function () {
	value1 = document.getElementById("26000047").value
	value2 = document.getElementById("26000047").name
	func1(value1,value2)
}, false);
document.getElementById("28000016").addEventListener("click", function () {
	value1 = document.getElementById("28000016").value
	value2 = document.getElementById("28000016").name
	func1(value1,value2)
}, false);
document.getElementById("26000038").addEventListener("click", function () {
	value1 = document.getElementById("26000038").value
	value2 = document.getElementById("26000038").name
	func1(value1,value2)
}, false);
document.getElementById("26000039").addEventListener("click", function () {
	value1 = document.getElementById("26000039").value
	value2 = document.getElementById("26000039").name
	func1(value1,value2)
}, false);
document.getElementById("26000040").addEventListener("click", function () {
	value1 = document.getElementById("26000040").value
	value2 = document.getElementById("26000040").name
	func1(value1,value2)
}, false);
document.getElementById("26000067").addEventListener("click", function () {
	value1 = document.getElementById("26000067").value
	value2 = document.getElementById("26000067").name
	func1(value1,value2)
}, false);
document.getElementById("27000009").addEventListener("click", function () {
	value1 = document.getElementById("27000009").value
	value2 = document.getElementById("27000009").name
	func1(value1,value2)
}, false);
document.getElementById("28000014").addEventListener("click", function () {
	value1 = document.getElementById("28000014").value
	value2 = document.getElementById("28000014").name
	func1(value1,value2)
}, false);
document.getElementById("26000011").addEventListener("click", function () {
	value1 = document.getElementById("26000011").value
	value2 = document.getElementById("26000011").name
	func1(value1,value2)
}, false);
document.getElementById("26000014").addEventListener("click", function () {
	value1 = document.getElementById("26000014").value
	value2 = document.getElementById("26000014").name
	func1(value1,value2)
}, false);
document.getElementById("26000018").addEventListener("click", function () {
	value1 = document.getElementById("26000018").value
	value2 = document.getElementById("26000018").name
	func1(value1,value2)
}, false);
document.getElementById("26000021").addEventListener("click", function () {
	value1 = document.getElementById("26000021").value
	value2 = document.getElementById("26000021").name
	func1(value1,value2)
}, false);
document.getElementById("26000036").addEventListener("click", function () {
	value1 = document.getElementById("26000036").value
	value2 = document.getElementById("26000036").name
	func1(value1,value2)
}, false);
document.getElementById("26000052").addEventListener("click", function () {
	value1 = document.getElementById("26000052").value
	value2 = document.getElementById("26000052").name
	func1(value1,value2)
}, false);
document.getElementById("26000057").addEventListener("click", function () {
	value1 = document.getElementById("26000057").value
	value2 = document.getElementById("26000057").name
	func1(value1,value2)
}, false);
document.getElementById("26000068").addEventListener("click", function () {
	value1 = document.getElementById("26000068").value
	value2 = document.getElementById("26000068").name
	func1(value1,value2)
}, false);
document.getElementById("27000004").addEventListener("click", function () {
	value1 = document.getElementById("27000004").value
	value2 = document.getElementById("27000004").name
	func1(value1,value2)
}, false);
document.getElementById("27000010").addEventListener("click", function () {
	value1 = document.getElementById("27000010").value
	value2 = document.getElementById("27000010").name
	func1(value1,value2)
}, false);
document.getElementById("27000012").addEventListener("click", function () {
	value1 = document.getElementById("27000012").value
	value2 = document.getElementById("27000012").name
	func1(value1,value2)
}, false);
document.getElementById("28000000").addEventListener("click", function () {
	value1 = document.getElementById("28000000").value
	value2 = document.getElementById("28000000").name
	func1(value1,value2)
}, false);
document.getElementById("26000003").addEventListener("click", function () {
	value1 = document.getElementById("26000003").value
	value2 = document.getElementById("26000003").name
	func1(value1,value2)
}, false);
document.getElementById("26000017").addEventListener("click", function () {
	value1 = document.getElementById("26000017").value
	value2 = document.getElementById("26000017").name
	func1(value1,value2)
}, false);
document.getElementById("26000059").addEventListener("click", function () {
	value1 = document.getElementById("26000059").value
	value2 = document.getElementById("26000059").name
	func1(value1,value2)
}, false);
document.getElementById("27000001").addEventListener("click", function () {
	value1 = document.getElementById("27000001").value
	value2 = document.getElementById("27000001").name
	func1(value1,value2)
}, false);
document.getElementById("27000003").addEventListener("click", function () {
	value1 = document.getElementById("27000003").value
	value2 = document.getElementById("27000003").name
	func1(value1,value2)
}, false);
document.getElementById("27000007").addEventListener("click", function () {
	value1 = document.getElementById("27000007").value
	value2 = document.getElementById("27000007").name
	func1(value1,value2)
}, false);
document.getElementById("28000003").addEventListener("click", function () {
	value1 = document.getElementById("28000003").value
	value2 = document.getElementById("28000003").name
	func1(value1,value2)
}, false);
document.getElementById("27000005").addEventListener("click", function () {
	value1 = document.getElementById("27000005").value
	value2 = document.getElementById("27000005").name
	func1(value1,value2)
}, false);
document.getElementById("26000028").addEventListener("click", function () {
	value1 = document.getElementById("26000028").value
	value2 = document.getElementById("26000028").name
	func1(value1,value2)
}, false);
document.getElementById("26000058").addEventListener("click", function () {
	value1 = document.getElementById("26000058").value
	value2 = document.getElementById("26000058").name
	func1(value1,value2)
}, false);
document.getElementById("28000002").addEventListener("click", function () {
	value1 = document.getElementById("28000002").value
	value2 = document.getElementById("28000002").name
	func1(value1,value2)
}, false);
document.getElementById("28000015").addEventListener("click", function () {
	value1 = document.getElementById("28000015").value
	value2 = document.getElementById("28000015").name
	func1(value1,value2)
}, false);
document.getElementById("26000012").addEventListener("click", function () {
	value1 = document.getElementById("26000012").value
	value2 = document.getElementById("26000012").name
	func1(value1,value2)
}, false);
document.getElementById("26000025").addEventListener("click", function () {
	value1 = document.getElementById("26000025").value
	value2 = document.getElementById("26000025").name
	func1(value1,value2)
}, false);
document.getElementById("28000004").addEventListener("click", function () {
	value1 = document.getElementById("28000004").value
	value2 = document.getElementById("28000004").name
	func1(value1,value2)
}, false);
document.getElementById("28000012").addEventListener("click", function () {
	value1 = document.getElementById("28000012").value
	value2 = document.getElementById("28000012").name
	func1(value1,value2)
}, false);
document.getElementById("28000013").addEventListener("click", function () {
	value1 = document.getElementById("28000013").value
	value2 = document.getElementById("28000013").name
	func1(value1,value2)
}, false);
document.getElementById("26000015").addEventListener("click", function () {
	value1 = document.getElementById("26000015").value
	value2 = document.getElementById("26000015").name
	func1(value1,value2)
}, false);
document.getElementById("26000027").addEventListener("click", function () {
	value1 = document.getElementById("26000027").value
	value2 = document.getElementById("26000027").name
	func1(value1,value2)
}, false);
document.getElementById("26000044").addEventListener("click", function () {
	value1 = document.getElementById("26000044").value
	value2 = document.getElementById("26000044").name
	func1(value1,value2)
}, false);
document.getElementById("27000013").addEventListener("click", function () {
	value1 = document.getElementById("27000013").value
	value2 = document.getElementById("27000013").name
	func1(value1,value2)
}, false);
document.getElementById("28000005").addEventListener("click", function () {
	value1 = document.getElementById("28000005").value
	value2 = document.getElementById("28000005").name
	func1(value1,value2)
}, false);
document.getElementById("28000009").addEventListener("click", function () {
	value1 = document.getElementById("28000009").value
	value2 = document.getElementById("28000009").name
	func1(value1,value2)
}, false);
document.getElementById("26000006").addEventListener("click", function () {
	value1 = document.getElementById("26000006").value
	value2 = document.getElementById("26000006").name
	func1(value1,value2)
}, false);
document.getElementById("26000007").addEventListener("click", function () {
	value1 = document.getElementById("26000007").value
	value2 = document.getElementById("26000007").name
	func1(value1,value2)
}, false);
document.getElementById("26000016").addEventListener("click", function () {
	value1 = document.getElementById("26000016").value
	value2 = document.getElementById("26000016").name
	func1(value1,value2)
}, false);
document.getElementById("26000034").addEventListener("click", function () {
	value1 = document.getElementById("26000034").value
	value2 = document.getElementById("26000034").name
	func1(value1,value2)
}, false);
document.getElementById("26000045").addEventListener("click", function () {
	value1 = document.getElementById("26000045").value
	value2 = document.getElementById("26000045").name
	func1(value1,value2)
}, false);
document.getElementById("26000054").addEventListener("click", function () {
	value1 = document.getElementById("26000054").value
	value2 = document.getElementById("26000054").name
	func1(value1,value2)
}, false);
document.getElementById("26000063").addEventListener("click", function () {
	value1 = document.getElementById("26000063").value
	value2 = document.getElementById("26000063").name
	func1(value1,value2)
}, false);
document.getElementById("26000020").addEventListener("click", function () {
	value1 = document.getElementById("26000020").value
	value2 = document.getElementById("26000020").name
	func1(value1,value2)
}, false);
document.getElementById("26000060").addEventListener("click", function () {
	value1 = document.getElementById("26000060").value
	value2 = document.getElementById("26000060").name
	func1(value1,value2)
}, false);
document.getElementById("27000008").addEventListener("click", function () {
	value1 = document.getElementById("27000008").value
	value2 = document.getElementById("27000008").name
	func1(value1,value2)
}, false);
document.getElementById("28000007").addEventListener("click", function () {
	value1 = document.getElementById("28000007").value
	value2 = document.getElementById("28000007").name
	func1(value1,value2)
}, false);
document.getElementById("26000004").addEventListener("click", function () {
	value1 = document.getElementById("26000004").value
	value2 = document.getElementById("26000004").name
	func1(value1,value2)
}, false);
document.getElementById("26000009").addEventListener("click", function () {
	value1 = document.getElementById("26000009").value
	value2 = document.getElementById("26000009").name
	func1(value1,value2)
}, false);
document.getElementById("26000085").addEventListener("click", function () {
	value1 = document.getElementById("26000085").value
	value2 = document.getElementById("26000085").name
	func1(value1,value2)
}, false);
document.getElementById("28000006").addEventListener("click", function () {
	value1 = document.getElementById("28000006").value
	value2 = document.getElementById("28000006").name
	func1(value1,value2)
}, false);
document.getElementById("28000011").addEventListener("click", function () {
	value1 = document.getElementById("28000011").value
	value2 = document.getElementById("28000011").name
	func1(value1,value2)
}, false);
document.getElementById("26000023").addEventListener("click", function () {
	value1 = document.getElementById("26000023").value
	value2 = document.getElementById("26000023").name
	func1(value1,value2)
}, false);
document.getElementById("26000026").addEventListener("click", function () {
	value1 = document.getElementById("26000026").value
	value2 = document.getElementById("26000026").name
	func1(value1,value2)
}, false);
document.getElementById("26000032").addEventListener("click", function () {
	value1 = document.getElementById("26000032").value
	value2 = document.getElementById("26000032").name
	func1(value1,value2)
}, false);
document.getElementById("26000046").addEventListener("click", function () {
	value1 = document.getElementById("26000046").value
	value2 = document.getElementById("26000046").name
	func1(value1,value2)
}, false);
document.getElementById("26000050").addEventListener("click", function () {
	value1 = document.getElementById("26000050").value
	value2 = document.getElementById("26000050").name
	func1(value1,value2)
}, false);
document.getElementById("26000061").addEventListener("click", function () {
	value1 = document.getElementById("26000061").value
	value2 = document.getElementById("26000061").name
	func1(value1,value2)
}, false);
document.getElementById("26000035").addEventListener("click", function () {
	value1 = document.getElementById("26000035").value
	value2 = document.getElementById("26000035").name
	func1(value1,value2)
}, false);
document.getElementById("26000037").addEventListener("click", function () {
	value1 = document.getElementById("26000037").value
	value2 = document.getElementById("26000037").name
	func1(value1,value2)
}, false);
document.getElementById("26000042").addEventListener("click", function () {
	value1 = document.getElementById("26000042").value
	value2 = document.getElementById("26000042").name
	func1(value1,value2)
}, false);
document.getElementById("26000048").addEventListener("click", function () {
	value1 = document.getElementById("26000048").value
	value2 = document.getElementById("26000048").name
	func1(value1,value2)
}, false);
document.getElementById("26000062").addEventListener("click", function () {
	value1 = document.getElementById("26000062").value
	value2 = document.getElementById("26000062").name
	func1(value1,value2)
}, false);
document.getElementById("26000083").addEventListener("click", function () {
	value1 = document.getElementById("26000083").value
	value2 = document.getElementById("26000083").name
	func1(value1,value2)
}, false);
document.getElementById("26000051").addEventListener("click", function () {
	value1 = document.getElementById("26000051").value
	value2 = document.getElementById("26000051").name
	func1(value1,value2)
}, false);
document.getElementById("28000010").addEventListener("click", function () {
	value1 = document.getElementById("28000010").value
	value2 = document.getElementById("28000010").name
	func1(value1,value2)
}, false);
document.getElementById("26000033").addEventListener("click", function () {
	value1 = document.getElementById("26000033").value
	value2 = document.getElementById("26000033").name
	func1(value1,value2)
}, false);
document.getElementById("26000029").addEventListener("click", function () {
	value1 = document.getElementById("26000029").value
	value2 = document.getElementById("26000029").name
	func1(value1,value2)
}, false);
document.getElementById("26000055").addEventListener("click", function () {
	value1 = document.getElementById("26000055").value
	value2 = document.getElementById("26000055").name
	func1(value1,value2)
}, false);
document.getElementById("26000069").addEventListener("click", function () {
	value1 = document.getElementById("26000069").value
	value2 = document.getElementById("26000069").name
	func1(value1,value2)
}, false);
document.getElementById("26000072").addEventListener("click", function () {
	value1 = document.getElementById("26000072").value
	value2 = document.getElementById("26000072").name
	func1(value1,value2)
}, false);
document.getElementById("26000074").addEventListener("click", function () {
	value1 = document.getElementById("26000074").value
	value2 = document.getElementById("26000074").name
	func1(value1,value2)
}, false);