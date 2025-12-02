<template>
    <div>-----------------------------------</div>
    <div class="text">This is section {{ sectionID }} of Page {{ pageID }} </div>
</template>

<script>
export default {
    name: 'SectionComponent',
    computed: {
        sectionID() {
            const sectionID = this.$route.params.sectionId;
            return Number(sectionID);
        },
    },
    props: {
        pageID: {
            type: [String, Number],
            required: true,
        }
    },
}
</script>

<style scoped>
.text {
    margin-top: 30px;
    font-size: 18px;
}

</style>
