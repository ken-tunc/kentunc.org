import React from 'react';

import { Circle } from '@mui/icons-material';
import { Step, StepLabel, Stepper } from '@mui/material';
import Typography from '@mui/material/Typography';

import { Career } from '@/data/careers';

export type CareerHistoryProps = {
  careers: Career[];
};

const CareerHistory: React.VFC<CareerHistoryProps> = (props) => {
  const activeStep = props.careers.length - 1;

  return (
    <Stepper activeStep={activeStep} nonLinear orientation="vertical">
      {props.careers.map((career, index) => (
        <Step key={career.label}>
          <StepLabel
            icon={
              <Circle color={index === activeStep ? 'primary' : 'disabled'} />
            }
            optional={
              <CareerLabelOption
                description={career.description}
                since={career.since}
                until={career.until}
              />
            }
          >
            {career.label}
          </StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};

const CareerLabelOption: React.VFC<Omit<Career, 'label'>> = (props) => {
  const formatDate: (date?: Date) => string = (date) => {
    if (date == null) {
      return '';
    }
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    return `${date.getFullYear()}/${month}`;
  };

  return (
    <Typography variant="caption">
      {props.description}
      <br />
      {formatDate(props.since)} ~ {formatDate(props.until)}
    </Typography>
  );
};

export default CareerHistory;
