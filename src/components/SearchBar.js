import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { colors, fonts } from '../styles/theme';

const ContainerBox = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  height: 56px;
  padding: 0 16px;
  background-color: white;
  box-shadow: 2px 5px 20px rgba(0, 0, 0, 0.12);
  border-radius: 16px;
  @media (max-width: 320px) {
    padding: 8px;
  }
`;

const SInput = styled.input`
  flex: 1;
  padding: 0;
  border: 0 none;
  font-family: ${fonts.textFamily};
  font-size: 15px;
  line-height: 56px;
`;

const ClearBtn = styled.button.attrs({
  type: 'button'
})`
  width: 24px;
  height: 24px;
  padding: 4px;
  border: 0 none;
  border-radius: 50%;
  margin-left: 16px;
  background: ${colors.grayLight};
`;

const SearchBar = ({ className, onChange, onSubmit, onClear, placeholder, value }) => {
  const inputEl = useRef(null);

  const submit = e => {
    inputEl.current.blur();
    onSubmit(e);
  };

  return (
    <ContainerBox className={className} onSubmit={submit}>
      <SInput
        ref={inputEl}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {value && <ClearBtn onClick={onClear}>X</ClearBtn>}
    </ContainerBox>
  );
};

SearchBar.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  onClear: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string
};

SearchBar.defaultProps = {
  className: '',
  onChange: () => {},
  onSubmit: () => {},
  onClear: () => {},
  placeholder: '',
  value: ''
};

export default SearchBar;
