<template>
    <div style="position: absolute; top: 100px; background-color: white;left:0; right: 0; min-height: 500px;padding-top: 20px;">
        <b-container>
            <b-row>
                <b-col>
                    <Panel id="1"></Panel>
                </b-col>
                <b-col>
                    <Panel id="2"></Panel>
                </b-col>
            </b-row>
            <b-row style="padding-top: 20px;">
                <b-col>
                    <Panel id="3"></Panel>
                </b-col>
                <b-col>
                    <Panel id="4"></Panel>
                </b-col>
            </b-row>
            <b-row style="padding-top: 20px;">
                <b-col>
                    <Panel id="5"></Panel>
                </b-col>
                <b-col>
                    <Panel id="6"></Panel>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import Panel from './Panel'
    export default {
        components: {
            Panel
        }
    }
</script>
