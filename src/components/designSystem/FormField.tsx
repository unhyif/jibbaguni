import { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { Colors } from '@styles/designSystem/colors';

interface FormFieldProps {
  label: string;
}

const FormField = ({ label, children }: PropsWithChildren<FormFieldProps>) => (
  <Wrapper>
    <Label>{label}</Label>
    {children}
  </Wrapper>
);

export default FormField;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;
const Label = styled.label`
  color: ${Colors.primary};
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 2.4rem;
`;
