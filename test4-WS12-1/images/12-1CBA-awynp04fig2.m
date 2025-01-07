(*
<<12-1CBA-awynp04fig2.m
*)

fig=Show[
  Graphics3D[{EdgeForm[],
    XTParametricPlot3D[{x,x^0.5,z},{x,0,5},{z,0,4},
      PlotPoints     -> 50,
      ColorFunction  -> XTFlatColor]}],
  CalcAxes3D[{0,6},{0,3},{0,5}],
  PlotRange->All,
  ViewPoint -> {3,2,2},
  BoxRatios->{1,1,0.6},
  AspectRatio -> .75
  ]

PS[fig,"12-1CBA-awynp04fig2.ps",2]




