import Student from "@/models/student";
import { connectToDB } from "@/utils/database";

export const GET = async (req) => {
  try {
    await connectToDB();
    const { searchParams } = new URL(req.url);
    const searchInput = searchParams.get("search");

    let query = {};
    if (searchInput) {
      // 如果有輸入搜尋條件，則設定查詢物件
      query["$or"] = [
        { name: { $regex: searchInput, $options: "i" } },
        { sId: { $regex: searchInput, $options: "i" } },
      ];
    }

    const student = await Student.find(query);

    return new Response(JSON.stringify(student), { status: 200 });
  } catch (error) {
    return new Response("數據獲取失敗", { status: 500 });
  }
};
