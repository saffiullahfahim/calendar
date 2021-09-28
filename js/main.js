Data = {"event": [], "running": [], "done": [], "missed": []}

var addButton = `
<path d="M928 4796 c-98 -35 -157 -87 -206 -180 l-27 -51 -3 -1732 -2 -1733
1303 0 1303 0 11 -107 c30 -270 130 -480 319 -668 227 -226 520 -340 829 -322
501 29 909 376 1022 869 12 52 17 118 16 233 0 140 -3 172 -26 257 -85 319
-285 570 -575 720 l-77 40 -5 1222 -5 1221 -34 63 c-39 71 -78 110 -154 150
l-52 27 -1800 2 c-1464 2 -1807 0 -1837 -11z m3619 -137 c38 -14 92 -67 109
-106 18 -42 20 -293 2 -293 -22 0 -48 -33 -48 -63 0 -32 24 -67 47 -67 11 0
13 -166 13 -980 0 -539 -3 -980 -7 -980 -5 0 -48 7 -98 15 -177 29 -358 12
-532 -50 -375 -134 -652 -464 -718 -857 l-6 -38 -1239 0 -1240 0 0 1445 c0
1098 3 1445 12 1445 22 0 48 33 48 63 0 32 -24 67 -47 67 -10 0 -13 28 -13
129 0 144 7 170 53 220 62 65 -75 60 1864 61 1226 0 1780 -3 1800 -11z m98
-2628 c184 -48 384 -178 504 -328 73 -92 152 -245 183 -358 18 -67 22 -106 22
-245 0 -196 -16 -267 -94 -425 -94 -192 -242 -340 -435 -436 -153 -76 -228
-92 -420 -93 -191 -1 -272 16 -430 94 -192 94 -341 243 -436 435 -77 158 -93
229 -93 425 0 196 16 267 93 425 130 264 372 453 661 516 115 25 329 21 445
-10z"/>
<path d="M1050 4238 c-41 -44 -14 -108 46 -108 65 0 96 63 54 108 -27 29 -73
29 -100 0z"/>
<path d="M1327 4242 c-22 -25 -21 -75 1 -95 25 -22 75 -21 95 1 22 25 21 75
-1 95 -25 22 -75 21 -95 -1z"/>
<path d="M1600 4238 c-41 -44 -14 -108 46 -108 65 0 96 63 54 108 -27 29 -73
29 -100 0z"/>
<path d="M1877 4242 c-22 -25 -21 -75 1 -95 25 -22 75 -21 95 1 22 25 21 75
-1 95 -25 22 -75 21 -95 -1z"/>
<path d="M2150 4238 c-41 -44 -14 -108 46 -108 65 0 96 63 54 108 -27 29 -73
29 -100 0z"/>
<path d="M2427 4242 c-22 -25 -21 -75 1 -95 25 -22 75 -21 95 1 22 25 21 75
-1 95 -25 22 -75 21 -95 -1z"/>
<path d="M2700 4238 c-41 -44 -14 -108 46 -108 65 0 96 63 54 108 -27 29 -73
29 -100 0z"/>
<path d="M2977 4242 c-22 -25 -21 -75 1 -95 25 -22 75 -21 95 1 22 25 21 75
-1 95 -25 22 -75 21 -95 -1z"/>
<path d="M3250 4238 c-41 -44 -14 -108 46 -108 65 0 96 63 54 108 -27 29 -73
29 -100 0z"/>
<path d="M3527 4242 c-22 -25 -21 -75 1 -95 25 -22 75 -21 95 1 22 25 21 75
-1 95 -25 22 -75 21 -95 -1z"/>
<path d="M3800 4238 c-41 -44 -14 -108 46 -108 65 0 96 63 54 108 -27 29 -73
29 -100 0z"/>
<path d="M4077 4242 c-22 -25 -21 -75 1 -95 25 -22 75 -21 95 1 22 25 21 75
-1 95 -25 22 -75 21 -95 -1z"/>
<path d="M4350 4238 c-41 -44 -14 -108 46 -108 65 0 96 63 54 108 -27 29 -73
29 -100 0z"/>
<path d="M1544 3499 c-93 -26 -127 -136 -67 -216 66 -90 217 -51 239 62 18 97
-76 181 -172 154z"/>
<path d="M1927 3433 c-4 -3 -7 -35 -7 -70 l0 -63 1000 0 1000 0 0 70 0 70
-993 0 c-547 0 -997 -3 -1000 -7z"/>
<path d="M1544 2949 c-93 -26 -127 -136 -67 -216 66 -90 217 -51 239 62 18 97
-76 181 -172 154z"/>
<path d="M1927 2883 c-4 -3 -7 -35 -7 -70 l0 -63 1000 0 1000 0 0 70 0 70
-993 0 c-547 0 -997 -3 -1000 -7z"/>
<path d="M1544 2399 c-93 -26 -127 -136 -67 -216 66 -90 217 -51 239 62 18 97
-76 181 -172 154z"/>
<path d="M1927 2333 c-4 -3 -7 -35 -7 -70 l0 -63 1000 0 1000 0 0 70 0 70
-993 0 c-547 0 -997 -3 -1000 -7z"/>
<path d="M4330 1375 l0 -205 -205 0 -205 0 0 -70 0 -70 205 0 205 0 0 -205 0
-205 70 0 70 0 0 205 0 205 205 0 205 0 0 70 0 70 -205 0 -205 0 0 205 0 205
-70 0 -70 0 0 -205z"/>
</g></svg>`

