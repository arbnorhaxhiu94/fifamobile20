if (!localStorage.getItem('amp'))
    localStorage.setItem('amp', 0);
if (!localStorage.getItem('aw'))
    localStorage.setItem('aw', 0);
if (!localStorage.getItem('ad'))
    localStorage.setItem('ad', 0);
if (!localStorage.getItem('al'))
    localStorage.setItem('al', 0);
if (!localStorage.getItem('apoints'))
    localStorage.setItem('apoints', 0);
if (!localStorage.getItem('ags'))
    localStorage.setItem('ags', 0);
if (!localStorage.getItem('agc'))
    localStorage.setItem('agc', 0);
if (!localStorage.getItem('agd'))
    localStorage.setItem('agd', 0);
if (!localStorage.getItem('atr1'))
    localStorage.setItem('atr1', 'Player 1');
if (!localStorage.getItem('atr2'))
    localStorage.setItem('atr2', 'Player 2');
if (!localStorage.getItem('atr3'))
    localStorage.setItem('atr3', 'Player 3');

if (!localStorage.getItem('ymp'))
    localStorage.setItem('ymp', 0);
if (!localStorage.getItem('yw'))
    localStorage.setItem('yw', 0);
if (!localStorage.getItem('yd'))
    localStorage.setItem('yd', 0);
if (!localStorage.getItem('yl'))
    localStorage.setItem('yl', 0);
if (!localStorage.getItem('ypoints'))
    localStorage.setItem('ypoints', 0);
if (!localStorage.getItem('ygs'))
    localStorage.setItem('ygs', 0);
if (!localStorage.getItem('ygc'))
    localStorage.setItem('ygc', 0);
if (!localStorage.getItem('ygd'))
    localStorage.setItem('ygd', 0);
if (!localStorage.getItem('utr1'))
    localStorage.setItem('utr1', 'Player 1');
if (!localStorage.getItem('utr2'))
    localStorage.setItem('utr2', 'Player 2');
if (!localStorage.getItem('utr3'))
    localStorage.setItem('utr3', 'Player 3');

if (!localStorage.getItem('ump'))
    localStorage.setItem('ump', 0);
if (!localStorage.getItem('uw'))
    localStorage.setItem('uw', 0);
if (!localStorage.getItem('ud'))
    localStorage.setItem('ud', 0);
if (!localStorage.getItem('ul'))
    localStorage.setItem('ul', 0);
if (!localStorage.getItem('upoints'))
    localStorage.setItem('upoints', 0);
if (!localStorage.getItem('ugs'))
    localStorage.setItem('ugs', 0);
if (!localStorage.getItem('ugc'))
    localStorage.setItem('ugc', 0);
if (!localStorage.getItem('ugd'))
    localStorage.setItem('ugd', 0);
if (!localStorage.getItem('ytr1'))
    localStorage.setItem('ytr1', 'Player 1');
if (!localStorage.getItem('ytr2'))
    localStorage.setItem('ytr2', 'Player 2');
if (!localStorage.getItem('ytr3'))
    localStorage.setItem('ytr3', 'Player 3');


