
function victories (victory, defeat){
    let result = victory - defeat
    return result
}

function rank(){
let resultRank = victories(100, 30)
let level = ''
if(resultRank<10){
    level='Ferro';
}else if (resultRank<=11){
    level='Bornze';
}else if (resultRank<=21){
    level='Prata';
}else if (resultRank<=51){
    level='Ouro';
}else if (resultRank<=81){
    level='Diamante';
}else if (resultRank<=91){
    level='Lendário';
}else if (resultRank<=101){
    level ='Imortal'
}
return `O Herói tem de saldo de ${resultRank} e está no nível de ${level}`
}

console.log(rank())