var eventBtn = `
<g transform="translate(0.000000,550.000000) scale(0.100000,-0.100000)">
<path d="M1450 5041 c-41 -13 -84 -38 -107 -63 -45 -48 -53 -87 -53 -263 l0
-165 -192 0 c-216 0 -298 -13 -378 -56 -67 -36 -145 -120 -178 -191 l-27 -58
-3 -1730 c-2 -1560 -1 -1734 14 -1784 50 -174 181 -301 338 -330 84 -15 3688
-15 3771 0 155 28 285 153 336 319 19 64 19 95 17 1795 l-3 1730 -27 58 c-33
71 -111 155 -178 191 -80 43 -162 56 -377 56 l-193 0 0 165 c0 213 -16 255
-115 308 -37 20 -57 22 -266 25 -246 4 -289 -2 -339 -44 -59 -50 -64 -71 -68
-271 l-4 -183 -668 0 -668 0 -4 183 c-3 147 -7 188 -20 213 -23 43 -71 81
-116 94 -42 11 -454 12 -492 1z m400 -521 l0 -310 -160 0 -160 0 0 310 0 310
160 0 160 0 0 -310z m2130 0 l0 -310 -170 0 -170 0 0 310 0 310 170 0 170 0 0
-310z m-2690 -278 c0 -102 30 -167 97 -211 63 -42 90 -46 318 -46 221 0 251 6
304 57 51 50 64 84 69 185 l5 93 667 0 667 0 5 -93 c5 -101 18 -135 69 -185
53 -51 83 -57 304 -57 228 0 255 4 318 46 67 44 97 109 97 211 l0 78 207 0
c238 0 268 -8 319 -82 l29 -41 3 -359 3 -358 -2021 0 -2021 0 3 358 3 358 27
41 c15 23 44 49 70 62 40 19 58 21 251 21 l207 0 0 -78z m3478 -2214 l-3
-1233 -29 -58 c-21 -44 -40 -66 -74 -88 l-46 -29 -1866 0 -1866 0 -45 28 c-29
19 -54 47 -74 83 l-30 54 -3 1238 -2 1237 2020 0 2020 0 -2 -1232z"/>
<path d="M2627 2940 c-16 -13 -74 -119 -156 -285 -71 -146 -131 -265 -133
-265 -2 0 -136 -20 -297 -44 -275 -42 -295 -46 -321 -71 -16 -15 -30 -38 -33
-52 -11 -58 9 -84 227 -298 l214 -210 -53 -290 c-47 -255 -52 -293 -41 -320
18 -41 47 -65 88 -71 36 -6 63 6 453 211 l120 63 245 -129 c135 -71 262 -134
282 -139 71 -20 138 33 138 107 0 15 -23 151 -50 301 l-49 274 137 132 c75 72
168 161 206 196 37 36 74 77 82 92 32 61 7 133 -53 156 -15 6 -138 27 -273 47
-135 20 -260 38 -278 42 -32 5 -37 14 -167 273 -79 158 -144 275 -157 284 -32
23 -100 20 -131 -4z m168 -540 c59 -118 104 -195 119 -205 14 -10 98 -26 217
-42 107 -14 198 -29 202 -33 4 -4 -60 -72 -142 -152 -96 -92 -152 -155 -157
-172 -4 -17 7 -110 28 -237 19 -115 34 -209 33 -209 -1 0 -82 44 -181 97 -143
77 -187 96 -220 96 -32 0 -76 -19 -219 -96 -98 -53 -180 -95 -182 -94 -1 2 13
95 33 206 19 112 32 216 29 231 -4 18 -60 81 -159 179 -130 128 -150 152 -132
156 11 2 104 16 205 30 109 15 194 31 208 40 14 10 60 90 118 205 52 105 97
190 100 190 3 0 48 -85 100 -190z"/>
</g>
</svg>`

var achiveBtn = `
<g transform="translate(0.000000,550.000000) scale(0.100000,-0.100000)">
<path d="M1205 5114 c-45 -23 -66 -45 -86 -89 -36 -78 -13 -168 56 -221 51
-38 134 -45 192 -15 129 65 130 256 3 321 -47 24 -123 26 -165 4z"/>
<path d="M1928 5110 c-125 -68 -123 -256 5 -321 90 -46 206 -6 248 85 36 79
13 169 -56 222 -50 38 -141 44 -197 14z"/>
<path d="M2675 5116 c-16 -8 -42 -26 -57 -42 -108 -116 -26 -304 131 -304 159
0 241 188 133 304 -51 54 -140 72 -207 42z"/>
<path d="M3405 5114 c-45 -23 -66 -45 -86 -89 -36 -78 -13 -168 56 -221 51
-38 134 -45 192 -15 129 65 130 256 3 321 -47 24 -123 26 -165 4z"/>
<path d="M4128 5110 c-125 -68 -123 -256 5 -321 90 -46 206 -6 248 85 36 79
13 169 -56 222 -50 38 -141 44 -197 14z"/>
<path d="M1025 4386 c-37 -17 -80 -62 -94 -99 -8 -20 -11 -469 -11 -1448 0
-1405 0 -1420 20 -1459 11 -22 37 -51 58 -64 20 -13 408 -230 862 -482 l825
-459 65 0 65 0 835 464 c459 255 847 473 863 483 15 11 36 37 47 58 20 39 20
64 20 1459 0 979 -3 1428 -11 1448 -14 38 -57 83 -96 99 -47 20 -3403 20
-3448 0z m1784 -783 c14 -12 56 -121 131 -342 60 -178 110 -325 110 -327 0 -1
154 -4 343 -6 376 -4 378 -4 403 -65 26 -62 7 -81 -286 -299 -146 -108 -266
-200 -268 -204 -2 -5 42 -154 98 -331 108 -345 110 -362 63 -399 -54 -42 -70
-35 -366 175 -151 107 -280 195 -287 195 -6 0 -135 -88 -287 -195 -296 -210
-312 -217 -366 -175 -47 37 -45 54 63 397 55 176 100 325 100 330 0 5 -123
100 -274 212 -299 221 -309 231 -282 296 25 59 28 59 404 63 188 2 342 5 342
6 0 2 50 149 110 327 75 221 117 330 131 342 12 9 38 17 59 17 21 0 47 -8 59
-17z"/>
</g>
</svg>
`

