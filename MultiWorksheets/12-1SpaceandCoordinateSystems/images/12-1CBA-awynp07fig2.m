(*
<<12-1CBA-awynp07fig2.m
*)

fig=Show[
   Graphics3D[{EdgeForm[],Polygon[{{0,0,0},{1,0,1},{0,1,1}}]
   }],
    Graphics3D[{EdgeForm[],Polygon[{{1,0,1},{1,1,2},{0,1,1}}]
   }], 
   Graphics3D[{EdgeForm[],Polygon[{{0,0,0},{1,0,0},{1,0,1}}],PlotPoints->50,
	Shading->True
   }], 
       Graphics3D[{EdgeForm[],Polygon[{{1,1,0},{1,1,2},{1,0,1},{1,0,0}}]
   }],  
        Graphics3D[{EdgeForm[],Polygon[{{1,1,0},{1,1,2},{0,1,1},{0,1,0}}]
   }],  

   CalcAxes3D[{0,1.1},{0,3},{0,2}],
   ViewPoint->{2.5,-1.5,1},
   LightSources->{{{5,5,2},GrayLevel[.4]},{{0,-2,4},GrayLevel[.8]}}
]

PS[fig,"12-1CBA-awynp07fig2.ps",2]




