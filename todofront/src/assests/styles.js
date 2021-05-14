import styled from "styled-components";

export const Container = styled.div`
  width: 500px;
  margin: 50px auto;
  padding: 15px;
  border-radius: 10px;
  color: white;
  background-color: var(--brand-primary-blue);
  @media (max-width: 500px) {
    width: 380px;
  }
`;

export const MainHeader = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
`;
export const Input = styled.input`
  width: 70%;
  padding: 10px;
  margin: 0 20px 0 0;
  background-color: var(--brand-dark-blue);
  border: none;
  color: white;
  caret-color: var(--brand-secondary-yellow);
  font-size: 1.3em;
`;
export const Button = styled.button`
  background-color: var(--brand-secondary-yellow);
  width: 130px;
  padding: 14px;
  border-radius: 7px;
  color: var(--brand-dark-blue);
  cursor: pointer;
  text-align: center;
  font-size: 0.9em;
  border: none;
  font-weight: bold;
`;

export const Text = styled.p`
  color: white;
  font-size: 1.2em;
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: rgba(255, 255, 255, 0.4);
  padding: 8px;
  margin: 20px 0px;
  border-radius: 7px;
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SMButton = styled.button`
  background-color: var(--brand-secondary-yellow);
  width: 100px;
  padding: 8px;
  border-radius: 7px;
  color: var(--brand-dark-blue);
  cursor: pointer;
  text-align: center;
  margin: 12px;
  font-size: 0.8em;
  border: none;
  font-weight: bold;
`;

export const DisabledButton = styled.button`
  background-color: var(--brand-disabled);
  width: 100px;
  padding: 8px;
  border-radius: 7px;
  color: black;
  text-align: center;
  margin: 12px;
  font-size: 0.8em;
  border: none;
  font-weight: bold;
`;

export const BottomContainer = styled.div`
  margin: 20px 0 20px 0;
`;

export const CheckBox = styled.input`
  margin-right: 20px;
  top: 20px;
`;
