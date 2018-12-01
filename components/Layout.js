import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import PostIndex from './PostIndex';
const layoutStyle = {
	margin: 20,
	padding: 20
};
const Main = styled.main`
	display: grid;
	grid-template-columns: 70%, 30%;
`;
const Layout = props => (
	<div style={layoutStyle}>
		<Header />

		<Main>
			<section>{props.children}</section>
			<aside>
				<PostIndex />
			</aside>
		</Main>
		<Footer />
	</div>
);

export default Layout;
