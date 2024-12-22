<template>
  <div>
    <h1>{{this.greetingMsg}}:</h1>
    <ul>
      <li v-for="item in data" :key="item">
 <router-link :to="{ name: 'EditMood', params: { id: item.moodId } }">
          {{ item.moodId}} - {{ item.description }} - {{ item.createdAt }}
        </router-link>

</li>


    </ul>

    {{ errorMessage.value }}
  </div>
</template>

<script>
import axios from 'axios';
import { ref, onMounted } from 'vue';
export default {
  data() {
    return {
    //  data: [], // Array to hold data from MVC controller
      greetingMsg:""
    };
  },
setup(){
  const data = ref([]); 
  const errorMessage = ref("");

 // Fetch data from MVC controller when component is mounted
    onMounted(() => {
        fetchData();
        setInterval(fetchData, 5000);
    });
    const fetchData=()=>{
        axios.get('http://localhost:5076/api/API/GetMoods/') // Adjust URL as needed
                .then(response => {
                data.value = response.data; // Populate data with the response
                  console.info("Data", response.data);
                })
                .catch(error => {
                 // console.error('There was an error!', error);
                  errorMessage.value = error.message || "An error occurred!";
                });
    }

    return {
      data,
      errorMessage,
    };

},

  methods:{
    getGreeting() 
    {
        const hours = new Date().getHours(); // Get current hour (0-23)

        if (hours < 12) {
            return "Good Morning";
        } else if (hours < 18) {
            return "Good Afternoon";
        } else {
            return "Good Evening";
        }
        }
    }

};
</script>

<style scoped>
/* Your styles here */
</style>
