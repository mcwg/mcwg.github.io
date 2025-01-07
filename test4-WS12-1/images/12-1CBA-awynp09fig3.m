(*
<<12-1CBA-awynp09fig3.m
*)
fig=Show[
     Graphics3D[{EdgeForm[],
	XTParametricPlot3D[{Cos[theta],Sin[theta],z}, 
	{theta,0,Pi/4},{z,0,2},
	PlotPoints->50,
	DarkColor->SurfaceColor[GrayLevel[.8],GrayLevel[.35],20],
	LightColor->SurfaceColor[GrayLevel[.8],GrayLevel[.35],20]],
	
	XTParametricPlot3D[{2Cos[theta],2Sin[theta],z}, 
	{theta,0,Pi/4},{z,0,2},
	PlotPoints->50,
	DarkColor->SurfaceColor[GrayLevel[.8],GrayLevel[.35],10],
	LightColor->SurfaceColor[GrayLevel[.8],GrayLevel[.35],10]],

	XTParametricPlot3D[{x,x,z}, 
	{x,0.707,2*0.707},{z,0,2},
	PlotPoints->50,
	DarkColor->SurfaceColor[GrayLevel[.8],GrayLevel[.35],10],
	LightColor->SurfaceColor[GrayLevel[.8],GrayLevel[.35],10]],

 	XTParametricPlot3D[{ r Cos[theta],r  Sin[theta],2}, 
	{theta,0,Pi/4},{r,1,2},
	PlotPoints->30,
	DarkColor->SurfaceColor[GrayLevel[.75],GrayLevel[.4],10],
	LightColor->SurfaceColor[GrayLevel[.75],GrayLevel[.4],10]]
}],
*)
		CalcAxes3D[{-2.3,2.3},{-2.3,2},{0,2.2}],
                LightSources->{{{2,0,3}, GrayLevel[.9]}}, 
                PlotRange->All,
		BoxRatios->{1,1,0.7}, 
                ViewPoint->{1,1.5,1}
]

PS[fig,"12-1CBA-awynp09fig3.ps",2]




