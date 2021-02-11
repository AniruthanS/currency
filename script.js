

var arr=[];
async function myNewFunction(){

var e = fooselect.value;
var f=e.split(" ");
var g=f[0];
//console.log(g);
var fixerdata = await fetch('http://data.fixer.io/api/latest?access_key=f6555f76877253c2db79c74710f67db9'+"&symbols="+g);
var fixerresp = await fixerdata.json();
//console.log(fixerresp);
var box=document.createElement('div');
box.setAttribute("class","alert alert-warning alert-dismissible fade show");
box.setAttribute("role","alert");
var text=document.createElement('strong');
text.setAttribute("id","click");
text.innerHTML=e;
var button=document.createElement('button');
button.setAttribute("type","button");
button.setAttribute("class","close");
button.setAttribute("data-dismiss","alert");
button.setAttribute("aria-label","close");
var close=document.createElement('span');
close.setAttribute("aria-hidden","true");
close.innerHTML= '&times;';
button.append(close);
var form=document.createElement('form');
var formtext=document.createElement('div');
formtext.setAttribute("class","form-group");
var input=document.createElement('input');
input.setAttribute("type","text");
input.setAttribute("class","form-control");
input.setAttribute("id",e);
input.setAttribute("placeholder","value");
input.value=fixerresp.rates[g];
form.append(formtext,input);
box.append(text,button,form);
document.body.append(box);
arr.push(input);
function print(x){
    console.log(x*25);
}
arr.forEach(element => {element.oninput=()=>print(element.value);     });                                                 

}


var resturi='https://restcountries.eu/rest/v2/all';
    var foobox=document.createElement('div');
    foobox.setAttribute("style","padding: 20px");
    var fooselect=document.createElement('select');
    fooselect.setAttribute("id","inputstate");
    fooselect.setAttribute("onChange","myNewFunction()");
    fooselect.setAttribute("class","form-control");
    
    
    foobox.append(fooselect);
    async function foo(){

    let restresponse = await fetch(resturi);
    let result=await restresponse.json();
    for(var i=0;i<250;i++){
        var code=result[i].currencies[0].code;
        var output=result[i].currencies[0].code+' '+result[i].currencies[0].name;
       // console.log(output);
        var foooption=document.createElement('option');        
        foooption.innerHTML=output;
        fooselect.append(foooption);
    }
    document.body.append(foobox);
}
    
foo();





  