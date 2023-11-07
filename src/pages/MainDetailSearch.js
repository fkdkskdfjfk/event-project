import React, { useState } from 'react';
import styled from 'styled-components';
import { AiFillFolderOpen, AiOutlineCalendar } from "react-icons/ai";
import { MdLocationOn, MdRefresh } from "react-icons/md";


const SearchBox = styled.div`
  display: flex;
  max-width: 1200px;
  /* background: lightblue; */
`;

const SelectBox = styled.div`
  position: relative;
  width: 224px;
  height: 48px;
  padding: 8px;
  background-color: #ffffff;
  align-self: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  border: 1px solid #000;
  border-radius: 8px;
  /* padding: 0 0 0 52px; */
  /* background: transparent; */
  /* appearance: none; */
  font-size: 16px;
  font-weight: 400;
  display: flex;
  margin-right: 10px;

  &::before {
    content: "⌵";
    position: absolute;
    color: #000;
    top: 5px;
    right: 14px;
    font-size: 20px;
  }
`;

const SelectIcon = styled.div`
  position: absolute;
  top: 20%;
  right: 65%;
  font-size: 22px;
`;

const Label = styled.label`
  font-size: 16px;
  /* margin-left: 4px;
  text-align: center; */
  display: block;
  margin: 0 auto;
  padding: 4px;

`;

const SelectOptions = styled.ul`
  position: absolute;
  list-style: none;
  top: 40px;
  left: 0;
  width: 100%;
  overflow: hidden;
  border-radius: 8px;
  padding: 0;
  text-align: center;
  max-height: ${(props) => (props.show ? "none" : "0")};
`;

const Option = styled.li`
  font-size: 16px;
  padding: 2px 8px;
  transition: background-color 0.2s ease-in;
  &:hover {
    background-color: #ffe4b5;
  }
`;

const RefreshBtn = styled.div`
  width: 52px;
  height: 48px;
  font-size: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccd9d9;
  padding: 11px 10px;
  border-radius: 8px;
  color: #8fa1a1;
`;

const SearchBtn = styled.div`
  
`;

function MainDetailSearch(props) {
  const [showMonthOptions, setShowMonthOptions] = useState(false);
  const [month, setMonth] = useState('시기');
  const [showLocateOptions, setShowLocateOptions] = useState(false);
  const [locate, setLocate] = useState('장소');
  const [showCategoryOptions, setShowCategoryOptions] = useState(false);
  const [category, setCategory] = useState('카테고리');

  const handleSelectMonthOptions = (e) => {
    setMonth(e.target.innerText);
  };

  const handleSelectlocateOptions = (e) => {
    setLocate(e.target.innerText);
  };

  const handleSelectCategoryOptions = (e) => {
    setCategory(e.target.innerText);
  };


  return (
    <>
      <section onClick={() => setShowMonthOptions(false)}>
        <SearchBox>
          <SelectBox id='month' onClick={() => {setShowMonthOptions((prev) => !prev)}}>
            <SelectIcon>
              <AiOutlineCalendar />
            </SelectIcon>
            <Label htmlFor='month'>{month}</Label>
            <SelectOptions show={showMonthOptions}>
              <Option value="13" onClick={handleSelectMonthOptions}>개최중</Option>
              <Option value="14" onClick={handleSelectMonthOptions}>개최예정</Option>
              <Option value="01" onClick={handleSelectMonthOptions}>01월</Option>
              <Option value="02" onClick={handleSelectMonthOptions}>02월</Option>
              <Option value="03" onClick={handleSelectMonthOptions}>03월</Option>
              <Option value="04" onClick={handleSelectMonthOptions}>04월</Option>
              <Option value="05" onClick={handleSelectMonthOptions}>05월</Option>
              <Option value="06" onClick={handleSelectMonthOptions}>06월</Option>
              <Option value="07" onClick={handleSelectMonthOptions}>07월</Option>
              <Option value="08" onClick={handleSelectMonthOptions}>08월</Option>
              <Option value="09" onClick={handleSelectMonthOptions}>09월</Option>
              <Option value="10" onClick={handleSelectMonthOptions}>10월</Option>
              <Option value="11" onClick={handleSelectMonthOptions}>11월</Option>
              <Option value="12" onClick={handleSelectMonthOptions}>12월</Option>
            </SelectOptions>
          </SelectBox>

          <SelectBox id='location' onClick={() => {setShowLocateOptions((prev) => !prev)}}>
            <SelectIcon>
              <MdLocationOn />
            </SelectIcon>
            <Label htmlFor='lotation'>{locate}</Label>
            <SelectOptions show={showLocateOptions}>
              <Option value='서울' onClick={handleSelectlocateOptions}>서울</Option>
              <Option value='인천' onClick={handleSelectlocateOptions}>인천</Option>
              <Option value='대전' onClick={handleSelectlocateOptions}>대전</Option>
              <Option value='대구' onClick={handleSelectlocateOptions}>대구</Option>
              <Option value='광주' onClick={handleSelectlocateOptions}>광주</Option>
              <Option value='부산' onClick={handleSelectlocateOptions}>부산</Option>
              <Option value='울산' onClick={handleSelectlocateOptions}>울산</Option>
              <Option value='경기도' onClick={handleSelectlocateOptions}>경기도</Option>
              <Option value='강원도' onClick={handleSelectlocateOptions}>강원도</Option>
              <Option value='충청북도' onClick={handleSelectlocateOptions}>충청북도</Option>
              <Option value='충청남도' onClick={handleSelectlocateOptions}>충청남도</Option>
              <Option value='경상북도' onClick={handleSelectlocateOptions}>경상북도</Option>
              <Option value='경상남도' onClick={handleSelectlocateOptions}>경상남도</Option>
              <Option value='전라북도' onClick={handleSelectlocateOptions}>전라북도</Option>
              <Option value='전라남도' onClick={handleSelectlocateOptions}>전라남도</Option>
              <Option value='제주도' onClick={handleSelectlocateOptions}>제주도</Option>
            </SelectOptions>
          </SelectBox>


          <SelectBox id='category' onClick={() => {setShowCategoryOptions((prev) => !prev)}}>
            <SelectIcon>
              <AiFillFolderOpen />
            </SelectIcon>
            <Label htmlFor='category'>{category}</Label>
            <SelectOptions show={showCategoryOptions}>
              <Option value='연인과함께' onClick={handleSelectCategoryOptions}>연인과함께</Option>
              <Option value='인생샷' onClick={handleSelectCategoryOptions}>인생샷</Option>
              <Option value='문화관광' onClick={handleSelectCategoryOptions}>문화관광</Option>
              <Option value='예술' onClick={handleSelectCategoryOptions}>예술</Option>
              <Option value='체험' onClick={handleSelectCategoryOptions}>체험</Option>
            </SelectOptions>
          </SelectBox>

          <RefreshBtn>
            <MdRefresh />
          </RefreshBtn>

          


        </SearchBox>
      </section>
    </>
  );
}

export default MainDetailSearch;