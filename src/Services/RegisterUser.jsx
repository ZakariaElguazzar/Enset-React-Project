export const RegisterUser = async (userData) => {
    try {
      // Fetch existing users to determine the next ID
      const usersResponse = await fetch("http://localhost:5000/users");
      const users = await usersResponse.json();
  
      // Get the highest ID and increment it
      const newId = users.length > 0 ? Math.max(...users.map((user) => user.id)) + 1 : 1;
  
      // Add the new user with the incremented ID
      const newUser = { id: newId, ...userData };
  
      const response = await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });
  
      if (!response.ok) {
        throw new Error("Failed to register user");
      }
  
      return await response.json();
    } catch (error) {
      console.error("Error registering user:", error);
      return null;
    }
  };
  