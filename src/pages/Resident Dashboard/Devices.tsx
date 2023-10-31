import Header from "@/components/ui/Header";
import Sidebar from "@/components/ui/Sidebar";

export default function Devices() {
  return (
    <div className="flex">
      <Sidebar></Sidebar>
      <div className="w-4/5 h-screen overflow-y-auto">
        <Header title="Devices" />
        <main></main>
      </div>
    </div>
  );
}