var runningBtn = `
<g transform="translate(0.000000,550.000000) scale(0.100000,-0.100000)">
<path d="M1242 5239 c-116 -23 -231 -111 -278 -213 -26 -57 -44 -143 -44 -212
l0 -41 -83 -6 c-250 -18 -452 -193 -503 -437 -12 -61 -14 -282 -12 -1588 l3
-1517 26 -66 c71 -183 188 -295 369 -355 51 -17 117 -19 953 -22 l899 -3 61
-65 c182 -196 441 -346 713 -415 492 -124 1005 13 1372 366 133 127 216 238
296 397 117 228 160 412 160 673 -1 238 -39 407 -139 622 -101 216 -282 435
-464 564 l-61 43 0 660 c0 554 -3 671 -15 725 -57 242 -284 420 -536 421 l-56
0 -5 89 c-11 184 -114 318 -282 366 -177 51 -375 -40 -452 -208 -23 -51 -29
-79 -32 -154 l-4 -93 -709 0 -709 0 0 55 c0 214 -129 377 -330 415 -60 11 -77
11 -138 -1z m120 -219 c21 -6 51 -22 68 -37 58 -48 60 -60 60 -313 l0 -230
-175 0 -175 0 0 226 c0 243 4 266 55 314 23 21 86 49 115 50 8 0 32 -5 52 -10z
m2249 -24 c64 -43 69 -65 69 -325 l0 -231 -171 0 -170 0 3 238 3 239 29 37
c58 77 157 94 237 42z m-2691 -561 c0 -139 13 -179 64 -200 51 -21 610 -22
661 -1 54 23 65 57 65 196 l0 120 710 0 710 0 0 -133 c0 -145 6 -165 58 -186
20 -8 117 -11 340 -9 l312 3 27 28 c27 27 28 30 31 163 l4 136 81 -4 c67 -3
92 -10 135 -33 66 -36 116 -91 151 -164 25 -54 26 -64 29 -263 l4 -208 -1882
0 -1881 0 3 218 c3 207 4 219 28 267 55 112 166 183 288 184 l62 1 0 -115z
m3380 -1064 l0 -288 -112 38 c-192 65 -255 74 -493 73 -179 0 -223 -3 -301
-22 -297 -70 -511 -189 -725 -402 -221 -219 -343 -442 -412 -748 -31 -142 -31
-442 1 -589 27 -124 71 -252 123 -355 l39 -78 -805 0 c-798 0 -805 0 -862 21
-69 27 -145 94 -181 164 l-27 50 -3 1213 -2 1212 1880 0 1880 0 0 -289z m-411
-397 c267 -39 506 -160 701 -354 161 -160 274 -356 333 -578 29 -112 31 -125
31 -312 0 -187 -2 -200 -31 -312 -124 -466 -483 -811 -958 -921 -124 -28 -382
-30 -504 -4 -263 57 -488 181 -667 369 -228 238 -346 529 -347 858 -1 206 34
369 117 546 178 377 537 644 951 709 112 18 249 18 374 -1z"/>
<path d="M3571 2464 c-49 -35 -51 -56 -51 -464 0 -415 2 -431 56 -467 26 -16
55 -18 344 -18 289 0 318 2 344 18 65 43 67 138 2 178 -28 17 -52 19 -278 19
l-247 0 -3 346 -3 346 -33 29 c-38 34 -93 39 -131 13z"/>
</g>
</svg>
`

var doneBtn = `<g transform="translate(0.000000,550.000000) scale(0.100000,-0.100000)">
<path d="M1441 5488 c-13 -7 -34 -26 -45 -41 -19 -26 -21 -44 -24 -217 l-4
-189 -506 -3 c-504 -3 -507 -3 -564 -26 -124 -50 -220 -146 -270 -269 l-23
-58 0 -1935 0 -1935 23 -57 c54 -135 164 -236 300 -278 63 -20 96 -20 1498
-20 l1434 0 91 -90 c495 -492 1285 -491 1778 1 492 493 493 1283 1 1778 l-90
91 0 1202 c0 973 -3 1213 -14 1253 -43 163 -168 288 -331 331 -37 10 -143 14
-422 14 l-373 0 0 168 c0 179 -7 222 -41 258 -44 47 -127 40 -169 -14 -18 -23
-20 -41 -20 -218 l0 -194 -1032 2 -1033 3 -5 197 c-5 196 -5 198 -31 224 -31
30 -92 41 -128 22z m-71 -793 l0 -115 -25 0 c-38 0 -112 -38 -142 -74 -42 -50
-55 -93 -51 -167 4 -79 35 -134 100 -176 37 -25 51 -28 123 -28 72 0 86 3 123
28 23 15 54 46 69 69 l28 41 3 269 3 268 1035 0 1035 0 -3 -111 -3 -112 -47
-12 c-151 -38 -220 -188 -150 -326 38 -76 92 -112 176 -117 77 -5 126 9 174
52 71 62 77 89 80 374 l4 252 366 0 c405 0 411 -1 476 -66 65 -65 66 -71 66
-476 l0 -368 -2290 0 -2290 0 0 358 c0 221 4 372 11 395 13 49 73 115 124 138
37 17 77 19 523 19 l482 0 0 -115z m3440 -1665 c0 -436 -3 -640 -10 -640 -6 0
-29 9 -51 20 -72 37 -216 79 -331 96 -649 96 -1262 -329 -1409 -976 -29 -127
-35 -311 -15 -448 17 -115 59 -259 96 -331 11 -22 20 -45 20 -51 0 -7 -423
-10 -1352 -10 -1287 0 -1355 1 -1393 19 -51 23 -111 89 -124 138 -8 26 -11
480 -11 1431 l0 1392 2290 0 2290 0 0 -640z m-367 -761 c665 -135 1021 -866
717 -1469 -257 -509 -874 -715 -1380 -460 -138 69 -266 174 -355 291 -262 339
-286 812 -60 1175 82 131 235 276 375 357 196 113 470 154 703 106z"/>
<path d="M4765 1709 c-11 -6 -185 -176 -387 -378 l-368 -366 -137 137 c-76 74
-148 141 -160 147 -53 27 -121 1 -149 -57 -31 -66 -21 -81 199 -300 197 -196
204 -202 244 -202 28 0 51 8 79 29 21 16 217 208 435 427 304 306 398 406 403
430 8 37 -11 90 -42 117 -25 23 -90 32 -117 16z"/>
</g>
</svg>`

