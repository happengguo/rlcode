<template>
  <canvas id="canvas" :class="rainbow.canvas" @click="handleCick"></canvas>
</template>

<script>
export default {
  name: "RlCanvasCode",
  props: {
    codeLength: {
      type: Number,
      default: 4
    },
    ingoreCase: {
      type: Boolean,
      default: true
    },
    fontX: {
      type: Number,
      default: 10
    },
    fontY: {
      type: Number,
      default: 20
    },
    fontStyle: {
      type: String,
      default: "bold 20px 微软雅黑"
    }
  },
  data() {
    return {
      show_num: []
    };
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.show_num = new Array(Number(this.codeLength));
    this.draw();
  },
  //方法集合
  methods: {
    handleCick() {
      this.draw();
    },
    randomColor() {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      return "rgb(" + r + "," + g + "," + b + ")";
    },
    draw() {
      let canvas = document.getElementById("canvas"); //获取到canvas的对象，演员
      let canvas_width = canvas.clientWidth;
      let canvas_height = canvas.clientHeight;
      let context = canvas.getContext("2d"); //获取到canvas画图的环境，演员表演的舞台
      canvas.width = canvas_width;
      canvas.height = canvas_height;
      let sCode =
        "a,b,c,d,e,f,g,h,i,j,k,m,n,p,q,r,s,t,u,v,w,x,y,z,A,B,C,E,F,G,H,J,K,L,M,N,P,Q,R,S,T,W,X,Y,Z,1,2,3,4,5,6,7,8,9,0";
      let aCode = sCode.split(",");
      let aLength = aCode.length; //获取到数组的长度

      for (let i = 0; i < this.codeLength; i++) {
        //这里的for循环可以控制验证码位数（如果想显示6位数，4改成6即可）
        let j = Math.floor(Math.random() * aLength); //获取到随机的索引值
        // let deg = Math.random() * 30 * Math.PI / 180;//产生0~30之间的随机弧度
        let deg = Math.random() - 0.5; //产生一个随机弧度
        let txt = aCode[j]; //得到随机的一个内容
        this.show_num[i] = this.ingoreCase ? txt.toLowerCase() : txt;
        let x = this.fontX + i * 20; //文字在canvas上的x坐标
        let y = this.fontY + Math.random() * 8; //文字在canvas上的y坐标
        context.font = this.fontStyle;

        context.translate(x, y);
        context.rotate(deg);

        context.fillStyle = this.randomColor();
        context.fillText(txt, 0, 0);

        context.rotate(-deg);
        context.translate(-x, -y);
      }
      // 画上几条线
      for (let i = 0; i <= 5; i++) {
        //验证码上显示线条
        context.strokeStyle = this.randomColor();
        context.beginPath();
        context.moveTo(
          Math.random() * canvas_width,
          Math.random() * canvas_height
        );
        context.lineTo(
          Math.random() * canvas_width,
          Math.random() * canvas_height
        );
        context.stroke();
      }

      // 画上几个点点
      for (let i = 0; i <= 30; i++) {
        //验证码上显示小点
        context.strokeStyle = this.randomColor();
        context.beginPath();
        let x = Math.random() * canvas_width;
        let y = Math.random() * canvas_height;
        context.moveTo(x, y);
        context.lineTo(x + 1, y + 1);
        context.stroke();
      }

      this.$emit("codeChange", this.show_num.join(""));
    }
  }
};
</script>
<style module="rainbow">
.canvas {
  vertical-align: middle;
  box-sizing: border-box;
  border: 1px solid #43224d;
  cursor: pointer;
  height: 40px;
  width: 100px;
}
</style>
