"use server";

import { revalidatePath } from "next/cache";

import { connectToDatabase } from "@/lib/database";
import Event from "@/lib/database/models/event.model";
import User from "@/lib/database/models/user.model";
import Category from "@/lib/database/models/category.model";
import { handleError } from "@/lib/utils";

import {
  CreateEventParams,
  UpdateEventParams,
  DeleteEventParams,
  GetAllEventsParams,
  GetEventsByUserParams,
  GetRelatedEventsByCategoryParams,
} from "@/types";

const getCategoryByName = async (name: string) => {
  return Category.findOne({ name: { $regex: name, $options: "i" } });
};

const populateEvent = (query: any) => {
  return query
    .populate({
      path: "organiser",
      model: User,
      select: "_id firstName lastName",
    })
    .populate({ path: "category", model: Category, select: "_id name" });
};

// CREATE
export async function createEvent({ userId, event, path }: CreateEventParams) {
  try {
    await connectToDatabase();

    const organiser = await User.findById(userId);
    if (!organiser) throw new Error("organiser not found");

    const newEvent = await Event.create({
      ...event,
      category: event.categoryId,
      organiser: userId,
    });
    revalidatePath(path);

    return JSON.parse(JSON.stringify(newEvent));
  } catch (error) {
    handleError(error);
  }
}