var missedBtn = `<g transform="translate(0.000000,550.000000) scale(0.100000,-0.100000)">
<path d="M1441 5488 c-13 -7 -34 -26 -45 -41 -19 -26 -21 -44 -24 -217 l-4
-189 -506 -3 c-504 -3 -507 -3 -564 -26 -124 -50 -220 -146 -270 -269 l-23
-58 0 -1935 0 -1935 23 -57 c54 -135 164 -236 300 -278 63 -20 96 -20 1498
-20 l1434 0 91 -90 c495 -492 1285 -491 1778 1 492 493 493 1283 1 1778 l-90
91 0 1202 c0 973 -3 1213 -14 1253 -43 163 -168 288 -331 331 -37 10 -143 14
-422 14 l-373 0 0 168 c0 179 -7 222 -41 258 -44 47 -127 40 -169 -14 -18 -23
-20 -41 -20 -218 l0 -194 -1032 2 -1033 3 -5 197 c-5 196 -5 198 -31 224 -31
30 -92 41 -128 22z m-71 -793 l0 -115 -25 0 c-38 0 -112 -38 -142 -74 -42 -50
-55 -93 -51 -167 4 -79 35 -134 100 -176 37 -25 51 -28 123 -28 72 0 86 3 123
28 23 15 54 46 69 69 l28 41 3 269 3 268 1035 0 1035 0 -3 -111 -3 -112 -47
-12 c-151 -38 -220 -188 -150 -326 38 -76 92 -112 176 -117 77 -5 126 9 174
52 71 62 77 89 80 374 l4 252 366 0 c405 0 411 -1 476 -66 65 -65 66 -71 66
-476 l0 -368 -2290 0 -2290 0 0 358 c0 221 4 372 11 395 13 49 73 115 124 138
37 17 77 19 523 19 l482 0 0 -115z m3440 -1665 c0 -436 -3 -640 -10 -640 -6 0
-29 9 -51 20 -72 37 -216 79 -331 96 -649 96 -1262 -329 -1409 -976 -29 -127
-35 -311 -15 -448 17 -115 59 -259 96 -331 11 -22 20 -45 20 -51 0 -7 -423
-10 -1352 -10 -1287 0 -1355 1 -1393 19 -51 23 -111 89 -124 138 -8 26 -11
480 -11 1431 l0 1392 2290 0 2290 0 0 -640z m-367 -761 c665 -135 1021 -866
717 -1469 -257 -509 -874 -715 -1380 -460 -138 69 -266 174 -355 291 -262 339
-286 812 -60 1175 82 131 235 276 375 357 196 113 470 154 703 106z"/>
<path d="M4165 2027 c-26 -26 -34 -44 -40 -88 -3 -29 -5 -252 -3 -494 3 -478
4 -482 59 -511 50 -25 97 -18 135 20 l34 34 0 502 0 502 -34 34 c-28 28 -42
34 -76 34 -34 0 -48 -6 -75 -33z"/>
<path d="M4194 676 c-43 -19 -64 -53 -64 -104 0 -37 6 -50 34 -78 28 -28 42
-34 76 -34 34 0 48 6 76 34 28 28 34 41 34 78 0 52 -21 85 -66 104 -41 17 -50
17 -90 0z"/>
</g>
</svg>
`



function GetURLParameter(parameter){
var data = ''
var url = window.location.toString()
//url = "https://h.ml/?year=100"
if(url.indexOf('?')>=0){
url = url.substr(url.indexOf('\?'))
//console.log(url)
let searchParams = new URLSearchParams(url);
if(searchParams.has(parameter)){
data = searchParams.get(parameter)
//console.log(data)
}
}
return data;
}


if(GetURLParameter('date')){
document.body.innerHTML = ''
date = "["+ GetURLParameter('date').replace(/-/g, ',')+"]"
date = JSON.parse(date)
var monthNam = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var today = document.createElement('div')
today.setAttribute('class', 'date-e')
today.innerText = monthNam[date[1]-1] + " " + String(date[0]).padStart('2',0) + ", " + date[2]
document.body.appendChild(today)
var today = new Date(today.innerText)
console.log(today)
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
Data = JSON.parse(this.responseText)

ShowEventData(document.body)
}
else if(this.readyState == 4 && this.status == 404){
Data = {"date": today, "event": [], "running": [], "done": [], "missed": []}
ShowEventData(document.body)
UpdateData()
}
}
xhttp.open('GET','./.data/.events/.'+today.getFullYear()+'/.'+(today.getMonth()+1)+"/."+today.getDate(), true);
xhttp.send();
}
else{
if(localStorage.getItem('year')){
CreateDate(localStorage.getItem('year'))
}
else{
CreateDate(new Date().getFullYear(), true)
}
}

