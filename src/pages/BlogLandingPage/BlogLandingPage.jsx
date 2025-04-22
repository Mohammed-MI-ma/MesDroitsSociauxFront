import React from "react";
import styles from "./BlogLandingPage.module.css";
import BlogCategories from "./BlogCategories/BlogCategories";
import PopularTags from "./PopularTags/PopularTags";
import MainNewsSection from "./MainNewsSection/MainNewsSection";
import AdBanner from "../../components/CoreComponents/AdBanner/AdBanner";
const BlogLandingPage = () => {
  return (
    <main className={styles.mainBlogContainer}>
      <header>
        <BlogCategories />
        <PopularTags />
        <AdBanner />
      </header>
      <MainNewsSection />
      {/*
      <div className="h-[600px] shadow-lg border bg-gray-200"></div>
      <div className="h-[600px] shadow-lg border bg-gray-100 flex">
        <div className="h-full shadow-lg border bg-red flex w-[50%] flex-col">
          <div className="h-[60%] shadow-lg border bg-red flex w-[50%]"></div>
          <div
            className=" shadow-lg border bg-red flex w-[50%]"
            style={{ flex: 1 }}
          ></div>
        </div>

        <div className="h-full shadow-lg border bg-red flex w-[50%]">
          <div className=" shadow-lg border  flex w-[50%] flex-col">
            <div className="h-[50%] border">A1</div>{" "}
            <div className="" style={{ flex: 1 }}>
              A2
            </div>
          </div>
          <div></div>
        </div>
      </div>{" "}
      <div className="flex h-[300px] border">
        <div style={{ width: "25%" }}>qsdqsd</div>{" "}
        <div style={{ width: "25%" }}></div>
        <div style={{ width: "25%" }}></div>
        <div style={{ width: "25%" }}></div>
      </div>{" "}
      <div className="flex h-[300px] border">
        <div style={{ width: "25%" }}>qsdqsd</div>{" "}
        <div style={{ width: "25%" }}></div>
        <div style={{ width: "25%" }}></div>
        <div style={{ width: "25%" }}></div>
      </div>{" "}
      <div className="flex h-[300px] border">
        <div style={{ width: "25%" }}>qsdqsd</div>{" "}
        <div style={{ width: "25%" }}></div>
        <div style={{ width: "25%" }}></div>
        <div style={{ width: "25%" }}></div>
      </div>{" "}
      <div className="flex h-[300px] border">
        <div style={{ width: "25%" }}>qsdqsd</div>{" "}
        <div style={{ width: "25%" }}></div>
        <div style={{ width: "25%" }}></div>
        <div style={{ width: "25%" }}></div>
      </div>
      <Button>Pagination</Button>
      <footer>
        <Button>Load More</Button>
      </footer>*/}
    </main>
  );
};

export default BlogLandingPage;
