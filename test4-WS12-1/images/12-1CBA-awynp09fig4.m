(*
<<12-1CBA-awynp09fig4.m
*)
fig=Show[
     Graphics3D[{EdgeForm[],
	XTParametricPlot3D[{4*Cos[theta],4*Sin[theta],z}, 
	{theta,0,Pi/2},{z,0,1},
	PlotPoints->50,
	DarkColor->SurfaceColor[GrayLevel[.8],GrayLevel[.5],20],
	LightColor->SurfaceColor[GrayLevel[.8],GrayLevel[.5],20]],
	
	XTParametricPlot3D[{r*Cos[theta],r*Sin[theta],1}, 
	{theta,0,Pi/2},{r,0,4},
	PlotPoints->50,
	DarkColor->SurfaceColor[GrayLevel[.6],GrayLevel[.35],10],
	LightColor->SurfaceColor[GrayLevel[.6],GrayLevel[.35],10]]
}],
	CalcAxes3D[{0,4.3},{0,4.3},{0,1.1}],
                LightSources->{{{2,0,3}, GrayLevel[.9]}}, 
                PlotRange->All,
		BoxRatios->{1,1,0.7}, 
                ViewPoint->{1,1.5,1}
]

PS[fig,"12-1CBA-awynp09fig4.ps",2]




