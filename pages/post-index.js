import React, { Component } from 'react';
import Layout from '../components/Layout';
import PostIndex from '../components/PostIndex';
import fetch from 'isomorphic-unfetch';
import { Config } from '../config';

class postIndexPage extends Component {
	render() {
		return (
			<Layout>
				<h1>Post Index</h1>
				<PostIndex limit={10} />
			</Layout>
		);
	}
}

export default postIndexPage;
