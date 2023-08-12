import styled from 'styled-components';
import { Link } from 'react-router-dom';

import google from '../../assets/btn_google_signin_light_normal_web@2x.png';
import kakao from '../../assets/kakao_login_medium_narrow.png';

import { Button } from 'components/common/Button';
import { Input } from 'components/common/Input';
import { Title } from 'components/common/Title';
import { useCallback } from 'react';

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 8rem;
	max-width: 76rem;
	width: 100%;
	padding: 8rem 0 13rem;
`;
const InnerWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

const SocialWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2rem;
`;

const GoogleLoginBtn = styled.a`
	width: 18.3rem;
	height: 4.4rem;
	background-image: url(${google});
	cursor: pointer;
`;
const KakaoLoginBtn = styled.a`
	width: 18.3rem;
	height: 4.4rem;
	background-image: url(${kakao});
	cursor: pointer;
`;

const FormWrapper = styled.form`
	width: 40rem;
`;

const Line = styled.hr`
	position: relative;
	margin: 4rem 0;
	width: 100%;
	height: 0.1rem;
	background: #cfcfcf;
	border: 0;

	&::before {
		content: '또는';
		display: block;
		width: 6.8rem;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate3d(-50%, -50%, 0);
		background: #fff;
		color: #cfcfcf;
		font-size: 1.5rem;
		text-align: center;
	}
`;

const InputWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
`;

const RegisterLink = styled(Link)`
	display: block;
	margin-top: 1rem;
	font-size: 1.4rem;
	text-align: center;
`;

const LoginContainer = () => {
	const onSubmit = useCallback(() => {
		console.log('hi');
	}, []);

	return (
		<Wrapper>
			<Title text="로그인" />
			<InnerWrapper>
				<SocialWrapper>
					<GoogleLoginBtn />
					<KakaoLoginBtn />
				</SocialWrapper>
				<Line />
				<FormWrapper onSubmit={onSubmit} method="POST" action="/login">
					<InputWrapper>
						<Input type="email" placeholder="이메일을 입력하세요." required />
						<Input type="password" placeholder="비밀번호를 입력하세요." required />
					</InputWrapper>
					<RegisterLink to="register">회원가입</RegisterLink>
					<Button type="primary" text="로그인" />
				</FormWrapper>
			</InnerWrapper>
		</Wrapper>
	);
};
export default LoginContainer;
