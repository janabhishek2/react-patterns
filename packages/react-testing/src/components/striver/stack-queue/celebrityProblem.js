// Given a 2D matrix of 0/1 where x,y represent that x knows y. Get the celebrity: one everyone knows
// but he knows no one.

// Take two pointers l=0 and r=n-1

// while l < r.
// If arr[l][r] is 1, means l is not the celebrity l++
// if arr[r][l] is 1, means r is not the celebrity r--;

// return l.