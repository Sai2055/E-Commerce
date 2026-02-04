import axios from "axios";
import { Api_key } from "../../../constants/ApiKey";

export default async function getCategories() {
  const categoryResponse = await axios.get(
    "https://ohwdqklamwslzrhgkvup.supabase.co/rest/v1/categories",
    {
      headers: {
        apikey: Api_key,
        Authorization: `Bearer ${Api_key}`,
      },
    }
  );
  return categoryResponse.data;
}
