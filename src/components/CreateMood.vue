<template>
  <div>
    <form @submit.prevent="submitForm">
      <label for="description">Description:</label>
      <input
        type="text"
        id="description"
        v-model="description"
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

export default {
  data() {
    return {
      description: "",
      message: "",
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await axios.post(
          "http://localhost:5076/api/API/CreateMood/",
          {
            description: this.description,
          }
        );
        if (response.status === 200) {
          this.message = "Description submitted successfully!";
          this.description = ""; // Reset form
        }
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    },
  },
};
</script>

<style scoped>
.success {
  color: green;
  margin-top: 10px;
}
</style>
