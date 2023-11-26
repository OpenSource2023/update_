import React from "react";
import Navbar from "../Navbar";
import { Image, Divider, Container, Button, Header, Segment, Grid } from 'semantic-ui-react';
import './home.css';
import { Link } from "react-router-dom";

function HOME() {
  return (
    <div>
      <Navbar />

      <Segment style={{ padding: '8em 0em', paddingBottom: '19em', background: 'rgb(32, 32, 32)', textAlign: 'center' }} vertical>
        <Grid.Row container stackable verticalAlign='middle' style={{ color: 'white' }}>
          <p style={{ fontSize: '65px' }}>
            쾌적한 나만의 공간을 위해
          </p>
          <p style={{ fontSize: '30px', marginTop: '1em' }}>
            공기정화 식물 추천 서비스
          </p>

          <Link to="/Service" style={{ marginTop: '2em' }}>
            <Button primary size='huge'>
              시작하기
            </Button>
          </Link>
        </Grid.Row>
      </Segment>

      <Segment style={{ padding: '8em 0em', paddingBottom: '19em' }} vertical>
        <Grid container stackable verticalAlign='middle'>
          <Grid.Row>
            <Grid.Column width={8}>
              <Header as='h3' className="hder2" style={{ fontSize: '2em', marginBottom: '-1em' }}>
                알고리즘을 이용하세요
              </Header>
              <p style={{ fontSize: '1.33em', marginBottom: '3em' }} >
                '싱물'은 당신의 기호와 필요에 따라 가장 적합한 식물을 추천해줍니다. 이는 단순히 식물을 고르는 것 이상으로, 공간을 아름답게 꾸미고 건강한 환경을 조성하는 일에 도움을 줄 것입니다.
              </p>
              <Header as='h3' className="hder2" style={{ fontSize: '2em', marginBottom: '-1em' }}>
                나만의 반려 식물
              </Header>
              <p style={{ fontSize: '1.33em' }} >
                당신의 공간에 새로운 생명을 불어넣어 줄 친구를 찾고 계신가요? 숨 쉬는 녹색의 아름다움을 통해 매일매일 소소한 행복을 발견하세요. 지금, 나만의 반려 식물과 함께 특별한 연대감을 경험해보세요.
              </p>
            </Grid.Column>
            <Grid.Column floated='right' width={6}>
              <Image bordered rounded size='large' src='/images/wireframe/image.png' disabled />
            </Grid.Column>
          </Grid.Row>
          
        </Grid>
      </Segment>

      <Segment style={{ padding: '0em' }} vertical>
        <Grid celled='internally' columns='equal' stackable >
          <Grid.Row textAlign='center'>
            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
              <Header className="hder2" as='h3' style={{ fontSize: '2em' }}>
                "싱물이란?"
              </Header>
              <p style={{ fontSize: '1.33em' }}>싱싱한 식물의 약자입니다.</p>
            </Grid.Column>
            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
              <Header className="hder2" as='h3' style={{ fontSize: '2em' }}>
                "반려 식물"
              </Header>
              <p style={{ fontSize: '1.33em' }}>
                어쩌면 당신의 삶의 작은 변화를 만날 수 있을 거예요.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment style={{ padding: '8em 0em' }} vertical>
        <Container text>
          <Header className="hder2" as='h3' style={{ fontSize: '2em' }}>
            Benefits
          </Header>
          <p style={{ fontSize: '1.33em' }}>
            식물들은 광합성 과정을 통해 공기 중의 유해 물질들을 흡수하고, 깨끗한 산소를 배출합니다. 
            이는 특히 단열이 잘 되는 현대의 집안 공기 질을 개선하는데 큰 도움이 됩니다. 그리고 식물들은 물의 증발을 통해 주변 환경의 습도를 조절합니다. 
            적절한 실내 습도는 호흡기 건강을 유지하는 데 중요하며, 특히 건조한 계절이나 환경에서 이점을 제공합니다.
          </p>

          <Divider
            as='h4'
            className='hder2'
            horizontal
            style={{ margin: '3em 0em', textTransform: 'uppercase' }}
          >
            <a href='/'>AND</a>
          </Divider>

          <p style={{ fontSize: '1.33em' }}>
            식물은 자연스러운 아름다움을 실내에 더해주어, 살아 있는 인테리어 소품으로써 공간의 분위기를 한층 업그레이드시킬 수 있습니다.
            식물이 제공하는 산소와 습도, 그리고 유해물질 제거 기능은 전반적인 건강을 증진시키는 데 기여합니다. 호흡기 건강은 물론, 전체적인 신체 건강에 긍정적인 영향을 미칩니다.
          </p>
        </Container>
      </Segment>

      <footer className="footer">
        <p className="footer-by">
          made by{" "}
          OpenSource
        </p>
      </footer>
    </div>
  );
}

export default HOME;
