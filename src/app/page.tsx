import { Button } from "@/components/ui/button";
import PeopleTable from "./table/page";
import NewUserButton from "@/components/addUserComponent";

export default function Home() {
  return (
    <div>
      <NewUserButton></NewUserButton>
      <Button>IMPORT BUTTON</Button>
      <div>
        <PeopleTable></PeopleTable>
      </div>
    </div>
  )
}
