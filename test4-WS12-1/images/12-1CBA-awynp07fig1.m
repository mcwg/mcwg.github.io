(*
<<12-1CBA-awynp07fig1.m
*)

fig=Show[
   Graphics3D[{EdgeForm[],
	XTParametricPlot3D[{ x,y, 2},{x,0,2},{y,-1,1},
	PlotPoints->50,
	DarkColor->SurfaceColor[GrayLevel[.7],GrayLevel[.95],10],
	LightColor->SurfaceColor[GrayLevel[.7],GrayLevel[.95],10],

	XTParametricPlot3D[{ x,y, 3},{x,0,2},{y,-1,1},
	PlotPoints->50,
	DarkColor->SurfaceColor[GrayLevel[.7],GrayLevel[.95],10],
	LightColor->SurfaceColor[GrayLevel[.7],GrayLevel[.95],10],
	
	XTParametricPlot3D[{ 2,y, z},{z,2,3},{y,-1,1},
	PlotPoints->50,
	DarkColor->SurfaceColor[GrayLevel[.7],GrayLevel[.95],10],
	LightColor->SurfaceColor[GrayLevel[.7],GrayLevel[.95],10],
	
	XTParametricPlot3D[{ x,1, z},{x,0,2},{z,2,3},
	PlotPoints->50,
	DarkColor->SurfaceColor[GrayLevel[.7],GrayLevel[.95],10],
	LightColor->SurfaceColor[GrayLevel[.7],GrayLevel[.95],10]]
   }],
   CalcAxes3D[{-1.3,1.3},{-1.3,1.3},{0,2}],
   ViewPoint->{2.4,1,1},
   LightSources->{{{-2,-1,1},GrayLevel[.6]},{{2,-1,3},GrayLevel[.5]}}
]

PS[fig,"12-1CBA-awynp07fig1.ps",2]




