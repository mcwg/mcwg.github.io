(*
<<12-1CBA-awynp11fig3.m
*)

fig=Show[
	Graphics3D[{EdgeForm[],
	  XTParametricPlot3D[{Sin[ph]*Cos[th],Sin[ph]*Sin[th],Cos[ph]},{ph,Pi/2,Pi},{th,0,Pi},
	  PlotPoints->50,
	  ColorFunction->XTFlatColor]}],
	  
	   Graphics3D[{EdgeForm[],
	XTParametricPlot3D[{r Cos[th], r Sin[th],0},{r,0,1},
		{th,0,Pi}, PlotPoints->50,
	DarkColor->SurfaceColor[GrayLevel[0.4],GrayLevel[0.6],20],
	LightColor->SurfaceColor[GrayLevel[0.4],GrayLevel[0.6],20]]
   }],

	CalcAxes3D[{-1.2,1.2},{-0.5,1.2},{-1.5,0.5}],
	PlotRange->All,
	ViewPoint->{4,4,4},
	DisplayFunction->$DisplayFunction
]

PS[fig,"12-1CBA-awynp11fig3.ps",2]




