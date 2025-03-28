<template>
    <div>
      <!-- Hero Section -->
      <header class="hero text-white text-center">
        <div class="overlay"></div>
        <div class="container">
          <h1 class="display-4">Welcome to Quiz Master</h1>
          <p class="lead">Test your knowledge with engaging quizzes!</p>
          <router-link to="/signup" class="btn btn-warning btn-lg">Get Started</router-link>
        </div>
      </header>
  
      <!-- Features Section -->
      <section class="container my-5 text-center">
        <h2 class="mb-4">Why Choose Quiz Master?</h2>
        <div class="row">
          <div class="col-md-4">
            <i class="fas fa-brain fa-3x mb-3 text-primary"></i>
            <h4>Interactive Quizzes</h4>
            <p>Challenge yourself with quizzes across various topics.</p>
          </div>
          <div class="col-md-4">
            <i class="fas fa-trophy fa-3x mb-3 text-warning"></i>
            <h4>Track Your Progress</h4>
            <p>Keep track of your scores and improve over time.</p>
          </div>
          <div class="col-md-4">
            <i class="fas fa-users fa-3x mb-3 text-success"></i>
            <h4>Compete with Friends</h4>
            <p>Compare scores and challenge your friends to quizzes.</p>
          </div>
        </div>
      </section>
  
      <!-- Call to Action -->
      <section class="cta text-white text-center">
        <div class="container">
          <h2>Join Now and Start Your Quiz Journey!</h2>
          <div class="btn-group">
            <router-link to="/signup" class="btn btn-primary btn-lg">Sign Up</router-link>
            <router-link to="/login" class="btn btn-outline-light btn-lg">Login</router-link>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style scoped>
  /* Hero Section with Background */
  .hero {
    position: relative;
    background: url("@/assets/quiz-background.jpg") center/cover no-repeat;
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.7);
  }
  
  /* Dark Overlay for Visibility */
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }
  
  /* Ensure Content is Above Overlay */
  .container {
    position: relative;
    z-index: 1;
  }
  
  /* Button Styling */
  .btn-warning {
    background: #ff9800;
    border: none;
    color: white;
  }
  
  .btn-warning:hover {
    background: #e68900;
  }
  
  .btn-primary {
    background: #007bff;
    border: none;
    color: white;
  }
  
  .btn-primary:hover {
    background: #0056b3;
  }
  
  .btn-outline-light {
    border: 2px solid white;
    color: white;
  }
  
  .btn-outline-light:hover {
    background: white;
    color: #007bff;
  }
  
  /* Call to Action Section */
  .cta {
    background: #007bff;
    padding: 50px 0;
  }
  </style>
  