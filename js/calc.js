var deci=0;
var op="";
var fInput=0;


//wyświetlanie znaków po naciśnięciu
function func(num)
{	var inp=document.querySelector('input');
	if(deci==0)
		inp.value=inp.value*10+num+" ";

	else
		inp.value=(inp.value+num)/Math.pow(10,deci);
}




function math(operator)
{
	op=operator;
	var inp=document.querySelector('input').value+" ";
	fInput=inp;
	document.querySelector('input').value="";
	deci=0;

	if(op=='pierwiastek')
		equalTo()

}


//funkcje liczące
function equalTo()
{
	var lInp=document.querySelector('input').value;
	
	switch(op)
	{
		case '+':
				lInp=parseFloat(fInput)+parseFloat(lInp);
			break;
		case '-':
				lInp=parseFloat(fInput)-parseFloat(lInp);
			break;
		case '*':
				lInp=parseFloat(fInput)*parseFloat(lInp);
			break;
		case '/':
				lInp=parseFloat(fInput)/parseFloat(lInp);
			break;
		case '%':
				lInp=parseFloat(fInput)*(0.01*parseFloat(lInp));
			break;		
		case 'potega':
				lInp=Math.pow(parseFloat(fInput), parseFloat(lInp));
			break;	
		case 'pierwiastek':
				lInp=Math.sqrt(parseFloat(fInput));
			break;	
		case '.':
				lInp=parseFloat(fInput)+'.'+parseFloat(lInp);
			break;	
	}
	
//wyświetlanie wyniku
	if(lInp == 'Infinity' || lInp == 'NaN'){
		document.querySelector('input').value="ERROR!!! ";		
	}
	else{	
			document.querySelector('input').value=lInp+" ";	
	}
}




//czyszczenie ekranu
function cls()
{
	document.querySelector('input').value="0 ";
	op="";
	deci=0;
	fInput=0;
}

