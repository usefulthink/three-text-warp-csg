class Base {
  constructor() {
    this.initRenderer();
    this.initScene();
    this.initCamera();
  }

  update(time) {
    this.controls.update();
  }

  render() {
    this.renderer.render(this.scene, this.camera);
  }

  initRenderer() {
    this.renderer = new THREE.WebGLRenderer({alpha: true, antialias: true});
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setClearColor(0x000000, 1);

    document.body.appendChild(this.renderer.domElement);
  }

  initScene() {
    this.scene = new THREE.Scene();
    window.scene = this.scene;

    const dirLight = new THREE.DirectionalLight();
    dirLight.position.set(0.2, 1, 0.5);
    this.scene.add(dirLight, new THREE.AmbientLight(0x444444));

    this.scene.add(new THREE.GridHelper(50, 1));
    this.scene.add(new THREE.AxisHelper(2));
  }

  initCamera() {
    this.camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000);
    this.controls = new THREE.OrbitControls(this.camera);

    this.camera.position.set(10, 10, 10);
    this.camera.lookAt(new THREE.Vector3(0, 0, 0));
  }
}

window.Base = Base;