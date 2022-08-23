import { Card, Carousel, List } from "antd";
import { Typography } from 'antd';
import React, { useMemo } from "react";
import FeaturedItem from "../../../../components/Featured/FeaturedItem";
import NewsItem from "../../../../components/News/NewsItem";
const { Title } = Typography;

const contentStyle: React.CSSProperties = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const FeatureList = () => {
  const data = [
    {
      imageUrl: 'https://picsum.photos/300/200',
    },
    {
      imageUrl: 'https://picsum.photos/300/200',
    },
    {
      imageUrl: 'https://picsum.photos/300/200',
    },
    {
      imageUrl: 'https://picsum.photos/300/200',
    }
  ];
  return (
    <>
      <Title level={3} style={{ fontSize: '40px', marginTop: 20 }}>Feature</Title>
      <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={data}
        renderItem={item => {

          { console.log(item) }
          return (
            <List.Item>
              <FeaturedItem isOnlyImage={false} item={item} />
            </List.Item>
          )
        }}
      />
    </>

  )
}
const NewsList = () => {
  const data = [
    {
      imageUrl: 'https://picsum.photos/300/200',
      tag: 'pendragon quest',
      likeAmount: 34,
      title: 'Chapter 1',
      quote: 'So again, once it ...',
      desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores nesciunt sunt rerum officia accusantium sapiente quidem nemo'
    },
    {
      imageUrl: 'https://picsum.photos/300/200',
      tag: 'pendragon quest',
      likeAmount: 34,
      title: 'Chapter 1',
      quote: 'So again, once it ...',
      desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores nesciunt sunt rerum officia accusantium sapiente quidem nemo'
    },
    {
      imageUrl: 'https://picsum.photos/300/200',
      tag: 'pendragon quest',
      likeAmount: 34,
      title: 'Chapter 1',
      quote: 'So again, once it ...',
      desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores nesciunt sunt rerum officia accusantium sapiente quidem nemo'
    },
    {
      imageUrl: 'https://picsum.photos/300/200',
      tag: 'pendragon quest',
      likeAmount: 34,
      title: 'Chapter 1',
      quote: 'So again, once it ...',
      desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores nesciunt sunt rerum officia accusantium sapiente quidem nemo'
    },
  ];
  return (
    <>
      <Title level={3} style={{ fontSize: '40px', marginTop: 20 }}>Cac hoan canh kho khan</Title>
      <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={data}
        renderItem={item => {

          { console.log(item) }
          return (
            <List.Item>
              <NewsItem item={item} alignText={'left'} />
            </List.Item>
          )
        }}
      />
    </>
  )
}

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <div className="container">
        <FeatureList />
        <NewsList />
      </div>
    </>
  );
};

export default Home;
