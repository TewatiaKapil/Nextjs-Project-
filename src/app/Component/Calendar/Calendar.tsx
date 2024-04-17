'use client'
import * as React from 'react';
import "../../../../node_modules/@syncfusion/ej2-base/styles/material.css";
import "../../../../node_modules/@syncfusion/ej2-buttons/styles/material.css";
import "../../../../node_modules/@syncfusion/ej2-calendars/styles/material.css";
import "../../../../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
import "../../../../node_modules/@syncfusion/ej2-inputs/styles/material.css";
import "../../../../node_modules/@syncfusion/ej2-navigations/styles/material.css";
import "../../../../node_modules/@syncfusion/ej2-popups/styles/material.css";
import "../../../../node_modules/@syncfusion/ej2-react-schedule/styles/material.css";
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';
import { Button } from '@mui/material';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Calendar = () => {
  const router = useRouter();
  const data = [
    {
      Id: 1,
      Subject: 'Meeting',
      StartTime: new Date(2023, 1, 15, 10, 0),
      EndTime: new Date(2023, 1, 15, 12, 30),
    },
  ];


  const handleBack = () => {
    router.back()
  }

  return (
    <div>
      <h4>
        Calendar Added
      </h4>
      <Link href={"/"}>
      {/* <Button
        variant="contained"
        onClick={handleBack}
      >
        Back
      </Button> */}
      back
      </Link>
     

      <ScheduleComponent
        selectedDate={new Date(2023, 1, 15)}
        eventSettings={{
          dataSource: data,
        }}
      >
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
      </ScheduleComponent>
    </div>
  )
};
export default Calendar;
