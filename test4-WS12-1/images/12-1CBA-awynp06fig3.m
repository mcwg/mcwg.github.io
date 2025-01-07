(*
<<12-1CBA-awynp06fig3.m
*)

fig=Show[
Graphics[{PlotCode[5], Line[{{2,-3.3},{2,3.3}} ]}], (*vertical line at x=4*)
Axes->True,
Ticks->{{NoTick[3]},{NoTick[3]}},
PlotRange->CalcRange[{-3,3},{-3,3}],
AspectRatio->1,
DisplayFunction->$DisplayFunction
]
PS[fig,"12-1CBA-awynp06fig3.ps",2]





