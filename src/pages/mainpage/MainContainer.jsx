import React from 'react';
import styled from 'styled-components';
import busanimg from 'assets/busan.png';
import deaguimg from 'assets/deagu.png';
import gyeongjuimg from 'assets/gyeongju.png';
import pohang from 'assets/pohang.png';
import { FaMapMarkerAlt } from 'react-icons/fa';
const Wrapper = styled.div`
	width: 100%;
`;
const Recommend_City = styled.div`
	margin: 2.5rem 0;
`;
const HashTagNav = styled.div`
	display: flex;
	margin: 2.5rem 0;
`;
const HashTag = styled.span`
	color: #cfcfcf;
	font-size: 32px;
	font-weight: bold;
	margin-right: 1rem;
`;
const CityContainer = styled.div`
	display: flex;
`;

const Busan = styled.div`
	border-radius: 8px;
	background-image: url(${busanimg});
	background-size: cover;
	background-position: center;
	width: 25rem;
	height: 40rem;
	margin-right: 3rem;
	color: white;
	display: flex;
	align-items: flex-end;
`;
const Deagu = styled.div`
	border-radius: 8px;
	background-image: url(${deaguimg});
	background-size: cover;
	background-position: center;
	width: 25rem;
	height: 40rem;
	margin-right: 3rem;
	color: white;
	display: flex;
	align-items: flex-end;
`;
const GyeongJu = styled.div`
	border-radius: 8px;
	background-image: url(${gyeongjuimg});
	background-size: cover;
	background-position: center;
	width: 25rem;
	height: 40rem;
	margin-right: 3rem;
	color: white;
	display: flex;
	align-items: flex-end;
`;
const PoHang = styled.div`
	border-radius: 8px;
	background-image: url(${pohang});
	background-size: cover;
	background-position: center;
	width: 25rem;
	height: 40rem;
	margin-right: 3rem;
	display: flex;
	color: white;
	align-items: flex-end;
`;
const CityDiv = styled.div`
	margin-left: 2rem;
`;
const CityTItle = styled.span`
	margin-bottom: 1rem;
	font-size: 24px;
	font-weight: bold;
`;
const CitySubTitle = styled.div`
	font-size: 16px;
	font-weight: normal;
`;
const CityAddress = styled.div`
	color: #959696;
	margin-bottom: 1rem;
`;
const CityMoney = styled.div`
	font-weight: bold;
	font-size: 16px;
	margin-bottom: 3rem;
`;
const MainContainer = () => {
	return (
		<Wrapper>
			<Recommend_City>
				<HashTagNav>
					<HashTag style={{ color: 'black' }}>#한번쯤은_예술적인 곳</HashTag>
					<HashTag>#가도 또 가고싶은_맛집</HashTag>
					<HashTag>#인기여행지_핫플</HashTag>
					<HashTag>#역사가 깃든 곳</HashTag>
				</HashTagNav>
			</Recommend_City>
			<CityContainer>
				<Busan>
					<CityDiv>
						<CityTItle>부산</CityTItle>
						<CitySubTitle>피아크 카페&베이커리</CitySubTitle>
						<CityAddress>
							<FaMapMarkerAlt />
							부산 영도구 해양로195번길 180
						</CityAddress>
						<CityMoney>￦ 6,000~</CityMoney>
					</CityDiv>
				</Busan>
				<Deagu>
					<CityDiv>
						<CityTItle>대구</CityTItle>
						<CitySubTitle>대구오페라하우스</CitySubTitle>
						<CityAddress>
							<FaMapMarkerAlt />
							대구 북구 호암로 15 대구오페라하우…
						</CityAddress>
						<CityMoney>￦ 공식 웹사이트 참조</CityMoney>
					</CityDiv>
				</Deagu>
				<GyeongJu>
					<CityDiv>
						<CityTItle>경주</CityTItle>
						<CitySubTitle>동궁과 월지</CitySubTitle>
						<CityAddress>
							<FaMapMarkerAlt />
							경북 경주시 원화로 102
						</CityAddress>
						<CityMoney>￦ 1,000~</CityMoney>
					</CityDiv>
				</GyeongJu>
				<PoHang>
					<CityDiv>
						<CityTItle>포항</CityTItle>
						<CitySubTitle>다무포 하얀마을</CitySubTitle>
						<CityAddress>
							<FaMapMarkerAlt />
							경북 포항시 남구 호미곶면 강사리
						</CityAddress>
						<CityMoney>￦ 무료</CityMoney>
					</CityDiv>
				</PoHang>
			</CityContainer>
		</Wrapper>
	);
};

export default MainContainer;
