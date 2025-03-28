<template>
    <div class="container mt-5">
      <h2 class="text-center">Welcome, {{ user.fullName }}</h2>
  
      <div class="card p-4 shadow">
        <h4>Your Profile</h4>
        <p><strong>Email:</strong> {{ user.email }}</p>
        <p><strong>Qualification:</strong> {{ user.qualification }}</p>
  
        <h4 class="mt-4">Quiz Performance</h4>
        <p><strong>Quizzes Attempted:</strong> {{ quizAttempted }}</p>
        <p><strong>Highest Score:</strong> {{ maxScored }}</p>
        <p><strong>Average Score:</strong> {{ avgScored }}</p>
  
        <h4 class="mt-4">Available Quizzes</h4>
        <ul class="list-group mt-3">
          <li v-for="quiz in quizList" :key="quiz.id" class="list-group-item">
            <strong>Quiz ID:</strong> {{ quiz.id }} |
            <strong>Chapter:</strong> {{ quiz.chapterId }} |
            <strong>Score:</strong> {{ quiz.totalScore }} |
            <strong>Duration:</strong> {{ quiz.timeDuration }} |
            <strong>Difficulty:</strong> {{ quiz.difficultyLevel }}
          </li>
        </ul>
  
        <button class="btn btn-danger w-100 mt-4" @click="logout">Logout</button>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    data() {
      return {
        user: {
          fullName: "",
          email: "",
          qualification: "",
        },
        quizAttempted: 0,
        maxScored: 0,
        avgScored: 0,
        quizList: [],
      };
    },
    mounted() {
        this.fetchUserDashboard();
    },
    methods: {
      async fetchUserDashboard() {
        const userId = this.$route.params.userId; // Extract userId from URL
        try {
          const response = await axios.get(`http://127.0.0.1:5000/user/dashboard/${userId}`);
          const data = response.data;
  
          this.quizAttempted = data.quizAttempted;
          this.maxScored = data.maxScored;
          this.avgScored = data.avgScored;
          this.quizList = data.quizList;
        } catch (error) {
          console.error("Error fetching user dashboard:", error);
        }
      },
      logout() {
        localStorage.removeItem("user");
        this.$router.push("/login");
      },
    },
  };
  </script>
  
  <style scoped>
  .card {
    border-radius: 12px;
    padding: 20px;
  }
  
  .list-group-item {
    background: #f8f9fa;
    margin: 5px 0;
    border-radius: 8px;
  }
  </style>
  