import styled from 'styled-components';
import AuthLayout from 'components/Layout/AuthLayout';
import { RightArrow } from 'components/common/Icon';
import { Button, ButtonGroup } from 'components/common/Button';
import { ErrorMsg, Input } from 'components/common/Input';
import { Link, useNavigate } from 'react-router-dom';
import useInput from 'hook/useInput';
import { useCallback, useState } from 'react';
import { axiosPost } from '../../utils/AxiosUtils';
import { message } from 'antd';
const InnerWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 40rem;
`;

const ProcedureTitle = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
const StepText = styled.span`
	color: #cfcfcf;
	font-size: 2.4rem;
	font-weight: 500;

	&.active {
		color: #000;
	}
`;

const FormWrapper = styled.form``;

const StepTitle = styled.p`
	display: block;
	padding-top: 3rem;
	color: #303133;
	font-size: 1.6rem;
	font-weight: 500;
`;

const AuthContent = styled.div`
	padding: 4rem 0;
`;

const AuthInfoContent = styled.div`
	display: flex;
	flex-direction: column;
	gap: 3rem;
`;

const SignUpInfoInput = () => {
	const navigate = useNavigate();
	const [username, onChangeUsername] = useInput('');

	const [email, setEmail] = useState('');
	const [emailError, setEmailError] = useState(false);
	const [password1, setPassword1] = useState('');
	const [password2, setPassword2] = useState('');
	const [passwordExpError, setPasswordExpError] = useState(false);
	const [passwordError, setPasswordError] = useState(false);
	const [messageApi, contextHolder] = message.useMessage();

	const alert = async (type, content) => {
		return messageApi.open({
			type: type,
			content: content,
		});
	};
	const onChangeEamilCheck = useCallback(
		e => {
			const expEmail = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
			setEmail(e.target.value);
			setEmailError(!expEmail.test(email));
			if (e.target.value === '') {
				setEmailError(false);
			}
		},
		[email],
	);

	const onChangePasswordExp = useCallback(
		e => {
			const expPassword = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;
			setPassword1(e.target.value);
			setPasswordExpError(!expPassword.test(e.target.value));
			if (password1 === '' && !passwordExpError) {
				setPasswordExpError(true);
			}
		},
		[password1, passwordExpError],
	);

	const onChangePasswordCheck = useCallback(
		e => {
			setPassword2(e.target.value);
			setPasswordError(e.target.value !== password1);
			if (e.target.value === '') setPasswordError(true);
		},
		[password1],
	);

	const onSubmit = useCallback(
		async e => {
			e.preventDefault();
			try {
				const userData = {
					username: username,
					email: email,
					password1: password1,
					password2: password2,
				};
				if (Object.values(userData).includes('') === true) {
					return alert('warning', '필수입력값을 입력해주세요.');
				}
				if (!email) {
					return setEmailError(true);
				}
				if (password1 !== password2) {
					return alert('warning', '비밀번호가 일치하지 않습니다. 다시 확인해주세요.');
				}
				if (passwordExpError) {
					return alert('warning', '비밀번호 조합을 확인해주세요.');
				}

				const res = await axiosPost('/users/signup', userData);
				if (res.state === 200 || 201) {
					await alert('success', '회원가입 성공');
					navigate('/auth/signup/complete', { state: username });
				}
			} catch (error) {
				alert('warning', '동일한 이메일이 있습니다. 다른 이메일을 입력해주세요.');
			}
		},
		[email, navigate, password1, password2, username],
	);

	return (
		<AuthLayout>
			{contextHolder}
			<InnerWrapper>
				<ProcedureTitle>
					<StepText>약관동의</StepText>
					<RightArrow />
					<StepText className="active">정보입력</StepText>
					<RightArrow />
					<StepText>가입완료</StepText>
				</ProcedureTitle>

				<FormWrapper onSubmit={onSubmit}>
					<StepTitle>정보입력</StepTitle>

					<AuthContent>
						<AuthInfoContent>
							<div>
								<Input
									type="text"
									defaultValue={username}
									text="이름*"
									placeholder="이름을 입력해주세요."
									onChange={onChangeUsername}
									required
								/>
							</div>
							<div>
								<Input
									type="email"
									defaultValue={email}
									text="이메일*"
									placeholder="ID@gmail.com"
									onChange={onChangeEamilCheck}
									required
								/>
								{emailError && <ErrorMsg errmsg="이메일 형식을 다시 확인해주세요." />}
							</div>
							<div>
								<Input
									type="password"
									defaultValue={password1}
									text="비밀번호*"
									placeholder="영문, 숫자, 특수문자 조합 8~15자"
									onChange={onChangePasswordExp}
									required
								/>
								{passwordExpError && (
									<ErrorMsg errmsg="비밀번호 조합은 영문, 숫자, 특수문자 조합 8~15자 입니다." />
								)}
							</div>
							<div>
								<Input
									type="password"
									defaultValue={password2}
									text="비밀번호 확인*"
									placeholder="비밀번호를 한번 더 입력해주세요."
									onChange={onChangePasswordCheck}
									required
								/>
								{passwordError && <ErrorMsg errmsg="비밀번호가 일치하지 않습니다." />}
							</div>
						</AuthInfoContent>
					</AuthContent>

					<ButtonGroup>
						<Button $submit text="다음" />
						<Link to="/login">
							<Button text="취소" variant="cancel" />
						</Link>
					</ButtonGroup>
				</FormWrapper>
				{/* {isOpen ? <Modal text="필수 항목을 입력해주세요." /> : null} */}
			</InnerWrapper>
		</AuthLayout>
	);
};
export default SignUpInfoInput;
