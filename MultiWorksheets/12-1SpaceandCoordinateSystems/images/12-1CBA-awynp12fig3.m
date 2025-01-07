(*
<<12-1CBA-awynp12fig3.m
*)

f1[x_]:=Sqrt[4-x^2]
g1[x_]:=Sqrt[1-x^2]
a:=0.707
fig=Show[
ShadeBetween[-x,f1[x],MedShade,{x,-2a,-a},NoEndLines],
ShadeBetween[x,f1[x],MedShade,{x,a,2a},NoEndLines],
ShadeBetween[g1[x],f1[x],MedShade,{x,-a,a},NoEndLines],
Plot[f1[x],{x,-2a,2a},PlotStyle->PlotCode[5]],
Plot[g1[x],{x,-a,a},PlotStyle->PlotCode[5]],
Plot[-x,{x,-2a,-a},PlotStyle->PlotCode[5]],
Plot[x,{x,a,2a},PlotStyle->PlotCode[5]],

PlotRange->CalcRange[{-2a,2a},{0,2}],
Ticks->{{NoTick[1]},{NoTick[1]}}, 
Axes->True,
AspectRatio->1/2]

PS[fig,"12-1CBA-awynp12fig3.ps",2]




