
numero = "025468"

function traco(num){
    const str = num.toString().split('');
    const ans = [str[0]]; 

    for(let i =1; i < str.length; i++){
        if(str[i-1] % 2 ===0 && str[i] % 2 ===0){
            ans.push('-',str[i]);
        }
        else{
            ans.push(str[i]);
        }
    }

    return ans.join('');
}

console.log(traco(numero))