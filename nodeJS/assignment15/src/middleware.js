import multer from "multer";

export const uploadFileMiddleware = multer({ dest: "uploads/" });
