<template>
  <div>
    <!-- Navbar -->
    <!-- Navigation Bar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom shadow-sm p-1">
      <div class="container-fluid">
        <a class="navbar-brand fw-bold" href="#">Admin Dashboard</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav me-auto">
            <li class="nav-item"><router-link to="/admin/dashboard" class="nav-link">Home</router-link></li>
            <li class="nav-item"><router-link to="/admin/quizzes" class="nav-link">Quiz</router-link></li>
            <li class="nav-item"><router-link to="/admin/summary" class="nav-link">Summary</router-link></li>
            <li class="nav-item"><router-link to="/" class="nav-link">Logout</router-link></li>
          </ul>
          <span class="navbar-text fw-bold ms-auto">Welcome, Admin!</span>
        </div>
      </div>
    </nav>
    <!-- Dashboard Content -->
    <div class=" container mt-4">
      <h2>Welcome, {{ userName }}!</h2>
      <p>Your recent quiz performance is shown below:</p>

      <!-- Performance Summary -->
      <div class="row">
        <div class="col-md-4" v-for="(value, key) in stats" :key="key">
          <div class="card stat-card">
            <div class="card-body text-center">
              <h5 class="card-title">{{ key.replace(/([A-Z])/g, ' $1').trim() }}</h5>
              <p class="card-text display-4">{{ value }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Available Quizzes -->
      <h3 class="mt-5">Available Quizzes</h3>
      <div class="list-group">
        <div v-for="quiz in quizzes" :key="quiz.id"
          class="list-group-item d-flex justify-content-between align-items-center">
          <span>{{ quiz.difficultyLevel }} | Score: {{ quiz.totalScore }} | Time: {{ quiz.timeDuration }}</span>
          <button class="btn btn-primary btn-sm" @click="startQuiz(quiz.id)">Start Quiz</button>
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
      userId: null,
      userName: "",
      stats: {
        totalQuizzes: 0,
        highestScore: 0,
        averageScore: 0,
      },
      quizzes: [],
    };
  },
  created() {
    const userData = localStorage.getItem("user");
    if (userData) {
      const parsedUser = JSON.parse(userData);
      this.userId = parsedUser.id;
      this.userName = parsedUser.fullName;
      this.fetchUserDashboard();
    } else {
      this.$router.push("/login");
    }
  },
  methods: {
    async fetchUserDashboard() {
      try {
        const response = await axios.get(`http://127.0.0.1:5000/user/dashboard/${this.userId}`);
        const data = response.data;

        this.stats = {
          totalQuizzes: data.quizAttempted,
          highestScore: data.maxScored,
          averageScore: data.avgScored,
        };
        this.quizzes = data.quizList;
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    },
    startQuiz(quizId) {
      this.$router.push(`/quiz/${quizId}`);
    },
    logout() {
      localStorage.removeItem("user");
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
/* Dashboard styling */
.stat-card {
  background: #f8f9fa;
  border-left: 5px solid #007bff;
  padding: 10px;
}

.navbar {
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}
</style>
