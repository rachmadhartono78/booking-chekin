"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function getLocations() {
  try {
    return await (prisma as any).location.findMany({
      orderBy: { createdAt: "desc" },
    });
  } catch (error) {
    console.error("Failed to fetch locations:", error);
    return [];
  }
}

export async function createLocation(formData: FormData) {
  const name = formData.get("name") as string;
  const address = formData.get("address") as string;
  const capacity = parseInt(formData.get("capacity") as string);
  const description = formData.get("description") as string;

  if (!name || !address || isNaN(capacity)) {
    return { error: "Name, address, and valid capacity are required" };
  }

  try {
    await (prisma as any).location.create({
      data: {
        name,
        address,
        capacity,
        description,
      },
    });
    revalidatePath("/dashboard/locations");
    return { success: true };
  } catch (error) {
    return { error: "Failed to create location" };
  }
}

export async function updateLocation(id: number, formData: FormData) {
  const name = formData.get("name") as string;
  const address = formData.get("address") as string;
  const capacity = parseInt(formData.get("capacity") as string);
  const description = formData.get("description") as string;

  try {
    await (prisma as any).location.update({
      where: { id },
      data: {
        name,
        address,
        capacity,
        description,
      },
    });
    revalidatePath("/dashboard/locations");
    return { success: true };
  } catch (error) {
    return { error: "Failed to update location" };
  }
}

export async function deleteLocation(id: number) {
  try {
    await (prisma as any).location.delete({
      where: { id },
    });
    revalidatePath("/dashboard/locations");
    return { success: true };
  } catch (error) {
    return { error: "Failed to delete location" };
  }
}
