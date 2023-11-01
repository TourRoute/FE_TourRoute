import React, { useState, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Pagination } from 'antd';

import Empty from 'components/common/Empty';
import { axiosGet } from 'utils/AxiosUtils';
import { ImgWhether, RecruitmentStatus } from 'components/common/Icon';

const WritingListWrapper = styled.div`
	flex: 3;
`;

const WritingListInner = styled.ul``;
const WritingList = styled.li`
	display: flex;
	gap: 2rem;
	align-items: center;
	padding: 2rem 0;
	border-bottom: 0.1rem solid #cfcfcf;

	&:first-child {
		border-top: 0.1rem solid #cfcfcf;
	}
`;

const WritingListCategory = styled.span`
	font-size: 1.6rem;
	font-weight: 500;
	color: #959696;
`;

const WritingListTitle = styled.div`
	flex: 1;
	display: flex;
	gap: 1rem;
	align-items: center;
	font-size: 1.6rem;

	a {
		width: 45rem;
		color: #000;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
`;

const WritingListDate = styled.span`
	text-align: right;
	color: #959696;
	font-size: 1.6rem;
	font-weight: 400;
`;

const PageContainer = styled.div`
	padding-top: 6rem;
	text-align: center;
`;

const CommunityList = () => {
	const [communityList, setCommunityList] = useState([]);
	const [page, setPage] = useState(1);
	const pageChange = useCallback(
		value => {
			setPage(value);
		},
		[setPage],
	);
	const ListGet = useCallback(async () => {
		const res = await axiosGet('/board/get_board_all');
		setCommunityList(res);
	}, []);

	const test = [
		{
			id: 1,
			title: '자유게시판',
			content:
				'contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent',
			data: '2023-01-22',
		},
		{
			id: 2,
			title: '동행게시판',
			content:
				'contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent',
			data: '2023-01-22',
		},
		{
			id: 3,
			title: '동행게시판',
			content:
				'contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent',
			data: '2023-01-22',
		},
		{
			id: 4,
			title: '동행게시판',
			content:
				'contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent',
			data: '2023-01-22',
		},
		{
			id: 5,
			title: '동행게시판',
			content:
				'contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent',
			data: '2023-01-22',
		},
		{
			id: 6,
			title: '동행게시판',
			content:
				'contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent',
			data: '2023-01-22',
		},
		{
			id: 7,
			title: '동행게시판',
			content:
				'contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent',
			data: '2023-01-22',
		},
		{
			id: 8,
			title: '동행게시판',
			content:
				'contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent',
			data: '2023-01-22',
		},
		{
			id: 9,
			title: '자유게시판',
			content:
				'contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent',
			data: '2023-01-22',
		},
		{
			id: 10,
			title: '자유게시판',
			content:
				'contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent',
			data: '2023-01-22',
		},
		{
			id: 11,
			title: '자유게시판',
			content:
				'contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent',
			data: '2023-01-22',
		},
		{
			id: 12,
			title: '자유게시판',
			content:
				'contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent',
			data: '2023-01-22',
		},
		{
			id: 13,
			title: '동행게시판',
			content:
				'contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent',
			data: '2023-01-22',
		},
	];

	// b_id: 0,
	// username: '',
	// user_email: '',
	// user_img_link: '',
	// title: '',
	// contents: '',
	// category: '',
	// recruitment: '',
	// r_link: '',
	// created_at: '',
	// board_img_link: '',

	console.log(communityList);

	useEffect(() => {
		ListGet();
	}, []);

	return (
		<WritingListWrapper>
			{communityList.length === 0 ? (
				<Empty text="커뮤니티에서 동행인을 구하거나, 자유롭게 글을 작성해보세요!" />
			) : (
				<WritingListInner>
					{communityList.map(list => {
						const { b_id, title, category, recruitment, board_img_link, created_at } = list;
						const data = created_at.split('T', 1);
						return (
							<WritingList key={b_id}>
								{category === 'IS_FREE' ? (
									<WritingListCategory>자유게시판</WritingListCategory>
								) : (
									<WritingListCategory>동행게시판</WritingListCategory>
								)}
								<WritingListTitle>
									<Link>{title}</Link>
									{category === 'IS_ACCOMPANY' ? (
										<RecruitmentStatus statusText={recruitment} />
									) : null}

									{board_img_link === '이미지 파일이 없습니다.' ? null : <ImgWhether />}
								</WritingListTitle>
								<WritingListDate>{data}</WritingListDate>
							</WritingList>
						);
					})}

					<div style={{ fontSize: '20px' }}>page : {page}</div>
					<PageContainer>
						<Pagination defaultCurrent={1} current={page + 1} onChange={pageChange} total={50} />
					</PageContainer>
				</WritingListInner>
			)}
		</WritingListWrapper>
	);
};

export default CommunityList;
