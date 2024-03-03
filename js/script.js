let a =[2,5,70,10,20,1];

let sum=a[0];
for(let i=0;i<a.length;i++){
    if(a[i]>sum){
        sum=a[i]
    };
   
}
console.log(sum);


console.log(Math.min(...a))
let b=a.reduce((accum,item)=>{
    if(accum<item) return accum
    return item
});
console.log(b)