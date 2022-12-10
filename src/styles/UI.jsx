import styled from "styled-components";

// STYLED COMPONENTS FOR MAIN PAGE

export const Spacer = styled.div`
  margin-bottom: 4rem;
`;

export const Paragraph = styled.p`
  color: #494949;
  font-size: 0.625rem;
`;

export const Separator = styled.div`
  background: rgb(240, 240, 240);
  height: 0.094rem;
  margin: 1rem 4rem;
`;

export const MainPageSection = styled.div`
  margin-top: 2rem;
  background: white;
  padding: 1rem;
  text-align: center;
  min-height: 4rem;
  min-width: 4rem;
  border: 0.125rem solid rgb(240, 240, 240);
`;

export const MainPageWrapper = styled.div`
  padding: 0rem 8rem;
  @media (max-width: 64rem) {
    padding: 0rem 4rem;
  }
  @media (max-width: 48rem) {
    padding: 0rem 1rem;
  }
`;

// STYLED COMPONENTS FOR DROPDOWN

export const DropDownContainer = styled.div`
  position: relative;
  max-width: 10rem;
  margin: 1.5rem auto 0.125rem;
  border-radius: 0.125rem;
  font-size: 0.5rem;
`;

export const DropDownOptionsWrapper = styled.div`
  position: absolute;
  max-width: 10rem;
  width: 100%;
  margin: 0rem auto 0rem;
  border-radius: 0.125rem;
  font-size: 0.5rem;
  background: white;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};

  animation: fadeIn 1s ease;

  @keyframes fadeIn {
    from {
      background: transparent;
      opacity: 0;
    }
    to {
      background: white;
      opacity: 100%;
    }
  }
`;

export const DropDownSelectButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 0.625rem;
  font-weight: 700;
  cursor: pointer;
  color: ${({ isOpen }) => (isOpen ? "#494949;" : "#6a6a6a;")};
  max-height: 2rem;
`;

export const DropDownIconContainer = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  background: #ffebeb;
  color: #c84349;
  max-height: 0.875rem;
  max-width: 0.875rem;
  font-size: 0.75rem;
  font-weight: 100;
  border: none;
  border-radius: 50%;

  transition-duration: 0.1s;
  transition-property: transform;
  transform: ${({ rotate }) => (rotate ? "rotate(-45deg);" : "")};
`;

export const DropDownOptions = styled.ul`
  position: relative;
  margin: 0;
  padding: 0.25rem 0.5rem;
  border: 0.094rem solid rgb(240, 240, 240);
`;

export const DropDownOption = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  cursor: pointer;

  :hover {
    label {
      color: #494949;
    }
  }

  border-radius: 0.5rem;
  padding: 0.25rem 0rem;
`;

export const DropDownCheckBox = styled.div`
  background: ${({ checked }) =>
    checked ? "#ffebeb;" : "rgb(240, 240, 240);"};
  border: ${({ checked }) =>
    checked ? "1px solid #ffebeb;" : "1px solid rgb(240, 240, 240);"};

  display: flex;
  align-items: center;
  justify-content: center;

  height: 0.5rem;
  width: 0.5rem;
  margin-right: 0.5rem;
  font-size: 0.625rem;
  font-weight: 700;
  color: #c84349;
`;

export const DropDownCheckBoxLabel = styled.label`
  color: ${({ checked }) => (checked ? "#494949;" : "#acacac;")};
  font-weight: 700;
  cursor: pointer;
`;
