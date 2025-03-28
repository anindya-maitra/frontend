<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card shadow-lg p-4">
          <h2 class="text-center">Login</h2>

          <form @submit.prevent="handleLogin">
            <!-- Email -->
            <div class="mb-3">
              <label class="form-label">Email</label>
              <input type="email" class="form-control" v-model="email" required />
            </div>

            <!-- Password -->
            <div class="mb-3">
              <label class="form-label">Password</label>
              <input type="password" class="form-control" v-model="password" required />
            </div>

            <!-- Response Message -->
            <p v-if="responseMessage" :class="responseClass" class="text-center">
              {{ responseMessage }}
            </p>

            <!-- Submit Button -->
            <button type="submit" class="btn btn-primary w-100">Login</button>
          </form>

          <!-- Navigate to Signup -->
          <p class="text-center mt-3">
            Don't have an account? <router-link to="/signup">Sign up</router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      email: "",
      password: "",
      responseMessage: "",
      responseClass: "",
    };
  },
  methods: {
    async handleLogin() {
      this.responseMessage = "";
      try {
        const response = await axios.post("http://127.0.0.1:5000/login", {
          email: this.email,
          password: this.password,
        });

        this.responseMessage = response.data.Message;
        this.responseClass = response.data.status === "200" ? "text-success" : "text-danger";

        if (response.data.status === "200") {
          setTimeout(() => {
            alert("Login Successful!");
            this.$router.push("/user/dashboard")
            // Redirect to another page if needed
            // this.$router.push("/dashboard");
          }, 5);
        }
      } catch (error) {
        this.responseMessage = "An error occurred!";
        this.responseClass = "text-danger";
      }
    },
  },
};
</script>

<style scoped>
.card {
  border-radius: 12px;
  padding: 20px;
}
</style>
