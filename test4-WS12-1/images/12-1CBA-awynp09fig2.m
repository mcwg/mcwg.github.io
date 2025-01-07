(*
<<12-1CBA-awynp09fig2.m
*)
fig=Show[
     Graphics3D[{EdgeForm[],
	XTParametricPlot3D[{Cos[theta],Sin[theta],z}, 
	{theta,0,2Pi},{z,1,2},
	PlotPoints->60,
	DarkColor->SurfaceColor[GrayLevel[.8],GrayLevel[.35],10],
	LightColor->SurfaceColor[GrayLevel[.8],GrayLevel[.35],10]],

 	XTParametricPlot3D[{ r Cos[theta],r  Sin[theta],2}, 
	{theta,0,2Pi},{r,0,1},
	PlotPoints->30,
	DarkColor->SurfaceColor[GrayLevel[.75],GrayLevel[.4],10],
	LightColor->SurfaceColor[GrayLevel[.75],GrayLevel[.4],10]]
}],
   Graphics3D[{EdgeForm[],
	XTParametricPlot3D[{x Cos[t] Sin[Pi/4],x Sin[t] Sin[Pi/4],
		x Cos[Pi/4]}, {t,0,2 Pi},{x,0,1/0.707},
	   PlotPoints->40,
	   DarkColor->SurfaceColor[GrayLevel[.5],GrayLevel[0.8],10],
	   LightColor->SurfaceColor[GrayLevel[.5],GrayLevel[0.8],10]]
   }],

		CalcAxes3D[{-1.3,1.3},{-1.3,1.3},{0,2.2}],
                LightSources->{{{2,0,3}, GrayLevel[.9]}}, 
                PlotRange->All,
		BoxRatios->{1,1,0.7}, 
                ViewPoint->{3,3,1}
]

PS[fig,"12-1CBA-awynp09fig2.ps",2]




