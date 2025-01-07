(*
<<12-1CBA-awynp04fig3.m
*)
fig=Show[
  Graphics3D[{EdgeForm[],
    XTParametricPlot3D[{Cos[u], Sin[u], v},{u,0,2Pi},{v,0,1},
      PlotPoints      -> 50,
      ColorFunction   -> XTFlatColor,
      ViewPoint       -> {2,2,.8}]}],
  CalcAxes3D[{0,1.3},{0,1.3},{0,1.3}],
  ViewPoint       -> {2,2,.8},
  AspectRatio     -> .75
  ]

PS[fig,"12-1CBA-awynp04fig3.ps",2]