function reset() {
		localStorage.setItem('amp', 0);
		localStorage.setItem('aw', 0);
	    localStorage.setItem('ad', 0);
	    localStorage.setItem('al', 0);
	    localStorage.setItem('apoints', 0);
	    localStorage.setItem('ags', 0);
	    localStorage.setItem('agc', 0);
	    localStorage.setItem('agd', 0);

	    localStorage.setItem('ymp', 0);
	    localStorage.setItem('yw', 0);
	    localStorage.setItem('yd', 0);
	    localStorage.setItem('yl', 0);
	    localStorage.setItem('ypoints', 0);
	    localStorage.setItem('ygs', 0);
	    localStorage.setItem('ygc', 0);
	    localStorage.setItem('ygd', 0);

	    localStorage.setItem('ump', 0);
	    localStorage.setItem('uw', 0);
	    localStorage.setItem('ud', 0);
	    localStorage.setItem('ul', 0);
	    localStorage.setItem('upoints', 0);
	    localStorage.setItem('ugs', 0);
	    localStorage.setItem('ugc', 0);
	    localStorage.setItem('ugd', 0);
	    
 		document.querySelector('#amp').innerHTML = localStorage.getItem('amp');
		document.querySelector('#aw').innerHTML = localStorage.getItem('aw');
		document.querySelector('#ad').innerHTML = localStorage.getItem('ad');
		document.querySelector('#al').innerHTML = localStorage.getItem('al');
		document.querySelector('#apoints').innerHTML = localStorage.getItem('apoints');
		document.querySelector('#ags').innerHTML = localStorage.getItem('ags');
		document.querySelector('#agc').innerHTML = localStorage.getItem('agc');
		document.querySelector('#agd').innerHTML = localStorage.getItem('agd');

		document.querySelector('#ymp').innerHTML = localStorage.getItem('ymp');
		document.querySelector('#yw').innerHTML = localStorage.getItem('yw');
		document.querySelector('#yd').innerHTML = localStorage.getItem('yd');
		document.querySelector('#yl').innerHTML = localStorage.getItem('yl');
		document.querySelector('#ypoints').innerHTML = localStorage.getItem('ypoints');
		document.querySelector('#ygs').innerHTML = localStorage.getItem('ygs');
		document.querySelector('#ygc').innerHTML = localStorage.getItem('ygc');
		document.querySelector('#ygd').innerHTML = localStorage.getItem('ygd');

		document.querySelector('#ump').innerHTML = localStorage.getItem('ump');
		document.querySelector('#uw').innerHTML = localStorage.getItem('uw');
		document.querySelector('#ud').innerHTML = localStorage.getItem('ud');
		document.querySelector('#ul').innerHTML = localStorage.getItem('ul');
		document.querySelector('#upoints').innerHTML = localStorage.getItem('upoints');
		document.querySelector('#ugs').innerHTML = localStorage.getItem('ugs');
		document.querySelector('#ugc').innerHTML = localStorage.getItem('ugc');
		document.querySelector('#ugd').innerHTML = localStorage.getItem('ugd');
}


