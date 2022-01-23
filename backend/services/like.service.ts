import type { IType } from "../types/types.ts";
import { Model } from "../deps.ts";
import * as likeRepo from "../repositories/like.repository.ts";

export const get = async (userId: number): Promise<Model | Model[]> => await likeRepo.getUserLikes(userId);

export const create = async (like: IType) => await likeRepo.create(like);
