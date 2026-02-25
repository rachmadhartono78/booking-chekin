"use server";

import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

export async function signUp(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!email || !password) {
    return { error: "Email and password are required" };
  }

  try {
    // Basic user creation (Note: In a real app, you MUST hash the password)
    await prisma.user.create({
      data: {
        name,
        email,
        password, // TODO: Hash this password before storing it
      },
    });
  } catch (error: any) {
    if (error.code === 'P2002') {
      return { error: "Email already exists" };
    }
    return { error: "Something went wrong" };
  }

  redirect("/login");
}
