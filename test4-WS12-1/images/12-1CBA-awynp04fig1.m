(*
<<12-1CBA-awynp04fig1.m
*)

fig=Show[
  Graphics3D[{EdgeForm[],
    XTParametricPlot3D[{x,y,2},{x,-5,5},{y,-4,4},
      PlotPoints     -> 50,
      ColorFunction  -> XTFlatColor]}],
  CalcAxes3D[{-6,6},{-4.5,4.5},{0,3}],
  ViewPoint -> {4,2,2},
  AspectRatio -> .75
  ]
PS[fig,"12-1CBA-awynp04fig1.ps",2]




