import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Avatar, Drawer } from "antd";
import { closeDrawer } from "../../../reducers/applicationService/drawerSlice";
import styles from "./CustomDrawer.module.css";
import { useTranslation } from "react-i18next";
const renderContent = (type, t) => {
  switch (type) {
    case "news":
      return (
        <div>
          <div
            style={{
              height: "50%",

              minHeight: "400px",
              margin: "20px",
              background: "var(--color-primary)",
              borderRadius: "15px",
              position: "relative",
            }}
          >
            <div
              className="flex flex-col gap-5 absolute"
              style={{
                bottom: "0px",
                maxWidth: "50px",
                right: "0px",
                transform: "translate(-10px,-10px)",
              }}
            >
              <Avatar icon={<IoHeartHalf />} className="shadow-lg" />
              <Avatar icon={<AiOutlineComment />} className="shadow-lg" />{" "}
              <Avatar icon={<IoMdShare />} className="shadow-lg" />{" "}
              <Avatar icon={<IoIosSave />} className="shadow-lg" />
            </div>
          </div>
          <div></div>
          <div style={{ margin: "20px" }}>
            {t(
              "Qu'est-ce que le Lorem Ipsum? Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker."
            )}
          </div>
        </div>
      );
    case "profile":
      return (
        <div>
          <h1>👤 Profile Settings</h1>
          <p>Edit your info</p>
        </div>
      );
    default:
      return <p>Default drawer content</p>;
  }
};

const CustomDrawer = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { open, title, placement, contentType } = useSelector(
    (state) => state.drawer
  );

  return (
    <Drawer
      title={title}
      placement={placement}
      onClose={() => dispatch(closeDrawer())}
      open={open}
      closable
      styles={{
        body: { padding: "0px" },
      }}
      height={"calc(100% - 100px)"}
    >
      <div className={styles.scrollContainer}>
        {renderContent(contentType, t)}
      </div>
    </Drawer>
  );
};

export default CustomDrawer;
