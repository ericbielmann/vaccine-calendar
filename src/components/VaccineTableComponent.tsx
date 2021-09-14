// import React from "react";
// import "./VaccineTableComponent.scss";

// const vaccines = ["HepB", "Rotavirus*"];
// const ageRanges = ["BIRTH", "1 MONTH", "2 MONTHS"];

// const VaccineTableComponent = () => {
//   return (
//     <section role="table">
//       <div>Vaccines</div>
//       {ageRanges.map((age) => (
//         <div>{age}</div>
//       ))}
//     </section>
//   );
// };

// export default VaccineTableComponent;

import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { getAgeRange, getApplications, getVaccines } from "../api/VaccineAPI";
import { Dimmer, Loader, Segment } from "semantic-ui-react";
import { lighten } from "polished";

const Table = styled.div(({ ageRangeCount }: any) => ({
  display: "grid",
  gridTemplateColumns: `repeat(${ageRangeCount + 1}, 1fr)`,
}));

const VaccineName = styled.div(({ vaccineName }: any) => ({
  gridColumnStart: 1,
}));

const Dose = styled.div(({ from, to, vaccineIndex, color }: any) => ({
  gridColumnStart: from,
  gridColumnEnd: to,
  gridRowStart: vaccineIndex,
  display: "grid",
  margin: "0 8px",
  gridTemplateColumns: `repeat(${to - from}, 1fr)`,
  background: lighten(0.2)(color),
  borderRadius: "5rem",
}));

const DoseName = styled.div(({ color }: any) => ({
  background: color,
  whiteSpace: "nowrap",
  padding: "0 16px",
  borderRadius: "5rem",
  display: "grid",
  justifyContent: "center",
  alignItems: "center",
}));

const VaccineTableComponent = () => {
  const [vaccines, setVaccines] = useState<any>([]);
  const [ageRanges, setAgeRanges] = useState<any>([]);
  const [applications, setApplication] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const init = async () => {
      const [vaccines, ageRange, applications] = await Promise.all([
        getVaccines(),
        getAgeRange(),
        getApplications(),
      ]);

      setVaccines(vaccines);
      setAgeRanges(ageRange);
      setApplication(applications);

      setLoading(false);
    };

    init();
  }, []);

  const getVaccineRow = (vaccine: string): number =>
    vaccines.findIndex((vac: any) => vac === vaccine);

  const getAgeColumn = (age: string): number =>
    ageRanges.findIndex((ag: any) => ag === age);
  return (
    <>
      {loading ? (
        <Segment style={{ height: "100vh" }}>
          <Dimmer active>
            <Loader content="loading" />
          </Dimmer>
        </Segment>
      ) : (
        <Table ageRangeCount={ageRanges.length}>
          <div>vaccine</div>

          {ageRanges.map((ageRange: any) => (
            <div>{ageRange}</div>
          ))}

          {vaccines.map((vaccine: any) => (
            <VaccineName key={vaccine}>{vaccine}</VaccineName>
          ))}

          {applications.map((application: any) => {
            const vaccineIndex = getVaccineRow(application.vaccine) + 2; // +2 because findIndex is 0 indexed and we also dont want to overlap the header

            return application.dosis.map((dose: any) => {
              const from = getAgeColumn(dose.from) + 2; // +2 because findIndex is 0 indexed and we dont want to overlap the vaccine name
              const to = getAgeColumn(dose.to) + 3; // +3 because all of the above and we want this to end at the right track of the grid cell
              return (
                <Dose
                  key={dose.name}
                  vaccineIndex={vaccineIndex}
                  from={from}
                  to={to}
                  color={application.color}
                >
                  <DoseName color={application.color}>{dose.name}</DoseName>
                </Dose>
              );
            });
          })}
        </Table>
      )}
    </>
  );
};

export default VaccineTableComponent;
