import styled from "styled-components";
import { ReactComponent as MinusIcon } from "../assets/minus.svg";
import { ReactComponent as PlusIcon } from "../assets/plus.svg";
import { ReactComponent as CloseIcon } from "../assets/x.svg";

// STYLED COMPONENTS FOR MAIN PAGE

export const Spacer = styled.div`
  margin-bottom: 4rem;
`;

export const Paragraph = styled.p`
  color: #494949;
  font-size: 0.625rem;
`;

export const Heading = styled.h1`
  color: #494949;
  font-size: 0.625rem;
`;

export const StyledBtn = styled.button`
  min-width: 5rem;
  background: #ffebeb;
  border: 1px solid #c84349;
  color: #c84349;
`;

export const Separator = styled.div`
  background: rgb(240, 240, 240);
  height: 0.094rem;
  margin: 1rem 4rem;
`;

export const MainPageSection = styled.section`
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
  max-width: ${({ theme }) => theme.select_width};
  margin: 1.5rem auto 0.125rem;
  border-radius: 0.125rem;
  font-size: ${({ theme }) => theme.general_specs};
  transition: max-width 1s, font-size 1s;
  background: ${({ isOpen, theme }) => (isOpen ? theme.color1 : theme.color2)};
`;

export const DropDownOptionsWrapper = styled.div`
  position: absolute;
  max-width: ${({ theme }) => theme.select_width};
  width: 100%;
  margin: 0.125rem auto 0rem;
  border-radius: 0.125rem;
  font-size: ${({ theme }) => theme.general_specs};
  background: ${({ theme }) => theme.color2};
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};

  animation: fadeIn 1s ease;

  @keyframes fadeIn {
    from {
      background: transparent;
      opacity: 0;
    }
    to {
      opacity: 100%;
    }
  }
`;

export const DropDownSelectButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.select_padding};
  font-weight: 700;
  cursor: pointer;
  color: ${({ isOpen, theme }) => (isOpen ? theme.color3 : theme.color4)};
  max-height: 2rem;
`;

export const DropDownIconContainer = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem;

  background: ${({ isOpen, theme }) => (isOpen ? theme.color2 : theme.color5)};
  height: ${({ theme }) => theme.icon_size};
  width: ${({ theme }) => theme.icon_size};

  border: none;
  border-radius: 50%;
`;

export const DropDownOptions = styled.ul`
  position: relative;
  margin: 0;
  padding: ${({ theme }) => theme.options_padding};
  border: 0.094rem solid rgb(240, 240, 240);
`;

export const DropDownOption = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  cursor: pointer;

  :hover {
    label {
      color: ${({ theme }) => theme.color3};
    }
  }

  border-radius: 0.5rem;
  padding: 0.25rem 0rem;
`;

export const DropDownCheckBox = styled.div`
  background: ${({ checked, theme }) =>
    checked ? theme.color5 : theme.color8};
  border: ${({ checked, theme }) =>
    checked ? theme.color5_border : theme.color8_border};

  display: flex;
  align-items: center;
  justify-content: center;

  height: ${({ theme }) => theme.general_specs};
  width: ${({ theme }) => theme.general_specs};
  margin-right: ${({ theme }) => theme.general_specs};

  font-size: 0.625rem;
  font-weight: 700;
  color: ${({ theme }) => theme.color6};
`;

export const DropDownCheckBoxLabel = styled.label`
  color: ${({ checked, theme }) => (checked ? theme.color3 : theme.color7)};
  font-weight: 700;
  cursor: pointer;
  height: ${({ theme }) => theme.height_label};
`;

// ICONS

export const StyledMinusIcon = styled(MinusIcon)`
  height: ${({ theme }) => theme.icon_specs};
  width: ${({ theme }) => theme.icon_specs};

  path {
    fill: ${({ theme }) => theme.color6};
  }
`;
export const StyledPlusIcon = styled(PlusIcon)`
  height: ${({ theme }) => theme.icon_specs};
  width: ${({ theme }) => theme.icon_specs};

  path {
    fill: ${({ theme }) => theme.color6};
  }
`;
export const StyledCloseIcon = styled(CloseIcon)`
  height: ${({ theme }) => theme.icon_specs};
  width: ${({ theme }) => theme.icon_specs};

  path {
    fill: ${({ theme }) => theme.color6};
  }
`;
