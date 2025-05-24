(function () {
  window.G7BMap = {
    /**
     * GCJ(火星坐标系) 转 WGS84
     * @param  {*} points 经纬度坐标数组对象
     */
    GCJ_to_WGS84: function (points) {
      return G7BMap.gcoordTransform(points, gcoord.GCJ02, gcoord.WGS84);
    },
    /**
     * WGS84 转 GCJ(火星坐标系)
     * @param  {*} points 经纬度坐标数组对象
     */
    WGS84_to_GCJ: function (points) {
      return G7BMap.gcoordTransform(points, gcoord.WGS84, gcoord.GCJ02)
    },
    /**
     * 参考：https://github.com/hujiulong/gcoord
     * 经纬度相互转换
     * @param {*} points 经纬度坐标数组对象
     * @param {*} from   当前坐标系
     * @param {*} to     目标坐标系
     * @param {*} return 最多保留6位小数
     */
    gcoordTransform (points, from, to) {
      var result = [];
      var n = Math.pow(10, 6);
      $.each(points, function (i, e) {
        var transData = gcoord.transform([e.lng, e.lat], from, to);
        result.push({
          lng: Math.round(transData[0] * n) / n,
          lat: Math.round(transData[1] * n) / n
        })
      });
      return result;
    }
  }
})();
