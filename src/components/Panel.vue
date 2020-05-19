<template>
    <div class="panel-container" @click="showModal">
        <b-img blank blank-color="#EEEEFF" width="175%" alt="placeholder" style="margin-top: 20px;"></b-img>
        <p style="text-align: left; margin-left: 15%;margin-top: 10px;">Name</p>
        <p style="text-align: right; margin-right: 15%;margin-top: 10px; font-size: 24px;">$99</p>
        <div>
        <b-modal :ref="'modal' + id" id="modal" title="BootstrapVue">
            <p class="my-4">Hello from modal!</p>
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
export default {
    props: ['url', "id"],
    methods: {
        showModal () {
            this.$refs['modal' + this.id].show()
        }
    }
}
</script>