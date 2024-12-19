import { memo } from "react";
import "./style.scss";
import { render } from "@testing-library/react";
import featured1 from "../Featured/1.jpg";
import "react-tabs/style/react-tabs.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
const HomePage = () => {
  const FeaturedProducts = {
    all: {
      title: "Toàn bộ",
      products: [
        {
          img: featured1,
          name: "Trái Cây Tồi Nhập Khê",
          price: 200000,
        },
        {
          img: featured1,
          name: "Tráhập Khê",
          price: 200000,
        },
      ],
    },
    freshMeat: {
      title: "Toàn bộ2",
      products: [
        {
          img: featured1,
          name: "Trái Cây Tồi ",
          price: 200000,
        },
      ],
    },
  };

  const renderFeaturedProducts = (data) => {
    const tabList = [];
    const tabPanels = [];

    Object.keys(data).forEach((key, index) => {
      tabList.push(<Tab key={index}>{data[key].title}</Tab>);

      const tabPanel = [];
      data[key].products.forEach((item, j) => {
        tabPanel.push(<div key={j}>{item.name}</div>);
      });
      tabPanels.push(tabPanel);
    });

    return (
      <Tabs>
        <TabList> {tabList}</TabList>

        {tabPanels.map((item, key) => (
          <TabPanel key={key}>
            <div className="row">{item}</div>
          </TabPanel>
        ))}
      </Tabs>
    );
  };

  return (
    <>
      {/* Featured */}
      <div className="container">
        <div className="featured">
          <div className="section-title">
            <h2>Sản Phẩm Nổi bật</h2>
          </div>
          {renderFeaturedProducts(FeaturedProducts)}
        </div>
      </div>
    </>
  );
};

export default memo(HomePage);
