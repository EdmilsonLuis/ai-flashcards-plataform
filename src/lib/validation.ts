import { z } from "zod";

export const setSchema = z.object({
    title: z.string(),
    content: z.string(),
    userId: z.string(),
})

export type CreateSetFormType = z.infer<typeof setSchema>;
