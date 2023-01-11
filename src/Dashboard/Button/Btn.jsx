function Btn({ btnName, FUNC, styleBtn, iconName }) {
  return (
    <div>
      <div className={styleBtn} onClick={FUNC}>
        <h2>
          {iconName} {btnName}
        </h2>
      </div>
    </div>
  );
}

export default Btn;
