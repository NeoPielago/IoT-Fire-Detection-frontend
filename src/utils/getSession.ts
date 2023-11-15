export const getSession = async (
  token: string | null = null
): Promise<UserData | null> => {
  try {
    const sessionData = await fetch(
      "http://localhost:3000/api/user/getSession",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!sessionData.ok) {
      // Handle non-OK responses (e.g., 401 unauthorized)
      console.error("Invalid session:", sessionData.status);

      return null;
    }

    const userData: UserData = await sessionData.json();
    return userData;
  } catch (error) {
    // Handle any other errors
    console.error("Error retrieving session:", error);
    return null;
  }
};

interface UserData {
  status: number;
  userId: string;
  firstName: string;
  lastName: string;
  role: string;
  email: string;
  session: boolean;
}
