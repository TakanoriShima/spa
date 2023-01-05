<script setup>
import { defineProps, reactive, onMounted } from "vue";
const props = defineProps({
  taskId: String
})

const data = reactive({
    task: {},
});

const getTasks = () => {
    axios.get('/api/tasks/' + props.taskId)
    .then((res) => {
        console.log(res.data);
        data.task = res.data;
    });
};

onMounted(() => {
    getTasks();
});
</script>
<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-sm-6">
                <form>
                    <div class="form-group row border-bottom">
                        <label for="id" class="col-sm-3 col-form-label">ID</label>
                        <input type="text" class="col-sm-9 form-control-plaintext" readonly id="id"
                        v-model="data.task.id">
                    </div>
                    <div class="form-group row border-bottom">
                        <label for="title" class="col-sm-3 col-form-label">Title</label>
                        <input type="text" class="col-sm-9 form-control-plaintext" readonly id="title"
                        v-model="data.task.title">
                    </div>
                    <div class="form-group row border-bottom">
                        <label for="content" class="col-sm-3 col-form-label">Content</label>
                        <input type="text" class="col-sm-9 form-control-plaintext" readonly id="content"
                        v-model="data.task.content">
                    </div>
                    <div class="form-group row border-bottom">
                        <label for="person-in-charge" class="col-sm-3 col-form-label">Person In Charge</label>
                        <input type="text" class="col-sm-9 form-control-plaintext" readonly id="person-in-charge"
                        v-model="data.task.person_in_charge">
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
</script>