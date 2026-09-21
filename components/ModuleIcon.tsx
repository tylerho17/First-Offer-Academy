import type { ModuleIcon as Name } from "@/content/programOverview";
import { Book, Chart, IdCard, Mail, Mic, Users } from "./Icons";

const icons: Record<Name, React.ReactNode> = {
  id: <IdCard />,
  mail: <Mail />,
  book: <Book />,
  chart: <Chart />,
  mic: <Mic />,
  users: <Users />,
};

export default function ModuleIcon({ name }: { name: Name }) {
  return <>{icons[name]}</>;
}
