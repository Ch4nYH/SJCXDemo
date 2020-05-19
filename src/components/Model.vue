<template>
    <div>
        <div class = "box">
            <div style="filter: blur(10px); width: 100%; height: 200px; position: absolute;"></div>
            <div style="margin-top: 10px; text-align: left;margin-left: 20px; color:#212C67; font-weight: 600; font-size: 20px;">Upload pics</div>
            <div class="upload">
                <p style="top: 40%; position: relative;">
                    Select from album
                </p>
            </div>
            <div style="margin-top: 20px;" >
            <b-button style="margin-right: 20px;">3D Model</b-button>
            <b-button variant="success">AR View</b-button>
            </div>
        </div>

        <div class="scene-container">

        </div>
    </div>
</template>
<script>
import * as THREE from 'three';
import $ from 'jquery'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";

export default {
    mounted() {
        this.init();
        this.animate();
    },
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
            this.objloader1 = new OBJLoader()
            this.mtlloader1.load("/assets/file.mtl", (materials1) => {
                console.log(materials1);
                this.objloader1.setMaterials(materials1);
                this.objloader1.load("/assets/file.obj", (obj) => {
                    console.log(obj);
                    obj.scale.set(0.005, 0.005, 0.005);
                    obj.traverse(function(child) {
                        child.castShadow = true;
                        child.receiveShadow = true;
                    });
                    this.scene.add(obj);
                    this.mesh1 = obj
                })
            })

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
            this.renderer.setSize($(".scene-container").width(), $(".scene-container").height());
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
            this.initScene_();
            this.initMisc();
            $(".scene-container").append(this.renderer.domElement);
            //window.addEventListener('resize', onWindowResize, false);
        }
    }
}
</script>