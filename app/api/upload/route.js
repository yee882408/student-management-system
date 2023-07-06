import { connectToDB } from "@/utils/database";

export const POST = async (req, res) => {
  try {
    await connectToDB();

    // return new Response(JSON.stringify(path), { status: 200 });
  } catch (error) {
    return new Response("刪除失敗", { status: 500 });
  }
};
