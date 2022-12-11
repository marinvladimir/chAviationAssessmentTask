import React, { useState, useRef, useEffect } from "react";
import {
  DropDownContainer,
  DropDownOptions,
  DropDownOption,
  DropDownOptionsWrapper,
  DropDownSelectButton,
  DropDownIconContainer,
  DropDownCheckBox,
  DropDownCheckBoxLabel,
  StyledCloseIcon,
  StyledPlusIcon,
  StyledMinusIcon,
} from "../styles/UI";

const DropDown = ({ options, selectedItem, setSelectedItem }) => {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef();
  const dropdownContentRef = useRef();

  const handleKeyClose = (e) => {
    if (e.key === "Escape" || e.keyCode === 27) {
      setIsOpen(false);
    }
  };

  const handleSelectButtonClick = (e) => {
    // in case selected item exists and you click on the icon, keep the container window closed.
    if (e.target.id === "icon_container" && selectedItem) setIsOpen(false);
    else setIsOpen(!isOpen);
  };

  useEffect(() => {
    // a click outside of function is also treated as a trigger to close the container window.
    const handleOutsideClick = (e) => {
      if (
        !dropdownRef?.current?.contains(e.target) &&
        !dropdownContentRef?.current?.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyClose);
    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("keydown", handleKeyClose);
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <>
      <DropDownContainer ref={dropdownRef} isOpen={isOpen}>
        <DropDownSelectButton
          id="select_btn"
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          role="combobox"
          data-testid="button"
          tabIndex={0}
          isOpen={isOpen || selectedItem}
          onClick={(e) => handleSelectButtonClick(e)}
        >
          <p data-testid="select_text">
            {selectedItem?.name || "Filter title"}
          </p>
          {/* in this case, rotate is only used to transform "+" to "x" in case selected item is not null */}
          <DropDownIconContainer
            id="icon_container"
            aria-hidden="true"
            onClick={() => {
              if (selectedItem !== null && !isOpen) {
                setSelectedItem(null);
              }
            }}
            isOpen={isOpen}
          >
            {!isOpen ? (
              selectedItem !== null ? (
                <StyledCloseIcon />
              ) : (
                <StyledPlusIcon />
              )
            ) : (
              <StyledMinusIcon />
            )}
          </DropDownIconContainer>
        </DropDownSelectButton>
        <DropDownOptionsWrapper
          isOpen={isOpen}
          data-testid="dropdown_options_wrapper"
          ref={dropdownContentRef}
          aria-hidden={!isOpen}
        >
          {isOpen && (
            <DropDownOptions
              className="dropdown__list"
              role="listbox"
              tabindex="-1"
              aria-hidden={!isOpen}
            >
              {options?.map((item, key) => (
                <DropDownOption
                  key={key}
                  tabindex="-1"
                  aria-hidden={!isOpen}
                  data-testid="dropdown_option"
                  data-option={String(item?.name)}
                  checked={selectedItem?.name === item?.name}
                  onClick={() => {
                    setSelectedItem(item);
                    setIsOpen(!isOpen);
                  }}
                >
                  {/* "checked" state must match key/value pair of the selectedItem state */}
                  <DropDownCheckBox
                    type="checkbox"
                    onChange={() => setSelectedItem(item)}
                    checked={
                      selectedItem?.name === item?.name &&
                      selectedItem?.key === item?.key
                    }
                  ></DropDownCheckBox>
                  <DropDownCheckBoxLabel
                    checked={
                      selectedItem?.name === item?.name &&
                      selectedItem?.key === item?.key
                    }
                  >
                    {item?.name}
                  </DropDownCheckBoxLabel>
                </DropDownOption>
              ))}
            </DropDownOptions>
          )}
        </DropDownOptionsWrapper>
      </DropDownContainer>
    </>
  );
};

export default DropDown;
