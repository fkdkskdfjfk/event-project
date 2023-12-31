import React, { useState } from 'react';
import styled from 'styled-components';
import { AiFillFolderOpen, AiOutlineCalendar, AiOutlineSearch } from "react-icons/ai";
import { MdLocationOn, MdRefresh, MdSubject } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { getButton, getCategory, getLocation, getMonth, getSubject, searchCategory, searchLocation, searchMonth, searchSubject } from '../features/searchSlice';


const SearchBox = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  justify-content: space-between;

  @media screen and (max-width: 768px){
    width: 100%;
    flex-direction: column;
  }
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

  @media screen and (max-width: 768px){
    width: 100%;
    margin-bottom: 10px;
    margin-right: 0;
  }
`;

const SelectIcon = styled.div`
  position: absolute;
  top: 10%;
  right: 70%;
  font-size: 22px;

  @media screen and (max-width: 768px){
    left: 3%;
  }
`;

const Label = styled.label`
  font-size: 16px;
  display: block;
  margin: 0 auto;
  padding: 4px;
  cursor: pointer;

  @media screen and (max-width: 768px){
    margin-left: 45px;
  }
`;

const SelectOptions = styled.ul`
  position: absolute;
  list-style: none;
  top: 40px;
  left: 0;
  width: 100%;
  overflow: hidden;
  border-radius: 8px;
  margin-top: 10px;
  padding: 0;
  text-align: center;
  max-height: ${(props) => (props.$show ? "none" : "0")};
  outline: ${(props) => (props.$show ? "1px solid #111" : "0")};
  z-index: 99;
