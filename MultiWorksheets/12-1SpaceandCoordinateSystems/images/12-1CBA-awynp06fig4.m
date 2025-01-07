(*
<<12-1CBA-awynp06fig4.m
*)

fig=Show[
Graphics[{PlotCode[5], Line[{{-0.02,0},{-0.02,3.5}} ]}], (*bold*)
Graphics[{PlotCode[5], Line[{{0,0},{0,3.5}} ]}], (*vertical line*)
Graphics[{PlotCode[5], Line[{{0.02,0},{0.02,3.5}} ]}], (*bold*)
Axes->True,
Ticks->{{NoTick[3]},{NoTick[3]}},
PlotRange->CalcRange[{-3,3},{-3,3}],
AspectRatio->1,
DisplayFunction->$DisplayFunction
]
PS[fig,"12-1CBA-awynp06fig4.ps",2]





