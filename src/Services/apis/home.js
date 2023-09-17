import { get } from "../HttpMethods";

export const homeData = async (payload) => {
  console.log("apicalled");
  try {
    const response = await get("/all?fields=name,region,flag", null);
    return response;
  } catch (er) {
    return er;
  }
};