`;

const Option = styled.li`
  font-size: 16px;
  padding: 2px 8px;
  background: #fff;
  transition: background-color 0.2s ease-in;
  &:hover {
    background-color: #a67aff;
    color: #fff;
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
  margin-right: 10px;

  &:hover {
    color: #000;
    border: 1px solid #000;
  }

  @media screen and (max-width: 768px){
    width: 100%;
    margin-bottom: 10px;
    &:active {
      color: #000;
      border: 1px solid #000;
    }
  }
`;

const SearchBtnBox = styled.div`
  width: 152px;
  height: 48px;
  border-radius: 8px;
  background: #7a45e5;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;

  &:active {
    background-color: #5d24d1;
  }

  @media screen and (max-width: 768px){
    width: 100%;
    margin-bottom: 10px;
  }
`;

const SearchBtn = styled.button`
  outline: none;
  background: none;
  color: #fff;
  font-weight: 700;
  font-size: 20px;
  border: none;

  
`;


function MainDetailSearch(props) {
  const dispatch = useDispatch();

  const [showSubjectOptions, setShowSubjectOptions] = useState(false);
  const [subject, setSubject] = useState(['전체', '축제', '전시회']);
  const [showMonthOptions, setShowMonthOptions] = useState(false);
  const [month, setMonth] = useState(['시기', '개최중', '개최예정', '01', '02', '03', '04', '05', '06',
   '07', '08', '09', '10', '11', '12']);
  const [showLocateOptions, setShowLocateOptions] = useState(false);
  const [locate, setLocate] = useState(['지역', '서울특별시', '인천광역시', '대전광역시', '대구광역시', '광주광역시', '부산광역시',
   '울산광역시', '경기도', '강원도', '충청북도', '충청남도', '경상북도', '경상남도', '전라북도', '전라남도', '제주특별자치도']);
  const [showCategoryOptions, setShowCategoryOptions] = useState(false);
  const [category, setCategory] = useState(['카테고리', '연인과함께', '인생샷', '문화관광', '예술', '체험']);

  const handleSelectSubjectOptions = (e) => {
    if (e.target.innerText == '전체') {setSubject(['전체', '축제', '전시회'])}
    else {
      setSubject(e.target.innerText.split(','));
    }
  };

  const handleSelectMonthOptions = (e) => {
    
    if (e.target.innerText == '시기') {setMonth(['시기', '개최중', '01', '02', '03', '04', '05', 
    '06', '07', '08', '09', '10', '11', '12'])}
    else if (e.target.innerText == '개최중') {setMonth(['개최중'])}
    else { setMonth([e.target.innerText, e.target.innerText.split('월')[0]]); }
  };

  const handleSelectLocateOptions = (e) => {
    if (e.target.innerText == '지역') {setLocate(['지역', '서울특별시', '인천광역시', '대전광역시', '대구광역시', '광주광역시', 
    '부산광역시', '울산광역시', '경기도', '강원도', '충청북도', '충청남도', '경상북도', '경상남도', '전라북도', '전라남도', '제주특별자치도'])}
    else if (e.target.innerText == '제주도') {setLocate(['제주특별자치도'])}
    else {setLocate([e.target.innerText]);}
  };

  const handleSelectCategoryOptions = (e) => {
    if (e.target.innerText == '카테고리') {setCategory(['카테고리', '연인과함께', '인생샷', '문화관광', '예술', '체험'])}
    else {setCategory([e.target.innerText]);}

  };

  const handleSubmitValue = () => {
    dispatch(getSubject(subject))
    dispatch(getMonth(month))
    dispatch(getLocation(locate))
    dispatch(getCategory(category))
    dispatch(getButton(true))
  };

  return (
    <>
      <section>
        <SearchBox>
          <SelectBox id='subject' onClick={() => {setShowSubjectOptions((prev) => !prev)}}>
            <SelectIcon>
              <MdSubject/>
            </SelectIcon>
            <Label htmlFor='subject'>{subject[0]}</Label>
            <SelectOptions $show={showSubjectOptions}>
              <Option onClick={handleSelectSubjectOptions}>전체</Option>
              <Option onClick={handleSelectSubjectOptions}>축제</Option>
              <Option onClick={handleSelectSubjectOptions}>전시회</Option>
            </SelectOptions>
          </SelectBox>

          <SelectBox id='month' onClick={() => {setShowMonthOptions((prev) => !prev)}}>
            <SelectIcon>
              <AiOutlineCalendar />
            </SelectIcon>
            <Label htmlFor='month'>{month[0]}</Label>
            <SelectOptions $show={showMonthOptions}>
              <Option onClick={handleSelectMonthOptions}>시기</Option>
              <Option onClick={handleSelectMonthOptions}>개최중</Option>
              <Option onClick={handleSelectMonthOptions}>01월</Option>
              <Option onClick={handleSelectMonthOptions}>02월</Option>
              <Option onClick={handleSelectMonthOptions}>03월</Option>
              <Option onClick={handleSelectMonthOptions}>04월</Option>
              <Option onClick={handleSelectMonthOptions}>05월</Option>
              <Option onClick={handleSelectMonthOptions}>06월</Option>
              <Option onClick={handleSelectMonthOptions}>07월</Option>
              <Option onClick={handleSelectMonthOptions}>08월</Option>
              <Option onClick={handleSelectMonthOptions}>09월</Option>
              <Option onClick={handleSelectMonthOptions}>10월</Option>
              <Option onClick={handleSelectMonthOptions}>11월</Option>
              <Option onClick={handleSelectMonthOptions}>12월</Option>
            </SelectOptions>
          </SelectBox>

          <SelectBox id='location' onClick={() => {setShowLocateOptions((prev) => !prev)}}>
            <SelectIcon>
              <MdLocationOn />
            </SelectIcon>
            <Label htmlFor='location'>{locate[0]}</Label>
            <SelectOptions $show={showLocateOptions}>
              <Option onClick={handleSelectLocateOptions}>지역</Option>
              <Option onClick={handleSelectLocateOptions}>서울특별시</Option>
              <Option onClick={handleSelectLocateOptions}>인천광역시</Option>
              <Option onClick={handleSelectLocateOptions}>대전광역시</Option>
              <Option onClick={handleSelectLocateOptions}>대구광역시</Option>
              <Option onClick={handleSelectLocateOptions}>광주광역시</Option>
              <Option onClick={handleSelectLocateOptions}>부산광역시</Option>
              <Option onClick={handleSelectLocateOptions}>울산광역시</Option>
              <Option onClick={handleSelectLocateOptions}>경기도</Option>
              <Option onClick={handleSelectLocateOptions}>강원도</Option>
              <Option onClick={handleSelectLocateOptions}>충청북도</Option>
              <Option onClick={handleSelectLocateOptions}>충청남도</Option>
              <Option onClick={handleSelectLocateOptions}>경상북도</Option>
              <Option onClick={handleSelectLocateOptions}>경상남도</Option>
              <Option onClick={handleSelectLocateOptions}>전라북도</Option>
              <Option onClick={handleSelectLocateOptions}>전라남도</Option>
              <Option onClick={handleSelectLocateOptions}>제주도</Option>
            </SelectOptions>
          </SelectBox>


          <SelectBox id='category' onClick={() => {setShowCategoryOptions((prev) => !prev)}}>
            <SelectIcon>
              <AiFillFolderOpen />
            </SelectIcon>
            <Label htmlFor='category'>{category[0]}</Label>
            <SelectOptions $show={showCategoryOptions}>
              <Option onClick={handleSelectCategoryOptions}>카테고리</Option>
              <Option onClick={handleSelectCategoryOptions}>연인과함께</Option>
              <Option onClick={handleSelectCategoryOptions}>인생샷</Option>
              <Option onClick={handleSelectCategoryOptions}>문화관광</Option>
              <Option onClick={handleSelectCategoryOptions}>예술</Option>
              <Option onClick={handleSelectCategoryOptions}>체험</Option>
            </SelectOptions>
          </SelectBox>

          <RefreshBtn className='cursor-pointer' onClick={() => window.location.reload()}>
            <MdRefresh />
          </RefreshBtn>

          <SearchBtnBox className='cursor-pointer' onClick={handleSubmitValue}>
            <SearchBtn className='cursor-pointer'>검색</SearchBtn>
            <AiOutlineSearch style={{fontSize: 20}}/>
          </SearchBtnBox>

        </SearchBox>
      </section>
    </>
  );
}

export default MainDetailSearch;