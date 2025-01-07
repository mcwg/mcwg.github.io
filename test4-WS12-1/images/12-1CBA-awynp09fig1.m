(*
<<12-1CBA-awynp09fig1.m
*)
fig=Show[
     Graphics3D[{EdgeForm[],
	XTParametricPlot3D[{Cos[theta],Sin[theta],z}, 
	{theta,0,Pi/2},{z,0,2},
	PlotPoints->60,
	DarkColor->SurfaceColor[GrayLevel[.8],GrayLevel[.35],10],
	LightColor->SurfaceColor[GrayLevel[.8],GrayLevel[.35],10]],

 	XTParametricPlot3D[{ r Cos[theta],r  Sin[theta],2}, 
	{theta,0,Pi/2},{r,0,1},
	PlotPoints->30,
	DarkColor->SurfaceColor[GrayLevel[.75],GrayLevel[.4],10],
	LightColor->SurfaceColor[GrayLevel[.75],GrayLevel[.4],10]]
}],
		CalcAxes3D[{-1.3,1.3},{-1.3,1.3},{0,2.2}],
                LightSources->{{{2,0,3}, GrayLevel[.9]}}, 
                PlotRange->All,
		BoxRatios->{1,1,0.7}, 
                ViewPoint->{3,3,2}
]

PS[fig,"12-1CBA-awynp09fig1.ps",2]




