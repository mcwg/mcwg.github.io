(*
<<12-1CBA-awynp11fig2.m
*)

fig=Show[
Graphics3D[{EdgeForm[],
    XTParametricPlot3D[{3 Sin[phi]Cos[theta],3Sin[phi]Sin[theta],3Cos[phi]},
    {phi, 0,  Pi/2},
    {theta, 0, Pi/2},
      DarkColor -> SurfaceColor[GrayLevel[.75], GrayLevel[.6], 10],
      LightColor -> SurfaceColor[GrayLevel[.75], GrayLevel[.6], 10],
      ColorFunction -> XTFlatColor,
      PlotPoints -> 30],
    XTParametricPlot3D[{2Sin[phi]Cos[theta],2Sin[phi]Sin[theta],2Cos[phi]},
    {phi, 0,  Pi/2},
    {theta, 0, Pi/2},
      DarkColor -> SurfaceColor[GrayLevel[.5], GrayLevel[.4], 10],
      LightColor -> SurfaceColor[GrayLevel[.5], GrayLevel[.4], 10],
      ColorFunction -> XTFlatColor,
      PlotPoints -> 30],
    XTParametricPlot3D[{rho Sin[phi],0,rho Cos[phi]},
    {rho, 2, 3.05},
    {phi, 0, Pi/2, Pi/32},
      DarkColor -> SurfaceColor[GrayLevel[.6], GrayLevel[.6], 10],
      LightColor -> SurfaceColor[GrayLevel[.6], GrayLevel[.6], 10],
      ColorFunction -> XTFlatColor,
      PlotPoints -> 30]
}],
	CalcAxes3D[{0,3.3},{0,4},{0,3.3}],
  BoxRatios->{1,0.8,1},
  ViewPoint->{2,-7,2},
(*    ViewPoint->{2.4,-2.8,2}, *)
  LightSources -> {{{-1,0,2},GrayLevel[1]}}
]

PS[fig,"12-1CBA-awynp11fig2.ps",2]




