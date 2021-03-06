import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { NavLink } from 'react-router-dom';
import './Sidenav.less';

const isTrending = (match, location) => location.pathname.match(/trending/);
const is_Active = (match, location) => location.pathname.match(/active/);
const isNew = (match, location) => location.pathname.match(/created/);
const isWallet = (match, location) => location.pathname.match(/wallet/);
const isHot = (match, location) => location.pathname.match(/hot/);
const isReplies = (match, location) => location.pathname.match(/replies/);
const isPics = (match, location) => location.pathname.match(/pics/);
const isFeed = (match, location) => location.pathname.match(/feed/);

const Sidenav = ({ username }) =>
	<ul className="Sidenav">
		<li>
			<NavLink to="/trending" activeClassName="Sidenav__item--active" exact isActive={isTrending}>
				<i className="iconfont icon-headlines" />
				<FormattedMessage id="trending" defaultMessage="Trending" />
			</NavLink>
		</li>
		<li>
			<NavLink to="/hot" activeClassName="Sidenav__item--active" exact isActive={isHot}>
				<i className="iconfont icon-collection_fill" />
				<FormattedMessage id="hot" defaultMessage="Hot" />
			</NavLink>
		</li>

		{ username ? (
		<li>
			<NavLink to="/feed" activeClassName="Sidenav__item--active" exact isActive={isFeed}>
				<i className="iconfont icon-homepage" />
				<FormattedMessage id="home" defaultMessage="Feed" />
			</NavLink>
		</li>
		) : null}
		<li>
			<NavLink to="/created" activeClassName="Sidenav__item--active" exact isActive={isNew}>
				<i className="iconfont icon-clock" />
				<FormattedMessage id="new" defaultMessage="New" />
			</NavLink>
		</li>
		<li>
			<NavLink to="/active" activeClassName="Sidenav__item--active" exact isActive={is_Active}>
				<i className="iconfont icon-flashlight" />
				<FormattedMessage id="active" defaultMessage="Active" />
			</NavLink>
		</li> 
		<li>
			<NavLink to="/trending/pics" activeClassName="Sidenav__item--active" exact isActive={isPics}>
				<i className="iconfont icon-picture" />
				<FormattedMessage id="pics" defaultMessage="Pictures" />
			</NavLink>
		</li>
		
		{ username ? (
		<li>
			<NavLink to={`/@${username}`}>
				<i className="iconfont icon-mine" />
				<FormattedMessage id="my_profile" defaultMessage="My profile" />
			</NavLink>
		</li>
		) : null}
		{ username ? 
		(
			<li>
				<NavLink to="/replies" activeClassName="Sidenav__item--active" isActive={isReplies}>
					<i className="iconfont icon-eit" />
					<FormattedMessage id="mentions" defaultMessage="Mentions" />
				</NavLink>
			</li>
		) : null
		}
		{ username ? 
		(
			<li>
				<NavLink to="/wallet" activeClassName="Sidenav__item--active" isActive={isWallet}>
					<i className="iconfont icon-wallet" />
					<FormattedMessage id="wallet" defaultMessage="Wallet" />
				</NavLink>
			</li>
		) : null }
		<li>
			<a href="https://exchange.weyoume.io" >
				<i className="iconfont icon-chart" />
				<FormattedMessage id="exchange" defaultMessage="Exchange" />
			</a>
		</li>
		
		<li>
			<div className="floating-label-container">
				<div className="floating-label-positioner">
					<div className="floating-label">
						<span>soon</span>
					</div>
				</div>
			</div>
			<NavLink to="/groups" activeClassName="Sidenav__item--active" isActive={function(){return false}}>
				<i className="iconfont icon-group" />
				<FormattedMessage id="Groups" defaultMessage="Groups" />
			</NavLink>
		</li>
		<li>
			<div className="floating-label-container">
				<div className="floating-label-positioner">
					<div className="floating-label">
						<span>soon</span>
					</div>
				</div>
			</div>
			<NavLink to="/apps" activeClassName="Sidenav__item--active" isActive={function(){return false}}>
				{/* <i className="iconfont icon-manage" /> */}
				<i className="iconfont icon-mobilephone_fill" />
				<FormattedMessage id="apps" defaultMessage="Apps" />
			</NavLink>
		</li>
		<li>
			<div className="floating-label-container">
				<div className="floating-label-positioner">
					<div className="floating-label">
						<span>soon</span>
					</div>
				</div>
			</div>
			<NavLink to="/marketplace" activeClassName="Sidenav__item--active" isActive={function(){return false}}>
				<i className="iconfont icon-shop_fill" />
				<FormattedMessage id="marketplace" defaultMessage="Marketplace" />
			</NavLink>
		</li>
		<li>
			<div className="floating-label-container">
				<div className="floating-label-positioner">
					<div className="floating-label">
						<span>soon</span>
					</div>
				</div>
			</div>
			<NavLink to="/events" activeClassName="Sidenav__item--active" isActive={function(){return false}}>
				<i className="iconfont icon-remind_fill" />
				<FormattedMessage id="events" defaultMessage="Events" />
			</NavLink>
		</li>
		<li>
			<div className="floating-label-container">
				<div className="floating-label-positioner">
					<div className="floating-label">
						<span>soon</span>
					</div>
				</div>
			</div>
			<NavLink to="/boards" activeClassName="Sidenav__item--active" isActive={function(){return false}}>
				<i className="iconfont icon-barrage" />
				<FormattedMessage id="boards" defaultMessage="Boards" />
			</NavLink>
		</li>
		<li>
			<div className="floating-label-container">
				<div className="floating-label-positioner">
					<div className="floating-label">
						<span>soon</span>
					</div>
				</div>
			</div>
			<NavLink to="/feeds" activeClassName="Sidenav__item--active" isActive={function(){return false}}>
				<i className="iconfont icon-keyboard" />
				<FormattedMessage id="feeds" defaultMessage="Feeds" />
			</NavLink>
		</li>
		<li>
			<div className="floating-label-container">
				<div className="floating-label-positioner">
					<div className="floating-label">
						<span>soon</span>
					</div>
				</div>
			</div>
			<NavLink to="/messenger" activeClassName="Sidenav__item--active" isActive={function(){return false}}>
				<i className="iconfont icon-interactive_fill" />
				<FormattedMessage id="messenger" defaultMessage="Messenger" />
			</NavLink>
		</li>
		<li>
			<div className="floating-label-container">
				<div className="floating-label-positioner">
					<div className="floating-label">
						<span>soon</span>
					</div>
				</div>
			</div>
			<NavLink to="/network" activeClassName="Sidenav__item--active" isActive={function(){return false}}>
				<i className="iconfont icon-share" />
				<FormattedMessage id="network" defaultMessage="Network" />
			</NavLink>
		</li>
	</ul>
		;

Sidenav.propTypes = {
  username: PropTypes.string,
};

Sidenav.defaultProps = {
  username: undefined,
};

export default Sidenav;
