import Calendar from "@/app/Component/Calendar";
import AppProvider from "@/app/store/provider";

const calendar = () => {
  return (
    <div>
      <AppProvider>
        <Calendar />
      </AppProvider>

    </div>
  );
};

export default calendar;
