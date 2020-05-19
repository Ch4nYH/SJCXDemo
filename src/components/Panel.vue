<template>
    <div class="panel-container" @click="showModal">
        <b-img blank blank-color="#EEEEFF" width="175%" alt="placeholder" style="margin-top: 20px;"></b-img>
        <p style="text-align: left; margin-left: 15%;margin-top: 10px;">Name</p>
        <p style="text-align: right; margin-right: 15%;margin-top: 10px; font-size: 24px;">$99</p>
        <div>
        <b-modal :ref="'modal' + id" id="modal" title="Detailed Information" style="vertical-align: top;">
            <div class="my-4" :id="'three' + id" style="width: 200px; height: 200px;display: inline-block;">
            </div>
            <div style="height: 200px;width: auto; display: inline-block;">
                • 123 <br/>
                • 456 <br/>
            </div>
        </b-modal>
        </div>
    </div>
</template>

<style>
.panel-container {
    height: 300px;
    box-shadow: 0 0 5px #ccc;
    border-radius: 20px;
}
</style>

<script>

import * as THREE from 'three';
import $ from 'jquery'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
export default {
    props: ['url', "id"],
    data () {
        return {
            scene: new THREE.Scene(),
            mtlloader1: new MTLLoader(),
            objloader1: new OBJLoader(),
            camera: null,
            renderer: null, 
            clock: null,
            dirLight: null, 
            spotLight: null,
            cube: null, 
            mesh1: null,
        }
    },
    methods: {
        showModal () {
            this.$refs['modal' + this.id].show()
            this.$nextTick(() => {
                this.init();
                this.animate();   
            })
        },
        initScene_() {
            this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
            this.camera.position.set(0, 15, 35);
            this.scene = new THREE.Scene();
            // Lights
            this.scene.add(new THREE.AmbientLight(0x404040));
            this.spotLight = new THREE.SpotLight(0xffffff);
            this.spotLight.name = 'Spot Light';
            this.spotLight.angle = Math.PI / 5;
            this.spotLight.penumbra = 0.3;
            this.spotLight.position.set(10, 10, 5);
            this.spotLight.castShadow = true;
            this.spotLight.shadow.camera.near = 8;
            this.spotLight.shadow.camera.far = 30;
            this.spotLight.shadow.mapSize.width = 1024;
            this.spotLight.shadow.mapSize.height = 1024;
            this.scene.add(this.spotLight);
            //this.scene.add(new THREE.CameraHelper(this.spotLight.shadow.camera));
            this.dirLight = new THREE.DirectionalLight(0xffffff, 1);
            this.dirLight.name = 'Dir. Light';
            this.dirLight.position.set(0, 10, 0);
            this.dirLight.castShadow = true;
            this.dirLight.shadow.camera.near = 1;
            this.dirLight.shadow.camera.far = 10;
            this.dirLight.shadow.camera.right = 15;
            this.dirLight.shadow.camera.left = -15;
            this.dirLight.shadow.camera.top = 15;
            this.dirLight.shadow.camera.bottom = -15;
            this.dirLight.shadow.mapSize.width = 1024;
            this.dirLight.shadow.mapSize.height = 1024;
            this.scene.add(this.dirLight);
            //this.scene.add(new THREE.CameraHelper(this.dirLight.shadow.camera));
            // Geometry
            /*this.mtlloader1.load("/assets/file.mtl", function(materials1) {
                console.log(materials1);
                this.objloader1.setMaterials(materials1);
                this.objloader1.load("/assets/file.obj", function(obj) {
                    console.log(obj);
                    obj.scale.set(0.005, 0.005, 0.005);
                    obj.traverse(function(child) {
                        child.castShadow = true;
                        child.receiveShadow = true;
                    });
                    this.scene.add(obj);
                    this.mesh1 = obj
                })
            })*/

            this.geometry = new THREE.BoxBufferGeometry(10, 0.1, 10);
            this.material = new THREE.MeshPhongMaterial({
                color: 0xa0adaf,
                shininess: 150,
                specular: 0x111111
            });
            this.ground = new THREE.Mesh(this.geometry, this.material);
            this.ground.scale.multiplyScalar(3);
            this.ground.castShadow = false;
            this.ground.receiveShadow = true;
            this.scene.add(this.ground);
        },
        initMisc () {
            this.renderer = new THREE.WebGLRenderer({ antialias: true });
            this.renderer.setPixelRatio(window.devicePixelRatio);
            this.renderer.setSize($("#three" + this.id).width(), $("#three" + this.id).height());
            this.renderer.setClearColor(0x404040);
            this.renderer.shadowMap.enabled = true;
            this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
            // Mouse control
            this.controls = new OrbitControls(this.camera, this.renderer.domElement);
            this.controls.target.set(0, 2, 0);
            this.controls.update();
            this.clock = new THREE.Clock();
        },
        animate() {
            requestAnimationFrame(this.animate);
            this.render();
        },
        renderScene() {
            this.renderer.render(this.scene, this.camera);
        },
        render() {
            //var delta = this.clock.getDelta();
            this.renderScene();
        },
        init() {
            console.log("init")
            this.initScene_();
            this.initMisc();
            $("#three" + this.id).append(this.renderer.domElement);
            console.log($("#three" + this.id))
            //window.addEventListener('resize', onWindowResize, false);
        }
    }
}
</script>