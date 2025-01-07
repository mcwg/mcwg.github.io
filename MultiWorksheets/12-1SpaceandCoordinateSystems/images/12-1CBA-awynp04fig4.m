(*
<<12-1CBA-awynp04fig4.m
*)

fig=Show[
	Graphics3D[{EdgeForm[],
	  XTParametricPlot3D[{x,y,y},{x,-2.5,2.5},{y,-2.5,2.5},
	  PlotPoints->50,
	  ColorFunction->XTFlatColor]}],
	CalcAxes3D[{-3.2,3.2},{-2.2,2.2},{-3.2,3.2}],
	PlotRange->All,
	    ViewPoint->5{2,0.5,0.7},
	BoxRatios->{1,1,0.6},
	AspectRatio     -> .75
]

PS[fig,"12-1CBA-awynp04fig4.ps",2]