document.body.addEventListener("touchstart", TouchStart, false);

function TouchStart(touches){
TS1 = touches.changedTouches[0].pageX
TS2 = 0
TS3 = screen.width
document.body.addEventListener("touchmove", TouchMove, false);
document.body.addEventListener("touchend", TouchEnd, false);
}

function TouchMove(touches){
TS2 = touches.changedTouches[0].pageX
TS3 = TS2
}

function TouchEnd(touches){
if(TS1<=50 && TS2>TS1 && TS2>100){
if(ShowingYear>0){
CreateDate(Number(ShowingYear)-1, false)
}
}

if(TS1>=(screen.width-50) && TS3<TS1 && TS3<(screen.width-100)){
if(ShowingYear>0){
CreateDate(Number(ShowingYear)+1, false)
}
}
TS1 = 0
//TS2 = screen.width
document.body.removeEventListener("touchmove", TouchMove, false);
document.body.removeEventListener("touchend", TouchEnd, false);
}

function GoTo(date){
var date = date.getAttribute('id').replace("d:",'')
var url = window.location.toString()
//url = "https://h.ml/?year=100"
if(url.indexOf('?')>=0){
url = url.substr(0, url.indexOf('\?'))
}
var loc = url + "?date=" + date
//console.log(loc)
window.location = loc
}


function dataCheck(year){
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
//EventAppend(JSON.parse(this.responseText))
}
else if(this.readyState == 4 && this.status == 404){
var json = [{"create" : new Date().toString()}, {"data" : []}]
year = Number(year)
var monthDay = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
var monthNam = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
if(year%4==0){
monthDay[1] = 29
}
for(var m = 0;m<12; m++ ){
for(var d = 1;d<=monthDay[m]; d++ ){
var date = monthNam[m]+" "+ String(d).padStart('2', 0) +", " + year
var dateId= "d:"+d.toString()+"-"+(m+1).toString()+"-"+year.toString()
var data = {
"id" : dateId,
"date" : date,
"event" : 0,
"running": 0,
"done" : 0,
"missed" : 0,
"modify" : 0
}
json[1].data.push(data)
}
}
var url = "./.data/.dynamic.php"
fetch(url,{
method: "POST",
mode: "no-cors",
header:{
'Content-Type': 'application/json'
},
body: FileData("addYear", year, JSON.stringify(json))
})
.then(data=>{

})
.catch(err=>{
alert(err)
}
); 
}
}
xhttp.open('GET','./.data/.events/.'+year+'/.data', true);
xhttp.send();
}


function FileData(a, b, c, d, e){
var dataToPost = new FormData(); 
if(a=="addYear"){
dataToPost.append("process", a)
dataToPost.append("year", b)
dataToPost.append("data", c)
}
if(a=="updateData"){
dataToPost.append("y", b)
dataToPost.append("m", c)
dataToPost.append("d", d)
dataToPost.append("data", e)
}
if(a=="updateData2"){
dataToPost.append("year", b)
dataToPost.append("data2", c)
}
return dataToPost;
}

function EventAppend(jsons){
var json = jsons[1].data
console.log(json[json.length-1].id)
if(document.getElementById(json[json.length-1].id)){
for(var i = 0; i < json.length; i++){
var eventDiv = document.createElement('div')
eventDiv.setAttribute('class', 'event-c')
var today = new Date()
if('d:'+today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear()!=json[i].id){
document.getElementById(json[i].id).appendChild(eventDiv)
eventDiv.setAttribute('id', 'event'+json[i].id)
}
if(json[i].missed>0){
for(var j = 1; j <= json[i].missed; j++ ){
var eventData = document.createElement('div')
eventData.setAttribute('class', 'missed-c evItem-c')
eventDiv.appendChild(eventData)
}
}
if(json[i].event>0){
for(var j = 1; j <= json[i].event; j++ ){
var eventData = document.createElement('div')
eventData.setAttribute('class', 'evt-c evItem-c')
eventDiv.appendChild(eventData)
}
}
if(json[i].running>0){
for(var j = 1; j <= json[i].running; j++ ){
var eventData = document.createElement('div')
eventData.setAttribute('class', 'running-c evItem-c')
eventDiv.appendChild(eventData)
}
}
if(json[i].done>0){
for(var j = 1; j <= json[i].done; j++ ){
var eventData = document.createElement('div')
eventData.setAttribute('class', 'done-c evItem-c')
eventDiv.appendChild(eventData)
}
}

}
}
else{
setTimeout(function(){EventAppend(jsons)}, 500)
}
}

function PUSH(json, data){
var json = JSON.stringify(json)
if(json!="\{\}"){
 json = json.slice(0, -1) + ","+ data + '}'
}
else{
 json = json.slice(0, -1) + data + '}'
}
return json;
}

