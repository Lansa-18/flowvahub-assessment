// AUTHENTICATION.

import { supabase } from "./supabase";

interface credentials {
  email: string;
  password: string;
}

export async function signupApi({ email, password }: credentials) {
  const avatarstring = email.slice(0, 1);

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${window.location.origin}/login`,
      data: {
        userName: "Guest User",
        avatar: avatarstring,
      },
    },
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function loginApi({ email, password }: credentials) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  console.log(data);

  return data;
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();

  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  return data?.user;
}

export async function signInWithGoogle() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: 'https://flowvahub-assessment-vite.vercel.app/auth/callback',
    },
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function logoutApi() {
  const { error } = await supabase.auth.signOut();

  if (error) throw new Error(error.message);
}
