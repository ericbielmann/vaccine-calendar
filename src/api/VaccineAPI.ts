export const getVaccines = () => {
  return Promise.resolve(["HepB", "Rotavirus*", "DTaP", "Hib", "Pneumococcal", "Polio", "Influenza (flu)**", "MMR", "Varicela (Chickenpox)", "HepA***"]);
};

export const getApplications = () => {
  return Promise.resolve([
    {
      vaccine: "HepB",
      color: "#FF6F52",
      dosis: [
        { name: "1st dose", from: "BIRTH", to: "BIRTH" },
        { name: "2nd dose", from: "1MONTH", to: "2MONTHS" },
      ],
    },
    {
      vaccine: "Rotavirus*",
      color: "#F6CD79",
      dosis: [
        { name: "1st dose", from: "2MONTHS", to: "2MONTHS" },
        { name: "2nd dose", from: "4MONTHS", to: "4MONTHS" },
        { name: "3rd dose", from: "6MONTHS", to: "6MONTHS" },
      ],
    },
    {
      vaccine: "DTaP",
      color: "#C5476A",
      dosis: [
        { name: "1st dose", from: "2MONTHS", to: "2MONTHS" },
        { name: "2nd dose", from: "4MONTHS", to: "4MONTHS" },
        { name: "3rd dose", from: "6MONTHS", to: "6MONTHS" },
        { name: "4th dose", from: "15MONTHS", to: "18MONTHS" },
        { name: "5th dose", from: "4-6YEARS", to: "4-6YEARS" },
      ],
    },
    {
      vaccine: "Hib",
      color: "#BADD53",
      dosis: [
        { name: "1st dose", from: "2MONTHS", to: "2MONTHS" },
        { name: "2nd dose", from: "4MONTHS", to: "4MONTHS" },
        { name: "3rd dose", from: "6MONTHS", to: "6MONTHS" },
        { name: "3rd dose or 4th dose", from: "12MONTHS", to: "15MONTHS" },
      ],
    },
    {
      vaccine: "Pneumococcal",
      color: "#3DC1D2",
      dosis: [
        { name: "1st dose", from: "2MONTHS", to: "2MONTHS" },
        { name: "2nd dose", from: "4MONTHS", to: "4MONTHS" },
        { name: "3rd dose", from: "6MONTHS", to: "6MONTHS" },
        { name: "4th dose", from: "12MONTHS", to: "15MONTHS" },
      ],
    },
    {
      vaccine: "Polio",
      color: "#536DE5",
      dosis: [
        { name: "1st dose", from: "2MONTHS", to: "2MONTHS" },
        { name: "2nd dose", from: "4MONTHS", to: "4MONTHS" },
        { name: "3rd dose", from: "6MONTHS", to: "18MONTHS" },
        { name: "4th dose", from: "4-6YEARS", to: "4-6YEARS" },
      ],
    },
    {
      vaccine: "Influenza (flu)**",
      color: "#5A6175",
      dosis: [
        { name: "Yearly 1 or 2 dosis", from: "6MONTHS", to: "4-6YEARS" },
      ],
    },
    {
      vaccine: "MMR",
      color: "#31A756",
      dosis: [
        { name: "1st dose", from: "12MONTHS", to: "15MONTHS" },
        { name: "2nd dose", from: "4-6YEARS", to: "4-6YEARS" },
      ],
    },
    {
      vaccine: "Varicela (Chickenpox)",
      color: "#574C8E",
      dosis: [
        { name: "1st dose", from: "12MONTHS", to: "15MONTHS" },
        { name: "2nd dose", from: "4-6YEARS", to: "4-6YEARS" },
      ],
    },
    {
      vaccine: "HepA***",
      color: "#F78FB4",
      dosis: [
        { name: "1st dose", from: "12MONTHS", to: "15MONTHS" },
        { name: "2nd dose", from: "18MONTHS", to: "19-23MONTHS" },
      ],
    },
  ]);
};

export const getAgeRange = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        "BIRTH",
        "1MONTH",
        "2MONTHS",
        "4MONTHS",
        "6MONTHS",
        "12MONTHS",
        "15MONTHS",
        "18MONTHS",
        "19-23MONTHS",
        "2-3YEARS",
        "4-6YEARS",
      ]);
    }, 2000);
  });
};

type AgeRange =
  | "BIRTH"
  | "1 Month"
  | "2 Months"
  | "4 Months"
  | "6 Months"
  | "12 Months";