function CreateDate(year, condition){
if(year==''){year = new Date().getFullYear()}
localStorage.setItem('year', year)
dataCheck(year)
ShowingYear = Number(year)
year = Number(year)
Calender.innerHTML = ""
var monthDay = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
if(year%4==0){
monthDay[1] = 29
}

var monthNam = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var dayNum = [1, 2, 3, 4, 5, 6, 0]
var DN = [6, 5, 4, 3, 2, 1, 7]
var daysList = `<div class="calender">
	<div class="item">Sat</div>
	<div class="item">Sun</div>
	<div class="item">Mon</div>
	<div class="item">Tue</div>
	<div class="item">Wed</div>
	<div class="item">Thu</div>
	<div class="item">Fri</div>
</div>`

for(var m = 0;m<12; m++ ){
var month = document.createElement('div')
month.setAttribute('class', 'date')
var month2 = document.createElement('div')
month2.setAttribute('class', 'date2')
var month3 = document.createElement('div')
month3.setAttribute('class', 'date3')
var monthName = document.createElement('div')
monthName.setAttribute('class', 'month')
month2.setAttribute('id', 'm:'+(m+1)+'-'+year)
month3.setAttribute('id', 'mm:'+(m+1)+'-'+year)
monthName.innerHTML = monthNam[m] + " - " + year
month.appendChild(monthName)
month.innerHTML += daysList
//document.body.appendChild(month)
Calender.appendChild(month2)
Calender.appendChild(month)
Calender.appendChild(month3)
var ThisMonthStart = new Date((m+1)+"/1/"+year).getDay()
var ThisMonthEnd = new Date((m+1)+"/"+monthDay[m]+"/"+year).getDay()
var TotalDays = (monthDay[m] - DN[ThisMonthStart] - dayNum[ThisMonthEnd]-1)/7
//console.log(TotalDays)
month.innerHTML += DateGenS(1, dayNum[ThisMonthStart], (m+1)+'-'+year)
var Days = 8 - dayNum[ThisMonthStart]
for(var j=0; j<TotalDays; j++){
month.innerHTML += DateGen(Days, (m+1)+'-'+year)
Days = Days + 7
}

month.innerHTML += DateGenL( ( monthDay[m] - dayNum[ThisMonthEnd] ),monthDay[m] , (m+1)+'-'+year)

}
var today = new Date()
if( document.getElementById('d:'+today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear())){
document.getElementById('d:'+today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear()).style.background = "#000"
document.getElementById('d:'+today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear()).style.color = "#fff"
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
Data = JSON.parse(this.responseText)
ShowEventData(document.getElementById('mm:'+(today.getMonth()+1)+'-'+today.getFullYear()))
if(condition){
document.getElementById('m:'+(today.getMonth()+1)+'-'+today.getFullYear()).scrollIntoView(true)
}
}
else if(this.readyState == 4 && this.status == 404){
ShowEventData(document.getElementById('mm:'+(today.getMonth()+1)+'-'+today.getFullYear()))
if(condition){
document.getElementById('m:'+(today.getMonth()+1)+'-'+today.getFullYear()).scrollIntoView(true)
}
}
}
xhttp.open('GET','./.data/.events/.'+today.getFullYear()+'/.'+(today.getMonth()+1)+"/."+today.getDate(), true);
xhttp.send();
}
}

function DateGen(start, my){
date = start
var data = ""
for(var i=0; i<7; i++){
id = "d:"+date+"-"+my
data+= `<div id='${id}' ondblclick='GoTo(this)' ontouchstart="seeEventItems(this)" ontouchend="removeEventItems(this)" class='item item2'><div class='itemData'>${date}</div></div>`
date++
}
return "<div class='calender calender3'>"+data+"</div>";
}

function DateGenS(start, st, my){
date = start
var data = ""
for(var i=0; i<7; i++){
if(i>st-1){
id = "d:"+date+"-"+my
data+= `<div id='${id}' ondblclick='GoTo(this)' ontouchstart="seeEventItems(this)" ontouchend="removeEventItems(this)" class='item item2'><div class='itemData'>${date}</div></div>`
date++
}
else{
data+= "<div class='item'></div>"
}
}
return "<div class='calender calender3'>"+data+"</div>";
}

function DateGenL(start, st, my){
date = start
var data = ""
for(var i=0; i<7; i++){
if(date<=st){
id = "d:"+date+"-"+my
data+= `<div id='${id}' ondblclick='GoTo(this)' ontouchstart="seeEventItems(this)" ontouchend="removeEventItems(this)" class='item item2'><div class='itemData'>${date}</div></div>`
date++
}
else{
data+= "<div class='item'></div>"
}
}
return "<div class='calender calender2'>"+data+"</div>";
}

function seeEventItems(div){
if(document.getElementById('event'+div.getAttribute('id'))){
var div = document.getElementById('event'+div.getAttribute('id'))
div.style.opacity = "1"
}
}

function removeEventItems(div){
if(document.getElementById('event'+div.getAttribute('id'))){
var div = document.getElementById('event'+div.getAttribute('id'))
div.style.opacity = "0"
}
}


