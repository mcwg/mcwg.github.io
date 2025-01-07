(*
<<12-1CBA-awynp12fig2.m
*)

f1[x_]:=Sqrt[16-x^2]
a:=0.707
fig=Show[
ShadeBetween[0,f1[x],MedShade,{x,4a,4},NoEndLines],
ShadeBetween[0,x,MedShade,{x,0,4a},NoEndLines],
Plot[f1[x],{x,4a,4},PlotStyle->PlotCode[5]],
Plot[x,{x,0,4a},PlotStyle->PlotCode[5]],

PlotRange->CalcRange[{0,4},{0,3}],
Ticks->{{NoTick[1]},{NoTick[1]}}, 
Axes->True,
AspectRatio->3/4
]
PS[fig,"12-1CBA-awynp12fig2.ps",2]




