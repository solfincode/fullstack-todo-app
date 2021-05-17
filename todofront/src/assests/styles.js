import styled from "styled-components/macro";

export const Container = styled.div`
  margin: 50px auto;
  padding: 15px;
  border-radius: 10px;
  color: white;
  background-color: var(--brand-primary-blue);
  @media (min-width: 300px) {
    width: 342px;
  }
  @media (min-width: 500px) {
    width: 380px;
  }
  @media (min-width: 648px) {
    width: 500px;
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
  font-size: 1em;
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
  margin-top: 8px;
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: rgba(255, 255, 255, 0.4);
  padding: 8px;
  height: 60px;
  margin: 20px 0px;
  border-radius: 7px;
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SMButton = styled.button`
  ${(props) =>
    props.loading
      ? "background-color: var(--brand-warning-red);color: white;"
      : "background-color: var(--brand-secondary-yellow);color: var(--brand-dark-blue);"}
  border-radius: 7px;
  cursor: pointer;
  text-align: center;
  border: none;
  font-weight: bold;
  @media (min-width: 300px) {
    ${(props) => (props.loading ? "width: 70px;" : "width: 60px;")}
    font-size: 0.7rem;
    padding: 5px;
    margin: 9px 5px;
    height: 25px;
  }
`;

export const DisabledButton = styled.button`
  background-color: var(--brand-disabled);
  border-radius: 7px;
  color: black;
  text-align: center;
  font-size: 0.8em;
  border: none;
  font-weight: bold;
  @media (min-width: 300px) {
    width: 60px;
    font-size: 0.7rem;
    padding: 5px;
    margin: 9px 5px;
    height: 25px;
  }
`;

export const BottomContainer = styled.div`
  margin: 20px 0 20px 0;
`;

export const CheckBox = styled.input`
  margin: 11px 20px 0 0;
`;
