<template>
    <v-form
        ref="form"
        v-model="valid"
        lazy-validation
    >
        <v-container>
            <v-layout>
                <v-flex
                    xs12
                    md4
                >
                    <task
                        v-for="(item, index) in tasks"
                        :key="item.id"
                        :task="item"
                        :index="index"
                        v-on:changeValue="newValue"
                    ></task>
                    <v-btn
                        :disabled="!valid"
                        color="success"
                        @click="validate"
                    >
                        Сохранить
                    </v-btn>
                </v-flex>
                <v-flex
                    xs12
                    md4
                >
                    <h2>Состояние store</h2>
                    <div
                        v-for="(item) in tasks"
                        :key="item.id"
                    >{{item.val}}</div>
                </v-flex>
            </v-layout>
        </v-container>

    </v-form>
</template>

<script>
import {tasks} from '../api/tasks'
import task from './task'

export default {
    name: "layout",
    components: {
        task
    },
    data() {
        return {
            valid: false
        }
    },
    mounted() {
        this.$store.dispatch('newTasks', JSON.parse(tasks));
    },
    computed: {
        tasks: function() {
            return this.$store.getters.tasks;
        }
    },
    methods: {
        newValue(e, index) {
            let arr = [e, index];
            this.$store.dispatch('changeTasks', arr);
        },
        validate () {
            if (this.$refs.form.validate()) {
                console.log('состояние store', this.$store.getters.tasks);
            }
        },
    }

}
</script>

<style scoped>

</style>
