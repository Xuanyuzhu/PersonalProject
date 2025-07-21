// js/app.js
document.addEventListener('DOMContentLoaded', () => {
  // —— SIGN UP —— 
  const signupForm    = document.getElementById('signupForm');
  const signupMessage = document.getElementById('signupMessage');
  if (signupForm) {
    signupForm.addEventListener('submit', async e => {
      e.preventDefault();
      signupMessage.textContent = '';
      const data = {
        name:  e.target.name.value.trim(),
        email: e.target.email.value.trim()
      };
      console.log(data);
      try {
        const res = await fetch('https://backend-747060403741.us-central1.run.app', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });
        const result = await res.json();
        if (!res.ok) throw new Error(result.error || 'Signup failed');
        signupMessage.style.color = 'green';
        signupMessage.textContent = result.message || '✅ Signed up!';
        signupForm.reset();
      } catch (err) {
        signupMessage.style.color = 'red';
        signupMessage.textContent = `❌ ${err.message}`;
        console.error(err);
      }
    });
  }

  // —— LOGIN —— 
  const loginForm    = document.getElementById('loginForm');
  const loginMessage = document.getElementById('loginMessage');
  if (loginForm) {
    loginForm.addEventListener('submit', async e => {
      e.preventDefault();
      loginMessage.textContent = '';
      const data = {
        username: e.target.username.value.trim(),
        password: e.target.password.value
      };
      try {
        // const res    = await fetch('/api/auth/login', {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify(data)
        // });
        const res = await fetch('http://localhost:5000/api/subscribe', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });
        const result = await res.json();
        if (!res.ok) throw new Error(result.error || 'Login failed');
        loginMessage.style.color = 'green';
        loginMessage.textContent = '✅ Login successful!';
        // 如使用 JWT，可保存到 localStorage
        // localStorage.setItem('token', result.token);
        loginForm.reset();
      } catch (err) {
        loginMessage.style.color = 'red';
        loginMessage.textContent = `❌ ${err.message}`;
        console.error(err);
      }
    });
  }
});
