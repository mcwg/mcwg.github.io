(*
<<12-1CBA-awynp12fig1.m
*)

f1[x_]:=-Sqrt[9-x^2]
g1[x_]:=-Sqrt[1-x^2]

fig=Show[
ShadeBetween[0,f1[x],MedShade,{x,-3,-1},NoEndLines],
ShadeBetween[0,f1[x],MedShade,{x,1,3},NoEndLines],
ShadeBetween[g1[x],f1[x],MedShade,{x,-1,1},NoEndLines],
Plot[f1[x],{x,-3,3},PlotStyle->PlotCode[5]],
Plot[g1[x],{x,-1,1},PlotStyle->PlotCode[5]],

ShadeBetween[0,-f1[x],MedShade,{x,-3,-1},NoEndLines],
ShadeBetween[0,-f1[x],MedShade,{x,1,3},NoEndLines],
ShadeBetween[-g1[x],-f1[x],MedShade,{x,-1,1},NoEndLines],
Plot[-f1[x],{x,-3,3},PlotStyle->PlotCode[5]],
Plot[-g1[x],{x,-1,1},PlotStyle->PlotCode[5]],

PlotRange->CalcRange[{-3,3},{-3,3}],
Ticks->{{},{}}, 
Axes->True,
AspectRatio->1]

PS[fig,"12-1CBA-awynp12fig1.ps",2]




