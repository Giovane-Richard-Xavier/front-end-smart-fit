import { ISmartFitList } from "@/types/smartFitUnit";
import axios from "axios";

const req = axios.create({
  baseURL: "https://test-frontend-developer.s3.amazonaws.com/data",
});

export const getAllSmartFit = async (): Promise<ISmartFitList> => {
  try {
    const result = await req.get(`/locations.json`);
    return result.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
