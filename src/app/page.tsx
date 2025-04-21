import PeopleTable from "../components/usersTableComponent";
import NewUserButton from "@/components/addUserComponent";
import ImportButton from "@/components/importFromExelComponent";

export default function Home() {
  return (
    <div>
      <NewUserButton></NewUserButton>
      <ImportButton></ImportButton>
      <div>
        <PeopleTable></PeopleTable>
      </div>
    </div>
  )
}
