
export type Weights = [number,number,number,number];
export const names=["Acciones","Bonos","Oro","Efectivo"];
export const colors=["#91aefb","#b8e5b0","#ebc47c","#a9a3c2"];
export const returns=[.08,.035,.045,.02], vols=[.18,.075,.16,.005];
export const correlation=[[1,.2,.1,0],[.2,1,.05,0],[.1,.05,1,0],[0,0,0,1]];
export function metrics(weights:Weights){
 if(weights.some(x=>!Number.isFinite(x)||x<0))throw Error("Pesos inválidos");
 const total=weights.reduce((x,y)=>x+y,0);
 const w=total?weights.map(x=>x/total):[0,0,0,0];
 const expected=w.reduce((s,x,i)=>s+x*returns[i],0);
 let variance=0;
 for(let i=0;i<4;i++)for(let j=0;j<4;j++)variance+=w[i]*w[j]*vols[i]*vols[j]*correlation[i][j];
 return {expected,volatility:Math.sqrt(Math.max(variance,0)),normalized:w};
}
export function syntheticSeries(weights:Weights,years:number,capital:number){
 const {expected,volatility}=metrics(weights);
 const result=[capital];
 for(let t=1;t<=years;t++){
  const shock=Math.sin(t*2.37)*.7+Math.cos(t*.91)*.3;
  result.push(Math.max(0,result[t-1]*(1+expected+volatility*shock)));
 }
 return result;
}
export function drawdown(values:number[]){
 let peak=values[0]||0,worst=0;
 for(const v of values){peak=Math.max(peak,v);if(peak>0)worst=Math.min(worst,v/peak-1)}
 return worst;
}
