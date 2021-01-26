export const authenticate = async () => {
  const response = await window.fetch('/api/auth/', {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return await response.json();
};

export const login = async (email, password) => {
  const response = await window.fetch('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password
    })
  });
  return await response.json();
};

export const logout = async () => {
  const response = await window.fetch('/api/auth/logout', {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return await response.json();
};

export const signUp = async (username, email, password) => {
  const response = await window.fetch('/api/auth/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username,
      email,
      password
    })
  });
  return await response.json();
};
