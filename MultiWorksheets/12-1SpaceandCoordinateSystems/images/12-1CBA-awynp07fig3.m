(*
<<12-1CBA-awynp07fig3.m
*)

fig=Show[
   Graphics3D[{EdgeForm[],
	XTParametricPlot3D[{r Cos[Pi/4],r Sin[Pi/4], z},{r,0,Sqrt[2]},{z,0,1},
	PlotPoints->50,
	DarkColor->SurfaceColor[GrayLevel[.2],GrayLevel[.5],10],
	LightColor->SurfaceColor[GrayLevel[.2],GrayLevel[.5],10]],
(*
        XTParametricPlot3D[{r Cos[Pi/2],r Sin[Pi/2], z},{r,0,1},{z,0,1},
	PlotPoints->50,
	DarkColor->SurfaceColor[GrayLevel[.5],GrayLevel[.7],10],
	LightColor->SurfaceColor[GrayLevel[.5],GrayLevel[.7],10]],
*)
	XTParametricPlot3D[{ x,1,z},{x,0,1},{z,0,1},
	PlotPoints->50,
	DarkColor->SurfaceColor[GrayLevel[.5],GrayLevel[.8],20],
	LightColor->SurfaceColor[GrayLevel[.5],GrayLevel[.8],20]]
   }],
   Graphics3D[{EdgeForm[],Polygon[{{0,0,1},{1,1,1},{0,1,1}}]
   }],
   
   CalcAxes3D[{0,1.3},{0,1.3},{0,1.3}],
   ViewPoint->{2.5,2,1},
   LightSources->{{{5,5,2},GrayLevel[.6]},{{1,1,3},GrayLevel[.5]}}
]

PS[fig,"12-1CBA-awynp07fig3.ps",2]




