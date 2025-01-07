(*
<<12-1CBA-awynp08fig3.m
*)

fig=Show[
   Graphics3D[{EdgeForm[],
	XTParametricPlot3D[{ Cos[th],Sin[th], z},{th,0,2Pi},{z,0,1},
	PlotPoints->50,
	DarkColor->SurfaceColor[GrayLevel[.7],GrayLevel[.95],10],
	LightColor->SurfaceColor[GrayLevel[.7],GrayLevel[.95],10]]
   }],
   CalcAxes3D[{0,1.3},{0,1.3},{0,1.2}],
   ViewPoint->{2.4,1,1},
   LightSources->{{{-2,-1,1},GrayLevel[.6]},{{2,-1,3},GrayLevel[.5]}}
]

PS[fig,"12-1CBA-awynp08fig3.ps",2]




