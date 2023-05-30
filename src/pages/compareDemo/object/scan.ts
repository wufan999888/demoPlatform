export default class Scan {
  constructor(public el = document.querySelector<HTMLDivElement>('#line')!,
  public lineDiv = document.querySelector<HTMLDivElement>('#lineDiv')!,
  public newImg = document.querySelector<HTMLDivElement>('#newImg')!,
  ) {
    this.init()
  }
  private init() {
    this.el.addEventListener('mousemove', (event:MouseEvent)=>{
      //盒子距离浏览器边框的距离，相减即鼠标距离盒子边框的距离
      this.lineDiv.style.cssText = `left:${event.pageX - 270}px;`
      this.newImg.style.cssText = `width:${event.pageX - 270}px;`
    })
  }
}