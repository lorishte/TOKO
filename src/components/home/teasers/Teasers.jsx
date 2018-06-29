import React from 'react';
Teasers
class Teasers extends React.Component {

	constructor (props) {
		super(props);
	}

	render () {
		return (
			<div id="teasers" className="container bg-white">

				<article className="article">
					<span className="image-container">
						<img src="https://f4yb8q.db.files.1drv.com/y4mKldHM2zM0apQQXtcI9Ncg9uVqXGbIU1ZfneiwGDrI4KGHRBYay01mIdfFbYwPBp35BCrZ2QqlRHMWseo1uAYbBu-AKLYZ-dM2Eht5IC3SA98KdQacGFlDbzOXiR2GPTcCQCPWEtNZLXxFf4uo9hQ1i32Z64k5JeB8tfsBvAiSzs7Z62IagV9UxYnSWOVCOUkjkpqNnQJ6Z7Zcp_8DuJaeg?width=650&height=392&cropmode=none"/>
					</span>
					<h2 className="article-headline">Решения за офиси</h2>
				</article>

				<article className="article">
					<span className="image-container">
						<img src="https://4zzmqw.db.files.1drv.com/y4mcJ4P-IjY6Qn1EGDxtSrExS-vFJ1k7XF2ztWQ0N6-W-vkVK6e93Shi8sNGhOWa0fDc5x-DXcT-zGiY3mHsqmHRU5yUTU3NxsJN5pz-zFgFOXMFd0CPs4mXyY5lCswKBHv6Z7xodvyh_uUfEjd-MZSFmV1dP99WOOGdyhK5RAAxC-A7J_L2xdZP7H9Hj1eKNmfnqSoJmrcuPCO8X_x7zUKgA?width=2500&height=1477&cropmode=none"/>
					</span>
					<h2 className="article-headline">Решения за големи обекти</h2>
				</article>
			</div>
		);
	}
}

export default Teasers;