document.addEventListener('DOMContentLoaded', () => {

		document.querySelector('#amp').innerHTML = localStorage.getItem('amp');
		document.querySelector('#aw').innerHTML = localStorage.getItem('aw');
		document.querySelector('#ad').innerHTML = localStorage.getItem('ad');
		document.querySelector('#al').innerHTML = localStorage.getItem('al');
		document.querySelector('#apoints').innerHTML = localStorage.getItem('apoints');
		document.querySelector('#ags').innerHTML = localStorage.getItem('ags');
		document.querySelector('#agc').innerHTML = localStorage.getItem('agc');
		document.querySelector('#agd').innerHTML = localStorage.getItem('agd');



		document.querySelector('#ymp').innerHTML = localStorage.getItem('ymp');
		document.querySelector('#yw').innerHTML = localStorage.getItem('yw');
		document.querySelector('#yd').innerHTML = localStorage.getItem('yd');
		document.querySelector('#yl').innerHTML = localStorage.getItem('yl');
		document.querySelector('#ypoints').innerHTML = localStorage.getItem('ypoints');
		document.querySelector('#ygs').innerHTML = localStorage.getItem('ygs');
		document.querySelector('#ygc').innerHTML = localStorage.getItem('ygc');
		document.querySelector('#ygd').innerHTML = localStorage.getItem('ygd');

		document.querySelector('#ump').innerHTML = localStorage.getItem('ump');
		document.querySelector('#uw').innerHTML = localStorage.getItem('uw');
		document.querySelector('#ud').innerHTML = localStorage.getItem('ud');
		document.querySelector('#ul').innerHTML = localStorage.getItem('ul');
		document.querySelector('#upoints').innerHTML = localStorage.getItem('upoints');
		document.querySelector('#ugs').innerHTML = localStorage.getItem('ugs');
		document.querySelector('#ugc').innerHTML = localStorage.getItem('ugc');
		document.querySelector('#ugd').innerHTML = localStorage.getItem('ugd');


		document.querySelector('.atr1').innerHTML = localStorage.getItem('atr1');
		document.querySelector('.atr2').innerHTML = localStorage.getItem('atr2');
		document.querySelector('.atr3').innerHTML = localStorage.getItem('atr3');
		document.querySelector('.utr1').innerHTML = localStorage.getItem('utr1');
		document.querySelector('.utr2').innerHTML = localStorage.getItem('utr2');
		document.querySelector('.utr3').innerHTML = localStorage.getItem('utr3');
		document.querySelector('.ytr1').innerHTML = localStorage.getItem('ytr1');
		document.querySelector('.ytr2').innerHTML = localStorage.getItem('ytr2');
		document.querySelector('.ytr3').innerHTML = localStorage.getItem('ytr3');


document.querySelector('#transferet').onsubmit = () => {

		var atr1 = document.querySelector('#atr1').value;
		var atr2 = document.querySelector('#atr2').value;
		var atr3 = document.querySelector('#atr3').value;

		var utr1 = document.querySelector('#utr1').value;
		var utr2 = document.querySelector('#utr2').value;
		var utr3 = document.querySelector('#utr3').value;

		var ytr1 = document.querySelector('#ytr1').value;
		var ytr2 = document.querySelector('#ytr2').value;
		var ytr3 = document.querySelector('#ytr3').value;

		document.querySelector('.atr1').innerHTML = atr1;
		localStorage.setItem('atr1', atr1);
		document.querySelector('.atr2').innerHTML = atr2;
		localStorage.setItem('atr2', atr2);
		document.querySelector('.atr3').innerHTML = atr3;
		localStorage.setItem('atr3', atr3);

		document.querySelector('.utr1').innerHTML = utr1;
		localStorage.setItem('utr1', utr1);
		document.querySelector('.utr2').innerHTML = utr2;
		localStorage.setItem('utr2', utr2);
		document.querySelector('.utr3').innerHTML = utr3;
		localStorage.setItem('utr3', utr3);

		document.querySelector('.ytr1').innerHTML = ytr1;
		localStorage.setItem('ytr1', ytr1);
		document.querySelector('.ytr2').innerHTML = ytr2;
		localStorage.setItem('ytr2', ytr2);
		document.querySelector('.ytr3').innerHTML = ytr3;
		localStorage.setItem('ytr3', ytr3);
}


//___________________SUBMIT______________________________________________________________________________

	document.querySelector('#fixtures').onsubmit = () => {

		var arbnori1 = document.querySelector('.arbnori1').value;
		var arbnori2 = document.querySelector('.arbnori2').value;
		var arbnori3 = document.querySelector('.arbnori3').value;
		var arbnori4 = document.querySelector('.arbnori4').value;
		var arbnori5 = document.querySelector('.arbnori5').value;
		var arbnori6 = document.querySelector('.arbnori6').value;
		var arbnori7 = document.querySelector('.arbnori7').value;
		var arbnori8 = document.querySelector('.arbnori8').value;
		var arbnori9 = document.querySelector('.arbnori9').value;
		//var arbnori10 = document.querySelector('.arbnori10').value;
		var urani1 = document.querySelector('.urani1').value;
		var urani2 = document.querySelector('.urani2').value;
		var urani3 = document.querySelector('.urani3').value;
		var urani4 = document.querySelector('.urani4').value;
		var urani5 = document.querySelector('.urani5').value;
		var urani6 = document.querySelector('.urani6').value;
		var urani7 = document.querySelector('.urani7').value;
		var urani8 = document.querySelector('.urani8').value;
		var urani9 = document.querySelector('.urani9').value;
		var ylli1 = document.querySelector('.ylli1').value;
		var ylli2 = document.querySelector('.ylli2').value;
		var ylli3 = document.querySelector('.ylli3').value;
		var ylli4 = document.querySelector('.ylli4').value;
		var ylli5 = document.querySelector('.ylli5').value;
		var ylli6 = document.querySelector('.ylli6').value;
		var ylli7 = document.querySelector('.ylli7').value;
		var ylli8 = document.querySelector('.ylli8').value;
		//var ylli9 = document.querySelector('.ylli9').value;

		var amp = localStorage.getItem('amp');
		var aw = localStorage.getItem('aw');
		var ad = localStorage.getItem('ad');
		var al = localStorage.getItem('al');
		var apoints1 = localStorage.getItem('apoints');
		var ags = localStorage.getItem('ags');
		var agc = localStorage.getItem('agc');
		var agd = localStorage.getItem('agd');

		var ump = localStorage.getItem('ump');
		var uw = localStorage.getItem('uw');
		var ud = localStorage.getItem('ud');
		var ul = localStorage.getItem('ul');
		var upoints1 = localStorage.getItem('upoints');
		var ugs = localStorage.getItem('ugs');
		var ugc = localStorage.getItem('ugc');
		var ugd = localStorage.getItem('ugd');

		var ymp = localStorage.getItem('ymp');
		var yw = localStorage.getItem('yw');
		var yd = localStorage.getItem('yd');
		var yl = localStorage.getItem('yl');
		var ypoints1 = localStorage.getItem('ypoints');
		var ygs = localStorage.getItem('ygs');
		var ygc = localStorage.getItem('ygc');
		var ygd = localStorage.getItem('ygd');

		

//_________________________________________________________________________________________________
		//Match Played
		if ( arbnori1.length > 0 && urani1.length > 0) {
			amp++;
			ump++;
			if (arbnori1 > urani1) {
				aw++;
				ul++;
			}
			else if(arbnori1 == urani1) {
				ad++;
				ud++;}
			else{
				uw++;
				al++;
			}
		}
		else {
			ump = parseInt(ump) + 0;
			amp = parseInt(amp) + 0;
			aw = parseInt(aw) + 0;
			ad = parseInt(ad) + 0;
			al = parseInt(al) + 0;
			uw = parseInt(uw) + 0;
			ud = parseInt(ud) + 0;
			ul = parseInt(ul) + 0;
			arbnori1 = 0;
			urani1 = 0;
		}
//__________________________________________________________________________________________________

		if ( arbnori2.length > 0 && ylli1.length > 0) {
			amp++;
			ymp++;
			if (arbnori2 > ylli1) {
				aw++;
				yl++;
			}
			else if(arbnori2 == ylli1) {
				ad++;
				yd++;}
			else{
				yw++;
				al++;
			}
		}
		else {
			ymp = parseInt(ymp) + 0;
			amp = parseInt(amp) + 0;
			aw = parseInt(aw) + 0;
			ad = parseInt(ad) + 0;
			al = parseInt(al) + 0;
			yw = parseInt(yw) + 0;
			yd = parseInt(yd) + 0;
			yl = parseInt(yl) + 0;
			arbnori2 = 0;
			ylli1 = 0;
		}

//_____________________________________________________________________________________________________

		if (arbnori3.length > 0 && urani3.length > 0) {
			amp++;
			ump++;
			if (urani3 > arbnori3) {
				uw++;
				al++;
			}
			else if(urani3 == arbnori3) {
				ud++;
				ad++;}
			else{
				aw++;
				ul++;
			}
		}
		else {
			ump = parseInt(ump) + 0;
			amp = parseInt(amp) + 0;
			aw = parseInt(aw) + 0;
			ad = parseInt(ad) + 0;
			al = parseInt(al) + 0;
			uw = parseInt(uw) + 0;
			ud = parseInt(ud) + 0;
			ul = parseInt(ul) + 0;
			arbnori3 = 0;
			urani3 = 0;
		}

//__________________________________________________________________________________________________

		if (arbnori4.length > 0 && ylli3.length > 0) {
			amp++;
			ymp++;
			if (ylli3 > arbnori4) {
				yw++;
				al++;
			}
			else if(ylli3 == arbnori4) {
				yd++;
				ad++;}
			else{
				aw++;
				yl++;
			}
		}
		else {
			ymp = parseInt(ymp) + 0;
			amp = parseInt(amp) + 0;
			aw = parseInt(aw) + 0;
			ad = parseInt(ad) + 0;
			al = parseInt(al) + 0;
			yw = parseInt(yw) + 0;
			yd = parseInt(yd) + 0;
			yl = parseInt(yl) + 0;
			arbnori4 = 0;
			ylli3 = 0;
		}
//__________________________________________________________________________________________________

		if (arbnori5.length > 0 && urani5.length >0 ) {
			amp++;
			ump++;
			if (arbnori5 > urani5) {
				aw++;
				ul++;
			}
			else if(arbnori5 == urani5) {
				ad++;
				ud++;}
			else{
				uw++;
				al++;
			}
		}
		else {
			ump = parseInt(ump) + 0;
			amp = parseInt(amp) + 0;
			aw = parseInt(aw) + 0;
			ad = parseInt(ad) + 0;
			al = parseInt(al) + 0;
			uw = parseInt(uw) + 0;
			ud = parseInt(ud) + 0;
			ul = parseInt(ul) + 0;
			arbnori5 = 0;
			urani5 = 0;
		}
//__________________________________________________________________________________________________

		if (arbnori6.length > 0 && ylli5.length >0) {
			amp++;
			ymp++;
			if (arbnori6 > ylli5) {
				aw++;
				yl++;
			}
			else if(arbnori6 == ylli5) {
				ad++;
				yd++;}
			else{
				yw++;
				al++;
			}
		}
		else {
			ymp = parseInt(ymp) + 0;
			amp = parseInt(amp) + 0;
			aw = parseInt(aw) + 0;
			ad = parseInt(ad) + 0;
			al = parseInt(al) + 0;
			yw = parseInt(yw) + 0;
			yd = parseInt(yd) + 0;
			yl = parseInt(yl) + 0;
			arbnori6 = 0;
			ylli5 = 0;
		}
//__________________________________________________________________________________________________

		if (arbnori7.length > 0 && urani7.length >0) {
			amp++;
			ump++;
			if (arbnori7 > urani7) {
				aw++;
				ul++;
			}
			else if(arbnori7 == urani7) {
				ad++;
				ud++;}
			else{
				uw++;
				al++;
			}
		}
		else {
			ump = parseInt(ump) + 0;
			amp = parseInt(amp) + 0;
			aw = parseInt(aw) + 0;
			ad = parseInt(ad) + 0;
			al = parseInt(al) + 0;
			uw = parseInt(uw) + 0;
			ud = parseInt(ud) + 0;
			ul = parseInt(ul) + 0;
			arbnori7 = 0;
			urani7 = 0;
		}
//__________________________________________________________________________________________________

		if (arbnori8.length > 0 && ylli7.length >0) {
			amp++;
			ymp++;
			if (arbnori8 > ylli7) {
				aw++;
				yl++;
			}
			else if(arbnori8 == ylli7) {
				ad++;
				yd++;}
			else{
				yw++;
				al++;
			}
		}
		else {
			ymp = parseInt(ymp) + 0;
			amp = parseInt(amp) + 0;
			aw = parseInt(aw) + 0;
			ad = parseInt(ad) + 0;
			al = parseInt(al) + 0;
			yw = parseInt(yw) + 0;
			yd = parseInt(yd) + 0;
			yl = parseInt(yl) + 0;
			arbnori8 = 0;
			ylli7 = 0;
		}
//__________________________________________________________________________________________________

		if (arbnori9.length > 0 && urani9.length >0) {
			amp++;
			ump++;
			if (arbnori9 > urani9) {
				aw++;
				ul++;
			}
			else if(arbnori9 == urani9) {
				ad++;
				ud++;}
			else{
				uw++;
				al++;
			}
		}
		else {
			ump = parseInt(ump) + 0;
			amp = parseInt(amp) + 0;
			aw = parseInt(aw) + 0;
			ad = parseInt(ad) + 0;
			al = parseInt(al) + 0;
			uw = parseInt(uw) + 0;
			ud = parseInt(ud) + 0;
			ul = parseInt(ul) + 0;
			arbnori9 = 0;
			urani9 = 0;
		}
//__________________________________________________________________________________________________

		if (urani2.length > 0 && ylli2.length > 0) {
			ump++;
			ymp++;
			if (urani2 > ylli2) {
				uw++;
				yl++;
			}
			else if(urani2 == ylli2) {
				ud++;
				yd++;}
			else{
				yw++;
				ul++;
			}
		}
		else {
			ymp = parseInt(ymp) + 0;
			ump = parseInt(ump) + 0;
			uw = parseInt(uw) + 0;
			ud = parseInt(ud) + 0;
			ul = parseInt(ul) + 0;
			yw = parseInt(yw) + 0;
			yd = parseInt(yd) + 0;
			yl = parseInt(yl) + 0;
			urani2 = 0;
			ylli2 = 0;
		}
//__________________________________________________________________________________________________

		if (urani4.length > 0 && ylli4.length > 0) {
			ump++;
			ymp++;	
			if (ylli4 > urani4) {
				yw++;
				ul++;
			}
			else if(ylli4 == urani4) {
				yd++;
				ud++;}
			else{
				uw++;
				yl++;
			}	
		}
		else {
			ymp = parseInt(ymp) + 0;
			ump = parseInt(ump) + 0;
			uw = parseInt(uw) + 0;
			ud = parseInt(ud) + 0;
			ul = parseInt(ul) + 0;
			yw = parseInt(yw) + 0;
			yd = parseInt(yd) + 0;
			yl = parseInt(yl) + 0;
			urani4 = 0;
			ylli4 = 0;
		}
//__________________________________________________________________________________________________

		if ( urani6.length > 0 && ylli6.length > 0) {
			ump++;
			ymp++;
			if (urani6 > ylli6) {
				uw++;
				yl++;
			}
			else if(urani6 == ylli6) {
				ud++;
				yd++;}
			else{
				yw++;
				ul++;
			}
		}
		else {
			ymp = parseInt(ymp) + 0;
			ump = parseInt(ump) + 0;
			uw = parseInt(uw) + 0;
			ud = parseInt(ud) + 0;
			ul = parseInt(ul) + 0;
			yw = parseInt(yw) + 0;
			yd = parseInt(yd) + 0;
			yl = parseInt(yl) + 0;
			urani6 = 0;
			ylli6 = 0;
		}
//__________________________________________________________________________________________________

		if ( urani8.length > 0 && ylli8.length > 0) {
			ump++;
			ymp++;
			if (urani8 > ylli8) {
				uw++;
				yl++;
			}
			else if(urani8 == ylli8) {
				ud++;
				yd++;}
			else{
				yw++;
				ul++;
			}
		}
		else {
			ymp = parseInt(ymp) + 0;
			ump = parseInt(ump) + 0;
			uw = parseInt(uw) + 0;
			ud = parseInt(ud) + 0;
			ul = parseInt(ul) + 0;
			yw = parseInt(yw) + 0;
			yd = parseInt(yd) + 0;
			yl = parseInt(yl) + 0;
			urani8 = urani8 + 0;
			ylli8 = ylli8 + 0;
		}
//_________________________________________________________________________________________________

		document.querySelector('#amp').innerHTML = parseInt(amp);
		localStorage.setItem('amp', parseInt(amp));

		document.querySelector('#ymp').innerHTML = parseInt(ymp);
		localStorage.setItem('ymp', parseInt(ymp));

		document.querySelector('#ump').innerHTML = parseInt(ump);
		localStorage.setItem('ump', parseInt(ump));


		apoints1 = parseInt(aw*3) + parseInt(ad+0);
		upoints1 = parseInt(uw*3) + parseInt(ud+0);
		ypoints1 = parseInt(yw*3) + parseInt(yd+0);

		document.querySelector('#apoints').innerHTML = parseInt(apoints1);
		localStorage.setItem('apoints', parseInt(apoints1));
		document.querySelector('#aw').innerHTML = parseInt(aw);
		localStorage.setItem('aw', parseInt(aw));
		document.querySelector('#ad').innerHTML = parseInt(ad);
		localStorage.setItem('ad', parseInt(ad));
		document.querySelector('#al').innerHTML = parseInt(al);
		localStorage.setItem('al', parseInt(al));

		document.querySelector('#upoints').innerHTML = parseInt(upoints1);
		localStorage.setItem('upoints', parseInt(upoints1));
		document.querySelector('#uw').innerHTML = parseInt(uw);
		localStorage.setItem('uw', parseInt(uw));
		document.querySelector('#ud').innerHTML = parseInt(ud);
		localStorage.setItem('ud', parseInt(ud));
		document.querySelector('#ul').innerHTML = parseInt(ul);
		localStorage.setItem('ul', parseInt(ul));

		document.querySelector('#ypoints').innerHTML = parseInt(ypoints1);
		localStorage.setItem('ypoints', parseInt(ypoints1));
		document.querySelector('#yw').innerHTML = parseInt(yw);
		localStorage.setItem('yw', parseInt(yw));
		document.querySelector('#yd').innerHTML = parseInt(yd);
		localStorage.setItem('yd', parseInt(yd));
		document.querySelector('#yl').innerHTML = parseInt(yl);
		localStorage.setItem('yl', parseInt(yl));

		ags = parseInt(ags) + parseInt(arbnori1) + parseInt(arbnori2) + parseInt(arbnori3) + parseInt(arbnori4) + parseInt(arbnori5) + parseInt(arbnori6) + parseInt(arbnori7) + parseInt(arbnori8) + parseInt(arbnori9);
		ugs = parseInt(ugs) + parseInt(urani6) + parseInt(urani7) + parseInt(urani8) + parseInt(urani9) + parseInt(urani5)+parseInt(urani4)+parseInt(urani3)+parseInt(urani2)+parseInt(urani1);
		ygs = parseInt(ygs) + parseInt(ylli8) + parseInt(ylli7) + parseInt(ylli6) + parseInt(ylli5) + parseInt(ylli4)+parseInt(ylli3)+parseInt(ylli2)+parseInt(ylli1);


		document.querySelector('#ags').innerHTML = parseInt(ags);
		localStorage.setItem('ags', parseInt(ags));
		document.querySelector('#ugs').innerHTML = parseInt(ugs);
		localStorage.setItem('ugs', parseInt(ugs));
		document.querySelector('#ygs').innerHTML = parseInt(ygs);
		localStorage.setItem('ygs', parseInt(ygs));

		agc = parseInt(agc) + parseInt(urani1)+parseInt(ylli1)+parseInt(urani3)+parseInt(ylli3)+parseInt(urani5)+parseInt(ylli5) + parseInt(urani7) + parseInt(ylli7) +parseInt(urani9);
		ugc = parseInt(ugc) + parseInt(arbnori1)+parseInt(ylli2)+parseInt(arbnori3)+parseInt(ylli4)+parseInt(arbnori5)+parseInt(ylli6) + parseInt(arbnori7) + parseInt(ylli8) + parseInt(arbnori9);
		ygc = parseInt(ygc) + parseInt(arbnori2)+parseInt(urani2)+parseInt(arbnori4)+parseInt(urani4)+parseInt(arbnori6) + parseInt(urani6) + parseInt(arbnori8) + parseInt(urani8);

		document.querySelector('#agc').innerHTML = parseInt(agc);
		localStorage.setItem('agc', parseInt(agc));
		document.querySelector('#ugc').innerHTML = parseInt(ugc);
		localStorage.setItem('ugc', parseInt(ugc));
		document.querySelector('#ygc').innerHTML = parseInt(ygc);
		localStorage.setItem('ygc', parseInt(ygc));

		agd = parseInt(ags) - parseInt(agc);
		ugd = parseInt(ugs) - parseInt(ugc);
		ygd = parseInt(ygs) - parseInt(ygc);

		document.querySelector('#agd').innerHTML = parseInt(agd);
		localStorage.setItem('agd', parseInt(agd));
		document.querySelector('#ugd').innerHTML = parseInt(ugd);
		localStorage.setItem('ugd', parseInt(ugd));
		document.querySelector('#ygd').innerHTML = parseInt(ygd);
		localStorage.setItem('ygd', parseInt(ygd));

		return false; //stop from submitting in another page(stay in that page)
	};
});