function ShowEventData(append){
var today = new  Date()
if(!document.getElementById('m:'+(today.getMonth()+1)+'-'+today.getFullYear())){
RunningToMissed()
}
var body = document.createElement('div')
body.setAttribute('id','body')
append.appendChild(body)
var eventInfo = document.createElement('div')
eventInfo.setAttribute('class', 'eventInfo')
var eventInfoItem1 = document.createElement('div')
eventInfoItem1.setAttribute('class', 'item missed')
eventInfo.appendChild(eventInfoItem1)
var eventInfoItem2 = document.createElement('div')
eventInfoItem2.setAttribute('class', 'item value')
eventInfoItem2.innerText = String(Data.missed.length).padStart('2',0)
eventInfo.appendChild(eventInfoItem2)
var eventInfoItem3 = document.createElement('div')
eventInfoItem3.setAttribute('class', 'item done')
eventInfo.appendChild(eventInfoItem3)
var eventInfoItem4 = document.createElement('div')
eventInfoItem4.setAttribute('class', 'item value')
eventInfoItem4.innerText = String(Data.done.length).padStart('2',0)
eventInfo.appendChild(eventInfoItem4)
var eventInfoItem5 = document.createElement('div')
eventInfoItem5.setAttribute('class', 'item running')
eventInfo.appendChild(eventInfoItem5)
var eventInfoItem6 = document.createElement('div')
eventInfoItem6.setAttribute('class', 'item value')
eventInfoItem6.innerText = String(Data.running.length).padStart('2',0)
eventInfo.appendChild(eventInfoItem6)
var eventInfoItem7 = document.createElement('div')
eventInfoItem7.setAttribute('class', 'item event')
eventInfo.appendChild(eventInfoItem7)
var eventInfoItem8 = document.createElement('div')
eventInfoItem8.setAttribute('class', 'item value')
eventInfoItem8.innerText = String(Data.event.length).padStart('2',0)
eventInfo.appendChild(eventInfoItem8)
body.appendChild(eventInfo)


var eventDiv = document.createElement('div')
eventDiv.setAttribute('class', 'eventDiv event')
var Border = document.createElement('div')
Border.setAttribute('class', 'border')
eventDiv.appendChild(Border)
var eventDataDiv = document.createElement('div')
eventDataDiv.setAttribute('class', 'data')
for(var i = 0; i<Data.event.length; i++){
var eventData = document.createElement('div')
eventData.setAttribute('class', 'data')
var eventData1 = document.createElement('div')
eventData1.setAttribute('class', 'btn')
if(Data.event[i].toString().substr(0,2)=="a-"){
eventData1.innerHTML = `<svg version="1.0" class="button" xmlns="http://www.w3.org/2000/svg"
 viewBox="0 0 550.000000 550.000000"
 preserveAspectRatio="xMidYMid meet">` + achiveBtn
}
else{
eventData1.innerHTML = `<svg version="1.0" class="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 550.000000 550.000000"
 preserveAspectRatio="xMidYMid meet">` + eventBtn
}
eventData.appendChild(eventData1)
var eventData2 = document.createElement('div')
eventData2.setAttribute('class', 'data')
if(Data.event[i].toString().substr(0,2)=="a-" || Data.event[i].toString().substr(0,2)=="e-"){
eventData2.innerText = Data.event[i].toString().substr(2)
}
else{
eventData2.innerText = Data.event[i]
}
eventData.appendChild(eventData2)
eventDataDiv.appendChild(eventData)
}
eventDiv.appendChild(eventDataDiv)
var eventAddBtn = document.createElement('div')
eventAddBtn.innerHTML = `<svg class="button" onclick="addEventData('event')" version="1.0" xmlns="http://www.w3.org/2000/svg"
 viewBox="0 0 550.000000 550.000000"
 preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,550.000000) scale(0.100000,-0.100000)">` + addButton
if(!document.getElementById('m:'+(today.getMonth()+1)+'-'+today.getFullYear())){
eventDiv.appendChild(eventAddBtn)
}
body.appendChild(eventDiv)


var eventDiv = document.createElement('div')
eventDiv.setAttribute('class', 'eventDiv running')
var Border = document.createElement('div')
Border.setAttribute('class', 'border')
eventDiv.appendChild(Border)
var eventDataDiv = document.createElement('div')
eventDataDiv.setAttribute('class', 'data')
eventDataDiv.setAttribute('id', 'ruuningDiv')
for(var i = 0; i<Data.running.length; i++){
var eventData = document.createElement('div')
var id = "running" + i
var data = Data.running[i]
eventData.setAttribute('class', 'data')
eventData.setAttribute('id', id)
var eventData1 = document.createElement('div')
eventData1.setAttribute('class', 'btn')
eventData1.innerHTML = `<svg version="1.0" onclick="this.removeAttribute('onclick');RunningToDone(${i},'${id}', '${data}')" class="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 550.000000 550.000000"
 preserveAspectRatio="xMidYMid meet">` +runningBtn
eventData.appendChild(eventData1)
var eventData2 = document.createElement('div')
eventData2.setAttribute('class', 'data')
eventData2.innerText = data
eventData.appendChild(eventData2)
eventDataDiv.appendChild(eventData)
}
eventDiv.appendChild(eventDataDiv)
var eventAddBtn = document.createElement('div')
eventAddBtn.innerHTML = `<svg class="button" onclick="addEventData('running')" version="1.0" xmlns="http://www.w3.org/2000/svg"
 viewBox="0 0 550.000000 550.000000"
 preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,550.000000) scale(0.100000,-0.100000)">` + addButton
if(!document.getElementById('m:'+(today.getMonth()+1)+'-'+today.getFullYear())){
eventDiv.appendChild(eventAddBtn)
}
body.appendChild(eventDiv)

var eventDiv = document.createElement('div')
eventDiv.setAttribute('class', 'eventDiv done')
var Border = document.createElement('div')
Border.setAttribute('class', 'border')
eventDiv.appendChild(Border)
var eventDataDiv = document.createElement('div')
eventDataDiv.setAttribute('class', 'data')
eventDataDiv.setAttribute('id', 'doneDiv')
for(var i = 0; i<Data.done.length; i++){
var eventData = document.createElement('div')
var id = "done" + i
var data = Data.done[i]
eventData.setAttribute('class', 'data')
eventData.setAttribute('id', id)
var eventData1 = document.createElement('div')
eventData1.setAttribute('class', 'btn')
eventData1.innerHTML = `<svg version="1.0" ondblclick="this.removeAttribute('ondblclick');DoneToRunning(${i}, '${id}', '${data}')" style="width: 22px;padding:1.5px" class="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 550.000000 550.000000"
 preserveAspectRatio="xMidYMid meet">` +doneBtn
eventData.appendChild(eventData1)
var eventData2 = document.createElement('div')
eventData2.setAttribute('class', 'data')
eventData2.innerText = data
eventData.appendChild(eventData2)
eventDataDiv.appendChild(eventData)
}
eventDiv.appendChild(eventDataDiv)
body.appendChild(eventDiv)

var eventDiv = document.createElement('div')
eventDiv.setAttribute('class', 'eventDiv missed')
var Border = document.createElement('div')
Border.setAttribute('class', 'border')
eventDiv.appendChild(Border)
var eventDataDiv = document.createElement('div')
eventDataDiv.setAttribute('class', 'data')
for(var i = 0; i<Data.missed.length; i++){
var eventData = document.createElement('div')
var id = "missed" + i
var data = Data.missed[i]
eventData.setAttribute('class', 'data')
eventData.setAttribute('id', id)
var eventData1 = document.createElement('div')
eventData1.setAttribute('class', 'btn')
eventData1.innerHTML = `<svg version="1.0" ondblclick="this.removeAttribute('ondblclick');MissedToDone(${i}, '${id}', '${data}')" style="width: 22px;padding:1.5px" class="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 550.000000 550.000000"
 preserveAspectRatio="xMidYMid meet">` +missedBtn
eventData.appendChild(eventData1)
var eventData2 = document.createElement('div')
eventData2.setAttribute('class', 'data')
eventData2.innerText = data
eventData.appendChild(eventData2)
eventDataDiv.appendChild(eventData)
}
eventDiv.appendChild(eventDataDiv)
if(!document.getElementById('m:'+(today.getMonth()+1)+'-'+today.getFullYear())){
body.appendChild(eventDiv)
}
else{
if(document.getElementById('m:'+(today.getMonth()+2)+'-'+today.getFullYear())){
document.getElementById('m:'+(today.getMonth()+2)+'-'+today.getFullYear()).removeAttribute('class')
}
var eventDiv = document.createElement('div')
eventDiv.setAttribute('class', 'date2')
body.appendChild(eventDiv)
}
}

