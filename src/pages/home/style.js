import styled from 'styled-components';

export const HomeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  overflow: hidden;
`;

export const HomeLeft = styled.div`
  width: 625px;
  float: left;
  margin-left: 15px;
  padding-top: 30px;
  .banner-img {
    width: 625px;
    height: 270px;
    border-radius: 4px;
  }
`;

export const HomeRight = styled.div`
  width: 280px;
  float: right;
`;

export const TopWrapper = styled.div`
  padding: 20px 0 10px 0;
  margin-left: -18px;
  border-bottom: 1px solid #f0f0f0; 
  overflow: hidden;
`;

export const TopicItem = styled.div`
  float: left;
  height: 32px;
  line-height: 32px;
  padding-right: 10px;
  margin-left: 18px;
  margin-top: 10px;
  font-size: 14px;
  background: #f7f7f7;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  .top-pic {
    display: block;
    float: left;
    width: 32px;
    height: 32px;
    margin-right: 10px;
  }
`;

export const ListItem = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid #f0f0f0;
  overflow: hidden;
  .pic {
    display: block;
    width: 125px;
    height: 100px;
    float: right;
    border-radius: 10px;
  }
`;

export const ListInfo = styled.div`
  width: 500px;
  float: left;
  .title {
    line-height: 27px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
  .desc {
    line-height: 24px;
    font-size: 13px;
    color: #999;
   }
`;

export const RecommendWrapper = styled.div`
	margin: 30px 0;
	width: 280px;
`;

export const RecommendItem = styled.div`
	width: 280px;
	height: 50px;
	margin-bottom: 5px;
	background: url(${(props) => props.imgUrl}) no-repeat;
	background-size: cover;
`;

export const WriterWrapper = styled.div`
	width: 278px;
	height: 300px;
	line-height: 300px;
	text-align: center;
	border: 1px solid #dcdcdc;
	border-radius: 3px;
`;

export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  margin: 30px;
  line-height: 40px;
  text-align: center;
  background: #a5a5a5;
  color: #fff;
  border-radius: 20px;
  cursor: pointer;
`;

export const BackTop = styled.div`
  position: fixed;
  right: 60px;
  bottom: 60px;
  width: 60px;
  height: 60px;
  line-height: 60px;
  font-size: 13px;
  text-align: center;
  border: 1px solid #ccc;
  cursor: pointer;
`;