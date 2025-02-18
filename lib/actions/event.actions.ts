"use server";

import { CreateEventParams } from "@/types";
import { handleError } from "../utils";
import { connectToDatabase } from "../database";
import User from "../database/models/user.model";
import Event from "../database/models/event.model";
import Category from "../database/models/category.model";

const populateEvent = async (query: any) => {
  return query
    .populate({
      path: "organiser",
      model: User,
      select: "_id firstName lastName",
    })
    .populate({ path: "category", model: Category, select: "_id  name" });
};

export const createEvent = async ({
  event,
  userId,
  path,
}: CreateEventParams) => {
  const trimmedUserId = userId.trim();

  try {
    await connectToDatabase();
    const organiser = User.findById(userId);
    if (!organiser) {
      throw new Error("Organiser not found");
    }

    const newEvent = await Event.create({
      ...event,
      category: event.categoryId,
      organiser: trimmedUserId,
    });

    return JSON.parse(JSON.stringify(newEvent));
  } catch (error) {
    handleError(error);
  }
};

export const getEvent = async () => {
  try {
    await connectToDatabase();
    const allEvents = await Event.find();
    return JSON.parse(JSON.stringify(allEvents));
  } catch (error) {
    handleError(error);
  }
};
export const getEventById = async (eventId: string) => {
  try {
    await connectToDatabase();
    const event = await populateEvent(Event.findById(eventId));
    if (!event) {
      throw new Error("Event not found");
    }
    return JSON.parse(JSON.stringify(event));
  } catch (error) {
    handleError(error);
  }
};
