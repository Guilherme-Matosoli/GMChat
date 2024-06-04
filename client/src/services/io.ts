import { io } from "socket.io-client";

const apiUrl = process.env.NEXT_PUBLIC_API_URL as string;
export const socket = io(apiUrl);
