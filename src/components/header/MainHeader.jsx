import React from 'react';
import styled from 'styled-components';
import barcord from 'assets/barcord.png';
import { FaCalendarAlt, FaMapMarkerAlt, FaUserFriends } from 'react-icons/fa';
import Logoimage from 'assets/Logo5.svg';
import SerchLogo from 'assets/SerchLogo.svg';

const WrapperContainer = styled.div`
	padding-bottom: 5rem;
	margin: 0 auto;
	max-width: 1080px;
`;
//header
const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 2rem 0;
`;
const LogoContainer = styled.div`
	display: flex;
	align-items: center;
	background: transparent;
`;
const LogoImg = styled.img`
	width: 13rem;
	height: 20px;
`;
const NavBar = styled.ul`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
const Register = styled.ul`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
const Category = styled.li`
	margin-left: 4rem;
	list-style-type: none;
	font-size: 16px;
	color: white;
	font-weight: normal;
`;
//section
const WrapperDiv = styled.div`
	width: 100%;
`;
const SerchText = styled.div`
	font-size: 48px;
	font-weight: bold;
	text-align: right;
	margin: 2rem 0;
	color: white;
`;
const SpanColor = styled.span`
	color: #3ad0ff;
`;
const SerchContainer = styled.div`
	border: 0.5px solid grey;
	border-radius: 8px;
	background: white;
`;
const SerchBarHeader = styled.div`
	background: #3ad0ff;
	text-align: center;
	border-radius: 8px 8px 0 0;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 1.5rem 0;
`;
const LogoHeader = styled.img`
	width: 7rem;
	height: 2rem;
`;
const SerchBarSection = styled.div`
	padding: 2rem 2rem;
`;
const BarcordContainer = styled.div`
	margin-bottom: 2rem;
`;
const SerchBarInput = styled.div`
	display: flex;
	justify-content: space-between;
`;
const UserInput = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background: #f2f6f9;
	padding: 1rem;
	border-radius: 8px;
	font-size: 16px;
	color: #959696;
`;

const InputIcon = styled.div`
	color: #3ad0ff;
	margin-left: 2rem;
`;
const InputId = styled.input`
	border: 0px;
	background: transparent;
	font-size: 16px;
	width: 100%;
`;
const ResultContainer = styled.div`
	background: #3ad0ff;
	color: white;
	padding: 1rem 3rem;
	border-radius: 8px;
	font-size: 16px;
	font-width: bold;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const MainHeader = () => {
	return (
		<WrapperContainer>
			<Wrapper>
				<LogoContainer>
					<LogoImg src={Logoimage} />
				</LogoContainer>
				<NavBar>
					<Category>여행계획</Category>
					<Category>여행기록</Category>
					<Category>지역축제</Category>
					<Category>커뮤니티</Category>
				</NavBar>
				<Register>
					<Category style={{ color: '#959696' }}>로그인</Category>
					<Category style={{ color: '#959696' }}>회원가입</Category>
				</Register>
			</Wrapper>
			<WrapperDiv>
				<SerchText>
					어디로 <SpanColor>여행</SpanColor> 가고 싶어요?
				</SerchText>
				<SerchContainer>
					<SerchBarHeader>
						<LogoHeader src={SerchLogo} alt=" 로고" />
					</SerchBarHeader>
					<SerchBarSection>
						<BarcordContainer>
							<img src={barcord} alt="바코드 " />
						</BarcordContainer>
						<SerchBarInput>
							<UserInput>
								<div style={{ marginRight: '1rem' }}>목적지</div>
								<InputIcon>
									<FaMapMarkerAlt />
								</InputIcon>
							</UserInput>
							<UserInput>
								<div style={{ marginRight: '1rem' }}>YYYY-MM-DD ~ YYYY-MM-DD</div>
								<InputIcon>
									<FaCalendarAlt />
								</InputIcon>
							</UserInput>
							<UserInput>
								<div style={{ marginRight: '1rem' }}>인원</div>
								<InputIcon>
									<FaUserFriends />
								</InputIcon>
							</UserInput>
							<UserInput>
								<InputId type="text" placeholder="동행인 아이디 입력" />
							</UserInput>
							<ResultContainer>추천 경로 찾기</ResultContainer>
						</SerchBarInput>
					</SerchBarSection>
				</SerchContainer>
			</WrapperDiv>
		</WrapperContainer>
	);
};

export default MainHeader;
