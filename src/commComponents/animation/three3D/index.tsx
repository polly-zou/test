import React from "react";
import * as THREE from "three";
import "./index.less";
interface Three3DProps { }
interface Three3DState {
  testDom: any;
}
class Three3D extends React.Component<Three3DProps, Three3DState> {
  constructor(props: Three3DProps) {
    super(props);
    this.state = {
      testDom: ""
    };
  }
  initThree() {
    // 获取浏览器窗口的宽高，后续会用
    var width = 200;
    var height = 200;
    // 创建一个场景
    let scene = new THREE.Scene();
    // 创建一个具有透视效果的摄像头
    let camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 800);
    // 创建一个 WebGL 渲染器，Three.js 还提供 <canvas>, <svg>, CSS3D 渲染器。
    let renderer = new THREE.WebGLRenderer();
    // 设置渲染器的清除颜色（即背景色）和尺寸
    renderer.setClearColor(0xffffff);
    renderer.setSize(width, height);
    // 创建一个长宽高均为 4 个单位长度的立方体（几何体）
    var cubeGeometry = new THREE.BoxGeometry(8, 8, 8);
    // 创建材质
    var cubeMaterial = new THREE.MeshBasicMaterial({
      color: 0xff0000,
      wireframe: true
    });
    // 创建一个立方体网格（mesh）：将材质包裹在几何体上
    var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    // 设置立方体网格位置
    // 设置位置的的方式有三种：
    // ①直接设置坐标 cube.position.x = 10 cube.position.y = 3 cube.position.z = 1
    // ②一次性设置 cube.position.set(10, 3, 1)
    // ③ position 属性是一个 THREE.Vector3 对象 cube.position = new THREE.Vector3(10, 3, 1)
    cube.position.x = 0;
    cube.position.y = -2;
    cube.position.z = 0;
    // 将立方体网格加入到场景中
    scene.add(cube);
    // 设置摄像机位置，并将其朝向场景中心(0, 0, 0)
    camera.position.x = 10;
    camera.position.y = 10;
    camera.position.z = 20;
    camera.lookAt(scene.position);
    // 将渲染器的输出（此处是 canvas 元素）插入到 body
    document.body.appendChild(renderer.domElement);
    // 渲染，即摄像头拍下此刻的场景
    renderer.render(scene, camera);
  }
  test() {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(90, 1 / 1, 1, 500);
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(400, 400);
    document.body.appendChild(renderer.domElement);
    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    var cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    camera.position.x = 1;
    camera.position.y = 2;
    camera.position.z = 5;
    var animate = function () {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      cube.rotation.z += 0.01;
      renderer.render(scene, camera);
    };
    renderer.render(scene, camera);
    // animate();
  }
  componentDidMount() {
    // this.test();
    this.initThree();
  }
  public render() {
    return <div className="three3D_main"></div>;
  }
}
export default Three3D;
