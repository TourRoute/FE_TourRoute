import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { axiosTokenGet } from 'utils/AxiosUtils';

const MyProfileContent = styled.div`
	display: flex;
	flex-direction: column;
	gap: 3rem;
	padding: 4rem 4rem 2rem;
	border: 0.1rem solid #cfcfcf;
	border-radius: 0.8rem;
`;

const ProfileInfoWrpper = styled.div`
	display: flex;

	& > * {
		font-size: 1.6rem;
	}
`;
const ProfileInfoTitle = styled.span`
	flex: 1;
	color: #000;
	font-weight: 400;
	white-space: nowrap;
`;
const ProfileInfoValue = styled.span`
	flex: 4;
	color: #959696;
	font-weight: 300;
`;

const ProfileInfoChangeText = styled.span`
	color: #959696;
	font-size: 1.4rem;
	font-weight: 300;
`;

const ProfileContainer = () => {
	const [user, setUser] = useState({
		username: '',
		email: '',
		latest: '',
	});
	const { username, email, latest } = user;
	const LastChangeDate = latest.replace('T', ' ').split('.', 1);

	const userInfo = useCallback(async () => {
		const res = await axiosTokenGet('/users/mypage');
		setUser(res);
	}, [setUser]);

	useEffect(() => {
		userInfo();
	}, [userInfo]);

	return (
		<MyProfileContent>
			<ProfileInfoWrpper>
				<ProfileInfoTitle>이름</ProfileInfoTitle>
				<ProfileInfoValue>{username}</ProfileInfoValue>
			</ProfileInfoWrpper>
			<ProfileInfoWrpper>
				<ProfileInfoTitle>이메일</ProfileInfoTitle>
				<ProfileInfoValue>{email}</ProfileInfoValue>
			</ProfileInfoWrpper>
			<ProfileInfoWrpper>
				<ProfileInfoTitle>마케팅 수신동의</ProfileInfoTitle>
				<ProfileInfoValue>수신거부</ProfileInfoValue>
			</ProfileInfoWrpper>
			<ProfileInfoChangeText>최근 수정일 : {LastChangeDate[0]}</ProfileInfoChangeText>
		</MyProfileContent>
	);
};
export default ProfileContainer;
