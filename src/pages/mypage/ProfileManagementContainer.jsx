import styled from 'styled-components';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { axiosTokenFormPut, axiosTokenGet, axiosTokenPut } from 'utils/AxiosUtils';
import { Button, ButtonGroup } from 'components/common/Button';
import { message } from 'antd';
import dummyMyImage from '../../assets/Mask_group.svg';

const MyProfileContent = styled.div`
	display: flex;
	flex-direction: column;
	gap: 3rem;
	padding: 4rem 4rem 3rem;
	border: 0.1rem solid #cfcfcf;
	border-radius: 0.8rem;
`;

const ProfileInfoWrpper = styled.div`
	display: flex;
	align-items: center;
	gap: 2rem;
	& > * {
		font-size: 1.6rem;
	}
`;
const ProfileInfoTitle = styled.label`
	flex: 1;
	color: #000;
	font-weight: 400;
	white-space: nowrap;
`;
const ProfileInfoValue = styled.input`
	flex: 3;
	padding: 0 2rem;
	height: 4rem;
	border: 0.1rem solid #cfcfcf;
	border-radius: 0.8rem;
	color: #959696;
	font-weight: 300;
`;

const ProfileInfoValueText = styled.span`
	flex: 3.4;
	color: #959696;
	font-weight: 300;
`;

const ProfileInfoChangeText = styled.span`
	color: #959696;
	font-size: 1.4rem;
	font-weight: 300;
`;

const ProfileManagementContainer = () => {
	const navigate = useNavigate();
	const [user, setUser] = useState({
		username: '',
		email: '',
		latest: '',
		img_link: dummyMyImage,
	});
	const { username, email, latest, img_link } = user;
	const [messageApi, contextHolder] = message.useMessage();
	let LastChangeDate = latest.replace('T', ' ').split('.', 1).join('');
	const alert = async (type, content) => {
		return messageApi.open({
			type: type,
			content: content,
		});
	};
	const userInfo = useCallback(async () => {
		const data = await axiosTokenGet('/users/mypage');
		setUser(data);
	}, []);

	const onChange = e => {
		const { value, name } = e.target;

		setUser({
			...user,
			[name]: value,
		});
	};

	// 프로필 이미지
	const [profileImage, setProfileImage] = useState(img_link);
	const [imagesrc, setimagesrc] = useState();
	const formData = new FormData();
	const profileImgFileInput = useRef(null);

	const profileChange = async e => {
		setimagesrc(e.target.files[0]);
		if (e.target.files[0]) {
			setProfileImage(e.target.files[0]);
		} else {
			// 업로드 취소 시 기본 더미 이미지
			setProfileImage(profileImage);
			return;
		}
		const reader = new FileReader();
		reader.onload = () => {
			if (reader.readyState === 2) {
				setProfileImage(reader.result);
			}
		};
		reader.readAsDataURL(e.target.files[0]);
	};

	// 기본 프로필 이미지
	const onDefaultImage = () => {
		setProfileImage(dummyMyImage);
	};

	// 프로필 수정 완
	const onUpdateProfile = useCallback(async () => {
		try {
			formData.append('file', imagesrc);
			formData.append('username', user.username);
			const res = await axiosTokenFormPut(
				`/users/update_mypage?username=${user.username}`,
				formData,
			);

			if (res) {
				await alert('success', '수정이 완료되었습니다.');
				window.location.replace('/my/profile');
			}
		} catch (error) {
			console.error(error);
		}
	}, [formData, user.username, imagesrc]);

	const onCancle = () => {
		if (window.confirm('변경사항이 사라집니다.')) {
			navigate(-1);
		}
	};

	useEffect(() => {
		userInfo();
	}, [userInfo]);

	return (
		<>
			{contextHolder}
			<MyProfileContent>
				<form id="profileEditForm" style={{ display: 'flex', gap: '3rem' }}>
					<div
						style={{
							flex: 0.9,
							display: 'flex',
							alignItems: 'center',
							flexDirection: 'column',
							padding: '1rem',
							borderRight: '.1rem solid #cfcfcf',
						}}
					>
						<label htmlFor="ex_file">
							<img
								style={{
									margin: '0 auto',
									display: 'block',
									width: '8rem',
									height: '8rem',
									borderRadius: '50%',
									cursor: 'pointer',
								}}
								src={profileImage}
								alt="proifle change"
								onClick={() => {
									profileImgFileInput.current.click();
								}}
							/>
							<input
								type="file"
								accept="image/*"
								onChange={profileChange}
								ref={profileImgFileInput}
								name="profile_img"
								style={{ display: 'none' }}
							/>
							<span
								style={{
									display: 'block',
									paddingTop: '1rem',
									fontSize: '1.3rem',
									fontWeight: '500',
									textAlign: 'center',
								}}
							>
								프로필 변경
							</span>
						</label>
						<button
							style={{
								marginTop: '1.2rem',
								padding: '.8rem .4rem',
								color: '#959696',
								border: '0.1rem solid #cfcfcf',
								borderRadius: '.4rem',
								cursor: 'pointer',
							}}
							onClick={onDefaultImage}
						>
							기본 이미지로 변경
						</button>
					</div>
					<div style={{ flex: 4.4, display: 'flex', flexDirection: 'column', gap: '2rem' }}>
						<ProfileInfoWrpper>
							<ProfileInfoTitle>이름</ProfileInfoTitle>
							<ProfileInfoValue
								name="username"
								defaultValue={username}
								required
								onChange={onChange}
							/>
						</ProfileInfoWrpper>
						<ProfileInfoWrpper>
							<ProfileInfoTitle>이메일</ProfileInfoTitle>
							<ProfileInfoValue name="email" disabled defaultValue={email} onChange={onChange} />
						</ProfileInfoWrpper>
						<ProfileInfoWrpper>
							<ProfileInfoTitle>마케팅 수신동의</ProfileInfoTitle>
							<ProfileInfoValueText>수신거부</ProfileInfoValueText>
						</ProfileInfoWrpper>
					</div>
				</form>
				<ProfileInfoChangeText>최근 수정일 : {LastChangeDate}</ProfileInfoChangeText>
			</MyProfileContent>
			<ButtonGroup style={{ maxWidth: '40rem', margin: '0 auto', paddingTop: '4rem' }}>
				<Button text="프로필 수정 완료" $submit onClick={onUpdateProfile} />
				<Button text="취소" onClick={onCancle} variant="cancel" />
			</ButtonGroup>
		</>
	);
};
export default ProfileManagementContainer;
