(*
<<12-1CBA-awynp12fig4.m
*)

f1[x_]:=Sqrt[4-x^2]
fig=Show[
ShadeBetween[0,f1[x],MedShade,{x,-2,2},NoEndLines],

Plot[f1[x],{x,-2,2},PlotStyle->PlotCode[5]],
PlotRange->CalcRange[{-2,2},{0,2}],
Ticks->{{},{}},
Axes->True,
AspectRatio->1/2]

PS[fig,"12-1CBA-awynp12fig4.ps",2]




