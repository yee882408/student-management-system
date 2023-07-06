import Left from "../components/Left";
import Right from "../components/Right";

export default function Home() {
  return (
    <div className="flex h-screen flex-row">
      <Left />
      <Right />
    </div>
  );
}
