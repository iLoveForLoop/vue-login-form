<script setup>
</script>

<template>
  <div class="container align-content-center p-5" style="height: 100vh">
    <div class="row bg-body-secondary p-5">
      <div class="col-6 p-5 bg-dark text-light">
        <h1 class="text-center">LOG IN</h1>
        <form action="">
          <div class="mb-3">
            <label for="email" class="form-label text-start">Email address</label>
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input
              type="password"
              class="form-control"
              id="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <div class="d-grid">
            <button type="submit" class="btn btn-primary">Login</button>
          </div>
          <div class="mt-3 text-center">
            <a href="#">Forgot password?</a>
          </div>
        </form>
      </div>
      <div class="col-6 bg-dark text-light p-5">
        <h1 class="text-center">SIGN UP</h1>
        <form action="">
          <div class="mb-3">
            <label for="email" class="form-label text-start">Email address</label>
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input
              type="password"
              class="form-control"
              id="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Confirm Password</label>
            <input
              type="password"
              class="form-control"
              id="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <div class="d-grid">
            <button type="submit" class="btn btn-primary">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>



<style>
</style>