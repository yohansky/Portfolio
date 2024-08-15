import Header from "../shared/Header";

const BaseLayout = (props) => {
  const { className, children, navClass = "with-bg" } = props;
  return (
    <div className="layout-container">
      <Header className={navClass} />
      <main className={`cover ${className}`}>
        <div className="wrapper">{children}</div>
      </main>
    </div>
  );
};

export default BaseLayout;
