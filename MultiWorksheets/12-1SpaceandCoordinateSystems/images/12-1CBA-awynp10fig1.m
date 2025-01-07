(*
<<12-1CBA-awynp10fig1.m
*)

fig=Show[
   Graphics3D[{EdgeForm[],
	XTParametricPlot3D[{Cos[u] Cos[v],Sin[u] Cos[v],Sin[v]},
	   {u,0,2 Pi},{v,-Pi/2,Pi/2},PlotPoints->50,
	DarkColor->SurfaceColor[GrayLevel[.8],GrayLevel[.5],10],
	LightColor->SurfaceColor[GrayLevel[.8],GrayLevel[.5],10]]
   }],
   CalcAxes3D[{-1.3,1.8},{-1.3,1.2},{-1.3,1.2}],
   ViewPoint->{2,1,1},
   LightSources->{{{-2,-1,1},GrayLevel[.6]},{{2,-1,3},GrayLevel[.5]}}
]

PS[fig,"12-1CBA-awynp10fig1.ps",2]




