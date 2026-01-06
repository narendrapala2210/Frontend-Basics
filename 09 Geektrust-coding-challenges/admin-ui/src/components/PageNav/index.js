import "./index.css";

const PageNav = (props) => {
  const { btnDetails, onChangeTabItem, isActive } = props;
  const { id, text } = btnDetails;

  const onClickBtn = () => {
    onChangeTabItem(id);
  };
  const activeButton = isActive ? "activeBtn" : "";
  return (
    <button
      onClick={onClickBtn}
      id={id}
      className={`${activeButton} round-dlt`}
      type="button"
    >
      {text}
    </button>
  );
};

export default PageNav;
