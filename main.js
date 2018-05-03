function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var ratio = 0
	var CEO = 0
	var cash = 0
	var total = 0
	var median = 0
	
	if (question1 == "BlackRock"){
		ratio = 195;
		CEO = "Laurence Fink"
		total = 27743233
		median = 141987
	}
	
		if (question1 == "Ameriprise Financial"){
		ratio = 223;
		CEO = "James Cracchiolo"
		total = 23914109
		median = 107082
	}
	if (question1 == "Bank Of America"){
		ratio = 250;
		CEO = "Brian Moynihan"
		total = 21791812
		median = 87115
	}
		if (question1 == "Bank Of New York Mellon"){
		ratio = 354;
		CEO = "Gerald Hassell"
		total = 19837535
		median = 55970
	}
		if (question1 == "Citigroup"){
		ratio = 369;
		CEO = "Michael Corbat"
		total = 17814131
		median = 48249
	}
		if (question1 == "Federated Investors"){
		ratio = 58;
		CEO = "J. Christopher Donahue"
		total = 5194655
		median = 90049
		}
		
		if (question1 == "Invesco"){
		ratio = 141;
		CEO = "Martin Flanagan"
		total = 13805195
		median = 97775
		}
		
		if (question1 == "Jpmorgan Chase"){
		ratio = 364;
		CEO = "James Dimon"
		total = 28320175
		median = 77799
	}
		if (question1 == "Northern Trust"){
		ratio = 169;
		CEO = "Frederick Waddell"
		total = 11850683
		median = 70029
	}
		if (question1 == "Prudential Financial"){
		ratio = 268;
		CEO = "John Strangfeld"
		total = 27120220
		median = 101067
		}
		
		if (question1 == "SEI Investments"){
		ratio = 24;
		CEO = "Alfred West, Jr."
		total = 2026953
		median = 85285
	}
		if (question1 == "State Street"){
		ratio = 229;
		CEO = "Joseph Hooley"
		total = 19497361
		median = 85322
	}
		if (question1 == "Wells Fargo & Company"){
		ratio = 291;
		CEO = "Timothy Sloan"
		total = 17564014
		median = 60446
	}
		if (question1 == "T. Rowe Price"){
		ratio = 121;
		CEO = "William. Stromberg"
		total = 11669969
		median = 96190
	}		
		if (question1 == "Morgan Stanley"){
		ratio = 192;
		CEO = "James Gorman"
		total = 24509722
		median = 127863
	}
	

	var pay = Math.round(total/question2);
	var employee = (median/question2);
	var real = Math.round(total/median);
	

	
	if (question1 == "Jpmorgan Chase") {
		document.getElementById("message").innerHTML = "Jamie Dimon had a good year. His $28.3 million haul was "+pay+" times your pay and 364 times the $77,799 median compensation of J.P. Morgan staff, earning him the title of highest paid CEO in this list.";
	}
	if (question1 == "BlackRock") {
		document.getElementById("message").innerHTML = "Active? Passive? Who cares - Larry Fink has built a diversified asset management firm crowned the world's largest, and last year netted $27.7 million, "+pay+" times your pay and 195 times the firm's median of $141,987 in 2017.";
	}
	if (question1 == "Prudential Financial") {
		document.getElementById("message").innerHTML = "John Strangfeld marked 40 years at Prudential last year with a $27.1 million pay packet, "+pay+" times what you make and 268 times the company median, which was $101,067 in 2017.";
	}
	if (question1 == "Morgan Stanley") {
		document.getElementById("message").innerHTML = "He's from Down Under but James Gorman's $24.5 million pay-day was sky high - "+pay+" times what you make and 192 times Morgan Stanley's median, which was $127,863 in 2017.";
	}
	if (question1 == "Ameriprise Financial") {
		document.getElementById("message").innerHTML = "James Cracciolo has quite a few spending choices after drawing $23.9 million last year - "+pay+" times your take and 223 times Ameriprise's median annual pay of $107,082 in 2017.";
	}
	if (question1 == "Bank Of America") {
		document.getElementById("message").innerHTML = "BBrian Moynihan has weathered more than a few board room scraps. Maybe that's why they paid him $21.7 million last year, "+pay+" times your pay and 250 times the firm median of $87,115 in 2017.";
	}
	if (question1 == "Bank Of New York Mellon") {
		document.getElementById("message").innerHTML = "We can always dream. Gerald Hassell doesn't have to - he scored $19.8 million last year, "+pay+" times your haul and 354 times the firm's median pay, which was $55,970 in 2017.";
	}
	if (question1 == "State Street") {
		document.getElementById("message").innerHTML = "If you had Joseph Hooley's job you would have made $19.4 million last year. But you don't - he made "+pay+" times more than you and 229 times State Street's median pay, which was $85,322 in 2017.";
	}
	if (question1 == "Citigroup") {
		document.getElementById("message").innerHTML = "Hanging around has been worthwhile for Michael Corbat. His 35 years at Citi and predecessor firms, and five years as CEO, paved the way to him landing $17.8 million in 2017, "+pay+" times your pay and 369 times Citi's median, which was $48,249 in 2017.";
	}
	if (question1 == "Wells Fargo & Company") {
		document.getElementById("message").innerHTML = "Few would envy Timothy Sloan's job right now. Wells Fargo is fighting on all fronts, giving him ample opportunity to prove he's worth the $17.5 million he earned last year, "+pay+" times your wages and 291 times the Wells Fargo median, which was $60,466 in 2017.";
	}
	if (question1 == "Invesco") {
		document.getElementById("message").innerHTML = "Stressful? Tiring? A CEO's life isn't all cocktail parties and ribbon cutting. After 13 years in the top job, Invesco's Martin Flanagan earned $13.8 million last year, "+pay+" times your pay and 141 times the firm's median, which was $97,775 in 2017.";
	}
	if (question1 == "Northern Trust") {
		document.getElementById("message").innerHTML = "Rick Waddell's decision to join Northern Trust straight from college in 1975 has well and truly paid off. After 35 years at the firm he netted $11.8 million in compensation last year, "+pay+" times your pay and 169 times the firm median, which was $70,029 in 2017.";
	}
	if (question1 == "T. Rowe Price") {
		document.getElementById("message").innerHTML = "Ever wonder what you would you do with $11.6 million? That's what T. Rowe Price CEO William Stromberg earned last year, "+pay+" times your pay and 121 times the $1 trillion firm's median pay, which was $96,190 in 2017.";
	}
	if (question1 == "Federated Investors") {
		document.getElementById("message").innerHTML = "The Federated Investors chief executive hauled in $5.1 million last year, "+pay+" times your pay and 58 times the $397 billion firm's median pay, which was $90,049 in 2017.";
	}
	if (question1 == "SEI Investments") {
		document.getElementById("message").innerHTML = "He founded the firm 50 years ago and last year SEI Investment CEO Alfred West earned himself $2 million in total compensation, "+pay+" times what you make and 24 times the $85,285 median pay for the Oaks, Pennsylvania-based firm.";
	}

	
	var d = document.getElementById('image');
    if (question1 == "Bank Of America") {
            d.innerHTML = '<img src=\'BrianT.Moynihan.jpg\'width=\'300px\' height=\'146px\'>';
    }
	 if (question1 == "Bank Of New York Mellon") {
            d.innerHTML = '<img src=\'GeraldHassell.jpg\'width=\'300px\' height=\'146px\'>';
    }
	 if (question1 == "BlackRock") {
            d.innerHTML = '<img src=\'LarryFink.jpg\'width=\'300px\' height=\'146px\'>';
    }
	 if (question1 == "Citigroup") {
            d.innerHTML = '<img src=\'MichaelCorbat.jpg\'width=\'300px\' height=\'146px\'>';
    }
	if (question1 == "Jpmorgan Chase") {
            d.innerHTML = '<img src=\'JamieDimon.jpg\'width=\'300px\' height=\'146px\'>';
    }
	if (question1 == "Prudential Financial") {
            d.innerHTML = '<img src=\'JohnStrangfeld.jpg\'width=\'300px\' height=\'146px\'>';
    }
	if (question1 == "Wells Fargo & Company") {
            d.innerHTML = '<img src=\'TimothySloan.jpg\'width=\'300px\' height=\'146px\'>';
    }
	if (question1 == "Morgan Stanley") {
            d.innerHTML = '<img src=\'JamesGorman.jpg\'width=\'300px\' height=\'146px\'>';
    }
	if (question1 == "Federated Investors") {
            d.innerHTML = '<img src=\'ChristopherDonahue.jpg\'width=\'300px\' height=\'146px\'>';
    }
	if (question1 == "Ameriprise Financial") {
            d.innerHTML = '<img src=\'JimCracchiolo.jpg\'width=\'300px\' height=\'146px\'>';
    }
	if (question1 == "T. Rowe Price") {
            d.innerHTML = '<img src=\'WilliamStromberg.jpg\'width=\'300px\' height=\'146px\'>';
    }
		if (question1 == "SEI Investments") {
            d.innerHTML = '<img src=\'AlfredWest.jpg\'width=\'300px\' height=\'146px\'>';
    }
	if (question1 == "Northern Trust") {
            d.innerHTML = '<img src=\'FrederickWaddell.jpg\'width=\'300px\' height=\'146px\'>';
    }
	if (question1 == "Invesco") {
            d.innerHTML = '<img src=\'MartinFlanagan.jpg\'width=\'300px\' height=\'146px\'>';
    }
	if (question1 == "State Street") {
            d.innerHTML = '<img src=\'JosephHooley.jpg\'width=\'300px\' height=\'146px\'>';
    }
	
	canvas = document.getElementById("myCanvas");
	ctx = canvas.getContext("2d");
	radius = Math.sqrt((pay*314.1)/Math.PI)
	radius2 = Math.sqrt((employee*314.1)/Math.PI)
	
	ctx.beginPath();
	ctx.rect(0, 0, 620, 550);
	ctx.fillStyle = "#ffffff";
	ctx.fill();

	ctx.beginPath();
	ctx.arc(285, 300, radius, 0, 2*Math.PI);
	ctx.fillStyle="#CCCCCC";
	ctx.fill();	
	
	ctx.beginPath();
	ctx.arc(150, 55, 10, 0, 2*Math.PI);
	ctx.fillStyle="#CC0000";
	ctx.fill();
	
	ctx.beginPath();
	ctx.arc(450, 100, radius2, 0, 2*Math.PI);
	ctx.fillStyle="#FF9933";
	ctx.fill();
	

	
	ctx.fillStyle="#565656";
	ctx.font = "16px Arial";
	ctx.fillText("Your pay",120,35);
	ctx.fillText("Median pay relative to yours",350,74);
	ctx.font = "16px Arial";
	ctx.fillText(CEO + "'s pay relative to yours.",150,300);
	


}

	
