<template>
    <v-text-field
        v-model="name"
        :rules="nameRules"
        :counter="10"
        :label="task.name"
        :placeholder="task.val"
        required
        @change="changeValue"
    ></v-text-field>
</template>

<script>
    export default {
        name: "task",
        props: ['task', 'index'],
        data() {
            return {
                name: '',
                nameRules: [
                    v => !!v || 'Введите значение ...',
                    v => v.length <= 10 || 'Значение должно быть меньше 10 знаков!'
                ]
            }
        },
        methods:  {
            changeValue(e) {
                this.$emit('changeValue', e, this.index);
            }
        }
    }
</script>

<style scoped>

</style>
