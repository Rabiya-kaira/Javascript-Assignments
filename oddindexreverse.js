const r = [89,76,64,43,09,24,11,55,34];
for(i=0;i<=r.length/2;i=i+2){
    const element = r[i+1];
    r[i+1] = r[r.length-1-i];
    r[r.length-1-i] = element;
    
}
console.log(r);
