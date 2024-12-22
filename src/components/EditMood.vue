<template>
  <div>
    <form @submit.prevent="updateRecord">
      <label for="description">Description:</label>
      <input
        type="text"
        id="description"
        v-model="UIDescription"
        maxlength="200"
        required
      />
      <button type="submit">Submit</button>
    </form>
    <span>{{ description }}</span>
    <p v-if="message" class="success">{{ message }}</p>
  </div>
</template>
<script>
import axios from "axios";
import { ref ,onMounted } from 'vue';
import { useRoute } from 'vue-router';
export default {
    name: 'EditMood',
  setup()
  {
    const route = useRoute(); // Access the route object
    const id = route.params.id; // Get the ID from the route params
    //const records = ref([]);
    const selectedRecord = ref({});
    const UIDescription = ref("");
    const message= ref([]);
console.info("start ");    
    onMounted(() => {

        const url="http://localhost:5076/api/API/GetMood?id="+id;

        axios.get(url).then((response) => {
console.info("Here2");
                const record = response.data;
console.info("record:" , record);
                console.info("XXXX " , record);
                UIDescription.value = record.description;
                selectedRecord.value = { ...record};
            })
            .catch((error) => {
                console.error("Error fetching record:", error);
                message.value = error;
            }); 
    
            
    });
    const updateRecord = () => {
        axios   
            .put(`http://localhost:5076/Moods/Edit/${this.record.id}`, this.record)
            .then((response) => {
                console.log(response.data);
                this.message = "Record updated successfully!";
            })
            .catch((error) => {
            console.error("Error updating record:", error);
            });
    };
  
    return {        
        selectedRecord,
        updateRecord,
        UIDescription
    };
  },
};
</script>
<style>
form {
  margin: 20px 0;
}
form div {
  margin-bottom: 10px;
}
button {
  padding: 5px 10px;
}
</style>
