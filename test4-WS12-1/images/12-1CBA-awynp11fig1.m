(*
<<12-1CBA-awynp11fig1.m
*)

fig=Show[
	Graphics3D[{EdgeForm[],
	  XTParametricPlot3D[{Sin[ph]*Cos[th],Sin[ph]*Sin[th],Cos[ph]},{ph,0,Pi/2},{th,0,Pi/2},
	  PlotPoints->50,
	  ColorFunction->XTFlatColor]}],
	CalcAxes3D[{0,1.2},{0,1.2},{0,1.2}],
	BoxRatios->{1,1,1}, 
	ViewPoint->{4,4,4},
	DisplayFunction->$DisplayFunction
]

PS[fig,"12-1CBA-awynp11fig1.ps",2]




