"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createBooking(formData: FormData) {
  const userId = parseInt(formData.get("userId") as string);
  const locationId = parseInt(formData.get("locationId") as string);
  const startTime = new Date(formData.get("startTime") as string);
  const endTime = new Date(formData.get("endTime") as string);

  if (isNaN(userId) || isNaN(locationId) || isNaN(startTime.getTime()) || isNaN(endTime.getTime())) {
    return { error: "User, Location, and valid Time range are required" };
  }

  try {
    const booking = await (prisma as any).booking.create({
      data: {
        userId,
        locationId,
        startTime,
        endTime,
        status: "PENDING",
      },
    });
    revalidatePath("/dashboard/bookings");
    return { success: true, bookingId: booking.id };
  } catch (error) {
    return { error: "Failed to create booking" };
  }
}

export async function getBookings(filters?: { userId?: number; status?: any }) {
  try {
    return await (prisma as any).booking.findMany({
      where: filters,
      include: {
        location: true,
        user: true,
      },
      orderBy: { createdAt: "desc" },
    });
  } catch (error) {
    console.error("Failed to fetch bookings:", error);
    return [];
  }
}

export async function updateBookingStatus(id: number, status: any) {
  try {
    await (prisma as any).booking.update({
      where: { id },
      data: { status },
    });
    revalidatePath("/dashboard/bookings");
    revalidatePath("/dashboard");
    return { success: true };
  } catch (error) {
    return { error: "Failed to update booking status" };
  }
}

export async function deleteBooking(id: number) {
  try {
    await (prisma as any).booking.delete({
      where: { id },
    });
    revalidatePath("/dashboard/bookings");
    return { success: true };
  } catch (error) {
    return { error: "Failed to delete booking" };
  }
}
