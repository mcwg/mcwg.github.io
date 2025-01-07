(*
<<12-1CBA-awynp10fig3.m
*)

fig=Show[
   Graphics3D[{EdgeForm[],
	XTParametricPlot3D[{r Cos[Pi/2],r Sin[Pi/2], z},{r,0,1},{z,-1,1},
	PlotPoints->2,
	DarkColor->SurfaceColor[GrayLevel[.7],GrayLevel[.95],10],
	LightColor->SurfaceColor[GrayLevel[.7],GrayLevel[.95],10]]
   }],
   CalcAxes3D[{-1.1,1.1},{0,1.1},{-1,1.1}],
   ViewPoint->{2.4,1,1},
   ViewVertical->{0,-0.05,1},
   LightSources->{{{-2,-1,1},GrayLevel[.6]},{{2,-1,3},GrayLevel[.5]}}
]

PS[fig,"12-1CBA-awynp10fig3.ps",2]




