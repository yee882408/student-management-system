import Student from "@/models/student";
import { connectToDB } from "@/utils/database";

export const GET = async (req) => {
  try {
    await connectToDB();
    const { searchParams } = new URL(req.url);
    const studentId = searchParams.get("studentId");
    let student = await Student.findOne({ _id: studentId });

    const refresh = searchParams.get("refresh");
    if (refresh) student = await Student.find({});

    return new Response(JSON.stringify(student), { status: 200 });
  } catch (error) {
    return new Response("數據獲取失敗", { status: 500 });
  }
};

export const POST = async (req) => {
  try {
    await connectToDB();
    const newStudent = new Student({
      sId: Math.floor(Math.random() * 100000),
      name: "新增學生",
      cellphone: "",
      emergencyPerson: "",
      emergencyPhone: "",
      idno: "",
      corAddress: "",
      phoneOne: "",
      phoneTwo: "",
      photo:
        "https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      regAddress: "",
    });

    await newStudent.save();
    return new Response(JSON.stringify(newStudent), { status: 200 });
  } catch (error) {
    return new Response("新增失敗", { status: 500 });
  }
};

export const PATCH = async (req) => {
  try {
    await connectToDB();
    const { image, id } = await req.json();

    const updatedStudent = await Student.findByIdAndUpdate(
      id,
      { photo: image },
      { new: true }
    );

    return new Response(JSON.stringify(updatedStudent), { status: 200 });
  } catch (e) {
    return new Response("儲存失敗", { status: 500 });
  }
};

export const DELETE = async (req) => {
  try {
    await connectToDB();
    const { searchParams } = new URL(req.url);
    const deleteId = searchParams.get("deleteId");

    const deleteOne = await Student.deleteOne({ _id: deleteId });
    return new Response(JSON.stringify(deleteOne), { status: 200 });
  } catch (e) {
    return new Response("刪除失敗", { status: 500 });
  }
};
