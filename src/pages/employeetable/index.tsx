import EmployeeTable from "@/app/Component/EmployeeTable/EmployeeTable";
import AppProvider from "@/app/store/provider";
import { Main } from "next/document";
const employeetable = () => {
  return (
    <div>
      <AppProvider>
        <EmployeeTable />
      </AppProvider>
    </div>
  );
};

export default employeetable;
