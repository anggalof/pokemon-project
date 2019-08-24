import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'styled-bootstrap-grid';
import NumberFormat from 'react-number-format';

import {
    ImageWrapper,
    TitleWrapper,
    Line,
    DetailWrapper,
    TitleDetailWrapper,
    ResultData,
    OverviewWrapper,
    TitleOverview,
    DetailOverview,
    ButtonWrapper,
    ButtonBuy,
    LinkHomePage
} from './styles';

class MainContent extends React.Component {
  render() {
    const {
        name,
        status,
        abilities,
        image,
        types,
        weight,
	} = this.props;
	console.log('status', status);
	console.log('abilities', abilities);
	console.log('image', image);
	console.log('types', types);
	console.log('weight', weight);
    return (
      <div>
        <TitleWrapper>{name}</TitleWrapper>
        <Line />
        <DetailWrapper>
          <ImageWrapper src={image.front_default} alt="poster" />
          <Row>
            <Col md={12}>
              <Row>
                <Col md={4}>
                  <TitleDetailWrapper>
                    wdhabhdjaw
                  </TitleDetailWrapper>
                </Col>
                <Col md={8}>
                  <ResultData>
                    dwadlkanwlda
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
                  <ResultData>
                    wdadaw menit
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
                    <NumberFormat value="1093000" displayType="text" thousandSeparator prefix={'IDR '} />
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
                    <NumberFormat value="9021900" displayType="text" thousandSeparator prefix={'IDR '} />
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
                    <LinkHomePage>
                      djenwkjnakjdnkja
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
                  <ResultData>dwakdbakwjdbkawdwa</ResultData>
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
                    dlwkadlkawndlkanwlkdaw
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
                    dlkmwalndalkwndlkawdnlaw
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
                  wdklnalwkdnalkwdnlkawd
                </DetailOverview>
              </Col>
              <Col md={12}>
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
  name: PropTypes.string,
  status: PropTypes.array,
  abilities: PropTypes.array,
  types: PropTypes.array,
  image: PropTypes.object,
  weight: PropTypes.number,
};

export default MainContent;
