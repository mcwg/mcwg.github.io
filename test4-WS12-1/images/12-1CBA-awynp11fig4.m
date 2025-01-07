(*
<<12-1CBA-awynp11fig4.m
*)

fig=Show[
Graphics3D[{EdgeForm[],
  XTParametricPlot3D[{r*Cos[u],r*Sin[u],r},
	{u,0,2 Pi},{r,0,Sqrt[2]/2},
      DarkColor -> SurfaceColor[GrayLevel[.8], GrayLevel[.9], 8],
      LightColor -> SurfaceColor[GrayLevel[.8], GrayLevel[.9], 8],
      ColorFunction -> XTFlatColor,
      PlotPoints ->35]
}],
Graphics3D[{EdgeForm[],
  XTParametricPlot3D[{Cos[u]*Cos[v],Sin[u]*Cos[v],Sin[v]},
	{u,0,2Pi},{v,Pi/4,Pi/2},
      DarkColor -> SurfaceColor[GrayLevel[.65], GrayLevel[.8], 10],
      LightColor -> SurfaceColor[GrayLevel[.65], GrayLevel[.8], 10],
      ColorFunction -> XTFlatColor,
      PlotPoints ->35]
}],


CalcAxes3D[{-1,1},{-1,1},{0,1.2}],
LightSources->{{{1,3,11},GrayLevel[.65]}},

ViewPoint->{7, 5, 2},
ViewVertical->{0,0,1},
PlotRange->{{-1,1},{-1,1},{0,1.2}},
BoxRatios->{2,2,1.2},
DisplayFunction->$DisplayFunction
]

PS[fig,"12-1CBA-awynp11fig4.ps",2]




