export default function (vm,gop,url,param,fn) {
  $.ajax({
    type:gop,
    url:url,
    dataType:"json",
    data:param,
    traditional: true,
    success:fn,
    error:function () {
       vm.$message("系统维护中")
    },
  });
}