function RunningToDone(j, id, data){
var id = document.getElementById(id)
Data.done.push(data)
Data.running[j] = ''
var value = Data.running
Data.running = []
for(var i = 0; i<value.length ; i++){
if(value[i]!=''){
Data.running.push(value[i])
}
}
id.style.opacity = "0"
setTimeout(function(){
id.remove()
document.getElementById('body').remove()
ShowEventData(document.body)
UpdateData()
}, 350)
}

function DoneToRunning(j, id, data){
var id = document.getElementById(id)
id.removeAttribute('ondblclick')
Data.running.push(data)
Data.done[j] = ''
var value = Data.done
Data.done = []
for(var i = 0; i<value.length ; i++){
if(value[i]!=''){
Data.done.push(value[i])
}
}
id.style.opacity = "0"
setTimeout(function(){
id.remove()
document.getElementById('body').remove()
ShowEventData(document.body)
UpdateData()
}, 350)
}

function MissedToDone(j, id, data){
var id = document.getElementById(id)
Data.done.push(data)
Data.missed[j] = ''
var value = Data.missed
Data.missed = []
for(var i = 0; i<value.length ; i++){
if(value[i]!=''){
Data.missed.push(value[i])
}
}
id.style.opacity = "0"
setTimeout(function(){
id.remove()
document.getElementById('body').remove()
ShowEventData(document.body)
UpdateData()
}, 350)
}

function RunningToMissed(){
var today = new Date().toString().substr(4, 11).replace(/ /g,', ').replace(',', '')
if((new Date(today).getTime() - (24*60*60))> new Date(Data.date).getTime()){
for(var i = 0; i<Data.running.length ; i++){
Data.missed.push(Data.running[i])
}
Data.running = []
UpdateData()
}
}

function addEventData(data){
var body = document.getElementById('body')
var div = document.createElement('div')
div.setAttribute('class', 'addDiv')
div.setAttribute('id', 'addDiv')
var addDiv = document.createElement('div')
addDiv.setAttribute('class', 'addDiv')
div.appendChild(addDiv)
var textArea = document.createElement('textarea')
textArea.setAttribute('id', 'textAreaValue')
var allData =""
if(data=="event"){
for(var i=0; i<Data.event.length; i++){
allData += Data.event[i] + "\n"
}
}
if(data=="running"){
for(var i=0; i<Data.running.length; i++){
allData += Data.running[i] + "\n"
}
}
textArea.value = allData
addDiv.appendChild(textArea)
var button = document.createElement('button')
button.setAttribute('onclick', 'AddData("'+data+'")')
button.innerText = "Add"
addDiv.appendChild(button)
setTimeout(function(){addDiv.style.opacity="1"}, 500)
body.appendChild(div)
}

function AddData(option){
var value = textAreaValue.value
value = JSON.parse('["'+value.replace(/\n/g, '","') + '"]')
if(option=="event"){
Data.event = []
for(var i = 0; i<value.length ; i++){
if(value[i]!=''){
Data.event.push(value[i])
}
}
}
if(option=="running"){
Data.running = []
for(var i = 0; i<value.length ; i++){
if(value[i]!=''){
Data.running.push(value[i])
}
}
}
document.getElementById('addDiv').remove()
document.getElementById('body').remove()
ShowEventData(document.body)
UpdateData()
}


function UpdateData(){
var url = "./.data/.dynamic.php"
var date = "["+ GetURLParameter('date').replace(/-/g, ',')+"]"
date = JSON.parse(date)
var monthNam = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
today = monthNam[date[1]-1] + " " + String(date[0]).padStart('2',0) + ", " + date[2]
today = new Date(today)
fetch(url,{
method: "POST",
mode: "no-cors",
header:{
'Content-Type': 'application/json'
},
body: FileData("updateData", today.getFullYear(), (today.getMonth()+1), today.getDate(), JSON.stringify(Data))
})
.then(data=>{

})
.catch(err=>{
alert(err)
}
); 
}
