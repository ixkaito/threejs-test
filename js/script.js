(function() {
  // console.log('test');
  var width = 500;
  var height = 300;

  // scene
  var scene = new THREE.Scene();

  // mesh
  var geometry = new THREE.BoxGeometry(50, 50, 50);
  // var material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
  var material = new THREE.MeshLambertMaterial({ color: 0xff0000 });
  var cube = new THREE.Mesh(geometry, material);
  cube.position.set(0, 0, 0); // rotate, scale
  scene.add(cube);

  // light
  var light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(0, 100, 30);
  scene.add(light);
  var ambient = new THREE.AmbientLight(0x550000);
  scene.add(ambient);

  // camera
  var camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);
  // camera.position.set(0, 0, 0);
  // camera.position.x = 0;
  // camera.position = new THREE.Vector3(0, 0, 0);
  camera.position.set(200, 100, 500);
  camera.lookAt(cube.position);

  // rendering
  var renderer = new THREE.WebGLRenderer();
  renderer.setSize(width, height);
  renderer.setClearColor(0xeeeeee, 1);
  document.getElementById('stage').appendChild(renderer.domElement);
  renderer.render(scene, camera);

})();
