import { Circle } from "@mui/icons-material";
import { Step, StepLabel, Stepper, Typography } from "@mui/material";

type Career = {
  label: string;
  description: string;
  since: Date;
  until?: Date;
};

const careers: Career[] = [
  {
    label: "Keio University",
    description: "Information and Computer Science (ICS).",
    since: new Date(2013, 3),
    until: new Date(2017, 2),
  },
  {
    label: "Keio University Graduate School",
    description:
      "Majored in Software Engineering (Software Defect Prediction).",
    since: new Date(2017, 3),
    until: new Date(2019, 2),
  },
  {
    label: "Yahoo! JAPAN",
    description: "Software Engineer",
    since: new Date(2019, 3),
    until: new Date(2022, 3),
  },
  {
    label: "M3, Inc.",
    description: "Software Engineer",
    since: new Date(2022, 4),
  },
] as const;

const CareerLabelOption: React.FC<{ career: Career }> = ({ career }) => {
  const formatDate: (date: Date | undefined) => string = (date) => {
    if (!date) {
      return "";
    }
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    return `${date.getFullYear()}/${month}`;
  };

  return (
    <Typography variant="caption">
      {career.description}
      <br />
      {formatDate(career.since)} ~ {formatDate(career.until)}
    </Typography>
  );
};

export const Careers: React.FC = () => {
  const activeStep = careers.length - 1;

  return (
    <Stepper activeStep={activeStep} nonLinear orientation="vertical">
      {careers.map((career, index) => (
        <Step key={career.label}>
          <StepLabel
            icon={
              <Circle color={index === activeStep ? "primary" : "disabled"} />
            }
            optional={<CareerLabelOption career={career} />}
          >
            {career.label}
          </StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};
