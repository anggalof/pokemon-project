import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'styled-bootstrap-grid';
import NumberFormat from 'react-number-format';
import styled from 'styled-components';
import { getImageUrl } from '../../utils/formatter/image';
import { SB_ORANGE, SB_PURPLE, SB_RED } from '../../utils/constants/StyleConstants';
import FilmFee from '../../components/FilmFee';
import Rating from '../Movies/Items/Rating';

const ReviewerWrapper = styled.span`
  float: left;
  font-size: 20px;
  margin: 10px 15px;
  @media (max-width: 680px) {
    display: block;
    font-size: 14px;
    margin: 20px 0 20px 12px;
  }
`;
const ImageWrapper = styled.img`
  background: #a0a0a0;
  background-size: cover;
  width: 180px;
  height: 250px;
  float: left;
  @media (max-width: 670px) {
    text-align: center;
    float: none;
  }
`;
const TitleWrapper = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin-top: 3px;
  margin-bottom: 5px;
  float: left;
`;
const Line = styled.div`border-top: 2px solid ${SB_ORANGE};`;
const BadgeWrapper = styled.div`
  padding-top: 5px;
  float: left;
  margin-left: 5px;
  @media (min-width: 680px) {
    width: 10%;
  }
  @media (max-width: 768px) {
    width: 30%;
  }
`;
const DetailWrapper = styled.div`padding: 10px 0;`;
const TitleDetailWrapper = styled.div`
  padding: 5px 0;
  font-weight: bold;
  font-size: 14px;
`;
const ResultData = styled.div`
  padding-top: 5px;
  color: ${SB_PURPLE};
`;
const OverviewWrapper = styled.div`
  margin: 10px;
  padding: 5px;
`;
const TitleOverview = styled.div`
  font-size: 16px;
  font-weight: bold;
`;
const DetailOverview = styled.div`font-size: 14px;`;
const ButtonWrapper = styled.div`
  margin: 0 auto;
  text-align: center;
`;
const ButtonBuy = styled.button`
  display: flex;
  justify-content: center;
  padding: 10px;
  width: 20%;
  @media (max-width: 680px) {
    width: 50%;
  }
`;
const PriceWrapper = styled.div`
  margin: 0 auto;
  text-align: center;
  font-size: 20px;
  padding: 10px 0 0 0;
`;
const LinkHomePage = styled.div`cursor: pointer;`;
class MainContent extends React.Component {
  render() {
    const {
      title,
      voteAverage,
      popularity,
      posterPath,
      genres,
      runtime,
      budget,
      revenue,
      homePage,
      status,
      productionCountries,
      releaseDate,
      overview,
    } = this.props;
    return (
      <div>
        <TitleWrapper>
          {title}
        </TitleWrapper>
        <BadgeWrapper>
          <Rating voteAverage={voteAverage} isLarge />
        </BadgeWrapper>
        <ReviewerWrapper>
          ({popularity})
        </ReviewerWrapper>
        <div className="clearfix" />
        <Line />
        <DetailWrapper>
          <ImageWrapper src={getImageUrl(posterPath, 'original')} alt="poster" />
          <Row>
            <Col md={12}>
              <Row>
                <Col md={4}>
                  <TitleDetailWrapper>
                    GENRE:
                  </TitleDetailWrapper>
                </Col>
                <Col md={8}>
                  <ResultData>
                    {genres.map((item, index) => {
                      let coma = '';
                      if (index > 0) {
                        coma = ', ';
                      }
                      return `${coma}${item.name}`;
                    })}
                  </ResultData>
                </Col>
                <Col md={12}>
                  <Line />
                </Col>
                <Col md={4}>
                  <TitleDetailWrapper>
                    DURASI:
                  </TitleDetailWrapper>
                </Col>
                <Col md={8}>
                  <ResultData style={{ color: SB_RED }}>
                    {runtime} menit
                  </ResultData>
                </Col>
                <Col md={12}>
                  <Line />
                </Col>
                <Col md={4}>
                  <TitleDetailWrapper>
                    BUDGET:
                  </TitleDetailWrapper>
                </Col>
                <Col md={8}>
                  <ResultData>
                    <NumberFormat value={budget} displayType="text" thousandSeparator prefix={'IDR '} />
                  </ResultData>
                </Col>
                <Col md={12}>
                  <Line />
                </Col>
                <Col md={4}>
                  <TitleDetailWrapper>
                    PENDAPATAN:
                  </TitleDetailWrapper>
                </Col>
                <Col md={8}>
                  <ResultData>
                    <NumberFormat value={revenue} displayType="text" thousandSeparator prefix={'IDR '} />
                  </ResultData>
                </Col>
                <Col md={12}>
                  <Line />
                </Col>
                <Col md={4}>
                  <TitleDetailWrapper>
                    BERANDA FILM:
                  </TitleDetailWrapper>
                </Col>
                <Col md={8}>
                  <ResultData>
                    <LinkHomePage onClick={(e) => this.redirectHomePage(e, homePage)}>
                      {homePage}
                    </LinkHomePage>
                  </ResultData>
                </Col>
                <Col md={12}>
                  <Line />
                </Col>
                <Col md={4}>
                  <TitleDetailWrapper>
                    STATUS:
                  </TitleDetailWrapper>
                </Col>
                <Col md={8}>
                  <ResultData>{status}</ResultData>
                </Col>
                <Col md={12}>
                  <Line />
                </Col>
                <Col md={4}>
                  <TitleDetailWrapper>
                    TANGGAL RILIS:
                  </TitleDetailWrapper>
                </Col>
                <Col md={8}>
                  <ResultData>
                    {releaseDate}
                  </ResultData>
                </Col>
                <Col md={12}>
                  <Line />
                </Col>
                <Col md={4}>
                  <TitleDetailWrapper>
                    PRODUKSI:
                  </TitleDetailWrapper>
                </Col>
                <Col md={8}>
                  <ResultData>
                    {productionCountries.map((item, index) => {
                      let coma = '';
                      if (index > 0) {
                        coma = ', ';
                      }
                      return `${coma}${item.name}`;
                    })}
                  </ResultData>
                </Col>
                <Col md={12}>
                  <Line />
                </Col>
              </Row>
            </Col>
          </Row>
        </DetailWrapper>
        <OverviewWrapper>
            <Row>
              <Col md={12}>
                <TitleOverview>
                  Synopsis
                </TitleOverview>
              </Col>
              <Col md={12}>
                <DetailOverview>
                  {overview === '' ? '-' : overview}
                </DetailOverview>
              </Col>
              <Col md={12}>
                <PriceWrapper>
                  <FilmFee voteAverage={voteAverage} />
                </PriceWrapper>
                <ButtonWrapper>
                  <ButtonBuy type="button" className="btn btn-primary btn-lg">BELI</ButtonBuy>
                </ButtonWrapper>
              </Col>
            </Row>
          </OverviewWrapper>
      </div>
    );
  }
}

MainContent.propTypes = {
  title: PropTypes.string,
  voteAverage: PropTypes.number,
  popularity: PropTypes.number,
  posterPath: PropTypes.string,
  genres: PropTypes.array,
  runtime: PropTypes.number,
  budget: PropTypes.number,
  revenue: PropTypes.number,
  homePage: PropTypes.string,
  status: PropTypes.string,
  productionCountries: PropTypes.array,
  releaseDate: PropTypes.string,
  overview: PropTypes.string,
};

export default MainContent;
