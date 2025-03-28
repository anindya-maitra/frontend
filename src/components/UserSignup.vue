<template>
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="card shadow-lg p-4">
            <h2 class="text-center">Sign Up</h2>
  
            <form @submit.prevent="handleSignup">
              <!-- Email -->
              <div class="mb-3">
                <label class="form-label">Email</label>
                <input type="email" class="form-control" v-model="form.email" required />
              </div>
  
              <!-- Full Name -->
              <div class="mb-3">
                <label class="form-label">Full Name</label>
                <input type="text" class="form-control" v-model="form.fullName" required />
              </div>
  
              <!-- Qualification -->
              <div class="mb-3">
                <label class="form-label">Qualification</label>
                <input type="text" class="form-control" v-model="form.qualification" required />
              </div>
  
              <!-- Date of Birth -->
              <div class="mb-3">
                <label class="form-label">Date of Birth</label>
                <input type="date" class="form-control" v-model="form.dob" required />
              </div>
  
              <!-- Password -->
              <div class="mb-3">
                <label class="form-label">Password</label>
                <input type="password" class="form-control" v-model="form.password" required />
              </div>
  
              <!-- Confirm Password -->
              <div class="mb-3">
                <label class="form-label">Confirm Password</label>
                <input type="password" class="form-control" v-model="form.confirmPassword" required />
              </div>
  
              <!-- Response Message -->
              <p v-if="responseMessage" :class="responseClass" class="text-center">
                {{ responseMessage }}
              </p>
  
              <!-- Submit Button -->
              <button type="submit" class="btn btn-primary w-100">Sign Up</button>
            </form>
  
            <!-- Navigate to Login -->
            <p class="text-center mt-3">
              Already have an account? <router-link to="/login">Login</router-link>
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
        form: {
          email: "",
          password: "",
          confirmPassword: "",
          fullName: "",
          qualification: "",
          dob: "",
        },
        responseMessage: "",
        responseClass: "",
      };
    },
    methods: {
      async handleSignup() {
        this.responseMessage = "";
  
        if (this.form.password !== this.form.confirmPassword) {
          this.responseMessage = "Passwords do not match!";
          this.responseClass = "text-danger";
          return;
        }
  
        try {
          const response = await axios.post("http://127.0.0.1:5000/signup", this.form);
  
          this.responseMessage = response.data.Message;
          this.responseClass = response.data.status === "201" ? "text-success" : "text-danger";
  
          if (response.data.status === "201") {
            setTimeout(() => {
              alert("Signup Successful! Please login.");
              this.$router.push("/login");
            }, 500);
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
  