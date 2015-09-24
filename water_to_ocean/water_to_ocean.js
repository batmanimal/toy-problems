/*
Transform all water around given coords that is not surrounded by (Top, Rt, Bottom, Left) land to ocean
[ 
W, W, W, W, L, L, L,
L, W, W, L, L, W, L,
L, L, W, W, W, L, L
]

transform applied to (1,1) would be

[ 
O, O, O, O, L, L, L,
L, O, O, L, L, W, L,
L, L, O, O, O, L, L
]
*/