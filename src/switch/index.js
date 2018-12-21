
/**
 * 开关组件
 */
var app = getApp();

Component({
  properties: {
    contType:{//开关内容类型：'number':0/1 'char':'开/关' 'sign':'√/×'
      type:String,
      value:''
    }
  },
  data: {
    isEnable:true,//开关是否可用
    isClose:true,//在开关可用情况下，状态是否是关闭状态
    content:{
      openTip:'',//打开提示信息
      closeTop:'',//关闭提示信息
    }
  },
  attached: function (options) {
    switch(this.properties.contType){
      case 'number':
        this.setData({
          content:{
            openTip:'1',
            closeTip:'0',
          }
        })
        break;
      case 'char':
        this.setData({
          content:{
            openTip:'开',
            closeTip:'关',
          }
        })
        break;
      case 'sign':
        this.setData({
          content:{
            openTip:'√',
            closeTip:'×',
          }
        })
        break;
    }
  },
  methods: {
    //改变开关状态
    changeStatus:function(){ 
      if(this.data.isEnable){
        this.triggerEvent('statusChange', { isClose: this.data.isClose }, {});
        this.setData({
          isClose:!this.data.isClose,
        })
      }
    },
    //开启关闭开关
    toggle:function(){
      this.setData({
        isEnable:!this.data.isEnable
      })
    }
  }
});