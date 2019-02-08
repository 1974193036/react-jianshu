import styled from 'styled-components';
import logopic from '../../statics/logo.png';

export const HeaderWrapper = styled.div`
  position: relative;
  height: 58px;
  border-bottom: 1px solid #f0f0f0;
  z-index: 1;
`;

export const Logo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100px;
  height: 56px;
  background: url(${logopic});
  background-size: cover;
`;

export const Nav = styled.div`
  width: 960px;
  height: 100%;
  margin: 0 auto;
`;

export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  &.left {
    float: left
  }
  &.right {
    float: right
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
`;

export const SeachWrapper = styled.div`
  float: left;
  position: relative;
  .zoom {
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    height: 30px;
    border-radius: 15px;
    line-height: 30px;
    text-align: center;
    &.focused {
		  background: #777;
		  color: #fff;
	  }
  }
`;

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 160px;
	height: 38px;
	padding: 0 40px 0 20px;
	margin-top: 9px;
	margin-left: 20px;
	box-sizing: border-box;
	border: none;
	outline: none;
	border-radius: 19px;
	background: #eee;
	font-size: 14px;
	color: #777;
	&::placeholder {
		color: #999;
	}
	&.focused {
		width: 240px;
	}
	// 动画
	&.slide-enter {
		transition: all .4s ease-out;
	}
	&.slide-enter-active {
		width: 240px;
	}
	&.slide-exit {
		transition: all .4s ease-out;
	}
	&.slide-exit-active {
		width: 160px;
	}
`;

export const SearchInfo = styled.div`
  position: absolute;
  left: 0;
  top: 56px;
  width: 240px;
  padding: 0 20px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  background: #fff;
`;

export const SearchInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`;

export const SearchInfoSwitch = styled.span`
  float: right;
  font-size: 13px;
  cursor: pointer;
  .spin {
    display: block;
    float: left
    margin-right: 2px;
    font-size: 12px;
    transition: all .4s ease-in;
    transform: rotate(0deg);
    transform-origin: center center;
  }
`;

export const SearchInfoItem = styled.a`
  display: block;
  float: left;
  margin-right: 20px;
  margin-bottom: 12px;
  line-height: 20px;
  padding: 0 5px;
  border-radius: 3px;
  font-size: 12px;
  border: 1px solid #ddd;
  color: #787878;
`;

export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`;

export const Button = styled.div`
  float: right;
  line-height: 38px;
  margin-top: 9px;
  margin-right: 20px;
  padding: 0 20px;
  border-radius: 19px;
  border: 1px solid #ec6149;
  font-size: 14px;
  &.reg {
    color: #ec6149;
  }
  &.writting {
    color: #fff;
    background: #ec6149;
  }
`;