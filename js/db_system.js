let patt,text;
text="ftp://google.com/es?i=0 udhdh hhdhd hdh"
patt= /(((https?|https|ftp|ftps:\/\/)|(www\.))[^\s]+)/g;
var myArray =text.match(patt);
alert(JSON.stringify(myArray));