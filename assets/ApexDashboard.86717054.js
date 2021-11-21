import { d as dayjs } from "./dayjs.min.9071635e.js";
import { g as themeColors } from "./index.4d6c8e1a.js";
import { t as toFixed, a as toDate, b as asMinutes, p as perSession, c as toString, d as asPercent, e as asKDollar } from "./apex-formatters.f9949b74.js";
import { A as ApexChart } from "./vue3-apexcharts.common.236dfc44.js";
import { d as defineComponent, o as openBlock, b as createElementBlock, e as createBaseVNode, v as createVNode, t as unref } from "./vendor.9ec557a4.js";
const dataSeries = [
  [
    {
      date: "2014-01-01",
      value: 2e7
    },
    {
      date: "2014-01-02",
      value: 10379978
    },
    {
      date: "2014-01-03",
      value: 30493749
    },
    {
      date: "2014-01-04",
      value: 10785250
    },
    {
      date: "2014-01-05",
      value: 33901904
    },
    {
      date: "2014-01-06",
      value: 11576838
    },
    {
      date: "2014-01-07",
      value: 14413854
    },
    {
      date: "2014-01-08",
      value: 15177211
    },
    {
      date: "2014-01-09",
      value: 16622100
    },
    {
      date: "2014-01-10",
      value: 17381072
    },
    {
      date: "2014-01-11",
      value: 18802310
    },
    {
      date: "2014-01-12",
      value: 15531790
    },
    {
      date: "2014-01-13",
      value: 15748881
    },
    {
      date: "2014-01-14",
      value: 18706437
    },
    {
      date: "2014-01-15",
      value: 19752685
    },
    {
      date: "2014-01-16",
      value: 21016418
    },
    {
      date: "2014-01-17",
      value: 25622924
    },
    {
      date: "2014-01-18",
      value: 25337480
    },
    {
      date: "2014-01-19",
      value: 22258882
    },
    {
      date: "2014-01-20",
      value: 23829538
    },
    {
      date: "2014-01-21",
      value: 24245689
    },
    {
      date: "2014-01-22",
      value: 26429711
    },
    {
      date: "2014-01-23",
      value: 26259017
    },
    {
      date: "2014-01-24",
      value: 25396183
    },
    {
      date: "2014-01-25",
      value: 23107346
    },
    {
      date: "2014-01-26",
      value: 28659852
    },
    {
      date: "2014-01-27",
      value: 25270783
    },
    {
      date: "2014-01-28",
      value: 26270783
    },
    {
      date: "2014-01-29",
      value: 27270783
    },
    {
      date: "2014-01-30",
      value: 28270783
    },
    {
      date: "2014-01-31",
      value: 29270783
    },
    {
      date: "2014-02-01",
      value: 30270783
    },
    {
      date: "2014-02-02",
      value: 31270783
    },
    {
      date: "2014-02-03",
      value: 32270783
    },
    {
      date: "2014-02-04",
      value: 33270783
    },
    {
      date: "2014-02-05",
      value: 28270783
    },
    {
      date: "2014-02-06",
      value: 27270783
    },
    {
      date: "2014-02-07",
      value: 35270783
    },
    {
      date: "2014-02-08",
      value: 34270783
    },
    {
      date: "2014-02-09",
      value: 28270783
    },
    {
      date: "2014-02-10",
      value: 35270783
    },
    {
      date: "2014-02-11",
      value: 36270783
    },
    {
      date: "2014-02-12",
      value: 34127078
    },
    {
      date: "2014-02-13",
      value: 33124078
    },
    {
      date: "2014-02-14",
      value: 36227078
    },
    {
      date: "2014-02-15",
      value: 37827078
    },
    {
      date: "2014-02-16",
      value: 36427073
    },
    {
      date: "2014-02-17",
      value: 37570783
    },
    {
      date: "2014-02-18",
      value: 38627073
    },
    {
      date: "2014-02-19",
      value: 37727078
    },
    {
      date: "2014-02-20",
      value: 38827073
    },
    {
      date: "2014-02-21",
      value: 40927078
    },
    {
      date: "2014-02-22",
      value: 41027078
    },
    {
      date: "2014-02-23",
      value: 42127073
    },
    {
      date: "2014-02-24",
      value: 43220783
    },
    {
      date: "2014-02-25",
      value: 44327078
    },
    {
      date: "2014-02-26",
      value: 40427078
    },
    {
      date: "2014-02-27",
      value: 41027078
    },
    {
      date: "2014-02-28",
      value: 45627078
    },
    {
      date: "2014-03-01",
      value: 44727078
    },
    {
      date: "2014-03-02",
      value: 44227078
    },
    {
      date: "2014-03-03",
      value: 45227078
    },
    {
      date: "2014-03-04",
      value: 46027078
    },
    {
      date: "2014-03-05",
      value: 46927078
    },
    {
      date: "2014-03-06",
      value: 47027078
    },
    {
      date: "2014-03-07",
      value: 46227078
    },
    {
      date: "2014-03-08",
      value: 47027078
    },
    {
      date: "2014-03-09",
      value: 48027078
    },
    {
      date: "2014-03-10",
      value: 47027078
    },
    {
      date: "2014-03-11",
      value: 47027078
    },
    {
      date: "2014-03-12",
      value: 48017078
    },
    {
      date: "2014-03-13",
      value: 48077078
    },
    {
      date: "2014-03-14",
      value: 48087078
    },
    {
      date: "2014-03-15",
      value: 48017078
    },
    {
      date: "2014-03-16",
      value: 48047078
    },
    {
      date: "2014-03-17",
      value: 48067078
    },
    {
      date: "2014-03-18",
      value: 48077078
    },
    {
      date: "2014-03-19",
      value: 48027074
    },
    {
      date: "2014-03-20",
      value: 48927079
    },
    {
      date: "2014-03-21",
      value: 48727071
    },
    {
      date: "2014-03-22",
      value: 48127072
    },
    {
      date: "2014-03-23",
      value: 48527072
    },
    {
      date: "2014-03-24",
      value: 48627027
    },
    {
      date: "2014-03-25",
      value: 48027040
    },
    {
      date: "2014-03-26",
      value: 48027043
    },
    {
      date: "2014-03-27",
      value: 48057022
    },
    {
      date: "2014-03-28",
      value: 49057022
    },
    {
      date: "2014-03-29",
      value: 50057022
    },
    {
      date: "2014-03-30",
      value: 51057022
    },
    {
      date: "2014-03-31",
      value: 52057022
    },
    {
      date: "2014-04-01",
      value: 53057022
    },
    {
      date: "2014-04-02",
      value: 54057022
    },
    {
      date: "2014-04-03",
      value: 52057022
    },
    {
      date: "2014-04-04",
      value: 55057022
    },
    {
      date: "2014-04-05",
      value: 58270783
    },
    {
      date: "2014-04-06",
      value: 56270783
    },
    {
      date: "2014-04-07",
      value: 55270783
    },
    {
      date: "2014-04-08",
      value: 58270783
    },
    {
      date: "2014-04-09",
      value: 59270783
    },
    {
      date: "2014-04-10",
      value: 60270783
    },
    {
      date: "2014-04-11",
      value: 61270783
    },
    {
      date: "2014-04-12",
      value: 62270783
    },
    {
      date: "2014-04-13",
      value: 63270783
    },
    {
      date: "2014-04-14",
      value: 64270783
    },
    {
      date: "2014-04-15",
      value: 65270783
    },
    {
      date: "2014-04-16",
      value: 66270783
    },
    {
      date: "2014-04-17",
      value: 67270783
    },
    {
      date: "2014-04-18",
      value: 68270783
    },
    {
      date: "2014-04-19",
      value: 69270783
    },
    {
      date: "2014-04-20",
      value: 70270783
    },
    {
      date: "2014-04-21",
      value: 71270783
    },
    {
      date: "2014-04-22",
      value: 72270783
    },
    {
      date: "2014-04-23",
      value: 73270783
    },
    {
      date: "2014-04-24",
      value: 74270783
    },
    {
      date: "2014-04-25",
      value: 75270783
    },
    {
      date: "2014-04-26",
      value: 76660783
    },
    {
      date: "2014-04-27",
      value: 77270783
    },
    {
      date: "2014-04-28",
      value: 78370783
    },
    {
      date: "2014-04-29",
      value: 79470783
    },
    {
      date: "2014-04-30",
      value: 80170783
    }
  ],
  [
    {
      date: "2014-01-01",
      value: 15e7
    },
    {
      date: "2014-01-02",
      value: 160379978
    },
    {
      date: "2014-01-03",
      value: 170493749
    },
    {
      date: "2014-01-04",
      value: 160785250
    },
    {
      date: "2014-01-05",
      value: 167391904
    },
    {
      date: "2014-01-06",
      value: 161576838
    },
    {
      date: "2014-01-07",
      value: 161413854
    },
    {
      date: "2014-01-08",
      value: 152177211
    },
    {
      date: "2014-01-09",
      value: 140762210
    },
    {
      date: "2014-01-10",
      value: 144381072
    },
    {
      date: "2014-01-11",
      value: 154352310
    },
    {
      date: "2014-01-12",
      value: 165531790
    },
    {
      date: "2014-01-13",
      value: 175748881
    },
    {
      date: "2014-01-14",
      value: 187064037
    },
    {
      date: "2014-01-15",
      value: 197520685
    },
    {
      date: "2014-01-16",
      value: 210176418
    },
    {
      date: "2014-01-17",
      value: 196122924
    },
    {
      date: "2014-01-18",
      value: 207337480
    },
    {
      date: "2014-01-19",
      value: 200258882
    },
    {
      date: "2014-01-20",
      value: 186829538
    },
    {
      date: "2014-01-21",
      value: 192456897
    },
    {
      date: "2014-01-22",
      value: 204299711
    },
    {
      date: "2014-01-23",
      value: 192759017
    },
    {
      date: "2014-01-24",
      value: 203596183
    },
    {
      date: "2014-01-25",
      value: 208107346
    },
    {
      date: "2014-01-26",
      value: 196359852
    },
    {
      date: "2014-01-27",
      value: 192570783
    },
    {
      date: "2014-01-28",
      value: 177967768
    },
    {
      date: "2014-01-29",
      value: 190632803
    },
    {
      date: "2014-01-30",
      value: 203725316
    },
    {
      date: "2014-01-31",
      value: 218226177
    },
    {
      date: "2014-02-01",
      value: 210698669
    },
    {
      date: "2014-02-02",
      value: 217640656
    },
    {
      date: "2014-02-03",
      value: 216142362
    },
    {
      date: "2014-02-04",
      value: 201410971
    },
    {
      date: "2014-02-05",
      value: 196704289
    },
    {
      date: "2014-02-06",
      value: 190436945
    },
    {
      date: "2014-02-07",
      value: 178891686
    },
    {
      date: "2014-02-08",
      value: 171613962
    },
    {
      date: "2014-02-09",
      value: 157579773
    },
    {
      date: "2014-02-10",
      value: 158677098
    },
    {
      date: "2014-02-11",
      value: 147129977
    },
    {
      date: "2014-02-12",
      value: 151561876
    },
    {
      date: "2014-02-13",
      value: 151627421
    },
    {
      date: "2014-02-14",
      value: 143543872
    },
    {
      date: "2014-02-15",
      value: 136581057
    },
    {
      date: "2014-02-16",
      value: 135560715
    },
    {
      date: "2014-02-17",
      value: 122625263
    },
    {
      date: "2014-02-18",
      value: 112091484
    },
    {
      date: "2014-02-19",
      value: 98810329
    },
    {
      date: "2014-02-20",
      value: 99882912
    },
    {
      date: "2014-02-21",
      value: 94943095
    },
    {
      date: "2014-02-22",
      value: 104875743
    },
    {
      date: "2014-02-23",
      value: 116383678
    },
    {
      date: "2014-02-24",
      value: 125028841
    },
    {
      date: "2014-02-25",
      value: 123967310
    },
    {
      date: "2014-02-26",
      value: 133167029
    },
    {
      date: "2014-02-27",
      value: 128577263
    },
    {
      date: "2014-02-28",
      value: 115836969
    },
    {
      date: "2014-03-01",
      value: 119264529
    },
    {
      date: "2014-03-02",
      value: 109363374
    },
    {
      date: "2014-03-03",
      value: 113985628
    },
    {
      date: "2014-03-04",
      value: 114650999
    },
    {
      date: "2014-03-05",
      value: 110866108
    },
    {
      date: "2014-03-06",
      value: 96473454
    },
    {
      date: "2014-03-07",
      value: 104075886
    },
    {
      date: "2014-03-08",
      value: 103568384
    },
    {
      date: "2014-03-09",
      value: 101534883
    },
    {
      date: "2014-03-10",
      value: 115825447
    },
    {
      date: "2014-03-11",
      value: 126133916
    },
    {
      date: "2014-03-12",
      value: 116502109
    },
    {
      date: "2014-03-13",
      value: 130169411
    },
    {
      date: "2014-03-14",
      value: 124296886
    },
    {
      date: "2014-03-15",
      value: 126347399
    },
    {
      date: "2014-03-16",
      value: 131483669
    },
    {
      date: "2014-03-17",
      value: 142811333
    },
    {
      date: "2014-03-18",
      value: 129675396
    },
    {
      date: "2014-03-19",
      value: 115514483
    },
    {
      date: "2014-03-20",
      value: 117630630
    },
    {
      date: "2014-03-21",
      value: 122340239
    },
    {
      date: "2014-03-22",
      value: 132349091
    },
    {
      date: "2014-03-23",
      value: 125613305
    },
    {
      date: "2014-03-24",
      value: 135592466
    },
    {
      date: "2014-03-25",
      value: 123408762
    },
    {
      date: "2014-03-26",
      value: 111991454
    },
    {
      date: "2014-03-27",
      value: 116123955
    },
    {
      date: "2014-03-28",
      value: 112817214
    },
    {
      date: "2014-03-29",
      value: 113029590
    },
    {
      date: "2014-03-30",
      value: 108753398
    },
    {
      date: "2014-03-31",
      value: 99383763
    },
    {
      date: "2014-04-01",
      value: 100151737
    },
    {
      date: "2014-04-02",
      value: 94985209
    },
    {
      date: "2014-04-03",
      value: 82913669
    },
    {
      date: "2014-04-04",
      value: 78748268
    },
    {
      date: "2014-04-05",
      value: 63829135
    },
    {
      date: "2014-04-06",
      value: 78694727
    },
    {
      date: "2014-04-07",
      value: 80868994
    },
    {
      date: "2014-04-08",
      value: 93799013
    },
    {
      date: "2014-04-09",
      value: 99042416
    },
    {
      date: "2014-04-10",
      value: 97298692
    },
    {
      date: "2014-04-11",
      value: 83353499
    },
    {
      date: "2014-04-12",
      value: 71248129
    },
    {
      date: "2014-04-13",
      value: 75253744
    },
    {
      date: "2014-04-14",
      value: 68976648
    },
    {
      date: "2014-04-15",
      value: 71002284
    },
    {
      date: "2014-04-16",
      value: 75052401
    },
    {
      date: "2014-04-17",
      value: 83894030
    },
    {
      date: "2014-04-18",
      value: 90236528
    },
    {
      date: "2014-04-19",
      value: 99739114
    },
    {
      date: "2014-04-20",
      value: 96407136
    },
    {
      date: "2014-04-21",
      value: 108323177
    },
    {
      date: "2014-04-22",
      value: 101578914
    },
    {
      date: "2014-04-23",
      value: 115877608
    },
    {
      date: "2014-04-24",
      value: 112088857
    },
    {
      date: "2014-04-25",
      value: 112071353
    },
    {
      date: "2014-04-26",
      value: 101790062
    },
    {
      date: "2014-04-27",
      value: 115003761
    },
    {
      date: "2014-04-28",
      value: 120457727
    },
    {
      date: "2014-04-29",
      value: 118253926
    },
    {
      date: "2014-04-30",
      value: 117956992
    }
  ],
  [
    {
      date: "2014-01-01",
      value: 5e7
    },
    {
      date: "2014-01-02",
      value: 60379978
    },
    {
      date: "2014-01-03",
      value: 40493749
    },
    {
      date: "2014-01-04",
      value: 60785250
    },
    {
      date: "2014-01-05",
      value: 67391904
    },
    {
      date: "2014-01-06",
      value: 61576838
    },
    {
      date: "2014-01-07",
      value: 61413854
    },
    {
      date: "2014-01-08",
      value: 82177211
    },
    {
      date: "2014-01-09",
      value: 103762210
    },
    {
      date: "2014-01-10",
      value: 84381072
    },
    {
      date: "2014-01-11",
      value: 54352310
    },
    {
      date: "2014-01-12",
      value: 65531790
    },
    {
      date: "2014-01-13",
      value: 75748881
    },
    {
      date: "2014-01-14",
      value: 47064037
    },
    {
      date: "2014-01-15",
      value: 67520685
    },
    {
      date: "2014-01-16",
      value: 60176418
    },
    {
      date: "2014-01-17",
      value: 66122924
    },
    {
      date: "2014-01-18",
      value: 57337480
    },
    {
      date: "2014-01-19",
      value: 100258882
    },
    {
      date: "2014-01-20",
      value: 46829538
    },
    {
      date: "2014-01-21",
      value: 92456897
    },
    {
      date: "2014-01-22",
      value: 94299711
    },
    {
      date: "2014-01-23",
      value: 62759017
    },
    {
      date: "2014-01-24",
      value: 103596183
    },
    {
      date: "2014-01-25",
      value: 108107346
    },
    {
      date: "2014-01-26",
      value: 66359852
    },
    {
      date: "2014-01-27",
      value: 62570783
    },
    {
      date: "2014-01-28",
      value: 77967768
    },
    {
      date: "2014-01-29",
      value: 60632803
    },
    {
      date: "2014-01-30",
      value: 103725316
    },
    {
      date: "2014-01-31",
      value: 98226177
    },
    {
      date: "2014-02-01",
      value: 60698669
    },
    {
      date: "2014-02-02",
      value: 67640656
    },
    {
      date: "2014-02-03",
      value: 66142362
    },
    {
      date: "2014-02-04",
      value: 101410971
    },
    {
      date: "2014-02-05",
      value: 66704289
    },
    {
      date: "2014-02-06",
      value: 60436945
    },
    {
      date: "2014-02-07",
      value: 78891686
    },
    {
      date: "2014-02-08",
      value: 71613962
    },
    {
      date: "2014-02-09",
      value: 107579773
    },
    {
      date: "2014-02-10",
      value: 58677098
    },
    {
      date: "2014-02-11",
      value: 87129977
    },
    {
      date: "2014-02-12",
      value: 51561876
    },
    {
      date: "2014-02-13",
      value: 51627421
    },
    {
      date: "2014-02-14",
      value: 83543872
    },
    {
      date: "2014-02-15",
      value: 66581057
    },
    {
      date: "2014-02-16",
      value: 65560715
    },
    {
      date: "2014-02-17",
      value: 62625263
    },
    {
      date: "2014-02-18",
      value: 92091484
    },
    {
      date: "2014-02-19",
      value: 48810329
    },
    {
      date: "2014-02-20",
      value: 49882912
    },
    {
      date: "2014-02-21",
      value: 44943095
    },
    {
      date: "2014-02-22",
      value: 104875743
    },
    {
      date: "2014-02-23",
      value: 96383678
    },
    {
      date: "2014-02-24",
      value: 105028841
    },
    {
      date: "2014-02-25",
      value: 63967310
    },
    {
      date: "2014-02-26",
      value: 63167029
    },
    {
      date: "2014-02-27",
      value: 68577263
    },
    {
      date: "2014-02-28",
      value: 95836969
    },
    {
      date: "2014-03-01",
      value: 99264529
    },
    {
      date: "2014-03-02",
      value: 109363374
    },
    {
      date: "2014-03-03",
      value: 93985628
    },
    {
      date: "2014-03-04",
      value: 94650999
    },
    {
      date: "2014-03-05",
      value: 90866108
    },
    {
      date: "2014-03-06",
      value: 46473454
    },
    {
      date: "2014-03-07",
      value: 84075886
    },
    {
      date: "2014-03-08",
      value: 103568384
    },
    {
      date: "2014-03-09",
      value: 101534883
    },
    {
      date: "2014-03-10",
      value: 95825447
    },
    {
      date: "2014-03-11",
      value: 66133916
    },
    {
      date: "2014-03-12",
      value: 96502109
    },
    {
      date: "2014-03-13",
      value: 80169411
    },
    {
      date: "2014-03-14",
      value: 84296886
    },
    {
      date: "2014-03-15",
      value: 86347399
    },
    {
      date: "2014-03-16",
      value: 31483669
    },
    {
      date: "2014-03-17",
      value: 82811333
    },
    {
      date: "2014-03-18",
      value: 89675396
    },
    {
      date: "2014-03-19",
      value: 95514483
    },
    {
      date: "2014-03-20",
      value: 97630630
    },
    {
      date: "2014-03-21",
      value: 62340239
    },
    {
      date: "2014-03-22",
      value: 62349091
    },
    {
      date: "2014-03-23",
      value: 65613305
    },
    {
      date: "2014-03-24",
      value: 65592466
    },
    {
      date: "2014-03-25",
      value: 63408762
    },
    {
      date: "2014-03-26",
      value: 91991454
    },
    {
      date: "2014-03-27",
      value: 96123955
    },
    {
      date: "2014-03-28",
      value: 92817214
    },
    {
      date: "2014-03-29",
      value: 93029590
    },
    {
      date: "2014-03-30",
      value: 108753398
    },
    {
      date: "2014-03-31",
      value: 49383763
    },
    {
      date: "2014-04-01",
      value: 100151737
    },
    {
      date: "2014-04-02",
      value: 44985209
    },
    {
      date: "2014-04-03",
      value: 52913669
    },
    {
      date: "2014-04-04",
      value: 48748268
    },
    {
      date: "2014-04-05",
      value: 23829135
    },
    {
      date: "2014-04-06",
      value: 58694727
    },
    {
      date: "2014-04-07",
      value: 50868994
    },
    {
      date: "2014-04-08",
      value: 43799013
    },
    {
      date: "2014-04-09",
      value: 4042416
    },
    {
      date: "2014-04-10",
      value: 47298692
    },
    {
      date: "2014-04-11",
      value: 53353499
    },
    {
      date: "2014-04-12",
      value: 71248129
    },
    {
      date: "2014-04-13",
      value: 75253744
    },
    {
      date: "2014-04-14",
      value: 68976648
    },
    {
      date: "2014-04-15",
      value: 71002284
    },
    {
      date: "2014-04-16",
      value: 75052401
    },
    {
      date: "2014-04-17",
      value: 83894030
    },
    {
      date: "2014-04-18",
      value: 50236528
    },
    {
      date: "2014-04-19",
      value: 59739114
    },
    {
      date: "2014-04-20",
      value: 56407136
    },
    {
      date: "2014-04-21",
      value: 108323177
    },
    {
      date: "2014-04-22",
      value: 101578914
    },
    {
      date: "2014-04-23",
      value: 95877608
    },
    {
      date: "2014-04-24",
      value: 62088857
    },
    {
      date: "2014-04-25",
      value: 92071353
    },
    {
      date: "2014-04-26",
      value: 81790062
    },
    {
      date: "2014-04-27",
      value: 105003761
    },
    {
      date: "2014-04-28",
      value: 100457727
    },
    {
      date: "2014-04-29",
      value: 98253926
    },
    {
      date: "2014-04-30",
      value: 67956992
    }
  ]
];
const series = {
  monthDataSeries1: {
    prices: [
      8107.85,
      8128,
      8122.9,
      8165.5,
      8340.7,
      8423.7,
      8423.5,
      8514.3,
      8481.85,
      8487.7,
      8506.9,
      8626.2,
      8668.95,
      8602.3,
      8607.55,
      8512.9,
      8496.25,
      8600.65,
      8881.1,
      9340.85
    ],
    dates: [
      "13 Nov 2017",
      "14 Nov 2017",
      "15 Nov 2017",
      "16 Nov 2017",
      "17 Nov 2017",
      "20 Nov 2017",
      "21 Nov 2017",
      "22 Nov 2017",
      "23 Nov 2017",
      "24 Nov 2017",
      "27 Nov 2017",
      "28 Nov 2017",
      "29 Nov 2017",
      "30 Nov 2017",
      "01 Dec 2017",
      "04 Dec 2017",
      "05 Dec 2017",
      "06 Dec 2017",
      "07 Dec 2017",
      "08 Dec 2017"
    ]
  },
  monthDataSeries2: {
    prices: [
      8423.7,
      8423.5,
      8514.3,
      8481.85,
      8487.7,
      8506.9,
      8626.2,
      8668.95,
      8602.3,
      8607.55,
      8512.9,
      8496.25,
      8600.65,
      8881.1,
      9040.85,
      8340.7,
      8165.5,
      8122.9,
      8107.85,
      8128
    ],
    dates: [
      "13 Nov 2017",
      "14 Nov 2017",
      "15 Nov 2017",
      "16 Nov 2017",
      "17 Nov 2017",
      "20 Nov 2017",
      "21 Nov 2017",
      "22 Nov 2017",
      "23 Nov 2017",
      "24 Nov 2017",
      "27 Nov 2017",
      "28 Nov 2017",
      "29 Nov 2017",
      "30 Nov 2017",
      "01 Dec 2017",
      "04 Dec 2017",
      "05 Dec 2017",
      "06 Dec 2017",
      "07 Dec 2017",
      "08 Dec 2017"
    ]
  },
  monthDataSeries3: {
    prices: [
      7114.25,
      7126.6,
      7116.95,
      7203.7,
      7233.75,
      7451,
      7381.15,
      7348.95,
      7347.75,
      7311.25,
      7266.4,
      7253.25,
      7215.45,
      7266.35,
      7315.25,
      7237.2,
      7191.4,
      7238.95,
      7222.6,
      7217.9,
      7359.3,
      7371.55,
      7371.15,
      7469.2,
      7429.25,
      7434.65,
      7451.1,
      7475.25,
      7566.25,
      7556.8,
      7525.55,
      7555.45,
      7560.9,
      7490.7,
      7527.6,
      7551.9,
      7514.85,
      7577.95,
      7592.3,
      7621.95,
      7707.95,
      7859.1,
      7815.7,
      7739,
      7778.7,
      7839.45,
      7756.45,
      7669.2,
      7580.45,
      7452.85,
      7617.25,
      7701.6,
      7606.8,
      7620.05,
      7513.85,
      7498.45,
      7575.45,
      7601.95,
      7589.1,
      7525.85,
      7569.5,
      7702.5,
      7812.7,
      7803.75,
      7816.3,
      7851.15,
      7912.2,
      7972.8,
      8145,
      8161.1,
      8121.05,
      8071.25,
      8088.2,
      8154.45,
      8148.3,
      8122.05,
      8132.65,
      8074.55,
      7952.8,
      7885.55,
      7733.9,
      7897.15,
      7973.15,
      7888.5,
      7842.8,
      7838.4,
      7909.85,
      7892.75,
      7897.75,
      7820.05,
      7904.4,
      7872.2,
      7847.5,
      7849.55,
      7789.6,
      7736.35,
      7819.4,
      7875.35,
      7871.8,
      8076.5,
      8114.8,
      8193.55,
      8217.1,
      8235.05,
      8215.3,
      8216.4,
      8301.55,
      8235.25,
      8229.75,
      8201.95,
      8164.95,
      8107.85,
      8128,
      8122.9,
      8165.5,
      8340.7,
      8423.7,
      8423.5,
      8514.3,
      8481.85,
      8487.7,
      8506.9,
      8626.2
    ],
    dates: [
      "02 Jun 2017",
      "05 Jun 2017",
      "06 Jun 2017",
      "07 Jun 2017",
      "08 Jun 2017",
      "09 Jun 2017",
      "12 Jun 2017",
      "13 Jun 2017",
      "14 Jun 2017",
      "15 Jun 2017",
      "16 Jun 2017",
      "19 Jun 2017",
      "20 Jun 2017",
      "21 Jun 2017",
      "22 Jun 2017",
      "23 Jun 2017",
      "27 Jun 2017",
      "28 Jun 2017",
      "29 Jun 2017",
      "30 Jun 2017",
      "03 Jul 2017",
      "04 Jul 2017",
      "05 Jul 2017",
      "06 Jul 2017",
      "07 Jul 2017",
      "10 Jul 2017",
      "11 Jul 2017",
      "12 Jul 2017",
      "13 Jul 2017",
      "14 Jul 2017",
      "17 Jul 2017",
      "18 Jul 2017",
      "19 Jul 2017",
      "20 Jul 2017",
      "21 Jul 2017",
      "24 Jul 2017",
      "25 Jul 2017",
      "26 Jul 2017",
      "27 Jul 2017",
      "28 Jul 2017",
      "31 Jul 2017",
      "01 Aug 2017",
      "02 Aug 2017",
      "03 Aug 2017",
      "04 Aug 2017",
      "07 Aug 2017",
      "08 Aug 2017",
      "09 Aug 2017",
      "10 Aug 2017",
      "11 Aug 2017",
      "14 Aug 2017",
      "16 Aug 2017",
      "17 Aug 2017",
      "18 Aug 2017",
      "21 Aug 2017",
      "22 Aug 2017",
      "23 Aug 2017",
      "24 Aug 2017",
      "28 Aug 2017",
      "29 Aug 2017",
      "30 Aug 2017",
      "31 Aug 2017",
      "01 Sep 2017",
      "04 Sep 2017",
      "05 Sep 2017",
      "06 Sep 2017",
      "07 Sep 2017",
      "08 Sep 2017",
      "11 Sep 2017",
      "12 Sep 2017",
      "13 Sep 2017",
      "14 Sep 2017",
      "15 Sep 2017",
      "18 Sep 2017",
      "19 Sep 2017",
      "20 Sep 2017",
      "21 Sep 2017",
      "22 Sep 2017",
      "25 Sep 2017",
      "26 Sep 2017",
      "27 Sep 2017",
      "28 Sep 2017",
      "29 Sep 2017",
      "03 Oct 2017",
      "04 Oct 2017",
      "05 Oct 2017",
      "06 Oct 2017",
      "09 Oct 2017",
      "10 Oct 2017",
      "11 Oct 2017",
      "12 Oct 2017",
      "13 Oct 2017",
      "16 Oct 2017",
      "17 Oct 2017",
      "18 Oct 2017",
      "19 Oct 2017",
      "23 Oct 2017",
      "24 Oct 2017",
      "25 Oct 2017",
      "26 Oct 2017",
      "27 Oct 2017",
      "30 Oct 2017",
      "31 Oct 2017",
      "01 Nov 2017",
      "02 Nov 2017",
      "03 Nov 2017",
      "06 Nov 2017",
      "07 Nov 2017",
      "08 Nov 2017",
      "09 Nov 2017",
      "10 Nov 2017",
      "13 Nov 2017",
      "14 Nov 2017",
      "15 Nov 2017",
      "16 Nov 2017",
      "17 Nov 2017",
      "20 Nov 2017",
      "21 Nov 2017",
      "22 Nov 2017",
      "23 Nov 2017",
      "24 Nov 2017",
      "27 Nov 2017",
      "28 Nov 2017"
    ]
  }
};
const options1 = {
  series: [
    {
      name: "\u062D\u0631\u0627\u062C\u06CC",
      data: [105, 414, 357, 511, 497, 621, 695, 912, 748]
    }
  ],
  chart: {
    height: 280,
    type: "line",
    zoom: {
      enabled: false
    },
    toolbar: {
      show: false
    }
  },
  colors: [themeColors.green],
  dataLabels: {
    enabled: false
  },
  stroke: {
    width: [2, 2, 2],
    curve: "straight"
  },
  title: {
    text: "\u0646\u0645\u0648\u062F\u0627\u0631 \u062E\u0637\u06CC",
    align: "right"
  },
  grid: {
    row: {
      colors: ["transparent", "transparent"],
      opacity: 0.5
    }
  },
  xaxis: {
    categories: [
      "\u0627\u0633\u0641\u0646\u062F",
      "\u0628\u0647\u0645\u0646",
      "\u062F\u06CC",
      "\u0622\u0630\u0631",
      "\u0622\u0628\u0627\u0646",
      "\u0645\u0647\u0631",
      "\u0634\u0647\u0631\u06CC\u0648\u0631",
      "\u0645\u0631\u062F\u0627\u062F",
      "\u062A\u06CC\u0631"
    ]
  },
  yaxis: {
    opposite: true
  }
};
const options2 = {
  series: [
    {
      name: "\u0632\u0645\u0627\u0646 \u062D\u0636\u0648\u0631",
      data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
    },
    {
      name: "\u0628\u0627\u0632\u062F\u06CC\u062F \u0635\u0641\u062D\u0627\u062A",
      data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
    },
    {
      name: "\u0645\u062C\u0645\u0648\u0639 \u062F\u0641\u0639\u0627\u062A \u0628\u0627\u0632\u062F\u06CC\u062F",
      data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
    }
  ],
  chart: {
    height: 280,
    type: "line",
    zoom: {
      enabled: false
    },
    toolbar: {
      show: false
    }
  },
  colors: [themeColors.accent, themeColors.info, themeColors.green],
  dataLabels: {
    enabled: false
  },
  stroke: {
    width: [2, 2, 2],
    curve: "straight",
    dashArray: [0, 8, 5]
  },
  title: {
    text: "\u0686\u0646\u062F \u062E\u0637\u06CC",
    align: "right"
  },
  legend: {
    tooltipHoverFormatter: function(val, opts) {
      return val + " - " + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + "";
    },
    position: "top"
  },
  markers: {
    size: 0,
    hover: {
      sizeOffset: 6
    }
  },
  xaxis: {
    categories: [
      "\u0627\u0633\u0641\u0646\u062F",
      "\u0628\u0647\u0645\u0646",
      "\u062F\u06CC",
      "\u0622\u0630\u0631",
      "\u0622\u0628\u0627\u0646",
      "\u0645\u0647\u0631",
      "\u0634\u0647\u0631\u06CC\u0648\u0631",
      "\u0645\u0631\u062F\u0627\u062F",
      "\u062A\u06CC\u0631",
      "\u062E\u0631\u062F\u0627\u062F",
      "\u0627\u0631\u062F\u06CC\u0628\u0647\u0634\u062A",
      "\u0641\u0631\u0648\u0631\u062F\u06CC\u0646"
    ]
  },
  tooltip: {
    y: [
      {
        title: {
          formatter: asMinutes
        }
      },
      {
        title: {
          formatter: perSession
        }
      },
      {
        title: {
          formatter: toString
        }
      }
    ]
  },
  grid: {
    borderColor: "#f1f1f1"
  },
  yaxis: {
    opposite: true
  }
};
const options4 = {
  series: [
    {
      name: "\u0627\u0639\u0636\u0627\u06CC \u062A\u0627\u0632\u0647\u200C\u0648\u0627\u0631\u062F",
      data: [34, 44, 54, 21, 12, 43, 33, 23, 66, 66, 58, 79]
    }
  ],
  chart: {
    type: "line",
    height: 280,
    toolbar: {
      show: false
    }
  },
  stroke: {
    width: [2, 2, 2],
    curve: "stepline"
  },
  colors: [themeColors.green],
  dataLabels: {
    enabled: false
  },
  title: {
    text: "\u0646\u0645\u0648\u062F\u0627\u0631 Stepline",
    align: "right"
  },
  markers: {
    hover: {
      sizeOffset: 4
    }
  },
  xaxis: {
    categories: [
      "\u0627\u0633\u0641\u0646\u062F",
      "\u0628\u0647\u0645\u0646",
      "\u062F\u06CC",
      "\u0622\u0630\u0631",
      "\u0622\u0628\u0627\u0646",
      "\u0645\u0647\u0631",
      "\u0634\u0647\u0631\u06CC\u0648\u0631",
      "\u0645\u0631\u062F\u0627\u062F",
      "\u062A\u06CC\u0631",
      "\u062E\u0631\u062F\u0627\u062F",
      "\u0627\u0631\u062F\u06CC\u0628\u0647\u0634\u062A",
      "\u0641\u0631\u0648\u0631\u062F\u06CC\u0646"
    ]
  },
  yaxis: {
    opposite: true
  }
};
const options5 = {
  series: [
    {
      name: "\u0628\u0627\u0644\u0627\u0646\u0633",
      data: series.monthDataSeries1.prices
    }
  ],
  chart: {
    type: "area",
    height: 280,
    zoom: {
      enabled: false
    },
    toolbar: {
      show: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    width: [2, 2, 2],
    curve: "straight"
  },
  colors: [themeColors.green],
  title: {
    text: "\u0646\u0645\u0648\u062F\u0627\u0631 \u0645\u062D\u06CC\u0637\u06CC",
    align: "right"
  },
  labels: series.monthDataSeries1.dates,
  xaxis: {
    type: "datetime"
  },
  yaxis: {
    opposite: true
  },
  legend: {
    horizontalAlign: "left"
  }
};
const options6 = {
  series: [
    {
      name: "\u0627\u062A\u0645\u0627\u0645 \u06CC\u0627\u0641\u062A\u0647",
      data: [31, 40, 28, 51, 42, 109, 100]
    },
    {
      name: "\u062F\u0631 \u0627\u0646\u062A\u0638\u0627\u0631",
      data: [11, 32, 45, 32, 34, 52, 41]
    }
  ],
  chart: {
    height: 280,
    type: "area",
    toolbar: {
      show: false
    }
  },
  colors: [themeColors.green, themeColors.info, themeColors.purple],
  title: {
    text: "\u0686\u0646\u062F \u0645\u062D\u06CC\u0637\u06CC",
    align: "right"
  },
  legend: {
    position: "top"
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    width: [2, 2, 2],
    curve: "smooth"
  },
  xaxis: {
    type: "datetime",
    categories: [
      "2018-09-19T00:00:00.000Z",
      "2018-09-19T01:30:00.000Z",
      "2018-09-19T02:30:00.000Z",
      "2018-09-19T03:30:00.000Z",
      "2018-09-19T04:30:00.000Z",
      "2018-09-19T05:30:00.000Z",
      "2018-09-19T06:30:00.000Z"
    ]
  },
  tooltip: {
    x: {
      format: "dd/MM/yy HH:mm"
    }
  },
  yaxis: {
    opposite: true
  }
};
let ts1 = 13885344e5;
let ts2 = 13886208e5;
let ts3 = 13890528e5;
const dataSet = [[], [], []];
for (let i = 0; i < 12; i++) {
  ts1 = ts1 + 864e5;
  const innerArr = [ts1, dataSeries[2][i].value];
  dataSet[0].push(innerArr);
}
for (let i = 0; i < 18; i++) {
  ts2 = ts2 + 864e5;
  const innerArr = [ts2, dataSeries[1][i].value];
  dataSet[1].push(innerArr);
}
for (let i = 0; i < 12; i++) {
  ts3 = ts3 + 864e5;
  const innerArr = [ts3, dataSeries[0][i].value];
  dataSet[2].push(innerArr);
}
const options7 = {
  series: [
    {
      name: "\u062F\u0633\u06A9\u062A\u0627\u067E",
      data: dataSet[0]
    },
    {
      name: "\u0647\u0645\u0631\u0627\u0647",
      data: dataSet[1]
    },
    {
      name: "\u062A\u0628\u0644\u062A",
      data: dataSet[2]
    }
  ],
  chart: {
    type: "area",
    stacked: false,
    height: 280,
    zoom: {
      enabled: false
    },
    toolbar: {
      show: false
    }
  },
  dataLabels: {
    enabled: false
  },
  markers: {
    size: 0
  },
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      inverseColors: false,
      opacityFrom: 0.45,
      opacityTo: 0.05,
      stops: [20, 100, 100, 100]
    }
  },
  yaxis: {
    opposite: true,
    labels: {
      style: {
        colors: "#8e8da4"
      },
      offsetX: 0,
      formatter: toFixed(2, 1e6)
    },
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    }
  },
  xaxis: {
    type: "datetime",
    tickAmount: 8,
    min: new Date("01/01/2014").getTime(),
    max: new Date("01/20/2014").getTime(),
    labels: {
      rotate: -15,
      rotateAlways: true,
      formatter: toDate("DD MMM YYYY")
    }
  },
  colors: [themeColors.accent, themeColors.info, themeColors.green],
  title: {
    text: "\u0686\u0646\u062F \u0645\u062D\u06CC\u0637\u06CC",
    align: "right"
  },
  tooltip: {
    shared: true
  },
  stroke: {
    width: [2, 2, 2]
  },
  legend: {
    position: "top",
    horizontalAlign: "center"
  }
};
const options8 = {
  series: [
    {
      name: "\u062A\u0648\u0631\u0645",
      data: [2.3, 3.1, 4, 10.1, 4, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2]
    }
  ],
  chart: {
    height: 280,
    type: "bar",
    toolbar: {
      show: false
    }
  },
  plotOptions: {
    bar: {
      dataLabels: {
        position: "top"
      }
    }
  },
  dataLabels: {
    enabled: true,
    formatter: asPercent,
    offsetY: -20,
    style: {
      fontSize: "12px",
      colors: ["#304758"]
    }
  },
  xaxis: {
    categories: [
      "\u0627\u0633\u0641\u0646\u062F",
      "\u0628\u0647\u0645\u0646",
      "\u062F\u06CC",
      "\u0622\u0630\u0631",
      "\u0622\u0628\u0627\u0646",
      "\u0645\u0647\u0631",
      "\u0634\u0647\u0631\u06CC\u0648\u0631",
      "\u0645\u0631\u062F\u0627\u062F",
      "\u062A\u06CC\u0631",
      "\u062E\u0631\u062F\u0627\u062F",
      "\u0627\u0631\u062F\u06CC\u0628\u0647\u0634\u062A",
      "\u0641\u0631\u0648\u0631\u062F\u06CC\u0646"
    ],
    position: "top",
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    crosshairs: {
      fill: {
        type: "gradient",
        gradient: {
          colorFrom: "#D8E3F0",
          colorTo: "#BED1E6",
          stops: [0, 100],
          opacityFrom: 0.4,
          opacityTo: 0.5
        }
      }
    },
    tooltip: {
      enabled: true
    }
  },
  yaxis: {
    opposite: true,
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    labels: {
      show: false,
      formatter: asPercent
    }
  },
  colors: [themeColors.green, themeColors.secondary, themeColors.orange],
  title: {
    text: "\u0646\u0645\u0648\u062F\u0627\u0631 \u0645\u06CC\u0644\u0647\u200C\u0627\u06CC",
    align: "right"
  }
};
const options9 = {
  series: [
    {
      name: "\u0633\u0648\u062F \u0645\u0633\u062A\u0642\u06CC\u0645",
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
    },
    {
      name: "\u0639\u0627\u06CC\u062F\u06CC",
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
    },
    {
      name: "\u0646\u0642\u062F\u06CC\u0646\u06AF\u06CC",
      data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
    }
  ],
  chart: {
    type: "bar",
    height: 280,
    toolbar: {
      show: false
    }
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "55%",
      endingShape: "rounded"
    }
  },
  colors: [
    themeColors.accent,
    themeColors.info,
    themeColors.green,
    themeColors.purple
  ],
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"]
  },
  xaxis: {
    categories: [
      "\u0627\u0633\u0641\u0646\u062F",
      "\u0628\u0647\u0645\u0646",
      "\u062F\u06CC",
      "\u0622\u0630\u0631",
      "\u0622\u0628\u0627\u0646",
      "\u0645\u0647\u0631",
      "\u0634\u0647\u0631\u06CC\u0648\u0631",
      "\u0645\u0631\u062F\u0627\u062F",
      "\u062A\u06CC\u0631"
    ]
  },
  yaxis: {
    opposite: true,
    title: {
      text: "\u0645\u06CC\u0644\u06CC\u0648\u0646 \u062A\u0648\u0645\u0627\u0646"
    }
  },
  fill: {
    opacity: 1
  },
  legend: {
    position: "top",
    horizontalAlign: "center"
  },
  title: {
    text: "\u0686\u0646\u062F \u0645\u06CC\u0644\u0647\u200C\u0627\u06CC",
    align: "right"
  },
  tooltip: {
    y: {
      formatter: asKDollar
    }
  }
};
const options10 = {
  series: [
    {
      name: "\u062F\u0633\u06A9\u062A\u0627\u067E",
      data: [44, 55, 41, 67, 22, 43]
    },
    {
      name: "\u0645\u0648\u0628\u0627\u06CC\u0644",
      data: [13, 23, 20, 8, 13, 27]
    },
    {
      name: "\u062A\u0628\u0644\u062A",
      data: [11, 17, 15, 15, 21, 14]
    },
    {
      name: "\u062A\u0628\u062F\u06CC\u0644\u200C\u0634\u0648\u0646\u062F\u0647",
      data: [21, 7, 25, 13, 22, 8]
    }
  ],
  chart: {
    type: "bar",
    height: 280,
    stacked: true,
    toolbar: {
      show: false
    },
    zoom: {
      enabled: true
    }
  },
  colors: [
    themeColors.accent,
    themeColors.info,
    themeColors.green,
    themeColors.purple,
    themeColors.orange
  ],
  responsive: [
    {
      breakpoint: 480,
      options: {
        legend: {
          position: "top"
        }
      }
    }
  ],
  plotOptions: {
    bar: {
      horizontal: false
    }
  },
  xaxis: {
    type: "datetime",
    categories: [
      "01/01/2011 GMT",
      "01/02/2011 GMT",
      "01/03/2011 GMT",
      "01/04/2011 GMT",
      "01/05/2011 GMT",
      "01/06/2011 GMT"
    ]
  },
  title: {
    text: "\u0646\u0645\u0648\u062F\u0627\u0631 \u067E\u0634\u062A\u0647\u200C\u0627\u06CC",
    align: "right"
  },
  legend: {
    position: "top",
    horizontalAlign: "center"
  },
  fill: {
    opacity: 1
  },
  yaxis: {
    opposite: true
  }
};
const options11 = {
  series: [
    {
      name: "\u0634\u0631\u06A9\u062A",
      data: [
        {
          x: "\u062A\u06CC\u0645 A",
          y: [1, 5]
        },
        {
          x: "\u062A\u06CC\u0645 B",
          y: [4, 6]
        },
        {
          x: "\u062A\u06CC\u0645 C",
          y: [5, 8]
        },
        {
          x: "\u062A\u06CC\u0645 D",
          y: [3, 11]
        }
      ]
    },
    {
      name: "\u062E\u062F\u0645\u0627\u062A",
      data: [
        {
          x: "\u062A\u06CC\u0645 A",
          y: [2, 6]
        },
        {
          x: "\u062A\u06CC\u0645 B",
          y: [1, 3]
        },
        {
          x: "\u062A\u06CC\u0645 C",
          y: [7, 8]
        },
        {
          x: "\u062A\u06CC\u0645 D",
          y: [5, 9]
        }
      ]
    }
  ],
  chart: {
    type: "rangeBar",
    height: 280,
    toolbar: {
      show: false
    }
  },
  colors: [
    themeColors.accent,
    themeColors.green,
    themeColors.orange,
    themeColors.purple,
    themeColors.green
  ],
  title: {
    text: "\u0628\u0627\u0632\u0647\u200C\u06CC \u0633\u062A\u0648\u0646\u06CC",
    align: "right"
  },
  plotOptions: {
    bar: {
      horizontal: false
    }
  },
  legend: {
    position: "top",
    horizontalAlign: "center"
  },
  dataLabels: {
    enabled: true
  },
  yaxis: {
    opposite: true
  }
};
const options12 = {
  series: [
    {
      name: "\u0633\u0641\u06CC\u0646\u0647\u200C\u0647\u0627\u06CC \u0641\u0636\u0627\u06CC\u06CC",
      data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
    }
  ],
  chart: {
    type: "bar",
    height: 280,
    toolbar: {
      show: false
    }
  },
  colors: [themeColors.green],
  plotOptions: {
    bar: {
      horizontal: true
    }
  },
  title: {
    text: "\u0645\u06CC\u0644\u0647\u200C\u0627\u06CC \u0627\u0641\u0642\u06CC",
    align: "right"
  },
  dataLabels: {
    enabled: false
  },
  xaxis: {
    categories: [
      "\u06A9\u0631\u0647 \u062C\u0646\u0648\u0628\u06CC",
      "\u06A9\u0627\u0646\u0627\u062F\u0627",
      "\u0628\u0631\u06CC\u062A\u0627\u0646\u06CC\u0627",
      "\u0647\u0644\u0646\u062F",
      "\u0627\u06CC\u062A\u0627\u0644\u06CC\u0627",
      "\u0641\u0631\u0627\u0646\u0633\u0647",
      "\u0698\u0627\u067E\u0646",
      "\u0627\u06CC\u0627\u0644\u0627\u062A \u0645\u062A\u062D\u062F\u0647",
      "\u0686\u06CC\u0646",
      "\u0622\u0644\u0645\u0627\u0646"
    ]
  },
  yaxis: {
    opposite: true
  }
};
const options13 = {
  series: [
    {
      name: "\u0627\u062A\u0645\u0627\u0645 \u06CC\u0627\u0641\u062A\u0647",
      data: [44, 55, 41, 64, 22, 43, 21]
    },
    {
      name: "\u062F\u0631 \u0627\u0646\u062A\u0638\u0627\u0631",
      data: [53, 32, 33, 52, 13, 44, 32]
    }
  ],
  chart: {
    type: "bar",
    height: 280,
    toolbar: {
      show: false
    }
  },
  colors: [themeColors.info, themeColors.green],
  title: {
    text: "\u0646\u0645\u0648\u062F\u0627\u0631 \u0645\u06CC\u0644\u0647\u200C\u0627\u06CC \u0627\u0641\u0642\u06CC \u0686\u0646\u062F\u062A\u0627\u06CC\u06CC",
    align: "right"
  },
  plotOptions: {
    bar: {
      horizontal: true,
      dataLabels: {
        position: "top"
      }
    }
  },
  dataLabels: {
    enabled: true,
    offsetX: -6,
    style: {
      fontSize: "12px",
      colors: ["#fff"]
    }
  },
  stroke: {
    show: true,
    width: 1,
    colors: ["#fff"]
  },
  xaxis: {
    categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007]
  },
  legend: {
    position: "top",
    horizontalAlign: "center"
  },
  yaxis: {
    opposite: true
  }
};
const options14 = {
  series: [
    {
      data: [
        {
          x: "\u062A\u062C\u0632\u06CC\u0647 \u0648 \u062A\u062D\u0644\u06CC\u0644",
          y: [
            new Date("2019-02-27").getTime(),
            new Date("2019-03-04").getTime()
          ],
          fillColor: themeColors.accent
        },
        {
          x: "\u0637\u0631\u0627\u062D\u06CC",
          y: [
            new Date("2019-03-04").getTime(),
            new Date("2019-03-08").getTime()
          ],
          fillColor: themeColors.info
        },
        {
          x: "\u06A9\u062F\u0646\u0648\u06CC\u0633\u06CC",
          y: [
            new Date("2019-03-07").getTime(),
            new Date("2019-03-10").getTime()
          ],
          fillColor: themeColors.green
        },
        {
          x: "\u0622\u0632\u0645\u0648\u0646 \u0646\u0631\u0645\u200C\u0627\u0641\u0632\u0627\u0631",
          y: [
            new Date("2019-03-08").getTime(),
            new Date("2019-03-12").getTime()
          ],
          fillColor: themeColors.purple
        },
        {
          x: "\u062F\u067E\u0644\u0648\u06CC \u06A9\u0631\u062F\u0646",
          y: [
            new Date("2019-03-12").getTime(),
            new Date("2019-03-17").getTime()
          ],
          fillColor: themeColors.orange
        }
      ]
    }
  ],
  title: {
    text: "\u062A\u0627\u06CC\u0645 \u0644\u0627\u06CC\u0646",
    align: "right"
  },
  chart: {
    height: 280,
    type: "rangeBar",
    toolbar: {
      show: false
    }
  },
  colors: [
    themeColors.accent,
    themeColors.info,
    themeColors.green,
    themeColors.purple,
    themeColors.orange
  ],
  plotOptions: {
    bar: {
      horizontal: true,
      distributed: true,
      dataLabels: {
        hideOverflowingLabels: false
      }
    }
  },
  dataLabels: {
    enabled: true,
    formatter: function(val, opts) {
      const label = opts.w.globals.labels[opts.dataPointIndex];
      const a = dayjs(val[0]);
      const b = dayjs(val[1]);
      const diff = b.diff(a, "days");
      return label + ": " + diff + (diff > 1 ? "D" : "d");
    },
    style: {
      colors: ["#f3f4f5", "#fff"]
    }
  },
  xaxis: {
    type: "datetime"
  },
  yaxis: {
    show: false
  },
  grid: {
    row: {
      colors: ["transparent"],
      opacity: 1
    }
  }
};
function generateData(baseval, count, yrange) {
  let i = 0;
  const _series = [];
  while (i < count) {
    const x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
    const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
    const z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;
    _series.push([x, y, z]);
    i++;
  }
  return _series;
}
const options15 = {
  series: [
    {
      name: "\u062D\u0628\u0627\u0628\u06CC \u06F1",
      data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
        min: 10,
        max: 60
      })
    },
    {
      name: "\u062D\u0628\u0627\u0628\u06CC \u06F2",
      data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
        min: 10,
        max: 60
      })
    },
    {
      name: "\u062D\u0628\u0627\u0628\u06CC \u06F3",
      data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
        min: 10,
        max: 60
      })
    },
    {
      name: "\u062D\u0628\u0627\u0628\u06CC \u06F4",
      data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
        min: 10,
        max: 60
      })
    }
  ],
  chart: {
    height: 280,
    type: "bubble",
    toolbar: {
      show: false
    }
  },
  colors: [
    themeColors.accent,
    themeColors.info,
    themeColors.green,
    themeColors.purple,
    themeColors.orange
  ],
  dataLabels: {
    enabled: false
  },
  fill: {
    opacity: 0.8
  },
  title: {
    text: "\u0646\u0645\u0648\u062F\u0627\u0631 \u062D\u0628\u0627\u0628\u06CC",
    align: "right"
  },
  xaxis: {
    tickAmount: 12,
    type: "category"
  },
  yaxis: {
    opposite: true,
    max: 70
  },
  legend: {
    position: "top",
    horizontalAlign: "center"
  }
};
function generateDayWiseTimeSeries(baseval, count, yrange) {
  let i = 0;
  const series2 = [];
  while (i < count) {
    const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
    series2.push([baseval, y]);
    baseval += 864e5;
    i++;
  }
  return series2;
}
const options16 = {
  series: [
    {
      name: "\u062A\u06CC\u0645 1",
      data: generateDayWiseTimeSeries(new Date("11 Feb 2017 GMT").getTime(), 20, {
        min: 10,
        max: 60
      })
    },
    {
      name: "\u062A\u06CC\u0645 2",
      data: generateDayWiseTimeSeries(new Date("11 Feb 2017 GMT").getTime(), 20, {
        min: 10,
        max: 60
      })
    },
    {
      name: "\u062A\u06CC\u0645 3",
      data: generateDayWiseTimeSeries(new Date("11 Feb 2017 GMT").getTime(), 30, {
        min: 10,
        max: 60
      })
    },
    {
      name: "\u062A\u06CC\u0645 4",
      data: generateDayWiseTimeSeries(new Date("11 Feb 2017 GMT").getTime(), 10, {
        min: 10,
        max: 60
      })
    },
    {
      name: "\u062A\u06CC\u0645 5",
      data: generateDayWiseTimeSeries(new Date("11 Feb 2017 GMT").getTime(), 30, {
        min: 10,
        max: 60
      })
    }
  ],
  title: {
    text: "\u0646\u0645\u0648\u062F\u0627\u0631 \u0627\u0633\u06A9\u0627\u062A\u0631",
    align: "right"
  },
  chart: {
    height: 280,
    type: "scatter",
    zoom: {
      type: "xy"
    },
    toolbar: {
      show: false
    }
  },
  colors: [
    themeColors.accent,
    themeColors.info,
    themeColors.green,
    themeColors.purple,
    themeColors.orange
  ],
  dataLabels: {
    enabled: false
  },
  grid: {
    xaxis: {
      lines: {
        show: true
      }
    },
    yaxis: {
      opposite: true,
      lines: {
        show: true
      }
    }
  },
  xaxis: {
    type: "datetime"
  },
  yaxis: {
    opposite: true,
    max: 70
  },
  legend: {
    position: "top",
    horizontalAlign: "center"
  }
};
const options17 = {
  series: [44, 55, 13, 43, 22],
  chart: {
    height: 295,
    type: "pie"
  },
  colors: [
    themeColors.accent,
    themeColors.info,
    themeColors.green,
    themeColors.purple,
    themeColors.orange
  ],
  labels: ["\u062A\u06CC\u0645 A", "\u062A\u06CC\u0645 B", "\u062A\u06CC\u0645 C", "\u062A\u06CC\u0645 D", "\u062A\u06CC\u0645 E"],
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 315,
          toolbar: {
            show: false
          }
        },
        legend: {
          position: "top"
        }
      }
    }
  ],
  legend: {
    position: "right",
    horizontalAlign: "center"
  }
};
const options18 = {
  series: [44, 55, 41, 17, 15],
  title: {
    text: "\u0646\u0645\u0648\u062F\u0627\u0631 \u062F\u0648\u0646\u0627\u062A",
    align: "right"
  },
  chart: {
    height: 290,
    type: "donut"
  },
  labels: ["\u062A\u06CC\u0645 A", "\u062A\u06CC\u0645 B", "\u062A\u06CC\u0645 C", "\u062A\u06CC\u0645 D", "\u062A\u06CC\u0645 E"],
  colors: [
    themeColors.accent,
    themeColors.info,
    themeColors.green,
    themeColors.purple,
    themeColors.orange
  ],
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 280,
          toolbar: {
            show: false
          }
        },
        legend: {
          position: "top"
        }
      }
    }
  ],
  legend: {
    position: "right",
    horizontalAlign: "center"
  }
};
const options19 = {
  series: [70],
  title: {
    text: "\u0646\u0645\u0648\u062F\u0627\u0631 \u062F\u0627\u06CC\u0631\u0647\u200C\u0627\u06CC",
    align: "right"
  },
  chart: {
    height: 295,
    type: "radialBar",
    toolbar: {
      show: false
    }
  },
  colors: [
    themeColors.accent,
    themeColors.info,
    themeColors.green,
    themeColors.purple,
    themeColors.orange
  ],
  plotOptions: {
    radialBar: {
      hollow: {
        size: "70%"
      }
    }
  },
  labels: ["\u0642\u062F\u0631\u062A"]
};
const options20 = {
  series: [44, 55, 67, 83],
  title: {
    text: "\u0646\u0645\u0648\u062F\u0627\u0631 \u062F\u0627\u06CC\u0631\u0647\u200C\u0627\u06CC \u0686\u0646\u062F\u062A\u0627\u06CC\u06CC",
    align: "right"
  },
  chart: {
    height: 295,
    type: "radialBar",
    toolbar: {
      show: false
    }
  },
  colors: [
    themeColors.accent,
    themeColors.info,
    themeColors.green,
    themeColors.purple,
    themeColors.orange
  ],
  plotOptions: {
    radialBar: {
      dataLabels: {
        name: {
          fontSize: "22px"
        },
        value: {
          fontSize: "16px"
        },
        total: {
          show: true,
          label: "\u0645\u062C\u0645\u0648\u0639",
          formatter: function(_) {
            return 249;
          }
        }
      }
    }
  },
  labels: ["\u0633\u06CC\u0628", "\u067E\u0631\u062A\u0642\u0627\u0644", "\u0645\u0648\u0632", "\u0628\u0631\u06CC"]
};
const options21 = {
  series: [67],
  title: {
    text: "\u062F\u0627\u06CC\u0631\u0647\u200C\u0627\u06CC \u0648 \u0645\u06CC\u0644\u0647\u200C\u0627\u06CC \u0639\u0642\u0631\u0628\u0647\u200C\u0627\u06CC",
    align: "right"
  },
  chart: {
    height: 295,
    type: "radialBar",
    offsetY: -10,
    toolbar: {
      show: false
    }
  },
  colors: [
    themeColors.accent,
    themeColors.info,
    themeColors.green,
    themeColors.purple,
    themeColors.orange
  ],
  plotOptions: {
    radialBar: {
      startAngle: -135,
      endAngle: 135,
      dataLabels: {
        name: {
          fontSize: "16px",
          color: void 0,
          offsetY: 120
        },
        value: {
          offsetY: 76,
          fontSize: "22px",
          color: void 0,
          formatter: asPercent
        }
      }
    }
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      shadeIntensity: 0.15,
      inverseColors: false,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 50, 65, 91]
    }
  },
  stroke: {
    dashArray: 4
  },
  labels: ["\u062A\u0631\u0627\u0632 \u0645\u06CC\u0627\u0646\u06AF\u06CC\u0646"]
};
const options22 = {
  series: [76],
  title: {
    text: "\u062F\u0627\u06CC\u0631\u0647\u200C\u0627\u06CC \u0648 \u0645\u06CC\u0644\u0647\u200C\u0627\u06CC \u0639\u0642\u0631\u0628\u0647\u200C\u0627\u06CC",
    align: "right"
  },
  chart: {
    height: 295,
    type: "radialBar",
    sparkline: {
      enabled: true
    },
    toolbar: {
      show: false
    }
  },
  colors: [
    themeColors.accent,
    themeColors.info,
    themeColors.green,
    themeColors.purple,
    themeColors.orange
  ],
  plotOptions: {
    radialBar: {
      startAngle: -90,
      endAngle: 90,
      track: {
        background: "#e7e7e7",
        strokeWidth: "97%",
        margin: 5,
        dropShadow: {
          enabled: false,
          top: 2,
          left: 0,
          color: "#999",
          opacity: 1,
          blur: 2
        }
      },
      dataLabels: {
        name: {
          show: false
        },
        value: {
          offsetY: -2,
          fontSize: "22px"
        }
      }
    }
  },
  grid: {
    padding: {}
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "light",
      shadeIntensity: 0.1,
      inverseColors: false,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 50, 53, 91]
    }
  },
  labels: ["\u0645\u06CC\u0627\u0646\u06AF\u06CC\u0646 \u062F\u0633\u062A\u200C\u0622\u0648\u0631\u062F\u0647\u0627"]
};
const options23 = {
  series: [
    {
      name: "\u0633\u0631\u06CC 1",
      data: [80, 50, 30, 40, 100, 20]
    }
  ],
  chart: {
    height: 350,
    type: "radar",
    toolbar: {
      show: false
    }
  },
  colors: [
    themeColors.accent,
    themeColors.info,
    themeColors.green,
    themeColors.purple,
    themeColors.orange
  ],
  title: {
    text: "\u0646\u0645\u0648\u062F\u0627\u0631 \u0631\u0627\u062F\u0627\u0631\u06CC",
    align: "right"
  },
  xaxis: {
    categories: ["\u0641\u0631\u0648\u0631\u062F\u06CC\u0646", "\u0627\u0631\u062F\u06CC\u0628\u0647\u0634\u062A", "\u062E\u0631\u062F\u0627\u062F", "\u062A\u06CC\u0631", "\u0645\u0631\u062F\u0627\u062F", "\u0634\u0647\u0631\u06CC\u0648\u0631"]
  }
};
var chartOptions = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  options1,
  options2,
  options4,
  options5,
  options6,
  options7,
  options8,
  options9,
  options10,
  options11,
  options12,
  options13,
  options14,
  options15,
  options16,
  options17,
  options18,
  options19,
  options20,
  options21,
  options22,
  options23
});
const _hoisted_1 = { class: "apex-dashboard" };
const _hoisted_2 = { class: "columns is-multiline" };
const _hoisted_3 = { class: "column is-6" };
const _hoisted_4 = { class: "s-card" };
const _hoisted_5 = { class: "column is-6" };
const _hoisted_6 = { class: "s-card" };
const _hoisted_7 = { class: "column is-6" };
const _hoisted_8 = { class: "s-card" };
const _hoisted_9 = { class: "column is-6" };
const _hoisted_10 = { class: "s-card" };
const _hoisted_11 = { class: "column is-6" };
const _hoisted_12 = { class: "s-card" };
const _hoisted_13 = { class: "column is-6" };
const _hoisted_14 = { class: "s-card" };
const _hoisted_15 = { class: "column is-6" };
const _hoisted_16 = { class: "s-card" };
const _hoisted_17 = { class: "column is-6" };
const _hoisted_18 = { class: "s-card" };
const _hoisted_19 = { class: "column is-6" };
const _hoisted_20 = { class: "s-card" };
const _hoisted_21 = { class: "column is-6" };
const _hoisted_22 = { class: "s-card" };
const _hoisted_23 = { class: "column is-6" };
const _hoisted_24 = { class: "s-card" };
const _hoisted_25 = { class: "column is-6" };
const _hoisted_26 = { class: "s-card" };
const _hoisted_27 = { class: "column is-6" };
const _hoisted_28 = { class: "s-card" };
const _hoisted_29 = { class: "column is-6" };
const _hoisted_30 = { class: "s-card" };
const _hoisted_31 = { class: "column is-6" };
const _hoisted_32 = { class: "s-card" };
const _hoisted_33 = { class: "column is-6" };
const _hoisted_34 = { class: "s-card" };
const _hoisted_35 = { class: "column is-6" };
const _hoisted_36 = { class: "s-card" };
const _hoisted_37 = { class: "column is-6" };
const _hoisted_38 = { class: "s-card" };
const _hoisted_39 = { class: "column is-6" };
const _hoisted_40 = { class: "s-card" };
const _hoisted_41 = { class: "column is-6" };
const _hoisted_42 = { class: "s-card" };
const _hoisted_43 = { class: "column is-6" };
const _hoisted_44 = { class: "s-card" };
const _hoisted_45 = { class: "column is-6" };
const _hoisted_46 = { class: "s-card" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("div", _hoisted_4, [
              createVNode(unref(ApexChart), {
                id: "apex-chart-1",
                dir: "ltr",
                height: unref(chartOptions).options1.chart.height,
                type: unref(chartOptions).options1.chart.type,
                series: unref(chartOptions).options1.series,
                options: unref(chartOptions).options1
              }, null, 8, ["height", "type", "series", "options"])
            ])
          ]),
          createBaseVNode("div", _hoisted_5, [
            createBaseVNode("div", _hoisted_6, [
              createVNode(unref(ApexChart), {
                id: "apex-chart-2",
                dir: "ltr",
                height: unref(chartOptions).options2.chart.height,
                type: unref(chartOptions).options2.chart.type,
                series: unref(chartOptions).options2.series,
                options: unref(chartOptions).options2
              }, null, 8, ["height", "type", "series", "options"])
            ])
          ]),
          createBaseVNode("div", _hoisted_7, [
            createBaseVNode("div", _hoisted_8, [
              createVNode(unref(ApexChart), {
                id: "apex-chart-4",
                dir: "ltr",
                height: unref(chartOptions).options4.chart.height,
                type: unref(chartOptions).options4.chart.type,
                series: unref(chartOptions).options4.series,
                options: unref(chartOptions).options4
              }, null, 8, ["height", "type", "series", "options"])
            ])
          ]),
          createBaseVNode("div", _hoisted_9, [
            createBaseVNode("div", _hoisted_10, [
              createVNode(unref(ApexChart), {
                id: "apex-chart-5",
                dir: "ltr",
                height: unref(chartOptions).options5.chart.height,
                type: unref(chartOptions).options5.chart.type,
                series: unref(chartOptions).options5.series,
                options: unref(chartOptions).options5
              }, null, 8, ["height", "type", "series", "options"])
            ])
          ]),
          createBaseVNode("div", _hoisted_11, [
            createBaseVNode("div", _hoisted_12, [
              createVNode(unref(ApexChart), {
                id: "apex-chart-6",
                dir: "ltr",
                height: unref(chartOptions).options6.chart.height,
                type: unref(chartOptions).options6.chart.type,
                series: unref(chartOptions).options6.series,
                options: unref(chartOptions).options6
              }, null, 8, ["height", "type", "series", "options"])
            ])
          ]),
          createBaseVNode("div", _hoisted_13, [
            createBaseVNode("div", _hoisted_14, [
              createVNode(unref(ApexChart), {
                id: "apex-chart-7",
                dir: "ltr",
                height: unref(chartOptions).options7.chart.height,
                type: unref(chartOptions).options7.chart.type,
                series: unref(chartOptions).options7.series,
                options: unref(chartOptions).options7
              }, null, 8, ["height", "type", "series", "options"])
            ])
          ]),
          createBaseVNode("div", _hoisted_15, [
            createBaseVNode("div", _hoisted_16, [
              createVNode(unref(ApexChart), {
                id: "apex-chart-8",
                dir: "ltr",
                height: unref(chartOptions).options8.chart.height,
                type: unref(chartOptions).options8.chart.type,
                series: unref(chartOptions).options8.series,
                options: unref(chartOptions).options8
              }, null, 8, ["height", "type", "series", "options"])
            ])
          ]),
          createBaseVNode("div", _hoisted_17, [
            createBaseVNode("div", _hoisted_18, [
              createVNode(unref(ApexChart), {
                id: "apex-chart-9",
                dir: "ltr",
                height: unref(chartOptions).options9.chart.height,
                type: unref(chartOptions).options9.chart.type,
                series: unref(chartOptions).options9.series,
                options: unref(chartOptions).options9
              }, null, 8, ["height", "type", "series", "options"])
            ])
          ]),
          createBaseVNode("div", _hoisted_19, [
            createBaseVNode("div", _hoisted_20, [
              createVNode(unref(ApexChart), {
                id: "apex-chart-10",
                dir: "ltr",
                height: unref(chartOptions).options10.chart.height,
                type: unref(chartOptions).options10.chart.type,
                series: unref(chartOptions).options10.series,
                options: unref(chartOptions).options10
              }, null, 8, ["height", "type", "series", "options"])
            ])
          ]),
          createBaseVNode("div", _hoisted_21, [
            createBaseVNode("div", _hoisted_22, [
              createVNode(unref(ApexChart), {
                id: "apex-chart-11",
                dir: "ltr",
                height: unref(chartOptions).options11.chart.height,
                type: unref(chartOptions).options11.chart.type,
                series: unref(chartOptions).options11.series,
                options: unref(chartOptions).options11
              }, null, 8, ["height", "type", "series", "options"])
            ])
          ]),
          createBaseVNode("div", _hoisted_23, [
            createBaseVNode("div", _hoisted_24, [
              createVNode(unref(ApexChart), {
                id: "apex-chart-12",
                dir: "ltr",
                height: unref(chartOptions).options12.chart.height,
                type: unref(chartOptions).options12.chart.type,
                series: unref(chartOptions).options12.series,
                options: unref(chartOptions).options12
              }, null, 8, ["height", "type", "series", "options"])
            ])
          ]),
          createBaseVNode("div", _hoisted_25, [
            createBaseVNode("div", _hoisted_26, [
              createVNode(unref(ApexChart), {
                id: "apex-chart-13",
                dir: "ltr",
                height: unref(chartOptions).options13.chart.height,
                type: unref(chartOptions).options13.chart.type,
                series: unref(chartOptions).options13.series,
                options: unref(chartOptions).options13
              }, null, 8, ["height", "type", "series", "options"])
            ])
          ]),
          createBaseVNode("div", _hoisted_27, [
            createBaseVNode("div", _hoisted_28, [
              createVNode(unref(ApexChart), {
                id: "apex-chart-14",
                dir: "ltr",
                height: unref(chartOptions).options14.chart.height,
                type: unref(chartOptions).options14.chart.type,
                series: unref(chartOptions).options14.series,
                options: unref(chartOptions).options14
              }, null, 8, ["height", "type", "series", "options"])
            ])
          ]),
          createBaseVNode("div", _hoisted_29, [
            createBaseVNode("div", _hoisted_30, [
              createVNode(unref(ApexChart), {
                id: "apex-chart-15",
                dir: "ltr",
                height: unref(chartOptions).options15.chart.height,
                type: unref(chartOptions).options15.chart.type,
                series: unref(chartOptions).options15.series,
                options: unref(chartOptions).options15
              }, null, 8, ["height", "type", "series", "options"])
            ])
          ]),
          createBaseVNode("div", _hoisted_31, [
            createBaseVNode("div", _hoisted_32, [
              createVNode(unref(ApexChart), {
                id: "apex-chart-16",
                dir: "ltr",
                height: unref(chartOptions).options16.chart.height,
                type: unref(chartOptions).options16.chart.type,
                series: unref(chartOptions).options16.series,
                options: unref(chartOptions).options16
              }, null, 8, ["height", "type", "series", "options"])
            ])
          ]),
          createBaseVNode("div", _hoisted_33, [
            createBaseVNode("div", _hoisted_34, [
              createVNode(unref(ApexChart), {
                id: "apex-chart-17",
                dir: "ltr",
                height: unref(chartOptions).options17.chart.height,
                type: unref(chartOptions).options17.chart.type,
                series: unref(chartOptions).options17.series,
                options: unref(chartOptions).options17
              }, null, 8, ["height", "type", "series", "options"])
            ])
          ]),
          createBaseVNode("div", _hoisted_35, [
            createBaseVNode("div", _hoisted_36, [
              createVNode(unref(ApexChart), {
                id: "apex-chart-18",
                dir: "ltr",
                height: unref(chartOptions).options18.chart.height,
                type: unref(chartOptions).options18.chart.type,
                series: unref(chartOptions).options18.series,
                options: unref(chartOptions).options18
              }, null, 8, ["height", "type", "series", "options"])
            ])
          ]),
          createBaseVNode("div", _hoisted_37, [
            createBaseVNode("div", _hoisted_38, [
              createVNode(unref(ApexChart), {
                id: "apex-chart-19",
                dir: "ltr",
                height: unref(chartOptions).options19.chart.height,
                type: unref(chartOptions).options19.chart.type,
                series: unref(chartOptions).options19.series,
                options: unref(chartOptions).options19
              }, null, 8, ["height", "type", "series", "options"])
            ])
          ]),
          createBaseVNode("div", _hoisted_39, [
            createBaseVNode("div", _hoisted_40, [
              createVNode(unref(ApexChart), {
                id: "apex-chart-20",
                dir: "ltr",
                height: unref(chartOptions).options20.chart.height,
                type: unref(chartOptions).options20.chart.type,
                series: unref(chartOptions).options20.series,
                options: unref(chartOptions).options20
              }, null, 8, ["height", "type", "series", "options"])
            ])
          ]),
          createBaseVNode("div", _hoisted_41, [
            createBaseVNode("div", _hoisted_42, [
              createVNode(unref(ApexChart), {
                id: "apex-chart-21",
                dir: "ltr",
                height: unref(chartOptions).options21.chart.height,
                type: unref(chartOptions).options21.chart.type,
                series: unref(chartOptions).options21.series,
                options: unref(chartOptions).options21
              }, null, 8, ["height", "type", "series", "options"])
            ])
          ]),
          createBaseVNode("div", _hoisted_43, [
            createBaseVNode("div", _hoisted_44, [
              createVNode(unref(ApexChart), {
                id: "apex-chart-22",
                dir: "ltr",
                height: unref(chartOptions).options22.chart.height,
                type: unref(chartOptions).options22.chart.type,
                series: unref(chartOptions).options22.series,
                options: unref(chartOptions).options22
              }, null, 8, ["height", "type", "series", "options"])
            ])
          ]),
          createBaseVNode("div", _hoisted_45, [
            createBaseVNode("div", _hoisted_46, [
              createVNode(unref(ApexChart), {
                id: "apex-chart-23",
                dir: "ltr",
                height: unref(chartOptions).options23.chart.height,
                type: unref(chartOptions).options23.chart.type,
                series: unref(chartOptions).options23.series,
                options: unref(chartOptions).options23
              }, null, 8, ["height", "type", "series", "options"])
            ])
          ])
        ])
      ]);
    };
  }
});
export { _sfc_main as _ };
