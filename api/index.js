import fetch from 'isomorphic-fetch';

const api = {
  auth: {
    async signUp(form) {
      const user = {
        ...form,
        type: 'User',
        platform_origin: 'web',
      };

      const response = await fetch('/api/v1/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify(user),
      });

      if (response.status === 200) {
        const data = await response.json();
        return data.user;
      }
      const data = await response.json();
      throw new Error(data.messages[0]);
    },
  },
};

export default api;
