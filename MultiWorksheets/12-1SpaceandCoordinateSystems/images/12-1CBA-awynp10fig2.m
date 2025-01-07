(*
<<12-1CBA-awynp10fig2.m
*)

fig=Show[
   Graphics3D[{EdgeForm[],
	XTParametricPlot3D[{x Cos[t] Sin[Pi/4],x Sin[t] Sin[Pi/4],
		x Cos[Pi/4]}, {t,0,2 Pi},{x,0,1},
	   PlotPoints->40,
	   DarkColor->SurfaceColor[GrayLevel[.5],GrayLevel[0.8],18],
	   LightColor->SurfaceColor[GrayLevel[.5],GrayLevel[0.8],18]]
   }],
   CalcAxes3D[{-1.1,1.1},{-1.1,1.1},{0,0.8}],
   BoxRatios->{1,1,0.7},
   ViewPoint->{2.4,-2.2,1},
   LightSources->{{{2, -3,8}, GrayLevel[.75]},{{2, 2.8,5}, GrayLevel[.58]}}
]

PS[fig,"12-1CBA-awynp10fig2.ps",2]




