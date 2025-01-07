(*
<<12-1CBA-awynp06fig1.m
*)

x[t_]:= 3Cos[t]
y[t_]:= 3Sin[t]
xticks:= Table[x, {x, -3, 3, 1}]
yticks:= Table[y, {y, -3, 3, 1}]
fig=Show[

ParametricPlot[{x[t],y[t]},{t,0,2Pi}],

Axes->True,
Ticks->{xticks,yticks},
PlotRange->CalcRange[{-3,3},{-3,3}],
AspectRatio->1,
DisplayFunction->$DisplayFunction
]
PS[fig,"12-1CBA-awynp06fig1.ps",2]





