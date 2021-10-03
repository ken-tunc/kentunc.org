import React from 'react';

import { Circle } from '@mui/icons-material';
import { Step, StepLabel, Stepper } from '@mui/material';
import Typography from '@mui/material/Typography';

import { Career } from '@/data/careers';

export interface CareerHistoryProps {
  careers: Career[];
}

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
  return (
    <Typography variant="caption">
      {props.description}
      <br />
      {props.since.getFullYear()} ~ {props.until?.getFullYear()}
    </Typography>
  );
};

export default CareerHistory;
