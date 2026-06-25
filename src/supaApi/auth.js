import { supabase } from "../supaClient";

async function GetUser() {
  const { data, error } = await supabase.auth.getUser();
  if (error) {
    console.error("Error getting user:", error);
    return null;
  }
 
  return data.user;
}
async function GoogleOAuth(setMessage, setStatus) { 
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `${window.location.origin}/dashboard`,
    },
  });
  if (error) {
    console.error("Error with Google login:", error);
    setMessage("Error with Google login.");
    setStatus("Google login failed!");
  } else {
    setMessage("Google login successful! Redirecting...");
    setStatus("Google login successful!");
  }
}

async function LoginWithEmail(email, password, setMessage , setStatus) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  if (error) {
    console.error("Error logging in:", error);
    setMessage("Error logging in. " + (error.message || ""));
    setStatus("Login failed!");
  } else {
   
    setMessage("Login successful! Redirecting...");
    setStatus("Login successful!");
  }
}

async function SignUpwithEmail(email, password, username,setMessage, setStatus) {
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
      data: {
        name: username,
      },
    },
  });
  if (error) {
    console.error("Error signing up:", error);
    setMessage("Error " + (error.message || ""));
    setStatus("Sign up failed!");
  } else {
   
    setMessage("Sign up successful! Please Login to continue.");
    setStatus("Sign up successful!");
    setTimeout(() => {
      setMessage("");
    }, 3000);
  }
}
async function Logout() {
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.error("Error logging out:", error);
  } else {
    console.log("Logout successful");
  }
}
export { GoogleOAuth, LoginWithEmail, SignUpwithEmail, GetUser, Logout };
