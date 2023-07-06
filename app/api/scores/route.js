import Score from "@/models/score";
import { connectToDB } from "@/utils/database";

export const POST = async (req) => {
  try {
    await connectToDB();
    const { studentId } = await req.json();
    const newScore = new Score({
      studentId,
      year: "",
      semester: "",
      chinese: "",
      math: "",
      english: "",
    });

    await newScore.save();
    return new Response(JSON.stringify(newScore), { status: 200 });
  } catch (error) {
    return new Response("新增失敗", { status: 500 });
  }
};

export const GET = async (req) => {
  try {
    await connectToDB();

    const { searchParams } = new URL(req.url);
    const studentId = searchParams.get("studentId");

    const score = await Score.find({ studentId });
    return new Response(JSON.stringify(score), { status: 200 });
  } catch (e) {
    return new Response("獲取分數失敗", { status: 500 });
  }
};

export const DELETE = async (req) => {
  try {
    await connectToDB();
    const { searchParams } = new URL(req.url);
    const deleteId = searchParams.get("deleteId");
    const deleteSingleScore = searchParams.get("delete");

    if (deleteId) {
      let deleteOne = await Score.deleteMany({ studentId: deleteId });
      return new Response(JSON.stringify(deleteOne), { status: 200 });
    }

    if (deleteSingleScore) {
      let deleteOne = await Score.deleteOne({ _id: deleteSingleScore });
      return new Response(JSON.stringify(deleteOne), { status: 200 });
    }
  } catch (e) {
    return new Response("刪除失敗", { status: 500 });
  }
};

export const PATCH = async (req) => {
  try {
    await connectToDB();
    const { scoreId, studentId, year, semester, chinese, math, english } =
      await req.json();
    const updatedScore = await Score.findByIdAndUpdate(
      scoreId,
      {
        year: year,
        semester: semester,
        chinese: chinese,
        math: math,
        english: english,
      },
      { new: true }
    );

    return new Response(JSON.stringify(updatedScore), { status: 200 });
  } catch (e) {
    return new Response("刪除失敗", { status: 500 });
  }
};
