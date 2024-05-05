let upcount = [110, 195, 772];
let downcount = [11, 0, 23];
let recount = [583, 721, 170];
let bookcount = [127, 1200, 78];

function upvotepress(element, num)
	{	
		if (element.style.color == 'orange'){
			element.classList.remove('bounce');
			element.style.color = 'lightgray'
			upcount[num] -= 1;
			let upvar = "up" + num;
			document.getElementById(upvar).innerHTML = String(upcount[num]);
		}
		else if (element.style.color != 'orange'){
			element.classList.add('bounce');
			element.style.color = 'orange'
			upcount[num] +=1;
			let upvar = "up" + num;
			document.getElementById(upvar).innerHTML = String(upcount[num]);
		}
		
	}
function downvotepress(element, num)
	{
		if (element.style.color == 'slateblue'){
			element.classList.remove('bounce');
			element.style.color = 'lightgray'
			downcount[num] -= 1;
			let downvar = "down" + num;
			document.getElementById(downvar).innerHTML = String(downcount[num]);
		}
		else if (element.style.color != 'slateblue'){
			element.classList.add('bounce');
			element.style.color = 'slateblue'
			downcount[num] += 1;
			let downvar = "down" + num;
			document.getElementById(downvar).innerHTML = String(downcount[num]);
		}
	}

function repostpress(element, num)
	{
		if (element.style.color == 'lightgreen'){
			element.classList.remove('bounce');
			element.style.color = 'lightgray'
			recount[num] -= 1;
			let revar = "re" + num;
			document.getElementById(revar).innerHTML = String(recount[num]);
		}
		else if (element.style.color != 'lightgreen'){
			element.classList.add('bounce');
			element.style.color = 'lightgreen'
			recount[num] += 1;
			let revar = "re" + num;
			document.getElementById(revar).innerHTML = String(recount[num]);
		}
	}

function bookmarkpress(element, num)
	{
		if (element.style.color == 'lightblue'){
			element.classList.remove('bounce');
			element.style.color = 'lightgray'
			bookcount[num] -= 1;
			let bookvar = "book" + num;
			document.getElementById(bookvar).innerHTML = String(bookcount[num]);
		}
		else if (element.style.color != 'lightblue'){
			element.classList.add('bounce');
			element.style.color = 'lightblue'
			bookcount[num] += 1;
			let bookvar = "book" + num;
			document.getElementById(bookvar).innerHTML = String(bookcount[num]);
		}
	}


