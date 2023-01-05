<script setup>
import { defineProps, reactive, onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter()

const props = defineProps({
  taskId: String
})

const data = reactive({
    task: {},
});

const getTask = () => {
    axios.get('/api/tasks/' + props.taskId)
    .then((res) => {
        data.task = res.data;
        console.log(data.task)
    });
}
const submit = () => {
    axios.put('/api/tasks/' + props.taskId, data.task)
    .then((res) => {
        router.push({name: 'task.list'})
    });
}
onMounted(() => {
    getTask();
});
</script>
<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-sm-6">
                <form v-on:submit.prevent="submit">
                    <div class="form-group row">
                        <label for="id" class="col-sm-3 col-form-label">ID</label>
                        <input type="text" class="col-sm-9 form-control-plaintext" readonly id="id" v-model="data.task.id">
                    </div>
                    <div class="form-group row">
                        <label for="title" class="col-sm-3 col-form-label">Title</label>
                        <input type="text" class="col-sm-9 form-control" id="title" v-model="data.task.title">
                    </div>
                    <div class="form-group row">
                        <label for="content" class="col-sm-3 col-form-label">Content</label>
                        <input type="text" class="col-sm-9 form-control" id="content" v-model="data.task.content">
                    </div>
                    <div class="form-group row">
                        <label for="person-in-charge" class="col-sm-3 col-form-label">Person In Charge</label>
                        <input type="text" class="col-sm-9 form-control" id="person-in-charge" v-model="data.task.person_in_charge">
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped>
    
</style>