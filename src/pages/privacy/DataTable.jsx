import React from "react";
import styled from "styled-components";

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-weight: 400;
  font-size: 1rem;
  line-height: 26px;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.purple.purple_40};
  background-color: ${({ theme }) => theme.colors.purple.purple_50};
`;

const Th = styled.th`
  border: 1px solid #c1c1c1;
  padding: 8px;
  text-align: left;
`;

const Td = styled.td`
  border: 1px solid #c1c1c1;
  padding: 8px;
`;

const DataTable = () => {
  const data = [
    {
      category: "A. Identifiers",
      examples:
        "Contact details, such as real name, alias, postal address, telephone or mobile contact number, unique personal identifier, online identifier, Internet Protocol address, email address, and account name",
      collected: "NO",
    },
    {
      category:
        "B. Personal information as defined in the California Customer Records statute",
      examples:
        "Name, contact information, education, employment, employment history, and financial information",
      collected: "NO",
    },
    {
      category:
        "C. Protected classification characteristics under state or federal law",
      examples:
        "Gender, age, date of birth, race and ethnicity, national origin, marital status, and other demographic data",
      collected: "NO",
    },
    {
      category: "D. Commercial information",
      examples:
        "Transaction information, purchase history, financial details, and payment information",
      collected: "NO",
    },
    {
      category: "E. Biometric information",
      examples: "Fingerprints and voiceprints",
      collected: "NO",
    },
    {
      category: "F. Internet or other similar network activity",
      examples:
        "Browsing history, search history, online behavior, interest data, and interactions with our and other websites, applications, systems, and advertisements",
      collected: "NO",
    },
    {
      category: "G. Geolocation data",
      examples: "Device location",
      collected: "NO",
    },
    {
      category: "H. Audio, electronic, sensory, or similar information",
      examples:
        "Images and audio, video or call recordings created in connection with our business activities",
      collected: "NO",
    },
    {
      category: "I. Professional or employment-related information",
      examples:
        "Business contact details in order to provide you our Services at a business level or job title, work history, and professional qualifications if you apply for a job with us",
      collected: "YES",
    },
    {
      category: "J. Education Information",
      examples: "Student records and directory information",
      collected: "NO",
    },
    {
      category: "K. Inferences drawn from collected personal information",
      examples:
        "Inferences drawn from any of the collected personal information listed above to create a profile or summary about, for example, an individual’s preferences and characteristics",
      collected: "NO",
    },
    {
      category: "L. Sensitive personal Information",
      examples: "N/A",
      collected: "NO",
    },
  ];

  return (
    <Table>
      <thead>
        <tr>
          <Th>Category</Th>
          <Th>Examples</Th>
          <Th>Collected</Th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <Td>{row.category}</Td>
            <Td>{row.examples}</Td>
            <Td>{row.collected}</Td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default DataTable;
