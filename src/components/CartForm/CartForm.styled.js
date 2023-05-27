import styled from 'styled-components';

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  flex-basis: 450px;
  max-width: 450px;
  padding: ${p => p.theme.space[5]}px;
  margin-bottom: ${p => p.theme.space[4]}px;
  border: ${p => p.theme.borders.normal};
  border-radius: 4px;
  border-color: ${p => p.theme.colors.orange};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  label {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: ${p => p.theme.space[4]}px;
  }
  input {
    max-width: 350px;
    border-color: #98ff8c;
    border-radius: 4px;
    border-width: 1px;
    padding: 2px 6px;
    outline: none;
    margin-top: ${p => p.theme.space[3]}px;
    :focus-visible,
    :focus {
      border-color: #0041ff;
    }
  }
`;
