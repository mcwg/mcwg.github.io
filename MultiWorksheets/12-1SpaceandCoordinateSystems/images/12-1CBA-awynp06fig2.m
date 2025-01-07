(*
<<12-1CBA-awynp06fig2.m
*)

x[t_]:= t
y[t_]:= t
xticks:= Table[x, {x, 0 3, 1}]
yticks:= Table[y, {y, 0, 3, 1}]
fig=Show[
ParametricPlot[{x[t],y[t]},{t,0,3}],

Axes->True,
Ticks->{{NoTick[3]},{NoTick[3]}},
PlotRange->CalcRange[{0,3},{0,3}],
AspectRatio->1,
DisplayFunction->$DisplayFunction
]
PS[fig,"12-1CBA-awynp06fig2.ps",2]





