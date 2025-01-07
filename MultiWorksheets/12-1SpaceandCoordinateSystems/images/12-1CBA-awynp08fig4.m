(*
<<12-1CBA-awynp08fig4.m
*)

fig=Show[
   Graphics3D[{EdgeForm[],
	XTParametricPlot3D[{r Cos[Pi/2],r Sin[Pi/2], z},{r,0,1},{z,-1,1},
	PlotPoints->50,
	DarkColor->SurfaceColor[GrayLevel[.7],GrayLevel[.95],10],
	LightColor->SurfaceColor[GrayLevel[.7],GrayLevel[.95],10]]
   }],
   CalcAxes3D[{-1.1,1.1},{-1.1,1.1},{-1,1.1}],
   ViewPoint->{2.4,1,1},
   ViewVertical->{0,-0.05,1},
   LightSources->{{{-2,-1,1},GrayLevel[.6]},{{2,-1,3},GrayLevel[.5]}}
]

PS[fig,"12-1CBA-awynp08fig4.ps",2]




